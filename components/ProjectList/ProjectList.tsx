import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProjectListProps = {
  projects: TProject[]
}

const mapProjectsToCards = (projects: TProject[]) =>
  projects.map(({ name, id, date, subtitle, image }) => (
    <Link key={id} href="/project/[id]" as={`/project/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={image}
        meta={
          <>
            <Card.Meta style={{ color: 'dimgray' }}>{subtitle}</Card.Meta>{' '}
            <Card.Meta style={{ color: 'dimgray' }}>{date}</Card.Meta>
          </>
        }
      />
    </Link>
  ))

const ProjectList = ({ projects }: ProjectListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProjectsToCards(projects)}
  </Card.Group>
)

export default ProjectList
