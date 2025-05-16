export const softwareDesignArchitecture = {
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
    {
      text: 'Event-Driven Architecture',
      link: '/docs/software-design-architecture/eda/index.md',
      collapsed: true,
      items: [
        { text: 'Events', link: '/docs/software-design-architecture/eda/events.md' },
      ],
    }
  ]
}
