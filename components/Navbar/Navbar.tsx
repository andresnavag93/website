import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container, Dropdown } from 'semantic-ui-react'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Dropdown item text="Porfolio">
          <Dropdown.Menu>
            <Link href="/videogames" passHref>
              <Dropdown.Item
                icon="gamepad"
                text="Video Games (AR)"
                active={pathname === '/videogames'}
              />
            </Link>
            <Link href="/" passHref>
              <Dropdown.Item
                icon="globe"
                text="Full Stack"
                active={pathname === '/'}
              />
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Link href="/about" passHref>
            <Menu.Item
              icon="globe"
              active={pathname === '/about'}
              title="Inicio | Videogames Projects"
              style={{ textAlign: 'center' }}
            >
              About me
            </Menu.Item>
          </Link>
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
