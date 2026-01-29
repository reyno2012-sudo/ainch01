'use client'; // 客户端组件标识（Next.js 13+ 必加）

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// 引入你的眼睛启动页和仪表盘组件（需自行实现基础布局）
import EyeSplash from './EyeSplash';
import Dashboard from './Dashboard';

export default function Home() {
  // 核心状态：控制启动页/仪表盘显示切换
  const [isSplashActive, setIsSplashActive] = useState(true);

  // 动画配置：淡入淡出基础参数（可按需调整）
  const fadeAnimation = {
    initial: { opacity: 0 }, // 初始状态：完全透明
    animate: { opacity: 1 }, // 动画状态：完全不透明
    exit: { opacity: 0 },    // 退出状态：完全透明
    transition: { duration: 0.6, ease: "easeInOut" as const } // 过渡时长+缓动效果
  };

  return (
    <div className="min-h-screen w-full bg-black m-0 p-0">
      {/* AnimatePresence：检测组件挂载/卸载，触发退出动画（核心） */}
      <AnimatePresence mode="wait">
        {isSplashActive ? (
          // 眼睛启动页：带淡入淡出动画，点击触发切换
          <motion.div
            key="splash-screen" // 必加唯一key：AnimatePresence 识别组件
            {...fadeAnimation}  // 继承淡入淡出配置
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <EyeSplash onClose={() => setIsSplashActive(false)} />
          </motion.div>
        ) : (
          // 仪表盘：带淡入淡出动画，覆盖整个视口
          <motion.div
            key="dashboard" // 必加唯一key：与启动页区分
            {...fadeAnimation}
            className="w-full h-full"
          >
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
