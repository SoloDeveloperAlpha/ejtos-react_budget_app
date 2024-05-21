import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import "../App.css";

const Currency= () => {
    const {currency} = useContext(AppContext);
    const [listSelect , setListSelect] = useState("$ Dolar");
    const [despliegue,setDespliegue] = useState("none");
    const CambiarMoneda = (event) => {
        setListSelect(event.target.innerHTML);
    }
    const Despliegue = () =>{
        if(despliegue === "none"){
            setDespliegue("block");
        }else{
            setDespliegue("none");
        }
    }

    return (
        <div className='currency' onClick={Despliegue}>
            <span>Currency {listSelect} <i className="ri-arrow-drop-down-line"></i></span>
            <ul id="curr" style={{display: despliegue}}>
                <li onClick={CambiarMoneda}>{currency[0].valor} {currency[0].id}</li>
                <li onClick={CambiarMoneda}>{currency[1].valor} {currency[1].id}</li>
                <li onClick={CambiarMoneda}>{currency[2].valor} {currency[2].id}</li>
                <li onClick={CambiarMoneda}>{currency[3].valor} {currency[3].id}</li>
            </ul>
        </div>
    );
}

export default Currency;