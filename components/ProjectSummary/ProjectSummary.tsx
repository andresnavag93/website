import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import ProjectAttributes from './ProjectAttributes'

type ProjectSummaryProps = {
  project: TProject
}

const ProjectSummary = ({ project }: ProjectSummaryProps) => (
  <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center', marginTop: '3rem' }}>
        <Item.Image size="medium">
          <img src={project.image} alt={project.name} />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{project.name}</Item.Header>
          <Item.Description>
            {/* <p>{project.price}</p> */}
            {/* <Label>{`SKU: ${project.sku}`}</Label> */}
          </Item.Description>
          {/* <Item.Extra>
            <AddToCart project={project} />
          </Item.Extra> */}
        </Item.Content>
      </Item>
    </Item.Group>
    <ProjectAttributes {...project.attributes} />
  </>
)

export default ProjectSummary
