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
    subtitle: 'Booking System API',
    image: '/images/fullstack/bison-gym.jpg',
    area: { name: 'Back-End', color: 'red' },
    date: '2020',
    features: {
      client: 'Wayu Inc.',
      classification: 'Gym, Health & Wellness',
      'developed in': 'Wayu Inc.',
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
    subtitle: 'Health & Care System API',
    image: '/images/fullstack/sloncare.jpg',
    area: { name: 'Back-End', color: 'red' },
    date: '2018',
    features: {
      client: 'Sloncare',
      classification: 'Medical Care',
      'developed in': 'Wayu Inc.',
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
    area: { name: 'FrontEnd', color: 'blue' },
    date: '2018',
    features: {
      client: 'Wayu Inc.',
      classification: 'Software && Marketing',
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

export const dataVideoGames: Record<TProjectId, TProject> = {
  'VG-mercantil-ar-corp': {
    id: 'VG-mercantil-ar-corp',
    title: 'Mercantil AR Corp',
    subtitle: 'Photo Studio Entertainment System',
    image: '/images/videogames/mercantil-ar-corp.jpg',
    area: { name: 'Augmented Reality', color: 'green' },
    date: '2020',
    features: {
      client: 'Mercantil National Bank',
      classification: 'Entertainment',
      'developed in': 'Wayu Inc.',
      description: `Christmas photo studio with augmented reality for taking photographs
      to the employees of Mercantil Bank with 3D characters. These are not physically in
      reality but thanks to some cards with patterns, they can be captured on a monitor
      and see how the photographs will look before they are taken. The respective set of
      photos are sent to a participant's phone by WhatsApp.`,
      technologies: ['Unity 3D', 'Vuforia'],
      links: [
        ['Video Clip 1', 'https://youtu.be/hP2hq6sWbeQ'],
        ['Video Clip 2', 'https://youtu.be/87sRm0qtapk'],
      ],
    },
  },
  'VG-mercantil-ar-holidays': {
    id: 'VG-mercantil-ar-holidays',
    title: 'Happy Holidays Mercantil',
    subtitle: 'Mobile App',
    image: '/images/videogames/mercantil-ar-holidays.jpg',
    area: { name: 'Augmented Reality', color: 'green' },
    date: '2020',
    features: {
      client: 'Mercantil National Bank',
      classification: 'Entertainment',
      'developed in': 'Wayu Inc.',
      description: `Christmas Mobile app with Augmented Reality for Mercantil Bank clients.
      This app allows taking pictures with different 3D animated characters and sharing them
      on social networks. In addition, it has additional functionalities where the character
      can be moved, rotated and scaled in space according tohow you want it to appear in
      the photo.`,
      technologies: ['Unity 3D', 'Vuforia'],
      links: [['Video Clip', 'https://youtu.be/yNReXfp_ugc']],
    },
  },
  'VG-wayu-dash': {
    id: 'VG-wayu-dash',
    title: 'Wayu Dash',
    subtitle: 'Mobile Game',
    image: '/images/videogames/wayu-dash.jpg',
    area: { name: 'Video Game', color: 'brown' },
    date: '2019',
    features: {
      client: 'Wayu Inc.',
      classification: 'Plataformer',
      'developed in': 'Wayu Inc.',
      description: `Mobile platform game that consists of obtaining the highest possible
      score, catching coins and overcoming obstacles of different worlds in order
      to compete for the first place with other players.`,
      technologies: ['Unity 3D'],
      links: [['Video Clip', 'https://youtu.be/20s160Zu9Tk']],
    },
  },
  'VG-wayu-business-ar': {
    id: 'VG-wayu-business-ar',
    title: 'Wayu Business Card',
    subtitle: 'Mobile App',
    image: '/images/videogames/wayu-business-ar.jpg',
    area: { name: 'Augmented Reality', color: 'green' },
    date: '2019',
    features: {
      client: 'Wayu Inc.',
      classification: 'Services',
      'developed in': 'Wayu Inc.',
      description: `Mobile application with augmented reality that allows us to show additional
      information about the services offered in the company in a different and creative way.
      Includes an animated company logo, social media, and shorts portfolio videos.`,
      technologies: ['Unity 3D', 'Vuforia', 'Blender 3D'],
      links: [['Video Clip', 'https://youtu.be/csGzL_KCKqA']],
    },
  },
  'VG-spaceman': {
    id: 'VG-spaceman',
    title: 'Space Platform',
    subtitle: 'Game for Mobile',
    image: '/images/videogames/spaceman.jpg',
    area: { name: 'Video Game', color: 'brown' },
    date: '2019',
    features: {
      classification: 'Platformer',
      description: `A 2D platform video game that consists of advancing
      different levels by winning coins and defeating different enemies.`,
      technologies: ['Unity 3D'],
      links: [['Video Clip', 'https://youtu.be/JXZgZYYRIi4']],
    },
  },
  'VG-ping-pong': {
    id: 'VG-ping-pong',
    title: 'Classic Pong',
    subtitle: 'Game for Mobile',
    image: '/images/videogames/ping-pong.jpg',
    area: { name: 'Video Game', color: 'brown' },
    date: '2019',
    features: {
      classification: 'Sports',
      description: `2D video game of the classic pong table game.`,
      technologies: ['Unity 3D'],
      links: [['Video Clip', 'https://youtu.be/CmOeeDw1sSs']],
    },
  },
  'VG-roller-madness': {
    id: 'VG-roller-madness',
    title: 'Roller Madness',
    subtitle: 'Game for Desktop',
    image: '/images/videogames/roller-madness.jpg',
    area: { name: 'Video Game', color: 'brown' },
    date: '2018',
    features: {
      classification: 'Puzzle',
      description: `3D video game that consists of collecting a certain amount of
      coins depending on the level andavoiding or dodging the animated blocks so
      they don't destroy you.`,
      technologies: ['Unity 3D'],
      links: [['Video Clip', 'https://youtu.be/ncf9bPmcjB0']],
    },
  },
  'VG-box-shooter': {
    id: 'VG-box-shooter',
    title: 'Box shooter',
    subtitle: 'Game for Desktop',
    image: '/images/videogames/box-shooter.jpg',
    area: { name: 'Video Game', color: 'brown' },
    date: '2018',
    features: {
      classification: 'Puzzle',
      description: `3D video game consisting of earn points by shooting different
      cubes in a limited time. Theyellow ones take away time, the white ones
      add time and the green ones add points.`,
      technologies: ['Unity 3D'],
      links: [['Video Clip', 'https://youtu.be/NrT9TLQ41uY']],
    },
  },
  'VG-solar-system': {
    id: 'VG-solar-system',
    title: 'Solar System',
    subtitle: 'Desktop Simulation',
    image: '/images/videogames/solar-system.jpg',
    area: { name: 'Video Game', color: 'brown' },
    date: '2018',
    features: {
      classification: 'Simulation',
      description: `Desktop video game consisting of collecting coins, passing
      through tunnels, and overcoming ordodging animated obstacles/animals through
      three different worlds of ice, desert, and fire, to reach the finalgoal.`,
      technologies: ['Unity 3D'],
      links: [['Video Clip', 'https://youtu.be/7jwhCgYkmT8']],
    },
  },
  'VG-learning-with-ar': {
    id: 'VG-learning-with-ar',
    title: 'Learning AR With Armando',
    subtitle: 'Mobile App',
    image: '/images/videogames/learning-with-ar.jpg',
    area: { name: 'Augmented Reality', color: 'green' },
    date: '2017',
    features: {
      classification: 'Education',
      description: `A mobile game with augmented reality that allows children under
      5 years old to count the numbers, how to trace and write, associations with the
      same numbers of fruits, adds and subtracts.`,
      technologies: ['Unity 3D', 'Vuforia'],
      links: [['Video Clip', 'https://youtu.be/slQDzWXIMT0']],
    },
  },
  'VG-memoriar': {
    id: 'VG-memoriar',
    title: 'Memory Ar',
    subtitle: 'Mobile App',
    image: '/images/videogames/memoriar.jpg',
    area: { name: 'Augmented Reality', color: 'green' },
    date: '2017',
    features: {
      classification: 'Education / Entertainment',
      description: `A mobile game that allows you to play the classic memory game with
      augmented reality using different animal marks. It consists of seeing the animals
      in 3D, and once any pair of cards is discovered, the app shows an animation
      corresponding to the animal paired. There are pairs of cats, tigers, horses,
      lizards, and rhinos.`,
      technologies: ['Unity 3D', 'Vuforia'],
      links: [['Video Clip', 'https://youtu.be/Kgtr5BIKgy8']],
    },
  },
  'VG-star-wars': {
    id: 'VG-star-wars',
    title: 'Star Wars',
    subtitle: 'Game for Desktop',
    image: '/images/videogames/star-wars.jpg',
    area: { name: 'Video Game', color: 'brown' },
    date: '2017',
    features: {
      classification: 'Platformer',
      description: `Desktop video game consisting of collecting coins, passing
      through tunnels, and overcoming or dodging animated obstacles/animals through
      three different worlds of ice, desert, and fire, to reach the final goal.`,
      technologies: ['Unity 3D', 'Maya'],
      links: [['Video Clip', 'https://youtu.be/j0jVuYq4nSk']],
    },
  },
}

export const dataModels: Record<TModelId, TModel> = {
  'MD-robot': {
    id: 'MD-robot',
    title: 'Robot',
    subtitle: '3D Modeling & Animation',
    image: '/images/3dmodels/robot.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/kdsDJSDGkPU']],
  },
  'MD-headphones': {
    id: 'MD-headphones',
    title: 'Headphones',
    subtitle: '3D Modeling',
    image: '/images/3dmodels/headphones.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [],
  },
  'MD-wayu-logo': {
    id: 'MD-wayu-logo',
    title: 'Wayu Logo',
    subtitle: '3D Modeling & Animation',
    image: '/images/3dmodels/wayu-logo.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/nVBrA6EE2Fg']],
  },
  'MD-alien': {
    id: 'MD-alien',
    title: 'Alien',
    subtitle: '3D Modeling & Animation',
    image: '/images/3dmodels/alien.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/QE24t2w5B6o']],
  },
  'MD-minion': {
    id: 'MD-minion',
    title: 'Minion',
    subtitle: '3D Modeling & Animation',
    image: '/images/3dmodels/minion.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/lagucLPMrhI']],
  },
  'MD-pokeball': {
    id: 'MD-pokeball',
    title: 'Pokeball',
    subtitle: '3D Modeling & Animation',
    image: '/images/3dmodels/pokeball.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/FKI3LCq4PE4']],
  },
  'MD-low-poly-composition': {
    id: 'MD-low-poly-composition',
    title: 'Low Poly Composition',
    subtitle: '3D Modeling',
    image: '/images/3dmodels/low-poly-composition.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [],
  },
  'MD-birthday-cake': {
    id: 'MD-birthday-cake',
    title: 'Birthday Cake',
    subtitle: '3D Modeling & Animation',
    image: '/images/3dmodels/birthday-cake.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/SqFtReP3DuM']],
  },
  'MD-helicopter': {
    id: 'MD-helicopter',
    title: 'Helicopter',
    subtitle: '3D Modeling & Animation',
    image: '/images/3dmodels/helicopter.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/l6aN2faXyUU']],
  },
  'MD-glass-and-coke': {
    id: 'MD-glass-and-coke',
    title: 'Glass & Coke Bottle',
    subtitle: '3D Modeling',
    image: '/images/3dmodels/glass-and-coke.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [],
  },
  'MD-soccer-field': {
    id: 'MD-soccer-field',
    title: 'America Cup 2019',
    subtitle: '3D Modeling & Animation',
    image: '/images/3dmodels/soccer-field.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [['Animation Clip', 'https://youtu.be/cYeJ_wXtgjw']],
  },
  'MD-study-desk': {
    id: 'MD-study-desk',
    title: 'Study Desk',
    subtitle: '3D Modeling',
    image: '/images/3dmodels/study-desk.jpg',
    area: { name: 'Blender 3D', color: 'black' },
    links: [],
  },
}

export const allData: Record<TProjectId, TProject> = {
  ...dataFullStack,
  ...dataVideoGames,
}
