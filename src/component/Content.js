import React from 'react'
import contentObj from '../asset/data';

const Content= () => {
	return (
		<div>
			<h3>{contentObj.title}</h3>
			<h2>{contentObj.description}</h2>
			<button>{contentObj.buttonText}</button>
		</div>
	)
}
export default Content;