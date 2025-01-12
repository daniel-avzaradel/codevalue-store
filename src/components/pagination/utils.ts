import { ProductProps } from "../../lib/store"
import { SortBy } from "../products-list/Actions"

export const handleSort = (products: ProductProps[], sortBy: string) => {
    if(sortBy === SortBy.NAME) {
      return [...products].sort((a: ProductProps, b: ProductProps) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
    } else if(sortBy === SortBy.DATE) {      
      return [...products].sort((a: ProductProps, b: ProductProps) => b.creation_date.toISOString().localeCompare(a.creation_date.toISOString()))
    } else {
      return products
    }
  }