# AWS Identity and Access Management (IAM)

## Overview

**AWS Identity and Access Management (IAM)** is a web service that enables secure control over access to AWS services and resources. It allows you to manage permissions by creating and managing users, groups, roles, and policies.

## Key Concepts

### 1. Users
- Represents an individual person

### 2. Groups
- A collection of IAM users
- Permissions assigned to the group are inherited by its users
- Simplifies permission management for multiple users
- Groups can not contain other groups

### 3. Roles
- An IAM identity with a set of permissions, like a service.
- Can be assumed by:
  - IAM users
  - Applications
  - AWS services
  - Users from other AWS accounts or identity providers
- Provides temporary security credentials.

### 4. Policies
- JSON documents that define permissions.
- Can be:
  - **Managed Policies**
    - AWS-managed (predefined by AWS)
    - Customer-managed (created by you)
  - **Inline Policies**
    - Embedded directly into a single user, group, or role

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

### 5. Identity Providers (IdPs)

- Used for identity federation.

## Security Tools

- **IAM Credential Report** ( account level )
  - a report that lists all your account's users and the status of their various credentials
- **IAM Last Access** ( user level )
  - Access Advisor show the service permissions granted to a user and when those serviceswere last accessed
  - you can use this information to revise your policies

## Common IAM Use Cases

- Create IAM users for individual access.
- Assign users to groups to manage permissions.
- Use roles to allow applications to access resources.
- Use policies to define granular access controls.
- Enable cross-account access using IAM roles.
- Configure multi-factor authentication (MFA) for extra security.

## Security Best Practices

- **Least Privilege**: Grant only the permissions required to perform tasks.
- **Manage security at group level**: assign users to groups and assign permissions to groups
- **Use Roles for Applications**: Avoid using long-term access keys.
- **Enable MFA**: Add an extra layer of security for users.
- **Rotate Credentials Regularly**: Enforce best practices for key and password rotation.
- **Monitor with CloudTrail**: Track IAM activity and changes.
- **Audit permissions**: of your account using IAM Security Tools


## Resources

- [IAM Documentation (AWS Official)](https://docs.aws.amazon.com/IAM/latest/UserGuide/)
- [IAM Policy Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html)
- [Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

