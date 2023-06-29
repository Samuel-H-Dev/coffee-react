import { useState } from "react"


export default function Beverage() {
    const [Beverage, getBeverage] = useState("reds")
    const [drinkList, setDrinkList] = useState()


    const getDrink = async (type) => {
        const res = await fetch(`https://api.sampleapis.com/wines/${type}`)
        const data = await res.json()
        setDrinkList(data)
    }

    return (
        <section>
            <nav>
                <button onClick={() => { getBeverage("reds") }}>Red</button>
                <button onClick={() => { getBeverage("whites") }}>White</button>
                <button onClick={() => { getBeverage("sparkling") }}>Sparkling</button>
                <button onClick={() => { getBeverage("rose") }}>Rose</button>
                <button onClick={() => { getBeverage("dessert") }}>Dessert</button>
                <button onClick={() => { getBeverage("port") }}>Port</button>

            </nav>
            <div>
                <button onClick={ () => getDrink(Beverage)}>Get Drink</button>
            </div>

            <h2>{Beverage}</h2>


            <div className="drink-list">
                {
                    !drinkList
                        ? <p>Please select a beverage</p>
                        : drinkList.map( (element, index) => {
                            return (
                                <div key={index}>
                                    <img src={element.image} alt="cover" />

                                    <h3>{element.wine}</h3>
                                    <p>Location: {element.location}</p>
                                    <p>Rating: {element.rating.average}</p>
                                    <p>Reviews: {element.rating.reviews}</p>
                                </div>)

                        }
                        )

                }

            </div>

        </section>

    )
}