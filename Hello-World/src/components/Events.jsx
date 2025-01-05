import React from 'react'

const Events = () => {

    const handleMyEvent = (e) => {
        console.log("a")

    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também pode aqui</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique</button>
            </div>

            <div>
                <button onClick={() => console.log("ee")}>Clique</button>
                <button onClick={() => {
                    if(true) {
                        console.log("isso não deveria estar aqui")
                    }
                }}>Clique</button>
            </div>
                {renderSomething(true)}
        </div>
    )
}

export default Events