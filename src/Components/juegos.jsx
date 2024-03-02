import React, {useState} from 'react';


function Juego(props){

    const [numero, setNumero] = useState(0);

    const aumentar = () =>{
        setNumero(numero + 1);
    };
    
    return(
        <div>
            <div className="container px-3 py-2 mx-auto  flex-wrap justify-center rounded-full">
        <p className='font-sans text-2xl'>{props.name}</p> 
        <p className='font-mono text-sm'> Número Veces clickeado: {numero} </p>
        <button onClick={aumentar} > <button className='bg-violet-100 rounded-full p-2 text-red-900 text-xs' onClick = {() => window.open(props.sitio, '_blank')}>Ver página oficial</button> </button>
            </div>
            </div>

    );
}
export default Juego;