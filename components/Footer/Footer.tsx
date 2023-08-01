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
      backgroundColor: '#121212',
    }}
  >
    <Container text inverted>
      <Grid stackable>
        <Grid.Row
          className="hoverColor"
          style={{ textAlign: 'center', color: 'white' }}
        >
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
            <List
              horizontal
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {/* <List horizontal> */}
              <List.Item
                icon="game"
                style={{ display: 'flex' }}
                content={
                  <a href="https://andresnavag93.itch.io/" target="_blank">
                    Itch.Io
                  </a>
                }
              />
              <List.Item
                icon="youtube"
                style={{ display: 'flex' }}
                content={
                  <a
                    href="https://www.youtube.com/channel/UC59WLJg8ghkepR2WLl_xB9w"
                    target="_blank"
                  >
                    Youtube
                  </a>
                }
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a href="https://github.com/andresnavag93" target="_blank">
                    GitHub
                  </a>
                }
              />
              <List.Item
                icon="linkedin"
                style={{ display: 'flex' }}
                content={
                  <a
                    href="https://www.linkedin.com/in/andresnavag93"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                }
              />
              <List.Item
                icon="mail"
                style={{ display: 'flex' }}
                content={
                  <a href="mailto: andresnavag93gmail.com" target="_blank">
                    Mail
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
      a {
        color: white;
      }

      a:hover {
        color: #c8c6c6;
      }
    `}</style>
  </Segment>
)

export default Footer
