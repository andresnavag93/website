import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import ProjectFeatures from './ProjectFeatures'

type ProjectSummaryProps = {
  project: TProject
}

const ProjectSummary = ({ project }: ProjectSummaryProps) => (
  <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center', marginTop: '3rem' }}>
        <Item.Image size="medium">
          <img src={project.image} alt={project.title} />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{project.title}</Item.Header>
          <Item.Description>
            <p>{project.subtitle}</p>
            {/* <Label>{`SKU: ${project.sku}`}</Label> */}
          </Item.Description>
          {/* <Item.Extra>
            <AddToCart project={project} />
          </Item.Extra> */}
        </Item.Content>
      </Item>
    </Item.Group>
    <ProjectFeatures {...project.features} />
  </>
)

export default ProjectSummary
