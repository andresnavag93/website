import React from 'react'
import { Card, Label } from 'semantic-ui-react'
import Link from 'next/link'

type ProjectListProps = {
  projects: TProject[]
}

const renderCell = (links: Array<Array<string>>) => {
  let object = links.map((values, i) => (
    <Label key={values[0]} style={{ marginRight: '0.5rem' }}>
      <span>
        <a href={values[1]} target="_blank">
          {values[0]}
        </a>
      </span>
    </Label>
  ))

  return <> {object}</>
}

const mapProjectsToCards = (projects: TProject[]) =>
  projects.map(
    ({ title, id, area: { name, color }, date, subtitle, image, links }) => (
      // <Link key={id} href="/project/[id]" as={`/project/${id}`} passHref>
      <Card
        key={id}
        // as="a"
        header={title}
        // height={300}
        image={image}
        meta={
          <>
            <Card.Meta style={{ color: 'dimgray', marginBottom: '0.5rem' }}>
              {subtitle}
            </Card.Meta>{' '}
            {/* <Label
                color={color}
                size="medium"
                style={{ marginRight: '0.5rem' }}
                >
                {name}
              </Label> */}
            <Link key={id} href="/project/[id]" as={`/project/${id}`} passHref>
              <Label color={'blue'}>
                <strong>See more</strong>
              </Label>
            </Link>
            {links && renderCell(links)}
          </>
        }
      />
      // </Link>
    )
  )

const ProjectList = ({ projects }: ProjectListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProjectsToCards(projects)}
  </Card.Group>
)

export default ProjectList
