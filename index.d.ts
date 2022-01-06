type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProjectId = string

type TResumeId = string

type TModelId = string

type TProjectLinks = {
  github?: string
  web?: string
  demo?: string
  demo2?: string
}

type TProjectAreaFeature = {
  name: string
  color: SemanticCOLORS
}

type TProjectFeatures = {
  description: string
  'developed in'?: string
  links: Array<Array<string>>
  technologies: Array<string>
  client?: string
  classification?: string
}

type TProject = {
  id: TProjectId
  title: string
  subtitle: string
  image: Url
  area: TProjectAreaFeature
  date: string
  features: TProjectFeatures
}

type TModel = {
  id: TModelId
  title: string
  subtitle: string
  image: Url
  area: TProjectAreaFeature
  links?: Array<Array<string>>
}

type TAPIPROJECTDetailResponse = TProject

type TAPIProjectResponse = {
  lenght: number
  data: TProject[]
  error?: string
}

type TResumeSkills = {
  languages?: Array<string>
  code?: Array<string>
  'game Engines'?: Array<string>
  'augmented Reality'?: Array<string>
  '3d Modeling'?: Array<string>
  design?: Array<string>
  'video Editing'?: Array<string>
  'front-End'?: Array<string>
  'back-End'?: Array<string>
  dapp?: Array<string>
  'block Chain Networks'?: Array<string>
  devOps?: Array<string>
  databases?: Array<string>
}

type TResume = {
  id: TResumeId
  title: string
  resume: string[]
  skills: TResumeFeatures
}

const sizes = [
  'mini',
  'tiny',
  'small',
  'medium',
  'large',
  'big',
  'huge',
  'massive',
]

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

// <Label color="red" size="medium"> {features.area} </Label>
// <Label as="a" href="https://react.semantic-ui.com/" target="_blank"> {features.date}</Label>
