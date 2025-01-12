import React from "react"
import { ProductProps } from "../../lib/store"
import Actions from "./Actions"
import ProductItem from "./ProductItem"
import { ProductsListContainer, ProductsListPage } from "./ProductsList.module"

interface ProductListProps {
  products: ProductProps[];
  selectedProduct: ProductProps;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductProps>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  setAddProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setFiltered: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const ProductsList = ({products, selectedProduct, searchValue, setSearchValue, setFiltered, setSortBy, setSelectedProduct, setProducts, setAddProduct}: ProductListProps) => {

  return (
    <ProductsListPage>
      <h2>PRODUCTS</h2>
      <Actions {...{ products, searchValue, setSearchValue, setFiltered, setSortBy, setAddProduct }} />
      <ProductsListContainer>
      {products.map((product) => {
        return <ProductItem key={product.id} {...{product, products, selectedProduct, setSelectedProduct, setProducts}} />
      })}
      </ProductsListContainer>
    </ProductsListPage>
  )
}

export default ProductsList