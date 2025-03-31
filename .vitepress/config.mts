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
      { text: 'Index', link: '/docs/index.md' },
    ],

    sidebar: [
      {
        text: 'cloud',
        items: [
          {
            text: 'services',
            link: '/docs/cloud/services/index.md',
          },
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
        collapsed: true,
        items: [
          { text: 'docker', link: '/docs/devops/docker/index.md' },
          { text: 'kubernetes', link: '/docs/devops/kubernetes/index.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/loiaconof/se-mindmap' }
    ]
  }
})
