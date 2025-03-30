# IAM

This service allow to manage users and groups inside the organisation.

## Policies

Allows users or a group to handle services.

```json
{
  "Version": "2012-10-17",// versione del documento della policy
  "Statement": [
    {
      "Effect": "Allow",  // consente l’azione specificata
      "Action": [         // abilita l’azione di lettura (GetObject) su S3
        "s3:GetObject"
      ],
      "Resource": [       // limita la policy agli oggetti all'interno del bucket example-bucket
        "arn:aws:s3:::example-bucket/*"
      ]
    }
  ]
}
```

## Security Tools
˚
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
