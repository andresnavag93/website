import React from 'react'
import { Header, Divider, Table, Label } from 'semantic-ui-react'

const AboutMe = ({ description, ...otherFeatures }: TProjectFeatures) => {
  const renderCell = (key: string) => {
    // if (key === 'links') {
    //   let links = otherFeatures[key]
    //   let object = links.map((values, i) => (
    //     <span key={values[0]}>
    //       <a href={values[1]} target="_blank">
    //         {values[0]}
    //       </a>
    //       {!(i === links.length - 1) && ', '}
    //     </span>
    //   ))

    //   return <> {object}</>
    // } else if (key === 'area') {
    // let { name, color } = otherFeatures[key]
    // return (
    //   <Label color={color} size="medium" style={{ marginRight: '0.5rem' }}>
    //     {name}
    //   </Label>
    // )
    // } else if (key === 'technologies') {
    let technologies = otherFeatures[key]
    let object = technologies.map((value) => (
      <Label key={value} size="medium" style={{ marginRight: '0.5rem' }}>
        {value}
      </Label>
    ))

    return <> {object}</>
    // } else {
    //   return otherFeatures[key as keyof typeof otherFeatures]
    // }
  }
  return (
    <section className="container">
      {/* <Divider style={{ marginRight: '30rem' }} /> */}
      <Header as="h2" style={{ marginTop: '3rem' }}>
        Resume
      </Header>
      <p>{description}</p>
      <br />
      {/* <Header as="h2" style={{ marginTop: '3rem' }}>
        Skills
      </Header> */}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2" style={{ fontSize: '1.3rem' }}>
              Skills
            </Table.HeaderCell>
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

      <style jsx>{`
        .container :global(.attr-name) {
          text-transform: capitalize;
        }
      `}</style>
    </section>
  )
}

export default AboutMe
