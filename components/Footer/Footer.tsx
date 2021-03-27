import React from 'react'
import Link from 'next/link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row style={{ textAlign: 'center' }}>
          {/* <Grid.Column width={5}>
            <Header as="h4" content="About me" />
            <List >
              <List.Item >
                <Link href="/about">
                  <a>About me</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column> */}
          {/* <Grid.Column width={8}>
            <Header as="h4" content="Portfolio" />
            <List>
              <List.Item>
                <Link href="/">
                  <a>Portfolio</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column> */}
          <Grid.Column width={16}>
            {/* <Header as="h4">Other Links</Header> */}
            {/* <p>
              <a href="https://platzi.com/" target="_blank">
                Platzi y su curso de Next.JS
              </a>{' '}
              de Platzi dictado por{' '}
              <a href="https://twitter.com/jonalvarezz" target="_blank">
                @jonalvarezz
              </a>
            </p> */}
            {/* <List horizontal style={{ display: 'flex' }}> */}
            <List horizontal>
              {/* <List.Item
                icon="twitter"
                style={{ display: 'flex' }}
                content={<a href="https://twitter.com/andresnavag93">Twitter</a>}
              /> */}
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a href="https://github.com/andresnavag93" target="_blank">
                    GitHub
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <div className="colophon">
        <p className="colophon-entry">
          Icons made by{' '}
          <a
            target="_blank"
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </a>
          {' from '}
          <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
        <p className="colophon-entry">
          Avocado images taken from{' '}
          <a
            className="acnor"
            target="_blank"
            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
            title="California Avocado"
          >
            Avocado 101
          </a>
          {' at '}
          <a
            target="_blank"
            href="https://www.californiaavocado.com"
            title="Flaticon"
          >
            California Avocado
          </a>
        </p>
      </div> */}
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
)

export default Footer
