export const dataFullStack: Record<TProjectId, TProject> = {
  'FS-marvel-world': {
    id: 'FS-marvel-world',
    title: 'Marvel World',
    subtitle: 'Website',
    image: '/images/fullstack/marvel-world.jpg',
    area: { name: 'Front-End', color: 'blue' },
    date: '2020',
    features: {
      classification: 'Comics',
      description: `Marvel concept web page where you can see existing characters, comics, and stories, as well as bookmark and uncheck favorites. The best practices in development are used for a good score in Performance, web accessibility, PWA, and best practices in the lighthouse.`,
      technologies: [
        'React.js',
        'Webpack',
        'Heroku',
        'Redux',
        'Styled Components',
      ],
      links: [
        ['Github', 'https://github.com/andresnavag93/marvel-world'],
        ['Web', 'https://the-marvel-world.herokuapp.com/'],
      ],
    },
  },
  'FS-bison-gym': {
    id: 'FS-bison-gym',
    title: 'Bison Reserve',
    subtitle: 'Booking System API',
    image: '/images/fullstack/bison-gym.jpg',
    area: { name: 'Back-End', color: 'red' },
    date: '2020',
    features: {
      client: 'Wayu Inc.',
      classification: 'Gym, Health & Wellness',
      'developed in': 'Wayu Inc.',
      description: `Users belonging to a sports center or gym will be able to observe: disciplines taught, calendar of classes together with their schedule and coach, reservation of classes to be attended, the score of classes in which a User participated, payment through the platform, registration of the latest payments made and news and relevant information from the sports center/gym.`,
      technologies: ['Node.js', 'PostgreSQL', 'AWS'],
      links: [['Web', 'http://test-bison.s3-website-us-east-1.amazonaws.com']],
    },
  },
  'FS-nativapps-tutorials': {
    id: 'FS-nativapps-tutorials',
    title: 'NativApps Tutorials',
    subtitle: 'Landing Web',
    image: '/images/fullstack/nativapps-tutorials.jpg',
    area: { name: 'Front-End', color: 'blue' },
    date: '2020',
    features: {
      classification: 'Education & Tutorials',
      description: `Landing web of services dedicated to the exhibition of online tutorials.
        Informative banners, client logos, plans and promotions are displayed.`,
      technologies: ['React.js', 'Webpack', 'AWS'],
      links: [
        ['Github', 'https://github.com/andresnavag93/nativapps-tutorials'],
        ['Web', 'https://andresnavag93.github.io/nativapps-tutorials/'],
      ],
    },
  },
  'FS-wayu-mx': {
    id: 'FS-wayu-mx',
    title: 'Wayu Inc (Mexico)',
    subtitle: 'Landing Web',
    image: '/images/fullstack/wayu-mx.jpg',
    area: { name: 'Front-End', color: 'blue' },
    date: '2019',
    features: {
      client: 'Wayu Inc.',
      classification: 'Marketing',
      'developed in': 'Wayu Inc.',
      description: `Corporate website with landing web structure dedicated to digital marketing. You can view the different sections of who we are, descriptions of products or plans, and testimonials from companies that have enjoyed the digital marketing service.`,
      technologies: ['Javascript', 'React.Js'],
      links: [
        ['Github', 'https://github.com/andresnavag93/mexico-wayuinc'],
        ['Web', 'http://andresnavag93.github.io/mexico-wayuinc'],
      ],
    },
  },

  'FS-sloncare': {
    id: 'FS-sloncare',
    title: 'Sloncare',
    subtitle: 'Health & Care System API',
    image: '/images/fullstack/sloncare.jpg',
    area: { name: 'Back-End', color: 'red' },
    date: '2018',
    features: {
      client: 'Sloncare',
      classification: 'Medical Care',
      'developed in': 'Wayu Inc.',
      description: `Health savings system with a payment gateway, where different users can obtain services from doctors and/or clinics such as medical appointments, surgical operations, emergency tickets, among others.`,
      technologies: ['Ruby on Rails', 'PostgreSQL', 'AWS'],
      links: [
        ['Web', 'http://test-slon-care.s3-website.us-east-2.amazonaws.com/'],
      ],
    },
  },
  'FS-wayu': {
    id: 'FS-wayu',
    title: 'Wayu Inc',
    subtitle: 'Website',
    image: '/images/fullstack/wayu.jpg',
    area: { name: 'FrontEnd', color: 'blue' },
    date: '2018',
    features: {
      client: 'Wayu Inc.',
      classification: 'Software & Marketing',
      'developed in': 'Wayu Inc.',
      description: `Corporate website to offer different development services in
        technology, digital marketing and design. It also has a contact form, about us, and
        the different technologies with which they have worked.`,
      technologies: ['Javascript', 'Angular'],
      links: [
        [
          'Web',
          'http://test.wayuinc-webpage.s3-website-us-east-1.amazonaws.com',
        ],
      ],
    },
  },
  'FS-pavimenti': {
    id: 'FS-pavimenti',
    title: 'Pavimenti',
    subtitle: 'Ecommerce System API',
    image: '/images/fullstack/pavimenti.jpg',
    area: { name: 'Back-End', color: 'red' },
    date: '2018',
    features: {
      client: 'Pavimenti Store',
      classification: 'Construction Material',
      'developed in': 'Wayu Inc.',
      description: `Electronic commerce to sell construction materials. It has: user
        registration and login, store location, promotions, payment record, physical
        delivery or address of the products, and store contact.`,
      technologies: ['Node.js', 'PostgreSQL', 'AWS'],
      links: [['Web', 'https://www.pavimentistore.com']],
    },
  },
}
