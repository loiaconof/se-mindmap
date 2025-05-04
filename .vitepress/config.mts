import { defineConfig } from 'vitepress'

const dataSystems = {
  text: 'Data Systems',
  items: [
    { 
      text: 'Reliable, Scalable and Maintainable Applications', 
      link: '/docs/data-systems/index.md',
      collapsed: true,
      items: [
        { text: 'Reliability', link: '/docs/data-systems/concerns/reliability.md' },
        { text: 'Scalability', link: '/docs/data-systems/concerns/scalability.md' },
        { text: 'Maintainability', link: '/docs/data-systems/concerns/maintainability.md' },
      ],
    },
  ]
}

const softwareDesignArchitecture = {
  text: 'Software Design / Architecture',
  items: [
    { 
      text: 'Domain-Driven Design', 
      link: '/docs/software-design-architecture/ddd/index.md',
      collapsed: true,
      items: [
        { text: 'Strategic Design', link: '/docs/software-design-architecture/ddd/strategic-design.md' },
        { text: 'Tactical Design', link: '/docs/software-design-architecture/ddd/tactical-design.md' },
        { text: 'Event Storming', link: '/docs/software-design-architecture/ddd/event-storming.md' },
        { text: 'Tactical Modernization', link: '/docs/software-design-architecture/ddd/tactical-modernization.md' },
      ],
    },
  ]
}
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
      { ...dataSystems },
      {
        text: 'devops',
        items: [
          { text: 'docker', link: '/docs/devops/docker/index.md' },
          { text: 'kubernetes', link: '/docs/devops/kubernetes/index.md' },
        ]
      },
      { ...softwareDesignArchitecture },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/loiaconof/se-mindmap' }
    ]
  }
})
