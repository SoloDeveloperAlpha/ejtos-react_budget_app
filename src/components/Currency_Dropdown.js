import React from "react";
const Currency= () => {
    return (
        <div className='currency'>
        <select id="curr" name="curr">
            <option value="Dolar">$ Dolar</option>
            <option value="Pound">£ Pound</option>
            <option value="Euro">€ Euro</option>
            <option value="Ruppee">₹ Ruppee</option>
    </select>
        </div>
    );
}

export default Currency;