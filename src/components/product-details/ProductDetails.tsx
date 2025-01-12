import { useEffect, useState } from "react";
import { ProductProps } from "../../lib/store"
import { ProductDetailsDiv, ProductImg, ProductsDetailsContainer, SaveBtn } from "./ProductsDetails.module"
import { toast, ToastContainer } from "react-toastify";
import { handleValidation } from "./utils";

interface ProductDetailsProps {
  product: ProductProps;
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

export enum DetailsProps {
  NAME = 'name',
  DESCRIPTION = 'description',
  PRICE = 'price'
}

const ProductDetails = ({ product, setProducts }: ProductDetailsProps) => {

  const [name, setName] = useState<string>(product.name)
  const [description, setdescription] = useState<string>(product.description)
  const [price, setPrice] = useState<number>(product.price)
  const [resetData, setResetData] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, property: string) => {
    let value = e.target.value;
    if(property === DetailsProps.NAME) {
      setName(value)
    }
    if(property === DetailsProps.DESCRIPTION) {
      setdescription(value)
    }
    if(property === DetailsProps.PRICE) {
      setPrice(+value)
    }
  }

  const handleSave = () => {
    if(!handleValidation(DetailsProps.NAME, name) || !handleValidation(DetailsProps.DESCRIPTION, description) || !handleValidation(DetailsProps.PRICE, price)) {
      return setResetData(true)
    } else {    
    setProducts((prev: ProductProps[]) => {
      let newProducts = [...prev].map(pr => {
        return pr.id === product.id ? {...product, name: name, description: description, price: price} : pr
      })
      return newProducts
    })
    }
    toast.success('Product Saved', { theme: 'dark'})
  }

  useEffect(() => {
    setName(product.name)
    setdescription(product.description)
    setPrice(product.price)
    setResetData(false)
  }, [product, resetData])
  
  return (
    <ProductsDetailsContainer>
      <h2>Product Details</h2>
      <br />
      <ProductDetailsDiv>
        <ProductImg src={product.url} />
        <br />
        <div>
          <label htmlFor={DetailsProps.NAME}>Name</label>
          <input type="text" id={DetailsProps.NAME} value={name} onChange={(e) => handleChange(e, DetailsProps.NAME)} />
        </div>
        <div>
          <label htmlFor={DetailsProps.DESCRIPTION}>Description</label>
          <textarea id={DetailsProps.DESCRIPTION} value={description} rows={5} onChange={(e) => handleChange(e, DetailsProps.DESCRIPTION)} />
        </div>
        <div style={{maxWidth: '74px'}}>
          <label htmlFor={DetailsProps.PRICE}>Price</label>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <input id={DetailsProps.PRICE} value={price} onChange={(e) => handleChange(e, DetailsProps.PRICE)} />
          <span>$</span>
          </div>
        </div>
      <SaveBtn onClick={handleSave}>SAVE</SaveBtn>
      </ProductDetailsDiv>
      <ToastContainer closeOnClick/>
    </ProductsDetailsContainer>
  )
}

export default ProductDetails