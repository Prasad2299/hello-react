import React from 'react'

function RestaurantCategory({data}) {
  console.log(data)
  return (
    <div>
      {/* header */}
      <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
        <span>{data.title}</span>
        <span>⬇️</span>
      </div>
      {/* accordian body */}
    </div>
  );
}

export default RestaurantCategory