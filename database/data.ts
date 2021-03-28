export const dataFullStack: Record<TProjectId, TProject> = {
  'FS-marvel-world': {
    id: 'FS-marvel-world',
    title: 'Marvel World',
    subtitle: 'Website',
    image: '/images/fullstack/marvel-world.jpg',
    area: { name: 'Front-End / Web', color: 'blue' },
    date: '2020',
    features: {
      industry: 'Comics',
      description: `Marvel concept web page where you can see existing characters,
      comics and stories, as well as bookmark and uncheck favorites. The best practices
      in development are used for a good score in Performance, web accessibility, PWA
      and best practices in lighthouse.`,
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
    subtitle: 'Booking System',
    image: '/images/fullstack/bison-gym.jpg',
    area: { name: 'Back-End / API', color: 'red' },
    date: '2020',
    features: {
      industry: 'Gym, Health & Wellness',
      description: `Users belonging to a sports center or gym will be able to observe:
        disciplines taught, calendar of classes together with their schedule and coach,
        reservation of classes to be attended, score of classes in which a User
        participated, payment through the platform, registration of the latest payments
        made and news and relevant information from the sports center / gym.`,
      technologies: ['Node.js', 'PostgreSQL', 'AWS'],
      links: [['Web', 'http://test-bison.s3-website-us-east-1.amazonaws.com']],
    },
  },
  'FS-nativapps-tutorials': {
    id: 'FS-nativapps-tutorials',
    title: 'NativApps Tutorials',
    subtitle: 'Landing Web',
    image: '/images/fullstack/nativapps-tutorials.jpg',
    area: { name: 'Front-End / Landing Web', color: 'blue' },
    date: '2020',
    features: {
      industry: 'Education & Tutorials',
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
    area: { name: 'Front-End / Landing Web', color: 'blue' },
    date: '2019',
    features: {
      industry: 'Marketing',
      description: `Corporate website with landing web structure dedicated to digital
      marketing. You can view the different sections of who we are, description of
      products or plans, and testimonials from companies that have enjoyed the digital
      marketing service.`,
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
    subtitle: 'Health & Care System',
    image: '/images/fullstack/sloncare.jpg',
    area: { name: 'Back-End / API', color: 'red' },
    date: '2018',
    features: {
      industry: 'Medical Care',
      description: `Health savings system with a payment gateway, where different
      users can obtain services from doctors and / or clinics such as medical
      appointments, surgical operations, emergency tickets, among others.`,
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
    area: { name: 'FrontEnd / Web (Collaborations)', color: 'blue' },
    date: '2018',
    features: {
      industry: 'Software && Marketing',
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
    subtitle: 'Ecommerce System',
    image: '/images/fullstack/pavimenti.jpg',
    area: { name: 'Back-End / API', color: 'red' },
    date: '2018',
    features: {
      industry: 'Construction Material',
      description: `Electronic commerce to sell construction materials. It has: user
      registration and login, store location, promotions, payment record, physical
      delivery or address of the products, and store contact.`,
      technologies: ['Node.js', 'PostgreSQL', 'AWS'],
      links: [['Web', 'https://www.pavimentistore.com']],
    },
  },
}

export const dataVideoGames: Record<TProjectId, TProject> = {
  'VG-mercantil-ar-corp': {
    id: 'VG-mercantil-ar-corp',
    title: 'Mercantil AR Corp',
    subtitle: 'Augmented Reality PhotoStudio',
    image: '/images/videogames/mercantil-ar-corp.jpg',
    area: { name: 'Video Game / AR', color: 'green' },
    date: '2019',
    features: {
      industry: 'National Bank',
      description: `Christmas photo studio with augmented reality for taking photographs
      to the employees ofMercantil Bank with 3D characters. These are not physically in
      reality but thanks to some cards withpatterns, they can be captured on a monitor
      and see how the photographs will look before they are taken.The respective set of
      photos are sent to a participant's phone by WhatsApp.`,
      technologies: ['Unity 3D', 'Vuforia'],
      links: [
        ['Demo 1', 'https://youtu.be/hP2hq6sWbeQ'],
        ['Demo 2', 'https://youtu.be/87sRm0qtapk'],
      ],
    },
  },
}

export const dataModels: Record<TModelId, TModel> = {
  'MD-robot': {
    id: 'MD-robot',
    title: 'Robot',
    subtitle: 'Augmented Reality PhotoStudio',
    image: '/images/models3d/robot.jpg',
    area: { name: 'Blender', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/kdsDJSDGkPU']],
  },
}

export const allData: Record<TProjectId, TProject> = {
  ...dataFullStack,
  ...dataVideoGames,
}
