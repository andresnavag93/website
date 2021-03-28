type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProjectId = string

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
  links: Array<Array<string>>
  technologies: Array<string>
  industry: string
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

type TAPIPROJECTDetailResponse = TProject

type TAPIProjectResponse = {
  lenght: number
  data: TProject[]
  error?: string
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
