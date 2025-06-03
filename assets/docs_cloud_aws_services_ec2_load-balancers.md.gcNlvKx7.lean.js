import{G as s,a as n,o as r,g as e,ah as i,L as t,H as o,j as d}from"./chunks/framework.Ddlh_Zg3.js";const c=`
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
`,g={class:"details custom-block"},m=JSON.parse('{"title":"Elastic Load Balancers (ELB)","description":"","frontmatter":{},"headers":[],"relativePath":"docs/cloud/aws/services/ec2/load-balancers.md","filePath":"docs/cloud/aws/services/ec2/load-balancers.md"}'),u={name:"docs/cloud/aws/services/ec2/load-balancers.md"},L=Object.assign(u,{setup(p){return(b,a)=>{const l=s("vue-mermaid-string");return r(),n("div",null,[a[1]||(a[1]=e("h1",{id:"elastic-load-balancers-elb",tabindex:"-1"},[t("Elastic Load Balancers (ELB) "),e("a",{class:"header-anchor",href:"#elastic-load-balancers-elb","aria-label":"Permalink to “Elastic Load Balancers (ELB)”"},"​")],-1)),a[2]||(a[2]=e("h2",{id:"overview",tabindex:"-1"},[t("Overview "),e("a",{class:"header-anchor",href:"#overview","aria-label":"Permalink to “Overview”"},"​")],-1)),a[3]||(a[3]=e("p",null,"Load Balances are servers that forward traffic to multiple servers (e.g. EC2 instances) downstream.",-1)),e("details",g,[a[0]||(a[0]=e("summary",null,"Diagram",-1)),o(l,{value:d(c)},null,8,["value"])]),a[4]||(a[4]=i("",19))])}}});export{m as __pageData,L as default};
