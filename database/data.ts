import { dataFullStack } from './dataFullStack'
import { dataVideoGames } from './dataVideoGames'

export const dataAndres: Record<TResumeId, TResume> = {
  'HOME-andres-navarro': {
    id: 'HOME-andres-navarro',
    title: `Andres Navarro's Website`,
    resume: [
      `Qualified, dedicated and skilled developer with three (3) years of work experience 
      in video games and augmented reality. Several projects developed using Unity 3D as the main tool. 
      Background working in full-stack development. VR, Blockchain and NFT enthusiast.`,
    ],
    skills: {
      'game Engines': ['Unity3D'],
      'augmented Reality': ['Vuforia'],
      code: ['C#', 'C++', 'Javascript', 'HTML', 'CSS', 'Python'],
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
