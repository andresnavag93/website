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
        <Item
          style={{
            maxWidth: '100%!important',
            width: 'auto!important',
            maxHeight: '100%!important',
          }}
        >
          <Item.Image size="medium" className="image-control">
            <div>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  boxShadow: '0 1px 3px 0 #d4d4d5',
                  border: '1px solid #d4d4d5',
                  borderRadius: '5px',
                }}
              />
            </div>
          </Item.Image>
        </Item>
        <Item.Content
          style={{
            marginLeft: '2%',
            marginTop: '5%',
          }}
        >
          <Item.Header as="h1">{project.title}</Item.Header>
          <Item.Description>
            <p>{project.subtitle}</p>
            <Label
              color={project.area.color}
              size="medium"
              style={{ marginRight: '0.5rem' }}
            >
              {project.area.name}
            </Label>
            <Label>{project.date}</Label>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
    <ProjectFeatures {...project.features} />
  </>
)

export default ProjectSummary
