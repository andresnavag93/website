import React from 'react'
import { Header, Divider, Table, Label } from 'semantic-ui-react'

const ProjectFeatures = ({
  description,
  ...otherFeatures
}: TProjectFeatures) => {
  const renderCell = (key: string) => {
    if (key === 'links') {
      let links = otherFeatures[key]
      let object = links.map((values, i) => (
        <span key={values[0]}>
          <a href={values[1]} target="_blank">
            {values[0]}
          </a>
          {!(i === links.length - 1) && ', '}
        </span>
      ))

      return <> {object}</>
    } else if (key === 'area') {
      // let { name, color } = otherFeatures[key]
      // return (
      //   <Label color={color} size="medium" style={{ marginRight: '0.5rem' }}>
      //     {name}
      //   </Label>
      // )
    } else if (key === 'technologies') {
      let technologies = otherFeatures[key]
      let object = technologies.map((value) => (
        <Label
          key={value}
          size="medium"
          style={{
            marginRight: '0.5rem',
            backgroundColor: '#1b2a68',
            color: 'white',
          }}
        >
          {value}
        </Label>
      ))

      return <> {object}</>
    } else {
      return otherFeatures[key as keyof typeof otherFeatures]
    }
  }
  return (
    <section className="container">
      <Header as="h3" style={{ marginTop: '3rem' }}>
        About this project
      </Header>
      <p>{description}</p>

      {/* <Divider /> */}

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Features</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(otherFeatures).map((key) => (
            <Table.Row key={key}>
              <Table.Cell className="attr-name">{key}</Table.Cell>
              <Table.Cell>{renderCell(key)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <br />

      <style jsx>{`
        .container :global(.attr-name) {
          text-transform: capitalize;
        }
      `}</style>
    </section>
  )
}

export default ProjectFeatures
