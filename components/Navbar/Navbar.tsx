import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | FullStack Projects"
            style={{ textAlign: 'center' }}
          >
            Fullt Stack <br /> Portfolio
          </Menu.Item>
        </Link>
        <Link href="/videogames" passHref>
          <Menu.Item
            active={pathname === '/videogames'}
            title="Inicio | Videogames Projects"
            style={{ textAlign: 'center' }}
          >
            Video Games (AR) <br /> Portfolio
          </Menu.Item>
        </Link>
        {/* <Menu.Menu position="right">
          <Link href="/about" passHref>
            <Menu.Item active={pathname === '/about'}>
              About me
            </Menu.Item>
          </Link>
        </Menu.Menu> */}
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
