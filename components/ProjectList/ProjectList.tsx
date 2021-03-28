import React from 'react'
import { Card, Label } from 'semantic-ui-react'
import Link from 'next/link'

type ProjectListProps = {
  projects: TProject[]
}

const mapProjectsToCards = (projects: TProject[]) =>
  projects.map(
    ({ title, id, area: { name, color }, date, subtitle, image }) => (
      <Link key={id} href="/project/[id]" as={`/project/${id}`} passHref>
        <Card
          as="a"
          header={title}
          image={image}
          meta={
            <>
              <Card.Meta style={{ color: 'dimgray', marginBottom: '0.5rem' }}>
                {subtitle}
              </Card.Meta>{' '}
              <Label
                color={color}
                size="medium"
                style={{ marginRight: '0.5rem' }}
              >
                {name}
              </Label>
              <Label>{date}</Label>
            </>
          }
        />
      </Link>
    )
  )

const ProjectList = ({ projects }: ProjectListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProjectsToCards(projects)}
  </Card.Group>
)

export default ProjectList
