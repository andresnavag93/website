import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container, Dropdown } from 'semantic-ui-react'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Menu.Menu position="left">
          <Link href="/" passHref>
            <Menu.Item
              icon="globe"
              active={pathname === '/'}
              title="Andres Navarro Website"
              style={{ textAlign: 'center' }}
            >
              Home
            </Menu.Item>
          </Link>
          <Dropdown item text="Portfolio">
            <Dropdown.Menu>
              <Link href="/fullstack" passHref>
                <Dropdown.Item
                  icon="globe"
                  text="Web Full Stack"
                  active={pathname === '/fullstack'}
                />
              </Link>
              <Link href="/videogames" passHref>
                <Dropdown.Item
                  icon="gamepad"
                  text="Video Games - Augmented Reality"
                  active={pathname === '/videogames'}
                />
              </Link>
              <Link href="/3dmodels" passHref>
                <Dropdown.Item
                  icon="video"
                  text="3D Models - Animations"
                  active={pathname === '/models3d'}
                />
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
