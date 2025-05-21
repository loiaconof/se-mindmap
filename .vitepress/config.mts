import { defineConfig } from 'vitepress'
import { cloud } from './sidebar-configs/cloud'
import { dataSystems } from './sidebar-configs/data-systems'
import { softwareDesignArchitecture } from './sidebar-configs/software-design-architecture'
import { devops } from './sidebar-configs/devops'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "loiaconof-se-mindmap",
  description: "A VitePress Site",
  base: '/se-mindmap/',
  themeConfig: {
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Index', link: '/docs/index.md' },
    ],

    sidebar: [
      { ...cloud },
      { ...dataSystems },
      { ...devops },
      { ...softwareDesignArchitecture },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/loiaconof/se-mindmap' }
    ]
  }
})
