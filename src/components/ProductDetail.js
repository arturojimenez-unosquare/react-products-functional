import React, {useState,useEffect} from 'react';

function ProductDetail ({handleDetail,handleBack}) {

 
return (

		<div>
			<div>Product ID: {handleDetail.id}</div>
			<div>Product Description: {handleDetail.description}</div>
			<div> Product Brand: {handleDetail.brand} </div>
			<div> <button onClick ={handleBack}> Back Product List</ button> </div>
		</div>
	)


}

export default ProductDetail