import * as schedule from 'node-schedule';
import * as child_process from 'child_process';
import * as path from 'path';

// 定义定时任务规则：每天早上9点
const rule = new schedule.RecurrenceRule();
rule.hour = 9;
rule.minute = 0;
rule.tz = 'Asia/Shanghai'; // 设置时区为上海

// 执行更新脚本的函数
function runUpdateScript() {
    console.log('开始执行AI日报更新任务...');
    
    // 在ES模块中获取当前文件目录
    const currentDir = path.dirname(new URL(import.meta.url).pathname);
    // 处理Windows路径问题
    const normalizedDir = currentDir.replace(/^\/([A-Za-z]):\//, '$1:/');
    const scriptPath = path.join(normalizedDir, 'update-ai-daily.ts');
    
    // 使用ts-node执行TypeScript脚本
    const child = child_process.exec(`npx ts-node "${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error('执行更新脚本失败:', error);
            return;
        }
        
        console.log('更新脚本输出:', stdout);
        if (stderr) {
            console.error('更新脚本错误输出:', stderr);
        }
        
        console.log('AI日报更新任务执行完成');
    });
    
    child.on('exit', (code) => {
        console.log(`更新脚本退出码: ${code}`);
    });
}

// 设置定时任务
const job = schedule.scheduleJob(rule, () => {
    console.log('触发定时AI日报更新任务');
    runUpdateScript();
});

// 立即执行一次更新（测试用）
runUpdateScript();

console.log('AI日报定时更新任务已启动，每天早上9点自动执行');
console.log('当前定时任务规则:', JSON.stringify(rule, null, 2));

// 保持进程运行
process.stdin.resume();