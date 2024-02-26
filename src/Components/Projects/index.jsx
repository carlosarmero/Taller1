export default function Projects() {
    return (
      <><h1 className="bg-amber-500">
        Mis proyectos
      </h1><p className='mt-2 mb-2'>
       A continuacion presento aplicaciones que he desarrollado:
        </p>
        
        <div>
          Crud con Django: Es una pagina web basica conde se puede registrar un usaurio, el cual puede crear,
          leer, actualizar y borrar tareas que deba completar, sean personales o profesionales.
          Haga click en este <button className="bg-cyan-400 text-white text-lg px-1 py-1" onClick={() => window.open('https://crudjango-9som.onrender.com/', '_blank')} >boton</button> para ir a la aplicacion.        
        </div>

        
        <div className="mt-2">
          Gestor de inventario con Java: Es una aplicacion de escritorio donde se puede registrar un usuario, 
          El usuario podrá comprobar el inventario, procesar ventas, registrar pedidos y crear alertas, este 
          software está destinado a mejorar la escala de tiempo para los empleados al realizar las tareas 
          anteriormente.
          Haga click en este <button className="bg-cyan-400 text-white text-lg px-1 py-1" onClick={() => window.open('https://crudjango-9som.onrender.com/', '_blank')} >boton</button> para ir al repositorio 
          Github con el codigo fuente.

          Algunas imagenes de la aplicacion: 

          <img  ></img>

        </div>
        
        </>

        
    )
  }