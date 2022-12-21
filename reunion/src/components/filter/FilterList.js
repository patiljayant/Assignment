import React from 'react'

const FilterList = ({type, filterList, selectedFilters}) => {
  const handleChange = (e) => {
    let value = e.target.value;
    if(type === "price")
      value = JSON.parse(value)
    selectedFilters.current[type] = value;
  }
  return (
    <div className="flex justify-center">
        <div className="mb-3 w-[12.5rem]">
            <select className="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            capitalize
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange = {(e) => handleChange(e)}
            defaultValue="all"
            aria-label="Default select example">
                <option value="all" >All</option>
                {
                  type != "price" ? filterList?.map((option,i) => {
                    return (
                      <option 
                        className='capitalize'
                        value={option}
                        key={i}
                        >
                        {option}
                      </option>
                    )
                  }) :
                  filterList?.map((option,i) => {
                    return (
                      <option 
                        value={JSON.stringify(option)}
                        key={i}
                        >
                        ${option.lowerLimit} - ${option.upperLimit}
                      </option>
                    )
                  })
                }
            </select>
        </div>
    </div>
  )
}

export default FilterList