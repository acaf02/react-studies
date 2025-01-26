import React from 'react'
import "./MyComponent.css"

const MyComponent = () => {
    return (
        <div>
            <h1>Css de componente</h1>
            <p>esse é o paragafo do componente</p>
            <p className='my-comp-paragraph'>este tbm é do componente</p>
        </div>
    )
}

export default MyComponent