import { getBillboard } from '@/actions/get-billboard'
import { getProducts } from '@/actions/get-products'
import { Billboard } from '@/components/Billboard'
import { ProductList } from '@/components/ProductList'
import { Container } from '@/components/ui/Container'

export default async function HomePage() {
  const billboard = await getBillboard('clm569mit0001v7zwsmwua5mg')
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm>px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
