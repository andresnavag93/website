type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProjectId = string

type TProjectAttributes = {
  description: string
  shape: string
  hardiness: string
  taste: string
}

type TProject = {
  id: TProjectId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProjectAttributes
  subtitle: string
  date: string
}

type TAPIPROJECTDetailResponse = TProject

type TAPIProjectResponse = {
  lenght: number
  data: TProject[]
  error?: string
}
