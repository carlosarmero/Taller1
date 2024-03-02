import Juego from '../../Components/juegos';
import React, {useState} from 'react';

export default function Home(prop) {
  
  return (
      
      <><h1 className="text-4xl font-bold underline text-slate-600">
        Hola Bootcampers!
      </h1>

      <div className='m-2 bg-fuchsia-300 rounded'><h2 className="text-3xl">Les muestro detalles de mis juegos de video favoritos</h2>
      <Juego name = 'Red dead redemption'
      sitio = 'https://www.xbox.com/es-CO/games/store/red-dead-redemption/bwklfhwt7dhc'
      />
      <Juego name = 'Grand theft auto'
      sitio = 'https://www.rockstargames.com/es/gta-v'
      />
      <Juego name = 'Fifa'
      sitio = 'https://www.ea.com/es-mx/games/ea-sports-fc/fc-24'
      />
      </div>
      </>
          )
  }

