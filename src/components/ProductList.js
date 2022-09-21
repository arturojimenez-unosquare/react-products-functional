import React, {useState,useEffect} from 'react';
import axios from 'axios';


function ProductList ({handlePages,handleDetail}) {
    
	const [post,setPost] = useState([]);
	
	useEffect(() => {
		axios.get('https://dummyjson.com/products')
		.then(response => {
			console.log(response)
			setPost(response.data.products)
		})
		.catch(err => {
			console.log(err)
		})
	},[])

	const handleClick= (product) => {
		console.log('ID', product.id, ' ', 'Description: ', product.description )
		handleDetail(product) 	
		handlePages()	 
	}

    return (
    	<table align = 'center'>
    		<thead>
    			<tr>
    			<th>ID</th>
    			<th>Title</th>
    			<th>Price</th>
    			<th>Action</th>
    			</tr>
    		</thead>

    		{post.map(product => (
    		<tbody key = {product.id}>
    			<tr>
    				<td>{product.id}</td>
    				<td>{product.title}</td>
    				<td>{product.title}</td>
    				<td><button onClick = {() => handleClick(product)}>Product Detail</button></td>
    			</tr>
    		</tbody>

    		))}
    		
    	</table>

    )

}

export default ProductList