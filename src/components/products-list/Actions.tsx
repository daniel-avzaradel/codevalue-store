import { ActionsContainer, AddProductBtn, SearchBar, SortBySelect } from "./Actions.module";

interface ActionProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setAddProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum SortBy {
  NAME = 'name',
  DATE = 'recently-added'
}

const Actions = ({ searchValue, setSearchValue, setSortBy, setAddProduct }: ActionProps) => {

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase()
    setSearchValue(value)
  }

  return (
    <ActionsContainer>
      <AddProductBtn onClick={() => setAddProduct((prev: boolean) => !prev)}>+ Add</AddProductBtn>
      <SearchBar placeholder="Search product..." type="text" value={searchValue} onChange={handleSearch}/>
      <label htmlFor="sort-by"></label>
      <SortBySelect name="sort-by" id="sort-by" onChange={(e) => setSortBy(e.target.value)}>
        <option value={SortBy.NAME}>Name</option>
        <option value={SortBy.DATE}>Recently Added</option>
      </SortBySelect>
    </ActionsContainer>
  )
}

export default Actions