import React from 'react';
import InfoCard from './InfoCard'

const ProductCard= ({item}) => {
	return (
		<div className="product-card">
			<img data-testid="primaryImg" src={item.image} alt="bg"></img>
			<InfoCard data={item} />
		</div>
	)
}
export default ProductCard;