import React from 'react'

const Carte = ({recipes = []}) => {
    return (
        <div className="row" >
            {
                recipes.map((item, id) => (
                    <div key={id} className="col">
                        <div className="card">
                            <img src={item.image} alt="ciao"></img>
                            <div>
                                <h5>{item.title}</h5>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Carte
