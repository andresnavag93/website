import React from 'react'
import { Header, Table, Label } from 'semantic-ui-react'

const AboutMe = ({ resume, ...otherFeatures }: TResume) => {
  const renderCell = (key: string) => {
    let technologies = otherFeatures.skills[key]
    let object = technologies.map((value: string) => (
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
  }
  return (
    <section className="container">
      <Header as="h2" style={{ marginTop: '3rem' }}>
        Resume
      </Header>
      <p>{resume}</p>
      <br />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2" style={{ fontSize: '1.3rem' }}>
              Skills
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(otherFeatures.skills).map((key) => (
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

export default AboutMe
