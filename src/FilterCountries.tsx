import React from 'react'

type FilterProperties = {
    selectedOption: string
    setSelectedOption: (selectedOption: string) => unknown
}

const FilterCountries: React.FC<FilterProperties> = (props: FilterProperties): JSX.Element => {
  
    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setSelectedOption(event.target.value)
      }  
return (
    <div>
        <select value={props.selectedOption} onChange={handleFilterChange}>
            <option>Sort by Region</option>
            <option value={""}>{""}</option>
        </select>
    </div>
  )
}

export default FilterCountries
