import React from 'react'

const InfoCard= ({data}) => {
	const {title,price,colors}=data
	return (
		<div className="info-card">
			<h1>{title}</h1>
			<h1>€{price}</h1>
			<div className="color-circle">
				{colors.map((c) => <p style={{backgroundColor:c}}></p>)}
			</div>
		</div>
	)
}
export default InfoCard;