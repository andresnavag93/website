import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, date, subtitle, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={image}
        meta={
          <>
            <Card.Meta style={{ color: 'dimgray' }}>{subtitle}</Card.Meta>{' '}
            <Card.Meta style={{ color: 'dimgray' }}>{date}</Card.Meta>
          </>
        }
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
