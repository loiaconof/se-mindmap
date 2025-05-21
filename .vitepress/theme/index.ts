import DefaultTheme from 'vitepress/theme'
import VueMermaidString from 'vue-mermaid-string'

export default {
  Layout: DefaultTheme.Layout,
  enhanceApp({ app }) {
    app.component('vue-mermaid-string', VueMermaidString)
  },
}
