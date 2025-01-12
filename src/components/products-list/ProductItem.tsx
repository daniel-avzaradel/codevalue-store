import { ProductProps } from "../../lib/store"
import { DeleteBtn, ProductDetailInfo, ProductItemContainer } from "./ProductsList.module"

interface ProductItemProps {
  product: ProductProps;
  selectedProduct: ProductProps;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductProps>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

const ProductItem = ({product, selectedProduct, setSelectedProduct, setProducts}: ProductItemProps) => {

  const handleDelete = (id: number) => {
    setProducts((prev: ProductProps[]) => {
      return prev.filter((product: ProductProps) => product.id !== id)
    })
  }

  return (
    <ProductItemContainer $selected={selectedProduct.id === product.id} onClick={() => setSelectedProduct(product)}>
      <img src={product.url} alt="" width={100} height={100} style={{border: '1px solid #333'}} />
      <ProductDetailInfo>
        <h4>{product.name}</h4>
        <span>{product.description}</span>
      </ProductDetailInfo>
      <DeleteBtn onClick={() => handleDelete(product.id)}>Delete</DeleteBtn>
    </ProductItemContainer>
  )
}

export default ProductItem