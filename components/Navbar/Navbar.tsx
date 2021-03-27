import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

import { Avocado } from '@components/SVGIcons'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los proyectos"
          >
            {/* <Avocado /> */}
            Portfolio
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
