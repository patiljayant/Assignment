import React from 'react'

const Search = ({setSearchKeyword}) => {
    const handleChange = (e) => {
        setSearchKeyword(e.target.value)
    }
  return (
      <div className='flex flex-wrap justify-between my-10 px-[7rem] font-[Mukta]'>
        <div className='text-5xl'>Search Properties on Rent</div>
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <input
                type="search"
                className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded-lg
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                onChange={(e) => handleChange(e)}
                id="exampleSearch"
                placeholder="Try typing tags... Popular, Best Seller, Economic"
                />
            </div>
            </div>
      </div>
  )
}

export default Search