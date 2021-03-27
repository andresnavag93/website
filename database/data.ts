const data: Record<TProjectId, TProject> = {
  'bison-reserve': {
    id: 'bison-reserve',
    title: 'Bison Reserve',
    subtitle: 'Classes Reservation System',
    image: '/images/1.png',
    features: {
      industry: 'Health & Wellness',
      area: { name: 'Backend/API', color: 'red' },
      date: '2020',
      description: `Users belonging to a sports center or gym will be able to observe:
        disciplines taught, calendar of classes together with their schedule and coach,
        reservation of classes to be attended, score of classes in which a User
        participated, payment through the platform, registration of the latest payments
        made and news and relevant information from the sports center / gym.`,
      technologies: ['Node.js', 'PostgreSQL', 'AWS'],
      links: [
        ['Github', 'https://github.com/andresnavag93/bison-gym-api'],
        ['Web', 'http://test-bison.s3-website-us-east-1.amazonaws.com'],
      ],
    },
  },
}

export default data
