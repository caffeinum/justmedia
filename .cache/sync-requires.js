// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/templates/Post.jsx")),
  "component---src-templates-resume-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/templates/Resume.jsx")),
  "component---src-templates-portfolio-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/templates/Portfolio.jsx")),
  "component---src-templates-portfolios-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/templates/Portfolios.jsx")),
  "component---src-templates-list-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/templates/List.jsx")),
  "component---src-templates-tagged-list-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/templates/TaggedList.jsx")),
  "component---src-templates-categorized-list-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/templates/CategorizedList.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/nikitadementev/Desktop/work/justmedia/src/pages/index.jsx"))
}

