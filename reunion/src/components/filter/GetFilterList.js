export const getLocationList = (data) => {
    const set = new Set();
    data.map(house => set.add(house.propertyAddress.city));
    const locationList = [...set];
    return locationList;
}
export const getPriceList = (data) => {
    const list = data.map(house => house.rentPrice);
    const max = Math.max(...list);
    const n = max%100 ? parseInt(max/100)+1 :parseInt(max/100);

    const priceList = [{
        lowerLimit : 0,
        upperLimit : 100
    }]
    for(let i = 1; i<n;i++){
        const obj = {
            lowerLimit : priceList[i-1].upperLimit+1,
            upperLimit : (i+1)*100
        }
        priceList.push(obj);
    }
    return priceList;
}
export const getPropertyTypeList = (data) => {
    const set = new Set();
    data.map(house => set.add(house.propertyType));
    const propertyTypeList = [...set];
    return propertyTypeList;
}
export const getBedroomsList = (data) => {
    const set = new Set();
    data.map(house => set.add(house.propertyDetails.bedrooms));
    const bedroomsList = [...set];
    bedroomsList.sort();
    return bedroomsList;
}