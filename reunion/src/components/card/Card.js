import React from 'react'
import {IoBedOutline} from 'react-icons/io5';
import {BiArea, BiBath} from 'react-icons/bi'
import {BsBookmarkStar} from 'react-icons/bs'

const Card = ({house}) => {
    const address = house.propertyAddress;
    const details = house.propertyDetails;
  return (
    <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3 font-[Montserrat]">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56 p-4" style={{backgroundImage: `url(${house.imgURL})`}}>
                <div className="flex justify-end">
                    <svg className="h-6 w-6 text-white fill-current cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                    </svg>
                </div>
            </div>
            <div className="p-4">
                <div className='flex items-center justify-between'>
                    <p className="tracking-wide text-sm text-[#b8aae9]"><span className='text-lg font-semibold text-blue-700'>${house.rentPrice}</span>/month</p>
                    {house.propertyTag.length ? <div className="bg-[#7064f1] text-white px-3 rounded-md py-2 flex items-center uppercase text-xs font-medium"> <BsBookmarkStar className='text-blue-100 mr-2'/>{house.propertyTag}</div> : <></>}
                </div>
                <p className="text-black text-lg font-bold">{house.propertyName}</p>
                <p className="tracking-wide text-sm text-gray-500">{address.address}, {address.city}, {address.state}</p>
            </div>
            
            <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div className="flex items-center justify-between pt-2">
                    <div className='flex'><IoBedOutline className='text-blue-700 mr-2'/> <span className='text-xs text-gray-600 font-medium'>{details.bedrooms} Bedrooms</span> </div>
                    <div className='flex'><BiBath className='text-blue-700 mr-2'/><span className='text-xs text-gray-600 font-medium'>{details.bathrooms} Bathrooms</span></div>
                    <div className='flex'><BiArea className='text-blue-700 mr-2'/><span className='text-xs text-gray-600 font-medium'>{details.plotWidth} x {details.plotLength} m<sup>2</sup></span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card