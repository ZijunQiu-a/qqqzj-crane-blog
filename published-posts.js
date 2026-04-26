window.PUBLISHED_POSTS = {
  "growth": [
    {
      "id": "news/2026-04-25-homepage-reading-polish.md",
      "slug": "2026-04-25-homepage-reading-polish",
      "source": "post",
      "kind": "growth",
      "title": "首页和阅读体验继续打磨",
      "publishedIndex": 0,
      "stage": "Site Update",
      "tag": "建站",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<p>今天继续把 qqqzj@Crane 的首页和阅读体验往更顺手的方向调整了一版。重点不是增加大功能，而是处理那些一打开页面就能感受到的细节：位置、层级、宽度、字号和交互是否舒服。</p><h4 id=\"首页更像入口了\">首页更像入口了<a class=\"heading-anchor\" href=\"#首页更像入口了\" data-heading-id=\"首页更像入口了\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>首页现在会展示最近几篇文章，读者不用先在各个栏目里找，可以直接从 Latest Posts 进入最新内容。原本偏工具感的快速入口和文章数量统计被收掉了，页面第一屏更清爽，视觉重点也更集中。</p><p>搜索也挪到了顶部导航里。它变成一个更小、更圆润的输入条，点击整块区域就能输入；桌面端限制了宽度，避免全屏时把右侧导航挤到一起，手机端则保持一整行的可点区域。</p><h4 id=\"导航和主题切换更轻\">导航和主题切换更轻<a class=\"heading-anchor\" href=\"#导航和主题切换更轻\" data-heading-id=\"导航和主题切换更轻\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>白天、黑夜、自动模式的切换入口重新压缩了尺寸，手机端只保留一个小按钮，桌面端也修正了文字和小圆图标的对齐。现在“白天”不会被压成奇怪的小圈，主题菜单也不会盖住搜索层级。</p><p>顶部头像在白天和黑夜素材切换时对齐得更稳，减少了视觉跳动。点击左上角头像也会回到首页顶部，作为一个更自然的返回入口。</p><h4 id=\"文章阅读更少打扰\">文章阅读更少打扰<a class=\"heading-anchor\" href=\"#文章阅读更少打扰\" data-heading-id=\"文章阅读更少打扰\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>文章详情页的目录逻辑统一成侧边抽屉。电脑端和手机端现在都可以用半圆把手呼出目录，默认收起时尽量不挡正文，打开后再承担导航功能。</p><p>首页文章卡片也做了细节调整：圆角更大，左侧渐变条贴合卡片高度，Read more 标签更小一些。整体保留了一点装饰感，但不再抢正文内容的注意力。</p><h4 id=\"小人和招呼动画\">小人和招呼动画<a class=\"heading-anchor\" href=\"#小人和招呼动画\" data-heading-id=\"小人和招呼动画\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>右下角芙宁娜贴图在桌面端稍微往右移，减少挡住阅读内容的概率；手机端继续保持轻量。进入页面时的“你好呀”改到左上角头像附近，只保留一个小气泡，不再从右下角飞过正文区域。</p><p>这轮调整之后，网站的功能没有变复杂，但使用时的“摩擦”少了很多。后面继续加内容时，首页、搜索、目录和主题切换这些基础体验会更稳定。</p>",
      "headings": [
        {
          "id": "首页更像入口了",
          "title": "首页更像入口了",
          "level": 4
        },
        {
          "id": "导航和主题切换更轻",
          "title": "导航和主题切换更轻",
          "level": 4
        },
        {
          "id": "文章阅读更少打扰",
          "title": "文章阅读更少打扰",
          "level": 4
        },
        {
          "id": "小人和招呼动画",
          "title": "小人和招呼动画",
          "level": 4
        }
      ],
      "excerpt": "今天继续把 qqqzj@Crane 的首页和阅读体验往更顺手的方向调整了一版。重点不是增加大功能，而是处理那些一打开页面就能感受到的细节：位置、层级、宽度、字号和交互是否舒服。 首页更像入口了 首页现在会展示最近几篇文章，读者不用先在各个栏...",
      "readingMinutes": 2,
      "createdAt": "2026-04-25T00:00:00.000Z"
    },
    {
      "id": "news/2026-04-25-site-update-roundup.md",
      "slug": "2026-04-25-site-update-roundup",
      "source": "post",
      "kind": "growth",
      "title": "网站阶段更新：从内容归档到阅读体验",
      "publishedIndex": 1,
      "stage": "Site Update",
      "tag": "建站",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<p>这两天 qqqzj@Crane 做了一轮比较密集的维护，已经不只是“能放文章”的第一版了。现在它更像一个可以长期写、长期查、长期扩展的个人学习档案。</p><p>这次主要更新有几块。</p><h4 id=\"内容和发布方式\">内容和发布方式<a class=\"heading-anchor\" href=\"#内容和发布方式\" data-heading-id=\"内容和发布方式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>网站现在采用 private 源码仓库和 public 发布仓库分离的方式维护。源码、草稿、Markdown 原文、构建脚本都留在 private 仓库里；public 仓库只放构建后的静态网页文件。</p><p>这样公开访问者看到的是网站本身，而不是整个写作工程。以后新增文章时，只需要在 private 仓库里写 Markdown，再构建发布即可。</p><h4 id=\"文章-附件和预览\">文章、附件和预览<a class=\"heading-anchor\" href=\"#文章-附件和预览\" data-heading-id=\"文章-附件和预览\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>我把数学分析、线性代数、普物实验和普物 I 期中复习资料整理进了 Notes。Markdown 作为正文，PDF 或模板文件作为附件提供下载和预览。</p><p>这对学习笔记很重要：文章不是只展示一小段摘要，而是可以进入详情页完整阅读；需要原文件时，也能直接下载对应 PDF、Markdown 模板或配套 CSS。</p><h4 id=\"阅读体验\">阅读体验<a class=\"heading-anchor\" href=\"#阅读体验\" data-heading-id=\"阅读体验\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>长文章现在有更完整的阅读支持：</p><ul><li>详情页会生成文章目录。</li><li>桌面端目录可以悬浮在侧边，并随着阅读位置高亮当前章节。</li><li>页面顶部有阅读进度条。</li><li>Markdown 支持定理、证明、例题、注意等提示块。</li><li>一些原本写在反引号里的物理公式，也会被识别并交给 MathJax 渲染。</li></ul><p>这些改动主要是为了让数学和物理这种长篇复习提纲更容易读，不会一滚到底就找不到自己在哪。</p><h4 id=\"搜索-分类和归档\">搜索、分类和归档<a class=\"heading-anchor\" href=\"#搜索-分类和归档\" data-heading-id=\"搜索-分类和归档\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>首页的搜索现在不只是搜标题，也会匹配标签、分类、摘要和正文文本。Notes 区会按标签自动生成分栏，比如数学、普物实验、普物 I。</p><p>文章源码也重新整理了目录结构：</p><p>``<code>txt<br />posts/<br />  news/<br />  life/<br />  notes/<br />    math/<br />    physics/<br /></code>``</p><p>以后如果继续写编程、深度学习或其他方向的笔记，也可以继续往 <code>posts/notes/</code> 下面分目录。这样文章变多以后，源码不会堆成一团。</p><h4 id=\"主题和视觉\">主题和视觉<a class=\"heading-anchor\" href=\"#主题和视觉\" data-heading-id=\"主题和视觉\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>网站加入了白天、黑夜、自动三档主题。自动模式会跟随系统深浅色，黑夜模式也重新调整了首屏的可见度，不会把标题和统计卡片压得太暗。</p><p>顶部主题按钮现在默认只显示一个入口，鼠标悬停、键盘聚焦或点击时再展开三个选项。角色图片也预留了真实双形态素材接口：如果以后放入对应的白天/黑夜素材，网站会自动切换；没有素材时就回退到默认图，不用滤镜强行伪装。</p><h4 id=\"seo-和订阅\">SEO 和订阅<a class=\"heading-anchor\" href=\"#seo-和订阅\" data-heading-id=\"seo-和订阅\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>构建脚本现在会生成静态文章详情页、<code>sitemap.xml</code>、<code>rss.xml</code>、<code>robots.txt</code> 和 <code>404.html</code>。首页也会在编译时注入文章预览和链接，让搜索引擎在不运行 JavaScript 的情况下也能读到内容。</p><p>RSS 订阅也已经可用。以后发布新文章时，订阅源会一起更新。</p><h4 id=\"写作工作流\">写作工作流<a class=\"heading-anchor\" href=\"#写作工作流\" data-heading-id=\"写作工作流\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>现在有新文章脚手架，可以用命令快速生成带 front matter 的 Markdown 文件，并自动加入 <code>posts/index.json</code>。脚手架会根据 <code>category</code> 和 <code>tag</code> 自动选择目录，比如数学笔记进入 <code>posts/notes/math/</code>，动态进入 <code>posts/news/</code>。</p><p>这轮更新之后，网站的维护方式清楚了很多：写作、构建、发布、索引、归档都各有位置。接下来要做的事情，就是慢慢把内容写进去，让这个站点真的长成一个属于自己的知识和生活档案。</p>",
      "headings": [
        {
          "id": "内容和发布方式",
          "title": "内容和发布方式",
          "level": 4
        },
        {
          "id": "文章-附件和预览",
          "title": "文章、附件和预览",
          "level": 4
        },
        {
          "id": "阅读体验",
          "title": "阅读体验",
          "level": 4
        },
        {
          "id": "搜索-分类和归档",
          "title": "搜索、分类和归档",
          "level": 4
        },
        {
          "id": "主题和视觉",
          "title": "主题和视觉",
          "level": 4
        },
        {
          "id": "seo-和订阅",
          "title": "SEO 和订阅",
          "level": 4
        },
        {
          "id": "写作工作流",
          "title": "写作工作流",
          "level": 4
        }
      ],
      "excerpt": "这两天 qqqzj@Crane 做了一轮比较密集的维护，已经不只是“能放文章”的第一版了。现在它更像一个可以长期写、长期查、长期扩展的个人学习档案。 这次主要更新有几块。 内容和发布方式 网站现在采用 private 源码仓库和 publi...",
      "readingMinutes": 2,
      "createdAt": "2026-04-25T00:00:00.000Z"
    },
    {
      "id": "news/2026-04-24-first-news.md",
      "slug": "2026-04-24-first-news",
      "source": "post",
      "kind": "growth",
      "title": "完成个人网站第一版",
      "publishedIndex": 2,
      "stage": "Project 项目",
      "tag": "建站",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<p>今天借助 Codex 把 qqqzj@Crane 的第一版搭起来了，感谢 Chatgpt 呜呜呜。</p>",
      "headings": [],
      "excerpt": "今天借助 Codex 把 qqqzj@Crane 的第一版搭起来了，感谢 Chatgpt 呜呜呜。",
      "readingMinutes": 1,
      "createdAt": "2026-04-24T00:00:00.000Z"
    }
  ],
  "notes": [
    {
      "id": "notes/physics/2026-04-24-physics-lab-markdown-template.md",
      "slug": "2026-04-24-physics-lab-markdown-template",
      "source": "post",
      "kind": "notes",
      "title": "普物实验docx模版(❌)markdown(☑️)",
      "publishedIndex": 4,
      "stage": "Notes 笔记",
      "tag": "普物实验",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<p>我弄了这个 Markdown 模版，之后写普物实验报告就不用再被 docx 格式卡住了。</p><p>文件放在这里，直接下载就能用。</p><div class=\"entry-file\"><a class=\"download-button\" href=\"files/2026-04-24-physics-lab-template/电子物理实验报告-模板.md\" download><span>下载实验报告 Markdown 模版</span><small>电子物理实验报告-模板.md</small></a><details class=\"file-preview\"><summary>Preview / 预览</summary><pre><code>&lt;div class=&quot;cover&quot;&gt;\n\n# 物理实验报告\n\n&lt;div class=&quot;cover-group-lg&quot;&gt;\n\n**实验名称：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n**实验桌号：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n**指导教师：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n&lt;/div&gt;\n\n&lt;div class=&quot;cover-group-sm&quot;&gt;\n\n**周次：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n**姓名：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n**学号：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n**实验日期: \\_\\_\\_\\_年\\_\\_\\_\\_月\\_\\_\\_\\_日 星期\\_\\_\\_上/下午**\n\n&lt;/div&gt;\n\n&lt;div class=&quot;cover-footer&quot;&gt;\n\n浙江大学物理实验教学中心\n\n&lt;/div&gt;\n\n&lt;/div&gt;\n\n## 一、预习报告\n\n（注：将已经写好的&quot;物理实验预习报告&quot;内容拷贝过来）\n\n### 1. 实验综述\n\n（自述实验现象、实验原理和实验方法，不超过300字，5分）\n\n### 2. 实验重点\n\n（简述本实验的学习重点，不超过100字，3分）\n\n### 3. 实验难点\n\n（简述本实验的实现难点，不超过100字，2分）\n\n&lt;div style=&quot;page-break-after: always;&quot;&gt;&lt;/div&gt;\n\n## 二、原始数据\n\n（将有学生和老师签名的&quot;自备数据记录草稿纸&quot;的扫描或手机拍摄图粘贴在下方，20分）\n\n&lt;div style=&quot;page-break-after: always;&quot;&gt;&lt;/div&gt;\n\n## 三、结果与分析\n\n### 1. 数据处理与结果\n\n（列出数据表格、选择数据处理方法、给定测量或计算结果，30分）\n\n### 2. 误差分析\n\n（运用测量误差、相对误差、不确定度等分析实验结果，20分）\n\n### 3. 实验探讨\n\n（对实验内容、现象和过程的小结，不超过100字，10分）\n\n&lt;div style=&quot;page-break-after: always;&quot;&gt;&lt;/div&gt;\n\n## 四、思考题\n\n（解答教材或讲义或老师指定的思考题，10分）\n\n&lt;div style=&quot;page-break-after: always;&quot;&gt;&lt;/div&gt;\n\n**注意事项：**\n\n1. 用PDF格式上传&quot;实验报告&quot;，文件名：学生姓名+学号+实验名称+周次。\n2. &quot;实验报告&quot;必须递交在&quot;学在浙大&quot;的本课程的对应实验项目的&quot;作业&quot;模块内。\n3. &quot;实验报告&quot;成绩必须在&quot;浙江大学物理实验教学中心网站&quot;-&quot;选课系统&quot;内查询。\n4. 教学评价必须在&quot;浙江大学物理实验教学中心网站&quot;-&quot;选课系统&quot;内进行，学生必须进行教学评价，才能看到实验报告成绩，教学评价必须在本次实验结束后3天内进行。\n\n&lt;div align=&quot;center&quot;&gt;\n\n**浙江大学物理实验教学中心制**\n\n&lt;/div&gt;\n</code></pre></details></div><div class=\"entry-file\"><a class=\"download-button\" href=\"files/2026-04-24-physics-lab-template/电子物理实验预习报告-模板.md\" download><span>下载预习报告 Markdown 模版</span><small>电子物理实验预习报告-模板.md</small></a><details class=\"file-preview\"><summary>Preview / 预览</summary><pre><code>&lt;div class=&quot;cover&quot;&gt;\n\n# 物理实验预习报告\n\n&lt;div class=&quot;cover-group-lg&quot;&gt;\n\n**实验名称：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n**指导教师：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n&lt;/div&gt;\n\n&lt;div class=&quot;cover-group-sm&quot;&gt;\n\n**周次：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n**姓名：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n**学号：\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_**\n\n\n\n\n\n\n\n\n\n**实验日期: \\_\\_\\_\\_年\\_\\_\\_\\_月\\_\\_\\_\\_日 星期\\_\\_\\_上/下午**\n\n&lt;/div&gt;\n\n&lt;div class=&quot;cover-footer&quot;&gt;\n\n浙江大学物理实验教学中心\n\n&lt;/div&gt;\n\n&lt;/div&gt;\n\n### 1. 实验综述\n\n（自述实验现象、实验原理和实验方法，不超过300字，5分）\n\n### 2. 实验重点\n\n（简述本实验的学习重点，不超过100字，3分）\n\n### 3. 实验难点\n\n（简述本实验的实现难点，不超过100字，2分）\n\n&lt;div style=&quot;page-break-after: always;&quot;&gt;&lt;/div&gt;\n\n**注意事项：**\n\n1. 用PDF格式上传&quot;预习报告&quot;，文件名：学生姓名+学号+实验名称+周次。\n2. &quot;预习报告&quot;必须递交在&quot;学在浙大&quot;的本课程的对应实验项目的&quot;作业&quot;模块内。\n3. &quot;预习报告&quot;还须拷贝到&quot;实验报告&quot;中（便以教师批改）。\n\n&lt;div align=&quot;center&quot;&gt;\n**浙江大学物理实验教学中心制**\n\n&lt;/div&gt;\n</code></pre></details></div><div class=\"entry-file\"><a class=\"download-button\" href=\"files/2026-04-24-physics-lab-template/physics-lab.css\" download><span>下载配套 CSS 样式</span><small>physics-lab.css</small></a><details class=\"file-preview\"><summary>Preview / 预览</summary><pre><code>/*\n * physics-lab.css — Typora 主题\n * 仿浙江大学物理实验教学中心 Word 模板排版\n */\n\n/* ===== 页面设置 (导出PDF时生效) ===== */\n@media print {\n    @page {\n        size: A4;\n        margin: 2.54cm 1.91cm;\n    }\n}\n\n/* ===== 基础排版 ===== */\n:root {\n    --font-song: &quot;宋体&quot;, &quot;SimSun&quot;, &quot;Songti SC&quot;, serif;\n    --font-hei: &quot;黑体&quot;, &quot;SimHei&quot;, &quot;Heiti SC&quot;, sans-serif;\n    --font-fang: &quot;仿宋&quot;, &quot;FangSong&quot;, &quot;STFangsong&quot;, serif;\n    --font-latin: &quot;Times New Roman&quot;, Times, serif;\n    --base-size: 12pt;\n}\n\nhtml {\n    font-size: var(--base-size);\n}\n\nbody {\n    font-family: var(--font-song);\n    font-size: var(--base-size);\n    color: #000;\n    background: #fff;\n    -webkit-font-smoothing: auto;\n}\n\n#write {\n    max-width: 21cm;\n    padding: 2.54cm 1.91cm;\n    font-family: var(--font-song);\n    font-size: var(--base-size);\n    line-height: 1.5;\n    color: #000;\n}\n\n/* ===== 封面页 ===== */\n#write .cover {\n    text-align: center;\n    padding-top: 2.5cm;\n    page-break-after: always;\n    break-after: page;\n}\n\n#write .cover h1 {\n    font-family: var(--font-song);\n    font-size: 36pt;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 3cm;\n    padding-bottom: 0;\n    border-bottom: none;\n    line-height: 1.4;\n    color: #000;\n}\n\n#write .cover-group-lg p {\n    font-family: var(--font-song);\n    font-size: 16pt;\n    font-weight: bold;\n    line-height: 2;\n    margin: 0;\n    text-align: center;\n}\n\n#write .cover-group-sm p {\n    font-family: var(--font-song);\n    font-size: 16pt;\n    font-weight: bold;\n    line-height: 2;\n    margin: 0;\n    text-align: center;\n}\n\n#write .cover-group-lg {\n    width: 13cm;\n    margin: 0 auto 1.5cm auto;\n}\n\n#write .cover-group-sm {\n    width: 13cm;\n    margin: 0 auto 1.5cm auto;\n}\n\n#write .cover-footer {\n    font-family: var(--font-song);\n    font-size: 14pt;\n    font-weight: normal;\n    margin-top: 1cm;\n}\n\n#write .cover-footer p {\n    font-size: 14pt;\n    font-weight: normal;\n    text-align: center;\n}\n\n/* ===== 标题层级 ===== */\n\n/* h1 — 封面大标题: 宋体 36pt 加粗居中 */\n#write h1 {\n    font-family: var(--font-song);\n    font-size: 36pt;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 0.5em;\n    padding-bottom: 0;\n    border-bottom: none;\n    line-height: 1.4;\n    color: #000;\n}\n\n/* h2 — 大节标题(一、二、三、四): 黑体 16pt 加粗 */\n#write h2 {\n    font-family: var(--font-hei);\n    font-size: 16pt;\n    font-weight: bold;\n    text-align: left;\n    margin-top: 1em;\n    margin-bottom: 0.5em;\n    padding-bottom: 0;\n    border-bottom: none;\n    line-height: 1.5;\n    color: #000;\n}\n\n/* h3 — 小节标题(1. 2. 3.): 宋体 14pt 加粗 */\n#write h3 {\n    font-family: var(--font-song);\n    font-size: 14pt;\n    font-weight: bold;\n    text-align: left;\n    margin-top: 0.8em;\n    margin-bottom: 0.4em;\n    line-height: 1.5;\n    color: #000;\n}\n\n/* h4/h5/h6 备用 */\n#write h4, #write h5, #write h6 {\n    font-family: var(--font-song);\n    font-size: 12pt;\n    font-weight: bold;\n    color: #000;\n}\n\n/* ===== 段落与正文 ===== */\n#write p {\n    font-family: var(--font-song);\n    font-size: var(--base-size);\n    line-height: 1.5;\n    margin-top: 0.3em;\n    margin-bottom: 0.3em;\n    text-align: justify;\n    color: #000;\n}\n\n/* 加粗文字 — 封面字段等 */\n#write p strong {\n    font-weight: bold;\n}\n\n/* ===== 居中块 (封面标题、落款) ===== */\n#write div[align=&quot;center&quot;] {\n    text-align: center;\n}\n\n#write div[align=&quot;center&quot;] p {\n    text-align: center;\n}\n\n/* ===== 分页控制 ===== */\n#write div[style*=&quot;page-break-after&quot;] {\n    page-break-after: always !important;\n    break-after: page !important;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    border: none;\n}\n\n@media print {\n    div[style*=&quot;page-break-after&quot;] {\n        page-break-after: always !important;\n        break-after: page !important;\n    }\n}\n\n/* ===== 有序列表 — 注意事项区 (仿宋) ===== */\n#write ol {\n    font-family: var(--font-fang);\n    font-size: var(--base-size);\n    line-height: 20pt;\n    padding-left: 1.5em;\n    margin-top: 0.3em;\n    margin-bottom: 0.3em;\n}\n\n#write ol li {\n    font-family: var(--font-fang);\n    font-size: var(--base-size);\n    line-height: 20pt;\n    margin-bottom: 0.2em;\n}\n\n/* ===== 无序列表 ===== */\n#write ul {\n    font-family: var(--font-song);\n    font-size: var(--base-size);\n    line-height: 1.5;\n    padding-left: 1.5em;\n}\n\n/* ===== 水平分割线 — 隐藏(用分页替代) ===== */\n#write hr {\n    display: none;\n}\n\n/* ===== 表格 — 三线表风格 ===== */\n#write table {\n    width: 100%;\n    border-collapse: collapse;\n    font-family: var(--font-song);\n    font-size: var(--base-size);\n    margin: 1em 0;\n}\n\n#write table thead {\n    border-top: 2px solid #000;\n    border-bottom: 1px solid #000;\n}\n\n#write table thead th {\n    font-weight: bold;\n    text-align: center;\n    padding: 6px 8px;\n    border: none;\n}\n\n#write table tbody td {\n    text-align: center;\n    padding: 4px 8px;\n    border: none;\n}\n\n#write table tbody tr:last-child {\n    border-bottom: 2px solid #000;\n}\n\n/* ===== 图片 ===== */\n#write img {\n    max-width: 90%;\n    display: block;\n    margin: 1em auto;\n}\n\n/* ===== 代码块(备用) ===== */\n#write code {\n    font-family: &quot;Courier New&quot;, Courier, monospace;\n    font-size: 11pt;\n    background: #f5f5f5;\n    padding: 1px 4px;\n    border-radius: 2px;\n}\n\n#write pre {\n    background: #f5f5f5;\n    padding: 0.8em 1em;\n    border-radius: 3px;\n    overflow-x: auto;\n}\n\n#write pre code {\n    background: none;\n    padding: 0;\n}\n\n/* ===== 链接 ===== */\n#write a {\n    color: #000;\n    text-decoration: underline;\n}\n\n@media print {\n    #write a {\n        color: #000;\n        text-decoration: none;\n    }\n}\n\n/* ===== 块引用 ===== */\n#write blockquote {\n    border-left: 3px solid #999;\n    padding-left: 1em;\n    margin-left: 0;\n    color: #333;\n    font-style: normal;\n}\n\n/* ===== 公式全部居中 ===== */\n#write [mdtype=&quot;math_block&quot;],\n#write .md-math-block,\n#write .md-rawblock[mdtype=&quot;math_block&quot;],\n#write .md-rawblock-container,\n#write .mathjax-block,\n#write .MathJax,\n#write .MathJax_Display,\n#write .MathJax_SVG_Display,\n#write mjx-container,\n#write mjx-container[display=&quot;true&quot;],\n#write mjx-container[jax=&quot;SVG&quot;],\n#write .katex-display,\n#write .katex-html,\n#write [contenteditable=&quot;false&quot;][class*=&quot;math&quot;] {\n    text-align: center !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n}\n\n#write .MathJax,\n#write .MathJax_Display,\n#write .MathJax_SVG_Display,\n#write mjx-container {\n    display: block !important;\n    margin: 0.5em auto !important;\n}\n\n#write .md-math-block mjx-container,\n#write [mdtype=&quot;math_block&quot;] mjx-container {\n    display: block !important;\n    text-align: center !important;\n    margin: 0 auto !important;\n}\n\n/* 行内公式保持 inline */\n#write mjx-container:not([display=&quot;true&quot;]) {\n    display: inline !important;\n    margin: 0 !important;\n}\n\n/* ===== 思考题区域 — 答案楷体五号(10.5pt) ===== */\n#write .thinking-questions {\n    font-family: &quot;楷体&quot;, &quot;KaiTi&quot;, &quot;STKaiti&quot;, &quot;Kaiti SC&quot;, serif;\n    font-size: 10.5pt;\n    line-height: 1.5;\n}\n\n#write .thinking-questions p {\n    font-family: &quot;楷体&quot;, &quot;KaiTi&quot;, &quot;STKaiti&quot;, &quot;Kaiti SC&quot;, serif;\n    font-size: 10.5pt;\n}\n\n#write .thinking-questions strong {\n    font-family: var(--font-song);\n    font-size: var(--base-size);\n}\n\n#write .thinking-questions ul,\n#write .thinking-questions ol,\n#write .thinking-questions li {\n    font-family: &quot;楷体&quot;, &quot;KaiTi&quot;, &quot;STKaiti&quot;, &quot;Kaiti SC&quot;, serif;\n    font-size: 10.5pt;\n}\n\n/* ===== 打印优化 ===== */\n@media print {\n    html, body {\n        background: #fff;\n    }\n\n    #write {\n        max-width: none;\n        padding: 0;\n    }\n\n    h2, h3 {\n        page-break-after: avoid;\n        break-after: avoid;\n    }\n\n    table, figure, img {\n        page-break-inside: avoid;\n        break-inside: avoid;\n    }\n}\n</code></pre></details></div>",
      "headings": [],
      "excerpt": "我弄了这个 Markdown 模版，之后写普物实验报告就不用再被 docx 格式卡住了。 文件放在这里，直接下载就能用。 下载实验报告 Markdown 模版 下载预习报告 Markdown 模版 下载配套 CSS 样式",
      "readingMinutes": 1,
      "createdAt": "2026-04-24T00:00:00.000Z"
    },
    {
      "id": "notes/math/2026-04-24-mathematical-analysis-i.md",
      "slug": "2026-04-24-mathematical-analysis-i",
      "source": "post",
      "kind": "notes",
      "title": "数学分析 I",
      "publishedIndex": 5,
      "stage": "Notes 笔记",
      "tag": "数学",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<h4 id=\"实数-确界与函数\">实数、确界与函数<a class=\"heading-anchor\" href=\"#实数-确界与函数\" data-heading-id=\"实数-确界与函数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"实数集的基本性质\">实数集的基本性质<a class=\"heading-anchor\" href=\"#实数集的基本性质\" data-heading-id=\"实数集的基本性质\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>实数集 $\\mathbb R$ 的常用性质：</p><p>1. <strong>有序性</strong>：任意 $a,b\\in\\mathbb R$ 可比较大小。\n2. <strong>传递性</strong>：若 $a&gt;b$，$b&gt;c$，则 $a&gt;c$。\n3. <strong>阿基米德性</strong>：若 $a&gt;0$，$b\\in\\mathbb R$，则存在 $n\\in\\mathbb N$，使\n   $$\n   na&gt;b.\n   $$\n4. <strong>稠密性</strong>：任意两个不同实数之间都有有理数，也都有无理数。\n5. <strong>数轴对应</strong>：实数与数轴上的点一一对应。\n6. <strong>完备性</strong>：用确界原理、区间套定理、单调有界定理等形式表达。</p><p>补充：</p><ul><li>$\\mathbb Q$ 与无理数集在 $\\mathbb R$ 中都稠密。</li><li>“若对任意 $\\varepsilon&gt;0$，$|a-b|&lt;\\varepsilon$，则 $a=b$”是常用证明技巧。</li></ul><h4 id=\"邻域\">邻域<a class=\"heading-anchor\" href=\"#邻域\" data-heading-id=\"邻域\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>点 $a$ 的 $\\delta$ 邻域：\n$$\nU(a,\\delta)=\\{x:|x-a|&lt;\\delta\\}.\n$$</p><p>空心邻域：\n$$\nU^\\circ(a,\\delta)=\\{x:0&lt;|x-a|&lt;\\delta\\}.\n$$</p><p>左右邻域：\n$$\nU_+(a,\\delta)=(a,a+\\delta),\\qquad\nU_-(a,\\delta)=(a-\\delta,a).\n$$</p><p>无穷远邻域：\n$$\nU(+\\infty)=\\{x:x&gt;M\\},\\qquad\nU(-\\infty)=\\{x:x&lt;-M\\}.\n$$</p><h4 id=\"上界-下界-确界\">上界、下界、确界<a class=\"heading-anchor\" href=\"#上界-下界-确界\" data-heading-id=\"上界-下界-确界\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $S\\subset\\mathbb R$，$S\\ne\\varnothing$。</p><p>若存在 $M$，使对一切 $x\\in S$ 有 $x\\le M$，则称 $S$ 有上界，$M$ 是上界。下界类似。</p><p>$\\alpha=\\sup S$ 当且仅当：</p><p>1. 对一切 $x\\in S$，有 $x\\le\\alpha$；\n2. 对任意 $\\varepsilon&gt;0$，存在 $x_\\varepsilon\\in S$，使\n   $$\n   \\alpha-\\varepsilon&lt;x_\\varepsilon\\le\\alpha.\n   $$</p><p>$\\beta=\\inf S$ 当且仅当：</p><p>1. 对一切 $x\\in S$，有 $\\beta\\le x$；\n2. 对任意 $\\varepsilon&gt;0$，存在 $x_\\varepsilon\\in S$，使\n   $$\n   \\beta\\le x_\\varepsilon&lt;\\beta+\\varepsilon.\n   $$</p><h4 id=\"确界原理\">确界原理<a class=\"heading-anchor\" href=\"#确界原理\" data-heading-id=\"确界原理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>非空有上界数集必有上确界；非空有下界数集必有下确界。</p><p>例题类型：</p><p>1. 证明 $\\mathbb N^+$ 有下界但无上界。\n2. 若 $A,B$ 非空且对任意 $x\\in A,y\\in B$ 有 $x\\le y$，则\n   $$\n   \\sup A\\le \\inf B.\n   $$\n   若还满足分割条件，可得到 $\\sup A=\\inf B$。\n3. 若 $S$ 有最大元，则 $\\sup S=\\max S$。\n4. 若 $S$ 无上界，记 $\\sup S=+\\infty$；若无下界，记 $\\inf S=-\\infty$。</p><h4 id=\"函数与函数有界性\">函数与函数有界性<a class=\"heading-anchor\" href=\"#函数与函数有界性\" data-heading-id=\"函数与函数有界性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $X,Y\\subseteq\\mathbb R$，映射\n$$\nf:X\\to Y\n$$\n称为定义在 $X$ 上、取值于 $Y$ 的函数。</p><p>函数有界：\n$$\n\\exists M&gt;0,\\ \\forall x\\in D,\\quad |f(x)|\\le M.\n$$</p><p>上无界：\n$$\n\\forall M&gt;0,\\ \\exists x\\in D,\\quad f(x)&gt;M.\n$$</p><p>常见例子：</p><p>- Dirichlet 函数\n  $$\n  D(x)=\n  \\begin{cases}\n  1,&amp;x\\in\\mathbb Q,\\\\\n  0,&amp;x\\notin\\mathbb Q.\n  \\end{cases}\n  $$\n- 分段函数与符号函数 $\\operatorname{sgn}x$，后面用于讨论极限与连续。</p><h4 id=\"本章例题\">本章例题<a class=\"heading-anchor\" href=\"#本章例题\" data-heading-id=\"本章例题\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：证明 $\\mathbb N^+$ 有下界但无上界。</p><p>解：对任意 $n\\in\\mathbb N^+$，有 $n\\ge1$，所以 $1$ 是下界。若存在上界 $M$，由阿基米德性可取 $n\\in\\mathbb N^+$ 使 $n&gt;M$，矛盾。因此 $\\mathbb N^+$ 无上界。</p><p>例 2：设 $A,B$ 非空，且对任意 $x\\in A,y\\in B$ 有 $x\\le y$。证明\n$$\n\\sup A\\le \\inf B.\n$$</p><p>解：任取 $y\\in B$，由条件知 $y$ 是 $A$ 的上界，所以 $\\sup A\\le y$。于是 $\\sup A$ 是 $B$ 的下界，故 $\\sup A\\le\\inf B$。</p><p>例 3：若 $S$ 有最大元 $m$，证明 $\\sup S=m$。</p><p>解：对任意 $x\\in S$ 有 $x\\le m$，所以 $m$ 是上界。又 $m\\in S$，任何小于 $m$ 的数都不是上界，因此 $m$ 是最小上界。</p><h4 id=\"数列极限\">数列极限<a class=\"heading-anchor\" href=\"#数列极限\" data-heading-id=\"数列极限\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"数列与极限定义\">数列与极限定义<a class=\"heading-anchor\" href=\"#数列与极限定义\" data-heading-id=\"数列与极限定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>数列是定义在正整数集上的函数：\n$$\na:\\mathbb N^+\\to\\mathbb R,\\qquad n\\mapsto a_n.\n$$</p><p>极限定义：\n$$\n\\lim_{n\\to\\infty}a_n=a\n$$\n当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists N,\\ \\forall n&gt;N,\\quad |a_n-a|&lt;\\varepsilon.\n$$</p><p>否定形式：\n$$\na_n\\not\\to a\n$$\n当且仅当\n$$\n\\exists \\varepsilon_0&gt;0,\\ \\forall N,\\ \\exists n&gt;N,\\quad |a_n-a|\\ge\\varepsilon_0.\n$$</p><p>发散：\n$$\n\\forall a\\in\\mathbb R,\\quad a_n\\not\\to a.\n$$</p><h4 id=\"极限证明模板\">极限证明模板<a class=\"heading-anchor\" href=\"#极限证明模板\" data-heading-id=\"极限证明模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>证明 $a_n\\to a$ 的标准步骤：</p><ol><li>估计 $|a_n-a|$；</li><li>将其放缩为某个关于 $n$ 的简单表达式；</li><li>给定 $\\varepsilon&gt;0$，反解出 $n&gt;N(\\varepsilon)$；</li><li>取合适 $N$。</li></ol><p>- 证明 $\\frac1n\\to0$：\n  给定 $\\varepsilon&gt;0$，取 $N&gt;\\frac1\\varepsilon$，则 $n&gt;N$ 时\n  $$\n  \\left|\\frac1n-0\\right|&lt;\\varepsilon.\n  $$\n- 证明 $\\sqrt[n]{a}\\to1$（$a&gt;0$）：可用对数或 Bernoulli 不等式。\n- 证明含根式、有理式的数列极限：先有理化或同除最高阶。</p><h4 id=\"收敛数列的性质\">收敛数列的性质<a class=\"heading-anchor\" href=\"#收敛数列的性质\" data-heading-id=\"收敛数列的性质\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"唯一性\">唯一性<a class=\"heading-anchor\" href=\"#唯一性\" data-heading-id=\"唯一性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若 $a_n\\to a$ 且 $a_n\\to b$，则 $a=b$。</p><p>证明：\n给定 $\\varepsilon&gt;0$，取 $N$ 使\n$$\n|a_n-a|&lt;\\varepsilon,\\qquad |a_n-b|&lt;\\varepsilon.\n$$\n则\n$$\n|a-b|\\le |a-a_n|+|a_n-b|&lt;2\\varepsilon.\n$$\n由 $\\varepsilon$ 任意得 $a=b$。</p><h5 id=\"有界性\">有界性<a class=\"heading-anchor\" href=\"#有界性\" data-heading-id=\"有界性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>收敛数列必有界。</p><p>证明：<br />取 $\\varepsilon=1$，从某项起 $|a_n-a|&lt;1$，前面有限项取最大值即可。</p><h5 id=\"保号性\">保号性<a class=\"heading-anchor\" href=\"#保号性\" data-heading-id=\"保号性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若 $a_n\\to a&gt;0$，则从某项起 $a_n&gt;0$。取 $\\varepsilon=a/2$。</p><h5 id=\"保序性\">保序性<a class=\"heading-anchor\" href=\"#保序性\" data-heading-id=\"保序性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若 $a_n\\to a$，$b_n\\to b$，且从某项起 $a_n\\le b_n$，则\n$$\na\\le b.\n$$</p><h5 id=\"夹逼定理\">夹逼定理<a class=\"heading-anchor\" href=\"#夹逼定理\" data-heading-id=\"夹逼定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若\n$$\na_n\\le c_n\\le b_n,\\qquad a_n\\to A,\\quad b_n\\to A,\n$$\n则\n$$\nc_n\\to A.\n$$</p><h5 id=\"四则运算\">四则运算<a class=\"heading-anchor\" href=\"#四则运算\" data-heading-id=\"四则运算\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若 $a_n\\to a$，$b_n\\to b$，则\n$$\na_n\\pm b_n\\to a\\pm b,\\qquad a_nb_n\\to ab.\n$$\n若 $b\\ne0$ 且 $b_n\\ne0$ 从某项起成立，则\n$$\n\\frac{a_n}{b_n}\\to\\frac ab.\n$$</p><h4 id=\"子列\">子列<a class=\"heading-anchor\" href=\"#子列\" data-heading-id=\"子列\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $n_1&lt;n_2&lt;\\cdots$，则 $\\{a_{n_k}\\}$ 是 $\\{a_n\\}$ 的子列。</p><p>定理：\n$$\na_n\\to a\n\\quad\\Longleftrightarrow\\quad\n\\text{任意子列 } a_{n_k}\\to a.\n$$</p><p>推论：</p><ul><li>若存在两个子列极限不同，则原数列发散。</li><li>若所有子列都有同一极限，则原数列收敛。</li></ul><p>例子：</p><ul><li>$a_n=(-1)^n$ 有子列 $a_{2k}=1$ 与 $a_{2k-1}=-1$，故发散。</li><li>若 $a_{2n}\\to a$，$a_{2n-1}\\to a$，则 $a_n\\to a$。</li></ul><h4 id=\"单调有界定理\">单调有界定理<a class=\"heading-anchor\" href=\"#单调有界定理\" data-heading-id=\"单调有界定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>单调递增且有上界的数列必收敛，且\n$$\n\\lim a_n=\\sup\\{a_n:n\\in\\mathbb N^+\\}.\n$$</p><p>单调递减且有下界的数列必收敛，且极限为下确界。</p><p>证明：\n令 $\\alpha=\\sup\\{a_n\\}$。由上确界定义，对任意 $\\varepsilon&gt;0$，存在 $N$，使\n$$\n\\alpha-\\varepsilon&lt;a_N\\le\\alpha.\n$$\n单调递增给出 $n&gt;N$ 时\n$$\n\\alpha-\\varepsilon&lt;a_N\\le a_n\\le\\alpha,\n$$\n故 $|a_n-\\alpha|&lt;\\varepsilon$。</p><h4 id=\"致密性定理与-cauchy-收敛准则\">致密性定理与 Cauchy 收敛准则<a class=\"heading-anchor\" href=\"#致密性定理与-cauchy-收敛准则\" data-heading-id=\"致密性定理与-cauchy-收敛准则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>致密性定理：<br />任意有界数列必存在收敛子列。</p><p>Cauchy 收敛准则：\n$$\n\\{a_n\\}\\text{ 收敛}\n\\quad\\Longleftrightarrow\\quad\n\\forall\\varepsilon&gt;0,\\ \\exists N,\\ \\forall m,n&gt;N,\\ |a_m-a_n|&lt;\\varepsilon.\n$$</p><p>证明：</p><ul><li>收敛推出 Cauchy：用三角不等式。</li><li>Cauchy 推出收敛：先证明有界，再由致密性定理取收敛子列，最后用 Cauchy 性把全数列拉到同一极限。</li></ul><h4 id=\"stolz-定理与常用极限\">Stolz 定理与常用极限<a class=\"heading-anchor\" href=\"#stolz-定理与常用极限\" data-heading-id=\"stolz-定理与常用极限\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>Stolz 定理：\n设 $b_n$ 严格递增且 $b_n\\to+\\infty$。若极限\n$$\n\\lim_{n\\to\\infty}\\frac{a_n-a_{n-1}}{b_n-b_{n-1}}=L,\n$$\n存在于扩充实数意义下，则\n$$\n\\lim_{n\\to\\infty}\\frac{a_n}{b_n}=L.\n$$</p><p>常见应用：</p><p>- 算术平均：\n  若 $a_n\\to a$，则\n  $$\n  \\frac{a_1+\\cdots+a_n}{n}\\to a.\n  $$\n- 幂平均与根式极限。\n- $1+\\frac12+\\cdots+\\frac1n$ 与 $\\ln n$ 的比较。</p><p>若 $a_n&gt;0$ 且\n$$\n\\frac{a_{n+1}}{a_n}\\to l,\n$$\n其中 $0\\le l&lt;+\\infty$，则\n$$\n\\sqrt[n]{a_n}\\to l.\n$$</p><h4 id=\"本章例题-2\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-2\" data-heading-id=\"本章例题-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：证明 $\\frac1n\\to0$。</p><p>解：给定 $\\varepsilon&gt;0$，取 $N&gt;1/\\varepsilon$。当 $n&gt;N$ 时，\n$$\n\\left|\\frac1n-0\\right|=\\frac1n&lt;\\varepsilon.\n$$</p><p>例 2：证明 $\\sqrt[n]{a}\\to1$，其中 $a&gt;0$。</p><p>解：若 $a&gt;1$，令 $b_n=\\sqrt[n]{a}-1&gt;0$。由 Bernoulli 不等式，\n$$\na=(1+b_n)^n\\ge1+nb_n,\n$$\n故\n$$\n0&lt;b_n\\le\\frac{a-1}{n}\\to0.\n$$\n若 $0&lt;a&lt;1$，对 $1/a$ 使用上面的结论，再取倒数即可。</p><p>例 3：证明 $a_n=(-1)^n$ 发散。</p><p>解：$a_{2n}=1$，$a_{2n-1}=-1$，两个子列极限不同，所以原数列发散。</p><p>例 4：若 $a_n\\to a$，证明\n$$\n\\frac{a_1+\\cdots+a_n}{n}\\to a.\n$$</p><p>解：令 $s_n=a_1+\\cdots+a_n$。由 Stolz 定理，\n$$\n\\lim_{n\\to\\infty}\\frac{s_n}{n}\n=\\lim_{n\\to\\infty}(s_n-s_{n-1})\n=\\lim_{n\\to\\infty}a_n=a.\n$$</p><p>例 5：设\n$$\nx_{n+1}=\\frac12\\left(x_n+\\frac{a}{x_n}\\right),\\qquad x_1&gt;0,\\ a&gt;0.\n$$\n证明 $x_n\\to\\sqrt a$。</p><p>解：由 AM-GM 知 $x_{n+1}\\ge\\sqrt a$。当 $n\\ge2$ 时，\n$$\nx_{n+1}-x_n=\\frac{a-x_n^2}{2x_n}\\le0.\n$$\n故 $\\{x_n\\}_{n\\ge2}$ 单调递减且有下界，因而收敛。设极限为 $L&gt;0$，代入递推式得\n$$\nL=\\frac12\\left(L+\\frac aL\\right),\n$$\n所以 $L=\\sqrt a$。</p><h4 id=\"函数极限\">函数极限<a class=\"heading-anchor\" href=\"#函数极限\" data-heading-id=\"函数极限\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"函数极限定义\">函数极限定义<a class=\"heading-anchor\" href=\"#函数极限定义\" data-heading-id=\"函数极限定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 在 $x_0$ 的某个去心邻域内有定义，则\n$$\n\\lim_{x\\to x_0}f(x)=A\n$$\n当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists\\delta&gt;0,\\quad\n0&lt;|x-x_0|&lt;\\delta\\Rightarrow |f(x)-A|&lt;\\varepsilon.\n$$</p><p>左右极限：\n$$\n\\lim_{x\\to x_0+}f(x),\\qquad \\lim_{x\\to x_0-}f(x).\n$$\n双侧极限存在当且仅当左右极限存在且相等。</p><p>无穷远处极限：\n$$\n\\lim_{x\\to+\\infty}f(x)=A\n\\quad\\Longleftrightarrow\\quad\n\\forall\\varepsilon&gt;0,\\ \\exists M,\\ x&gt;M\\Rightarrow |f(x)-A|&lt;\\varepsilon.\n$$</p><h4 id=\"极限与函数在点处取值无关\">极限与函数在点处取值无关<a class=\"heading-anchor\" href=\"#极限与函数在点处取值无关\" data-heading-id=\"极限与函数在点处取值无关\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>函数极限只依赖于去心邻域中的函数值，与 $f(x_0)$ 是否定义、取什么值无关。</p><p>例子：</p><p>- $\\operatorname{sgn}x$ 在 $0$ 处左右极限不同，双侧极限不存在。\n- $f(x)=\\sin\\frac1x$ 在 $x\\to0$ 时不存在极限，可取\n  $$\n  x_n=\\frac1{2n\\pi+\\pi/2},\\qquad y_n=\\frac1{2n\\pi+3\\pi/2}\n  $$\n  得到函数值分别趋向 $1$ 与 $-1$。</p><h4 id=\"heine-归结原则\">Heine 归结原则<a class=\"heading-anchor\" href=\"#heine-归结原则\" data-heading-id=\"heine-归结原则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $f$ 在 $x_0$ 的某个去心邻域内有定义。则\n$$\n\\lim_{x\\to x_0}f(x)=A\n$$\n当且仅当对任意 $x_n$ 满足 $x_n\\ne x_0$ 且 $x_n\\to x_0$，都有\n$$\nf(x_n)\\to A.\n$$</p><p>用途：</p><ol><li>证明极限存在：转化为任意数列。</li><li>证明极限不存在：找两条趋向同一点的数列，使函数值极限不同。</li></ol><h4 id=\"cauchy-准则\">Cauchy 准则<a class=\"heading-anchor\" href=\"#cauchy-准则\" data-heading-id=\"cauchy-准则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>函数极限存在当且仅当：\n$$\n\\forall\\varepsilon&gt;0,\\ \\exists\\delta&gt;0,\n$$\n只要 $x&#039;,x&#039;&#039;\\in U^\\circ(x_0,\\delta)$，就有\n$$\n|f(x&#039;)-f(x&#039;&#039;)|&lt;\\varepsilon.\n$$</p><h4 id=\"两个重要极限\">两个重要极限<a class=\"heading-anchor\" href=\"#两个重要极限\" data-heading-id=\"两个重要极限\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n\\lim_{x\\to0}\\frac{\\sin x}{x}=1.\n$$</div><p>常用推论：\n$$\n\\sin x\\sim x,\\qquad \\tan x\\sim x,\\qquad 1-\\cos x\\sim \\frac{x^2}{2}.\n$$</p><p>第二重要极限：\n$$\n\\lim_{x\\to0}(1+x)^{1/x}=e,\n$$\n也可写为\n$$\n\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n=e.\n$$</p><h4 id=\"无穷小-无穷大与等价\">无穷小、无穷大与等价<a class=\"heading-anchor\" href=\"#无穷小-无穷大与等价\" data-heading-id=\"无穷小-无穷大与等价\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>无穷小：\n$$\n\\alpha(x)\\to0.\n$$</p><p>无穷大：\n$$\n|\\beta(x)|\\to+\\infty.\n$$</p><p>若\n$$\n\\frac{\\alpha}{\\beta}\\to1,\n$$\n则\n$$\n\\alpha\\sim\\beta.\n$$</p><p>常用等价无穷小：\n$$\n\\sin x\\sim x,\\quad \\tan x\\sim x,\\quad\n\\ln(1+x)\\sim x,\\quad e^x-1\\sim x,\n$$\n$$\n(1+x)^\\alpha-1\\sim\\alpha x,\\quad\n1-\\cos x\\sim\\frac{x^2}{2}.\n$$</p><h4 id=\"渐近线\">渐近线<a class=\"heading-anchor\" href=\"#渐近线\" data-heading-id=\"渐近线\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>垂直渐近线：\n若\n$$\n\\lim_{x\\to x_0}f(x)=\\infty,\n$$\n则 $x=x_0$ 为垂直渐近线。</p><p>水平渐近线：\n若\n$$\n\\lim_{x\\to\\infty}f(x)=b,\n$$\n则 $y=b$ 为水平渐近线。</p><p>斜渐近线：\n若存在 $k,b$，使\n$$\n\\lim_{x\\to\\infty}\\bigl(f(x)-kx-b\\bigr)=0,\n$$\n则 $y=kx+b$ 为斜渐近线，其中\n$$\nk=\\lim_{x\\to\\infty}\\frac{f(x)}x,\\qquad\nb=\\lim_{x\\to\\infty}\\bigl(f(x)-kx\\bigr).\n$$</p><h4 id=\"本章例题-3\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-3\" data-heading-id=\"本章例题-3\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：讨论 $\\operatorname{sgn}x$ 在 $0$ 处的极限。</p><p>解：$x\\to0+$ 时函数值为 $1$，$x\\to0-$ 时函数值为 $-1$。左右极限不同，所以双侧极限不存在。</p><p>例 2：证明 $\\lim_{x\\to0}\\sin\\frac1x$ 不存在。</p><p>解：取\n$$\nx_n=\\frac1{2n\\pi+\\pi/2},\\qquad y_n=\\frac1{2n\\pi+3\\pi/2}.\n$$\n则 $x_n,y_n\\to0$，但\n$$\n\\sin\\frac1{x_n}=1,\\qquad \\sin\\frac1{y_n}=-1.\n$$\n由 Heine 归结原则，极限不存在。</p><p>例 3：求\n$$\n\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}.\n$$</p><p>解：由 $1-\\cos x\\sim x^2/2$，极限为 $1/2$。</p><p>例 4：求曲线\n$$\ny=x+\\frac1x\n$$\n当 $x\\to+\\infty$ 时的斜渐近线。</p><p>解：\n$$\nk=\\lim_{x\\to+\\infty}\\frac{y}{x}=1,\\qquad\nb=\\lim_{x\\to+\\infty}(y-x)=0.\n$$\n故斜渐近线为 $y=x$。</p><h4 id=\"连续函数\">连续函数<a class=\"heading-anchor\" href=\"#连续函数\" data-heading-id=\"连续函数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"连续定义\">连续定义<a class=\"heading-anchor\" href=\"#连续定义\" data-heading-id=\"连续定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$f$ 在 $x_0$ 连续，当且仅当：</p><ol><li>$f(x_0)$ 有定义；</li><li>$\\lim_{x\\to x_0}f(x)$ 存在；</li><li>$\\lim_{x\\to x_0}f(x)=f(x_0)$。</li></ol><p>等价 $\\varepsilon$-$\\delta$ 形式：\n$$\n\\forall\\varepsilon&gt;0,\\ \\exists\\delta&gt;0,\\quad\n|x-x_0|&lt;\\delta\\Rightarrow |f(x)-f(x_0)|&lt;\\varepsilon.\n$$</p><h4 id=\"间断点分类\">间断点分类<a class=\"heading-anchor\" href=\"#间断点分类\" data-heading-id=\"间断点分类\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li><strong>可去间断点</strong>：极限存在，但函数值缺失或不等于极限。</li><li><strong>跳跃间断点</strong>：左右极限存在且有限，但不相等。</li><li><strong>第二类间断点</strong>：至少一个单侧极限不存在或为无穷。</li></ol><p>例子：</p><ul><li>$\\operatorname{sgn}x$ 在 $0$ 处是跳跃间断点。</li><li>$\\sin\\frac1x$ 在 $0$ 处是第二类间断点。</li><li>改变一点函数值，只会产生或消除可去间断点。</li></ul><h4 id=\"连续函数运算\">连续函数运算<a class=\"heading-anchor\" href=\"#连续函数运算\" data-heading-id=\"连续函数运算\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f,g$ 在 $x_0$ 连续，则\n$$\nf\\pm g,\\quad fg\n$$\n在 $x_0$ 连续；若 $g(x_0)\\ne0$，则\n$$\n\\frac fg\n$$\n在 $x_0$ 连续。</p><p>若 $g$ 在 $x_0$ 连续，$f$ 在 $g(x_0)$ 连续，则 $f\\circ g$ 在 $x_0$ 连续。</p><p>初等函数在其定义域内连续。</p><h4 id=\"闭区间连续函数性质\">闭区间连续函数性质<a class=\"heading-anchor\" href=\"#闭区间连续函数性质\" data-heading-id=\"闭区间连续函数性质\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>有界性定理：<br />若 $f\\in C[a,b]$，则 $f$ 有界。</p><p>最值定理：\n若 $f\\in C[a,b]$，则存在 $\\xi,\\eta\\in[a,b]$，使\n$$\nf(\\xi)=\\max f,\\qquad f(\\eta)=\\min f.\n$$</p><p>零点定理：\n若 $f\\in C[a,b]$，且 $f(a)f(b)&lt;0$，则存在 $\\xi\\in(a,b)$，使\n$$\nf(\\xi)=0.\n$$</p><p>介值定理：<br />若 $f\\in C[a,b]$，则 $f$ 取遍 $f(a)$ 与 $f(b)$ 之间的一切值。</p><p>证明：</p><ul><li>有界性与最值定理常用致密性定理反证。</li><li>零点定理可用区间套或确界法。</li><li>介值定理可转化为零点定理，令 $g(x)=f(x)-C$。</li></ul><h4 id=\"一致连续\">一致连续<a class=\"heading-anchor\" href=\"#一致连续\" data-heading-id=\"一致连续\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$f$ 在 $D$ 上一致连续：\n$$\n\\forall\\varepsilon&gt;0,\\ \\exists\\delta&gt;0,\\quad\nx,y\\in D,\\ |x-y|&lt;\\delta\\Rightarrow |f(x)-f(y)|&lt;\\varepsilon.\n$$</p><p>与逐点连续的区别：一致连续中的 $\\delta$ 只依赖 $\\varepsilon$，不依赖具体点。</p><p>Cantor 定理：<br />若 $f\\in C[a,b]$，则 $f$ 在 $[a,b]$ 上一致连续。</p><p>常用判别：</p><ul><li>Lipschitz 条件推出一致连续；</li><li>若 $f&#039;$ 在区间上有界，则 $f$ 在该区间上一致连续；</li><li>在有限开区间 $(a,b)$ 上，若 $f(a+)$、$f(b-)$ 存在且有限，通常可延拓到闭区间，从而一致连续。</li></ul><p>例子：</p><ul><li>$f(x)=1/x$ 在 $(0,1)$ 上不一致连续。</li><li>$f(x)=x^2$ 在 $\\mathbb R$ 上连续但不一致连续。</li></ul><h4 id=\"反函数连续性\">反函数连续性<a class=\"heading-anchor\" href=\"#反函数连续性\" data-heading-id=\"反函数连续性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 在区间 $I$ 上严格单调且连续，则反函数 $f^{-1}$ 在 $f(I)$ 上连续，且单调性与 $f$ 相同。</p><p>证明：<br />用介值性和严格单调性证明反函数的邻域控制。</p><h4 id=\"本章例题-4\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-4\" data-heading-id=\"本章例题-4\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：讨论\n$$\nf(x)=\n\\begin{cases}\n\\frac{\\sin x}{x},&amp;x\\ne0,\\\\\n0,&amp;x=0\n\\end{cases}\n$$\n在 $0$ 处的连续性。</p><p>解：因为\n$$\n\\lim_{x\\to0}\\frac{\\sin x}{x}=1\\ne f(0),\n$$\n所以 $f$ 在 $0$ 处不连续，且是可去间断点。</p><p>例 2：证明 $f(x)=1/x$ 在 $(0,1)$ 上不一致连续。</p><p>解：取\n$$\nx_n=\\frac1n,\\qquad y_n=\\frac1{n+1}.\n$$\n则 $|x_n-y_n|\\to0$，但\n$$\n|f(x_n)-f(y_n)|=1.\n$$\n故不一致连续。</p><p>例 3：证明 $f(x)=x^2$ 在 $\\mathbb R$ 上连续但不一致连续。</p><p>解：取 $x_n=n$，$y_n=n+1/n$。则 $|x_n-y_n|\\to0$，但\n$$\n|f(x_n)-f(y_n)|\n=\\left|n^2-\\left(n+\\frac1n\\right)^2\\right|\n=2+\\frac1{n^2}\\not\\to0.\n$$</p><h4 id=\"导数与微分\">导数与微分<a class=\"heading-anchor\" href=\"#导数与微分\" data-heading-id=\"导数与微分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"导数定义\">导数定义<a class=\"heading-anchor\" href=\"#导数定义\" data-heading-id=\"导数定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\nf&#039;(x_0)=\\lim_{\\Delta x\\to0}\n\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}.\n$$</div><p>等价写法：\n$$\nf&#039;(x_0)=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}.\n$$</p><p>左右导数：\n$$\nf&#039;_+(x_0),\\qquad f&#039;_-(x_0).\n$$\n可导当且仅当左右导数存在且相等。</p><p>可导必连续，连续不一定可导。</p><p>例子：</p><ul><li>$f(x)=|x|$ 在 $0$ 处连续但不可导；</li><li>分段函数在分界点处需要分别检查连续性、左右导数。</li></ul><h4 id=\"求导法则\">求导法则<a class=\"heading-anchor\" href=\"#求导法则\" data-heading-id=\"求导法则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n(u\\pm v)&#039;=u&#039;\\pm v&#039;,\n$$\n$$\n(uv)&#039;=u&#039;v+uv&#039;,\n$$\n$$\n\\left(\\frac uv\\right)&#039;=\\frac{u&#039;v-uv&#039;}{v^2}.\n$$</div><p>复合函数：\n$$\n(f\\circ g)&#039;(x)=f&#039;(g(x))g&#039;(x).\n$$</p><p>反函数：\n若 $f$ 在 $x_0$ 的邻域内连续严格单调、可导，且 $f&#039;(x_0)\\ne0$，令 $y_0=f(x_0)$，则\n$$\n(f^{-1})&#039;(y_0)=\\frac1{f&#039;(x_0)}.\n$$</p><p>参数方程：\n若 $x=x(t)$，$y=y(t)$，且 $x&#039;(t)\\ne0$，则\n$$\n\\frac{dy}{dx}=\\frac{y&#039;(t)}{x&#039;(t)}.\n$$</p><h4 id=\"高阶导数\">高阶导数<a class=\"heading-anchor\" href=\"#高阶导数\" data-heading-id=\"高阶导数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>递推定义：\n$$\nf^{(n)}=(f^{(n-1)})&#039;.\n$$</p><p>Leibniz 公式：\n$$\n(uv)^{(n)}\n=\\sum_{k=0}^{n}\\binom nk u^{(k)}v^{(n-k)}.\n$$</p><h4 id=\"微分\">微分<a class=\"heading-anchor\" href=\"#微分\" data-heading-id=\"微分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$f$ 在 $x_0$ 可微，当且仅当\n$$\nf(x_0+\\Delta x)-f(x_0)=A\\Delta x+o(\\Delta x).\n$$\n此时 $A=f&#039;(x_0)$，并记\n$$\ndy=f&#039;(x_0)\\,dx.\n$$</p><p>可微与可导等价（一元函数情形）。</p><p>微分法则：\n$$\nd(u\\pm v)=du\\pm dv,\n$$\n$$\nd(uv)=u\\,dv+v\\,du,\n$$\n$$\nd\\left(\\frac uv\\right)=\\frac{v\\,du-u\\,dv}{v^2}.\n$$</p><h4 id=\"本章例题-5\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-5\" data-heading-id=\"本章例题-5\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：证明 $f(x)=|x|$ 在 $0$ 处不可导。</p><p>解：\n$$\n\\frac{f(0+h)-f(0)}{h}=\\frac{|h|}{h}.\n$$\n当 $h\\to0+$ 时极限为 $1$，当 $h\\to0-$ 时极限为 $-1$，左右导数不同。</p><p>例 2：求 $y=\\arctan x$ 的导数。</p><p>解：令 $x=\\tan y$，则\n$$\n\\frac{dx}{dy}=\\sec^2y=1+\\tan^2y=1+x^2.\n$$\n所以\n$$\n\\frac{dy}{dx}=\\frac1{1+x^2}.\n$$</p><p>例 3：设 $x=t^2$，$y=t^3$。当 $t\\ne0$ 时求 $dy/dx$。</p><p>解：\n$$\n\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}=\\frac{3t^2}{2t}=\\frac32t.\n$$</p><p>例 4：求 $(x^2e^x)&#039;$。</p><p>解：\n$$\n(x^2e^x)&#039;=2xe^x+x^2e^x=(x^2+2x)e^x.\n$$</p><h4 id=\"微分中值定理-taylor-公式与凸性\">微分中值定理、Taylor 公式与凸性<a class=\"heading-anchor\" href=\"#微分中值定理-taylor-公式与凸性\" data-heading-id=\"微分中值定理-taylor-公式与凸性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"fermat-定理\">Fermat 定理<a class=\"heading-anchor\" href=\"#fermat-定理\" data-heading-id=\"fermat-定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 在 $x_0$ 可导，且 $x_0$ 是局部极值点，则\n$$\nf&#039;(x_0)=0.\n$$</p><p>注意：$f&#039;(x_0)=0$ 只是极值的必要条件，不是充分条件。</p><h4 id=\"rolle-定理\">Rolle 定理<a class=\"heading-anchor\" href=\"#rolle-定理\" data-heading-id=\"rolle-定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f\\in C[a,b]$，在 $(a,b)$ 可导，且 $f(a)=f(b)$，则存在 $\\xi\\in(a,b)$，使\n$$\nf&#039;(\\xi)=0.\n$$</p><h4 id=\"lagrange-中值定理\">Lagrange 中值定理<a class=\"heading-anchor\" href=\"#lagrange-中值定理\" data-heading-id=\"lagrange-中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f\\in C[a,b]$，在 $(a,b)$ 可导，则存在 $\\xi\\in(a,b)$，使\n$$\nf(b)-f(a)=f&#039;(\\xi)(b-a).\n$$</p><p>推论：</p><ul><li>若 $f&#039;=0$，则 $f$ 为常数；</li><li>若 $f&#039;&gt;0$，则 $f$ 严格递增；</li><li>若 $f&#039;&lt;0$，则 $f$ 严格递减；</li><li>若 $f&#039;\\ge0$，则 $f$ 单调不减。</li></ul><h4 id=\"darboux-定理\">Darboux 定理<a class=\"heading-anchor\" href=\"#darboux-定理\" data-heading-id=\"darboux-定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>导函数具有介值性。也就是说，导函数即使不连续，也不能有跳跃间断。</p><h4 id=\"cauchy-中值定理\">Cauchy 中值定理<a class=\"heading-anchor\" href=\"#cauchy-中值定理\" data-heading-id=\"cauchy-中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f,g\\in C[a,b]$，在 $(a,b)$ 可导，且 $g&#039;(x)\\ne0$，则存在 $\\xi\\in(a,b)$，使\n$$\n\\frac{f(b)-f(a)}{g(b)-g(a)}\n=\n\\frac{f&#039;(\\xi)}{g&#039;(\\xi)}.\n$$</p><h4 id=\"l-hospital-法则\">L&#039;Hospital 法则<a class=\"heading-anchor\" href=\"#l-hospital-法则\" data-heading-id=\"l-hospital-法则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>对 $0/0$ 或 $\\infty/\\infty$ 型，若 $f,g$ 在相应去心邻域内可导，$g&#039;\\ne0$，且\n$$\n\\lim\\frac{f&#039;}{g&#039;}=L,\n$$\n同时分母 $g$ 在去心邻域内不为 $0$，则在常用的洛必达条件下\n$$\n\\lim\\frac fg=L.\n$$</p><p>使用流程：</p><ol><li>先判定是否为未定式；</li><li>检查 $g&#039;\\ne0$；</li><li>求导后极限存在；</li><li>必要时可多次使用，但每次都要重新检查未定式。</li></ol><h4 id=\"taylor-公式\">Taylor 公式<a class=\"heading-anchor\" href=\"#taylor-公式\" data-heading-id=\"taylor-公式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>Peano 余项：\n若 $f$ 在 $x_0$ 处存在 $n$ 阶导数，则\n$$\nf(x)=\\sum_{k=0}^{n}\n\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k\n+o((x-x_0)^n).\n$$</p><p>Lagrange 余项：\n若 $f$ 在 $x_0$ 与 $x$ 之间有相应的 $n+1$ 阶导数，则存在介于 $x_0$ 与 $x$ 之间的 $\\xi$，使\n$$\nf(x)=\\sum_{k=0}^{n}\n\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k\n+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}.\n$$</p><p>常用 Maclaurin 展开：</p><div class=\"math-display\">$$\ne^x=1+x+\\frac{x^2}{2!}+\\cdots+\\frac{x^n}{n!}+o(x^n),\n$$\n$$\n\\sin x=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots,\n$$\n$$\n\\cos x=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots,\n$$\n$$\n\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots.\n$$</div><h4 id=\"极值判别\">极值判别<a class=\"heading-anchor\" href=\"#极值判别\" data-heading-id=\"极值判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>第一充分条件：<br />若 $f&#039;$ 在 $x_0$ 两侧变号，则 $x_0$ 为极值点。</p><p>第二充分条件：\n若\n$$\nf&#039;(x_0)=0,\\qquad f&#039;&#039;(x_0)&gt;0,\n$$\n则 $x_0$ 为极小值点；若 $f&#039;&#039;(x_0)&lt;0$，则为极大值点。</p><p>高阶判别：\n若\n$$\nf&#039;(x_0)=\\cdots=f^{(n-1)}(x_0)=0,\\qquad f^{(n)}(x_0)\\ne0,\n$$\n则 $n$ 偶时有极值，$n$ 奇时无极值。</p><h4 id=\"凸函数\">凸函数<a class=\"heading-anchor\" href=\"#凸函数\" data-heading-id=\"凸函数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>定义：\n$$\nf(\\lambda x+(1-\\lambda)y)\n\\le\n\\lambda f(x)+(1-\\lambda)f(y).\n$$</p><p>可导判别：\n若 $f$ 在区间内可导，则 $f$ 凸当且仅当图像在任一点切线之上：\n$$\nf(y)\\ge f(x)+f&#039;(x)(y-x).\n$$</p><p>二阶判别：\n若 $f$ 在区间内二阶可导，则\n$$\nf&#039;&#039;(x)\\ge0 \\quad\\Longleftrightarrow\\quad f \\text{ 凸}.\n$$</p><p>Jensen 不等式：\n若 $f$ 凸，$\\lambda_i\\ge0$，$\\sum\\lambda_i=1$，则\n$$\nf\\left(\\sum_{i=1}^{n}\\lambda_i x_i\\right)\n\\le\n\\sum_{i=1}^{n}\\lambda_i f(x_i).\n$$</p><p>拐点：<br />若曲线在 $x_0$ 两侧凹凸性发生改变，则 $x_0$ 为拐点候选。若 $f&#039;&#039;$ 在 $x_0$ 两侧变号，通常可判定为拐点。</p><h4 id=\"本章例题-6\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-6\" data-heading-id=\"本章例题-6\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：证明 $x&gt;0$ 时 $\\ln(1+x)&lt;x$。</p><p>解：令 $f(x)=x-\\ln(1+x)$，则\n$$\nf&#039;(x)=1-\\frac1{1+x}=\\frac{x}{1+x}&gt;0.\n$$\n又 $f(0)=0$，所以 $x&gt;0$ 时 $f(x)&gt;0$。</p><p>例 2：证明 $x&gt;0$ 时 $\\sin x&lt;x$。</p><p>解：令 $f(x)=x-\\sin x$。则\n$$\nf&#039;(x)=1-\\cos x\\ge0,\\qquad f(0)=0.\n$$\n故 $f(x)\\ge0$。当 $x&gt;0$ 时不恒等取零，因此 $\\sin x&lt;x$。</p><p>例 3：求\n$$\n\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}.\n$$</p><p>解：由\n$$\ne^x=1+x+\\frac{x^2}{2}+o(x^2),\n$$\n得极限为 $1/2$。</p><p>例 4：求\n$$\n\\lim_{x\\to0}\\frac{\\ln(1+x)-x+\\frac{x^2}{2}}{x^3}.\n$$</p><p>解：由\n$$\n\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}+o(x^3),\n$$\n得极限为 $1/3$。</p><p>例 5：讨论 $f(x)=x^3$ 在 $0$ 处是否有极值。</p><p>解：虽然 $f&#039;(0)=0$，但 $f&#039;(x)=3x^2\\ge0$，函数在 $0$ 两侧均单调不减，没有极大或极小。</p><h4 id=\"实数完备性几个定理\">实数完备性几个定理<a class=\"heading-anchor\" href=\"#实数完备性几个定理\" data-heading-id=\"实数完备性几个定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"区间套定理\">区间套定理<a class=\"heading-anchor\" href=\"#区间套定理\" data-heading-id=\"区间套定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若\n$$\n[a_1,b_1]\\supseteq [a_2,b_2]\\supseteq\\cdots,\n$$\n且\n$$\nb_n-a_n\\to0,\n$$\n则存在唯一 $\\xi$，使\n$$\n\\xi\\in[a_n,b_n]\\quad(n=1,2,\\dots).\n$$</p><h4 id=\"聚点定理\">聚点定理<a class=\"heading-anchor\" href=\"#聚点定理\" data-heading-id=\"聚点定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>点 $\\xi$ 是点集 $S$ 的聚点，若任意邻域内都含有 $S$ 中异于 $\\xi$ 的点。</p><p>等价表述：\n存在 $S$ 中互异点列 $x_n$，使\n$$\nx_n\\to\\xi.\n$$</p><p>Weierstrass 聚点定理：<br />有界无限点集必有聚点。</p><h4 id=\"heine-borel-有限覆盖定理\">Heine-Borel 有限覆盖定理<a class=\"heading-anchor\" href=\"#heine-borel-有限覆盖定理\" data-heading-id=\"heine-borel-有限覆盖定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>闭区间 $[a,b]$ 的任意开覆盖都有有限子覆盖。</p><p>证明通常使用区间套定理反证。</p><h4 id=\"本章例题-7\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-7\" data-heading-id=\"本章例题-7\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：设\n$$\nI_n=\\left[0,\\frac1n\\right].\n$$\n求这个区间套确定的点。</p><p>解：$I_1\\supset I_2\\supset\\cdots$，且长度 $1/n\\to0$。公共点唯一，为 $0$。</p><p>例 2：求\n$$\nS=\\left\\{\\frac1n:n\\in\\mathbb N^+\\right\\}\n$$\n的聚点。</p><p>解：$0$ 的任意邻域中都有足够大的 $1/n$，故 $0$ 是聚点。其他点附近只能含有限个 $S$ 中的点，不是聚点。</p><p>例 3：说明 $(0,1)$ 的开覆盖不一定有有限子覆盖。</p><p>解：取\n$$\n\\mathcal U=\\left\\{\\left(\\frac1n,1\\right):n=2,3,\\dots\\right\\}.\n$$\n它覆盖 $(0,1)$。任取有限多个，其中最小左端点为 $1/N$，则 $(0,1/N]$ 未被覆盖。</p><h4 id=\"不定积分\">不定积分<a class=\"heading-anchor\" href=\"#不定积分\" data-heading-id=\"不定积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"原函数与不定积分\">原函数与不定积分<a class=\"heading-anchor\" href=\"#原函数与不定积分\" data-heading-id=\"原函数与不定积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $F&#039;=f$，则 $F$ 是 $f$ 的原函数。</p><p>不定积分：\n$$\n\\int f(x)\\,dx=F(x)+C.\n$$</p><p>若 $F,G$ 都是 $f$ 的原函数，则 $F-G$ 为常数。</p><p>几何意义：<br />不定积分代表积分曲线族，曲线之间相差一个竖直平移。</p><h4 id=\"基本积分表\">基本积分表<a class=\"heading-anchor\" href=\"#基本积分表\" data-heading-id=\"基本积分表\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n\\int x^\\alpha dx=\\frac{x^{\\alpha+1}}{\\alpha+1}+C,\\quad \\alpha\\ne-1.\n$$</div><div class=\"math-display\">$$\n\\int\\frac1x\\,dx=\\ln|x|+C.\n$$</div><div class=\"math-display\">$$\n\\int e^x\\,dx=e^x+C,\\qquad\n\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C.\n$$</div><div class=\"math-display\">$$\n\\int\\sin x\\,dx=-\\cos x+C,\\qquad\n\\int\\cos x\\,dx=\\sin x+C.\n$$</div><div class=\"math-display\">$$\n\\int\\sec^2x\\,dx=\\tan x+C,\\qquad\n\\int\\csc^2x\\,dx=-\\cot x+C.\n$$</div><h4 id=\"换元积分法\">换元积分法<a class=\"heading-anchor\" href=\"#换元积分法\" data-heading-id=\"换元积分法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>第一换元法：\n$$\n\\int f(\\varphi(x))\\varphi&#039;(x)\\,dx\n=\n\\int f(u)\\,du,\\qquad u=\\varphi(x).\n$$</p><p>第二换元法：\n令 $x=\\varphi(t)$，则\n$$\n\\int f(x)\\,dx=\n\\int f(\\varphi(t))\\varphi&#039;(t)\\,dt.\n$$</p><h4 id=\"分部积分法\">分部积分法<a class=\"heading-anchor\" href=\"#分部积分法\" data-heading-id=\"分部积分法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n\\int u\\,dv=uv-\\int v\\,du.\n$$</div><p>常见应用：</p><ul><li>$\\int x e^x dx$；</li><li>$\\int x\\sin x dx$；</li><li>$\\int \\ln x dx$；</li><li>$\\int \\arctan x dx$；</li><li>$\\int \\sin^m x\\cos^n x dx$ 的递推。</li></ul><h4 id=\"本章例题-8\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-8\" data-heading-id=\"本章例题-8\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：求\n$$\n\\int \\frac{2x}{1+x^2}\\,dx.\n$$</p><p>解：令 $u=1+x^2$，则\n$$\n\\int \\frac{2x}{1+x^2}\\,dx=\\int\\frac1u\\,du=\\ln(1+x^2)+C.\n$$</p><p>例 2：求 $\\int\\ln x\\,dx$，其中 $x&gt;0$。</p><p>解：令 $u=\\ln x$，$dv=dx$，则\n$$\n\\int\\ln x\\,dx=x\\ln x-\\int1\\,dx=x\\ln x-x+C.\n$$</p><p>例 3：求\n$$\n\\int\\sin^2x\\,dx.\n$$</p><p>解：由\n$$\n\\sin^2x=\\frac{1-\\cos2x}{2},\n$$\n得\n$$\n\\int\\sin^2x\\,dx=\\frac{x}{2}-\\frac{\\sin2x}{4}+C.\n$$</p><h4 id=\"定积分\">定积分<a class=\"heading-anchor\" href=\"#定积分\" data-heading-id=\"定积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"riemann-积分定义\">Riemann 积分定义<a class=\"heading-anchor\" href=\"#riemann-积分定义\" data-heading-id=\"riemann-积分定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>分割：\n$$\nT:a=x_0&lt;x_1&lt;\\cdots&lt;x_n=b.\n$$</p><p>小区间长度：\n$$\n\\Delta x_i=x_i-x_{i-1}.\n$$</p><p>积分和：\n$$\n\\sum_{i=1}^{n}f(\\xi_i)\\Delta x_i,\\qquad\n\\xi_i\\in[x_{i-1},x_i].\n$$</p><p>若当 $|T|\\to0$ 时积分和极限存在且与分割、取点无关，则 $f$ 可积，记作\n$$\n\\int_a^b f(x)\\,dx.\n$$</p><h4 id=\"可积必要条件与-darboux-判别\">可积必要条件与 Darboux 判别<a class=\"heading-anchor\" href=\"#可积必要条件与-darboux-判别\" data-heading-id=\"可积必要条件与-darboux-判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>可积函数必有界。</p><p>Darboux 上下和：\n$$\nU(T)=\\sum M_i\\Delta x_i,\\qquad\nL(T)=\\sum m_i\\Delta x_i.\n$$</p><p>可积充要条件：\n$$\n\\forall\\varepsilon&gt;0,\\ \\exists T,\\quad U(T)-L(T)&lt;\\varepsilon.\n$$</p><p>常见充分条件：</p><ol><li>连续函数可积；</li><li>单调函数可积；</li><li>有界且仅有限个间断点的函数可积。</li></ol><p>例子：</p><ul><li>Dirichlet 函数不可积；</li><li>Riemann 函数类型可积性讨论；</li><li>单调函数可积证明：利用上、下和差估计。</li></ul><h4 id=\"定积分性质\">定积分性质<a class=\"heading-anchor\" href=\"#定积分性质\" data-heading-id=\"定积分性质\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>线性：\n$$\n\\int_a^b(\\alpha f+\\beta g)\n=\n\\alpha\\int_a^b f+\\beta\\int_a^b g.\n$$</p><p>区间可加：\n$$\n\\int_a^b f=\\int_a^c f+\\int_c^b f.\n$$</p><p>保序：\n若 $f\\le g$，则\n$$\n\\int_a^b f\\le\\int_a^b g.\n$$</p><p>绝对值不等式：\n$$\n\\left|\\int_a^b f\\right|\\le\\int_a^b |f|.\n$$</p><h4 id=\"积分中值定理\">积分中值定理<a class=\"heading-anchor\" href=\"#积分中值定理\" data-heading-id=\"积分中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>第一积分中值定理：\n若 $f\\in C[a,b]$，$g$ 可积且不变号，则存在 $\\xi\\in[a,b]$，使\n$$\n\\int_a^b f(x)g(x)\\,dx\n=\nf(\\xi)\\int_a^b g(x)\\,dx.\n$$</p><p>特别地：\n$$\n\\int_a^b f(x)\\,dx=f(\\xi)(b-a).\n$$</p><h4 id=\"微积分基本定理\">微积分基本定理<a class=\"heading-anchor\" href=\"#微积分基本定理\" data-heading-id=\"微积分基本定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 可积，定义\n$$\nF(x)=\\int_a^x f(t)\\,dt,\n$$\n则 $F$ 连续。若 $f$ 在 $x$ 处连续，则\n$$\nF&#039;(x)=f(x).\n$$</p><p>若 $f\\in C[a,b]$，$\\Phi&#039;=f$，则\n$$\n\\int_a^b f(x)\\,dx=\\Phi(b)-\\Phi(a).\n$$</p><p>- 求 $F(x)=\\int_a^x \\sin t^2\\,dt$ 的导数；\n- 求\n  $$\n  F(x)=\\int_{\\alpha(x)}^{\\beta(x)} f(t)\\,dt\n  $$\n  的导数：\n  $$\n  F&#039;(x)=f(\\beta(x))\\beta&#039;(x)-f(\\alpha(x))\\alpha&#039;(x).\n  $$</p><h4 id=\"定积分换元与分部积分\">定积分换元与分部积分<a class=\"heading-anchor\" href=\"#定积分换元与分部积分\" data-heading-id=\"定积分换元与分部积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>换元：\n$$\n\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)}f(x)\\,dx\n=\n\\int_\\alpha^\\beta f(\\varphi(t))\\varphi&#039;(t)\\,dt.\n$$</p><p>分部积分：\n$$\n\\int_a^b u\\,dv\n=uv\\bigg|_a^b-\\int_a^b v\\,du.\n$$</p><h4 id=\"积分第二中值定理\">积分第二中值定理<a class=\"heading-anchor\" href=\"#积分第二中值定理\" data-heading-id=\"积分第二中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 单调，$g$ 可积，则存在 $\\xi\\in[a,b]$，使\n$$\n\\int_a^b f(x)g(x)\\,dx\n=\nf(a)\\int_a^\\xi g(x)\\,dx\n+f(b)\\int_\\xi^b g(x)\\,dx.\n$$</p><p>推论：\n若 $f$ 单调递减、非负，且 $f(b)=0$，则存在 $\\xi\\in[a,b]$，使\n$$\n\\int_a^b f(x)g(x)\\,dx\n=\nf(a)\\int_a^\\xi g(x)\\,dx.\n$$\n一般情形应使用上一条含 $f(a)$ 与 $f(b)$ 的完整公式。</p><h4 id=\"本章例题-9\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-9\" data-heading-id=\"本章例题-9\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：求 $F&#039;(x)$，其中\n$$\nF(x)=\\int_a^x \\sin t^2\\,dt.\n$$</p><p>解：由微积分基本定理，\n$$\nF&#039;(x)=\\sin x^2.\n$$</p><p>例 2：设\n$$\nF(x)=\\int_{x^2}^{\\sin x} e^{-t^2}\\,dt.\n$$\n求 $F&#039;(x)$。</p><p>解：\n$$\nF&#039;(x)=e^{-\\sin^2x}\\cos x-2x e^{-x^4}.\n$$</p><p>例 3：求\n$$\n\\lim_{n\\to\\infty}\\frac1n\\sum_{k=1}^{n}\\left(\\frac{k}{n}\\right)^2.\n$$</p><p>解：这是 $f(x)=x^2$ 在 $[0,1]$ 上的 Riemann 和，故极限为\n$$\n\\int_0^1x^2\\,dx=\\frac13.\n$$</p><p>例 4：计算\n$$\n\\int_0^\\pi x\\sin x\\,dx.\n$$</p><p>解：分部积分得\n$$\n\\int_0^\\pi x\\sin x\\,dx\n=-x\\cos x\\bigg|_0^\\pi+\\int_0^\\pi\\cos x\\,dx\n=\\pi.\n$$</p><h4 id=\"定积分的应用\">定积分的应用<a class=\"heading-anchor\" href=\"#定积分的应用\" data-heading-id=\"定积分的应用\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"面积\">面积<a class=\"heading-anchor\" href=\"#面积\" data-heading-id=\"面积\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>曲边梯形面积：\n$$\nS=\\int_a^b f(x)\\,dx\\qquad(f\\ge0).\n$$</p><p>两曲线之间面积：\n$$\nS=\\int_a^b |f(x)-g(x)|\\,dx.\n$$</p><p>极坐标面积：\n$$\nS=\\frac12\\int_\\alpha^\\beta r^2(\\theta)\\,d\\theta.\n$$</p><h4 id=\"体积\">体积<a class=\"heading-anchor\" href=\"#体积\" data-heading-id=\"体积\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>截面面积法：\n$$\nV=\\int_a^b A(x)\\,dx.\n$$</p><p>旋转体体积：\n$$\nV=\\pi\\int_a^b f^2(x)\\,dx.\n$$</p><h4 id=\"弧长\">弧长<a class=\"heading-anchor\" href=\"#弧长\" data-heading-id=\"弧长\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>显函数：\n$$\ns=\\int_a^b\\sqrt{1+[f&#039;(x)]^2}\\,dx.\n$$</p><p>参数方程：\n$$\nx=x(t),\\qquad y=y(t)\n$$\n时\n$$\ns=\\int_\\alpha^\\beta\n\\sqrt{[x&#039;(t)]^2+[y&#039;(t)]^2}\\,dt.\n$$</p><p>极坐标：\n$$\ns=\\int_\\alpha^\\beta\n\\sqrt{r^2(\\theta)+[r&#039;(\\theta)]^2}\\,d\\theta.\n$$</p><h4 id=\"本章例题-10\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-10\" data-heading-id=\"本章例题-10\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：求曲线 $y=x^2$ 与 $y=x$ 围成的面积。</p><p>解：交点为 $0,1$。在 $[0,1]$ 上 $x\\ge x^2$，故\n$$\nS=\\int_0^1(x-x^2)\\,dx=\\frac16.\n$$</p><p>例 2：求极坐标曲线 $r=a$，$0\\le\\theta\\le2\\pi$ 围成的面积。</p><p>解：\n$$\nS=\\frac12\\int_0^{2\\pi}a^2\\,d\\theta=\\pi a^2.\n$$</p><p>例 3：求 $y=x^2$，$0\\le x\\le1$ 绕 $x$ 轴旋转所得旋转体体积。</p><p>解：\n$$\nV=\\pi\\int_0^1x^4\\,dx=\\frac{\\pi}{5}.\n$$</p><p>例 4：求参数曲线 $x=t$，$y=t^2$，$0\\le t\\le1$ 的弧长。</p><p>解：\n$$\ns=\\int_0^1\\sqrt{(x&#039;(t))^2+(y&#039;(t))^2}\\,dt\n=\\int_0^1\\sqrt{1+4t^2}\\,dt.\n$$</p><h4 id=\"反常积分\">反常积分<a class=\"heading-anchor\" href=\"#反常积分\" data-heading-id=\"反常积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"无穷积分\">无穷积分<a class=\"heading-anchor\" href=\"#无穷积分\" data-heading-id=\"无穷积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n\\int_a^{+\\infty}f(x)\\,dx\n=\n\\lim_{A\\to+\\infty}\\int_a^A f(x)\\,dx.\n$$</div><p>若极限存在且有限，则收敛；否则发散。</p><p>Cauchy 准则：\n$$\n\\forall\\varepsilon&gt;0,\\ \\exists A,\\ \\forall A_1,A_2&gt;A,\\quad\n\\left|\\int_{A_1}^{A_2}f(x)\\,dx\\right|&lt;\\varepsilon.\n$$</p><h4 id=\"瑕积分\">瑕积分<a class=\"heading-anchor\" href=\"#瑕积分\" data-heading-id=\"瑕积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 在 $a$ 附近无界，则\n$$\n\\int_a^b f(x)\\,dx\n=\n\\lim_{\\varepsilon\\to0+}\n\\int_{a+\\varepsilon}^b f(x)\\,dx.\n$$</p><h4 id=\"比较判别\">比较判别<a class=\"heading-anchor\" href=\"#比较判别\" data-heading-id=\"比较判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $0\\le f\\le g$：</p><ul><li>$\\int g$ 收敛推出 $\\int f$ 收敛；</li><li>$\\int f$ 发散推出 $\\int g$ 发散。</li></ul><p>极限比较：\n若\n$$\n\\lim_{x\\to\\infty}\\frac{f(x)}{g(x)}=c,\\qquad0&lt;c&lt;+\\infty,\n$$\n则二者同敛散。</p><h4 id=\"绝对收敛与条件收敛\">绝对收敛与条件收敛<a class=\"heading-anchor\" href=\"#绝对收敛与条件收敛\" data-heading-id=\"绝对收敛与条件收敛\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若\n$$\n\\int_a^\\infty |f(x)|\\,dx\n$$\n收敛，则 $\\int_a^\\infty f(x)\\,dx$ 绝对收敛。</p><p>绝对收敛必收敛；收敛但不绝对收敛称条件收敛。</p><h4 id=\"dirichlet-与-abel-判别法\">Dirichlet 与 Abel 判别法<a class=\"heading-anchor\" href=\"#dirichlet-与-abel-判别法\" data-heading-id=\"dirichlet-与-abel-判别法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>Dirichlet 判别：\n若\n$$\nF(A)=\\int_a^A f(x)\\,dx\n$$\n有界，$g(x)$ 单调且 $g(x)\\to0$，则\n$$\n\\int_a^\\infty f(x)g(x)\\,dx\n$$\n收敛。</p><p>Abel 判别：\n若 $\\int_a^\\infty f(x)\\,dx$ 收敛，$g$ 单调有界，则\n$$\n\\int_a^\\infty f(x)g(x)\\,dx\n$$\n收敛。</p><h4 id=\"本章例题-11\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-11\" data-heading-id=\"本章例题-11\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：讨论\n$$\n\\int_1^\\infty\\frac1{x^p}\\,dx\n$$\n的敛散性。</p><p>解：当 $p\\ne1$ 时，\n$$\n\\int_1^A x^{-p}\\,dx=\\frac{A^{1-p}-1}{1-p}.\n$$\n令 $A\\to\\infty$，可知收敛当且仅当 $p&gt;1$。$p=1$ 时为 $\\ln A$，发散。</p><p>例 2：讨论\n$$\n\\int_0^1\\frac1{x^p}\\,dx\n$$\n的敛散性。</p><p>解：当 $p\\ne1$ 时，\n$$\n\\int_\\varepsilon^1x^{-p}\\,dx=\\frac{1-\\varepsilon^{1-p}}{1-p}.\n$$\n令 $\\varepsilon\\to0+$，可知收敛当且仅当 $p&lt;1$。$p=1$ 时发散。</p><p>例 3：证明\n$$\n\\int_1^\\infty\\frac{\\sin x}{x}\\,dx\n$$\n收敛但不绝对收敛。</p><p>解：$\\int_1^A\\sin x\\,dx$ 有界，$1/x$ 单调趋于 $0$，由 Dirichlet 判别法知积分收敛。另一方面，$|\\sin x|/x$ 在每个长度为 $\\pi$ 的区间上有与 $1/x$ 同阶的正贡献，可与调和级数比较，故绝对积分发散。</p><h4 id=\"证明与计算模板\">证明与计算模板<a class=\"heading-anchor\" href=\"#证明与计算模板\" data-heading-id=\"证明与计算模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>这一部分把分散出现的证明套路集中起来，适合考前按题型复习。</p><h4 id=\"varepsilon-n-证明模板\">$\\varepsilon$-$N$ 证明模板<a class=\"heading-anchor\" href=\"#varepsilon-n-证明模板\" data-heading-id=\"varepsilon-n-证明模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>目标：证明\n$$\n\\lim_{n\\to\\infty}a_n=A.\n$$</p><p>步骤：</p><p>1. 从 $|a_n-A|$ 出发；\n2. 用不等式放缩到容易控制的形式，例如\n   $$\n   |a_n-A|\\le \\frac{C}{n},\\quad\n   |a_n-A|\\le \\frac{C}{n^p},\\quad\n   |a_n-A|\\le Cq^n\\ (0&lt;q&lt;1).\n   $$\n3. 给定 $\\varepsilon&gt;0$，反解 $N$；\n4. 写出“当 $n&gt;N$ 时”结论。</p><p>典型例 1：\n证明\n$$\n\\frac{2n+1}{n+3}\\to2.\n$$</p><p>解：\n$$\n\\left|\\frac{2n+1}{n+3}-2\\right|\n=\\left|\\frac{-5}{n+3}\\right|\n\\le\\frac5n.\n$$\n给定 $\\varepsilon&gt;0$，取\n$$\nN&gt;\\frac5\\varepsilon.\n$$\n则 $n&gt;N$ 时有\n$$\n\\left|\\frac{2n+1}{n+3}-2\\right|&lt;\\varepsilon.\n$$</p><p>典型例 2：\n证明\n$$\n\\sqrt[n]{a}\\to1\\qquad(a&gt;0).\n$$</p><p>思路：\n令 $b_n=\\sqrt[n]{a}-1$。\n若 $a&gt;1$，则 $b_n&gt;0$，且\n$$\na=(1+b_n)^n\\ge1+nb_n,\n$$\n从而\n$$\n0&lt;b_n\\le\\frac{a-1}{n}\\to0.\n$$\n若 $0&lt;a&lt;1$，可对 $1/a$ 使用上面的结论。</p><h4 id=\"用子列证明发散\">用子列证明发散<a class=\"heading-anchor\" href=\"#用子列证明发散\" data-heading-id=\"用子列证明发散\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>证明数列或函数极限不存在，优先找两个子列或两条趋近路径。</p><p>数列例：\n$$\na_n=(-1)^n.\n$$\n有\n$$\na_{2n}=1,\\qquad a_{2n-1}=-1,\n$$\n两个子列极限不同，故 $\\{a_n\\}$ 发散。</p><p>函数例：\n证明\n$$\n\\lim_{x\\to0}\\sin\\frac1x\n$$\n不存在。取\n$$\nx_n=\\frac{1}{2n\\pi+\\pi/2},\\qquad\ny_n=\\frac{1}{2n\\pi+3\\pi/2}.\n$$\n则\n$$\nx_n\\to0,\\quad y_n\\to0,\n$$\n但\n$$\n\\sin\\frac1{x_n}=1,\\qquad\n\\sin\\frac1{y_n}=-1.\n$$</p><h4 id=\"单调有界法\">单调有界法<a class=\"heading-anchor\" href=\"#单调有界法\" data-heading-id=\"单调有界法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>目标：证明数列收敛但不易求极限。</p><p>步骤：</p><ol><li>证明单调；</li><li>证明有界；</li><li>由单调有界定理得到收敛；</li><li>若有递推关系，令极限为 $L$，两边取极限求 $L$。</li></ol><p>典型递推例：\n设\n$$\nx_{n+1}=\\frac12\\left(x_n+\\frac{a}{x_n}\\right),\\qquad x_1&gt;0,\\ a&gt;0.\n$$\n常用于构造 $\\sqrt a$。证明：</p><p>- 先证 $x_n&gt;0$；\n- 用 AM-GM 得\n  $$\n  x_{n+1}\\ge\\sqrt a;\n  $$\n- 再证从某项起单调递减：\n  $$\n  x_{n+1}-x_n=\\frac{a-x_n^2}{2x_n}\\le0;\n  $$\n- 故收敛，设极限为 $L$，则\n  $$\n  L=\\frac12\\left(L+\\frac aL\\right),\n  $$\n  得 $L=\\sqrt a$。</p><h4 id=\"函数极限常用方法\">函数极限常用方法<a class=\"heading-anchor\" href=\"#函数极限常用方法\" data-heading-id=\"函数极限常用方法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>1. <strong>等价无穷小替换</strong>：\n   $$\n   \\sin x\\sim x,\\quad \\tan x\\sim x,\\quad\n   1-\\cos x\\sim\\frac{x^2}{2}.\n   $$\n2. <strong>有理化</strong>：\n   $$\n   \\sqrt{x+a}-\\sqrt{x+b}\n   =\n   \\frac{a-b}{\\sqrt{x+a}+\\sqrt{x+b}}.\n   $$\n3. <strong>取对数</strong>：处理幂指函数\n   $$\n   u(x)^{v(x)}=\\exp(v(x)\\ln u(x)).\n   $$\n4. <strong>夹逼</strong>：常见于含 $\\sin$、$\\cos$ 的有界振荡项。\n5. <strong>Taylor 展开</strong>：处理高阶无穷小。</p><p>典型例：\n求\n$$\n\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}.\n$$\n由\n$$\n1-\\cos x\\sim\\frac{x^2}{2},\n$$\n得极限为\n$$\n\\frac12.\n$$</p><p>典型例：\n求\n$$\n\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}.\n$$\n用\n$$\ne^x=1+x+\\frac{x^2}{2}+o(x^2),\n$$\n得极限为\n$$\n\\frac12.\n$$</p><h4 id=\"连续与一致连续题型\">连续与一致连续题型<a class=\"heading-anchor\" href=\"#连续与一致连续题型\" data-heading-id=\"连续与一致连续题型\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"证明连续\">证明连续<a class=\"heading-anchor\" href=\"#证明连续\" data-heading-id=\"证明连续\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>常用方式：</p><ol><li>直接用 $\\varepsilon$-$\\delta$；</li><li>用四则运算和复合连续性；</li><li>分段函数在分界点单独检查。</li></ol><p>分段函数在 $x_0$ 连续需要：\n$$\nf(x_0-)=f(x_0+)=f(x_0).\n$$</p><h5 id=\"证明不连续\">证明不连续<a class=\"heading-anchor\" href=\"#证明不连续\" data-heading-id=\"证明不连续\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>找左右极限不同、极限不存在，或极限与函数值不等。</p><h5 id=\"证明一致连续\">证明一致连续<a class=\"heading-anchor\" href=\"#证明一致连续\" data-heading-id=\"证明一致连续\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>常用充分条件：</p><p>- 闭区间连续；\n- Lipschitz 条件：\n  $$\n  |f(x)-f(y)|\\le L|x-y|;\n  $$\n- 导数有界。</p><h5 id=\"证明不一致连续\">证明不一致连续<a class=\"heading-anchor\" href=\"#证明不一致连续\" data-heading-id=\"证明不一致连续\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>找两列 $x_n,y_n$，满足\n$$\n|x_n-y_n|\\to0,\n$$\n但\n$$\n|f(x_n)-f(y_n)|\\not\\to0.\n$$</p><p>典型例：\n$f(x)=1/x$ 在 $(0,1)$ 上不一致连续。取\n$$\nx_n=\\frac1n,\\qquad y_n=\\frac1{n+1}.\n$$\n则\n$$\n|x_n-y_n|\\to0,\n$$\n但\n$$\n\\left|\\frac1{x_n}-\\frac1{y_n}\\right|=1.\n$$</p><h4 id=\"中值定理证明不等式\">中值定理证明不等式<a class=\"heading-anchor\" href=\"#中值定理证明不等式\" data-heading-id=\"中值定理证明不等式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>常见思路：\n要证明\n$$\nF(x)\\ge0\n$$\n或某个不等式，构造辅助函数，再用 Rolle 或 Lagrange 中值定理。</p><p>典型例：\n证明 $x&gt;0$ 时\n$$\n\\ln(1+x)&lt;x.\n$$</p><p>令\n$$\nf(x)=x-\\ln(1+x).\n$$\n则\n$$\nf&#039;(x)=1-\\frac1{1+x}=\\frac{x}{1+x}&gt;0.\n$$\n又 $f(0)=0$，故 $x&gt;0$ 时 $f(x)&gt;0$。</p><p>典型例：\n证明\n$$\n\\sin x&lt;x\\qquad(x&gt;0).\n$$\n令\n$$\nf(x)=x-\\sin x.\n$$\n则\n$$\nf&#039;(x)=1-\\cos x\\ge0,\n$$\n且 $f(0)=0$，故结论成立。</p><h4 id=\"taylor-公式题型\">Taylor 公式题型<a class=\"heading-anchor\" href=\"#taylor-公式题型\" data-heading-id=\"taylor-公式题型\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"求极限\">求极限<a class=\"heading-anchor\" href=\"#求极限\" data-heading-id=\"求极限\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>原则：展开到第一个非零项。</p><p>例：\n$$\n\\lim_{x\\to0}\\frac{\\ln(1+x)-x+\\frac{x^2}{2}}{x^3}.\n$$\n由\n$$\n\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}+o(x^3),\n$$\n得极限为\n$$\n\\frac13.\n$$</p><h5 id=\"判断极值\">判断极值<a class=\"heading-anchor\" href=\"#判断极值\" data-heading-id=\"判断极值\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若在 $x_0$ 处\n$$\nf&#039;(x_0)=\\cdots=f^{(n-1)}(x_0)=0,\\quad f^{(n)}(x_0)\\ne0,\n$$\n则看第一个非零高阶项。</p><ul><li>$n$ 偶且系数正：极小；</li><li>$n$ 偶且系数负：极大；</li><li>$n$ 奇：不是极值。</li></ul><h5 id=\"证明不等式\">证明不等式<a class=\"heading-anchor\" href=\"#证明不等式\" data-heading-id=\"证明不等式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>用 Lagrange 余项控制符号。</p><p>例：\n证明 $x&gt;0$ 时\n$$\ne^x&gt;1+x.\n$$\nTaylor：\n$$\ne^x=1+x+\\frac{e^\\xi}{2}x^2&gt;1+x.\n$$</p><h4 id=\"不定积分计算模板\">不定积分计算模板<a class=\"heading-anchor\" href=\"#不定积分计算模板\" data-heading-id=\"不定积分计算模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"换元\">换元<a class=\"heading-anchor\" href=\"#换元\" data-heading-id=\"换元\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>看到复合函数乘导数：\n$$\n\\int f(\\varphi(x))\\varphi&#039;(x)\\,dx\n$$\n令\n$$\nu=\\varphi(x).\n$$</p><p>例：\n$$\n\\int \\frac{2x}{1+x^2}\\,dx\n=\\ln(1+x^2)+C.\n$$</p><h5 id=\"分部积分\">分部积分<a class=\"heading-anchor\" href=\"#分部积分\" data-heading-id=\"分部积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>适合：</p><ul><li>多项式 $\\times$ 指数；</li><li>多项式 $\\times$ 三角；</li><li>$\\ln x$；</li><li>反三角函数。</li></ul><p>例：\n$$\n\\int \\ln x\\,dx.\n$$\n令 $u=\\ln x$，$dv=dx$，则\n$$\n\\int\\ln x\\,dx=x\\ln x-x+C.\n$$</p><h5 id=\"三角积分\">三角积分<a class=\"heading-anchor\" href=\"#三角积分\" data-heading-id=\"三角积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>常用恒等式：\n$$\n\\sin^2x=\\frac{1-\\cos2x}{2},\\qquad\n\\cos^2x=\\frac{1+\\cos2x}{2}.\n$$</p><p>若 $\\sin$ 的奇次幂出现，留一个 $\\sin x\\,dx$，其余转成 $\\cos x$；若 $\\cos$ 奇次幂出现，类似处理。</p><h4 id=\"定积分计算模板\">定积分计算模板<a class=\"heading-anchor\" href=\"#定积分计算模板\" data-heading-id=\"定积分计算模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"利用对称性\">利用对称性<a class=\"heading-anchor\" href=\"#利用对称性\" data-heading-id=\"利用对称性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若 $f$ 为奇函数：\n$$\n\\int_{-a}^{a}f(x)\\,dx=0.\n$$</p><p>若 $f$ 为偶函数：\n$$\n\\int_{-a}^{a}f(x)\\,dx=2\\int_0^a f(x)\\,dx.\n$$</p><p>若\n$$\nI=\\int_0^a f(x)\\,dx,\n$$\n常用替换 $x=a-t$：\n$$\nI=\\int_0^a f(a-t)\\,dt.\n$$</p><h5 id=\"变上限积分求导\">变上限积分求导<a class=\"heading-anchor\" href=\"#变上限积分求导\" data-heading-id=\"变上限积分求导\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若\n$$\nF(x)=\\int_{\\alpha(x)}^{\\beta(x)}f(t)\\,dt,\n$$\n则\n$$\nF&#039;(x)=f(\\beta(x))\\beta&#039;(x)-f(\\alpha(x))\\alpha&#039;(x).\n$$</p><p>例：\n$$\nF(x)=\\int_{x^2}^{\\sin x} e^{-t^2}\\,dt.\n$$\n则\n$$\nF&#039;(x)=e^{-\\sin^2x}\\cos x-2x e^{-x^4}.\n$$</p><h5 id=\"积分和极限\">积分和极限<a class=\"heading-anchor\" href=\"#积分和极限\" data-heading-id=\"积分和极限\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若出现\n$$\n\\lim_{n\\to\\infty}\\frac1n\\sum_{k=1}^{n}f\\left(\\frac{k}{n}\\right),\n$$\n通常转为\n$$\n\\int_0^1 f(x)\\,dx.\n$$</p><p>更一般地：\n$$\n\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\nf\\left(a+\\frac{k}{n}(b-a)\\right)\\frac{b-a}{n}\n=\\int_a^b f(x)\\,dx.\n$$</p><h4 id=\"可积性证明模板\">可积性证明模板<a class=\"heading-anchor\" href=\"#可积性证明模板\" data-heading-id=\"可积性证明模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"连续函数可积\">连续函数可积<a class=\"heading-anchor\" href=\"#连续函数可积\" data-heading-id=\"连续函数可积\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>用一致连续性：\n给定 $\\varepsilon&gt;0$，存在 $\\delta$，使 $|x-y|&lt;\\delta$ 时\n$$\n|f(x)-f(y)|&lt;\\frac{\\varepsilon}{b-a}.\n$$\n取分割细度小于 $\\delta$，得\n$$\nU(T)-L(T)&lt;\\varepsilon.\n$$</p><h5 id=\"单调函数可积\">单调函数可积<a class=\"heading-anchor\" href=\"#单调函数可积\" data-heading-id=\"单调函数可积\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>设 $f$ 单调递增。对等分分割，有\n$$\nU(T)-L(T)\n=\\sum_{i=1}^{n}(f(x_i)-f(x_{i-1}))\\Delta x_i\n\\le \\frac{b-a}{n}(f(b)-f(a)).\n$$\n令 $n$ 充分大即可。</p><h5 id=\"有限间断点函数可积\">有限间断点函数可积<a class=\"heading-anchor\" href=\"#有限间断点函数可积\" data-heading-id=\"有限间断点函数可积\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>在间断点附近取很小区间，总长度很小；其余闭子区间上连续，从而可积。用上下和控制。</p><h4 id=\"反常积分判别模板\">反常积分判别模板<a class=\"heading-anchor\" href=\"#反常积分判别模板\" data-heading-id=\"反常积分判别模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"p-积分\">$p$-积分<a class=\"heading-anchor\" href=\"#p-积分\" data-heading-id=\"p-积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><div class=\"math-display\">$$\n\\int_1^\\infty \\frac{1}{x^p}\\,dx\n$$\n收敛当且仅当\n$$\np&gt;1.\n$$</div><div class=\"math-display\">$$\n\\int_0^1 \\frac{1}{x^p}\\,dx\n$$\n收敛当且仅当\n$$\np&lt;1.\n$$</div><h5 id=\"比较判别-2\">比较判别<a class=\"heading-anchor\" href=\"#比较判别-2\" data-heading-id=\"比较判别-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>大 $x$ 时若\n$$\n0\\le f(x)\\le \\frac{C}{x^p},\\quad p&gt;1,\n$$\n则 $\\int^\\infty f$ 收敛。</p><p>若对充分大的 $x$ 有\n$$\nf(x)\\ge \\frac{c}{x},\\quad c&gt;0,\n$$\n且 $f(x)\\ge0$，则 $\\int^\\infty f$ 发散。</p><h5 id=\"dirichlet-判别常见例\">Dirichlet 判别常见例<a class=\"heading-anchor\" href=\"#dirichlet-判别常见例\" data-heading-id=\"dirichlet-判别常见例\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>$$\n\\int_1^\\infty \\frac{\\sin x}{x}\\,dx\n$$\n收敛但不绝对收敛。</p><p>理由：\n$$\n\\int_1^A \\sin x\\,dx\n$$\n有界，$1/x$ 单调趋于 $0$。</p><p>但\n$$\n\\int_1^\\infty \\frac{|\\sin x|}{x}\\,dx\n$$\n发散。</p><h4 id=\"容易误用的点\">容易误用的点<a class=\"heading-anchor\" href=\"#容易误用的点\" data-heading-id=\"容易误用的点\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>收敛数列一定有界，但有界数列不一定收敛。</li><li>单调是单调有界定理不可缺少的条件。</li><li>函数极限与函数在该点是否定义无关，连续才要求函数值等于极限。</li><li>一致连续不是逐点连续；开区间连续不一定一致连续。</li><li>可导必连续，连续不一定可导。</li><li>在区间上 $f&#039;(x)&gt;0$ 推出严格递增；$f&#039;(x)\\ge0$ 只推出单调不减。</li><li>洛必达必须先确认是未定式。</li><li>Taylor 展开要展开到第一个非零项。</li><li>可积必有界；无界函数不可能 Riemann 可积，但可能有反常积分。</li><li>绝对收敛推出收敛，反过来不成立。</li></ol><h4 id=\"主要定理证明\">主要定理证明<a class=\"heading-anchor\" href=\"#主要定理证明\" data-heading-id=\"主要定理证明\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"确界刻画\">确界刻画<a class=\"heading-anchor\" href=\"#确界刻画\" data-heading-id=\"确界刻画\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $S\\ne\\varnothing$ 且有上界。证明 $\\alpha=\\sup S$ 当且仅当：</p><ol><li>$x\\le\\alpha$ 对一切 $x\\in S$ 成立；</li><li>对任意 $\\varepsilon&gt;0$，存在 $x_\\varepsilon\\in S$，使 $\\alpha-\\varepsilon&lt;x_\\varepsilon\\le\\alpha$。</li></ol><p>证明：<br />若 $\\alpha=\\sup S$，则 $\\alpha$ 是上界，所以第一条成立。若第二条不成立，则存在 $\\varepsilon_0&gt;0$，使所有 $x\\in S$ 都满足 $x\\le\\alpha-\\varepsilon_0$。于是 $\\alpha-\\varepsilon_0$ 也是上界，且小于 $\\alpha$，与 $\\alpha$ 是最小上界矛盾。</p><p>反过来，若两条成立，则 $\\alpha$ 是上界。任取 $\\beta&lt;\\alpha$，令 $\\varepsilon=\\alpha-\\beta&gt;0$，由第二条存在 $x_\\varepsilon\\in S$ 使 $x_\\varepsilon&gt;\\beta$，所以 $\\beta$ 不是上界。因此没有小于 $\\alpha$ 的上界，$\\alpha=\\sup S$。</p><p>下确界的证明完全类似，把不等号方向反过来即可。</p><h4 id=\"数列极限的唯一性-有界性与保序性\">数列极限的唯一性、有界性与保序性<a class=\"heading-anchor\" href=\"#数列极限的唯一性-有界性与保序性\" data-heading-id=\"数列极限的唯一性-有界性与保序性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>唯一性证明：\n若 $a_n\\to a$ 且 $a_n\\to b$，对任意 $\\varepsilon&gt;0$，取 $N$，使 $n&gt;N$ 时\n$$\n|a_n-a|&lt;\\frac{\\varepsilon}{2},\\qquad |a_n-b|&lt;\\frac{\\varepsilon}{2}.\n$$\n于是\n$$\n|a-b|\\le |a-a_n|+|a_n-b|&lt;\\varepsilon.\n$$\n由 $\\varepsilon$ 任意得 $a=b$。</p><p>有界性证明：\n由 $a_n\\to a$，取 $\\varepsilon=1$，存在 $N$，使 $n&gt;N$ 时 $|a_n-a|&lt;1$，故 $|a_n|\\le |a|+1$。前 $N$ 项只有有限个，令\n$$\nM=\\max\\{|a_1|,\\dots,|a_N|,|a|+1\\},\n$$\n则对一切 $n$ 有 $|a_n|\\le M$。</p><p>保序性证明：\n若从某项起 $a_n\\le b_n$，且 $a_n\\to a$、$b_n\\to b$。若 $a&gt;b$，取 $\\varepsilon=(a-b)/3$。充分大时\n$$\na_n&gt;a-\\varepsilon,\\qquad b_n&lt;b+\\varepsilon.\n$$\n而 $a-\\varepsilon&gt;b+\\varepsilon$，所以 $a_n&gt;b_n$，与 $a_n\\le b_n$ 矛盾。因此 $a\\le b$。</p><h4 id=\"夹逼定理-2\">夹逼定理<a class=\"heading-anchor\" href=\"#夹逼定理-2\" data-heading-id=\"夹逼定理-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设从某项起\n$$\na_n\\le c_n\\le b_n,\\qquad a_n\\to A,\\quad b_n\\to A.\n$$\n给定 $\\varepsilon&gt;0$，充分大时\n$$\nA-\\varepsilon&lt;a_n\\le c_n\\le b_n&lt;A+\\varepsilon.\n$$\n因此 $|c_n-A|&lt;\\varepsilon$，故 $c_n\\to A$。</p><h4 id=\"单调有界定理-2\">单调有界定理<a class=\"heading-anchor\" href=\"#单调有界定理-2\" data-heading-id=\"单调有界定理-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $\\{a_n\\}$ 单调递增且有上界。令\n$$\n\\alpha=\\sup\\{a_n:n\\in\\mathbb N^+\\}.\n$$\n由上确界刻画，给定 $\\varepsilon&gt;0$，存在 $N$，使\n$$\n\\alpha-\\varepsilon&lt;a_N\\le\\alpha.\n$$\n当 $n\\ge N$ 时，由单调性\n$$\n\\alpha-\\varepsilon&lt;a_N\\le a_n\\le\\alpha,\n$$\n所以 $|a_n-\\alpha|&lt;\\varepsilon$。故 $a_n\\to\\alpha$。单调递减有下界的情形同理，极限为下确界。</p><h4 id=\"cauchy-收敛准则\">Cauchy 收敛准则<a class=\"heading-anchor\" href=\"#cauchy-收敛准则\" data-heading-id=\"cauchy-收敛准则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>收敛推出 Cauchy：\n若 $a_n\\to a$，给定 $\\varepsilon&gt;0$，取 $N$，使 $n&gt;N$ 时 $|a_n-a|&lt;\\varepsilon/2$。则 $m,n&gt;N$ 时\n$$\n|a_m-a_n|\\le |a_m-a|+|a_n-a|&lt;\\varepsilon.\n$$</p><p>Cauchy 推出收敛：\n先取 $\\varepsilon=1$，知从某项起 $|a_n-a_N|&lt;1$，所以数列有界。由致密性定理，存在子列 $a_{n_k}\\to a$。再由 Cauchy 性，给定 $\\varepsilon&gt;0$，取 $N$，使 $m,n&gt;N$ 时 $|a_m-a_n|&lt;\\varepsilon/2$；又取 $k$ 使 $n_k&gt;N$ 且 $|a_{n_k}-a|&lt;\\varepsilon/2$。于是 $n&gt;N$ 时\n$$\n|a_n-a|\\le |a_n-a_{n_k}|+|a_{n_k}-a|&lt;\\varepsilon.\n$$\n故 $a_n\\to a$。</p><h4 id=\"heine-归结原则-2\">Heine 归结原则<a class=\"heading-anchor\" href=\"#heine-归结原则-2\" data-heading-id=\"heine-归结原则-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $f$ 在 $x_0$ 去心邻域内有定义。</p><p>若 $\\lim_{x\\to x_0}f(x)=A$，则对任意 $x_n\\ne x_0$ 且 $x_n\\to x_0$，由极限定义可知 $f(x_n)\\to A$。</p><p>反过来，若对任意 $x_n\\ne x_0$ 且 $x_n\\to x_0$ 都有 $f(x_n)\\to A$，但函数极限不等于 $A$，则存在 $\\varepsilon_0&gt;0$，使任意 $\\delta&gt;0$，都能找到 $x$ 满足\n$$\n0&lt;|x-x_0|&lt;\\delta,\\qquad |f(x)-A|\\ge\\varepsilon_0.\n$$\n令 $\\delta=1/n$，可取 $x_n$ 满足上述条件。则 $x_n\\to x_0$，但 $f(x_n)$ 不趋于 $A$，矛盾。</p><h4 id=\"闭区间连续函数的有界性与最值定理\">闭区间连续函数的有界性与最值定理<a class=\"heading-anchor\" href=\"#闭区间连续函数的有界性与最值定理\" data-heading-id=\"闭区间连续函数的有界性与最值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>有界性证明：<br />若 $f\\in C[a,b]$ 但无界，则对每个 $n$，存在 $x_n\\in[a,b]$ 使 $|f(x_n)|&gt;n$。由致密性定理，$\\{x_n\\}$ 有子列 $x_{n_k}\\to x_0\\in[a,b]$。连续性给出 $f(x_{n_k})\\to f(x_0)$，从而该子列函数值有界，与 $|f(x_{n_k})|&gt;n_k$ 矛盾。</p><p>最值定理证明：\n由有界性，令 $M=\\sup f([a,b])$。按上确界刻画，存在 $x_n\\in[a,b]$，使 $f(x_n)&gt;M-1/n$。取收敛子列 $x_{n_k}\\to x_0\\in[a,b]$。由连续性\n$$\nf(x_0)=\\lim_{k\\to\\infty}f(x_{n_k})=M.\n$$\n故最大值取得。最小值对 $-f$ 使用同样结论。</p><h4 id=\"零点定理与介值定理\">零点定理与介值定理<a class=\"heading-anchor\" href=\"#零点定理与介值定理\" data-heading-id=\"零点定理与介值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>零点定理证明：\n设 $f(a)&lt;0&lt;f(b)$。令\n$$\nS=\\{x\\in[a,b]:f(x)&lt;0\\}.\n$$\n$S$ 非空且有上界，设 $\\xi=\\sup S$。若 $f(\\xi)&gt;0$，由连续性，$\\xi$ 左侧足够近处也有 $f&gt;0$，与 $\\xi$ 是 $S$ 的上确界矛盾。若 $f(\\xi)&lt;0$，由连续性，$\\xi$ 右侧足够近处也有 $f&lt;0$，与 $\\xi$ 是上界矛盾。因此 $f(\\xi)=0$。</p><p>介值定理证明：<br />若 $C$ 介于 $f(a)$ 与 $f(b)$ 之间，令 $g(x)=f(x)-C$。则 $g$ 连续且两端异号，由零点定理存在 $\\xi$ 使 $g(\\xi)=0$，即 $f(\\xi)=C$。</p><h4 id=\"cantor-一致连续定理\">Cantor 一致连续定理<a class=\"heading-anchor\" href=\"#cantor-一致连续定理\" data-heading-id=\"cantor-一致连续定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f\\in C[a,b]$ 但不一致连续，则存在 $\\varepsilon_0&gt;0$，对任意 $n$，可取 $x_n,y_n\\in[a,b]$，使\n$$\n|x_n-y_n|&lt;\\frac1n,\\qquad |f(x_n)-f(y_n)|\\ge\\varepsilon_0.\n$$\n由致密性定理，取子列 $x_{n_k}\\to x_0\\in[a,b]$。又\n$$\n|y_{n_k}-x_0|\\le |y_{n_k}-x_{n_k}|+|x_{n_k}-x_0|\\to0,\n$$\n所以 $y_{n_k}\\to x_0$。连续性给出\n$$\nf(x_{n_k})\\to f(x_0),\\qquad f(y_{n_k})\\to f(x_0),\n$$\n从而 $|f(x_{n_k})-f(y_{n_k})|\\to0$，矛盾。</p><h4 id=\"rolle-定理-lagrange-中值定理与-cauchy-中值定理\">Rolle 定理、Lagrange 中值定理与 Cauchy 中值定理<a class=\"heading-anchor\" href=\"#rolle-定理-lagrange-中值定理与-cauchy-中值定理\" data-heading-id=\"rolle-定理-lagrange-中值定理与-cauchy-中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>Rolle 定理证明：<br />由最值定理，$f$ 在 $[a,b]$ 上取到最大值和最小值。若最大值等于最小值，则 $f$ 为常数，任取 $\\xi\\in(a,b)$ 有 $f&#039;(\\xi)=0$。否则最大值或最小值至少有一个在内部点取得。设内部极值点为 $\\xi$，由 Fermat 定理得 $f&#039;(\\xi)=0$。</p><p>Lagrange 中值定理证明：\n构造\n$$\nF(x)=f(x)-\\frac{f(b)-f(a)}{b-a}(x-a).\n$$\n则 $F\\in C[a,b]$，在 $(a,b)$ 可导，且 $F(a)=F(b)$。由 Rolle 定理，存在 $\\xi$ 使 $F&#039;(\\xi)=0$，即\n$$\nf&#039;(\\xi)=\\frac{f(b)-f(a)}{b-a}.\n$$</p><p>Cauchy 中值定理证明：\n构造\n$$\nF(x)=(f(b)-f(a))(g(x)-g(a))-(g(b)-g(a))(f(x)-f(a)).\n$$\n则 $F(a)=F(b)=0$。由 Rolle 定理存在 $\\xi$ 使 $F&#039;(\\xi)=0$，即\n$$\n(f(b)-f(a))g&#039;(\\xi)=(g(b)-g(a))f&#039;(\\xi).\n$$\n若 $g&#039;(\\xi)\\ne0$，整理得结论。</p><h4 id=\"taylor-公式-2\">Taylor 公式<a class=\"heading-anchor\" href=\"#taylor-公式-2\" data-heading-id=\"taylor-公式-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>Peano 余项证明：\n设\n$$\nP_n(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k.\n$$\n令 $R_n(x)=f(x)-P_n(x)$。则 $R_n(x_0)=R_n&#039;(x_0)=\\cdots=R_n^{(n)}(x_0)=0$。对 $R_n(x)/(x-x_0)^n$ 连续使用洛必达法则 $n$ 次，得到\n$$\n\\lim_{x\\to x_0}\\frac{R_n(x)}{(x-x_0)^n}=0,\n$$\n即 $R_n(x)=o((x-x_0)^n)$。</p><p>Lagrange 余项证明：\n设 $x\\ne x_0$，令\n$$\nR=f(x)-P_n(x).\n$$\n构造\n$$\nF(t)=f(t)-\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(t-x_0)^k\n-R\\frac{(t-x_0)^{n+1}}{(x-x_0)^{n+1}}.\n$$\n则 $F(x_0)=F&#039;(x_0)=\\cdots=F^{(n)}(x_0)=0$ 且 $F(x)=0$。连续使用 Rolle 定理 $n+1$ 次，存在 $\\xi$ 介于 $x_0$ 与 $x$ 之间，使 $F^{(n+1)}(\\xi)=0$。整理得\n$$\nR=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}.\n$$</p><h4 id=\"区间套定理与聚点定理\">区间套定理与聚点定理<a class=\"heading-anchor\" href=\"#区间套定理与聚点定理\" data-heading-id=\"区间套定理与聚点定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>区间套定理证明：\n设 $[a_n,b_n]$ 递减且 $b_n-a_n\\to0$。由单调性，$\\{a_n\\}$ 单调递增且有上界，故收敛到 $\\alpha$；$\\{b_n\\}$ 单调递减且有下界，故收敛到 $\\beta$。又\n$$\n0\\le \\beta-\\alpha=\\lim(b_n-a_n)=0,\n$$\n所以 $\\alpha=\\beta$。记公共极限为 $\\xi$，则对每个 $n$ 有 $a_n\\le \\xi\\le b_n$。若还有 $\\eta$ 属于所有区间，则 $|\\eta-\\xi|\\le b_n-a_n$ 对一切 $n$ 成立，令 $n\\to\\infty$ 得 $\\eta=\\xi$。</p><p>聚点定理证明：<br />对有界无限点集 $S$，取闭区间 $[a,b]$ 包含 $S$。把区间二等分，至少有一半含有 $S$ 的无限多个点，取这一半为 $[a_1,b_1]$。反复二分，得到区间套 $[a_n,b_n]$，每个区间都含有 $S$ 的无限多个点，且长度趋于 $0$。由区间套定理存在唯一 $\\xi$ 属于所有区间。任意邻域内包含某个 $[a_n,b_n]$，其中有无限多个 $S$ 中的点，故 $\\xi$ 是聚点。</p><h4 id=\"riemann-可积的常用充分条件\">Riemann 可积的常用充分条件<a class=\"heading-anchor\" href=\"#riemann-可积的常用充分条件\" data-heading-id=\"riemann-可积的常用充分条件\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>连续函数可积：\n由 Cantor 定理，$f$ 在 $[a,b]$ 上一致连续。给定 $\\varepsilon&gt;0$，取 $\\delta$，使 $|x-y|&lt;\\delta$ 时\n$$\n|f(x)-f(y)|&lt;\\frac{\\varepsilon}{b-a}.\n$$\n当分割 $T$ 的细度小于 $\\delta$ 时，每个小区间上的振幅小于 $\\varepsilon/(b-a)$，所以\n$$\nU(T)-L(T)&lt;\\sum_i \\frac{\\varepsilon}{b-a}\\Delta x_i=\\varepsilon.\n$$\n故 $f$ 可积。</p><p>单调函数可积：\n设 $f$ 单调递增。取等分分割，$\\Delta x=(b-a)/n$。则\n$$\nU(T)-L(T)=\\sum_{i=1}^{n}(f(x_i)-f(x_{i-1}))\\Delta x\n=\\frac{b-a}{n}(f(b)-f(a)).\n$$\n令 $n$ 足够大，即可使上、下和之差小于任意 $\\varepsilon$，故可积。单调递减同理。</p><h4 id=\"微积分基本定理-2\">微积分基本定理<a class=\"heading-anchor\" href=\"#微积分基本定理-2\" data-heading-id=\"微积分基本定理-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设\n$$\nF(x)=\\int_a^x f(t)\\,dt.\n$$\n若 $f$ 在 $x$ 处连续，则\n$$\n\\frac{F(x+h)-F(x)}{h}\n=\\frac1h\\int_x^{x+h}f(t)\\,dt.\n$$\n再减去 $f(x)$，得\n$$\n\\left|\\frac{F(x+h)-F(x)}{h}-f(x)\\right|\n\\le \\sup_{t\\text{ 介于 }x,x+h}|f(t)-f(x)|.\n$$\n由 $f$ 在 $x$ 处连续，右端随 $h\\to0$ 趋于 $0$，所以 $F&#039;(x)=f(x)$。</p><p>若 $f\\in C[a,b]$ 且 $\\Phi&#039;=f$，则 $F-\\Phi$ 导数恒为 $0$，故 $F-\\Phi$ 为常数。于是\n$$\n\\int_a^b f(x)\\,dx=F(b)-F(a)=\\Phi(b)-\\Phi(a).\n$$</p><h4 id=\"反常积分的比较判别与-dirichlet-判别\">反常积分的比较判别与 Dirichlet 判别<a class=\"heading-anchor\" href=\"#反常积分的比较判别与-dirichlet-判别\" data-heading-id=\"反常积分的比较判别与-dirichlet-判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>比较判别证明：\n若 $0\\le f\\le g$，且 $\\int_a^\\infty g$ 收敛，则对 $A&gt;B&gt;a$，\n$$\n0\\le \\int_B^A f\\le \\int_B^A g.\n$$\n由 $g$ 的 Cauchy 准则，右端可任意小，故 $\\int_a^\\infty f$ 收敛。若 $\\int f$ 发散而 $\\int g$ 收敛，则刚证出的结论会推出 $\\int f$ 收敛，矛盾；故 $\\int g$ 发散。</p><p>Dirichlet 判别证明：\n设 $F(x)=\\int_a^x f(t)\\,dt$ 有界，$g$ 单调趋于 $0$。对 $A&lt;B$ 作分部积分：\n$$\n\\int_A^B f(x)g(x)\\,dx\n=F(B)g(B)-F(A)g(A)-\\int_A^B F(x)\\,dg(x).\n$$\n若 $|F|\\le M$，利用 $g$ 单调且趋于 $0$，可得尾积分绝对值由 $C|g(A)|$ 控制，随 $A\\to\\infty$ 趋于 $0$。由 Cauchy 准则，积分收敛。</p><h4 id=\"附件\">附件<a class=\"heading-anchor\" href=\"#附件\" data-heading-id=\"附件\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"entry-file\"><a class=\"download-button\" href=\"files/2026-04-24-main-math-notes/数学分析I.pdf\" download><span>下载 / 预览 PDF</span><small>数学分析I.pdf</small></a><details class=\"file-preview\"><summary>Preview / 预览</summary><iframe src=\"files/2026-04-24-main-math-notes/数学分析I.pdf\" title=\"数学分析I.pdf\" loading=\"lazy\"></iframe></details></div>",
      "headings": [
        {
          "id": "实数-确界与函数",
          "title": "实数、确界与函数",
          "level": 4
        },
        {
          "id": "实数集的基本性质",
          "title": "实数集的基本性质",
          "level": 4
        },
        {
          "id": "邻域",
          "title": "邻域",
          "level": 4
        },
        {
          "id": "上界-下界-确界",
          "title": "上界、下界、确界",
          "level": 4
        },
        {
          "id": "确界原理",
          "title": "确界原理",
          "level": 4
        },
        {
          "id": "函数与函数有界性",
          "title": "函数与函数有界性",
          "level": 4
        },
        {
          "id": "本章例题",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "数列极限",
          "title": "数列极限",
          "level": 4
        },
        {
          "id": "数列与极限定义",
          "title": "数列与极限定义",
          "level": 4
        },
        {
          "id": "极限证明模板",
          "title": "极限证明模板",
          "level": 4
        },
        {
          "id": "收敛数列的性质",
          "title": "收敛数列的性质",
          "level": 4
        },
        {
          "id": "唯一性",
          "title": "唯一性",
          "level": 5
        },
        {
          "id": "有界性",
          "title": "有界性",
          "level": 5
        },
        {
          "id": "保号性",
          "title": "保号性",
          "level": 5
        },
        {
          "id": "保序性",
          "title": "保序性",
          "level": 5
        },
        {
          "id": "夹逼定理",
          "title": "夹逼定理",
          "level": 5
        },
        {
          "id": "四则运算",
          "title": "四则运算",
          "level": 5
        },
        {
          "id": "子列",
          "title": "子列",
          "level": 4
        },
        {
          "id": "单调有界定理",
          "title": "单调有界定理",
          "level": 4
        },
        {
          "id": "致密性定理与-cauchy-收敛准则",
          "title": "致密性定理与 Cauchy 收敛准则",
          "level": 4
        },
        {
          "id": "stolz-定理与常用极限",
          "title": "Stolz 定理与常用极限",
          "level": 4
        },
        {
          "id": "本章例题-2",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "函数极限",
          "title": "函数极限",
          "level": 4
        },
        {
          "id": "函数极限定义",
          "title": "函数极限定义",
          "level": 4
        },
        {
          "id": "极限与函数在点处取值无关",
          "title": "极限与函数在点处取值无关",
          "level": 4
        },
        {
          "id": "heine-归结原则",
          "title": "Heine 归结原则",
          "level": 4
        },
        {
          "id": "cauchy-准则",
          "title": "Cauchy 准则",
          "level": 4
        },
        {
          "id": "两个重要极限",
          "title": "两个重要极限",
          "level": 4
        },
        {
          "id": "无穷小-无穷大与等价",
          "title": "无穷小、无穷大与等价",
          "level": 4
        },
        {
          "id": "渐近线",
          "title": "渐近线",
          "level": 4
        },
        {
          "id": "本章例题-3",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "连续函数",
          "title": "连续函数",
          "level": 4
        },
        {
          "id": "连续定义",
          "title": "连续定义",
          "level": 4
        },
        {
          "id": "间断点分类",
          "title": "间断点分类",
          "level": 4
        },
        {
          "id": "连续函数运算",
          "title": "连续函数运算",
          "level": 4
        },
        {
          "id": "闭区间连续函数性质",
          "title": "闭区间连续函数性质",
          "level": 4
        },
        {
          "id": "一致连续",
          "title": "一致连续",
          "level": 4
        },
        {
          "id": "反函数连续性",
          "title": "反函数连续性",
          "level": 4
        },
        {
          "id": "本章例题-4",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "导数与微分",
          "title": "导数与微分",
          "level": 4
        },
        {
          "id": "导数定义",
          "title": "导数定义",
          "level": 4
        },
        {
          "id": "求导法则",
          "title": "求导法则",
          "level": 4
        },
        {
          "id": "高阶导数",
          "title": "高阶导数",
          "level": 4
        },
        {
          "id": "微分",
          "title": "微分",
          "level": 4
        },
        {
          "id": "本章例题-5",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "微分中值定理-taylor-公式与凸性",
          "title": "微分中值定理、Taylor 公式与凸性",
          "level": 4
        },
        {
          "id": "fermat-定理",
          "title": "Fermat 定理",
          "level": 4
        },
        {
          "id": "rolle-定理",
          "title": "Rolle 定理",
          "level": 4
        },
        {
          "id": "lagrange-中值定理",
          "title": "Lagrange 中值定理",
          "level": 4
        },
        {
          "id": "darboux-定理",
          "title": "Darboux 定理",
          "level": 4
        },
        {
          "id": "cauchy-中值定理",
          "title": "Cauchy 中值定理",
          "level": 4
        },
        {
          "id": "l-hospital-法则",
          "title": "L'Hospital 法则",
          "level": 4
        },
        {
          "id": "taylor-公式",
          "title": "Taylor 公式",
          "level": 4
        },
        {
          "id": "极值判别",
          "title": "极值判别",
          "level": 4
        },
        {
          "id": "凸函数",
          "title": "凸函数",
          "level": 4
        },
        {
          "id": "本章例题-6",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "实数完备性几个定理",
          "title": "实数完备性几个定理",
          "level": 4
        },
        {
          "id": "区间套定理",
          "title": "区间套定理",
          "level": 4
        },
        {
          "id": "聚点定理",
          "title": "聚点定理",
          "level": 4
        },
        {
          "id": "heine-borel-有限覆盖定理",
          "title": "Heine-Borel 有限覆盖定理",
          "level": 4
        },
        {
          "id": "本章例题-7",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "不定积分",
          "title": "不定积分",
          "level": 4
        },
        {
          "id": "原函数与不定积分",
          "title": "原函数与不定积分",
          "level": 4
        },
        {
          "id": "基本积分表",
          "title": "基本积分表",
          "level": 4
        },
        {
          "id": "换元积分法",
          "title": "换元积分法",
          "level": 4
        },
        {
          "id": "分部积分法",
          "title": "分部积分法",
          "level": 4
        },
        {
          "id": "本章例题-8",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "定积分",
          "title": "定积分",
          "level": 4
        },
        {
          "id": "riemann-积分定义",
          "title": "Riemann 积分定义",
          "level": 4
        },
        {
          "id": "可积必要条件与-darboux-判别",
          "title": "可积必要条件与 Darboux 判别",
          "level": 4
        },
        {
          "id": "定积分性质",
          "title": "定积分性质",
          "level": 4
        },
        {
          "id": "积分中值定理",
          "title": "积分中值定理",
          "level": 4
        },
        {
          "id": "微积分基本定理",
          "title": "微积分基本定理",
          "level": 4
        },
        {
          "id": "定积分换元与分部积分",
          "title": "定积分换元与分部积分",
          "level": 4
        },
        {
          "id": "积分第二中值定理",
          "title": "积分第二中值定理",
          "level": 4
        },
        {
          "id": "本章例题-9",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "定积分的应用",
          "title": "定积分的应用",
          "level": 4
        },
        {
          "id": "面积",
          "title": "面积",
          "level": 4
        },
        {
          "id": "体积",
          "title": "体积",
          "level": 4
        },
        {
          "id": "弧长",
          "title": "弧长",
          "level": 4
        },
        {
          "id": "本章例题-10",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "反常积分",
          "title": "反常积分",
          "level": 4
        },
        {
          "id": "无穷积分",
          "title": "无穷积分",
          "level": 4
        },
        {
          "id": "瑕积分",
          "title": "瑕积分",
          "level": 4
        },
        {
          "id": "比较判别",
          "title": "比较判别",
          "level": 4
        },
        {
          "id": "绝对收敛与条件收敛",
          "title": "绝对收敛与条件收敛",
          "level": 4
        },
        {
          "id": "dirichlet-与-abel-判别法",
          "title": "Dirichlet 与 Abel 判别法",
          "level": 4
        },
        {
          "id": "本章例题-11",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "证明与计算模板",
          "title": "证明与计算模板",
          "level": 4
        },
        {
          "id": "varepsilon-n-证明模板",
          "title": "$\\varepsilon$-$N$ 证明模板",
          "level": 4
        },
        {
          "id": "用子列证明发散",
          "title": "用子列证明发散",
          "level": 4
        },
        {
          "id": "单调有界法",
          "title": "单调有界法",
          "level": 4
        },
        {
          "id": "函数极限常用方法",
          "title": "函数极限常用方法",
          "level": 4
        },
        {
          "id": "连续与一致连续题型",
          "title": "连续与一致连续题型",
          "level": 4
        },
        {
          "id": "证明连续",
          "title": "证明连续",
          "level": 5
        },
        {
          "id": "证明不连续",
          "title": "证明不连续",
          "level": 5
        },
        {
          "id": "证明一致连续",
          "title": "证明一致连续",
          "level": 5
        },
        {
          "id": "证明不一致连续",
          "title": "证明不一致连续",
          "level": 5
        },
        {
          "id": "中值定理证明不等式",
          "title": "中值定理证明不等式",
          "level": 4
        },
        {
          "id": "taylor-公式题型",
          "title": "Taylor 公式题型",
          "level": 4
        },
        {
          "id": "求极限",
          "title": "求极限",
          "level": 5
        },
        {
          "id": "判断极值",
          "title": "判断极值",
          "level": 5
        },
        {
          "id": "证明不等式",
          "title": "证明不等式",
          "level": 5
        },
        {
          "id": "不定积分计算模板",
          "title": "不定积分计算模板",
          "level": 4
        },
        {
          "id": "换元",
          "title": "换元",
          "level": 5
        },
        {
          "id": "分部积分",
          "title": "分部积分",
          "level": 5
        },
        {
          "id": "三角积分",
          "title": "三角积分",
          "level": 5
        },
        {
          "id": "定积分计算模板",
          "title": "定积分计算模板",
          "level": 4
        },
        {
          "id": "利用对称性",
          "title": "利用对称性",
          "level": 5
        },
        {
          "id": "变上限积分求导",
          "title": "变上限积分求导",
          "level": 5
        },
        {
          "id": "积分和极限",
          "title": "积分和极限",
          "level": 5
        },
        {
          "id": "可积性证明模板",
          "title": "可积性证明模板",
          "level": 4
        },
        {
          "id": "连续函数可积",
          "title": "连续函数可积",
          "level": 5
        },
        {
          "id": "单调函数可积",
          "title": "单调函数可积",
          "level": 5
        },
        {
          "id": "有限间断点函数可积",
          "title": "有限间断点函数可积",
          "level": 5
        },
        {
          "id": "反常积分判别模板",
          "title": "反常积分判别模板",
          "level": 4
        },
        {
          "id": "p-积分",
          "title": "$p$-积分",
          "level": 5
        },
        {
          "id": "比较判别-2",
          "title": "比较判别",
          "level": 5
        },
        {
          "id": "dirichlet-判别常见例",
          "title": "Dirichlet 判别常见例",
          "level": 5
        },
        {
          "id": "容易误用的点",
          "title": "容易误用的点",
          "level": 4
        },
        {
          "id": "主要定理证明",
          "title": "主要定理证明",
          "level": 4
        },
        {
          "id": "确界刻画",
          "title": "确界刻画",
          "level": 4
        },
        {
          "id": "数列极限的唯一性-有界性与保序性",
          "title": "数列极限的唯一性、有界性与保序性",
          "level": 4
        },
        {
          "id": "夹逼定理-2",
          "title": "夹逼定理",
          "level": 4
        },
        {
          "id": "单调有界定理-2",
          "title": "单调有界定理",
          "level": 4
        },
        {
          "id": "cauchy-收敛准则",
          "title": "Cauchy 收敛准则",
          "level": 4
        },
        {
          "id": "heine-归结原则-2",
          "title": "Heine 归结原则",
          "level": 4
        },
        {
          "id": "闭区间连续函数的有界性与最值定理",
          "title": "闭区间连续函数的有界性与最值定理",
          "level": 4
        },
        {
          "id": "零点定理与介值定理",
          "title": "零点定理与介值定理",
          "level": 4
        },
        {
          "id": "cantor-一致连续定理",
          "title": "Cantor 一致连续定理",
          "level": 4
        },
        {
          "id": "rolle-定理-lagrange-中值定理与-cauchy-中值定理",
          "title": "Rolle 定理、Lagrange 中值定理与 Cauchy 中值定理",
          "level": 4
        },
        {
          "id": "taylor-公式-2",
          "title": "Taylor 公式",
          "level": 4
        },
        {
          "id": "区间套定理与聚点定理",
          "title": "区间套定理与聚点定理",
          "level": 4
        },
        {
          "id": "riemann-可积的常用充分条件",
          "title": "Riemann 可积的常用充分条件",
          "level": 4
        },
        {
          "id": "微积分基本定理-2",
          "title": "微积分基本定理",
          "level": 4
        },
        {
          "id": "反常积分的比较判别与-dirichlet-判别",
          "title": "反常积分的比较判别与 Dirichlet 判别",
          "level": 4
        },
        {
          "id": "附件",
          "title": "附件",
          "level": 4
        }
      ],
      "excerpt": "实数、确界与函数 实数集的基本性质 实数集 $\\mathbb R$ 的常用性质： 1. 有序性：任意 $a,b\\in\\mathbb R$ 可比较大小。 2. 传递性：若 $ab$，$bc$，则 $ac$。 3. 阿基米德性：若 $a0$，$...",
      "readingMinutes": 22,
      "createdAt": "2026-04-24T00:00:00.000Z"
    },
    {
      "id": "notes/math/2026-04-24-mathematical-analysis-i-review-outline.md",
      "slug": "2026-04-24-mathematical-analysis-i-review-outline",
      "source": "post",
      "kind": "notes",
      "title": "数学分析 I 复习提纲",
      "publishedIndex": 6,
      "stage": "Notes 笔记",
      "tag": "数学",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<blockquote>来源：<code>数分I复习.pdf</code>。  <br />参考校订：<code>数学分析 上.pdf</code>、<code>《数学分析》辅导.pdf</code>。  <br />本文件按复习页内容整理为考前提纲，公式已按标准表述校正。</blockquote><h4 id=\"1-实数完备性与确界\">1. 实数完备性与确界<a class=\"heading-anchor\" href=\"#1-实数完备性与确界\" data-heading-id=\"1-实数完备性与确界\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"确界原理\">确界原理<a class=\"heading-anchor\" href=\"#确界原理\" data-heading-id=\"确界原理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>非空有上界数集必有上确界；非空有下界数集必有下确界。</p><p>等价完备性命题：</p><ul><li>单调有界定理；</li><li>区间套定理；</li><li>Bolzano-Weierstrass 聚点定理；</li><li>Heine-Borel 有限覆盖定理；</li><li>Cauchy 收敛准则。</li></ul><h4 id=\"2-数列极限\">2. 数列极限<a class=\"heading-anchor\" href=\"#2-数列极限\" data-heading-id=\"2-数列极限\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"定义\">定义<a class=\"heading-anchor\" href=\"#定义\" data-heading-id=\"定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n\\lim_{n\\to\\infty}a_n=A\n$$\n当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists N,\\ \\forall n&gt;N,\\quad |a_n-A|&lt;\\varepsilon.\n$$</div><h4 id=\"基本性质\">基本性质<a class=\"heading-anchor\" href=\"#基本性质\" data-heading-id=\"基本性质\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>收敛数列具有：</p><ul><li>极限唯一性；</li><li>有界性；</li><li>保号性；</li><li>保序性；</li><li>夹逼定理；</li><li>四则运算法则。</li></ul><p>落在任意邻域 $U(A,\\varepsilon)$ 外的项只有有限项。</p><h4 id=\"子列判别\">子列判别<a class=\"heading-anchor\" href=\"#子列判别\" data-heading-id=\"子列判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>数列收敛于 $A$，当且仅当它的任意子列都收敛于 $A$。</p><p>若两个子列极限不同，则原数列发散。</p><h4 id=\"单调有界定理\">单调有界定理<a class=\"heading-anchor\" href=\"#单调有界定理\" data-heading-id=\"单调有界定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>单调且有界的数列必收敛。</p><h4 id=\"cauchy-收敛准则\">Cauchy 收敛准则<a class=\"heading-anchor\" href=\"#cauchy-收敛准则\" data-heading-id=\"cauchy-收敛准则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>数列 $\\{a_n\\}$ 收敛，当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists N,\\ \\forall m,n&gt;N,\\quad |a_m-a_n|&lt;\\varepsilon.\n$$</p><h4 id=\"stolz-定理\">Stolz 定理<a class=\"heading-anchor\" href=\"#stolz-定理\" data-heading-id=\"stolz-定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $b_n$ 严格递增且 $b_n\\to+\\infty$，并且\n$$\n\\lim_{n\\to\\infty}\\frac{a_n-a_{n-1}}{b_n-b_{n-1}}=L,\n$$\n则\n$$\n\\lim_{n\\to\\infty}\\frac{a_n}{b_n}=L.\n$$</p><p>使用时先确认 $b_n$ 的单调性和趋于 $+\\infty$；它本质上是“差商极限推出商极限”。</p><h4 id=\"3-函数极限\">3. 函数极限<a class=\"heading-anchor\" href=\"#3-函数极限\" data-heading-id=\"3-函数极限\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"varepsilon-delta-定义\">$\\varepsilon$-$\\delta$ 定义<a class=\"heading-anchor\" href=\"#varepsilon-delta-定义\" data-heading-id=\"varepsilon-delta-定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n\\lim_{x\\to x_0}f(x)=A\n$$\n当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists \\delta&gt;0,\\quad\n0&lt;|x-x_0|&lt;\\delta \\Rightarrow |f(x)-A|&lt;\\varepsilon.\n$$</div><p>无穷远处极限：\n$$\n\\lim_{x\\to+\\infty}f(x)=A\n$$\n当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists M&gt;0,\\quad x&gt;M\\Rightarrow |f(x)-A|&lt;\\varepsilon.\n$$</p><h4 id=\"heine-归结原则\">Heine 归结原则<a class=\"heading-anchor\" href=\"#heine-归结原则\" data-heading-id=\"heine-归结原则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$\\lim_{x\\to x_0}f(x)=A$ 当且仅当对任意满足 $x_n\\ne x_0$ 且 $x_n\\to x_0$ 的数列，都有\n$$\n\\lim_{n\\to\\infty}f(x_n)=A.\n$$</p><h4 id=\"cauchy-准则\">Cauchy 准则<a class=\"heading-anchor\" href=\"#cauchy-准则\" data-heading-id=\"cauchy-准则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$\\lim_{x\\to x_0}f(x)$ 存在，当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists \\delta&gt;0,\\quad\n0&lt;|x_1-x_0|&lt;\\delta,\\ 0&lt;|x_2-x_0|&lt;\\delta\n\\Rightarrow |f(x_1)-f(x_2)|&lt;\\varepsilon.\n$$</p><h4 id=\"无穷小-无穷大与渐近线\">无穷小、无穷大与渐近线<a class=\"heading-anchor\" href=\"#无穷小-无穷大与渐近线\" data-heading-id=\"无穷小-无穷大与渐近线\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>- $f(x)\\to0$ 称为无穷小；\n- $|f(x)|\\to+\\infty$ 称为无穷大；\n- 若\n  $$\n  \\lim_{x\\to\\infty}\\bigl[f(x)-(kx+b)\\bigr]=0,\n  $$\n  则 $y=kx+b$ 为斜渐近线。</p><h4 id=\"4-连续函数\">4. 连续函数<a class=\"heading-anchor\" href=\"#4-连续函数\" data-heading-id=\"4-连续函数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"连续定义\">连续定义<a class=\"heading-anchor\" href=\"#连续定义\" data-heading-id=\"连续定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$f$ 在 $x_0$ 连续，当且仅当\n$$\n\\lim_{x\\to x_0}f(x)=f(x_0).\n$$</p><p>等价地：\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists\\delta&gt;0,\\quad |x-x_0|&lt;\\delta\n\\Rightarrow |f(x)-f(x_0)|&lt;\\varepsilon.\n$$</p><h4 id=\"间断点分类\">间断点分类<a class=\"heading-anchor\" href=\"#间断点分类\" data-heading-id=\"间断点分类\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>可去间断点：左右极限相等且有限，但函数值缺失或不等于该极限；</li><li>跳跃间断点：左右极限均存在且有限，但不相等；</li><li>第二类间断点：至少一个单侧极限不存在或为无穷。</li></ol><p>若函数仅有有限个第一类间断点，常称为分段连续函数。</p><h4 id=\"闭区间连续函数性质\">闭区间连续函数性质<a class=\"heading-anchor\" href=\"#闭区间连续函数性质\" data-heading-id=\"闭区间连续函数性质\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f\\in C[a,b]$，则：</p><ul><li>有界性定理；</li><li>最大最小值定理；</li><li>零点存在定理；</li><li>介值定理；</li><li>一致连续性定理。</li></ul><h4 id=\"一致连续\">一致连续<a class=\"heading-anchor\" href=\"#一致连续\" data-heading-id=\"一致连续\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$f$ 在 $D$ 上一致连续，当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists\\delta&gt;0,\\quad\nx,y\\in D,\\ |x-y|&lt;\\delta\\Rightarrow |f(x)-f(y)|&lt;\\varepsilon.\n$$</p><p>闭区间上连续函数必一致连续。</p><p>若 $f$ 在 $(a,b)$ 连续，则常用判别：<br />若 $f(a+)$ 与 $f(b-)$ 均存在且有限，则 $f$ 在 $(a,b)$ 上一致连续。</p><p>常见充分条件：</p><ul><li>Lipschitz 条件；</li><li>导数有界；</li><li>Cantor 定理，即闭区间连续推出一致连续。</li></ul><h4 id=\"5-导数与微分\">5. 导数与微分<a class=\"heading-anchor\" href=\"#5-导数与微分\" data-heading-id=\"5-导数与微分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"导数\">导数<a class=\"heading-anchor\" href=\"#导数\" data-heading-id=\"导数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\nf&#039;(x_0)=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}\n=\\lim_{\\Delta x\\to0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}.\n$$</div><p>可导必连续，连续未必可导。</p><h4 id=\"费马定理\">费马定理<a class=\"heading-anchor\" href=\"#费马定理\" data-heading-id=\"费马定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 在 $x_0$ 可导，且 $x_0$ 是局部极值点，则\n$$\nf&#039;(x_0)=0.\n$$</p><h4 id=\"微分\">微分<a class=\"heading-anchor\" href=\"#微分\" data-heading-id=\"微分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$f$ 在 $x_0$ 可微，当且仅当\n$$\nf(x_0+\\Delta x)-f(x_0)=A\\Delta x+o(\\Delta x).\n$$</p><p>此时\n$$\nA=f&#039;(x_0),\\qquad dy=f&#039;(x_0)\\,dx.\n$$</p><h4 id=\"6-微分中值定理\">6. 微分中值定理<a class=\"heading-anchor\" href=\"#6-微分中值定理\" data-heading-id=\"6-微分中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"rolle-定理\">Rolle 定理<a class=\"heading-anchor\" href=\"#rolle-定理\" data-heading-id=\"rolle-定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f\\in C[a,b]$，在 $(a,b)$ 可导，且 $f(a)=f(b)$，则存在 $\\xi\\in(a,b)$，使\n$$\nf&#039;(\\xi)=0.\n$$</p><h4 id=\"lagrange-中值定理\">Lagrange 中值定理<a class=\"heading-anchor\" href=\"#lagrange-中值定理\" data-heading-id=\"lagrange-中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f\\in C[a,b]$，在 $(a,b)$ 可导，则存在 $\\xi\\in(a,b)$，使\n$$\nf&#039;(\\xi)=\\frac{f(b)-f(a)}{b-a}.\n$$</p><h4 id=\"cauchy-中值定理\">Cauchy 中值定理<a class=\"heading-anchor\" href=\"#cauchy-中值定理\" data-heading-id=\"cauchy-中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f,g\\in C[a,b]$，在 $(a,b)$ 可导，且 $g&#039;(x)\\ne0$，则存在 $\\xi\\in(a,b)$，使\n$$\n\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f&#039;(\\xi)}{g&#039;(\\xi)}.\n$$</p><h4 id=\"darboux-定理\">Darboux 定理<a class=\"heading-anchor\" href=\"#darboux-定理\" data-heading-id=\"darboux-定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>导函数具有介值性。即若 $f$ 在区间上可导，则 $f&#039;$ 虽不一定连续，但不能有跳跃间断。</p><h4 id=\"7-l-hospital-法则与-taylor-公式\">7. L&#039;Hospital 法则与 Taylor 公式<a class=\"heading-anchor\" href=\"#7-l-hospital-法则与-taylor-公式\" data-heading-id=\"7-l-hospital-法则与-taylor-公式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"l-hospital-法则\">L&#039;Hospital 法则<a class=\"heading-anchor\" href=\"#l-hospital-法则\" data-heading-id=\"l-hospital-法则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f,g$ 在 $x_0$ 的去心邻域内可导，$g&#039;(x)\\ne0$，并且属于 $0/0$ 或 $\\infty/\\infty$ 型，且\n$$\n\\lim_{x\\to x_0}\\frac{f&#039;(x)}{g&#039;(x)}=L,\n$$\n则\n$$\n\\lim_{x\\to x_0}\\frac{f(x)}{g(x)}=L\n$$\n在相应条件下成立。</p><p>洛必达法则必须先判定未定式；若原极限不是 $0/0$ 或 $\\infty/\\infty$ 型，应先化简或使用其他极限法则。</p><h4 id=\"taylor-公式\">Taylor 公式<a class=\"heading-anchor\" href=\"#taylor-公式\" data-heading-id=\"taylor-公式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>Peano 余项：\n若 $f$ 在 $x_0$ 处有 $n$ 阶导数，则\n$$\nf(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o\\bigl((x-x_0)^n\\bigr).\n$$</p><p>Lagrange 余项：\n若 $f$ 在 $x_0$ 与 $x$ 间有 $n+1$ 阶导数，则\n$$\nf(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k\n+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}.\n$$</p><p>常用展开：</p><div class=\"math-display\">$$\ne^x=1+x+\\frac{x^2}{2!}+\\cdots+\\frac{x^n}{n!}+o(x^n),\n$$</div><div class=\"math-display\">$$\n\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots+(-1)^{n-1}\\frac{x^n}{n}+o(x^n).\n$$</div><h4 id=\"8-极值-单调性与凸性\">8. 极值、单调性与凸性<a class=\"heading-anchor\" href=\"#8-极值-单调性与凸性\" data-heading-id=\"8-极值-单调性与凸性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"极值判别\">极值判别<a class=\"heading-anchor\" href=\"#极值判别\" data-heading-id=\"极值判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>一阶充分条件：若 $f&#039;$ 在 $x_0$ 两侧变号，则 $x_0$ 为极值点。</p><p>二阶充分条件：若\n$$\nf&#039;(x_0)=0,\\qquad f&#039;&#039;(x_0)&gt;0,\n$$\n则 $x_0$ 为局部极小点；若 $f&#039;&#039;(x_0)&lt;0$，则为局部极大点。</p><h4 id=\"单调性\">单调性<a class=\"heading-anchor\" href=\"#单调性\" data-heading-id=\"单调性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f&#039;(x)\\ge0$，则 $f$ 单调不减；若 $f&#039;(x)&gt;0$，则 $f$ 严格递增。</p><h4 id=\"凸函数\">凸函数<a class=\"heading-anchor\" href=\"#凸函数\" data-heading-id=\"凸函数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$f$ 在区间 $I$ 上为凸函数，当且仅当对任意 $x,y\\in I$ 与 $\\lambda\\in[0,1]$，\n$$\nf(\\lambda x+(1-\\lambda)y)\n\\le \\lambda f(x)+(1-\\lambda)f(y).\n$$</p><p>若 $f$ 二阶可导，则\n$$\nf&#039;&#039;(x)\\ge0\n$$\n是凸函数的充要条件。</p><p>Jensen 不等式：\n若 $f$ 凸，$\\lambda_i\\ge0$，$\\sum\\lambda_i=1$，则\n$$\nf\\left(\\sum_{i=1}^n\\lambda_i x_i\\right)\n\\le \\sum_{i=1}^n\\lambda_i f(x_i).\n$$</p><h4 id=\"9-不定积分\">9. 不定积分<a class=\"heading-anchor\" href=\"#9-不定积分\" data-heading-id=\"9-不定积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $F&#039;(x)=f(x)$，则 $F$ 是 $f$ 的原函数，\n$$\n\\int f(x)\\,dx=F(x)+C.\n$$</p><p>常用方法：</p><p>- 第一换元法；\n- 第二换元法；\n- 分部积分：\n  $$\n  \\int u\\,dv=uv-\\int v\\,du.\n  $$</p><p>常见积分：</p><div class=\"math-display\">$$\n\\int \\frac{1}{x}\\,dx=\\ln|x|+C,\\qquad\n\\int \\sec^2x\\,dx=\\tan x+C,\n$$</div><div class=\"math-display\">$$\n\\int \\csc^2x\\,dx=-\\cot x+C.\n$$</div><h4 id=\"10-定积分\">10. 定积分<a class=\"heading-anchor\" href=\"#10-定积分\" data-heading-id=\"10-定积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"riemann-可积\">Riemann 可积<a class=\"heading-anchor\" href=\"#riemann-可积\" data-heading-id=\"riemann-可积\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $f$ 在 $[a,b]$ 有界。若当分割细度 $|T|\\to0$ 时，任意积分和\n$$\n\\sum_{i=1}^n f(\\xi_i)\\Delta x_i\n$$\n极限存在且与分割和取点无关，则 $f$ 在 $[a,b]$ 可积。</p><p>记作\n$$\n\\int_a^b f(x)\\,dx.\n$$</p><p>可积条件：</p><ul><li>连续函数可积；</li><li>单调函数可积；</li><li>有界且仅有限个间断点的函数可积；</li><li>可积函数必有界。</li></ul><p>Darboux 判别常用形式：\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists T,\\quad U(T)-L(T)&lt;\\varepsilon.\n$$</p><h4 id=\"newton-leibniz-公式\">Newton-Leibniz 公式<a class=\"heading-anchor\" href=\"#newton-leibniz-公式\" data-heading-id=\"newton-leibniz-公式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f\\in C[a,b]$，且 $F&#039;=f$，则\n$$\n\\int_a^b f(x)\\,dx=F(b)-F(a).\n$$</p><h4 id=\"积分中值定理\">积分中值定理<a class=\"heading-anchor\" href=\"#积分中值定理\" data-heading-id=\"积分中值定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f,g\\in C[a,b]$ 且 $g$ 不变号，则存在 $\\xi\\in[a,b]$，使\n$$\n\\int_a^b f(x)g(x)\\,dx=f(\\xi)\\int_a^b g(x)\\,dx.\n$$</p><h4 id=\"变上限积分\">变上限积分<a class=\"heading-anchor\" href=\"#变上限积分\" data-heading-id=\"变上限积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 在 $[a,b]$ 上可积，定义\n$$\nF(x)=\\int_a^x f(t)\\,dt,\n$$\n则 $F$ 连续；若 $f$ 在 $x$ 连续，则\n$$\nF&#039;(x)=f(x).\n$$</p><h4 id=\"11-定积分应用\">11. 定积分应用<a class=\"heading-anchor\" href=\"#11-定积分应用\" data-heading-id=\"11-定积分应用\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>面积：\n$$\nS=\\int_a^b f(x)\\,dx\n$$\n或两曲线之间\n$$\nS=\\int_a^b |f(x)-g(x)|\\,dx.\n$$</p><p>参数曲线弧长：\n若\n$$\nx=x(t),\\quad y=y(t),\\quad t\\in[\\alpha,\\beta],\n$$\n则\n$$\ns=\\int_\\alpha^\\beta\n\\sqrt{(x&#039;(t))^2+(y&#039;(t))^2}\\,dt.\n$$</p><p>旋转体体积常用：\n$$\nV=\\pi\\int_a^b [f(x)]^2\\,dx.\n$$</p><h4 id=\"12-反常积分\">12. 反常积分<a class=\"heading-anchor\" href=\"#12-反常积分\" data-heading-id=\"12-反常积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"无穷区间积分\">无穷区间积分<a class=\"heading-anchor\" href=\"#无穷区间积分\" data-heading-id=\"无穷区间积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n\\int_a^{+\\infty}f(x)\\,dx\n=\\lim_{A\\to+\\infty}\\int_a^A f(x)\\,dx.\n$$</div><p>若极限存在且有限，则称收敛。</p><h4 id=\"瑕积分\">瑕积分<a class=\"heading-anchor\" href=\"#瑕积分\" data-heading-id=\"瑕积分\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $f$ 在 $a$ 附近无界，则\n$$\n\\int_a^b f(x)\\,dx\n=\\lim_{\\varepsilon\\to0+}\\int_{a+\\varepsilon}^b f(x)\\,dx.\n$$</p><h4 id=\"cauchy-收敛准则-2\">Cauchy 收敛准则<a class=\"heading-anchor\" href=\"#cauchy-收敛准则-2\" data-heading-id=\"cauchy-收敛准则-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n\\int_a^{+\\infty}f(x)\\,dx\n$$\n收敛，当且仅当\n$$\n\\forall \\varepsilon&gt;0,\\ \\exists A,\\ \\forall A_1,A_2&gt;A,\\quad\n\\left|\\int_{A_1}^{A_2}f(x)\\,dx\\right|&lt;\\varepsilon.\n$$</div><h4 id=\"判别法\">判别法<a class=\"heading-anchor\" href=\"#判别法\" data-heading-id=\"判别法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>比较判别：<br />若 $0\\le f(x)\\le g(x)$，且 $\\int_a^\\infty g(x)\\,dx$ 收敛，则 $\\int_a^\\infty f(x)\\,dx$ 收敛。</p><p>绝对收敛：\n若\n$$\n\\int_a^\\infty |f(x)|\\,dx\n$$\n收敛，则\n$$\n\\int_a^\\infty f(x)\\,dx\n$$\n收敛。</p><p>Dirichlet 判别：\n若\n$$\nF(A)=\\int_a^A f(x)\\,dx\n$$\n有界，$g(x)$ 单调且 $g(x)\\to0$，则\n$$\n\\int_a^\\infty f(x)g(x)\\,dx\n$$\n收敛。</p><p>Abel 判别：\n若 $\\int_a^\\infty f(x)\\,dx$ 收敛，$g(x)$ 单调有界，则\n$$\n\\int_a^\\infty f(x)g(x)\\,dx\n$$\n收敛。</p><h4 id=\"附件\">附件<a class=\"heading-anchor\" href=\"#附件\" data-heading-id=\"附件\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"entry-file\"><a class=\"download-button\" href=\"files/2026-04-24-main-math-notes/数学分析I复习提纲.pdf\" download><span>下载 / 预览 PDF</span><small>数学分析I复习提纲.pdf</small></a><details class=\"file-preview\"><summary>Preview / 预览</summary><iframe src=\"files/2026-04-24-main-math-notes/数学分析I复习提纲.pdf\" title=\"数学分析I复习提纲.pdf\" loading=\"lazy\"></iframe></details></div>",
      "headings": [
        {
          "id": "1-实数完备性与确界",
          "title": "1. 实数完备性与确界",
          "level": 4
        },
        {
          "id": "确界原理",
          "title": "确界原理",
          "level": 4
        },
        {
          "id": "2-数列极限",
          "title": "2. 数列极限",
          "level": 4
        },
        {
          "id": "定义",
          "title": "定义",
          "level": 4
        },
        {
          "id": "基本性质",
          "title": "基本性质",
          "level": 4
        },
        {
          "id": "子列判别",
          "title": "子列判别",
          "level": 4
        },
        {
          "id": "单调有界定理",
          "title": "单调有界定理",
          "level": 4
        },
        {
          "id": "cauchy-收敛准则",
          "title": "Cauchy 收敛准则",
          "level": 4
        },
        {
          "id": "stolz-定理",
          "title": "Stolz 定理",
          "level": 4
        },
        {
          "id": "3-函数极限",
          "title": "3. 函数极限",
          "level": 4
        },
        {
          "id": "varepsilon-delta-定义",
          "title": "$\\varepsilon$-$\\delta$ 定义",
          "level": 4
        },
        {
          "id": "heine-归结原则",
          "title": "Heine 归结原则",
          "level": 4
        },
        {
          "id": "cauchy-准则",
          "title": "Cauchy 准则",
          "level": 4
        },
        {
          "id": "无穷小-无穷大与渐近线",
          "title": "无穷小、无穷大与渐近线",
          "level": 4
        },
        {
          "id": "4-连续函数",
          "title": "4. 连续函数",
          "level": 4
        },
        {
          "id": "连续定义",
          "title": "连续定义",
          "level": 4
        },
        {
          "id": "间断点分类",
          "title": "间断点分类",
          "level": 4
        },
        {
          "id": "闭区间连续函数性质",
          "title": "闭区间连续函数性质",
          "level": 4
        },
        {
          "id": "一致连续",
          "title": "一致连续",
          "level": 4
        },
        {
          "id": "5-导数与微分",
          "title": "5. 导数与微分",
          "level": 4
        },
        {
          "id": "导数",
          "title": "导数",
          "level": 4
        },
        {
          "id": "费马定理",
          "title": "费马定理",
          "level": 4
        },
        {
          "id": "微分",
          "title": "微分",
          "level": 4
        },
        {
          "id": "6-微分中值定理",
          "title": "6. 微分中值定理",
          "level": 4
        },
        {
          "id": "rolle-定理",
          "title": "Rolle 定理",
          "level": 4
        },
        {
          "id": "lagrange-中值定理",
          "title": "Lagrange 中值定理",
          "level": 4
        },
        {
          "id": "cauchy-中值定理",
          "title": "Cauchy 中值定理",
          "level": 4
        },
        {
          "id": "darboux-定理",
          "title": "Darboux 定理",
          "level": 4
        },
        {
          "id": "7-l-hospital-法则与-taylor-公式",
          "title": "7. L'Hospital 法则与 Taylor 公式",
          "level": 4
        },
        {
          "id": "l-hospital-法则",
          "title": "L'Hospital 法则",
          "level": 4
        },
        {
          "id": "taylor-公式",
          "title": "Taylor 公式",
          "level": 4
        },
        {
          "id": "8-极值-单调性与凸性",
          "title": "8. 极值、单调性与凸性",
          "level": 4
        },
        {
          "id": "极值判别",
          "title": "极值判别",
          "level": 4
        },
        {
          "id": "单调性",
          "title": "单调性",
          "level": 4
        },
        {
          "id": "凸函数",
          "title": "凸函数",
          "level": 4
        },
        {
          "id": "9-不定积分",
          "title": "9. 不定积分",
          "level": 4
        },
        {
          "id": "10-定积分",
          "title": "10. 定积分",
          "level": 4
        },
        {
          "id": "riemann-可积",
          "title": "Riemann 可积",
          "level": 4
        },
        {
          "id": "newton-leibniz-公式",
          "title": "Newton-Leibniz 公式",
          "level": 4
        },
        {
          "id": "积分中值定理",
          "title": "积分中值定理",
          "level": 4
        },
        {
          "id": "变上限积分",
          "title": "变上限积分",
          "level": 4
        },
        {
          "id": "11-定积分应用",
          "title": "11. 定积分应用",
          "level": 4
        },
        {
          "id": "12-反常积分",
          "title": "12. 反常积分",
          "level": 4
        },
        {
          "id": "无穷区间积分",
          "title": "无穷区间积分",
          "level": 4
        },
        {
          "id": "瑕积分",
          "title": "瑕积分",
          "level": 4
        },
        {
          "id": "cauchy-收敛准则-2",
          "title": "Cauchy 收敛准则",
          "level": 4
        },
        {
          "id": "判别法",
          "title": "判别法",
          "level": 4
        },
        {
          "id": "附件",
          "title": "附件",
          "level": 4
        }
      ],
      "excerpt": "来源：数分I复习.pdf。 参考校订：数学分析 上.pdf、《数学分析》辅导.pdf。 本文件按复习页内容整理为考前提纲，公式已按标准表述校正。 1. 实数完备性与确界 确界原理 非空有上界数集必有上确界；非空有下界数集必有下确界。 等价完...",
      "readingMinutes": 5,
      "createdAt": "2026-04-24T00:00:00.000Z"
    },
    {
      "id": "notes/math/2026-04-24-linear-algebra-i.md",
      "slug": "2026-04-24-linear-algebra-i",
      "source": "post",
      "kind": "notes",
      "title": "线性代数 I",
      "publishedIndex": 7,
      "stage": "Notes 笔记",
      "tag": "数学",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<h4 id=\"线性方程组与行简化阶梯形\">线性方程组与行简化阶梯形<a class=\"heading-anchor\" href=\"#线性方程组与行简化阶梯形\" data-heading-id=\"线性方程组与行简化阶梯形\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"行简化阶梯形\">行简化阶梯形<a class=\"heading-anchor\" href=\"#行简化阶梯形\" data-heading-id=\"行简化阶梯形\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>行简化阶梯矩阵满足：</p><ol><li>零行在非零行下方；</li><li>每个非零行首个非零元为 $1$；</li><li>主元所在列其余元素全为 $0$；</li><li>主元位置从上到下向右移动。</li></ol><p>线性方程组化为简化阶梯形后：</p><ul><li>出现 $0=d$（$d\\ne0$）则无解；</li><li>无矛盾行且每个未知量都是主变量，则唯一解；</li><li>有自由变量则有无穷多解，可令自由变量为参数。</li></ul><h4 id=\"齐次与非齐次方程组\">齐次与非齐次方程组<a class=\"heading-anchor\" href=\"#齐次与非齐次方程组\" data-heading-id=\"齐次与非齐次方程组\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>齐次方程组：\n$$\nAx=0.\n$$</p><p>若 $A$ 为 $m\\times n$ 矩阵，$r=\\operatorname{rank}A$，则解空间维数为\n$$\n\\dim\\ker A=n-r.\n$$</p><p>非齐次方程组：\n$$\nAx=b\n$$\n有解当且仅当\n$$\n\\operatorname{rank}A=\\operatorname{rank}(A|b).\n$$</p><p>若 $x_0$ 为一个特解，则全体解为\n$$\nx=x_0+x_h,\\qquad x_h\\in\\ker A.\n$$</p><p>补充：</p><p>- 非齐次方程组是否唯一，在有解前提下由对应齐次方程组是否只有零解决定。\n- 若 $\\ker A$ 的一组基为 $\\eta_1,\\dots,\\eta_{n-r}$，则齐次解为\n  $$\n  x=c_1\\eta_1+\\cdots+c_{n-r}\\eta_{n-r}.\n  $$</p><h4 id=\"本章例题\">本章例题<a class=\"heading-anchor\" href=\"#本章例题\" data-heading-id=\"本章例题\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：讨论方程组\n$$\n\\begin{cases}\nx+y+z=1,\\\\\n2x+2y+2z=2\n\\end{cases}\n$$\n的解。</p><p>解：第二个方程是第一个方程的两倍，秩为 $1$，未知量个数为 $3$，有两个自由变量。令 $y=s,z=t$，则\n$$\nx=1-s-t.\n$$\n通解为\n$$\n(x,y,z)=(1,0,0)+s(-1,1,0)+t(-1,0,1).\n$$</p><p>例 2：求齐次方程\n$$\nx+y+z=0\n$$\n的基础解系。</p><p>解：令 $y=s,z=t$，则 $x=-s-t$。因此\n$$\n(x,y,z)=s(-1,1,0)+t(-1,0,1),\n$$\n基础解系可取\n$$\n(-1,1,0),\\qquad (-1,0,1).\n$$</p><h4 id=\"线性空间-子空间与生成\">线性空间、子空间与生成<a class=\"heading-anchor\" href=\"#线性空间-子空间与生成\" data-heading-id=\"线性空间-子空间与生成\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"线性空间定义\">线性空间定义<a class=\"heading-anchor\" href=\"#线性空间定义\" data-heading-id=\"线性空间定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $F$ 为数域，$V$ 为非空集合。若 $V$ 上有加法与数乘，满足：</p><ol><li>$x+y=y+x$；</li><li>$(x+y)+z=x+(y+z)$；</li><li>存在零元 $0$，$x+0=x$；</li><li>对每个 $x$ 存在 $-x$，$x+(-x)=0$；</li><li>$\\lambda(x+y)=\\lambda x+\\lambda y$；</li><li>$(\\lambda+\\mu)x=\\lambda x+\\mu x$；</li><li>$(\\lambda\\mu)x=\\lambda(\\mu x)$；</li><li>$1x=x$；</li></ol><p>则称 $V$ 是 $F$ 上的线性空间。</p><p>例子：</p><ul><li>$F^n$；</li><li>$F^{m\\times n}$；</li><li>$F[x]$；</li><li>$C[a,b]$；</li><li>数列空间。</li></ul><p>注意：</p><ul><li>同一个集合在不同数域上可能是不同线性空间；</li><li>$\\mathbb C$ 可看作 $\\mathbb C$ 上线性空间，也可看作 $\\mathbb R$ 上线性空间；</li><li>$\\mathbb R$ 不是 $\\mathbb C$ 上的线性空间；</li><li>整数集 $\\mathbb Z$ 不是数域，不能作为线性空间的标量域。</li></ul><h4 id=\"基本性质\">基本性质<a class=\"heading-anchor\" href=\"#基本性质\" data-heading-id=\"基本性质\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>在线性空间中：</p><div class=\"math-display\">$$\n0 \\text{ 唯一},\\qquad -x \\text{ 唯一}.\n$$</div><div class=\"math-display\">$$\n0x=0,\\qquad \\lambda0=0,\\qquad (-1)x=-x.\n$$</div><p>证明：\n若 $0,0&#039;$ 都是零元，则\n$$\n0=0+0&#039;=0&#039;.\n$$</p><p>若 $y,z$ 都是 $x$ 的负元，则\n$$\ny=y+0=y+(x+z)=(y+x)+z=0+z=z.\n$$</p><h4 id=\"子空间\">子空间<a class=\"heading-anchor\" href=\"#子空间\" data-heading-id=\"子空间\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $W\\subseteq V$，$W\\ne\\varnothing$。则 $W$ 是子空间当且仅当\n$$\n\\forall x,y\\in W,\\ \\forall\\lambda,\\mu\\in F,\\quad\n\\lambda x+\\mu y\\in W.\n$$</p><p>常用判别：</p><ol><li>非空；</li><li>加法封闭；</li><li>数乘封闭。</li></ol><h4 id=\"线性组合与线性包\">线性组合与线性包<a class=\"heading-anchor\" href=\"#线性组合与线性包\" data-heading-id=\"线性组合与线性包\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>向量组 $\\alpha_1,\\dots,\\alpha_n$ 的线性组合：\n$$\nk_1\\alpha_1+\\cdots+k_n\\alpha_n.\n$$</p><p>$S$ 的线性包：\n$$\nL(S)=\\operatorname{span}(S).\n$$</p><p>定理：</p><ol><li>$L(S)$ 是子空间；</li><li>$L(S)$ 是包含 $S$ 的最小子空间；</li><li>若 $S\\subseteq W$ 且 $W$ 为子空间，则 $L(S)\\subseteq W$。</li></ol><p>证明：<br />直接验证 $L(S)$ 对线性组合封闭；最小性由任意包含 $S$ 的子空间必须包含 $S$ 的所有线性组合得出。</p><h4 id=\"本章例题-2\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-2\" data-heading-id=\"本章例题-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：判断\n$$\nW=\\{(x,y,z)\\in\\mathbb R^3:x+y+z=0\\}\n$$\n是否为 $\\mathbb R^3$ 的子空间。</p><p>解：若 $u,v\\in W$，则坐标和都为 $0$。对任意 $\\lambda,\\mu\\in\\mathbb R$，$\\lambda u+\\mu v$ 的坐标和仍为 $0$，所以 $\\lambda u+\\mu v\\in W$。故 $W$ 是子空间。</p><p>例 2：判断\n$$\nS=\\{(x,y)\\in\\mathbb R^2:x+y=1\\}\n$$\n是否为子空间。</p><p>解：$(0,0)\\notin S$，所以 $S$ 不是子空间。</p><p>例 3：在 $\\mathbb R[x]$ 中，证明\n$$\nW=\\{p(x):p(0)=0\\}\n$$\n是子空间。</p><p>解：若 $p(0)=q(0)=0$，则\n$$\n(\\lambda p+\\mu q)(0)=\\lambda p(0)+\\mu q(0)=0.\n$$\n故 $W$ 对线性组合封闭。</p><h4 id=\"线性相关-基-维数与秩\">线性相关、基、维数与秩<a class=\"heading-anchor\" href=\"#线性相关-基-维数与秩\" data-heading-id=\"线性相关-基-维数与秩\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"线性相关与线性无关\">线性相关与线性无关<a class=\"heading-anchor\" href=\"#线性相关与线性无关\" data-heading-id=\"线性相关与线性无关\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>向量组 $\\alpha_1,\\dots,\\alpha_n$ 线性相关，若存在不全为 $0$ 的 $k_i$，使\n$$\nk_1\\alpha_1+\\cdots+k_n\\alpha_n=0.\n$$</p><p>若只有 $k_1=\\cdots=k_n=0$，则线性无关。</p><p>重要结论：</p><ul><li>含零向量的向量组必线性相关；</li><li>线性相关组增加向量后仍线性相关；</li><li>线性无关组任意子组线性无关；</li><li>有限向量组线性相关，当且仅当其中某个向量可由其余向量线性表示。</li></ul><p>证明：\n若\n$$\nk_1\\alpha_1+\\cdots+k_n\\alpha_n=0\n$$\n且某 $k_i\\ne0$，则\n$$\n\\alpha_i=-\\frac1{k_i}\\sum_{j\\ne i}k_j\\alpha_j.\n$$</p><p>例子：</p><ul><li>$e_1,\\dots,e_n$ 线性无关；</li><li>$1,x,x^2$ 作为多项式线性无关；</li><li>在有限域上要区分多项式与多项式函数，例如 $\\mathbb Z_2$ 上可能出现非零多项式对应零函数。</li></ul><h4 id=\"替换定理\">替换定理<a class=\"heading-anchor\" href=\"#替换定理\" data-heading-id=\"替换定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $\\beta_1,\\dots,\\beta_m$ 线性无关，且都可由 $\\alpha_1,\\dots,\\alpha_n$ 线性表示，则\n$$\nm\\le n.\n$$</p><p>证明：<br />逐步用 $\\beta_i$ 替换 $\\alpha_j$，保持生成空间不变，最终推出不能替换超过 $n$ 个。</p><p>推论：</p><ul><li>有限维空间任意两组基元素个数相同；</li><li>$n$ 维空间任意 $n+1$ 个向量线性相关；</li><li>$n$ 维空间任意 $n$ 个线性无关向量构成基；</li><li>$n$ 维空间任意 $n$ 个生成向量构成基。</li></ul><h4 id=\"基与维数\">基与维数<a class=\"heading-anchor\" href=\"#基与维数\" data-heading-id=\"基与维数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若向量组 $B=\\{\\alpha_1,\\dots,\\alpha_n\\}$ 满足：</p><ol><li>线性无关；</li><li>$L(B)=V$；</li></ol><p>则称 $B$ 是 $V$ 的一组基，$\\dim V=n$。</p><p>零空间维数为 $0$。</p><h4 id=\"子空间维数\">子空间维数<a class=\"heading-anchor\" href=\"#子空间维数\" data-heading-id=\"子空间维数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $W\\le V$，$\\dim V&lt;\\infty$，则\n$$\n\\dim W\\le\\dim V.\n$$\n若 $\\dim W=\\dim V$，则 $W=V$。</p><p>子空间的一组基可扩充为整个空间的一组基。</p><h4 id=\"向量组的秩\">向量组的秩<a class=\"heading-anchor\" href=\"#向量组的秩\" data-heading-id=\"向量组的秩\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>向量组 $S$ 的极大线性无关组所含向量个数称为 $S$ 的秩：\n$$\n\\operatorname{rank}(S).\n$$</p><p>若 $B$ 是 $S$ 的极大线性无关组，则\n$$\nL(B)=L(S),\\qquad\n\\operatorname{rank}(S)=\\dim L(S).\n$$</p><p>等价向量组：\n若 $S$ 中每个向量可由 $T$ 线性表示，且 $T$ 中每个向量可由 $S$ 线性表示，则 $S,T$ 等价，且\n$$\nL(S)=L(T),\\qquad \\operatorname{rank}(S)=\\operatorname{rank}(T).\n$$</p><h4 id=\"坐标\">坐标<a class=\"heading-anchor\" href=\"#坐标\" data-heading-id=\"坐标\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $B=(\\alpha_1,\\dots,\\alpha_n)$ 是 $V$ 的一组基，则任意 $x\\in V$ 唯一表示为\n$$\nx=x_1\\alpha_1+\\cdots+x_n\\alpha_n.\n$$\n列向量\n$$\n[x]_B=(x_1,\\dots,x_n)^T\n$$\n称为 $x$ 在基 $B$ 下的坐标。</p><h4 id=\"本章例题-3\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-3\" data-heading-id=\"本章例题-3\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：证明 $e_1,\\dots,e_n$ 线性无关。</p><p>解：若\n$$\nk_1e_1+\\cdots+k_ne_n=0,\n$$\n则左边坐标为 $(k_1,\\dots,k_n)$，所以 $k_1=\\cdots=k_n=0$。</p><p>例 2：证明 $1,x,x^2$ 在 $\\mathbb R[x]$ 中线性无关。</p><p>解：若\n$$\na+bx+cx^2=0\n$$\n作为多项式恒等于零，则各项系数都为 $0$，即 $a=b=c=0$。</p><p>例 3：求向量组\n$$\n\\alpha_1=(1,1,0),\\quad \\alpha_2=(1,0,1),\\quad \\alpha_3=(2,1,1)\n$$\n的秩。</p><p>解：因为\n$$\n\\alpha_3=\\alpha_1+\\alpha_2,\n$$\n且 $\\alpha_1,\\alpha_2$ 不成比例，所以极大线性无关组可取 $\\alpha_1,\\alpha_2$，秩为 $2$。</p><p>例 4：在基 $B=(\\alpha_1,\\alpha_2)$ 中，若\n$$\nx=3\\alpha_1-2\\alpha_2,\n$$\n则\n$$\n[x]_B=(3,-2)^T.\n$$</p><h4 id=\"子空间的交-和与直和\">子空间的交、和与直和<a class=\"heading-anchor\" href=\"#子空间的交-和与直和\" data-heading-id=\"子空间的交-和与直和\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"交空间与和空间\">交空间与和空间<a class=\"heading-anchor\" href=\"#交空间与和空间\" data-heading-id=\"交空间与和空间\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>交：\n$$\nW_1\\cap W_2=\\{x:x\\in W_1,\\ x\\in W_2\\}.\n$$</p><p>和：\n$$\nW_1+W_2=\\{x_1+x_2:x_1\\in W_1,\\ x_2\\in W_2\\}.\n$$</p><p>$W_1+W_2$ 是包含 $W_1\\cup W_2$ 的最小子空间。</p><p>注意：$W_1\\cup W_2$ 一般不是子空间，除非 $W_1\\subseteq W_2$ 或 $W_2\\subseteq W_1$。</p><h4 id=\"维数公式\">维数公式<a class=\"heading-anchor\" href=\"#维数公式\" data-heading-id=\"维数公式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $W_1,W_2$ 有限维，则\n$$\n\\dim(W_1+W_2)\n=\\dim W_1+\\dim W_2-\\dim(W_1\\cap W_2).\n$$</p><p>证明：<br />取 $W_1\\cap W_2$ 的基，分别扩充为 $W_1,W_2$ 的基，再证明合并后的向量组是 $W_1+W_2$ 的基。</p><h4 id=\"直和\">直和<a class=\"heading-anchor\" href=\"#直和\" data-heading-id=\"直和\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若\n$$\nW_1\\cap W_2=\\{0\\},\n$$\n则称\n$$\nW_1+W_2=W_1\\oplus W_2.\n$$</p><p>等价条件：</p><ol><li>$W_1\\cap W_2=\\{0\\}$；</li><li>每个 $x\\in W_1+W_2$ 可唯一表示为 $x=x_1+x_2$；</li><li>有限维时 $\\dim(W_1+W_2)=\\dim W_1+\\dim W_2$。</li></ol><p>多个子空间直和：\n$$\nW_1+\\cdots+W_s\n$$\n为直和，当且仅当\n$$\nx_1+\\cdots+x_s=0,\\ x_i\\in W_i\n\\Rightarrow\nx_1=\\cdots=x_s=0.\n$$</p><h4 id=\"本章例题-4\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-4\" data-heading-id=\"本章例题-4\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：设\n$$\nU=\\{(x,0):x\\in\\mathbb R\\},\\qquad W=\\{(0,y):y\\in\\mathbb R\\}.\n$$\n证明 $\\mathbb R^2=U\\oplus W$。</p><p>解：任意 $(a,b)\\in\\mathbb R^2$ 可写成\n$$\n(a,b)=(a,0)+(0,b).\n$$\n且 $U\\cap W=\\{0\\}$，故为直和。</p><p>例 2：设 $U=\\operatorname{span}\\{(1,0,0),(0,1,0)\\}$，$W=\\operatorname{span}\\{(0,1,0),(0,0,1)\\}$。求 $\\dim(U+W)$。</p><p>解：$\\dim U=2$，$\\dim W=2$，$U\\cap W=\\operatorname{span}\\{(0,1,0)\\}$，维数为 $1$。故\n$$\n\\dim(U+W)=2+2-1=3.\n$$</p><h4 id=\"内积空间\">内积空间<a class=\"heading-anchor\" href=\"#内积空间\" data-heading-id=\"内积空间\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"内积定义\">内积定义<a class=\"heading-anchor\" href=\"#内积定义\" data-heading-id=\"内积定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>在实线性空间 $V$ 上，内积是映射\n$$\n(\\cdot,\\cdot):V\\times V\\to\\mathbb R\n$$\n满足：</p><ol><li>对第一个变量线性；</li><li>对称性 $(x,y)=(y,x)$；</li><li>正定性 $(x,x)\\ge0$，且 $(x,x)=0\\Leftrightarrow x=0$。</li></ol><p>例子：</p><p>- $\\mathbb R^n$ 中\n  $$\n  (x,y)=x^Ty.\n  $$\n- $C[a,b]$ 中\n  $$\n  (f,g)=\\int_a^b f(x)g(x)\\,dx.\n  $$</p><h4 id=\"cauchy-schwarz-不等式\">Cauchy-Schwarz 不等式<a class=\"heading-anchor\" href=\"#cauchy-schwarz-不等式\" data-heading-id=\"cauchy-schwarz-不等式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"math-display\">$$\n|(x,y)|\\le \\|x\\|\\|y\\|.\n$$</div><p>证明：\n对任意 $t\\in\\mathbb R$，\n$$\n(x+ty,x+ty)\\ge0.\n$$\n视为关于 $t$ 的二次多项式，其判别式不大于 $0$。</p><p>等号成立当且仅当 $x,y$ 线性相关。</p><h4 id=\"范数与夹角\">范数与夹角<a class=\"heading-anchor\" href=\"#范数与夹角\" data-heading-id=\"范数与夹角\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>范数：\n$$\n\\|x\\|=\\sqrt{(x,x)}.\n$$</p><p>三角不等式：\n$$\n\\|x+y\\|\\le\\|x\\|+\\|y\\|.\n$$</p><p>夹角：\n$$\n\\cos\\theta=\\frac{(x,y)}{\\|x\\|\\|y\\|}.\n$$</p><h4 id=\"正交与标准正交基\">正交与标准正交基<a class=\"heading-anchor\" href=\"#正交与标准正交基\" data-heading-id=\"正交与标准正交基\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $(x,y)=0$，则称 $x\\perp y$。</p><p>非零两两正交向量组必线性无关。</p><p>标准正交基：\n$$\n(e_i,e_j)=\\delta_{ij}.\n$$</p><p>Schmidt 正交化：</p><div class=\"math-display\">$$\n\\beta_1=\\alpha_1,\n$$\n$$\n\\beta_k=\\alpha_k-\\sum_{i=1}^{k-1}\n\\frac{(\\alpha_k,\\beta_i)}{(\\beta_i,\\beta_i)}\\beta_i,\n$$\n再归一化：\n$$\ne_k=\\frac{\\beta_k}{\\|\\beta_k\\|}.\n$$</div><h4 id=\"本章例题-5\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-5\" data-heading-id=\"本章例题-5\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：在 $\\mathbb R^2$ 中，对\n$$\n\\alpha_1=(1,1),\\qquad \\alpha_2=(1,0)\n$$\n作 Schmidt 正交化。</p><p>解：取\n$$\n\\beta_1=\\alpha_1=(1,1).\n$$\n再取\n$$\n\\beta_2=\\alpha_2-\\frac{(\\alpha_2,\\beta_1)}{(\\beta_1,\\beta_1)}\\beta_1\n=(1,0)-\\frac12(1,1)=\\left(\\frac12,-\\frac12\\right).\n$$\n单位化得\n$$\ne_1=\\frac1{\\sqrt2}(1,1),\\qquad e_2=\\frac1{\\sqrt2}(1,-1).\n$$</p><p>例 2：验证 $C[a,b]$ 上\n$$\n(f,g)=\\int_a^b f(x)g(x)\\,dx\n$$\n是内积。</p><p>解：线性性与对称性由积分线性和乘法交换律得到。又\n$$\n(f,f)=\\int_a^b f^2(x)\\,dx\\ge0.\n$$\n若 $f$ 连续且积分为 $0$，则 $f^2\\equiv0$，故 $f\\equiv0$。</p><h4 id=\"线性映射\">线性映射<a class=\"heading-anchor\" href=\"#线性映射\" data-heading-id=\"线性映射\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"线性映射定义\">线性映射定义<a class=\"heading-anchor\" href=\"#线性映射定义\" data-heading-id=\"线性映射定义\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $V,W$ 是 $F$ 上线性空间，映射 $T:V\\to W$ 若满足\n$$\nT(\\lambda x+\\mu y)=\\lambda T(x)+\\mu T(y),\n$$\n则称为线性映射。</p><p>基本性质：\n$$\nT(0)=0,\\qquad T(-x)=-T(x).\n$$</p><p>若 $\\alpha_1,\\dots,\\alpha_n$ 是 $V$ 的基，$\\beta_1,\\dots,\\beta_n\\in W$ 任意，则存在唯一线性映射 $T:V\\to W$，使\n$$\nT(\\alpha_i)=\\beta_i.\n$$</p><h4 id=\"像与核\">像与核<a class=\"heading-anchor\" href=\"#像与核\" data-heading-id=\"像与核\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>像：\n$$\n\\operatorname{Im}T=\\{T(x):x\\in V\\}.\n$$</p><p>核：\n$$\n\\ker T=\\{x\\in V:T(x)=0\\}.\n$$</p><p>$\\operatorname{Im}T$ 是 $W$ 的子空间，$\\ker T$ 是 $V$ 的子空间。</p><p>单射判别：\n$$\nT \\text{ 单射}\\quad\\Longleftrightarrow\\quad \\ker T=\\{0\\}.\n$$</p><h4 id=\"秩-零化度定理\">秩-零化度定理<a class=\"heading-anchor\" href=\"#秩-零化度定理\" data-heading-id=\"秩-零化度定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $\\dim V&lt;\\infty$，则\n$$\n\\dim V=\\dim\\ker T+\\dim\\operatorname{Im}T.\n$$</p><p>证明：<br />取 $\\ker T$ 的基，扩充为 $V$ 的基；证明扩充部分在 $T$ 下的像构成 $\\operatorname{Im}T$ 的一组基。</p><p>若 $\\dim V=\\dim W&lt;\\infty$，则以下等价：</p><ol><li>$T$ 单射；</li><li>$T$ 满射；</li><li>$T$ 双射；</li><li>$\\ker T=\\{0\\}$；</li><li>$\\operatorname{Im}T=W$。</li></ol><h4 id=\"同构\">同构<a class=\"heading-anchor\" href=\"#同构\" data-heading-id=\"同构\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若存在双射线性映射 $T:V\\to W$，则 $V,W$ 同构，记作\n$$\nV\\cong W.\n$$</p><p>有限维情形：\n$$\nV\\cong W\\quad\\Longleftrightarrow\\quad \\dim V=\\dim W.\n$$</p><h4 id=\"线性映射空间\">线性映射空间<a class=\"heading-anchor\" href=\"#线性映射空间\" data-heading-id=\"线性映射空间\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>全体线性映射\n$$\nL(V,W)=\\{T:V\\to W:T\\text{ 线性}\\}\n$$\n在逐点加法与数乘下构成线性空间。</p><p>若 $\\dim V=n$，$\\dim W=m$，则\n$$\n\\dim L(V,W)=mn.\n$$</p><p>线性映射的复合仍为线性映射。</p><h4 id=\"本章例题-6\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-6\" data-heading-id=\"本章例题-6\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：设 $T:\\mathbb R^3\\to\\mathbb R^2$，\n$$\nT(x,y,z)=(x+y,y+z).\n$$\n求 $\\ker T$ 与 $\\operatorname{Im}T$。</p><p>解：$\\ker T$ 满足\n$$\nx+y=0,\\qquad y+z=0.\n$$\n令 $y=t$，则 $x=-t,z=-t$，所以\n$$\n\\ker T=\\operatorname{span}\\{(-1,1,-1)\\}.\n$$\n矩阵为\n$$\n\\begin{pmatrix}1&amp;1&amp;0\\\\0&amp;1&amp;1\\end{pmatrix},\n$$\n秩为 $2$，故 $\\operatorname{Im}T=\\mathbb R^2$。</p><p>例 2：在线性空间 $\\mathbb R[x]_{\\le2}$ 中，求求导映射 $D(p)=p&#039;$ 的核与像。</p><p>解：核为常数多项式空间，维数为 $1$。像为 $\\mathbb R[x]_{\\le1}$，维数为 $2$。这也验证\n$$\n\\dim\\mathbb R[x]_{\\le2}=3=1+2.\n$$</p><h4 id=\"线性映射的矩阵表示与矩阵运算\">线性映射的矩阵表示与矩阵运算<a class=\"heading-anchor\" href=\"#线性映射的矩阵表示与矩阵运算\" data-heading-id=\"线性映射的矩阵表示与矩阵运算\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"矩阵表示\">矩阵表示<a class=\"heading-anchor\" href=\"#矩阵表示\" data-heading-id=\"矩阵表示\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $V$ 基为 $\\alpha_1,\\dots,\\alpha_n$，$W$ 基为 $\\beta_1,\\dots,\\beta_m$。若\n$$\nT(\\alpha_j)=a_{1j}\\beta_1+\\cdots+a_{mj}\\beta_m,\n$$\n则\n$$\nA=(a_{ij})_{m\\times n}\n$$\n是 $T$ 在这两组基下的矩阵。</p><p>若 $x$ 在 $\\alpha$ 基下坐标为 $X$，$T(x)$ 在 $\\beta$ 基下坐标为 $Y$，则\n$$\nY=AX.\n$$</p><h4 id=\"矩阵乘法\">矩阵乘法<a class=\"heading-anchor\" href=\"#矩阵乘法\" data-heading-id=\"矩阵乘法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $A=(a_{ij})_{m\\times n}$，$B=(b_{ij})_{n\\times p}$，则\n$$\n(AB)_{ij}=\\sum_{k=1}^{n}a_{ik}b_{kj}.\n$$</p><p>复合对应乘法：\n$$\nM(S\\circ T)=M(S)M(T).\n$$</p><p>矩阵乘法一般不可交换。</p><h4 id=\"可逆矩阵\">可逆矩阵<a class=\"heading-anchor\" href=\"#可逆矩阵\" data-heading-id=\"可逆矩阵\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$n$ 阶方阵 $A$ 可逆，若存在 $B$，使\n$$\nAB=BA=I.\n$$</p><p>等价条件：</p><ol><li>$A$ 可逆；</li><li>$Ax=0$ 只有零解；</li><li>$Ax=b$ 对任意 $b$ 有唯一解；</li><li>$\\operatorname{rank}A=n$；</li><li>$\\det A\\ne0$；</li><li>$A$ 是初等矩阵的乘积。</li></ol><h4 id=\"转置与特殊矩阵\">转置与特殊矩阵<a class=\"heading-anchor\" href=\"#转置与特殊矩阵\" data-heading-id=\"转置与特殊矩阵\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>转置：\n$$\n(A^T)_{ij}=A_{ji}.\n$$</p><p>性质：\n$$\n(A+B)^T=A^T+B^T,\\qquad\n(AB)^T=B^TA^T.\n$$</p><p>对称矩阵：\n$$\nA^T=A.\n$$</p><p>反对称矩阵：\n$$\nA^T=-A.\n$$\n实反对称矩阵对角元为 $0$。</p><h4 id=\"初等矩阵与初等变换\">初等矩阵与初等变换<a class=\"heading-anchor\" href=\"#初等矩阵与初等变换\" data-heading-id=\"初等矩阵与初等变换\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>三类初等变换：</p><ol><li>交换两行；</li><li>某行乘非零常数；</li><li>某行加另一行的倍数。</li></ol><p>对单位矩阵作一次初等变换得到初等矩阵。</p><p>左乘初等矩阵对应行变换，右乘初等矩阵对应列变换。</p><p>初等矩阵可逆，其逆仍为初等矩阵。</p><h4 id=\"相抵标准形\">相抵标准形<a class=\"heading-anchor\" href=\"#相抵标准形\" data-heading-id=\"相抵标准形\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若存在可逆矩阵 $P,Q$，使\n$$\nB=PAQ,\n$$\n则 $A,B$ 相抵。</p><p>任意 $m\\times n$ 矩阵都相抵于\n$$\n\\begin{pmatrix}\nI_r&amp;0\\\\\n0&amp;0\n\\end{pmatrix},\n$$\n其中 $r=\\operatorname{rank}A$。</p><p>同型矩阵相抵当且仅当秩相同。</p><h4 id=\"基变换与坐标变换\">基变换与坐标变换<a class=\"heading-anchor\" href=\"#基变换与坐标变换\" data-heading-id=\"基变换与坐标变换\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若两组基满足\n$$\n(\\beta_1,\\dots,\\beta_n)=(\\alpha_1,\\dots,\\alpha_n)P,\n$$\n则 $P$ 为过渡矩阵。</p><p>坐标关系：\n$$\nX_\\alpha=PX_\\beta,\\qquad X_\\beta=P^{-1}X_\\alpha.\n$$</p><p>若线性变换在两组基下矩阵为 $A,B$，则\n$$\nB=P^{-1}AP.\n$$</p><h4 id=\"本章例题-7\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-7\" data-heading-id=\"本章例题-7\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：设 $T:\\mathbb R^2\\to\\mathbb R^2$，\n$$\nT(x,y)=(x+y,2y).\n$$\n求 $T$ 在标准基下的矩阵。</p><p>解：\n$$\nT(e_1)=(1,0),\\qquad T(e_2)=(1,2).\n$$\n故矩阵为\n$$\nA=\\begin{pmatrix}1&amp;1\\\\0&amp;2\\end{pmatrix}.\n$$</p><p>例 2：求\n$$\nA=\\begin{pmatrix}1&amp;1\\\\0&amp;2\\end{pmatrix}\n$$\n的逆矩阵。</p><p>解：设\n$$\nA^{-1}=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}.\n$$\n由 $AA^{-1}=I$ 解得\n$$\nA^{-1}=\\begin{pmatrix}1&amp;-\\frac12\\\\0&amp;\\frac12\\end{pmatrix}.\n$$</p><p>例 3：设新基满足 $(\\beta_1,\\beta_2)=(\\alpha_1,\\alpha_2)P$，且\n$$\nP=\\begin{pmatrix}1&amp;1\\\\0&amp;1\\end{pmatrix}.\n$$\n若 $X_\\beta=(2,3)^T$，求 $X_\\alpha$。</p><p>解：\n$$\nX_\\alpha=PX_\\beta\n=\\begin{pmatrix}1&amp;1\\\\0&amp;1\\end{pmatrix}\n\\begin{pmatrix}2\\\\3\\end{pmatrix}\n=\\begin{pmatrix}5\\\\3\\end{pmatrix}.\n$$</p><h4 id=\"行列式\">行列式<a class=\"heading-anchor\" href=\"#行列式\" data-heading-id=\"行列式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"行列式性质\">行列式性质<a class=\"heading-anchor\" href=\"#行列式性质\" data-heading-id=\"行列式性质\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>行列式满足：</p><ol><li>交换两行，行列式变号；</li><li>某行乘 $k$，行列式乘 $k$；</li><li>某行加另一行倍数，行列式不变；</li><li>两行相同或成比例，行列式为 $0$；</li><li>三角矩阵行列式等于对角线元素乘积；</li><li>$\\det A^T=\\det A$；</li><li>$\\det(AB)=\\det A\\det B$。</li></ol><h4 id=\"代数余子式展开\">代数余子式展开<a class=\"heading-anchor\" href=\"#代数余子式展开\" data-heading-id=\"代数余子式展开\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>删去第 $i$ 行第 $j$ 列所得行列式称余子式 $M_{ij}$。代数余子式：\n$$\nA_{ij}=(-1)^{i+j}M_{ij}.\n$$</p><p>按第 $i$ 行展开：\n$$\n\\det A=\\sum_{j=1}^{n}a_{ij}A_{ij}.\n$$</p><p>按第 $j$ 列展开：\n$$\n\\det A=\\sum_{i=1}^{n}a_{ij}A_{ij}.\n$$</p><p>某一行元素与另一行对应代数余子式乘积求和为 $0$。</p><h4 id=\"伴随矩阵\">伴随矩阵<a class=\"heading-anchor\" href=\"#伴随矩阵\" data-heading-id=\"伴随矩阵\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>伴随矩阵：\n$$\nA^*=(A_{ji}).\n$$</p><p>性质：\n$$\nAA^<em>=A^</em>A=(\\det A)I.\n$$</p><p>若 $\\det A\\ne0$，则\n$$\nA^{-1}=\\frac1{\\det A}A^*.\n$$</p><h4 id=\"行列式秩\">行列式秩<a class=\"heading-anchor\" href=\"#行列式秩\" data-heading-id=\"行列式秩\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>矩阵 $A$ 的非零子式最高阶数等于矩阵秩：\n$$\n\\operatorname{rank}A=r\n$$\n当且仅当 $A$ 有 $r$ 阶非零子式，且所有 $r+1$ 阶子式均为 $0$。</p><h4 id=\"cramer-法则\">Cramer 法则<a class=\"heading-anchor\" href=\"#cramer-法则\" data-heading-id=\"cramer-法则\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $\\det A\\ne0$，则\n$$\nAx=b\n$$\n有唯一解\n$$\nx_i=\\frac{\\det A_i}{\\det A}.\n$$</p><h4 id=\"本章例题-8\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-8\" data-heading-id=\"本章例题-8\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：计算\n$$\n\\det\\begin{pmatrix}\n1&amp;2&amp;3\\\\\n0&amp;4&amp;5\\\\\n0&amp;0&amp;6\n\\end{pmatrix}.\n$$</p><p>解：上三角矩阵行列式等于对角线元素乘积，故为\n$$\n1\\cdot4\\cdot6=24.\n$$</p><p>例 2：求\n$$\nA=\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}\n$$\n的伴随矩阵。</p><p>解：\n$$\nA^*=\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}.\n$$\n若 $ad-bc\\ne0$，则\n$$\nA^{-1}=\\frac1{ad-bc}\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}.\n$$</p><p>例 3：用 Cramer 法则解\n$$\n\\begin{cases}\nx+y=3,\\\\\nx-y=1.\n\\end{cases}\n$$</p><p>解：\n$$\nA=\\begin{pmatrix}1&amp;1\\\\1&amp;-1\\end{pmatrix},\\qquad \\det A=-2.\n$$\n于是\n$$\nx=\\frac{\\begin{vmatrix}3&amp;1\\\\1&amp;-1\\end{vmatrix}}{-2}=2,\\qquad\ny=\\frac{\\begin{vmatrix}1&amp;3\\\\1&amp;1\\end{vmatrix}}{-2}=1.\n$$</p><h4 id=\"特征值-特征向量与对角化\">特征值、特征向量与对角化<a class=\"heading-anchor\" href=\"#特征值-特征向量与对角化\" data-heading-id=\"特征值-特征向量与对角化\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"特征值与特征向量\">特征值与特征向量<a class=\"heading-anchor\" href=\"#特征值与特征向量\" data-heading-id=\"特征值与特征向量\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $x\\ne0$ 且\n$$\nAx=\\lambda x,\n$$\n则 $\\lambda$ 为特征值，$x$ 为对应特征向量。</p><p>特征多项式：\n$$\np_A(\\lambda)=\\det(\\lambda I-A).\n$$</p><p>特征子空间：\n$$\nE_\\lambda=\\ker(A-\\lambda I).\n$$</p><p>相似矩阵有相同特征多项式、迹、行列式和特征值。</p><h4 id=\"不同特征值的特征向量\">不同特征值的特征向量<a class=\"heading-anchor\" href=\"#不同特征值的特征向量\" data-heading-id=\"不同特征值的特征向量\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>属于不同特征值的非零特征向量线性无关；更一般地，不同特征子空间中各取一组线性无关向量，合并后仍线性无关。</p><p>证明：\n对特征值个数归纳，或用\n$$\nA\\alpha_i=\\lambda_i\\alpha_i\n$$\n构造线性关系并消去。</p><h4 id=\"可对角化\">可对角化<a class=\"heading-anchor\" href=\"#可对角化\" data-heading-id=\"可对角化\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>$A$ 在数域 $F$ 上可对角化，当且仅当存在 $F$ 上可逆矩阵 $P$，使\n$$\nP^{-1}AP=D\n$$\n为对角矩阵。</p><p>等价条件：</p><p>1. $F^n$ 有一组由 $A$ 的特征向量组成的基；\n2. $F$ 中所有不同特征值对应的特征子空间维数之和为 $n$：\n   $$\n   \\sum_i\\dim E_{\\lambda_i}=n.\n   $$</p><p>若 $A$ 在 $F$ 中有 $n$ 个互异特征值，则 $A$ 在 $F$ 上可对角化。</p><p>注意：<br />几何重数不超过代数重数。</p><h4 id=\"实对称矩阵的正交对角化\">实对称矩阵的正交对角化<a class=\"heading-anchor\" href=\"#实对称矩阵的正交对角化\" data-heading-id=\"实对称矩阵的正交对角化\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $A=A^T$，则：</p><p>1. 特征值均为实数；\n2. 不同特征值对应特征向量正交；\n3. 存在正交矩阵 $Q$，使\n   $$\n   Q^TAQ=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n).\n   $$</p><p>证明：<br />可用 Rayleigh 商极值或复化后的谱定理证明存在实特征值，再对其正交补归纳。</p><h4 id=\"本章例题-9\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-9\" data-heading-id=\"本章例题-9\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：求\n$$\nA=\\begin{pmatrix}2&amp;0\\\\0&amp;3\\end{pmatrix}\n$$\n的特征值和特征向量。</p><p>解：特征值为 $2,3$。对应特征子空间分别为\n$$\nE_2=\\operatorname{span}\\{(1,0)^T\\},\\qquad\nE_3=\\operatorname{span}\\{(0,1)^T\\}.\n$$</p><p>例 2：判断\n$$\nA=\\begin{pmatrix}1&amp;1\\\\0&amp;1\\end{pmatrix}\n$$\n是否可对角化。</p><p>解：唯一特征值为 $1$。解 $(A-I)x=0$ 得\n$$\n\\begin{pmatrix}0&amp;1\\\\0&amp;0\\end{pmatrix}\n\\begin{pmatrix}x\\\\y\\end{pmatrix}=0,\n$$\n故 $y=0$，特征子空间维数为 $1&lt;2$，不可对角化。</p><p>例 3：正交对角化\n$$\nA=\\begin{pmatrix}2&amp;0\\\\0&amp;3\\end{pmatrix}.\n$$</p><p>解：标准基已经是标准正交特征向量组，取 $Q=I$，则\n$$\nQ^TAQ=\\operatorname{diag}(2,3).\n$$</p><h4 id=\"二次型-合同与正定\">二次型、合同与正定<a class=\"heading-anchor\" href=\"#二次型-合同与正定\" data-heading-id=\"二次型-合同与正定\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"双线性函数与二次型\">双线性函数与二次型<a class=\"heading-anchor\" href=\"#双线性函数与二次型\" data-heading-id=\"双线性函数与二次型\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>双线性函数 $B(x,y)$ 对两个变量分别线性。</p><p>二次型：\n$$\nQ(x)=B(x,x).\n$$</p><p>在坐标下可写为\n$$\nQ(x)=x^TAx,\n$$\n其中只需考虑 $B$ 的对称部分，因此 $A$ 可取实对称矩阵。</p><h4 id=\"合同\">合同<a class=\"heading-anchor\" href=\"#合同\" data-heading-id=\"合同\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若存在可逆矩阵 $C$，使\n$$\nB=C^TAC,\n$$\n则称 $A,B$ 合同。</p><p>合同对应二次型的可逆线性替换。</p><h4 id=\"标准形与规范形\">标准形与规范形<a class=\"heading-anchor\" href=\"#标准形与规范形\" data-heading-id=\"标准形与规范形\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>二次型可通过合同变换化为标准形：\n$$\nd_1y_1^2+\\cdots+d_ry_r^2.\n$$</p><p>实二次型还可化为规范形：\n$$\nz_1^2+\\cdots+z_p^2\n-z_{p+1}^2-\\cdots-z_{p+q}^2.\n$$</p><h4 id=\"惯性定理\">惯性定理<a class=\"heading-anchor\" href=\"#惯性定理\" data-heading-id=\"惯性定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>规范形中正平方项个数 $p$ 与负平方项个数 $q$ 唯一确定，分别称正惯性指数与负惯性指数。</p><p>矩阵合同不改变秩、正惯性指数、负惯性指数。</p><h4 id=\"正定二次型与正定矩阵\">正定二次型与正定矩阵<a class=\"heading-anchor\" href=\"#正定二次型与正定矩阵\" data-heading-id=\"正定二次型与正定矩阵\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>实对称矩阵 $A$ 正定，若\n$$\nx^TAx&gt;0,\\qquad x\\ne0.\n$$</p><p>等价条件：</p><p>1. $A$ 正定；\n2. $A$ 的特征值全为正；\n3. 存在可逆矩阵 $P$，使\n   $$\n   A=P^TP;\n   $$\n4. $A$ 的所有顺序主子式均为正：\n   $$\n   \\Delta_k&gt;0,\\quad k=1,\\dots,n.\n   $$</p><p>半正定：\n$$\nx^TAx\\ge0.\n$$\n半正定等价于所有特征值非负；也等价于所有主子式非负。</p><p>- 判断给定二次型是否正定；\n- 用特征值判断正定；\n- 用顺序主子式判断正定；\n- 证明 Gram 矩阵正定：若 $\\alpha_1,\\dots,\\alpha_n$ 线性无关，则\n  $$\n  G=((\\alpha_i,\\alpha_j))\n  $$\n  正定。</p><h4 id=\"本章例题-10\">本章例题<a class=\"heading-anchor\" href=\"#本章例题-10\" data-heading-id=\"本章例题-10\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>例 1：化二次型\n$$\nQ(x,y)=x^2+2xy+2y^2\n$$\n为标准形。</p><p>解：\n$$\nQ=(x+y)^2+y^2.\n$$\n令 $u=x+y,v=y$，则\n$$\nQ=u^2+v^2.\n$$\n因此它正定。</p><p>例 2：判断\n$$\nA=\\begin{pmatrix}2&amp;1\\\\1&amp;2\\end{pmatrix}\n$$\n是否正定。</p><p>解：顺序主子式\n$$\n\\Delta_1=2&gt;0,\\qquad \\Delta_2=3&gt;0.\n$$\n故 $A$ 正定。</p><p>例 3：证明线性无关向量 $\\alpha_1,\\dots,\\alpha_n$ 的 Gram 矩阵\n$$\nG=((\\alpha_i,\\alpha_j))\n$$\n正定。</p><p>解：任取 $c=(c_1,\\dots,c_n)^T\\ne0$，有\n$$\nc^TGc=\\left(\\sum_i c_i\\alpha_i,\\sum_j c_j\\alpha_j\\right)\n=\\left\\|\\sum_i c_i\\alpha_i\\right\\|^2.\n$$\n因 $\\alpha_i$ 线性无关，$\\sum_i c_i\\alpha_i\\ne0$，故 $c^TGc&gt;0$。</p><h4 id=\"计算题与证明题模板\">计算题与证明题模板<a class=\"heading-anchor\" href=\"#计算题与证明题模板\" data-heading-id=\"计算题与证明题模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>这一部分把散落的计算流程集中起来。</p><h4 id=\"判断向量组线性相关\">判断向量组线性相关<a class=\"heading-anchor\" href=\"#判断向量组线性相关\" data-heading-id=\"判断向量组线性相关\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>给定向量组\n$$\n\\alpha_1,\\dots,\\alpha_s\\in F^n.\n$$</p><p>方法：</p><p>1. 组成矩阵\n   $$\n   A=(\\alpha_1,\\dots,\\alpha_s).\n   $$\n2. 解齐次方程\n   $$\n   Ax=0.\n   $$\n3. 若只有零解，则线性无关；若有非零解，则线性相关。</p><p>等价地：</p><ul><li>若 $\\operatorname{rank}A=s$，列向量组线性无关；</li><li>若 $\\operatorname{rank}A&lt;s$，列向量组线性相关。</li></ul><p>特殊快速判断：</p><ul><li>含零向量必相关；</li><li>向量个数超过空间维数必相关；</li><li>两个非零向量相关当且仅当成比例；</li><li>正交的非零向量组必无关。</li></ul><h4 id=\"求极大线性无关组和秩\">求极大线性无关组和秩<a class=\"heading-anchor\" href=\"#求极大线性无关组和秩\" data-heading-id=\"求极大线性无关组和秩\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>给定向量组 $\\alpha_1,\\dots,\\alpha_s$：</p><ol><li>以这些向量为列组成矩阵 $A$；</li><li>对 $A$ 作初等行变换化为阶梯形；</li><li>主元列对应的原向量构成极大线性无关组；</li><li>主元个数就是秩。</li></ol><p>注意：<br />行变换会改变列向量本身，但不改变列向量之间的线性关系，所以要取“原矩阵的主元列”。</p><h4 id=\"求子空间的一组基\">求子空间的一组基<a class=\"heading-anchor\" href=\"#求子空间的一组基\" data-heading-id=\"求子空间的一组基\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"由生成向量给出\">由生成向量给出<a class=\"heading-anchor\" href=\"#由生成向量给出\" data-heading-id=\"由生成向量给出\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若\n$$\nW=L(\\alpha_1,\\dots,\\alpha_s),\n$$\n则从 $\\alpha_1,\\dots,\\alpha_s$ 中取极大线性无关组，即为 $W$ 的一组基。</p><h5 id=\"由方程给出\">由方程给出<a class=\"heading-anchor\" href=\"#由方程给出\" data-heading-id=\"由方程给出\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若\n$$\nW=\\{x\\in F^n:Ax=0\\},\n$$\n则解齐次方程组，写出基础解系，即为 $W$ 的一组基。</p><p>步骤：</p><ol><li>化 $A$ 为行简化阶梯形；</li><li>找主变量和自由变量；</li><li>分别令一个自由变量为 $1$、其余为 $0$；</li><li>得到基础解系。</li></ol><h4 id=\"证明两个子空间相等\">证明两个子空间相等<a class=\"heading-anchor\" href=\"#证明两个子空间相等\" data-heading-id=\"证明两个子空间相等\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>常用方法：</p><p>1. 双包含：\n   $$\n   U\\subseteq W,\\quad W\\subseteq U.\n   $$\n2. 有限维情形：\n   $$\n   U\\subseteq W,\\quad \\dim U=\\dim W\n   \\Rightarrow U=W.\n   $$\n3. 证明二者有同一组基。\n4. 证明二者由等价向量组生成。</p><h4 id=\"直和判定\">直和判定<a class=\"heading-anchor\" href=\"#直和判定\" data-heading-id=\"直和判定\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>要证明\n$$\nV=W_1\\oplus W_2,\n$$\n通常证明：</p><ol><li>$V=W_1+W_2$；</li><li>$W_1\\cap W_2=\\{0\\}$。</li></ol><p>或者证明：\n任意 $v\\in V$ 都能唯一表示为\n$$\nv=w_1+w_2,\\qquad w_i\\in W_i.\n$$</p><p>有限维快捷法：\n若\n$$\nW_1\\cap W_2=\\{0\\}\n$$\n且\n$$\n\\dim V=\\dim W_1+\\dim W_2,\n$$\n则\n$$\nV=W_1\\oplus W_2.\n$$</p><h4 id=\"schmidt-正交化流程\">Schmidt 正交化流程<a class=\"heading-anchor\" href=\"#schmidt-正交化流程\" data-heading-id=\"schmidt-正交化流程\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>给定线性无关组\n$$\n\\alpha_1,\\dots,\\alpha_n.\n$$</p><p>先正交化：\n$$\n\\beta_1=\\alpha_1,\n$$\n$$\n\\beta_k=\\alpha_k-\\sum_{i=1}^{k-1}\n\\frac{(\\alpha_k,\\beta_i)}{(\\beta_i,\\beta_i)}\\beta_i.\n$$</p><p>再单位化：\n$$\ne_k=\\frac{\\beta_k}{\\|\\beta_k\\|}.\n$$</p><p>得到标准正交组\n$$\ne_1,\\dots,e_n.\n$$</p><p>常见检查：\n$$\n(\\beta_k,\\beta_i)=0,\\qquad i&lt;k.\n$$</p><h4 id=\"线性映射题模板\">线性映射题模板<a class=\"heading-anchor\" href=\"#线性映射题模板\" data-heading-id=\"线性映射题模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h5 id=\"由基上的取值确定线性映射\">由基上的取值确定线性映射<a class=\"heading-anchor\" href=\"#由基上的取值确定线性映射\" data-heading-id=\"由基上的取值确定线性映射\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若 $\\alpha_1,\\dots,\\alpha_n$ 是 $V$ 的基，给定 $\\beta_1,\\dots,\\beta_n\\in W$，则唯一线性映射 $T$ 满足\n$$\nT(\\alpha_i)=\\beta_i.\n$$</p><p>对任意\n$$\nx=x_1\\alpha_1+\\cdots+x_n\\alpha_n,\n$$\n有\n$$\nT(x)=x_1\\beta_1+\\cdots+x_n\\beta_n.\n$$</p><h5 id=\"求核与像\">求核与像<a class=\"heading-anchor\" href=\"#求核与像\" data-heading-id=\"求核与像\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若线性映射矩阵为 $A$：</p><p>- 核：\n  $$\n  \\ker T=\\{x:Ax=0\\};\n  $$\n- 像：\n  $$\n  \\operatorname{Im}T=L(A\\text{ 的列向量}).\n  $$</p><p>因此：\n$$\n\\dim\\ker T=n-r(A),\\qquad\n\\dim\\operatorname{Im}T=r(A).\n$$</p><h5 id=\"判断单射-满射\">判断单射、满射<a class=\"heading-anchor\" href=\"#判断单射-满射\" data-heading-id=\"判断单射-满射\" aria-label=\"Copy section link / 复制小节链接\">#</a></h5><p>若 $T:F^n\\to F^m$，矩阵为 $A_{m\\times n}$：</p><ul><li>单射 $\\Longleftrightarrow r(A)=n$；</li><li>满射 $\\Longleftrightarrow r(A)=m$；</li><li>双射 $\\Longleftrightarrow m=n=r(A)$。</li></ul><h4 id=\"求线性映射矩阵\">求线性映射矩阵<a class=\"heading-anchor\" href=\"#求线性映射矩阵\" data-heading-id=\"求线性映射矩阵\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $V$ 的基为 $\\alpha=(\\alpha_1,\\dots,\\alpha_n)$，$W$ 的基为 $\\beta=(\\beta_1,\\dots,\\beta_m)$。</p><p>步骤：</p><p>1. 分别计算 $T(\\alpha_j)$；\n2. 把 $T(\\alpha_j)$ 用 $\\beta$ 线性表示：\n   $$\n   T(\\alpha_j)=a_{1j}\\beta_1+\\cdots+a_{mj}\\beta_m;\n   $$\n3. 第 $j$ 列就是\n   $$\n   (a_{1j},\\dots,a_{mj})^T.\n   $$</p><p>坐标公式：\n$$\n[T(x)]_\\beta=A[x]_\\alpha.\n$$</p><h4 id=\"矩阵可逆题模板\">矩阵可逆题模板<a class=\"heading-anchor\" href=\"#矩阵可逆题模板\" data-heading-id=\"矩阵可逆题模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>证明 $A$ 可逆可选：</p><ol><li>构造 $B$ 使 $AB=BA=I$；</li><li>证明 $\\det A\\ne0$；</li><li>证明 $r(A)=n$；</li><li>证明 $Ax=0$ 只有零解；</li><li>证明列向量组构成 $F^n$ 的一组基；</li><li>证明 $A$ 是初等矩阵乘积。</li></ol><p>求逆方法：</p><p>1. 初等行变换：\n   $$\n   (A\\mid I)\\to(I\\mid A^{-1}).\n   $$\n2. 伴随矩阵：\n   $$\n   A^{-1}=\\frac1{\\det A}A^*.\n   $$\n3. 分块矩阵法。\n4. 利用矩阵多项式，例如若\n   $$\n   A^2-3A+2I=0,\n   $$\n   且常数项非零，则可解出 $A^{-1}$。</p><h4 id=\"行列式计算方法\">行列式计算方法<a class=\"heading-anchor\" href=\"#行列式计算方法\" data-heading-id=\"行列式计算方法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>常用方法：</p><p>1. 初等变换化三角；\n2. 按行/列展开；\n3. 提取公因子；\n4. 递推法；\n5. 加边升阶法；\n6. 利用 Vandermonde 行列式：\n   $$\n   \\prod_{1\\le i&lt;j\\le n}(x_j-x_i).\n   $$\n7. 分块行列式；\n8. 利用\n   $$\n   \\det(I_m-AB)=\\det(I_n-BA).\n   $$</p><p>注意初等变换对行列式的影响：</p><ul><li>交换两行：变号；</li><li>某行乘 $k$：行列式乘 $k$；</li><li>某行加另一行倍数：行列式不变。</li></ul><h4 id=\"线性方程组题模板\">线性方程组题模板<a class=\"heading-anchor\" href=\"#线性方程组题模板\" data-heading-id=\"线性方程组题模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>对于\n$$\nAx=b\n$$\n先比较秩：</p><p>- 无解：\n  $$\n  r(A)&lt;r(A|b).\n  $$\n- 唯一解：\n  $$\n  r(A)=r(A|b)=n.\n  $$\n- 无穷多解：\n  $$\n  r(A)=r(A|b)&lt;n.\n  $$</p><p>通解写法：</p><p>1. 求一个特解 $x_0$；\n2. 求齐次方程基础解系 $\\eta_1,\\dots,\\eta_{n-r}$；\n3. 写\n   $$\n   x=x_0+c_1\\eta_1+\\cdots+c_{n-r}\\eta_{n-r}.\n   $$</p><h4 id=\"特征值与对角化流程\">特征值与对角化流程<a class=\"heading-anchor\" href=\"#特征值与对角化流程\" data-heading-id=\"特征值与对角化流程\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>给定 $n$ 阶矩阵 $A$。</p><p>1. 求特征多项式：\n   $$\n   p_A(\\lambda)=\\det(\\lambda I-A).\n   $$\n2. 求特征值 $\\lambda_i$。\n3. 对每个 $\\lambda_i$ 解\n   $$\n   (A-\\lambda_i I)x=0\n   $$\n   得特征子空间 $E_{\\lambda_i}$。\n4. 统计\n   $$\n   \\sum_i\\dim E_{\\lambda_i}.\n   $$\n5. 若和为 $n$，则可对角化。</p><p>构造对角化：\n取一组特征向量基作为 $P$ 的列，则\n$$\nP^{-1}AP=D.\n$$</p><p>快速充分条件：<br />若 $A$ 在所讨论数域中有 $n$ 个互异特征值，则可对角化。</p><p>常见反例：<br />有重特征值不一定不可对角化，要看特征子空间维数。</p><h4 id=\"实对称矩阵题模板\">实对称矩阵题模板<a class=\"heading-anchor\" href=\"#实对称矩阵题模板\" data-heading-id=\"实对称矩阵题模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $A=A^T$：</p><ol><li>特征值全为实数；</li><li>不同特征值的特征向量正交；</li><li>一定可正交对角化。</li></ol><p>流程：</p><p>1. 求特征值；\n2. 求各特征子空间；\n3. 对每个特征子空间内部做 Schmidt 正交化；\n4. 合并得到标准正交特征向量组；\n5. 令 $Q$ 为这些向量作列，则\n   $$\n   Q^TAQ=D.\n   $$</p><h4 id=\"二次型化标准形\">二次型化标准形<a class=\"heading-anchor\" href=\"#二次型化标准形\" data-heading-id=\"二次型化标准形\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>方法一：配方法。</p><p>适合变量少、交叉项明显的二次型。</p><p>方法二：合同初等变换。</p><p>对称矩阵 $A$ 同时作相同类型的行列变换，相当于求\n$$\nC^TAC.\n$$</p><p>方法三：正交变换。</p><p>若 $A$ 实对称，可正交对角化：\n$$\nQ^TAQ=D.\n$$\n于是\n$$\nx^TAx=y^TDy.\n$$</p><h4 id=\"正定判别模板\">正定判别模板<a class=\"heading-anchor\" href=\"#正定判别模板\" data-heading-id=\"正定判别模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>实对称矩阵 $A$ 正定的等价判别：</p><ol><li>$x^TAx&gt;0$ 对一切 $x\\ne0$；</li><li>所有特征值 $&gt;0$；</li><li>所有顺序主子式 $&gt;0$；</li><li>存在可逆 $P$，使 $A=P^TP$。</li></ol><p>二阶矩阵\n$$\nA=\\begin{pmatrix}a&amp;b\\\\b&amp;c\\end{pmatrix}\n$$\n正定当且仅当\n$$\na&gt;0,\\qquad ac-b^2&gt;0.\n$$</p><p>三阶矩阵用顺序主子式：\n$$\n\\Delta_1&gt;0,\\quad \\Delta_2&gt;0,\\quad \\Delta_3&gt;0.\n$$</p><p>半正定注意：<br />不能只看顺序主子式非负；常用“所有主子式非负”或“所有特征值非负”。</p><h4 id=\"容易误用的点\">容易误用的点<a class=\"heading-anchor\" href=\"#容易误用的点\" data-heading-id=\"容易误用的点\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>“向量个数等于维数”不自动推出是基，还需线性无关或能生成。</li><li>行变换改变列向量本身，但不改变列向量间线性关系。</li><li>$AB=I$ 对方阵可推出 $BA=I$；非方阵不行。</li><li>相似与相抵不同：相似是 $P^{-1}AP$，相抵是 $PAQ$。</li><li>对角化不是只求出特征值，还要有足够多线性无关特征向量。</li><li>实对称矩阵一定可正交对角化，一般矩阵不一定。</li><li>合同用于二次型，相似用于线性变换。</li><li>正定矩阵默认实对称；非对称矩阵讨论 $x^TAx$ 时只与其对称部分有关。</li></ol><h4 id=\"主要定理证明\">主要定理证明<a class=\"heading-anchor\" href=\"#主要定理证明\" data-heading-id=\"主要定理证明\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"子空间判别法\">子空间判别法<a class=\"heading-anchor\" href=\"#子空间判别法\" data-heading-id=\"子空间判别法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $W\\subseteq V$ 且 $W\\ne\\varnothing$。若对任意 $x,y\\in W$ 与 $\\lambda,\\mu\\in F$ 都有\n$$\n\\lambda x+\\mu y\\in W,\n$$\n则取 $\\lambda=\\mu=1$ 得加法封闭；取 $\\mu=0$ 得数乘封闭。又因 $W$ 非空，取 $w\\in W$，由 $0w=0$ 得零元在 $W$ 中，由 $(-1)w=-w$ 得负元在 $W$ 中，所以 $W$ 在继承的运算下构成线性空间。</p><p>反过来，若 $W$ 是子空间，则加法和数乘封闭，故任意 $\\lambda x,\\mu y\\in W$，再相加得 $\\lambda x+\\mu y\\in W$。</p><h4 id=\"线性包的最小性\">线性包的最小性<a class=\"heading-anchor\" href=\"#线性包的最小性\" data-heading-id=\"线性包的最小性\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>记 $L(S)$ 为 $S$ 中有限个向量的所有线性组合。两个线性组合相加或数乘后仍是线性组合，所以 $L(S)$ 是子空间。显然 $S\\subseteq L(S)$。</p><p>若 $W$ 是任意包含 $S$ 的子空间，则 $W$ 对线性组合封闭，所以 $S$ 中元素的一切线性组合都属于 $W$，即 $L(S)\\subseteq W$。因此 $L(S)$ 是包含 $S$ 的最小子空间。</p><h4 id=\"线性相关判别\">线性相关判别<a class=\"heading-anchor\" href=\"#线性相关判别\" data-heading-id=\"线性相关判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若有限向量组 $\\alpha_1,\\dots,\\alpha_n$ 线性相关，则存在不全为 $0$ 的 $k_i$，使\n$$\nk_1\\alpha_1+\\cdots+k_n\\alpha_n=0.\n$$\n取 $k_i\\ne0$，即可写成\n$$\n\\alpha_i=-\\frac1{k_i}\\sum_{j\\ne i}k_j\\alpha_j,\n$$\n即某个向量可由其余向量线性表示。</p><p>反过来，若\n$$\n\\alpha_i=\\sum_{j\\ne i}c_j\\alpha_j,\n$$\n则\n$$\n\\alpha_i-\\sum_{j\\ne i}c_j\\alpha_j=0\n$$\n给出一个不全为 $0$ 的线性关系，所以向量组线性相关。</p><h4 id=\"替换定理-2\">替换定理<a class=\"heading-anchor\" href=\"#替换定理-2\" data-heading-id=\"替换定理-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $\\beta_1,\\dots,\\beta_m$ 线性无关，且都可由 $\\alpha_1,\\dots,\\alpha_n$ 线性表示。先把 $\\beta_1$ 写成 $\\alpha_i$ 的线性组合，其中至少有一个系数非零。可把对应的 $\\alpha_j$ 用 $\\beta_1$ 与其余 $\\alpha$ 表示，从而用 $\\beta_1$ 替换 $\\alpha_j$ 后，生成空间不变。</p><p>若已经替换了 $\\beta_1,\\dots,\\beta_k$，则 $\\beta_{k+1}$ 可由当前这组生成向量表示。由于 $\\beta_1,\\dots,\\beta_{k+1}$ 线性无关，表达式中必有某个尚未被替换的 $\\alpha$ 的系数非零，否则 $\\beta_{k+1}$ 会由 $\\beta_1,\\dots,\\beta_k$ 表示。于是可继续替换。</p><p>这个过程最多替换 $n$ 次，因此 $m\\le n$。由此推出有限维空间任意两组基元素个数相同。</p><h4 id=\"基的扩充与子空间维数\">基的扩充与子空间维数<a class=\"heading-anchor\" href=\"#基的扩充与子空间维数\" data-heading-id=\"基的扩充与子空间维数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $W\\le V$，$\\dim V=n$。取 $W$ 中一组线性无关向量，若它还不能生成 $W$，就加入一个不在其线性包中的 $W$ 中向量，线性无关性保持。由于 $V$ 中任意超过 $n$ 个向量必线性相关，此过程有限终止，得到 $W$ 的一组基，且元素个数不超过 $n$。故 $\\dim W\\le\\dim V$。</p><p>若 $\\dim W=\\dim V$，取 $W$ 的一组基。它也是 $V$ 中含 $n$ 个向量的线性无关组，因此构成 $V$ 的基，于是 $W=V$。</p><h4 id=\"维数公式-2\">维数公式<a class=\"heading-anchor\" href=\"#维数公式-2\" data-heading-id=\"维数公式-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $U,W$ 有限维。取 $U\\cap W$ 的基\n$$\n\\gamma_1,\\dots,\\gamma_r.\n$$\n把它扩充为 $U$ 的基\n$$\n\\gamma_1,\\dots,\\gamma_r,\\alpha_1,\\dots,\\alpha_s,\n$$\n再扩充为 $W$ 的基\n$$\n\\gamma_1,\\dots,\\gamma_r,\\beta_1,\\dots,\\beta_t.\n$$\n证明合并向量组\n$$\n\\gamma_1,\\dots,\\gamma_r,\\alpha_1,\\dots,\\alpha_s,\\beta_1,\\dots,\\beta_t\n$$\n是 $U+W$ 的基。生成性显然。若有线性关系\n$$\n\\sum c_i\\gamma_i+\\sum a_j\\alpha_j+\\sum b_k\\beta_k=0,\n$$\n则\n$$\n\\sum c_i\\gamma_i+\\sum a_j\\alpha_j=-\\sum b_k\\beta_k.\n$$\n左边属于 $U$，右边属于 $W$，所以二者都属于 $U\\cap W$。由于 $\\gamma_i$ 是 $U\\cap W$ 的基，结合 $U$ 的基的线性无关性，得 $a_j=0$；再由 $W$ 的基的线性无关性，得 $b_k=0,c_i=0$。故合并组线性无关。</p><p>因此\n$$\n\\dim(U+W)=r+s+t=(r+s)+(r+t)-r\n=\\dim U+\\dim W-\\dim(U\\cap W).\n$$</p><h4 id=\"直和判别\">直和判别<a class=\"heading-anchor\" href=\"#直和判别\" data-heading-id=\"直和判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $U\\cap W=\\{0\\}$，且 $x=u_1+w_1=u_2+w_2$，其中 $u_i\\in U,w_i\\in W$，则\n$$\nu_1-u_2=w_2-w_1.\n$$\n左边属于 $U$，右边属于 $W$，故属于 $U\\cap W$，只能为 $0$。于是 $u_1=u_2,w_1=w_2$，表示唯一。</p><p>反过来，若表示唯一，而 $z\\in U\\cap W$，则\n$$\nz=z+0=0+z\n$$\n是 $U+W$ 中同一向量的两种表示，故 $z=0$。因此 $U\\cap W=\\{0\\}$。</p><h4 id=\"cauchy-schwarz-不等式-2\">Cauchy-Schwarz 不等式<a class=\"heading-anchor\" href=\"#cauchy-schwarz-不等式-2\" data-heading-id=\"cauchy-schwarz-不等式-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $y=0$，结论显然。设 $y\\ne0$。对任意 $t\\in\\mathbb R$，\n$$\n0\\le (x+ty,x+ty)=(y,y)t^2+2(x,y)t+(x,x).\n$$\n这是关于 $t$ 的二次多项式，且恒非负，所以判别式不大于 $0$：\n$$\n4(x,y)^2-4(x,x)(y,y)\\le0.\n$$\n故\n$$\n|(x,y)|\\le \\|x\\|\\|y\\|.\n$$\n等号成立当且仅当该二次式有实根，即存在 $t$ 使 $x+ty=0$，也就是 $x,y$ 线性相关。</p><h4 id=\"schmidt-正交化\">Schmidt 正交化<a class=\"heading-anchor\" href=\"#schmidt-正交化\" data-heading-id=\"schmidt-正交化\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $\\alpha_1,\\dots,\\alpha_n$ 线性无关。令 $\\beta_1=\\alpha_1$，并递推定义\n$$\n\\beta_k=\\alpha_k-\\sum_{i=1}^{k-1}\n\\frac{(\\alpha_k,\\beta_i)}{(\\beta_i,\\beta_i)}\\beta_i.\n$$\n对 $j&lt;k$，有\n$$\n(\\beta_k,\\beta_j)\n=(\\alpha_k,\\beta_j)-\\frac{(\\alpha_k,\\beta_j)}{(\\beta_j,\\beta_j)}(\\beta_j,\\beta_j)=0,\n$$\n其他项因归纳假设正交而为 $0$。故 $\\beta_k$ 与前面所有 $\\beta_j$ 正交。</p><p>若某个 $\\beta_k=0$，则 $\\alpha_k$ 是 $\\beta_1,\\dots,\\beta_{k-1}$ 的线性组合，而这些 $\\beta_i$ 又由 $\\alpha_1,\\dots,\\alpha_{k-1}$ 生成，导致 $\\alpha_1,\\dots,\\alpha_k$ 线性相关，矛盾。因此 $\\beta_k\\ne0$。单位化 $e_k=\\beta_k/\\|\\beta_k\\|$ 得标准正交组。</p><h4 id=\"秩-零化度定理-2\">秩-零化度定理<a class=\"heading-anchor\" href=\"#秩-零化度定理-2\" data-heading-id=\"秩-零化度定理-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $T:V\\to W$ 线性，$\\dim V&lt;\\infty$。取 $\\ker T$ 的基\n$$\nu_1,\\dots,u_r,\n$$\n扩充为 $V$ 的基\n$$\nu_1,\\dots,u_r,v_1,\\dots,v_s.\n$$\n证明 $T(v_1),\\dots,T(v_s)$ 是 $\\operatorname{Im}T$ 的基。</p><p>生成性：任意 $x\\in V$ 可写为\n$$\nx=\\sum a_i u_i+\\sum b_j v_j,\n$$\n于是\n$$\nT(x)=\\sum b_jT(v_j),\n$$\n故这些像生成 $\\operatorname{Im}T$。</p><p>线性无关性：若\n$$\n\\sum b_jT(v_j)=0,\n$$\n则 $T(\\sum b_jv_j)=0$，所以 $\\sum b_jv_j\\in\\ker T$，可由 $u_i$ 表示。这与扩充后的基线性无关相容只可能 $b_j=0$。因此\n$$\n\\dim V=r+s=\\dim\\ker T+\\dim\\operatorname{Im}T.\n$$</p><h4 id=\"矩阵表示与基变换公式\">矩阵表示与基变换公式<a class=\"heading-anchor\" href=\"#矩阵表示与基变换公式\" data-heading-id=\"矩阵表示与基变换公式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $T(\\alpha_j)=\\sum_i a_{ij}\\beta_i$，矩阵 $A=(a_{ij})$。若\n$$\nx=\\sum_j x_j\\alpha_j,\n$$\n则由线性性\n$$\nT(x)=\\sum_j x_jT(\\alpha_j)\n=\\sum_j x_j\\sum_i a_{ij}\\beta_i\n=\\sum_i\\left(\\sum_j a_{ij}x_j\\right)\\beta_i.\n$$\n因此 $[T(x)]_\\beta=A[x]_\\alpha$。</p><p>若新旧基满足\n$$\n(\\beta_1,\\dots,\\beta_n)=(\\alpha_1,\\dots,\\alpha_n)P,\n$$\n且 $x=(\\alpha)X_\\alpha=(\\beta)X_\\beta$，则\n$$\n(\\alpha)X_\\alpha=(\\alpha)PX_\\beta.\n$$\n由坐标唯一性得 $X_\\alpha=PX_\\beta$，即 $X_\\beta=P^{-1}X_\\alpha$。线性变换矩阵的相似公式 $B=P^{-1}AP$ 随之得到。</p><h4 id=\"可逆矩阵等价条件\">可逆矩阵等价条件<a class=\"heading-anchor\" href=\"#可逆矩阵等价条件\" data-heading-id=\"可逆矩阵等价条件\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $A$ 为 $n$ 阶矩阵。若 $A$ 可逆，则 $Ax=0$ 左乘 $A^{-1}$ 得 $x=0$，所以齐次方程只有零解。齐次方程只有零解等价于列向量线性无关，也等价于 $\\operatorname{rank}A=n$。秩为 $n$ 又等价于列向量构成 $F^n$ 的基，因此对任意 $b$，方程 $Ax=b$ 有唯一解。</p><p>若对任意 $b$ 方程 $Ax=b$ 有唯一解，特别地对标准基 $e_i$，存在唯一 $x_i$ 使 $Ax_i=e_i$。令 $B=(x_1,\\dots,x_n)$，则 $AB=I$。方阵左逆右逆一致，可推出 $BA=I$，故 $A$ 可逆。又 $\\operatorname{rank}A=n$ 等价于 $\\det A\\ne0$，并且也等价于 $A$ 可化为 $I$，即 $A$ 是初等矩阵的乘积。</p><h4 id=\"行列式秩定理\">行列式秩定理<a class=\"heading-anchor\" href=\"#行列式秩定理\" data-heading-id=\"行列式秩定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设矩阵秩为 $r$。由秩的定义，可取 $r$ 个线性无关列。只看这 $r$ 列得到一个列秩为 $r$ 的子矩阵，因此其中必有 $r$ 行使对应的 $r\\times r$ 子矩阵行秩也为 $r$，于是得到一个 $r$ 阶非零子式。</p><p>另一方面，若存在 $r+1$ 阶非零子式，则该子式的 $r+1$ 列线性无关，从而原矩阵秩至少为 $r+1$，矛盾。因此所有 $r+1$ 阶子式为 $0$。所以矩阵秩恰等于非零子式的最高阶数。</p><h4 id=\"cramer-法则-2\">Cramer 法则<a class=\"heading-anchor\" href=\"#cramer-法则-2\" data-heading-id=\"cramer-法则-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $\\det A\\ne0$，则 $A$ 可逆，方程 $Ax=b$ 有唯一解。由伴随矩阵公式\n$$\nA^{-1}=\\frac1{\\det A}A^*,\n$$\n有 $x=A^{-1}b$。第 $i$ 个分量等于把 $A$ 的第 $i$ 列替换为 $b$ 后按第 $i$ 列展开所得行列式除以 $\\det A$，即\n$$\nx_i=\\frac{\\det A_i}{\\det A}.\n$$</p><h4 id=\"不同特征值的特征向量线性无关\">不同特征值的特征向量线性无关<a class=\"heading-anchor\" href=\"#不同特征值的特征向量线性无关\" data-heading-id=\"不同特征值的特征向量线性无关\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>对特征值个数归纳。设 $\\alpha_i$ 属于互异特征值 $\\lambda_i$，且\n$$\nc_1\\alpha_1+\\cdots+c_m\\alpha_m=0.\n$$\n对等式作用 $A$，得\n$$\nc_1\\lambda_1\\alpha_1+\\cdots+c_m\\lambda_m\\alpha_m=0.\n$$\n用 $\\lambda_m$ 乘原等式并相减，得\n$$\nc_1(\\lambda_1-\\lambda_m)\\alpha_1+\\cdots+c_{m-1}(\\lambda_{m-1}-\\lambda_m)\\alpha_{m-1}=0.\n$$\n由归纳假设，$c_i(\\lambda_i-\\lambda_m)=0$，而 $\\lambda_i\\ne\\lambda_m$，故 $c_i=0$，$i&lt;m$。代回原式得 $c_m=0$。故线性无关。</p><h4 id=\"对角化判别\">对角化判别<a class=\"heading-anchor\" href=\"#对角化判别\" data-heading-id=\"对角化判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>若 $A$ 可对角化，即 $P^{-1}AP=D$，设 $P$ 的列为 $p_1,\\dots,p_n$，$D$ 的对角元为 $\\lambda_1,\\dots,\\lambda_n$。由\n$$\nAP=PD\n$$\n可得 $Ap_i=\\lambda_i p_i$。因为 $P$ 可逆，$p_i$ 构成一组基，所以存在一组由特征向量组成的基。</p><p>反过来，若存在特征向量基 $p_1,\\dots,p_n$，令 $P=(p_1,\\dots,p_n)$，则 $P$ 可逆且\n$$\nAP=P\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n),\n$$\n故\n$$\nP^{-1}AP=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n).\n$$</p><h4 id=\"实对称矩阵正交对角化\">实对称矩阵正交对角化<a class=\"heading-anchor\" href=\"#实对称矩阵正交对角化\" data-heading-id=\"实对称矩阵正交对角化\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>设 $A=A^T$。先取单位特征向量 $u$，对应实特征值 $\\lambda$。对任意 $v\\perp u$，\n$$\n(Av,u)=(v,A^Tu)=(v,Au)=\\lambda(v,u)=0,\n$$\n所以 $u^\\perp$ 在 $A$ 下不变。将 $A$ 限制在 $u^\\perp$ 上仍是实对称变换。对维数归纳，可在 $u^\\perp$ 中取一组标准正交特征向量。连同 $u$ 得到全空间的一组标准正交特征向量。以它们为列组成正交矩阵 $Q$，便有\n$$\nQ^TAQ=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n).\n$$</p><h4 id=\"惯性定理-2\">惯性定理<a class=\"heading-anchor\" href=\"#惯性定理-2\" data-heading-id=\"惯性定理-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>实二次型经可逆线性替换可化为\n$$\nz_1^2+\\cdots+z_p^2-z_{p+1}^2-\\cdots-z_{p+q}^2.\n$$\n设同一二次型还有另一规范形，正平方项个数为 $p&#039;$。若 $p&lt;p&#039;$，取第二个规范形中由正平方变量张成的 $p&#039;$ 维子空间。它与第一个规范形中非正平方部分张成的 $n-p$ 维子空间维数和大于 $n$，故交非零。交中非零向量在第二规范形下取正值，在第一规范形下取非正值，矛盾。因此 $p\\ge p&#039;$。交换两种规范形得 $p&#039;\\ge p$，故 $p=p&#039;$。负惯性指数同理唯一。</p><h4 id=\"正定判别\">正定判别<a class=\"heading-anchor\" href=\"#正定判别\" data-heading-id=\"正定判别\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>对实对称矩阵 $A$，由正交对角化，存在正交 $Q$，使\n$$\nQ^TAQ=\\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n).\n$$\n令 $x=Qy$，则\n$$\nx^TAx=y^TQ^TAQy=\\sum_{i=1}^n\\lambda_i y_i^2.\n$$\n因此 $A$ 正定当且仅当所有 $\\lambda_i&gt;0$。</p><p>若 $A=P^TP$ 且 $P$ 可逆，则\n$$\nx^TAx=x^TP^TPx=\\|Px\\|^2&gt;0\\quad(x\\ne0),\n$$\n所以 $A$ 正定。反过来，若 $A$ 正定，正交对角化后令\n$$\nD=\\operatorname{diag}(\\lambda_i),\\qquad D^{1/2}=\\operatorname{diag}(\\sqrt{\\lambda_i}),\n$$\n则\n$$\nA=QDQ^T=(D^{1/2}Q^T)^T(D^{1/2}Q^T),\n$$\n得到 $A=P^TP$。</p><p>顺序主子式判别可由配方法或 Gaussian 消元得到：正定二次型逐步配方时每一步的主元都必须为正，而这些主元的乘积正是顺序主子式之比。因此所有顺序主子式为正当且仅当 $A$ 正定。</p><h4 id=\"附件\">附件<a class=\"heading-anchor\" href=\"#附件\" data-heading-id=\"附件\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"entry-file\"><a class=\"download-button\" href=\"files/2026-04-24-main-math-notes/线性代数I.pdf\" download><span>下载 / 预览 PDF</span><small>线性代数I.pdf</small></a><details class=\"file-preview\"><summary>Preview / 预览</summary><iframe src=\"files/2026-04-24-main-math-notes/线性代数I.pdf\" title=\"线性代数I.pdf\" loading=\"lazy\"></iframe></details></div>",
      "headings": [
        {
          "id": "线性方程组与行简化阶梯形",
          "title": "线性方程组与行简化阶梯形",
          "level": 4
        },
        {
          "id": "行简化阶梯形",
          "title": "行简化阶梯形",
          "level": 4
        },
        {
          "id": "齐次与非齐次方程组",
          "title": "齐次与非齐次方程组",
          "level": 4
        },
        {
          "id": "本章例题",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "线性空间-子空间与生成",
          "title": "线性空间、子空间与生成",
          "level": 4
        },
        {
          "id": "线性空间定义",
          "title": "线性空间定义",
          "level": 4
        },
        {
          "id": "基本性质",
          "title": "基本性质",
          "level": 4
        },
        {
          "id": "子空间",
          "title": "子空间",
          "level": 4
        },
        {
          "id": "线性组合与线性包",
          "title": "线性组合与线性包",
          "level": 4
        },
        {
          "id": "本章例题-2",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "线性相关-基-维数与秩",
          "title": "线性相关、基、维数与秩",
          "level": 4
        },
        {
          "id": "线性相关与线性无关",
          "title": "线性相关与线性无关",
          "level": 4
        },
        {
          "id": "替换定理",
          "title": "替换定理",
          "level": 4
        },
        {
          "id": "基与维数",
          "title": "基与维数",
          "level": 4
        },
        {
          "id": "子空间维数",
          "title": "子空间维数",
          "level": 4
        },
        {
          "id": "向量组的秩",
          "title": "向量组的秩",
          "level": 4
        },
        {
          "id": "坐标",
          "title": "坐标",
          "level": 4
        },
        {
          "id": "本章例题-3",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "子空间的交-和与直和",
          "title": "子空间的交、和与直和",
          "level": 4
        },
        {
          "id": "交空间与和空间",
          "title": "交空间与和空间",
          "level": 4
        },
        {
          "id": "维数公式",
          "title": "维数公式",
          "level": 4
        },
        {
          "id": "直和",
          "title": "直和",
          "level": 4
        },
        {
          "id": "本章例题-4",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "内积空间",
          "title": "内积空间",
          "level": 4
        },
        {
          "id": "内积定义",
          "title": "内积定义",
          "level": 4
        },
        {
          "id": "cauchy-schwarz-不等式",
          "title": "Cauchy-Schwarz 不等式",
          "level": 4
        },
        {
          "id": "范数与夹角",
          "title": "范数与夹角",
          "level": 4
        },
        {
          "id": "正交与标准正交基",
          "title": "正交与标准正交基",
          "level": 4
        },
        {
          "id": "本章例题-5",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "线性映射",
          "title": "线性映射",
          "level": 4
        },
        {
          "id": "线性映射定义",
          "title": "线性映射定义",
          "level": 4
        },
        {
          "id": "像与核",
          "title": "像与核",
          "level": 4
        },
        {
          "id": "秩-零化度定理",
          "title": "秩-零化度定理",
          "level": 4
        },
        {
          "id": "同构",
          "title": "同构",
          "level": 4
        },
        {
          "id": "线性映射空间",
          "title": "线性映射空间",
          "level": 4
        },
        {
          "id": "本章例题-6",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "线性映射的矩阵表示与矩阵运算",
          "title": "线性映射的矩阵表示与矩阵运算",
          "level": 4
        },
        {
          "id": "矩阵表示",
          "title": "矩阵表示",
          "level": 4
        },
        {
          "id": "矩阵乘法",
          "title": "矩阵乘法",
          "level": 4
        },
        {
          "id": "可逆矩阵",
          "title": "可逆矩阵",
          "level": 4
        },
        {
          "id": "转置与特殊矩阵",
          "title": "转置与特殊矩阵",
          "level": 4
        },
        {
          "id": "初等矩阵与初等变换",
          "title": "初等矩阵与初等变换",
          "level": 4
        },
        {
          "id": "相抵标准形",
          "title": "相抵标准形",
          "level": 4
        },
        {
          "id": "基变换与坐标变换",
          "title": "基变换与坐标变换",
          "level": 4
        },
        {
          "id": "本章例题-7",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "行列式",
          "title": "行列式",
          "level": 4
        },
        {
          "id": "行列式性质",
          "title": "行列式性质",
          "level": 4
        },
        {
          "id": "代数余子式展开",
          "title": "代数余子式展开",
          "level": 4
        },
        {
          "id": "伴随矩阵",
          "title": "伴随矩阵",
          "level": 4
        },
        {
          "id": "行列式秩",
          "title": "行列式秩",
          "level": 4
        },
        {
          "id": "cramer-法则",
          "title": "Cramer 法则",
          "level": 4
        },
        {
          "id": "本章例题-8",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "特征值-特征向量与对角化",
          "title": "特征值、特征向量与对角化",
          "level": 4
        },
        {
          "id": "特征值与特征向量",
          "title": "特征值与特征向量",
          "level": 4
        },
        {
          "id": "不同特征值的特征向量",
          "title": "不同特征值的特征向量",
          "level": 4
        },
        {
          "id": "可对角化",
          "title": "可对角化",
          "level": 4
        },
        {
          "id": "实对称矩阵的正交对角化",
          "title": "实对称矩阵的正交对角化",
          "level": 4
        },
        {
          "id": "本章例题-9",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "二次型-合同与正定",
          "title": "二次型、合同与正定",
          "level": 4
        },
        {
          "id": "双线性函数与二次型",
          "title": "双线性函数与二次型",
          "level": 4
        },
        {
          "id": "合同",
          "title": "合同",
          "level": 4
        },
        {
          "id": "标准形与规范形",
          "title": "标准形与规范形",
          "level": 4
        },
        {
          "id": "惯性定理",
          "title": "惯性定理",
          "level": 4
        },
        {
          "id": "正定二次型与正定矩阵",
          "title": "正定二次型与正定矩阵",
          "level": 4
        },
        {
          "id": "本章例题-10",
          "title": "本章例题",
          "level": 4
        },
        {
          "id": "计算题与证明题模板",
          "title": "计算题与证明题模板",
          "level": 4
        },
        {
          "id": "判断向量组线性相关",
          "title": "判断向量组线性相关",
          "level": 4
        },
        {
          "id": "求极大线性无关组和秩",
          "title": "求极大线性无关组和秩",
          "level": 4
        },
        {
          "id": "求子空间的一组基",
          "title": "求子空间的一组基",
          "level": 4
        },
        {
          "id": "由生成向量给出",
          "title": "由生成向量给出",
          "level": 5
        },
        {
          "id": "由方程给出",
          "title": "由方程给出",
          "level": 5
        },
        {
          "id": "证明两个子空间相等",
          "title": "证明两个子空间相等",
          "level": 4
        },
        {
          "id": "直和判定",
          "title": "直和判定",
          "level": 4
        },
        {
          "id": "schmidt-正交化流程",
          "title": "Schmidt 正交化流程",
          "level": 4
        },
        {
          "id": "线性映射题模板",
          "title": "线性映射题模板",
          "level": 4
        },
        {
          "id": "由基上的取值确定线性映射",
          "title": "由基上的取值确定线性映射",
          "level": 5
        },
        {
          "id": "求核与像",
          "title": "求核与像",
          "level": 5
        },
        {
          "id": "判断单射-满射",
          "title": "判断单射、满射",
          "level": 5
        },
        {
          "id": "求线性映射矩阵",
          "title": "求线性映射矩阵",
          "level": 4
        },
        {
          "id": "矩阵可逆题模板",
          "title": "矩阵可逆题模板",
          "level": 4
        },
        {
          "id": "行列式计算方法",
          "title": "行列式计算方法",
          "level": 4
        },
        {
          "id": "线性方程组题模板",
          "title": "线性方程组题模板",
          "level": 4
        },
        {
          "id": "特征值与对角化流程",
          "title": "特征值与对角化流程",
          "level": 4
        },
        {
          "id": "实对称矩阵题模板",
          "title": "实对称矩阵题模板",
          "level": 4
        },
        {
          "id": "二次型化标准形",
          "title": "二次型化标准形",
          "level": 4
        },
        {
          "id": "正定判别模板",
          "title": "正定判别模板",
          "level": 4
        },
        {
          "id": "容易误用的点",
          "title": "容易误用的点",
          "level": 4
        },
        {
          "id": "主要定理证明",
          "title": "主要定理证明",
          "level": 4
        },
        {
          "id": "子空间判别法",
          "title": "子空间判别法",
          "level": 4
        },
        {
          "id": "线性包的最小性",
          "title": "线性包的最小性",
          "level": 4
        },
        {
          "id": "线性相关判别",
          "title": "线性相关判别",
          "level": 4
        },
        {
          "id": "替换定理-2",
          "title": "替换定理",
          "level": 4
        },
        {
          "id": "基的扩充与子空间维数",
          "title": "基的扩充与子空间维数",
          "level": 4
        },
        {
          "id": "维数公式-2",
          "title": "维数公式",
          "level": 4
        },
        {
          "id": "直和判别",
          "title": "直和判别",
          "level": 4
        },
        {
          "id": "cauchy-schwarz-不等式-2",
          "title": "Cauchy-Schwarz 不等式",
          "level": 4
        },
        {
          "id": "schmidt-正交化",
          "title": "Schmidt 正交化",
          "level": 4
        },
        {
          "id": "秩-零化度定理-2",
          "title": "秩-零化度定理",
          "level": 4
        },
        {
          "id": "矩阵表示与基变换公式",
          "title": "矩阵表示与基变换公式",
          "level": 4
        },
        {
          "id": "可逆矩阵等价条件",
          "title": "可逆矩阵等价条件",
          "level": 4
        },
        {
          "id": "行列式秩定理",
          "title": "行列式秩定理",
          "level": 4
        },
        {
          "id": "cramer-法则-2",
          "title": "Cramer 法则",
          "level": 4
        },
        {
          "id": "不同特征值的特征向量线性无关",
          "title": "不同特征值的特征向量线性无关",
          "level": 4
        },
        {
          "id": "对角化判别",
          "title": "对角化判别",
          "level": 4
        },
        {
          "id": "实对称矩阵正交对角化",
          "title": "实对称矩阵正交对角化",
          "level": 4
        },
        {
          "id": "惯性定理-2",
          "title": "惯性定理",
          "level": 4
        },
        {
          "id": "正定判别",
          "title": "正定判别",
          "level": 4
        },
        {
          "id": "附件",
          "title": "附件",
          "level": 4
        }
      ],
      "excerpt": "线性方程组与行简化阶梯形 行简化阶梯形 行简化阶梯矩阵满足： 1. 零行在非零行下方； 2. 每个非零行首个非零元为 $1$； 3. 主元所在列其余元素全为 $0$； 4. 主元位置从上到下向右移动。 线性方程组化为简化阶梯形后： 出现 $...",
      "readingMinutes": 19,
      "createdAt": "2026-04-24T00:00:00.000Z"
    },
    {
      "id": "notes/physics/2026-04-25-physics-i-midterm-review-outline.md",
      "slug": "2026-04-25-physics-i-midterm-review-outline",
      "source": "post",
      "kind": "notes",
      "title": "普物 I 期中复习提纲（重点速览版）",
      "publishedIndex": 8,
      "stage": "Notes 笔记",
      "tag": "普物 I",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<h4 id=\"general-physics-i-midterm-review-outline-普物-i-期中复习提纲\">General Physics I Midterm Review Outline / 普物 I 期中复习提纲<a class=\"heading-anchor\" href=\"#general-physics-i-midterm-review-outline-普物-i-期中复习提纲\" data-heading-id=\"general-physics-i-midterm-review-outline-普物-i-期中复习提纲\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><blockquote>Based on / 依据：<code>slides</code> 课件、<code>homework</code> 作业、<code>midterm</code> 历年期中卷。  <br />Focus / 重点：mechanics, rotation, oscillation, waves / 力学、转动、振动、波动。</blockquote><h4 id=\"0-exam-map-考点地图\">0. Exam Map / 考点地图<a class=\"heading-anchor\" href=\"#0-exam-map-考点地图\" data-heading-id=\"0-exam-map-考点地图\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"table-scroll\"><table><thead><tr><th>Module / 模块</th><th>Core ideas / 核心知识</th><th>Typical problems / 常见题型</th></tr></thead><tbody><tr><td>Kinematics and vectors / 运动学与矢量</td><td>displacement, velocity, acceleration; components; projectile motion / 位移、速度、加速度、分量、抛体运动</td><td>Graph reading; integrate/differentiate motion functions / 图像读数、由函数求运动量</td></tr><tr><td>Newton&#039;s laws / 牛顿定律</td><td>free-body diagram, constraints, friction, drag / 受力图、约束、摩擦、阻力</td><td>Connected blocks, circular motion, inclined plane / 连接体、圆周运动、斜面</td></tr><tr><td>Work and energy / 功和能</td><td>work-energy theorem, conservative force, potential energy / 动能定理、保守力、势能</td><td>Variable force, spring, effective potential / 变力做功、弹簧、等效势</td></tr><tr><td>Momentum / 动量</td><td>impulse, conservation of momentum, center of mass / 冲量、动量守恒、质心</td><td>Collision, many-particle system, variable mass / 碰撞、多粒子、变质量</td></tr><tr><td>Gravitation and central force / 万有引力与中心力</td><td>inverse-square force, circular orbit, effective potential / 反平方力、圆轨道、等效势</td><td>Perturbed circular orbit / 受扰圆轨道</td></tr><tr><td>Rotation / 刚体转动</td><td>angular kinematics, torque, moment of inertia, rolling / 角运动学、力矩、转动惯量、滚动</td><td>Pulley, rolling cylinder, rod rotation / 滑轮、圆柱滚动、杆转动</td></tr><tr><td>Angular momentum and equilibrium / 角动量与平衡</td><td>torque-angular momentum relation, static equilibrium / 力矩与角动量、静力平衡</td><td>Hinged rod, ladder, beam / 铰接杆、梯子、梁</td></tr><tr><td>Oscillation / 振动</td><td>SHM, small oscillation, normal modes / 简谐运动、小振动、简正模</td><td>Coupled masses or pendulums / 耦合滑块或摆</td></tr><tr><td>Waves / 波动</td><td>wave equation, sinusoidal wave, standing wave, beats, Doppler-like observation / 波动方程、正弦波、驻波、拍、运动观察者</td><td>Rope/string waves, reflection, superposition / 绳波、反射、叠加</td></tr></tbody></table></div><h4 id=\"1-kinematics-and-vectors-运动学与矢量\">1. Kinematics and Vectors / 运动学与矢量<a class=\"heading-anchor\" href=\"#1-kinematics-and-vectors-运动学与矢量\" data-heading-id=\"1-kinematics-and-vectors-运动学与矢量\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点\" data-heading-id=\"knowledge-points-知识点\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Displacement / 位移；distance / 路程不同于 displacement / 位移。</li></ul><div class=\"math-display\">$$\n\\Delta x = x_f - x_i\n$$</div><ul><li>Average velocity / 平均速度；average speed / 平均速率：</li></ul><div class=\"math-display\">$$\n\\bar v=\\frac{\\Delta x}{\\Delta t},\n\\qquad\n\\bar s=\\frac{\\text{total distance}}{\\text{total time}}\n$$</div><ul><li>Instantaneous velocity and acceleration / 瞬时速度与加速度：</li></ul><div class=\"math-display\">$$\nv=\\frac{dx}{dt},\n\\qquad\na=\\frac{dv}{dt}=\\frac{d^2x}{dt^2}\n$$</div><ul><li>Constant acceleration equations / 匀加速公式：</li></ul><div class=\"math-display\">$$\n\\begin{aligned}\nv &amp;= v_0+at,\\\\\nx &amp;= x_0+v_0t+\\frac{1}{2}at^2,\\\\\nv^2 &amp;= v_0^2+2a(x-x_0).\n\\end{aligned}\n$$</div><ul><li>Vector decomposition / 矢量分解；magnitude / 大小：</li></ul><div class=\"math-display\">$$\n\\mathbf A=A_x\\hat{\\mathbf i}+A_y\\hat{\\mathbf j}+A_z\\hat{\\mathbf k},\n\\qquad\n|\\mathbf A|=\\sqrt{A_x^2+A_y^2+A_z^2}\n$$</div><ul><li>Projectile motion / 抛体运动：horizontal and vertical motions are independent / 水平与竖直方向独立。</li></ul><h4 id=\"problem-method-解题方法\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法\" data-heading-id=\"problem-method-解题方法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Choose axes / 选坐标轴：让加速度或约束方向尽量落在坐标轴上。</li><li>Write component equations / 写分量方程：<span class=\"math-inline\">\\(x\\)</span> and <span class=\"math-inline\">\\(y\\)</span> directions separately / 分方向处理。</li><li>Use graph meaning / 用图像意义：<span class=\"math-inline\">\\(v-t\\)</span> 图面积是位移，斜率是加速度；<span class=\"math-inline\">\\(x-t\\)</span> 图斜率是速度。</li><li>Check units / 检查单位：最后必须补回 SI unit / 国际单位制单位。</li></ol><h4 id=\"vocabulary-生词\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词\" data-heading-id=\"vocabulary-生词\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>displacement：位移</li><li>distance：路程</li><li>instantaneous：瞬时的</li><li>derivative：导数</li><li>component：分量</li><li>trajectory：轨迹</li><li>projectile：抛体</li></ul><h4 id=\"2-newton-s-laws-and-force-analysis-牛顿定律与受力分析\">2. Newton&#039;s Laws and Force Analysis / 牛顿定律与受力分析<a class=\"heading-anchor\" href=\"#2-newton-s-laws-and-force-analysis-牛顿定律与受力分析\" data-heading-id=\"2-newton-s-laws-and-force-analysis-牛顿定律与受力分析\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-2\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-2\" data-heading-id=\"knowledge-points-知识点-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Newton&#039;s first law / 牛顿第一定律：inertial frame / 惯性系中，net force / 合外力为零则 $a = 0$。</li><li>Newton&#039;s second law / 牛顿第二定律：必须是矢量方程。</li></ul><div class=\"math-display\">$$\n\\sum \\mathbf F=m\\mathbf a\n$$</div><ul><li>Newton&#039;s third law / 牛顿第三定律：action-reaction pair / 作用力与反作用力等大反向，作用在不同物体上。</li><li>Weight / 重力：$mg$; normal force / 支持力：垂直接触面；tension / 张力：沿绳方向。</li><li>Friction / 摩擦：</li></ul><div class=\"math-display\">$$\nf_s\\le \\mu_s N,\n\\qquad\nf_k=\\mu_k N\n$$</div><ul><li>Circular motion / 圆周运动：radial acceleration / 向心加速度</li></ul><div class=\"math-display\">$$\na_r=\\frac{v^2}{r}=\\omega^2r\n$$</div><ul><li>Drag / 阻力：low speed often $R=bv$; high speed often $R=cv^2$。</li></ul><h4 id=\"problem-method-解题方法-2\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法-2\" data-heading-id=\"problem-method-解题方法-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Draw a free-body diagram / 画受力图：每个物体单独画。</li><li>Identify constraints / 找约束：同一根不可伸长绳、无滑动滚动、同加速度或角加速度关系。</li><li>Project Newton&#039;s law / 投影牛顿第二定律：沿斜面、垂直斜面、径向/切向。</li><li>Do not mix action-reaction / 不要把作用反作用力放进同一个物体的受力平衡中。</li></ol><h4 id=\"vocabulary-生词-2\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-2\" data-heading-id=\"vocabulary-生词-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>force：力</li><li>net force：合力</li><li>inertial frame：惯性参考系</li><li>free-body diagram：受力图</li><li>constraint：约束</li><li>tension：张力</li><li>normal force：支持力</li><li>friction：摩擦力</li><li>radial：径向的</li><li>tangential：切向的</li></ul><h4 id=\"3-work-energy-and-effective-potential-功-能量与等效势\">3. Work, Energy, and Effective Potential / 功、能量与等效势<a class=\"heading-anchor\" href=\"#3-work-energy-and-effective-potential-功-能量与等效势\" data-heading-id=\"3-work-energy-and-effective-potential-功-能量与等效势\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-3\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-3\" data-heading-id=\"knowledge-points-知识点-3\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Work / 功；constant force / 恒力做功：</li></ul><div class=\"math-display\">$$\nW=\\int \\mathbf F\\cdot d\\mathbf r,\n\\qquad\nW=Fd\\cos\\theta\n$$</div><ul><li>Work-kinetic energy theorem / 动能定理：</li></ul><div class=\"math-display\">$$\nW_{\\rm net}=\\Delta K\n$$</div><ul><li>Conservative force / 保守力：work independent of path / 做功与路径无关。</li></ul><div class=\"math-display\">$$\nF_x=-\\frac{dU}{dx}\n$$</div><ul><li>Mechanical energy / 机械能：if only conservative forces act / 只有保守力时守恒。</li></ul><div class=\"math-display\">$$\nE=K+U\n$$</div><ul><li>Spring potential and near-Earth gravitational potential / 弹簧势能与近地重力势能：</li></ul><div class=\"math-display\">$$\nU_s=\\frac{1}{2}kx^2,\n\\qquad\nU_g=mgy\n$$</div><ul><li>Effective potential / 等效势：把角动量项写进势能，如中心力问题</li></ul><div class=\"math-display\">$$\n\\begin{aligned}\nE &amp;= \\frac{1}{2}m\\dot r^2+\\frac{L^2}{2mr^2}+V(r),\\\\\nU_{\\rm eff}(r) &amp;= \\frac{L^2}{2mr^2}+V(r).\n\\end{aligned}\n$$</div><h4 id=\"problem-method-解题方法-3\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法-3\" data-heading-id=\"problem-method-解题方法-3\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>1. Decide whether energy conservation applies / 判断机械能是否守恒：有非保守力做功时要加 $W_{\\rm nc}$。<br />2. For variable force / 变力：优先积分 $W = \\int F dx$ 或用势能差。<br />3. For circular central-force motion / 中心力圆轨道：<br />   - first impose equilibrium / 先用平衡条件 $dU_{\\rm eff}/dr = 0$;<br />   - then expand around equilibrium / 再在平衡点附近二阶展开；<br />   - small oscillation frequency / 小振动角频率：</p><div class=\"math-display\">$$\n     \\omega^2=\\frac{U_{\\rm eff}&#039;&#039;(r_0)}{m}\n     $$</div><h4 id=\"vocabulary-生词-3\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-3\" data-heading-id=\"vocabulary-生词-3\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>work：功</li><li>kinetic energy：动能</li><li>potential energy：势能</li><li>conservative force：保守力</li><li>non-conservative force：非保守力</li><li>mechanical energy：机械能</li><li>effective potential：等效势</li><li>perturbation：扰动</li><li>approximation：近似</li></ul><h4 id=\"4-momentum-center-of-mass-and-collision-动量-质心与碰撞\">4. Momentum, Center of Mass, and Collision / 动量、质心与碰撞<a class=\"heading-anchor\" href=\"#4-momentum-center-of-mass-and-collision-动量-质心与碰撞\" data-heading-id=\"4-momentum-center-of-mass-and-collision-动量-质心与碰撞\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-4\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-4\" data-heading-id=\"knowledge-points-知识点-4\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Momentum / 动量：$p = mv$; impulse / 冲量：$J = \\int F dt = \\Delta p$。</li><li>Conservation of momentum / 动量守恒：external impulse zero / 外冲量为零。</li><li>Center of mass / 质心：</li></ul><div class=\"math-display\">$$\n\\mathbf R_{\\rm cm}\n=\\frac{\\sum_i m_i\\mathbf r_i}{\\sum_i m_i},\n\\qquad\nM\\mathbf a_{\\rm cm}=\\mathbf F_{\\rm ext}\n$$</div><ul><li>Elastic collision / 弹性碰撞：momentum and kinetic energy both conserved / 动量和动能都守恒。</li><li>Perfectly inelastic collision / 完全非弹性碰撞：objects stick together / 粘在一起，动能不守恒。</li><li>Variable mass idea / 变质量思想：系统边界要选清楚；可对“仍在运动的部分”写动量变化率。</li></ul><h4 id=\"problem-method-解题方法-4\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法-4\" data-heading-id=\"problem-method-解题方法-4\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Define the system / 选系统：系统内力不影响总动量，外力才影响。</li><li>Use momentum conservation only in allowed directions / 只在外冲量为零的方向用动量守恒。</li><li>Collision problems / 碰撞题：先动量，若弹性再加动能；一维弹性可用相对速度反向。</li><li>Falling string type / 落绳题：可用能量求速度，再用动量流或质心运动求支持力。</li></ol><h4 id=\"vocabulary-生词-4\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-4\" data-heading-id=\"vocabulary-生词-4\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>momentum：动量</li><li>impulse：冲量</li><li>center of mass：质心</li><li>collision：碰撞</li><li>elastic：弹性的</li><li>inelastic：非弹性的</li><li>variable mass：变质量</li><li>external force：外力</li></ul><h4 id=\"5-gravitation-and-central-force-万有引力与中心力\">5. Gravitation and Central Force / 万有引力与中心力<a class=\"heading-anchor\" href=\"#5-gravitation-and-central-force-万有引力与中心力\" data-heading-id=\"5-gravitation-and-central-force-万有引力与中心力\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-5\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-5\" data-heading-id=\"knowledge-points-知识点-5\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Universal gravitation / 万有引力：$F = GmM/r^2$。</li><li>Gravitational potential energy / 引力势能：$U = -GmM/r$。</li><li>Circular orbit / 圆轨道：</li></ul><div class=\"math-display\">$$\n\\frac{GMm}{r^2}=\\frac{mv^2}{r}=m\\omega^2r\n$$</div><ul><li>Escape speed / 逃逸速度：</li></ul><div class=\"math-display\">$$\nv_{\\rm esc}=\\sqrt{\\frac{2GM}{R}}\n$$</div><ul><li>Kepler&#039;s third law / 开普勒第三定律：$T^2 \\propto r^3$ for circular orbit / 圆轨道下成立。</li><li>For central force / 中心力：angular momentum $L = mr^2 \\dot\\theta$ is conserved / 角动量守恒。</li></ul><h4 id=\"problem-method-解题方法-5\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法-5\" data-heading-id=\"problem-method-解题方法-5\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>In central-force problems / 中心力题，先写守恒量：$E$ and $L$。</li><li>Replace angular motion / 消去角运动：$\\dot\\theta = L/(mr^2)$。</li><li>Convert to one-dimensional radial motion / 化为一维径向运动：</li></ol><p>$$\n   E=\\frac{1}{2}m\\dot r^2+U_{\\rm eff}(r)\n   $$\n4. For small radial perturbation / 径向小扰动：对 $U_{\\rm eff}$ 在 $r_0$ 处二阶展开。</p><h4 id=\"vocabulary-生词-5\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-5\" data-heading-id=\"vocabulary-生词-5\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>gravitation：引力</li><li>orbit：轨道</li><li>central force：中心力</li><li>radial coordinate：径向坐标</li><li>angular momentum：角动量</li><li>escape speed：逃逸速度</li></ul><h4 id=\"6-rotation-and-rolling-刚体转动与滚动\">6. Rotation and Rolling / 刚体转动与滚动<a class=\"heading-anchor\" href=\"#6-rotation-and-rolling-刚体转动与滚动\" data-heading-id=\"6-rotation-and-rolling-刚体转动与滚动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-6\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-6\" data-heading-id=\"knowledge-points-知识点-6\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Angular displacement, velocity, acceleration / 角位移、角速度、角加速度：</li></ul><div class=\"math-display\">$$\n\\theta,\n\\qquad\n\\omega=\\frac{d\\theta}{dt},\n\\qquad\n\\alpha=\\frac{d\\omega}{dt}\n$$</div><ul><li>Linear-angular relations / 线量与角量：</li></ul><div class=\"math-display\">$$\ns=r\\theta,\n\\qquad\nv=r\\omega,\n\\qquad\na_t=r\\alpha,\n\\qquad\na_r=r\\omega^2\n$$</div><ul><li>Torque and moment of inertia / 力矩与转动惯量：</li></ul><div class=\"math-display\">$$\n\\boldsymbol\\tau=\\mathbf r\\times\\mathbf F,\n\\qquad\n\\tau=rF\\sin\\theta,\n\\qquad\nI=\\int r^2\\,dm\n$$</div><ul><li>Common moments of inertia / 常见转动惯量：</li></ul><div class=\"math-display\">$$\n\\begin{array}{c|c}\n\\text{object / 物体} &amp; I\\\\\n\\hline\n\\text{uniform disk/cylinder / 均匀圆盘或圆柱} &amp; \\frac{1}{2}MR^2\\\\\n\\text{rod about center / 杆绕中心} &amp; \\frac{1}{12}ML^2\\\\\n\\text{rod about end / 杆绕端点} &amp; \\frac{1}{3}ML^2\n\\end{array}\n$$</div><ul><li>Rotational dynamics, kinetic energy, and rolling constraint / 转动定律、转动动能与滚动约束：</li></ul><div class=\"math-display\">$$\n\\sum\\tau=I\\alpha,\n\\qquad\nK_{\\rm rot}=\\frac{1}{2}I\\omega^2,\n\\qquad\nv_{\\rm cm}=R\\omega,\n\\qquad\na_{\\rm cm}=R\\alpha\n$$</div><h4 id=\"problem-method-解题方法-6\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法-6\" data-heading-id=\"problem-method-解题方法-6\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>1. For pulley and rod / 滑轮和杆：分别写平动方程、转动方程、绳约束。<br />2. For rolling down incline / 斜面滚动：<br />   - along incline / 沿斜面：$Mg \\sin \\theta - f = Ma$;<br />   - torque about CM / 绕质心：$fR = I \\alpha$;<br />   - no slip / 无滑动：$a = R \\alpha$。<br />3. If the surface becomes frictionless / 若进入光滑面：friction is zero, torque about CM is zero, so $\\omega$ stays constant; check whether $v_{\\rm cm} = R \\omega$ still holds / 无摩擦无力矩，角速度不变，检查滚动条件是否仍成立。<br />4. Use energy when constraints do no work / 约束力不做功时优先用能量。</p><h4 id=\"vocabulary-生词-6\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-6\" data-heading-id=\"vocabulary-生词-6\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>rigid body：刚体</li><li>angular velocity：角速度</li><li>angular acceleration：角加速度</li><li>torque：力矩</li><li>moment of inertia：转动惯量</li><li>rolling without slipping：无滑动滚动</li><li>pulley：滑轮</li><li>cylinder：圆柱</li><li>incline：斜面</li></ul><h4 id=\"7-angular-momentum-and-static-equilibrium-角动量与静力平衡\">7. Angular Momentum and Static Equilibrium / 角动量与静力平衡<a class=\"heading-anchor\" href=\"#7-angular-momentum-and-static-equilibrium-角动量与静力平衡\" data-heading-id=\"7-angular-momentum-and-static-equilibrium-角动量与静力平衡\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-7\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-7\" data-heading-id=\"knowledge-points-知识点-7\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Angular momentum / 角动量；fixed-axis rigid body / 定轴刚体：</li></ul><div class=\"math-display\">$$\n\\mathbf L=\\mathbf r\\times\\mathbf p,\n\\qquad\nL=I\\omega\n$$</div><ul><li>Torque-angular momentum relation / 力矩与角动量：$\\sum \\tau = dL/dt$。</li><li>Conservation of angular momentum / 角动量守恒：if external torque is zero / 外力矩为零。</li><li>Static equilibrium / 静力平衡：</li><li>Translational equilibrium / 平动平衡：$\\sum F = 0$</li><li>Rotational equilibrium / 转动平衡：$\\sum \\tau = 0$</li><li>Center of gravity / 重心：uniform gravitational field / 匀强重力场中与质心重合。</li></ul><h4 id=\"problem-method-解题方法-7\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法-7\" data-heading-id=\"problem-method-解题方法-7\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Choose torque origin smartly / 巧选力矩参考点：让未知力的力臂为零。</li><li>Write $\\sum F_{x} = 0$, $\\sum F_{y} = 0$, $\\sum \\tau = 0$ / 三类方程配合。</li><li>For just-about-to-slip or lift / 临界滑动或刚要抬起：对应支持力或静摩擦取临界值。</li><li>Check sign convention / 检查正负方向：顺时针和逆时针力矩不要混。</li></ol><h4 id=\"vocabulary-生词-7\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-7\" data-heading-id=\"vocabulary-生词-7\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>angular momentum：角动量</li><li>equilibrium：平衡</li><li>static equilibrium：静力平衡</li><li>translational：平动的</li><li>rotational：转动的</li><li>center of gravity：重心</li><li>pivot：转轴、支点</li><li>moment arm：力臂</li></ul><h4 id=\"8-simple-harmonic-motion-and-coupled-oscillators-简谐运动与耦合振动\">8. Simple Harmonic Motion and Coupled Oscillators / 简谐运动与耦合振动<a class=\"heading-anchor\" href=\"#8-simple-harmonic-motion-and-coupled-oscillators-简谐运动与耦合振动\" data-heading-id=\"8-simple-harmonic-motion-and-coupled-oscillators-简谐运动与耦合振动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-8\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-8\" data-heading-id=\"knowledge-points-知识点-8\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Stable equilibrium / 稳定平衡：</li></ul><div class=\"math-display\">$$\n\\frac{dU}{dx}=0,\n\\qquad\n\\frac{d^2U}{dx^2}&gt;0\n$$</div><ul><li>Near stable equilibrium / 稳定点附近：</li></ul><div class=\"math-display\">$$\n\\begin{aligned}\nU(x)&amp;\\approx U(x_0)+\\frac{1}{2}k_{\\rm eff}(x-x_0)^2,\\\\\nk_{\\rm eff}&amp;=U&#039;&#039;(x_0).\n\\end{aligned}\n$$</div><ul><li>Simple harmonic motion / 简谐运动：</li></ul><div class=\"math-display\">$$\n\\begin{aligned}\n\\ddot x+\\omega^2x&amp;=0,\\\\\nx(t)&amp;=A\\cos(\\omega t+\\phi),\\\\\nT&amp;=\\frac{2\\pi}{\\omega},\n\\qquad\nf=\\frac{1}{T}.\n\\end{aligned}\n$$</div><ul><li>Energy of SHM / 简谐振动能量：</li></ul><div class=\"math-display\">$$\nE=\\frac{1}{2}kA^2=\\frac{1}{2}m\\omega^2A^2\n$$</div><ul><li>Simple pendulum small angle / 单摆小角近似：</li></ul><div class=\"math-display\">$$\n\\ddot\\theta+\\frac{g}{L}\\theta=0,\n\\qquad\n\\omega=\\sqrt{\\frac{g}{L}}\n$$</div><ul><li>Coupled oscillator / 耦合振子：normal modes / 简正模通常用 $x_1 + x_2$, $x_1 - x_2$ 或矩阵特征值求。</li></ul><h4 id=\"problem-method-解题方法-8\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法-8\" data-heading-id=\"problem-method-解题方法-8\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>1. Linearize / 线性化：small angle means $\\sin \\theta \\approx \\theta$, $\\cos \\theta \\approx 1$。<br />2. Write equations of motion / 写运动方程：保留一阶小量，忽略二阶及更高阶。<br />3. Find normal coordinates / 找简正坐标：常见对称系统用<br />   - in-phase mode / 同相模：$\\theta_1 + \\theta_2$<br />   - out-of-phase mode / 反相模：$\\theta_1 - \\theta_2$<br />4. Use initial conditions / 用初始条件：把一般解中的 amplitude / 振幅 和 phase / 相位 解出来。<br />5. For coupled pendulums with spring / 弹簧耦合双摆：弹簧伸长通常约为 $L(\\theta_2 - \\theta_1)$。</p><h4 id=\"vocabulary-生词-8\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-8\" data-heading-id=\"vocabulary-生词-8\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>oscillation：振动</li><li>simple harmonic motion：简谐运动</li><li>amplitude：振幅</li><li>phase：相位</li><li>angular frequency：角频率</li><li>period：周期</li><li>frequency：频率</li><li>stable equilibrium：稳定平衡</li><li>normal mode：简正模</li><li>coupled oscillator：耦合振子</li><li>small-angle approximation：小角近似</li></ul><h4 id=\"9-wave-motion-波动\">9. Wave Motion / 波动<a class=\"heading-anchor\" href=\"#9-wave-motion-波动\" data-heading-id=\"9-wave-motion-波动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-9\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-9\" data-heading-id=\"knowledge-points-知识点-9\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Wave equation / 波动方程：</li></ul><div class=\"math-display\">$$\n\\frac{\\partial^2 y}{\\partial t^2}\n=v^2\\frac{\\partial^2 y}{\\partial x^2}\n$$</div><ul><li>General traveling waves / 行波通解：</li></ul><div class=\"math-display\">$$\ny=f(x-vt)\\quad(\\text{right-moving}),\n\\qquad\ny=f(x+vt)\\quad(\\text{left-moving})\n$$</div><ul><li>Sinusoidal wave / 正弦波：</li></ul><div class=\"math-display\">$$\ny=A\\cos(kx-\\omega t+\\phi)\n$$</div><ul><li>Relation / 关系：</li></ul><div class=\"math-display\">$$\nv=\\frac{\\omega}{k}=\\lambda f,\n\\qquad\nk=\\frac{2\\pi}{\\lambda},\n\\qquad\n\\omega=2\\pi f\n$$</div><ul><li>String wave speed / 弦波速度：</li></ul><div class=\"math-display\">$$\nv=\\sqrt{\\frac{T}{\\mu}}\n$$</div><ul><li>Superposition / 叠加原理：linear medium / 线性介质中位移代数相加。</li><li>Standing wave / 驻波：opposite directions, same frequency and amplitude / 反向等频等振幅波叠加。</li><li>Beats / 拍：close frequencies / 频率接近时，$f_{\\rm beat} = |f_1 - f_2|$。</li><li>Energy density / 能量密度：small-amplitude string wave has kinetic energy density</li></ul><div class=\"math-display\">$$\nu_K=\\frac{1}{2}\\mu\n\\left(\\frac{\\partial y}{\\partial t}\\right)^2\n$$</div><ul><li>Reflection at fixed end / 固定端反射：boundary condition / 边界条件 $y(x_{0},t)=0$，反射波相位要满足端点位移恒为零。</li><li>Moving observer / 运动观察者：replace coordinates / 坐标替换，如 observer moving at $v_0$: $x = x&#039; + v_{0} t$。</li></ul><h4 id=\"problem-method-解题方法-9\">Problem Method / 解题方法<a class=\"heading-anchor\" href=\"#problem-method-解题方法-9\" data-heading-id=\"problem-method-解题方法-9\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Determine direction / 判断传播方向：$kx - \\omega t$ 向 $+x$，$kx + \\omega t$ 向 $-x$。</li><li>Verify wave equation / 验证波动方程：分别求二阶时间导数和空间导数，得到 $\\omega^2 = v^2 k^2$。</li><li>Reflection problem / 反射题：写入射波 + 反射波，再代固定端或自由端边界条件。</li><li>Superposition problem / 叠加题：使用三角恒等式把和化积，判断是否 standing wave / 驻波。</li><li>Moving observer problem / 运动观察者题：先做 Galilean transformation / 伽利略变换，再读出新频率。</li></ol><h4 id=\"vocabulary-生词-9\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-9\" data-heading-id=\"vocabulary-生词-9\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>wave：波</li><li>transverse wave：横波</li><li>longitudinal wave：纵波</li><li>wave equation：波动方程</li><li>sinusoidal wave：正弦波</li><li>wavelength：波长</li><li>wave number：波数</li><li>superposition：叠加</li><li>interference：干涉</li><li>standing wave：驻波</li><li>beat：拍</li><li>boundary condition：边界条件</li><li>reflection：反射</li><li>linear mass density：线密度</li></ul><h4 id=\"10-high-frequency-problem-templates-高频题型模板\">10. High-Frequency Problem Templates / 高频题型模板<a class=\"heading-anchor\" href=\"#10-high-frequency-problem-templates-高频题型模板\" data-heading-id=\"10-high-frequency-problem-templates-高频题型模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"a-perturbed-circular-motion-受扰圆周运动\">A. Perturbed Circular Motion / 受扰圆周运动<a class=\"heading-anchor\" href=\"#a-perturbed-circular-motion-受扰圆周运动\" data-heading-id=\"a-perturbed-circular-motion-受扰圆周运动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Conserved quantities / 守恒量：central force gives angular momentum conservation / 中心力使角动量守恒；若冲击是瞬时径向，角动量通常仍不变，但机械能可能改变。</li><li>Energy form / 能量式：</li></ol><div class=\"math-display\">$$\n   E=\\frac{1}{2}m\\dot r^2+\\frac{L^2}{2mr^2}+V(r)\n   $$</div><ol><li>Circular orbit condition / 圆轨道条件：</li></ol><div class=\"math-display\">$$\n   \\left.\\frac{dU_{\\rm eff}}{dr}\\right|_{r_0}=0\n   $$</div><ol><li>Small oscillation / 小振动：</li></ol><div class=\"math-display\">$$\n   \\omega_r^2=\\frac{U_{\\rm eff}&#039;&#039;(r_0)}{m}\n   $$</div><ol><li>Compare with orbital frequency / 和轨道角频率比较：用 $\\omega_{orb} = L/(mr_{0}^2)$。</li></ol><h4 id=\"b-rolling-cylinder-on-incline-圆柱斜面滚动\">B. Rolling Cylinder on Incline / 圆柱斜面滚动<a class=\"heading-anchor\" href=\"#b-rolling-cylinder-on-incline-圆柱斜面滚动\" data-heading-id=\"b-rolling-cylinder-on-incline-圆柱斜面滚动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Top rough half / 上半段有摩擦：use rolling constraint / 用滚动约束。</li><li>Friction direction / 摩擦方向：提供转动所需力矩，通常沿斜面向上。</li><li>Energy at halfway / 到中点能量：</li></ol><div class=\"math-display\">$$\n   \\frac{Mgh}{2}=\\frac{1}{2}Mv^2+\\frac{1}{2}I\\omega^2,\n   \\qquad\n   I=\\frac{1}{2}MR^2,\n   \\qquad\n   v=R\\omega\n   $$</div><ol><li>Bottom smooth half / 下半段光滑：no torque about CM / 对质心无力矩，$\\omega$ 不变；gravity changes translational kinetic energy / 重力只增加平动动能。</li><li>Check no-slip / 检查无滑动：若 $v \\ne R\\omega$，则不再无滑动滚动。</li></ol><h4 id=\"c-coupled-oscillators-耦合振动\">C. Coupled Oscillators / 耦合振动<a class=\"heading-anchor\" href=\"#c-coupled-oscillators-耦合振动\" data-heading-id=\"c-coupled-oscillators-耦合振动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Write linear equations / 写线性方程。</li><li>Try normal modes / 尝试简正模：$x_1 = x_2$ and $x_1 = -x_2$ for symmetric cases / 对称系统先试同相、反相。</li><li>Get eigenfrequencies / 求本征频率。</li><li>Superpose modes / 叠加简正模。</li><li>Use initial conditions / 套初始条件确定振幅和相位。</li></ol><h4 id=\"d-rope-or-string-wave-绳波题\">D. Rope or String Wave / 绳波题<a class=\"heading-anchor\" href=\"#d-rope-or-string-wave-绳波题\" data-heading-id=\"d-rope-or-string-wave-绳波题\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Use a small element / 取小段 $dx$。</li><li>Vertical force from tension / 张力竖直分量差：</li></ol><div class=\"math-display\">$$\n   \\mu\\,dx\\,\\frac{\\partial^2y}{\\partial t^2}\n   =\n   T\\left[\n   \\left.\\frac{\\partial y}{\\partial x}\\right|_{x+dx}\n   -\n   \\left.\\frac{\\partial y}{\\partial x}\\right|_{x}\n   \\right]\n   $$</div><ol><li>Obtain wave equation / 得到波动方程：</li></ol><p>$$\n   \\frac{\\partial^2y}{\\partial t^2}\n   =\n   \\frac{T}{\\mu}\\frac{\\partial^2y}{\\partial x^2}\n   $$\n4. If tension changes with position / 若张力随位置变：$T = T(x)$，不能直接用正弦波作为一般解。</p><h4 id=\"11-quick-checklist-before-exam-考前检查清单\">11. Quick Checklist Before Exam / 考前检查清单<a class=\"heading-anchor\" href=\"#11-quick-checklist-before-exam-考前检查清单\" data-heading-id=\"11-quick-checklist-before-exam-考前检查清单\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Can I draw a correct free-body diagram? / 我能否画出正确受力图？</li><li>Can I choose the system and conserved quantity? / 我能否选系统并判断守恒量？</li><li>Can I distinguish force, torque, work, impulse? / 我能否区分力、力矩、功、冲量？</li><li>Can I switch between linear and angular variables? / 我能否在线量和角量之间转换？</li><li>Can I linearize small oscillations? / 我能否做小振动线性化？</li><li>Can I derive the wave equation from a small string element? / 我能否由绳元推出波动方程？</li><li>Can I use boundary conditions for reflected waves? / 我能否用边界条件处理反射波？</li></ul><h4 id=\"12-last-day-formula-sheet-考前公式速记\">12. Last-Day Formula Sheet / 考前公式速记<a class=\"heading-anchor\" href=\"#12-last-day-formula-sheet-考前公式速记\" data-heading-id=\"12-last-day-formula-sheet-考前公式速记\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p><strong>Kinematics and Newton&#039;s law / 运动学与牛顿定律</strong></p><div class=\"math-display\">$$\nv=\\frac{dx}{dt},\n\\qquad\na=\\frac{dv}{dt},\n\\qquad\n\\sum \\mathbf F=m\\mathbf a\n$$</div><p><strong>Work, energy, and momentum / 功、能量与动量</strong></p><div class=\"math-display\">$$\n\\begin{aligned}\nW&amp;=\\int \\mathbf F\\cdot d\\mathbf r,\n&amp;\nW_{\\rm net}&amp;=\\Delta K,\\\\\nE&amp;=K+U,\n&amp;\nF_x&amp;=-\\frac{dU}{dx},\\\\\n\\mathbf p&amp;=m\\mathbf v,\n&amp;\n\\mathbf J&amp;=\\Delta \\mathbf p.\n\\end{aligned}\n$$</div><p><strong>Center of mass and gravitation / 质心与引力</strong></p><div class=\"math-display\">$$\n\\mathbf R_{\\rm cm}\n=\\frac{\\sum_i m_i\\mathbf r_i}{\\sum_i m_i},\n\\qquad\nF_g=\\frac{GmM}{r^2},\n\\qquad\nU_g=-\\frac{GmM}{r}\n$$</div><p><strong>Rotation and rolling / 转动与滚动</strong></p><div class=\"math-display\">$$\n\\begin{aligned}\n\\boldsymbol\\tau&amp;=\\mathbf r\\times\\mathbf F,\n&amp;\n\\sum\\tau&amp;=I\\alpha,\\\\\nI_{\\rm disk}&amp;=\\frac{1}{2}MR^2,\n&amp;\nI_{\\rm rod,end}&amp;=\\frac{1}{3}ML^2,\\\\\nK_{\\rm rot}&amp;=\\frac{1}{2}I\\omega^2,\n&amp;\nL&amp;=I\\omega,\\\\\nv_{\\rm cm}&amp;=R\\omega,\n&amp;\na_{\\rm cm}&amp;=R\\alpha.\n\\end{aligned}\n$$</div><p><strong>Oscillation and waves / 振动与波</strong></p><div class=\"math-display\">$$\n\\begin{aligned}\n\\ddot x+\\omega^2x&amp;=0,\n&amp;\nx(t)&amp;=A\\cos(\\omega t+\\phi),\\\\\n\\omega_{\\rm pendulum}&amp;=\\sqrt{\\frac{g}{L}},\n&amp;\n\\frac{\\partial^2y}{\\partial t^2}\n&amp;=v^2\\frac{\\partial^2y}{\\partial x^2},\\\\\nv_{\\rm string}&amp;=\\sqrt{\\frac{T}{\\mu}},\n&amp;\ny(x,t)&amp;=A\\cos(kx-\\omega t+\\phi).\n\\end{aligned}\n$$</div><h4 id=\"附件\">附件<a class=\"heading-anchor\" href=\"#附件\" data-heading-id=\"附件\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"entry-file\"><a class=\"download-button\" href=\"files/2026-04-25-physics-i-midterm-review/普物I期中复习提纲-重点速览版.pdf\" download><span>下载 / 预览 PDF</span><small>普物I期中复习提纲-重点速览版.pdf</small></a><details class=\"file-preview\"><summary>Preview / 预览</summary><iframe src=\"files/2026-04-25-physics-i-midterm-review/普物I期中复习提纲-重点速览版.pdf\" title=\"普物I期中复习提纲-重点速览版.pdf\" loading=\"lazy\"></iframe></details></div>",
      "headings": [
        {
          "id": "general-physics-i-midterm-review-outline-普物-i-期中复习提纲",
          "title": "General Physics I Midterm Review Outline / 普物 I 期中复习提纲",
          "level": 4
        },
        {
          "id": "0-exam-map-考点地图",
          "title": "0. Exam Map / 考点地图",
          "level": 4
        },
        {
          "id": "1-kinematics-and-vectors-运动学与矢量",
          "title": "1. Kinematics and Vectors / 运动学与矢量",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "2-newton-s-laws-and-force-analysis-牛顿定律与受力分析",
          "title": "2. Newton's Laws and Force Analysis / 牛顿定律与受力分析",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-2",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法-2",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-2",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "3-work-energy-and-effective-potential-功-能量与等效势",
          "title": "3. Work, Energy, and Effective Potential / 功、能量与等效势",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-3",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法-3",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-3",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "4-momentum-center-of-mass-and-collision-动量-质心与碰撞",
          "title": "4. Momentum, Center of Mass, and Collision / 动量、质心与碰撞",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-4",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法-4",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-4",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "5-gravitation-and-central-force-万有引力与中心力",
          "title": "5. Gravitation and Central Force / 万有引力与中心力",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-5",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法-5",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-5",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "6-rotation-and-rolling-刚体转动与滚动",
          "title": "6. Rotation and Rolling / 刚体转动与滚动",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-6",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法-6",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-6",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "7-angular-momentum-and-static-equilibrium-角动量与静力平衡",
          "title": "7. Angular Momentum and Static Equilibrium / 角动量与静力平衡",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-7",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法-7",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-7",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "8-simple-harmonic-motion-and-coupled-oscillators-简谐运动与耦合振动",
          "title": "8. Simple Harmonic Motion and Coupled Oscillators / 简谐运动与耦合振动",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-8",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法-8",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-8",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "9-wave-motion-波动",
          "title": "9. Wave Motion / 波动",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-9",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-method-解题方法-9",
          "title": "Problem Method / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-9",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "10-high-frequency-problem-templates-高频题型模板",
          "title": "10. High-Frequency Problem Templates / 高频题型模板",
          "level": 4
        },
        {
          "id": "a-perturbed-circular-motion-受扰圆周运动",
          "title": "A. Perturbed Circular Motion / 受扰圆周运动",
          "level": 4
        },
        {
          "id": "b-rolling-cylinder-on-incline-圆柱斜面滚动",
          "title": "B. Rolling Cylinder on Incline / 圆柱斜面滚动",
          "level": 4
        },
        {
          "id": "c-coupled-oscillators-耦合振动",
          "title": "C. Coupled Oscillators / 耦合振动",
          "level": 4
        },
        {
          "id": "d-rope-or-string-wave-绳波题",
          "title": "D. Rope or String Wave / 绳波题",
          "level": 4
        },
        {
          "id": "11-quick-checklist-before-exam-考前检查清单",
          "title": "11. Quick Checklist Before Exam / 考前检查清单",
          "level": 4
        },
        {
          "id": "12-last-day-formula-sheet-考前公式速记",
          "title": "12. Last-Day Formula Sheet / 考前公式速记",
          "level": 4
        },
        {
          "id": "附件",
          "title": "附件",
          "level": 4
        }
      ],
      "excerpt": "General Physics I Midterm Review Outline / 普物 I 期中复习提纲 Based on / 依据：slides 课件、homework 作业、midterm 历年期中卷。 Focus / 重点：mec...",
      "readingMinutes": 9,
      "createdAt": "2026-04-25T00:00:00.000Z"
    },
    {
      "id": "notes/physics/2026-04-25-physics-i-midterm-mechanics-complete-review.md",
      "slug": "2026-04-25-physics-i-midterm-mechanics-complete-review",
      "source": "post",
      "kind": "notes",
      "title": "普物 I 期中复习提纲（力学全覆盖版）",
      "publishedIndex": 9,
      "stage": "Notes 笔记",
      "tag": "普物 I",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<h4 id=\"general-physics-i-midterm-review-outline-普物-i-期中复习提纲-mechanics-讲义全覆盖版\">General Physics I Midterm Review Outline / 普物 I 期中复习提纲（Mechanics 讲义全覆盖版）<a class=\"heading-anchor\" href=\"#general-physics-i-midterm-review-outline-普物-i-期中复习提纲-mechanics-讲义全覆盖版\" data-heading-id=\"general-physics-i-midterm-review-outline-普物-i-期中复习提纲-mechanics-讲义全覆盖版\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><blockquote>Main reference / 主参考：<code>普物I/reference books/mechanics_0306.pdf</code>  <br />Supplement / 补充参考：<code>slides</code> 课件、<code>homework</code> 作业、<code>midterm</code> 历年期中卷。  <br />Goal / 目标：按教学参考书 <code>General Physics I Classical Mechanics</code> 的章节尽量完整覆盖知识点，同时保留期中常考解题方法。</blockquote><h4 id=\"how-to-use-this-outline-使用方式\">How To Use This Outline / 使用方式<a class=\"heading-anchor\" href=\"#how-to-use-this-outline-使用方式\" data-heading-id=\"how-to-use-this-outline-使用方式\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>First pass / 第一遍：按 Chapter 1-10 顺序扫知识点，补齐概念。</li><li>Second pass / 第二遍：只看 <code>Problem Methods / 解题方法</code> 和 <code>Formula Checklist / 公式清单</code>。</li><li>Final pass / 考前最后一遍：看每章 <code>Vocabulary / 生词</code>，确保英文题干能读懂。</li></ul><h4 id=\"reference-book-coverage-map-参考书覆盖地图\">Reference Book Coverage Map / 参考书覆盖地图<a class=\"heading-anchor\" href=\"#reference-book-coverage-map-参考书覆盖地图\" data-heading-id=\"reference-book-coverage-map-参考书覆盖地图\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"table-scroll\"><table><thead><tr><th>Book chapter / 讲义章节</th><th>Sections / 小节</th><th>Covered here / 本提纲位置</th></tr></thead><tbody><tr><td>1 Kinematics / 运动学</td><td>1.1 1D motion; 1.2 vectors; 1.3 higher-dimensional motion; 1.4 frame of reference</td><td>Ch. 1</td></tr><tr><td>2 Newton&#039;s Laws / 牛顿定律</td><td>three laws; inertial/non-inertial frames; applications; drag</td><td>Ch. 2</td></tr><tr><td>3 Work and Energy / 功和能</td><td>generic forces; work; power; work-energy theorem; potential; conservation; equilibrium</td><td>Ch. 3</td></tr><tr><td>4 Momentum / 动量</td><td>momentum from Newton&#039;s law; conservation; collisions; many-particle system</td><td>Ch. 4</td></tr><tr><td>5 Gravitation / 万有引力</td><td>Kepler&#039;s laws; Newtonian gravity; satellites; escape speed</td><td>Ch. 5</td></tr><tr><td>6 Rigid Bodies / 刚体</td><td>rotational kinematics; rotational dynamics; rolling</td><td>Ch. 6</td></tr><tr><td>7 Angular Momentum / 角动量</td><td>particle angular momentum; torque; conservation; rigid bodies</td><td>Ch. 7</td></tr><tr><td>8 Simple Harmonic Motion / 简谐运动</td><td>equilibrium; SHM; stable equilibrium; damped; forced; coupled; molecules and solids</td><td>Ch. 8</td></tr><tr><td>9 Wave Motion / 波动</td><td>wave function; superposition; reflection; waves in solid; wave equation</td><td>Ch. 9</td></tr><tr><td>10 Sinusoidal Waves / 正弦波</td><td>sinusoidal waves; energy transfer; beating; standing waves; Fourier; Doppler</td><td>Ch. 10</td></tr></tbody></table></div><hr /><h4 id=\"ch-1-kinematics-运动学\">Ch. 1 Kinematics / 运动学<a class=\"heading-anchor\" href=\"#ch-1-kinematics-运动学\" data-heading-id=\"ch-1-kinematics-运动学\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"1-1-motion-in-one-dimension-一维运动\">1.1 Motion in One Dimension / 一维运动<a class=\"heading-anchor\" href=\"#1-1-motion-in-one-dimension-一维运动\" data-heading-id=\"1-1-motion-in-one-dimension-一维运动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p><strong>Knowledge Points / 知识点</strong></p><ul><li>Particle approximation / 质点近似：object size is negligible compared with other length scales / 物体尺寸相对问题尺度可忽略。</li><li>Position / 位置：$x(t)$; displacement / 位移：</li></ul><div class=\"math-display\">$$\n\\Delta x=x_f-x_i\n$$</div><ul><li>Distance / 路程：path length / 路径长度，总是非负；displacement / 位移可正可负。</li><li>Average velocity and speed / 平均速度与平均速率：</li></ul><div class=\"math-display\">$$\n\\bar v=\\frac{\\Delta x}{\\Delta t},\n\\qquad\n\\bar s=\\frac{\\text{distance}}{\\text{time}}\n$$</div><ul><li>Instantaneous velocity and acceleration / 瞬时速度与加速度：</li></ul><div class=\"math-display\">$$\nv=\\frac{dx}{dt},\n\\qquad\na=\\frac{dv}{dt}=\\frac{d^2x}{dt^2}\n$$</div><ul><li>Integral relations / 积分关系：</li></ul><div class=\"math-display\">$$\nv(t)=v_0+\\int a(t)\\,dt,\n\\qquad\nx(t)=x_0+\\int v(t)\\,dt\n$$</div><ul><li>Constant acceleration / 匀加速：</li></ul><div class=\"math-display\">$$\n\\begin{aligned}\nv&amp;=v_0+at,\\\\\nx&amp;=x_0+v_0t+\\frac{1}{2}at^2,\\\\\nv^2&amp;=v_0^2+2a(x-x_0).\n\\end{aligned}\n$$</div><ul><li>SI units and dimensions / 国际单位与量纲：length <span class=\"math-inline\">\\(L\\)</span>, mass <span class=\"math-inline\">\\(M\\)</span>, time <span class=\"math-inline\">\\(T\\)</span>; dimension check / 量纲检查是防错工具。</li></ul><p><strong>Problem Methods / 解题方法</strong></p><ol><li>For function problems / 函数题：differentiate to get velocity and acceleration / 求导得速度、加速度。</li><li>For graph problems / 图像题：slope gives derivative / 斜率给导数；area gives integral / 面积给积分。</li><li>For constant acceleration / 匀加速题：先判断 $a$ 是否常量，不要乱用匀加速公式。</li><li>Always attach units / 最后补单位；中间统一化成 SI units / 国际单位。</li></ol><h4 id=\"1-2-vectors-矢量\">1.2 Vectors / 矢量<a class=\"heading-anchor\" href=\"#1-2-vectors-矢量\" data-heading-id=\"1-2-vectors-矢量\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p><strong>Knowledge Points / 知识点</strong></p><ul><li>Vector / 矢量：has magnitude and direction and obeys vector algebra / 有大小方向且满足矢量代数。</li><li>Scalar / 标量：has magnitude only / 只有大小。</li><li>Unit vector / 单位矢量：</li></ul><div class=\"math-display\">$$\n\\hat{\\mathbf A}=\\frac{\\mathbf A}{|\\mathbf A|}\n$$</div><ul><li>Vector addition / 矢量加法：head-to-tail rule / 首尾相接法；component addition / 分量相加。</li><li>Cartesian components and magnitude / 笛卡尔分量与大小：</li></ul><div class=\"math-display\">$$\n\\mathbf A=A_x\\hat{\\mathbf i}+A_y\\hat{\\mathbf j}+A_z\\hat{\\mathbf k},\n\\qquad\n|\\mathbf A|=\\sqrt{A_x^2+A_y^2+A_z^2}\n$$</div><ul><li>Polar coordinates / 极坐标：</li></ul><div class=\"math-display\">$$\nx=r\\cos\\phi,\n\\qquad\ny=r\\sin\\phi\n$$</div><ul><li>Polar unit vectors / 极坐标单位矢量：</li></ul><div class=\"math-display\">$$\n\\hat{\\mathbf u}_r\\quad(\\text{radial / 径向}),\n\\qquad\n\\hat{\\mathbf u}_\\phi\\quad(\\text{tangential / 切向})\n$$</div><p>Their directions change with $\\phi$ / 方向随角度变化。</p><p><strong>Problem Methods / 解题方法</strong></p><ol><li>Decompose first / 先分解：把矢量写成分量再算。</li><li>Use polar coordinates for circular/central motion / 圆周或中心力问题优先考虑极坐标。</li><li>Be careful with time-dependent unit vectors / 注意随时间变化的单位矢量，极坐标不能像固定基矢那样直接忽略导数。</li></ol><h4 id=\"1-3-motion-in-higher-dimensions-高维运动\">1.3 Motion in Higher Dimensions / 高维运动<a class=\"heading-anchor\" href=\"#1-3-motion-in-higher-dimensions-高维运动\" data-heading-id=\"1-3-motion-in-higher-dimensions-高维运动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p><strong>Knowledge Points / 知识点</strong></p><ul><li>Position, velocity, acceleration vectors / 位置、速度、加速度矢量：</li></ul><div class=\"math-display\">$$\n\\mathbf r=x\\hat{\\mathbf i}+y\\hat{\\mathbf j}+z\\hat{\\mathbf k},\n\\qquad\n\\mathbf v=\\frac{d\\mathbf r}{dt},\n\\qquad\n\\mathbf a=\\frac{d\\mathbf v}{dt}\n$$</div><ul><li>Component equations / 分量方程：$x$, $y$, $z$ directions are independent when axes are orthogonal / 正交方向可分别处理。</li><li>Projectile motion / 抛体运动：when air resistance is ignored / 忽略空气阻力，</li></ul><div class=\"math-display\">$$\na_x=0,\n\\qquad\na_y=-g\n$$</div><ul><li>Circular motion / 圆周运动：</li></ul><div class=\"math-display\">$$\na_r=-\\frac{v^2}{R}=-\\omega^2R,\n\\qquad\na_t=R\\alpha\n$$</div><p><strong>Problem Methods / 解题方法</strong></p><ol><li>Vector equation first / 先写矢量式，再投影。</li><li>For projectile motion / 抛体运动：水平匀速，竖直匀加速。</li><li>For circular motion / 圆周运动：径向负责速度方向变化，切向负责速率变化。</li></ol><h4 id=\"1-4-frame-of-reference-参考系\">1.4 Frame of Reference / 参考系<a class=\"heading-anchor\" href=\"#1-4-frame-of-reference-参考系\" data-heading-id=\"1-4-frame-of-reference-参考系\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p><strong>Knowledge Points / 知识点</strong></p><ul><li>Frame of reference / 参考系：observer + coordinate system + clock / 观察者、坐标系、时钟。</li><li>Galilean transformation / 伽利略变换：if $S&#039;$ moves with velocity $\\mathbf V$ relative to $S$,</li></ul><div class=\"math-display\">$$\n\\mathbf r=\\mathbf r&#039;+\\mathbf Vt,\n\\qquad\n\\mathbf v=\\mathbf v&#039;+\\mathbf V,\n\\qquad\n\\mathbf a=\\mathbf a&#039;\n$$</div><ul><li>Inertial frame / 惯性系：Newton&#039;s laws hold without fictitious forces / 牛顿定律可直接使用。</li></ul><p><strong>Problem Methods / 解题方法</strong></p><ol><li>Choose the easiest inertial frame / 选择最方便的惯性系。</li><li>Relative motion problems / 相对运动题：先写 $r_A - r_B$ 或速度关系。</li><li>Do not use Newton&#039;s second law directly in accelerating frames unless adding fictitious force / 加速参考系要加伪力。</li></ol><p><strong>Vocabulary / 生词</strong></p><ul><li>kinematics：运动学</li><li>dynamics：动力学</li><li>particle approximation：质点近似</li><li>displacement：位移</li><li>distance：路程</li><li>instantaneous：瞬时的</li><li>derivative：导数</li><li>integral：积分</li><li>dimension：量纲</li><li>vector：矢量</li><li>scalar：标量</li><li>unit vector：单位矢量</li><li>Cartesian coordinate：笛卡尔坐标</li><li>polar coordinate：极坐标</li><li>frame of reference：参考系</li><li>Galilean transformation：伽利略变换</li></ul><hr /><h4 id=\"ch-2-newton-s-laws-of-motion-牛顿运动定律\">Ch. 2 Newton&#039;s Laws of Motion / 牛顿运动定律<a class=\"heading-anchor\" href=\"#ch-2-newton-s-laws-of-motion-牛顿运动定律\" data-heading-id=\"ch-2-newton-s-laws-of-motion-牛顿运动定律\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点\" data-heading-id=\"knowledge-points-知识点\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Newton&#039;s first law / 牛顿第一定律：no net external force means constant velocity / 无合外力则速度恒定。</li><li>Inertia / 惯性：resistance to change of velocity / 抵抗速度改变的性质。</li><li>Newton&#039;s second and third laws / 牛顿第二、第三定律：</li></ul><div class=\"math-display\">$$\n\\sum\\mathbf F=m\\mathbf a,\n\\qquad\n\\mathbf F_{12}=-\\mathbf F_{21}\n$$</div><ul><li>Mass vs weight / 质量与重量：mass is intrinsic / 质量是物体属性；weight is gravitational force / 重量是重力。</li><li>Non-inertial force / 非惯性力、伪力：in frame accelerating with $\\mathbf a_{\\rm frame}$, add</li></ul><div class=\"math-display\">$$\n\\mathbf F_{\\rm fictitious}=-m\\mathbf a_{\\rm frame}\n$$</div><ul><li>Galilean invariance / 伽利略不变性：Newton&#039;s second law has the same form in all inertial frames / 牛顿第二定律在各惯性系同形式。</li><li>Common forces / 常见力：</li><li>gravity / 重力：$mg$</li><li>normal force / 支持力：perpendicular to surface / 垂直接触面</li><li>tension / 张力：along string / 沿绳</li><li>friction / 摩擦力：static $f_{s} \\le \\mu_{s} N$; kinetic $f_{k} = \\mu_{k} N$</li><li>drag / 阻力：$R = bv$ or $R = cv^2$, opposite velocity / 方向与速度相反</li><li>Terminal speed / 终端速度：drag balances gravity / 阻力与重力平衡时速度不再增加。</li></ul><h4 id=\"problem-methods-解题方法\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法\" data-heading-id=\"problem-methods-解题方法\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Choose inertial frame and axes / 选择惯性系和坐标轴。</li><li>Draw a free-body diagram for each object / 每个物体单独画受力图。</li><li>Write Newton&#039;s second law in components / 分量写牛顿第二定律。</li></ol><div class=\"math-display\">$$\n   \\sum F_x=ma_x,\n   \\qquad\n   \\sum F_y=ma_y\n   $$</div><ol><li>Add constraints / 加约束：same rope tension if massless rope and frictionless pulley / 理想绳滑轮张力相同；same acceleration magnitude for connected bodies / 连接体加速度大小相关。</li><li>For circular motion / 圆周运动：radial equation often</li></ol><div class=\"math-display\">$$\n   \\sum F_r=\\frac{mv^2}{r}\n   $$</div><ol><li>For drag / 阻力题：写微分方程，如 falling with linear drag：</li></ol><div class=\"math-display\">$$\n   mg-bv=m\\frac{dv}{dt},\n   \\qquad\n   v_t=\\frac{mg}{b}\n   $$</div><h4 id=\"vocabulary-生词\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词\" data-heading-id=\"vocabulary-生词\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>force：力</li><li>net external force：合外力</li><li>inertia：惯性</li><li>inertial frame：惯性系</li><li>non-inertial frame：非惯性系</li><li>fictitious force：伪力</li><li>Galilean invariance：伽利略不变性</li><li>tension：张力</li><li>normal force：支持力</li><li>friction：摩擦</li><li>drag force：阻力</li><li>terminal speed：终端速度</li></ul><hr /><h4 id=\"ch-3-work-and-energy-功和能量\">Ch. 3 Work and Energy / 功和能量<a class=\"heading-anchor\" href=\"#ch-3-work-and-energy-功和能量\" data-heading-id=\"ch-3-work-and-energy-功和能量\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"3-1-generic-forces-一般力下的运动\">3.1 Generic Forces / 一般力下的运动<a class=\"heading-anchor\" href=\"#3-1-generic-forces-一般力下的运动\" data-heading-id=\"3-1-generic-forces-一般力下的运动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p><strong>Knowledge Points / 知识点</strong></p><ul><li>If force depends on position / 若力依赖位置：</li></ul><div class=\"math-display\">$$\na=v\\frac{dv}{dx},\n\\qquad\nm\\frac{dv}{dt}=F(x)\n\\quad\\Longrightarrow\\quad\nmv\\frac{dv}{dx}=F(x)\n$$</div><ul><li>If force depends on time / 若力依赖时间：integrate acceleration over time / 对时间积分。</li><li>If force depends on velocity / 若力依赖速度：solve differential equation / 解微分方程。</li></ul><h4 id=\"3-2-work-and-power-功和功率\">3.2 Work and Power / 功和功率<a class=\"heading-anchor\" href=\"#3-2-work-and-power-功和功率\" data-heading-id=\"3-2-work-and-power-功和功率\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p><strong>Knowledge Points / 知识点</strong></p><ul><li>Work and power / 功和功率：</li></ul><div class=\"math-display\">$$\nW=\\int \\mathbf F\\cdot d\\mathbf r,\n\\qquad\nW=Fd\\cos\\theta,\n\\qquad\nP=\\frac{dW}{dt}=\\mathbf F\\cdot\\mathbf v\n$$</div><ul><li>Work is scalar / 功是标量；positive work increases kinetic energy / 正功增加动能。</li></ul><h4 id=\"3-3-work-kinetic-energy-theorem-动能定理\">3.3 Work-Kinetic Energy Theorem / 动能定理<a class=\"heading-anchor\" href=\"#3-3-work-kinetic-energy-theorem-动能定理\" data-heading-id=\"3-3-work-kinetic-energy-theorem-动能定理\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Kinetic energy and work-kinetic theorem / 动能与动能定理：</li></ul><div class=\"math-display\">$$\nK=\\frac{1}{2}mv^2,\n\\qquad\nW_{\\rm net}=\\Delta K\n$$</div><h4 id=\"3-4-3-6-potential-and-energy-conservation-势能与能量守恒\">3.4-3.6 Potential and Energy Conservation / 势能与能量守恒<a class=\"heading-anchor\" href=\"#3-4-3-6-potential-and-energy-conservation-势能与能量守恒\" data-heading-id=\"3-4-3-6-potential-and-energy-conservation-势能与能量守恒\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Conservative force / 保守力：work independent of path / 做功与路径无关。</li><li>Potential energy and force / 势能与力：</li></ul><div class=\"math-display\">$$\n\\Delta U=-W_{\\rm conservative},\n\\qquad\nF_x=-\\frac{dU}{dx},\n\\qquad\n\\mathbf F=-\\nabla U\n$$</div><ul><li>Common potentials / 常见势能：</li></ul><div class=\"math-display\">$$\nU_g=mgy,\n\\qquad\nF=-kx,\n\\qquad\nU_s=\\frac{1}{2}kx^2\n$$</div><ul><li>Mechanical energy and non-conservative work / 机械能与非保守力做功：</li></ul><div class=\"math-display\">$$\nE=K+U,\n\\qquad\n\\Delta K+\\Delta U=W_{\\rm nc}\n$$</div><h4 id=\"3-7-equilibrium-平衡\">3.7 Equilibrium / 平衡<a class=\"heading-anchor\" href=\"#3-7-equilibrium-平衡\" data-heading-id=\"3-7-equilibrium-平衡\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Equilibrium / 平衡：</li></ul><div class=\"math-display\">$$\nF=0,\n\\qquad\n\\frac{dU}{dx}=0\n$$</div><ul><li>Stability / 稳定性：</li></ul><div class=\"math-display\">$$\n\\begin{cases}\n\\dfrac{d^2U}{dx^2}&gt;0, &amp; \\text{stable equilibrium},\\\\[4pt]\n\\dfrac{d^2U}{dx^2}&lt;0, &amp; \\text{unstable equilibrium}.\n\\end{cases}\n$$</div><ul><li>Neutral equilibrium / 随遇平衡：nearby potential nearly flat / 附近势能近似平坦。</li></ul><h4 id=\"problem-methods-解题方法-2\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法-2\" data-heading-id=\"problem-methods-解题方法-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Ask first: force method or energy method? / 先判断用力还是能量。</li><li>For displacement-dependent force / 位移相关力：$W = \\int F dx$。</li><li>For path-independent force / 保守力：use potential energy / 用势能。</li><li>For friction / 有摩擦：write $W_{\\rm friction}$ explicitly / 显式写摩擦做功。</li><li>For equilibrium / 平衡题：solve $dU/dx=0$; judge stability by second derivative / 二阶导判断稳定性。</li></ol><h4 id=\"vocabulary-生词-2\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-2\" data-heading-id=\"vocabulary-生词-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>work：功</li><li>power：功率</li><li>kinetic energy：动能</li><li>potential energy：势能</li><li>conservative force：保守力</li><li>non-conservative force：非保守力</li><li>path independent：路径无关</li><li>equilibrium：平衡</li><li>stable：稳定的</li><li>unstable：不稳定的</li></ul><hr /><h4 id=\"ch-4-momentum-动量\">Ch. 4 Momentum / 动量<a class=\"heading-anchor\" href=\"#ch-4-momentum-动量\" data-heading-id=\"ch-4-momentum-动量\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-2\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-2\" data-heading-id=\"knowledge-points-知识点-2\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Momentum, Newton&#039;s second law, and impulse / 动量、牛顿第二定律和冲量：</li></ul><div class=\"math-display\">$$\n\\mathbf p=m\\mathbf v,\n\\qquad\n\\mathbf F_{\\rm net}=\\frac{d\\mathbf p}{dt},\n\\qquad\n\\mathbf J=\\int\\mathbf F\\,dt=\\Delta\\mathbf p\n$$</div><ul><li>Conservation of momentum / 动量守恒：if total external force or impulse is zero / 外力或外冲量为零。</li><li>Inelastic collision / 非弹性碰撞：kinetic energy not conserved / 动能不守恒。</li><li>Perfectly inelastic collision / 完全非弹性碰撞：objects stick together / 碰后粘在一起。</li><li>Elastic collision / 弹性碰撞：momentum and kinetic energy both conserved / 动量、动能都守恒。</li><li>Center of mass and center-of-mass motion / 质心与质心运动：</li></ul><div class=\"math-display\">$$\n\\mathbf R_{\\rm cm}=\\frac{\\sum_i m_i\\mathbf r_i}{M},\n\\qquad\nM\\mathbf a_{\\rm cm}=\\mathbf F_{\\rm ext}\n$$</div><ul><li>Internal forces / 内力：cancel in total momentum if Newton&#039;s third law holds / 对总动量相互抵消。</li></ul><h4 id=\"problem-methods-解题方法-3\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法-3\" data-heading-id=\"problem-methods-解题方法-3\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Choose system / 选系统：判断哪些力是外力。</li><li>Use conservation component-wise / 分方向使用守恒：外冲量为零的方向才守恒。</li><li>Collision sequence / 碰撞顺序：先动量，再看是否能量守恒。</li><li>For many-particle systems / 多粒子系统：用质心方程简化整体运动。</li><li>For variable-mass-looking problems / 类变质量题：小心系统边界和动量流。</li></ol><h4 id=\"vocabulary-生词-3\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-3\" data-heading-id=\"vocabulary-生词-3\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>momentum：动量</li><li>impulse：冲量</li><li>collision：碰撞</li><li>elastic collision：弹性碰撞</li><li>inelastic collision：非弹性碰撞</li><li>center of mass：质心</li><li>internal force：内力</li><li>external force：外力</li></ul><hr /><h4 id=\"ch-5-the-law-of-gravitation-万有引力定律\">Ch. 5 The Law of Gravitation / 万有引力定律<a class=\"heading-anchor\" href=\"#ch-5-the-law-of-gravitation-万有引力定律\" data-heading-id=\"ch-5-the-law-of-gravitation-万有引力定律\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-3\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-3\" data-heading-id=\"knowledge-points-知识点-3\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Kepler&#039;s first law / 开普勒第一定律：planet orbits are ellipses with the Sun at one focus / 行星绕太阳椭圆运动，太阳在焦点。</li><li>Kepler&#039;s second law / 开普勒第二定律：equal areas in equal times / 相等时间扫过相等面积。</li><li>Kepler&#039;s third law / 开普勒第三定律：$T^2 \\propto a^3$ / 周期平方与半长轴三次方成正比。</li><li>Universal gravitation and gravitational field / 万有引力与引力场：</li></ul><div class=\"math-display\">$$\nF=G\\frac{m_1m_2}{r^2},\n\\qquad\ng=\\frac{GM}{r^2}\n$$</div><ul><li>Shell theorem idea / 球壳定理思想：outside a spherical mass distribution acts like point mass at center / 球外等效为中心点质量。</li><li>Satellite circular orbit / 卫星圆轨道：</li></ul><div class=\"math-display\">$$\n\\frac{GMm}{r^2}=\\frac{mv^2}{r}\n$$</div><ul><li>Orbital speed, period, potential energy, and escape speed / 轨道速度、周期、势能、逃逸速度：</li></ul><div class=\"math-display\">$$\nv=\\sqrt{\\frac{GM}{r}},\n\\qquad\nT=2\\pi\\sqrt{\\frac{r^3}{GM}},\n\\qquad\nU=-\\frac{GMm}{r},\n\\qquad\nv_{\\rm esc}=\\sqrt{\\frac{2GM}{R}}\n$$</div><h4 id=\"problem-methods-解题方法-4\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法-4\" data-heading-id=\"problem-methods-解题方法-4\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Circular orbit / 圆轨道：set gravity equal to centripetal force / 万有引力提供向心力。</li><li>Escape problem / 逃逸题：set final energy at infinity to zero / 无穷远处总能量取零。</li><li>Satellite period / 卫星周期：combine $v = 2\\pi r/T$ with gravity equation。</li><li>Central-force small perturbation / 中心力小扰动：write effective potential / 写等效势。</li></ol><h4 id=\"vocabulary-生词-4\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-4\" data-heading-id=\"vocabulary-生词-4\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>gravitation：引力</li><li>universal gravitation：万有引力</li><li>orbit：轨道</li><li>ellipse：椭圆</li><li>focus：焦点</li><li>satellite：卫星</li><li>escape speed：逃逸速度</li><li>gravitational potential energy：引力势能</li></ul><hr /><h4 id=\"ch-6-rigid-bodies-刚体\">Ch. 6 Rigid Bodies / 刚体<a class=\"heading-anchor\" href=\"#ch-6-rigid-bodies-刚体\" data-heading-id=\"ch-6-rigid-bodies-刚体\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"6-1-rotational-kinematics-转动运动学\">6.1 Rotational Kinematics / 转动运动学<a class=\"heading-anchor\" href=\"#6-1-rotational-kinematics-转动运动学\" data-heading-id=\"6-1-rotational-kinematics-转动运动学\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Rigid body / 刚体：distances between all mass elements remain fixed / 各质点间距离不变。</li><li>Angular displacement / 角位移：$\\theta$。</li><li>Angular velocity / 角速度：$\\omega = d\\theta/dt$。</li><li>Angular acceleration / 角加速度：$\\alpha = d\\omega/dt$。</li><li>Constant angular acceleration / 匀角加速度公式：</li></ul><div class=\"math-display\">$$\n\\begin{aligned}\n\\omega&amp;=\\omega_0+\\alpha t,\\\\\n\\theta&amp;=\\theta_0+\\omega_0t+\\frac{1}{2}\\alpha t^2,\\\\\n\\omega^2&amp;=\\omega_0^2+2\\alpha(\\theta-\\theta_0).\n\\end{aligned}\n$$</div><ul><li>Linear-angular relations / 线量角量关系：</li></ul><div class=\"math-display\">$$\ns=r\\theta,\n\\qquad\nv_t=r\\omega,\n\\qquad\na_t=r\\alpha,\n\\qquad\na_r=r\\omega^2\n$$</div><h4 id=\"6-2-rotational-dynamics-转动动力学\">6.2 Rotational Dynamics / 转动动力学<a class=\"heading-anchor\" href=\"#6-2-rotational-dynamics-转动动力学\" data-heading-id=\"6-2-rotational-dynamics-转动动力学\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Torque and moment of inertia / 力矩与转动惯量：</li></ul><div class=\"math-display\">$$\n\\boldsymbol\\tau=\\mathbf r\\times\\mathbf F,\n\\qquad\n\\tau=rF\\sin\\theta,\n\\qquad\nI=\\int r^2\\,dm\n$$</div><ul><li>Rotation dynamics, energy, work, power / 转动动力学、能量、功、功率：</li></ul><div class=\"math-display\">$$\n\\sum\\tau=I\\alpha,\n\\qquad\nK=\\frac{1}{2}I\\omega^2,\n\\qquad\nW=\\int\\tau\\,d\\theta,\n\\qquad\nP=\\tau\\omega\n$$</div><ul><li>Parallel-axis theorem / 平行轴定理：</li></ul><div class=\"math-display\">$$\nI=I_{\\rm cm}+Md^2\n$$</div><ul><li>Common moments of inertia / 常见转动惯量：</li></ul><div class=\"math-display\">$$\n\\begin{array}{c|c}\n\\text{object / 物体} &amp; I\\\\\n\\hline\n\\text{point mass / 质点} &amp; mr^2\\\\\n\\text{hoop / 圆环} &amp; MR^2\\\\\n\\text{solid disk or cylinder / 实心圆盘或圆柱} &amp; \\frac{1}{2}MR^2\\\\\n\\text{solid sphere / 实心球} &amp; \\frac{2}{5}MR^2\\\\\n\\text{thin spherical shell / 薄球壳} &amp; \\frac{2}{3}MR^2\\\\\n\\text{rod about center / 杆绕中心} &amp; \\frac{1}{12}ML^2\\\\\n\\text{rod about end / 杆绕端点} &amp; \\frac{1}{3}ML^2\n\\end{array}\n$$</div><h4 id=\"6-3-rolling-滚动\">6.3 Rolling / 滚动<a class=\"heading-anchor\" href=\"#6-3-rolling-滚动\" data-heading-id=\"6-3-rolling-滚动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Rolling without slipping and rolling kinetic energy / 无滑动滚动与滚动动能：</li></ul><div class=\"math-display\">$$\nv_{\\rm cm}=R\\omega,\n\\qquad\na_{\\rm cm}=R\\alpha,\n\\qquad\nK=\\frac{1}{2}Mv_{\\rm cm}^2+\\frac{1}{2}I_{\\rm cm}\\omega^2\n$$</div><ul><li>Static friction in rolling / 滚动中的静摩擦：may do no work for pure rolling on fixed ground / 对固定地面纯滚动可不做功，但提供力矩。</li></ul><h4 id=\"problem-methods-解题方法-5\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法-5\" data-heading-id=\"problem-methods-解题方法-5\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Separate translation and rotation / 平动和转动分开写。</li><li>For rolling incline / 斜面滚动：</li></ol><div class=\"math-display\">$$\n   Mg\\sin\\theta-f=Ma,\n   \\qquad\n   fR=I\\alpha,\n   \\qquad\n   a=R\\alpha\n   $$</div><ol><li>For pulleys / 滑轮题：block equation + pulley torque equation + no-slip string constraint。</li><li>Use energy when rolling constraint holds / 无滑动滚动且静摩擦不耗能时可用能量。</li><li>If surface is frictionless / 光滑面：no torque about CM, angular speed may remain constant / 对质心无力矩，角速度不变。</li></ol><h4 id=\"vocabulary-生词-5\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-5\" data-heading-id=\"vocabulary-生词-5\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>rigid body：刚体</li><li>rotational kinematics：转动运动学</li><li>torque：力矩</li><li>moment of inertia：转动惯量</li><li>parallel-axis theorem：平行轴定理</li><li>rolling：滚动</li><li>rolling without slipping：无滑动滚动</li><li>angular acceleration：角加速度</li></ul><hr /><h4 id=\"ch-7-angular-momentum-角动量\">Ch. 7 Angular Momentum / 角动量<a class=\"heading-anchor\" href=\"#ch-7-angular-momentum-角动量\" data-heading-id=\"ch-7-angular-momentum-角动量\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"knowledge-points-知识点-4\">Knowledge Points / 知识点<a class=\"heading-anchor\" href=\"#knowledge-points-知识点-4\" data-heading-id=\"knowledge-points-知识点-4\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Angular momentum, torque, and theorem / 角动量、力矩与定理：</li></ul><div class=\"math-display\">$$\n\\mathbf L=\\mathbf r\\times\\mathbf p,\n\\qquad\n\\boldsymbol\\tau=\\mathbf r\\times\\mathbf F,\n\\qquad\n\\boldsymbol\\tau_{\\rm net}=\\frac{d\\mathbf L}{dt}\n$$</div><ul><li>Conservation of angular momentum / 角动量守恒：if net external torque is zero / 合外力矩为零。</li><li>System of particles / 质点系：internal torques cancel under central internal forces / 中心内力下内力矩抵消。</li><li>Rigid body fixed-axis angular momentum / 刚体定轴角动量：</li></ul><div class=\"math-display\">$$\nL=I\\omega\n$$</div><ul><li>Central force / 中心力：torque about center is zero, so angular momentum is conserved / 关于力心力矩为零，角动量守恒。</li></ul><h4 id=\"problem-methods-解题方法-6\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法-6\" data-heading-id=\"problem-methods-解题方法-6\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Choose origin / 选参考点：角动量和力矩都依赖参考点。</li><li>If force passes through origin / 若力过原点：torque is zero / 力矩为零。</li><li>Use angular momentum conservation for sudden events / 突然事件、碰撞、径向冲击常用角动量守恒。</li><li>For rigid bodies / 刚体题：connect</li></ol><div class=\"math-display\">$$\n   \\tau=I\\alpha,\n   \\qquad\n   L=I\\omega,\n   \\qquad\n   K=\\frac{1}{2}I\\omega^2\n   $$</div><h4 id=\"vocabulary-生词-6\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-6\" data-heading-id=\"vocabulary-生词-6\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>angular momentum：角动量</li><li>torque：力矩</li><li>external torque：外力矩</li><li>central force：中心力</li><li>fixed axis：定轴</li><li>conservation：守恒</li></ul><hr /><h4 id=\"ch-8-simple-harmonic-motion-简谐运动\">Ch. 8 Simple Harmonic Motion / 简谐运动<a class=\"heading-anchor\" href=\"#ch-8-simple-harmonic-motion-简谐运动\" data-heading-id=\"ch-8-simple-harmonic-motion-简谐运动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"8-1-equilibrium-平衡\">8.1 Equilibrium / 平衡<a class=\"heading-anchor\" href=\"#8-1-equilibrium-平衡\" data-heading-id=\"8-1-equilibrium-平衡\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Equilibrium of point mass and extended body / 质点与刚体平衡：</li></ul><div class=\"math-display\">$$\n\\sum\\mathbf F=0,\n\\qquad\n\\sum\\tau=0\n$$</div><ul><li>Static equilibrium / 静力平衡：linear and angular acceleration both zero, object at rest / 线加速度和角加速度为零且静止。</li></ul><h4 id=\"8-2-harmonic-oscillator-and-shm-谐振子与简谐运动\">8.2 Harmonic Oscillator and SHM / 谐振子与简谐运动<a class=\"heading-anchor\" href=\"#8-2-harmonic-oscillator-and-shm-谐振子与简谐运动\" data-heading-id=\"8-2-harmonic-oscillator-and-shm-谐振子与简谐运动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Hooke&#039;s law, SHM equation, and solution / 胡克定律、简谐方程与解：</li></ul><div class=\"math-display\">$$\nF=-kx,\n\\qquad\nm\\ddot x=-kx,\n\\qquad\n\\ddot x+\\omega^2x=0\n$$</div><div class=\"math-display\">$$\n\\omega=\\sqrt{\\frac{k}{m}},\n\\qquad\nx(t)=A\\cos(\\omega t+\\phi)\n$$</div><ul><li>Velocity and acceleration / 速度与加速度：</li></ul><div class=\"math-display\">$$\nv=-A\\omega\\sin(\\omega t+\\phi),\n\\qquad\na=-\\omega^2x\n$$</div><ul><li>Energy / 能量：</li></ul><div class=\"math-display\">$$\nE=\\frac{1}{2}kA^2\n=\\frac{1}{2}mv^2+\\frac{1}{2}kx^2\n$$</div><h4 id=\"8-3-motion-near-stable-equilibrium-稳定平衡附近的小振动\">8.3 Motion Near Stable Equilibrium / 稳定平衡附近的小振动<a class=\"heading-anchor\" href=\"#8-3-motion-near-stable-equilibrium-稳定平衡附近的小振动\" data-heading-id=\"8-3-motion-near-stable-equilibrium-稳定平衡附近的小振动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Taylor expansion / 泰勒展开：</li></ul><div class=\"math-display\">$$\nU(x)\\approx U(x_0)+\\frac{1}{2}U&#039;&#039;(x_0)(x-x_0)^2\n$$</div><ul><li>Effective spring constant and small oscillation frequency / 等效劲度系数与小振动频率：</li></ul><div class=\"math-display\">$$\nk_{\\rm eff}=U&#039;&#039;(x_0),\n\\qquad\n\\omega=\\sqrt{\\frac{k_{\\rm eff}}{m}}\n$$</div><ul><li>Pendulum small angle / 单摆小角：</li></ul><div class=\"math-display\">$$\n\\ddot\\theta+\\frac{g}{L}\\theta=0,\n\\qquad\n\\omega=\\sqrt{\\frac{g}{L}}\n$$</div><h4 id=\"8-4-damped-oscillator-阻尼振动\">8.4 Damped Oscillator / 阻尼振动<a class=\"heading-anchor\" href=\"#8-4-damped-oscillator-阻尼振动\" data-heading-id=\"8-4-damped-oscillator-阻尼振动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Damping force and equation / 阻尼力与方程：</li></ul><div class=\"math-display\">$$\nF_d=-bv,\n\\qquad\nm\\ddot x+b\\dot x+kx=0\n$$</div><ul><li>Underdamped / 欠阻尼：oscillates with decaying amplitude / 振幅衰减但仍振动。</li><li>Critical damping / 临界阻尼：returns fastest without oscillating / 不振荡最快回平衡。</li><li>Overdamped / 过阻尼：no oscillation, slow return / 不振荡且回归慢。</li><li>Damping reduces mechanical energy / 阻尼使机械能耗散。</li></ul><h4 id=\"8-5-forced-oscillator-受迫振动\">8.5 Forced Oscillator / 受迫振动<a class=\"heading-anchor\" href=\"#8-5-forced-oscillator-受迫振动\" data-heading-id=\"8-5-forced-oscillator-受迫振动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Driving force and equation / 驱动力与方程：</li></ul><div class=\"math-display\">$$\nF(t)=F_0\\cos(\\omega_d t),\n\\qquad\nm\\ddot x+b\\dot x+kx=F_0\\cos(\\omega_d t)\n$$</div><ul><li>Transient response / 暂态响应：depends on initial condition and decays / 与初始条件有关并衰减。</li><li>Steady-state response / 稳态响应：oscillates at driving frequency / 以驱动频率振动。</li><li>Resonance / 共振：amplitude becomes large when driving frequency is near natural frequency / 驱动频率接近固有频率时振幅大。</li></ul><h4 id=\"8-6-coupled-oscillators-and-normal-modes-耦合振子与简正模\">8.6 Coupled Oscillators and Normal Modes / 耦合振子与简正模<a class=\"heading-anchor\" href=\"#8-6-coupled-oscillators-and-normal-modes-耦合振子与简正模\" data-heading-id=\"8-6-coupled-oscillators-and-normal-modes-耦合振子与简正模\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Coupled oscillator / 耦合振子：motion of one coordinate affects another / 坐标间相互影响。</li><li>Normal mode / 简正模：all parts oscillate at same frequency with fixed relative amplitude and phase / 各部分同频且相对振幅相位固定。</li><li>In-phase mode / 同相模：coordinates move together / 同向运动。</li><li>Out-of-phase mode / 反相模：coordinates move oppositely / 反向运动。</li><li>General motion / 一般运动：superposition of normal modes / 简正模叠加。</li></ul><h4 id=\"8-7-molecules-and-solids-分子与固体\">8.7 Molecules and Solids / 分子与固体<a class=\"heading-anchor\" href=\"#8-7-molecules-and-solids-分子与固体\" data-heading-id=\"8-7-molecules-and-solids-分子与固体\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Around potential minimum / 势能极小值附近：interatomic potential can be approximated as harmonic / 原子间势可近似为谐振子。</li><li>Elastic properties / 弹性性质 come from microscopic restoring forces / 来自微观恢复力。</li><li>Young&#039;s modulus / 杨氏模量：stretch/compression stiffness / 拉伸压缩刚度。</li><li>Shear modulus / 剪切模量：shear stiffness / 抗剪刚度。</li><li>Bulk modulus / 体积模量：compression stiffness / 抗体积压缩刚度。</li></ul><h4 id=\"problem-methods-解题方法-7\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法-7\" data-heading-id=\"problem-methods-解题方法-7\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Identify equilibrium / 找平衡点。</li><li>Linearize / 线性化：small angle, small displacement, ignore higher-order terms / 小量近似，忽略高阶项。</li><li>Match to SHM form / 化为 $q&#039;&#039; + \\omega^2 q = 0$。</li><li>For coupled oscillators / 耦合振子：write matrix equations or add/subtract equations to find normal coordinates / 写矩阵或加减方程找简正坐标。</li><li>For forced/damped systems / 阻尼受迫：先区分 natural frequency, driving frequency, damping / 区分固有频率、驱动频率、阻尼。</li></ol><h4 id=\"vocabulary-生词-7\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-7\" data-heading-id=\"vocabulary-生词-7\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>simple harmonic motion：简谐运动</li><li>oscillator：振子</li><li>damping：阻尼</li><li>damped oscillator：阻尼振子</li><li>forced oscillator：受迫振子</li><li>resonance：共振</li><li>transient：暂态的</li><li>steady state：稳态</li><li>normal mode：简正模</li><li>in-phase：同相</li><li>out-of-phase：反相</li><li>Young&#039;s modulus：杨氏模量</li><li>shear modulus：剪切模量</li><li>bulk modulus：体积模量</li></ul><hr /><h4 id=\"ch-9-wave-motion-波动\">Ch. 9 Wave Motion / 波动<a class=\"heading-anchor\" href=\"#ch-9-wave-motion-波动\" data-heading-id=\"ch-9-wave-motion-波动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"9-1-9-2-introduction-and-wave-function-波的引入与波函数\">9.1-9.2 Introduction and Wave Function / 波的引入与波函数<a class=\"heading-anchor\" href=\"#9-1-9-2-introduction-and-wave-function-波的引入与波函数\" data-heading-id=\"9-1-9-2-introduction-and-wave-function-波的引入与波函数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Wave / 波：propagation of disturbance and energy through a medium / 扰动和能量在介质中传播。</li><li>Mechanical wave / 机械波：needs medium / 需要介质。</li><li>Transverse wave / 横波：disturbance perpendicular to propagation direction / 振动方向垂直传播方向。</li><li>Longitudinal wave / 纵波：disturbance parallel to propagation direction / 振动方向平行传播方向。</li><li>Wave function / 波函数：$y(x,t)$ or $u(x,t)$ describes displacement / 描述介质位移。</li><li>Traveling wave forms / 行波形式：</li></ul><div class=\"math-display\">$$\nf(x-vt)\\quad(\\text{right-moving}),\n\\qquad\nf(x+vt)\\quad(\\text{left-moving})\n$$</div><h4 id=\"9-3-superposition-and-interference-叠加与干涉\">9.3 Superposition and Interference / 叠加与干涉<a class=\"heading-anchor\" href=\"#9-3-superposition-and-interference-叠加与干涉\" data-heading-id=\"9-3-superposition-and-interference-叠加与干涉\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Superposition principle / 叠加原理：in linear medium, resultant displacement is algebraic sum / 线性介质中位移代数相加。</li><li>Constructive interference / 相长干涉：waves reinforce / 波增强。</li><li>Destructive interference / 相消干涉：waves cancel partly or completely / 波相互抵消。</li></ul><h4 id=\"9-4-transmission-and-reflection-透射与反射\">9.4 Transmission and Reflection / 透射与反射<a class=\"heading-anchor\" href=\"#9-4-transmission-and-reflection-透射与反射\" data-heading-id=\"9-4-transmission-and-reflection-透射与反射\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Reflection / 反射：wave returns at boundary / 波在边界返回。</li><li>Transmission / 透射：wave continues into another medium / 波进入另一介质。</li><li>Fixed end reflection / 固定端反射：inverted pulse / 脉冲反相。</li><li>Free end reflection / 自由端反射：not inverted / 不反相。</li><li>Boundary condition / 边界条件 determines phase / 边界条件决定反射相位。</li></ul><h4 id=\"9-5-waves-in-a-solid-固体中的波\">9.5 Waves in a Solid / 固体中的波<a class=\"heading-anchor\" href=\"#9-5-waves-in-a-solid-固体中的波\" data-heading-id=\"9-5-waves-in-a-solid-固体中的波\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Atomic chain model / 原子链模型：atoms connected by effective springs / 原子由等效弹簧连接。</li><li>Continuum approximation / 连续介质近似：wavelength much larger than atomic spacing / 波长远大于原子间距。</li><li>Longitudinal wave in solid / 固体纵波：displacement along propagation direction / 位移沿传播方向。</li><li>Wave speed increases with stiffness and decreases with mass density / 波速随刚度增大而增大，随密度增大而减小。</li></ul><h4 id=\"9-6-linear-wave-equation-线性波动方程\">9.6 Linear Wave Equation / 线性波动方程<a class=\"heading-anchor\" href=\"#9-6-linear-wave-equation-线性波动方程\" data-heading-id=\"9-6-linear-wave-equation-线性波动方程\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Linear wave equation / 线性波动方程：</li></ul><div class=\"math-display\">$$\n\\frac{\\partial^2y}{\\partial t^2}\n=v^2\\frac{\\partial^2y}{\\partial x^2}\n$$</div><ul><li>String transverse wave speed / 弦横波速度：</li></ul><div class=\"math-display\">$$\nv=\\sqrt{\\frac{T}{\\mu}}\n$$</div><ul><li>Derivation idea / 推导思路：take small string element $dx$; use vertical tension component difference / 取小绳元，利用张力竖直分量差。</li></ul><h4 id=\"problem-methods-解题方法-8\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法-8\" data-heading-id=\"problem-methods-解题方法-8\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Identify wave direction from argument / 由函数自变量判断方向：$x-vt$ 右行，$x + vt$ 左行。</li><li>To derive wave equation / 推导波动方程：小段受力 + 牛顿第二定律 + 小角近似。</li><li>Reflection questions / 反射题：write incident plus reflected wave and apply boundary condition / 入射波加反射波并套边界条件。</li><li>If medium parameters vary / 若介质参数变化：波速和波形可能随位置变，正弦波不一定仍是解。</li></ol><h4 id=\"vocabulary-生词-8\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-8\" data-heading-id=\"vocabulary-生词-8\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>wave：波</li><li>medium：介质</li><li>transverse wave：横波</li><li>longitudinal wave：纵波</li><li>wave function：波函数</li><li>superposition：叠加</li><li>interference：干涉</li><li>constructive：相长的</li><li>destructive：相消的</li><li>reflection：反射</li><li>transmission：透射</li><li>boundary condition：边界条件</li><li>continuum approximation：连续介质近似</li></ul><hr /><h4 id=\"ch-10-sinusoidal-waves-正弦波\">Ch. 10 Sinusoidal Waves / 正弦波<a class=\"heading-anchor\" href=\"#ch-10-sinusoidal-waves-正弦波\" data-heading-id=\"ch-10-sinusoidal-waves-正弦波\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"10-1-sinusoidal-wave-function-正弦波函数\">10.1 Sinusoidal Wave Function / 正弦波函数<a class=\"heading-anchor\" href=\"#10-1-sinusoidal-wave-function-正弦波函数\" data-heading-id=\"10-1-sinusoidal-wave-function-正弦波函数\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Sinusoidal wave / 正弦波：</li></ul><div class=\"math-display\">$$\ny=A\\sin(kx-\\omega t+\\phi)\n\\quad\\text{or}\\quad\ny=A\\cos(kx-\\omega t+\\phi)\n$$</div><ul><li>Amplitude / 振幅：$A$。</li><li>Wave number / 波数：</li></ul><div class=\"math-display\">$$\nk=\\frac{2\\pi}{\\lambda}\n$$</div><ul><li>Wavelength / 波长：$\\lambda$。</li><li>Angular frequency, period, and wave speed / 角频率、周期、波速：</li></ul><div class=\"math-display\">$$\n\\omega=2\\pi f,\n\\qquad\nT=\\frac{1}{f},\n\\qquad\nv=\\frac{\\omega}{k}=\\lambda f\n$$</div><ul><li>Medium particles perform SHM / 介质质点做简谐运动，但波形传播 / 质点振动，波传播。</li></ul><h4 id=\"10-2-energy-transfer-能量传输\">10.2 Energy Transfer / 能量传输<a class=\"heading-anchor\" href=\"#10-2-energy-transfer-能量传输\" data-heading-id=\"10-2-energy-transfer-能量传输\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Kinetic energy density / 动能密度：</li></ul><div class=\"math-display\">$$\nu_K=\\frac{1}{2}\\mu\n\\left(\\frac{\\partial y}{\\partial t}\\right)^2\n$$</div><ul><li>Potential energy density / 势能密度：from stretching of string / 来自弦被拉伸。</li><li>Average energy density / 平均能量密度 for sinusoidal string wave：</li></ul><div class=\"math-display\">$$\n\\bar u\\propto \\mu\\omega^2A^2\n$$</div><ul><li>Energy propagates with wave / 能量随波传播。</li></ul><h4 id=\"10-3-interference-and-beating-干涉与拍\">10.3 Interference and Beating / 干涉与拍<a class=\"heading-anchor\" href=\"#10-3-interference-and-beating-干涉与拍\" data-heading-id=\"10-3-interference-and-beating-干涉与拍\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Same frequency and direction / 同频同向叠加：resultant amplitude depends on phase difference / 合振幅取决于相位差。</li><li>Interference conditions / 干涉条件：</li></ul><div class=\"math-display\">$$\n\\Delta\\phi=2n\\pi\n\\quad(\\text{constructive}),\n\\qquad\n\\Delta\\phi=(2n+1)\\pi\n\\quad(\\text{destructive})\n$$</div><ul><li>Beating / 拍：two close frequencies superpose / 两个接近频率叠加。</li><li>Beat frequency / 拍频：</li></ul><div class=\"math-display\">$$\nf_{\\rm beat}=|f_1-f_2|\n$$</div><h4 id=\"10-4-standing-waves-驻波\">10.4 Standing Waves / 驻波<a class=\"heading-anchor\" href=\"#10-4-standing-waves-驻波\" data-heading-id=\"10-4-standing-waves-驻波\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Standing wave / 驻波：two equal-amplitude waves traveling opposite directions / 两列等幅反向波叠加。</li><li>Typical form / 典型形式：</li></ul><div class=\"math-display\">$$\ny=2A\\sin(kx)\\cos(\\omega t)\n$$</div><ul><li>Node / 波节：always zero displacement / 位移恒为零。</li><li>Antinode / 波腹：maximum amplitude / 振幅最大。</li><li>String fixed at both ends / 两端固定弦：</li></ul><div class=\"math-display\">$$\n\\lambda_n=\\frac{2L}{n},\n\\qquad\nf_n=\\frac{nv}{2L}=nf_1,\n\\qquad\nf_1=\\frac{v}{2L}\n$$</div><h4 id=\"10-5-fourier-analysis-傅里叶分析\">10.5 Fourier Analysis / 傅里叶分析<a class=\"heading-anchor\" href=\"#10-5-fourier-analysis-傅里叶分析\" data-heading-id=\"10-5-fourier-analysis-傅里叶分析\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Fourier idea / 傅里叶思想：periodic functions can be written as sums of sinusoidal functions / 周期函数可分解为正弦余弦叠加。</li><li>Harmonic / 谐波：integer multiple of fundamental frequency / 基频整数倍。</li><li>Square wave / 方波 often needs odd harmonics / 常由奇次谐波叠加表示。</li><li>Physical meaning / 物理意义：complex waveforms are superpositions of simple sinusoidal waves / 复杂波形可分解成简单正弦波。</li></ul><h4 id=\"10-6-doppler-effect-多普勒效应\">10.6 Doppler Effect / 多普勒效应<a class=\"heading-anchor\" href=\"#10-6-doppler-effect-多普勒效应\" data-heading-id=\"10-6-doppler-effect-多普勒效应\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>Doppler effect / 多普勒效应：observed frequency changes due to relative motion / 相对运动导致观测频率改变。</li><li>Moving observer / 观察者运动：toward source increases frequency / 靠近声源频率升高。</li><li>Moving source / 波源运动：toward observer shortens wavelength / 靠近观察者波长变短。</li><li>For sound / 对声波：wave speed is relative to medium / 波速相对介质决定。</li><li>Useful convention / 常用记号：$v$ wave speed, $v_O$ observer speed, $v_S$ source speed; signs depend on whether moving toward each other / 符号取决于是否相向运动。</li></ul><h4 id=\"problem-methods-解题方法-9\">Problem Methods / 解题方法<a class=\"heading-anchor\" href=\"#problem-methods-解题方法-9\" data-heading-id=\"problem-methods-解题方法-9\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Read $kx - \\omega t$ / 读波函数：方向、$A$, $k$, $\\omega$, $\\lambda$, $f$, $v$。</li><li>Verify wave equation / 验证波动方程：compute second derivatives and require $\\omega^2 = v^2 k^2$。</li><li>Superposition / 叠加题：use trig identities / 用三角恒等式。</li><li>Standing wave boundary / 驻波边界：fixed end means node / 固定端是波节。</li><li>Fourier questions / 傅里叶题：先判断奇偶性，odd functions use sine series / 奇函数用正弦级数。</li><li>Doppler questions / 多普勒题：先分清 source moving or observer moving / 先分清波源动还是观察者动。</li></ol><h4 id=\"vocabulary-生词-9\">Vocabulary / 生词<a class=\"heading-anchor\" href=\"#vocabulary-生词-9\" data-heading-id=\"vocabulary-生词-9\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ul><li>sinusoidal：正弦的</li><li>amplitude：振幅</li><li>wavelength：波长</li><li>wave number：波数</li><li>angular frequency：角频率</li><li>energy density：能量密度</li><li>phase difference：相位差</li><li>beating：拍</li><li>standing wave：驻波</li><li>node：波节</li><li>antinode：波腹</li><li>harmonic：谐波</li><li>Fourier analysis：傅里叶分析</li><li>Doppler effect：多普勒效应</li></ul><hr /><h4 id=\"high-frequency-exam-templates-高频考试题型模板\">High-Frequency Exam Templates / 高频考试题型模板<a class=\"heading-anchor\" href=\"#high-frequency-exam-templates-高频考试题型模板\" data-heading-id=\"high-frequency-exam-templates-高频考试题型模板\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><h4 id=\"template-a-free-body-and-constraint-problems-受力与约束题\">Template A: Free-Body and Constraint Problems / 受力与约束题<a class=\"heading-anchor\" href=\"#template-a-free-body-and-constraint-problems-受力与约束题\" data-heading-id=\"template-a-free-body-and-constraint-problems-受力与约束题\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Draw free-body diagram / 画受力图。</li><li>Choose axes / 选轴：斜面题沿斜面和垂直斜面，圆周题径向和切向。</li><li>Write Newton&#039;s second law / 写牛顿第二定律。</li></ol><div class=\"math-display\">$$\n   \\sum \\mathbf F=m\\mathbf a\n   $$</div><ol><li>Add constraint equations / 加约束方程。</li><li>Solve and check limiting cases / 求解并检查极限情况。</li></ol><h4 id=\"template-b-energy-problems-能量题\">Template B: Energy Problems / 能量题<a class=\"heading-anchor\" href=\"#template-b-energy-problems-能量题\" data-heading-id=\"template-b-energy-problems-能量题\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Identify conservative and non-conservative forces / 区分保守力和非保守力。</li><li>Write the energy equation / 写能量方程。</li></ol><div class=\"math-display\">$$\n   K_i+U_i+W_{\\rm nc}=K_f+U_f\n   $$</div><ol><li>For rotation / 转动加上 $K_{\\rm rot}$。</li><li>For rolling / 滚动加上 $v=R\\omega$。</li></ol><h4 id=\"template-c-collision-problems-碰撞题\">Template C: Collision Problems / 碰撞题<a class=\"heading-anchor\" href=\"#template-c-collision-problems-碰撞题\" data-heading-id=\"template-c-collision-problems-碰撞题\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Momentum conservation first / 先动量守恒。</li><li>If elastic / 若弹性，再加动能守恒。</li><li>If perfectly inelastic / 若完全非弹性，碰后共同速度。</li><li>Check direction signs / 检查方向正负。</li></ol><h4 id=\"template-d-central-force-and-perturbed-orbit-中心力与受扰轨道\">Template D: Central Force and Perturbed Orbit / 中心力与受扰轨道<a class=\"heading-anchor\" href=\"#template-d-central-force-and-perturbed-orbit-中心力与受扰轨道\" data-heading-id=\"template-d-central-force-and-perturbed-orbit-中心力与受扰轨道\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Conserved angular momentum / 中心力下角动量守恒：</li></ol><div class=\"math-display\">$$\n   L=mr^2\\dot\\theta\n   $$</div><ol><li>Write effective radial energy / 写径向等效能量：</li></ol><div class=\"math-display\">$$\n   E=\\frac{1}{2}m\\dot r^2+\\frac{L^2}{2mr^2}+V(r)\n   $$</div><ol><li>Circular orbit condition / 圆轨道条件：</li></ol><div class=\"math-display\">$$\n   \\frac{dU_{\\rm eff}}{dr}=0\n   $$</div><ol><li>Small oscillation / 小振动：</li></ol><div class=\"math-display\">$$\n   \\omega_r^2=\\frac{U_{\\rm eff}&#039;&#039;(r_0)}{m}\n   $$</div><h4 id=\"template-e-rolling-rigid-body-滚动刚体\">Template E: Rolling Rigid Body / 滚动刚体<a class=\"heading-anchor\" href=\"#template-e-rolling-rigid-body-滚动刚体\" data-heading-id=\"template-e-rolling-rigid-body-滚动刚体\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Translation / 平动：</li></ol><div class=\"math-display\">$$\n   \\sum F=Ma_{\\rm cm}\n   $$</div><ol><li>Rotation / 转动：</li></ol><div class=\"math-display\">$$\n   \\sum \\tau_{\\rm cm}=I_{\\rm cm}\\alpha\n   $$</div><ol><li>Constraint / 约束：if no slipping / 无滑动时</li></ol><div class=\"math-display\">$$\n   a_{\\rm cm}=R\\alpha\n   $$</div><ol><li>Energy / 能量：</li></ol><div class=\"math-display\">$$\n   K=\\frac{1}{2}Mv_{\\rm cm}^2+\\frac{1}{2}I_{\\rm cm}\\omega^2\n   $$</div><h4 id=\"template-f-coupled-oscillators-耦合振动\">Template F: Coupled Oscillators / 耦合振动<a class=\"heading-anchor\" href=\"#template-f-coupled-oscillators-耦合振动\" data-heading-id=\"template-f-coupled-oscillators-耦合振动\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Write linear equations / 写线性方程。</li><li>Try normal coordinates / 尝试 $x_1+x_2$, $x_1-x_2$ 或 $\\theta_1+\\theta_2$, $\\theta_1-\\theta_2$。</li><li>Get eigenfrequencies / 求简正频率。</li><li>Superpose normal modes / 简正模叠加。</li><li>Use initial conditions / 用初始条件定振幅和相位。</li></ol><h4 id=\"template-g-wave-equation-波动方程\">Template G: Wave Equation / 波动方程<a class=\"heading-anchor\" href=\"#template-g-wave-equation-波动方程\" data-heading-id=\"template-g-wave-equation-波动方程\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><ol><li>Take a small element / 取小元。</li><li>Find net restoring force / 求恢复力。</li><li>Apply Newton&#039;s second law / 用牛顿第二定律。</li><li>Use small-angle or continuum approximation / 用小角或连续近似。</li><li>Match to $y_{tt} = v^2 y_{xx}$ / 对照标准波动方程读出波速。</li></ol><hr /><h4 id=\"formula-checklist-公式总表\">Formula Checklist / 公式总表<a class=\"heading-anchor\" href=\"#formula-checklist-公式总表\" data-heading-id=\"formula-checklist-公式总表\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p><strong>Kinematics / 运动学</strong></p><div class=\"math-display\">$$\n\\begin{aligned}\nv&amp;=\\frac{dx}{dt},\n&amp;\na&amp;=\\frac{dv}{dt}=\\frac{d^2x}{dt^2},\\\\\nv&amp;=v_0+at,\n&amp;\nx&amp;=x_0+v_0t+\\frac{1}{2}at^2,\\\\\nv^2&amp;=v_0^2+2a\\Delta x,\n&amp;\n\\mathbf r&amp;=x\\hat{\\mathbf i}+y\\hat{\\mathbf j}+z\\hat{\\mathbf k}.\n\\end{aligned}\n$$</div><p><strong>Newton, work, energy, momentum / 牛顿定律、功、能量、动量</strong></p><div class=\"math-display\">$$\n\\begin{aligned}\n\\sum\\mathbf F&amp;=m\\mathbf a,\n&amp;\nmg-bv&amp;=m\\frac{dv}{dt},\\\\\nW&amp;=\\int\\mathbf F\\cdot d\\mathbf r,\n&amp;\nP&amp;=\\mathbf F\\cdot\\mathbf v,\\\\\nW_{\\rm net}&amp;=\\Delta K,\n&amp;\n\\mathbf F&amp;=-\\nabla U,\\\\\nE&amp;=K+U,\n&amp;\n\\mathbf p&amp;=m\\mathbf v,\\\\\n\\mathbf J&amp;=\\Delta\\mathbf p,\n&amp;\n\\mathbf F&amp;=\\frac{d\\mathbf p}{dt}.\n\\end{aligned}\n$$</div><p><strong>Gravitation and rotation / 引力与转动</strong></p><div class=\"math-display\">$$\n\\begin{aligned}\nF_g&amp;=\\frac{GmM}{r^2},\n&amp;\nU_g&amp;=-\\frac{GmM}{r},\\\\\nv_{\\rm orbit}&amp;=\\sqrt{\\frac{GM}{r}},\n&amp;\nT_{\\rm orbit}&amp;=2\\pi\\sqrt{\\frac{r^3}{GM}},\\\\\nv_{\\rm esc}&amp;=\\sqrt{\\frac{2GM}{R}},\n&amp;\n\\boldsymbol\\tau&amp;=\\mathbf r\\times\\mathbf F,\\\\\n\\sum\\tau&amp;=I\\alpha,\n&amp;\nI&amp;=\\int r^2\\,dm,\\\\\nI&amp;=I_{\\rm cm}+Md^2,\n&amp;\nK_{\\rm rot}&amp;=\\frac{1}{2}I\\omega^2,\\\\\n\\mathbf L&amp;=\\mathbf r\\times\\mathbf p,\n&amp;\nL_{\\rm fixed\\,axis}&amp;=I\\omega.\n\\end{aligned}\n$$</div><p><strong>Rolling and oscillation / 滚动与振动</strong></p><div class=\"math-display\">$$\n\\begin{aligned}\nv_{\\rm cm}&amp;=R\\omega,\n&amp;\na_{\\rm cm}&amp;=R\\alpha,\\\\\n\\ddot x+\\omega^2x&amp;=0,\n&amp;\nx(t)&amp;=A\\cos(\\omega t+\\phi),\\\\\n\\omega_{\\rm spring}&amp;=\\sqrt{\\frac{k}{m}},\n&amp;\n\\omega_{\\rm pendulum}&amp;=\\sqrt{\\frac{g}{L}},\\\\\nm\\ddot x+b\\dot x+kx&amp;=0,\n&amp;\nm\\ddot x+b\\dot x+kx&amp;=F_0\\cos(\\omega_d t).\n\\end{aligned}\n$$</div><p><strong>Waves / 波动</strong></p><div class=\"math-display\">$$\n\\begin{aligned}\ny_{\\rm right}&amp;=f(x-vt),\n&amp;\ny_{\\rm left}&amp;=f(x+vt),\\\\\n\\frac{\\partial^2y}{\\partial t^2}\n&amp;=v^2\\frac{\\partial^2y}{\\partial x^2},\n&amp;\nv_{\\rm string}&amp;=\\sqrt{\\frac{T}{\\mu}},\\\\\ny(x,t)&amp;=A\\sin(kx-\\omega t+\\phi),\n&amp;\nk&amp;=\\frac{2\\pi}{\\lambda},\\\\\n\\omega&amp;=2\\pi f,\n&amp;\nv&amp;=\\frac{\\omega}{k}=\\lambda f,\\\\\n\\lambda_n&amp;=\\frac{2L}{n},\n&amp;\nf_n&amp;=\\frac{nv}{2L},\\\\\nf_{\\rm beat}&amp;=|f_1-f_2|.\n\\end{aligned}\n$$</div><h4 id=\"附件\">附件<a class=\"heading-anchor\" href=\"#附件\" data-heading-id=\"附件\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><div class=\"entry-file\"><a class=\"download-button\" href=\"files/2026-04-25-physics-i-midterm-review/普物I期中复习提纲-力学全覆盖版.pdf\" download><span>下载 / 预览 PDF</span><small>普物I期中复习提纲-力学全覆盖版.pdf</small></a><details class=\"file-preview\"><summary>Preview / 预览</summary><iframe src=\"files/2026-04-25-physics-i-midterm-review/普物I期中复习提纲-力学全覆盖版.pdf\" title=\"普物I期中复习提纲-力学全覆盖版.pdf\" loading=\"lazy\"></iframe></details></div>",
      "headings": [
        {
          "id": "general-physics-i-midterm-review-outline-普物-i-期中复习提纲-mechanics-讲义全覆盖版",
          "title": "General Physics I Midterm Review Outline / 普物 I 期中复习提纲（Mechanics 讲义全覆盖版）",
          "level": 4
        },
        {
          "id": "how-to-use-this-outline-使用方式",
          "title": "How To Use This Outline / 使用方式",
          "level": 4
        },
        {
          "id": "reference-book-coverage-map-参考书覆盖地图",
          "title": "Reference Book Coverage Map / 参考书覆盖地图",
          "level": 4
        },
        {
          "id": "ch-1-kinematics-运动学",
          "title": "Ch. 1 Kinematics / 运动学",
          "level": 4
        },
        {
          "id": "1-1-motion-in-one-dimension-一维运动",
          "title": "1.1 Motion in One Dimension / 一维运动",
          "level": 4
        },
        {
          "id": "1-2-vectors-矢量",
          "title": "1.2 Vectors / 矢量",
          "level": 4
        },
        {
          "id": "1-3-motion-in-higher-dimensions-高维运动",
          "title": "1.3 Motion in Higher Dimensions / 高维运动",
          "level": 4
        },
        {
          "id": "1-4-frame-of-reference-参考系",
          "title": "1.4 Frame of Reference / 参考系",
          "level": 4
        },
        {
          "id": "ch-2-newton-s-laws-of-motion-牛顿运动定律",
          "title": "Ch. 2 Newton's Laws of Motion / 牛顿运动定律",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "ch-3-work-and-energy-功和能量",
          "title": "Ch. 3 Work and Energy / 功和能量",
          "level": 4
        },
        {
          "id": "3-1-generic-forces-一般力下的运动",
          "title": "3.1 Generic Forces / 一般力下的运动",
          "level": 4
        },
        {
          "id": "3-2-work-and-power-功和功率",
          "title": "3.2 Work and Power / 功和功率",
          "level": 4
        },
        {
          "id": "3-3-work-kinetic-energy-theorem-动能定理",
          "title": "3.3 Work-Kinetic Energy Theorem / 动能定理",
          "level": 4
        },
        {
          "id": "3-4-3-6-potential-and-energy-conservation-势能与能量守恒",
          "title": "3.4-3.6 Potential and Energy Conservation / 势能与能量守恒",
          "level": 4
        },
        {
          "id": "3-7-equilibrium-平衡",
          "title": "3.7 Equilibrium / 平衡",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法-2",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-2",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "ch-4-momentum-动量",
          "title": "Ch. 4 Momentum / 动量",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-2",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法-3",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-3",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "ch-5-the-law-of-gravitation-万有引力定律",
          "title": "Ch. 5 The Law of Gravitation / 万有引力定律",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-3",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法-4",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-4",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "ch-6-rigid-bodies-刚体",
          "title": "Ch. 6 Rigid Bodies / 刚体",
          "level": 4
        },
        {
          "id": "6-1-rotational-kinematics-转动运动学",
          "title": "6.1 Rotational Kinematics / 转动运动学",
          "level": 4
        },
        {
          "id": "6-2-rotational-dynamics-转动动力学",
          "title": "6.2 Rotational Dynamics / 转动动力学",
          "level": 4
        },
        {
          "id": "6-3-rolling-滚动",
          "title": "6.3 Rolling / 滚动",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法-5",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-5",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "ch-7-angular-momentum-角动量",
          "title": "Ch. 7 Angular Momentum / 角动量",
          "level": 4
        },
        {
          "id": "knowledge-points-知识点-4",
          "title": "Knowledge Points / 知识点",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法-6",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-6",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "ch-8-simple-harmonic-motion-简谐运动",
          "title": "Ch. 8 Simple Harmonic Motion / 简谐运动",
          "level": 4
        },
        {
          "id": "8-1-equilibrium-平衡",
          "title": "8.1 Equilibrium / 平衡",
          "level": 4
        },
        {
          "id": "8-2-harmonic-oscillator-and-shm-谐振子与简谐运动",
          "title": "8.2 Harmonic Oscillator and SHM / 谐振子与简谐运动",
          "level": 4
        },
        {
          "id": "8-3-motion-near-stable-equilibrium-稳定平衡附近的小振动",
          "title": "8.3 Motion Near Stable Equilibrium / 稳定平衡附近的小振动",
          "level": 4
        },
        {
          "id": "8-4-damped-oscillator-阻尼振动",
          "title": "8.4 Damped Oscillator / 阻尼振动",
          "level": 4
        },
        {
          "id": "8-5-forced-oscillator-受迫振动",
          "title": "8.5 Forced Oscillator / 受迫振动",
          "level": 4
        },
        {
          "id": "8-6-coupled-oscillators-and-normal-modes-耦合振子与简正模",
          "title": "8.6 Coupled Oscillators and Normal Modes / 耦合振子与简正模",
          "level": 4
        },
        {
          "id": "8-7-molecules-and-solids-分子与固体",
          "title": "8.7 Molecules and Solids / 分子与固体",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法-7",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-7",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "ch-9-wave-motion-波动",
          "title": "Ch. 9 Wave Motion / 波动",
          "level": 4
        },
        {
          "id": "9-1-9-2-introduction-and-wave-function-波的引入与波函数",
          "title": "9.1-9.2 Introduction and Wave Function / 波的引入与波函数",
          "level": 4
        },
        {
          "id": "9-3-superposition-and-interference-叠加与干涉",
          "title": "9.3 Superposition and Interference / 叠加与干涉",
          "level": 4
        },
        {
          "id": "9-4-transmission-and-reflection-透射与反射",
          "title": "9.4 Transmission and Reflection / 透射与反射",
          "level": 4
        },
        {
          "id": "9-5-waves-in-a-solid-固体中的波",
          "title": "9.5 Waves in a Solid / 固体中的波",
          "level": 4
        },
        {
          "id": "9-6-linear-wave-equation-线性波动方程",
          "title": "9.6 Linear Wave Equation / 线性波动方程",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法-8",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-8",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "ch-10-sinusoidal-waves-正弦波",
          "title": "Ch. 10 Sinusoidal Waves / 正弦波",
          "level": 4
        },
        {
          "id": "10-1-sinusoidal-wave-function-正弦波函数",
          "title": "10.1 Sinusoidal Wave Function / 正弦波函数",
          "level": 4
        },
        {
          "id": "10-2-energy-transfer-能量传输",
          "title": "10.2 Energy Transfer / 能量传输",
          "level": 4
        },
        {
          "id": "10-3-interference-and-beating-干涉与拍",
          "title": "10.3 Interference and Beating / 干涉与拍",
          "level": 4
        },
        {
          "id": "10-4-standing-waves-驻波",
          "title": "10.4 Standing Waves / 驻波",
          "level": 4
        },
        {
          "id": "10-5-fourier-analysis-傅里叶分析",
          "title": "10.5 Fourier Analysis / 傅里叶分析",
          "level": 4
        },
        {
          "id": "10-6-doppler-effect-多普勒效应",
          "title": "10.6 Doppler Effect / 多普勒效应",
          "level": 4
        },
        {
          "id": "problem-methods-解题方法-9",
          "title": "Problem Methods / 解题方法",
          "level": 4
        },
        {
          "id": "vocabulary-生词-9",
          "title": "Vocabulary / 生词",
          "level": 4
        },
        {
          "id": "high-frequency-exam-templates-高频考试题型模板",
          "title": "High-Frequency Exam Templates / 高频考试题型模板",
          "level": 4
        },
        {
          "id": "template-a-free-body-and-constraint-problems-受力与约束题",
          "title": "Template A: Free-Body and Constraint Problems / 受力与约束题",
          "level": 4
        },
        {
          "id": "template-b-energy-problems-能量题",
          "title": "Template B: Energy Problems / 能量题",
          "level": 4
        },
        {
          "id": "template-c-collision-problems-碰撞题",
          "title": "Template C: Collision Problems / 碰撞题",
          "level": 4
        },
        {
          "id": "template-d-central-force-and-perturbed-orbit-中心力与受扰轨道",
          "title": "Template D: Central Force and Perturbed Orbit / 中心力与受扰轨道",
          "level": 4
        },
        {
          "id": "template-e-rolling-rigid-body-滚动刚体",
          "title": "Template E: Rolling Rigid Body / 滚动刚体",
          "level": 4
        },
        {
          "id": "template-f-coupled-oscillators-耦合振动",
          "title": "Template F: Coupled Oscillators / 耦合振动",
          "level": 4
        },
        {
          "id": "template-g-wave-equation-波动方程",
          "title": "Template G: Wave Equation / 波动方程",
          "level": 4
        },
        {
          "id": "formula-checklist-公式总表",
          "title": "Formula Checklist / 公式总表",
          "level": 4
        },
        {
          "id": "附件",
          "title": "附件",
          "level": 4
        }
      ],
      "excerpt": "General Physics I Midterm Review Outline / 普物 I 期中复习提纲（Mechanics 讲义全覆盖版） Main reference / 主参考：普物I/reference books/mechan...",
      "readingMinutes": 14,
      "createdAt": "2026-04-25T00:00:00.000Z"
    },
    {
      "id": "notes/随笔/2026-04-26-我就这么弄这个破网站.md",
      "slug": "2026-04-26-我就这么弄这个破网站",
      "source": "post",
      "kind": "notes",
      "title": "我就这么弄这个破网站",
      "publishedIndex": 11,
      "stage": "Notes 笔记",
      "tag": "随笔",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<p>又玩了一早上AI</p>",
      "headings": [],
      "excerpt": "又玩了一早上AI",
      "readingMinutes": 1,
      "createdAt": "2026-04-26T00:00:00.000Z"
    }
  ],
  "videos": [
    {
      "id": "life/2026-04-24-04-travel-jinan&taishan.md",
      "slug": "2026-04-24-04-travel-jinan-taishan",
      "source": "post",
      "kind": "videos",
      "title": "清明de济南与泰山",
      "publishedIndex": 3,
      "stage": "Project 项目",
      "tag": "旅游",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<p>为了这次出行，清明前我真的付出了太多～～</p><h4 id=\"趵突泉\">趵突泉<a class=\"heading-anchor\" href=\"#趵突泉\" data-heading-id=\"趵突泉\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>竟然只是三个冒水的洞？！</p><figure class=\"entry-media\"><img src=\"media/2026-04-24-travel-jinan-taishan/baotuquan.jpeg\" alt=\"趵突泉\" loading=\"lazy\" /><figcaption>趵突泉</figcaption></figure><h4 id=\"夜里的泰山\">夜里的泰山<a class=\"heading-anchor\" href=\"#夜里的泰山\" data-heading-id=\"夜里的泰山\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><figure class=\"entry-media\"><img src=\"media/2026-04-24-travel-jinan-taishan/yewantaishan.jpeg\" alt=\"夜里的泰山\" loading=\"lazy\" /><figcaption>夜里的泰山</figcaption></figure><h4 id=\"泰山日出\">泰山日出<a class=\"heading-anchor\" href=\"#泰山日出\" data-heading-id=\"泰山日出\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>“日上，正赤如丹，下有红光动摇承之”</p><figure class=\"entry-media\"><img src=\"media/2026-04-24-travel-jinan-taishan/taishanrichu.jpeg\" alt=\"泰山日出\" loading=\"lazy\" /><figcaption>泰山日出</figcaption></figure>",
      "headings": [
        {
          "id": "趵突泉",
          "title": "趵突泉",
          "level": 4
        },
        {
          "id": "夜里的泰山",
          "title": "夜里的泰山",
          "level": 4
        },
        {
          "id": "泰山日出",
          "title": "泰山日出",
          "level": 4
        }
      ],
      "excerpt": "为了这次出行，清明前我真的付出了太多～～ 趵突泉 竟然只是三个冒水的洞？！ 夜里的泰山 泰山日出 “日上，正赤如丹，下有红光动摇承之”",
      "readingMinutes": 1,
      "createdAt": "2026-04-04T00:00:00.000Z"
    },
    {
      "id": "life/2026-04-25-真好-又浪费了一天.md",
      "slug": "2026-04-25-真好-又浪费了一天",
      "source": "post",
      "kind": "videos",
      "title": "真好，又浪费了一天",
      "publishedIndex": 10,
      "stage": "Life 生活",
      "tag": "日常",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<h4 id=\"我真服了\">我真服了<a class=\"heading-anchor\" href=\"#我真服了\" data-heading-id=\"我真服了\" aria-label=\"Copy section link / 复制小节链接\">#</a></h4><p>今天的 Chatgpt 让我很恼火，今天的 General Physics 更是火上浇油</p><p>一边复习，一边对着电脑和他互动。不仅复习不成，功能也没给我正确实现（我已急哭）</p><p>好在最后也是成功优化了 UI 界面，不过下周三要考普物期中了，我怎么还没复习完？？？</p><p>啥也不是，我含泪复习去了～</p>",
      "headings": [
        {
          "id": "我真服了",
          "title": "我真服了",
          "level": 4
        }
      ],
      "excerpt": "我真服了 今天的 Chatgpt 让我很恼火，今天的 General Physics 更是火上浇油 一边复习，一边对着电脑和他互动。不仅复习不成，功能也没给我正确实现（我已急哭） 好在最后也是成功优化了 UI 界面，不过下周三要考普物期中了...",
      "readingMinutes": 1,
      "createdAt": "2026-04-25T00:00:00.000Z"
    },
    {
      "id": "life/2026-04-26-这个后端推送给我弄死了.md",
      "slug": "2026-04-26-这个后端推送给我弄死了",
      "source": "post",
      "kind": "videos",
      "title": "这个后端推送给我弄死了",
      "publishedIndex": 12,
      "stage": "Life Log 生活记录",
      "tag": "随笔",
      "author": "ZijunQiu-a",
      "url": "",
      "html": "<p>我真花了一早上 现在午饭还没吃</p>",
      "headings": [],
      "excerpt": "我真花了一早上 现在午饭还没吃",
      "readingMinutes": 1,
      "createdAt": "2026-04-26T00:00:00.000Z"
    }
  ]
};
