import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const pastaData = [
    {
        name: "Italian Pasta",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pastas/italian-pasta.jpeg",
        soldOut: false,
    },
    {
        name: "Stanley Tucci Pasta",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pastas/stanley-tucci-pasta.jpeg",
        soldOut: false,
    },
    {
        name: "Pink Sauce Pasta",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pastas/pink-sauce-pasta.jpeg",
        soldOut: false,
    },
    {
        name: "Red Sauce Pasta",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pastas/red-sauce-pasta.jpeg",
        soldOut: false,
    },
    {
        name: "Pasta Red White Sauce",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pastas/red-white-sauce-pasta.jpeg",
        soldOut: true,
    },
    {
        name: "Baked Pasta",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pastas/baked-pasta.jpeg",
        soldOut: false,
    },
];

function Header() {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
    const style = {};

    return (
        <header className="header">
            <h1 style={style}>Pasta Menu</h1>
        </header>
    );
}

function Menu() {
    const pastas = pastaData;
    // const pastas = [];
    const numpastas = pastas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>

            {numpastas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All
                        from our stone oven, all organic, all delicious.
                    </p>

                    <ul className="pastas">
                        {pastas.map((pasta) => (
                            <Pasta pastaObj={pasta} key={pasta.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </main>
    );
}

function Pasta({ pastaObj }) {
    console.log(pastaObj);

    return (
        <li className={`pasta ${pastaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pastaObj.photoName} alt={pastaObj.name} />
            <div>
                <h3>{pastaObj.name}</h3>
                <p>{pastaObj.ingredients}</p>

                <span>{pastaObj.soldOut ? "SOLD OUT" : pastaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    );

    // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
                online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<StrictMode><App /></StrictMode>)