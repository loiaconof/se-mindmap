import{G as l,a as s,o as n,g as e,ah as r,L as i,H as o,j as d}from"./chunks/framework.Ddlh_Zg3.js";const c=`
flowchart LR
    subgraph CLIENTS [Clients]
        direction TB
        Client1["👤"]
        Client2["👤"]
        Client3["👤"]
    end

    LB{"Load Balancer"}

    subgraph EC2S [EC2 Instances]
        direction TB
        EC2_1["EC2 Instance"]
        EC2_2["EC2 Instance"]
    end

    Client1 --> LB
    Client2 --> LB
    Client3 --> LB

    LB --> EC2_1
    LB --> EC2_2
`,g={class:"details custom-block"},m=JSON.parse('{"title":"Elastic Load Balancers (ELB)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/cloud/aws/services/ec2/load-balancers.md","filePath":"docs/cloud/aws/services/ec2/load-balancers.md"}'),u={name:"docs/cloud/aws/services/ec2/load-balancers.md"},L=Object.assign(u,{setup(p){return(b,a)=>{const t=l("vue-mermaid-string");return n(),s("div",null,[a[1]||(a[1]=e("h1",{id:"elastic-load-balancers-elb",tabindex:"-1"},[i("Elastic Load Balancers (ELB) "),e("a",{class:"header-anchor",href:"#elastic-load-balancers-elb","aria-label":"Permalink to “Elastic Load Balancers (ELB)”"},"​")],-1)),a[2]||(a[2]=e("p",null,"Load Balances are servers that forward traffic to multiple servers (e.g. EC2 instances) downstream.",-1)),e("details",g,[a[0]||(a[0]=e("summary",null,"Diagram",-1)),o(t,{value:d(c)},null,8,["value"])]),a[3]||(a[3]=r("",19))])}}});export{m as __pageData,L as default};
