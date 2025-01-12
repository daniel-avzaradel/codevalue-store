import { useEffect, useState } from 'react';
import { ProductProps } from '../../lib/store';
import ProductsList from '../products-list/ProductsList';
import { PaginationActions, PaginationButton, PaginationContainer } from './Pagination.module';
import { SortBy } from '../products-list/Actions';
import { handleSort } from './utils';

interface PaginationProps {
  products: ProductProps[];
  itemsPerPage: number;
  selectedProduct: ProductProps,
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductProps>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  setAddProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

const Pagination = ({ products, itemsPerPage, selectedProduct, setProducts, setSelectedProduct, setAddProduct }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState(products);
  const [sortBy, setSortBy] = useState<string>(SortBy.NAME);
  const [searchValue, setSearchValue] = useState<string>('');

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  let currentPageData = handleSort(filtered, sortBy).slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    currentPageData = handleSort(filtered, sortBy).slice(startIndex, startIndex + itemsPerPage);
  }, [filtered, sortBy])

  useEffect(() => {
    if(!searchValue) {
      return setFiltered(products)
    } else {
      setFiltered(() => [...products].filter(el => {
        return el.description.toLowerCase().includes(searchValue) || el.name.toLowerCase().includes(searchValue)
      }))
    }
  }, [searchValue])

  useEffect(() => {
    setFiltered(products)
    if(!products.some((el: ProductProps) => el.id === selectedProduct.id)) {
      setSelectedProduct(currentPageData.find(el => el.id !== selectedProduct.id) ?? products[0])
    }
  }, [products, selectedProduct])

  return (
    <PaginationContainer>
      <div>
        <ProductsList products={currentPageData} {...{searchValue, setSearchValue, setAddProduct, selectedProduct, setSelectedProduct, setProducts, setFiltered, setSortBy}} />
      </div>
      <PaginationActions>
        <PaginationButton onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          $disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <span>Page<span id='current'>{currentPage}</span>of<span id='total'>{totalPages}</span></span>
        <PaginationButton onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          $disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationActions>
    </PaginationContainer>
  );
};

export default Pagination;
