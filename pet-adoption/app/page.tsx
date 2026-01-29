import Link from 'next/link'
import Navbar from '@/components/Navbar'

/**
 * 首页组件 (Home Page Component)
 * 
 * 功能：展示宠物领养平台的主登陆页面
 * 包含以下主要区域：
 * - Hero 区域：带有主标题和 CTA 按钮的欢迎横幅
 * - 特色功能区：展示平台的三大核心优势
 * - 统计数据区：显示平台关键数据（成功领养数、待领养宠物数等）
 * - 行动号召区：引导用户浏览宠物列表
 * - 页脚：包含导航链接和社交媒体图标
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 导航栏组件 */}
      <Navbar />

      {/* ========================================
          Hero 区域 - 首屏欢迎横幅
          功能：吸引用户注意力，展示平台核心价值
          ======================================== */}
      <section className="relative overflow-hidden">
        {/* 背景渐变装饰层 */}
        <div className="background-overlay-primary"></div>

        {/* 主要内容容器 */}
        <div className="page-container hero-padding relative z-10">
          <div className="content-center">
            {/* 主图标 - 带浮动动画的宠物爪印 emoji */}
            <div className="mb-8 animate-float">
              <span className="text-8xl md:text-9xl">🐾</span>
            </div>

            {/* 主标题 - 突出显示核心价值主张 */}
            <h1 className="heading-hero">
              给它们一个
              <span className="text-gradient-primary"> 温暖的家</span>
            </h1>

            {/* 副标题 - 详细说明平台使命 */}
            <p className="text-lead">
              连接待领养宠物与充满爱的家庭,让每个生命都被珍惜
            </p>

            {/* 主要行动按钮组 - 引导用户进入核心功能 */}
            <div className="button-group">
              {/* 主要 CTA：浏览宠物列表 */}
              <Link href="/pets" className="btn-primary">
                浏览可领养宠物
              </Link>

              {/* 次要 CTA：发布领养信息 */}
              <Link href="/publish" className="btn-secondary">
                发布待领养信息
              </Link>
            </div>
          </div>
        </div>

        {/* 装饰性浮动 emoji - 增强视觉趣味性 */}
        <div className="decorative-emoji top-20 left-10">🐕</div>
        <div className="decorative-emoji bottom-20 right-10" style={{ animationDelay: '1s' }}>🐈</div>
        <div className="decorative-emoji top-1/2 left-20 text-5xl opacity-15" style={{ animationDelay: '2s' }}>🐇</div>
      </section>

      {/* ========================================
          特色功能区 - 展示平台核心优势
          功能：通过三张卡片展示平台的独特价值
          ======================================== */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="page-container">
          {/* 区域标题 */}
          <h2 className="heading-section">
            为什么选择 <span className="text-gradient-primary">PawsHome</span>
          </h2>

          {/* 特色卡片网格 - 响应式三列布局 */}
          <div className="grid-features">

            {/* 特色 1: 安全可靠 */}
            <div className="feature-card">
              {/* 图标圆圈 - 使用主色渐变 */}
              <div className="icon-circle-primary">
                ❤️
              </div>
              <h3 className="text-2xl font-bold mb-4">安全可靠</h3>
              <p className="text-feature-description">
                严格的审核流程,确保每一只待领养宠物都有详细的健康记录和背景信息
              </p>
            </div>

            {/* 特色 2: 智能匹配 */}
            <div className="feature-card">
              {/* 图标圆圈 - 使用强调色渐变 */}
              <div className="icon-circle-accent">
                🔍
              </div>
              <h3 className="text-2xl font-bold mb-4">智能匹配</h3>
              <p className="text-feature-description">
                根据您的生活方式和偏好,为您推荐最合适的毛孩子
              </p>
            </div>

            {/* 特色 3: 全程支持 */}
            <div className="feature-card">
              {/* 图标圆圈 - 使用成功色渐变 */}
              <div className="icon-circle-success">
                💬
              </div>
              <h3 className="text-2xl font-bold mb-4">全程支持</h3>
              <p className="text-feature-description">
                从申请到领养成功,提供一对一沟通渠道和后续关怀指导
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          统计数据区 - 展示平台关键指标
          功能：通过数据建立信任和权威性
          ======================================== */}
      <section className="section-padding">
        <div className="page-container">
          {/* 统计数据网格 - 响应式四列布局 */}
          <div className="grid-stats">

            {/* 统计项 1: 成功领养数 */}
            <div className="animate-fade-in">
              <div className="stat-number">
                1,234
              </div>
              <div className="text-muted font-medium">成功领养</div>
            </div>

            {/* 统计项 2: 待领养宠物数 - 延迟动画 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number">
                567
              </div>
              <div className="text-muted font-medium">待领养宠物</div>
            </div>

            {/* 统计项 3: 注册用户数 - 延迟动画 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number">
                3,456
              </div>
              <div className="text-muted font-medium">注册用户</div>
            </div>

            {/* 统计项 4: 满意度 - 延迟动画 */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number">
                98%
              </div>
              <div className="text-muted font-medium">满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          行动号召区 (CTA Section)
          功能：最后推动用户采取行动
          ======================================== */}
      <section className="section-padding relative overflow-hidden">
        {/* 背景渐变装饰层 - 使用强调色 */}
        <div className="background-overlay-accent"></div>

        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* CTA 标题 */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              准备好迎接新家庭成员了吗？
            </h2>

            {/* CTA 描述文字 */}
            <p className="text-xl mb-10 opacity-80">
              开始浏览我们的宠物档案,找到与您心灵相通的那个Ta
            </p>

            {/* CTA 主按钮 */}
            <Link href="/pets" className="btn-cta-large">
              立即开始 →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          页脚 (Footer)
          功能：提供导航链接、帮助资源和社交媒体入口
          ======================================== */}
      <footer className="bg-[var(--muted)] border-t border-[var(--border)] py-12">
        <div className="page-container">
          {/* 页脚内容网格 - 响应式四列布局 */}
          <div className="grid-footer">

            {/* 第一列: 品牌和 Logo */}
            <div>
              {/* Logo 区域 */}
              <div className="flex items-center horizontal-gap-small mb-4">
                {/* Logo 图标 */}
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-2xl">🐾</span>
                </div>
                {/* 品牌名称 */}
                <span className="text-xl font-bold">PawsHome</span>
              </div>
              {/* 品牌标语 */}
              <p className="text-muted">
                让每个毛孩子都能找到温暖的家
              </p>
            </div>

            {/* 第二列: 快速链接 */}
            <div>
              <h4 className="font-bold mb-4">快速链接</h4>
              <div className="vertical-gap-regular">
                <Link href="/pets" className="footer-link">
                  浏览宠物
                </Link>
                <Link href="/about" className="footer-link">
                  关于我们
                </Link>
                <Link href="/contact" className="footer-link">
                  联系我们
                </Link>
              </div>
            </div>

            {/* 第三列: 帮助中心链接 */}
            <div>
              <h4 className="font-bold mb-4">帮助中心</h4>
              <div className="vertical-gap-regular">
                <Link href="/faq" className="footer-link">
                  常见问题
                </Link>
                <Link href="/adoption-guide" className="footer-link">
                  领养指南
                </Link>
                <Link href="/support" className="footer-link">
                  客户支持
                </Link>
              </div>
            </div>

            {/* 第四列: 社交媒体 */}
            <div>
              <h4 className="font-bold mb-4">关注我们</h4>
              {/* 社交媒体图标组 */}
              <div className="flex horizontal-gap-regular">
                {/* Facebook 图标 */}
                <a href="#" className="social-icon bg-[var(--primary)]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Twitter 图标 */}
                <a href="#" className="social-icon bg-[var(--secondary)]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 版权信息区域 */}
          <div className="border-t border-[var(--border)] pt-8 text-center text-muted">
            <p>&copy; 2026 PawsHome. 用爱守护每一个生命 ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
