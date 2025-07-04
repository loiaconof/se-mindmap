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
            { text: 'Aurora', link: '/docs/cloud/aws/services/aurora.md' },
            { text: 'Cloud Shell', link: '/docs/cloud/aws/services/cloud-shell.md' },
            { 
              text: 'EC2', 
              link: '/docs/cloud/aws/services/ec2/index.md',
              collapsed: true,
              items: [
                { text: 'Auto Scaling Group', link: '/docs/cloud/aws/services/ec2/autoscaling-group.md' },
                { text: 'Load Balancers', link: '/docs/cloud/aws/services/ec2/load-balancers.md' },
                { text: 'Storage', link: '/docs/cloud/aws/services/ec2/storage.md' },
              ],
            },
            { text: 'IAM', link: '/docs/cloud/aws/services/iam.md' },
            { text: 'Relational Database Service', link: '/docs/cloud/aws/services/rds.md' },
            { text: 'Route 53', link: '/docs/cloud/aws/services/route-53.md' },
          ],
        },
      ]
    },
  ]
}
