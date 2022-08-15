import React from 'react'


type SearchProperties = {
    search: string
    setSearch: (search: string) => unknown
}

const SearchCountries: React.FC<SearchProperties> = (props: SearchProperties): JSX.Element => {

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearch(event.currentTarget.value)
      }

  return (
    <div>
        <input placeholder="search countries" type="search" id="search" name="search" value={props.search} onChange={handleSearchChange}/>
    </div>
  )
}

export default SearchCountries
