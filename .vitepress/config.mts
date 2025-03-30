import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "loiaconof-se-mindmap",
  description: "A VitePress Site",
  base: '/se-mindmap/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'cloud',
        items: [
          { 
            text: 'aws', 
            link: '/docs/cloud/aws/index.md', 
            collapsed: true, 
            items: [
              { text: 'IAM', link: '/docs/cloud/aws/services/iam.md' },
              { text: 'EC2', link: '/docs/cloud/aws/services/ec2.md' },
            ] 
          },
        ]
      },
      {
        text: 'devops',
        items: [
          { text: 'docker', link: '/docs/devops/docker/index.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
