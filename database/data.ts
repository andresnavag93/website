import { dataFullStack } from './dataFullStack'
import { dataVideoGames } from './dataVideoGames'

export const dataAndres: Record<TResumeId, TResume> = {
  'HOME-andres-navarro': {
    id: 'HOME-andres-navarro',
    title: `Andres Navarro's Website`,
    resume: `Experience work for more than five (5) years in full-stack development, videogames and augmented reality. Blockchain enthusiast.
      Core Strengths: Software Development, Strategic Planning, Process Improvement, Business Integration, Team Development
      High Integrity and Honesty, Innovates, Solves Problems and Analyzes Issues, Proactivity, Responsibility, Confident,
      Communicative, Patience, Work under pressure, and Fast Learning.`,
    skills: {
      languages: ['Spanish', 'English'],
      code: ['C#', 'Javascript', 'Solidity', 'HTML', 'CSS', 'Python'],
      'game Engines': ['Unity3D'],
      'augmented Reality': ['Vuforia'],
      '3d Modeling': ['Blender3D'],
      dapp: ['Truffle', 'Metamask', 'Hardhat', 'Web3.js'],
      'front-End': ['React', 'Next.Js'],
      'back-End': ['Node', 'Express'],
      design: ['Figma', 'Illustrator'],
      'video Editing': ['PremierPro'],
      devOps: [
        'AWS',
        'Route53',
        'CloudFront',
        'S3',
        'Vercel',
        'Surge',
        'Heroku',
      ],
      databases: ['Mongo', 'PostgreSql', 'MySql'],
    },
  },
}

export const allData: Record<TProjectId, TProject> = {
  ...dataFullStack,
  ...dataVideoGames,
}
