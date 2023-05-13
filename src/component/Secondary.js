import React from 'react'
import pr1 from '../asset/image/pr1.png'
import pr2 from '../asset/image/pr2.png'
import pr3 from '../asset/image/pr3.png'
import ProductCard from './ProductCard'
import Content from './Content';

const products=[
	{
		image: pr1,
		title: 'Organic Skinny High Wait Jeans 1',
		price: '33.95',
		currency: 'euro',
		colors: ['orange','green','pink','red']
	},
	{
		image: pr2,
		title: 'Organic Skinny High Wait Jeans 2',
		price: '33.95',
		currency: 'euro',
		colors: ['orange','green','pink','red']
	},
	{
		image: pr3,
		title: 'Signature Hoodie',
		price: '33.95',
		currency: 'euro',
		colors: ['orange','green','pink','red']
	}
];

const Secondary= () => {
	
	return (
		<div>
			<div className="app-content">
				<Content />
			</div>
			<div className="product-list">
				{products.map(i => <ProductCard item={i} />)}
			</div>
		</div>
	)
}
export default Secondary;