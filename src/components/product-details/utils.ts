import { toast } from "react-toastify"
import { DetailsProps } from "./ProductDetails"

export const handleValidation = (property: string, value: string | number) => {
  if(property === DetailsProps.NAME || property === DetailsProps.DESCRIPTION) {
    if(!value) {
      toast.error(`${property} cannot be empty`, {
        theme: 'dark',
        style: {
          textTransform: 'lowercase'
        }
      })
      return false
    }
    if(property === DetailsProps.NAME && value.toString().length > 30) {
      toast.error(`${property} cannot be longer than 30 characters`, {
        theme: 'dark',
        style: {
          textTransform: 'lowercase'
        }
      })
      return false
    }
    if(property === DetailsProps.DESCRIPTION && value.toString().length > 200) {
      toast.error(`${property} cannot be longer than 200 characters`, {
        theme: 'dark',
        style: {
          textTransform: 'lowercase'
        }
      })
      return false
    }
  }
  if(property === DetailsProps.PRICE) {
    if(+value <= 0) {
      toast.error(`${property} cannot be zero or empty`, {
        theme: 'dark',
        style: {
          textTransform: 'lowercase'
        }
      })
      return false
    } else if(isNaN(+value)) {
      toast.error(`${property} is invalid. Please type in numbers only`, {
        theme: 'dark',
        style: {
          textTransform: 'lowercase'
        }
      })
      return false
    }
  }
  return true
}