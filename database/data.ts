import { dataFullStack } from './dataFullStack'
import { dataVideoGames } from './dataVideoGames'

export const dataAndres: Record<TResumeId, TResume> = {
  'HOME-andres-navarro': {
    id: 'HOME-andres-navarro',
    title: `Andres Navarro's Website`,
    resume: [
      `Work experience for more than three (3) years in videogames and augmented reality. Blockchain and NFT enthusiast. Background working in full-stack development.`,
      `Core Strengths:`,
      `Teamwork, Fast Learning, Problem Solver, Proactive, Confident, Patient, Responsible, Honest, Innovator, Analytical Thinker, and Work under pressure.`,
    ],
    skills: {
      'game Engines': ['Unity3D'],
      'augmented Reality': ['Vuforia'],
      code: ['C#', 'Javascript', 'HTML', 'CSS', 'Python'],
      'front-End': ['React', 'Next.Js'],
      '3d Modeling': ['Blender3D'],
      'back-End': ['Node', 'Express'],
      design: ['Figma', 'Illustrator'],
      'video Editing': ['PremierPro'],
      dapp: ['Truffle', 'Metamask', 'Hardhat', 'Web3.js', 'Solidity'],
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
      languages: ['Spanish', 'English'],
    },
  },
}

export const allData: Record<TProjectId, TProject> = {
  ...dataFullStack,
  ...dataVideoGames,
}
