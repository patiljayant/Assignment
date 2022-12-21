import React, {useRef} from 'react'
import FilterList from './FilterList'
import {rent as rentList} from '../../data/Rent'
import { getBedroomsList, getLocationList, getPriceList, getPropertyTypeList } from './GetFilterList';


const Filter = ({setFilters, filters}) => {
    const selectedFilters = useRef(filters);
    const locationList = getLocationList(rentList);
    const priceList = getPriceList(rentList);
    const propertyTypeList = getPropertyTypeList(rentList);
    const bedroomsList = getBedroomsList(rentList);
    
    const handleFilteredSearch = () => {
        setFilters({...selectedFilters.current});
    }
  return (
    <div className='flex flex-wrap justify-between rounded-lg shadow-xl bg-white my-10 py-[1.5rem] px-[2rem] mx-[7rem] font-[Mukta]'>
        <div className='flex flex-col'>
            <div className='my-2  text-gray-500'>Location</div>
            <FilterList 
                selectedFilters={selectedFilters}
                type={"location"}
                filterList = {locationList}
            />
        </div>
        <div className='w-[1px] bg-gray-200'></div>
        <div className='flex flex-col'>
        <div className='my-2  text-gray-500'>Price</div>
            <FilterList 
                selectedFilters={selectedFilters}
                type={"price"}
                filterList = {priceList}
            />
        </div>
        <div className='w-[1px] bg-gray-200'></div>

        <div className='flex flex-col'>
        <div className='my-2 text-gray-500'>Property Type</div>
            <FilterList 
                selectedFilters={selectedFilters}
                type={"propertyType"}
                filterList = {propertyTypeList}
            />
        </div>
        <div className='w-[1px] bg-gray-200'></div>

        <div className='flex flex-col'>
        <div className='my-2  text-gray-500'>Bedrooms</div>
            <FilterList 
                selectedFilters={selectedFilters}
                type={"bedrooms"}
                filterList = {bedroomsList}
            />
        </div>
        <div className='w-[1px] bg-gray-200'></div>
        <div className='flex items-center'>
            <button 
                onClick={handleFilteredSearch}
                type="button"   
                className="inline-block px-8 py-3 bg-blue-600 text-white text-sm leading-tight rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Search
            </button>
        </div>
    </div>
  )
}

export default Filter