import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false
    }
]

const App = () => (
    <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
);

const Header = () => {
    const style = {};

    return (
        <header className="header">
            <h1 style={style}>Pizza Menu</h1>
        </header>
    )
}

const Menu = () => {
    return (<h1>Menu</h1>)
}

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {
                isOpen ? (
                    <Order closeHour={closeHour} openHour={openHour} />
                ) : (
                    <p>
                        We're happly to welcome you between {openHour}:00 and {closeHour}:00.
                    </p>
                )
            }
        </footer>
    )
}

const Order = ({ closeHour, openHour }) => {
    return (
        <div className="order">
            <p>
                we're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)