export const cloud = {
  text: 'cloud',
  items: [
    {
      text: 'Services',
      link: '/docs/cloud/services/index.md',
    },
    { 
      text: 'AWS', 
      link: '/docs/cloud/aws/index.md', 
      collapsed: true, 
      items: [
        {
          text: 'Global Infrastucture',
          link: '/docs/cloud/aws/global-infrastucture/index.md',
        },
        {
          text: 'Services',
          collapsed: true,
          items: [
            { text: 'Cloud Shell', link: '/docs/cloud/aws/services/cloud-shell.md' },
            { text: 'EC2', link: '/docs/cloud/aws/services/ec2.md' },
            { text: 'IAM', link: '/docs/cloud/aws/services/iam.md' },
          ],
        },
      ]
    },
  ]
}
