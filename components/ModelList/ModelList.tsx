import React from 'react'
import { Card, Label } from 'semantic-ui-react'

type TModelListProps = {
  modelList: TModel[]
}

const renderCell = (links: Array<Array<string>>) => {
  let object = links.map((values, i) => (
    <Label key={values[0]}>
      <span>
        <a href={values[1]} target="_blank">
          {values[0]}
        </a>
      </span>
    </Label>
  ))

  return <> {object}</>
}

const mapModelsToCards = (modelList: TModel[]) =>
  modelList.map(
    ({ title, id, area: { name, color }, subtitle, image, links }) => (
      <Card
        key={id}
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
            {links && renderCell(links)}
          </>
        }
      />
    )
  )

const ModelList = ({ modelList }: TModelListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapModelsToCards(modelList)}
  </Card.Group>
)

export default ModelList
