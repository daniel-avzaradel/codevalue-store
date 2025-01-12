import { useState } from 'react';
import { ProductProps } from '../../lib/store';
import { AddProductBtnsContainer, AddProductButton, AddProductModalScreen, InputWrapper, ModalContent } from './AddProductModal.module'
import { handleValidation } from '../product-details/utils';
import { toast } from 'react-toastify';

interface AddProductModalProps {
  setAddProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

enum AddProductProps {
  NAME = 'name',
  DESCRIPTION = 'description',
  PRICE = 'price'
}

const AddProductModal = ({setAddProduct, setProducts}: AddProductModalProps) => {

  const [newProduct, setNewProduct] = useState<ProductProps>({
    id: Math.ceil(Math.random() * 100),
    name: '',
    description: '',
    price: 0,
    url: '',
    creation_date: new Date()
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, property: string) => {
    let value = e.target.value;
    setNewProduct((prev: ProductProps) => {
      return {...prev, [property as keyof typeof prev]: value}
    })
  }

  const handleSave = () => {
    if(!handleValidation(AddProductProps.NAME, newProduct.name) || !handleValidation(AddProductProps.DESCRIPTION, newProduct.description) || !handleValidation(AddProductProps.PRICE, newProduct.price)) {
      return
    } else {
      setProducts((prev: ProductProps[]) => {
        return [...prev, newProduct]
      })
      toast.success('PRODUCT ADDED', { theme: 'dark'})
      setAddProduct((prev: boolean) => !prev)
    }
  }

  return (
    <AddProductModalScreen onClick={() => setAddProduct((prev: boolean) => !prev)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h1>ADD A NEW PRODUCT</h1>
        <br />
        <InputWrapper>
          <label htmlFor={AddProductProps.NAME}>Name</label>
          <input type="text" id={AddProductProps.NAME} onChange={(e) => handleChange(e, AddProductProps.NAME)} value={newProduct.name} />
        </InputWrapper>
        <br />
        <InputWrapper>
          <label htmlFor={AddProductProps.DESCRIPTION}>Description</label>
          <textarea id={AddProductProps.DESCRIPTION} onChange={(e) => handleChange(e, AddProductProps.DESCRIPTION)} value={newProduct.description} rows={5} />
        </InputWrapper>
        <br />
        <InputWrapper>
          <label htmlFor={AddProductProps.PRICE}>Price</label>
          <input type="text" id={AddProductProps.PRICE} onChange={(e) => handleChange(e, AddProductProps.PRICE)} value={newProduct.price} />
        </InputWrapper>
        <br />
        <AddProductBtnsContainer>
            <AddProductButton $save onClick={handleSave}>SAVE</AddProductButton>
            <AddProductButton onClick={() => setAddProduct((prev: boolean) => !prev)}>CANCEL</AddProductButton>
        </AddProductBtnsContainer>
      </ModalContent>
    </AddProductModalScreen>
  )
}

export default AddProductModal