<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" />
  <xsl:template match="/">
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title><xsl:value-of select="/rss/channel/title" /> RSS</title>
        <style>
          :root {
            color-scheme: light;
            --paper: #f3f7f8;
            --paper-strong: #fffefd;
            --ink: #10232e;
            --muted: #5c6f78;
            --line: #d5e3e8;
            --teal: #147b91;
            --teal-dark: #0e4e66;
            --coral: #c35d6f;
            --moss: #5b796d;
            --gold: #caa14c;
            --violet: #6761a8;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-width: 320px;
            background:
              radial-gradient(circle at 16% 12%, rgba(20, 123, 145, 0.14), transparent 28%),
              radial-gradient(circle at 84% 20%, rgba(103, 97, 168, 0.12), transparent 26%),
              linear-gradient(315deg, rgba(195, 93, 111, 0.09), transparent 28%),
              var(--paper);
            color: var(--ink);
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
              "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
            line-height: 1.55;
          }

          main {
            width: min(920px, calc(100% - 32px));
            margin: 0 auto;
            padding: 40px 0 64px;
          }

          header {
            display: grid;
            gap: 16px;
            border: 1px solid rgba(16, 35, 46, 0.12);
            border-radius: 8px;
            padding: clamp(22px, 5vw, 42px);
            background:
              linear-gradient(135deg, rgba(20, 123, 145, 0.12), transparent 52%),
              rgba(255, 254, 253, 0.92);
            box-shadow: 0 18px 42px rgba(16, 35, 46, 0.1);
          }

          .eyebrow {
            margin: 0;
            color: var(--coral);
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          h1 {
            margin: 0;
            color: var(--ink);
            font-size: clamp(34px, 8vw, 68px);
            line-height: 0.95;
          }

          p {
            margin: 0;
            color: var(--muted);
          }

          .feed-link {
            display: inline-flex;
            width: fit-content;
            border: 1px solid rgba(20, 123, 145, 0.18);
            border-radius: 999px;
            padding: 9px 13px;
            background: rgba(255, 254, 253, 0.76);
            color: var(--teal-dark);
            font-weight: 900;
            text-decoration: none;
          }

          .feed-link:hover,
          .feed-link:focus-visible {
            border-color: rgba(14, 78, 102, 0.36);
            outline: 0;
          }

          .posts {
            display: grid;
            gap: 14px;
            margin-top: 22px;
          }

          article {
            display: grid;
            gap: 9px;
            border: 1px solid rgba(16, 35, 46, 0.12);
            border-radius: 8px;
            padding: 18px;
            background: rgba(255, 254, 253, 0.88);
            box-shadow: 0 10px 22px rgba(16, 35, 46, 0.06);
          }

          article a {
            color: var(--ink);
            font-size: 20px;
            font-weight: 950;
            text-decoration: none;
          }

          article a:hover,
          article a:focus-visible {
            color: var(--teal-dark);
            outline: 0;
          }

          time {
            color: var(--muted);
            font-size: 12px;
            font-weight: 850;
          }

          footer {
            margin-top: 22px;
            color: var(--muted);
            font-size: 13px;
            font-weight: 800;
          }
        </style>
      </head>
      <body>
        <main>
          <header>
            <p class="eyebrow">RSS Feed / 订阅源</p>
            <h1><xsl:value-of select="/rss/channel/title" /></h1>
            <p><xsl:value-of select="/rss/channel/description" /></p>
            <p>把这个页面地址复制到 RSS 阅读器里，就可以订阅网站更新。</p>
            <a class="feed-link" href="index.html">Back to site / 返回网站</a>
          </header>

          <section class="posts" aria-label="Feed entries">
            <xsl:for-each select="/rss/channel/item">
              <article>
                <a>
                  <xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute>
                  <xsl:value-of select="title" />
                </a>
                <time><xsl:value-of select="pubDate" /></time>
                <p><xsl:value-of select="description" /></p>
              </article>
            </xsl:for-each>
          </section>

          <footer>
            <p>RSS readers will still receive the original XML feed.</p>
          </footer>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
