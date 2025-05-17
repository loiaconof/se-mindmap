# AWS IAM: Users & Groups

AWS IAM ( Identity and Access Management ), is a service that allows to manage users and groups inside the organization.

**Users** are people within the organization and can be grouped, altought **Groups** cannot contain other groups.

## Policies

Users or Groups can be assigned JSON documents called **policies** to handle permissions. There policies define the **permissions** of the users applying the **least privilage principle** ( don't give more permissions than a user needs )

::: details Policy Example
```json
{
  "Version": "2012-10-17", // policy language version, always include “2012-10-17”
  "Id": "S3-Account-Permissions", // an identifier for the policy (optional)
  "Statement": [ // one or more individual statements (required)
    { 
      "Sid": "1", // an identifier for the statement (optional)
      "Effect": "Allow", // whether the statement allows or denies access (Allow, Deny)
      "Principal": { // account/user/role to which this policy applied to
        "AWS": ["arn:aws:aim::123456789012:root"]
      },
      "Action": [ // list of actions this policy allows or denies
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": [ // list of resources to which the actions applied to
        "arn:aws:s3:::mybucket/*"
      ]
    }
  ]
}
```
:::

## Password Policy 

IAM lets you set rules for strong passwords, like minimum length, complexity, expiration, and reuse prevention.

## Security Tools

- **IAM Credential Report** ( account level )
  - a report that lists all your account's users and the status of their various credentials
- **IAM Last Access** ( user level )
  - Access Advisor show the service permissions granted to a user and when those serviceswere last accessed
  - you can use this information to revise your policies


## Guidelines and Best Practices

- Don't use root account except for AWS account setup
- One physical user = One AWS user
- Manage security at group level, assign users to groups and assign permissions to groups
- Security first of all, strong password policy and enforce use MFA
- Create and use Roles for giving permissions to AWS services
- Audit permissions of your account using IAM Security Tools
