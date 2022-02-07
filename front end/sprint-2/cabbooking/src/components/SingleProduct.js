import React from 'react'
import { useParams } from 'react-router-dom';

function SingleProduct() {


    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>USER</h1>
        </div>
    )
}

export default SingleProduct
