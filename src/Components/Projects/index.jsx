import React, {useState} from 'react'
//import {motion} from 'framer-motion'

const CardProject = () => {
  return (

    <><p className='mt-2 mb-2'>
      A continuacion presento aplicaciones que he desarrollado:
    </p>
    <section className="text-gray-600 body-font bg-cyan-100">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 lg:w-1/2 md:w-full ">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-blue-100">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestor de Tareas</h2>
                  <p className="leading-relaxed text-base">Es una página web basica conde se puede registrar un usuario, el cual puede crear, leer, actualizar y borrar tareas que deba completar, sean personales o profesionales.</p>
                  <a className="mt-3 text-blue-500 inline-flex items-center" href='https://crudjango-9som.onrender.com/'>Ir al sitio
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-blue-100">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gestor de inventario con Java</h2>
                  <p className="leading-relaxed text-base">El usuario podrá comprobar el inventario y actualizarlo, procesar ventas, registrar pedidos. Este 
    software está destinado a mejorar el uso del de tiempo para los empleados al realizar las tareas mencionadas
    anteriormente.</p>
                  <a className="mt-3 text-blue-500 inline-flex items-center" href='https://github.com/carlosarmero/adsi'>Enlace al codigo en GitHub
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}
export default CardProject
