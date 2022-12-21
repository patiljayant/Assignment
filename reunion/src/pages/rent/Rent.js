import React,{useState, useEffect} from 'react'
import Search from '../../components/search/Search'
import Filter from '../../components/filter/Filter'
import {rent as rentHouses} from '../../data/Rent'
import Card from '../../components/card/Card'


const Rent = () => {
    const [houses, setHouses] = useState(rentHouses);
    const [filters, setFilters] = useState({
        location : "all",
        price : "all",
        propertyType : "all",
        bedrooms : "all"
    })
    const [searchKeyword, setSearchKeyword] = useState("")
    const handleFiltering = (filters) => {
        const location  = filters.location;
        const price = filters.price;
        const priceLowerLimit = price.lowerLimit;
        const priceUpperLimit = price.upperLimit;
        const propertyType = filters.propertyType;
        const bedrooms = filters.bedrooms;
        const all = "all"
        const filteredHouses = rentHouses.filter(house => (location === all || house.propertyAddress.city === location)
                                                         && (propertyType === all || house.propertyType === propertyType) 
                                                         && (bedrooms === all || house.propertyDetails.bedrooms === +bedrooms)
                                                         && (price === all || (priceLowerLimit <= house.rentPrice && priceUpperLimit >= house.rentPrice )))
        return filteredHouses;
    }

    const handleSearchUsingTags = (searchKeyword) => {
        const key = searchKeyword.toLowerCase()
        const searchedHouses = rentHouses.filter(house => house.propertyTag.includes(key) || (house.propertyTag.length && key.includes(house.propertyTag)))
        return searchedHouses;
    }

    useEffect(()=>{
        setHouses(handleFiltering(filters));
    },[filters])

    useEffect(()=> {
        setHouses(handleSearchUsingTags(searchKeyword));
    },[searchKeyword])
    return (
        <>
            <Search setSearchKeyword = {setSearchKeyword} />
            <Filter setFilters = {setFilters} filters = {filters}/>
            <div className="flex items-center justify-center flex-wrap">
                {
                houses.map(house => <Card key={house.id} house={house} />)
                }
            </div>
        </>
    )
}

export default Rent