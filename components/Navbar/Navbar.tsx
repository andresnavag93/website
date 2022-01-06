import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container, Dropdown } from 'semantic-ui-react'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Menu
      size="huge"
      borderless
      as="header"
      inverted
      style={{ backgroundColor: '#1b2a68' }}
    >
      <Container text>
        <Menu.Menu position="left">
          <Link href="/" passHref>
            <Menu.Item
              active={pathname === '/'}
              title="Andres Navarro Website"
              style={{ textAlign: 'center' }}
            >
              Home
            </Menu.Item>
          </Link>
          <Dropdown item text="Portfolio">
            <Dropdown.Menu style={{ backgroundColor: '#1b2a68' }}>
              <Link href="/videogames" passHref>
                <Dropdown.Item
                  icon="gamepad"
                  text="Video Games - Augmented Reality"
                  active={pathname === '/videogames'}
                />
              </Link>
              <Link href="/fullstack" passHref>
                <Dropdown.Item
                  icon="globe"
                  text="Web Development - Blockchain"
                  active={pathname === '/fullstack'}
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
        i,
        a span {
          color: white;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
