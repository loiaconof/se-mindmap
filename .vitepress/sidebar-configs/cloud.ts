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
            { 
              text: 'EC2', 
              link: '/docs/cloud/aws/services/ec2/index.md',
              collapsed: true,
              items: [
                { text: 'Storage', link: '/docs/cloud/aws/services/ec2/storage.md' },
                { text: 'Load Balancers', link: '/docs/cloud/aws/services/ec2/load-balancers.md' },
                { text: 'Auto Scaling Group', link: '/docs/cloud/aws/services/ec2/autoscaling-group.md' },
              ],
            },
            { text: 'IAM', link: '/docs/cloud/aws/services/iam.md' },
          ],
        },
      ]
    },
  ]
}
