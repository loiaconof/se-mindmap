export const cloud = {
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
}
