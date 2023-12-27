import React from 'react'
import './productcomp.css'
const ProductComp = () => {
  return (
<table className="table-borderless product-table mb-4">
  <thead>
    <tr>
      <th >اسم المنتج</th>
      <th >التغليف الخارجي</th>
      <th >عبوة الكرتونة /الجونية</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>زهرة باكتات عبوة 200 جرام</td>
      <td>كرتونة</td>
      <td>48 باكت</td>
    </tr>
    <tr>
    <td>زهرة باكتات 200 جرام</td>
      <td>كرتونة</td>
      <td>شنطة</td>
    </tr>
    <tr>
    <td>زهرة اكياس 2 كيلو</td>
      <td >24 باكت</td>
      <td >6 اكياس</td>
    </tr>
    <tr>
    <td>زهرة اكياس 2 كيلو</td>
      <td >24 باكت</td>
      <td >6 اكياس</td>
    </tr>
    
  </tbody>
</table>
  )
}

export default ProductComp