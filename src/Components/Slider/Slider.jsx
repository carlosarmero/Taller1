import Slider from 'react-slick';//crea carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Pages/App/App.css'

function Eslider() {

    const settings ={
      dots: true,
      infinite: true,
      speed: 2000,
      slideToShow: 3,
      slideToScroll: 1,
      autoplay: true,
      autoplayspeed: 30
      
    };
  
    return (
      <div>
      
      <div className='w-3/4 m-auto bg-lime-300'>
        <div className='mt-30'>
          <Slider {...settings}>
            {data.map((d)=>(
            <div><div key={d.name} className="">
                <img src={d.img} alt='' className='h-44 w-44 rounded-full mt-10 mb-2 my-auto mx-auto' />
              </div>
              <div className='flex flex-col item-center justify-center gap-1 p-1'>
                  <p className='text-xl font-semibold'>Nombre: {d.name}</p>
                  <p className='text-center'>Area: {d.review}</p>
                  <p className='text-center'>Reseña: {d.resena}</p>
                  
                  <button className='bg-indigo-400 text-white text-lg px-4 py-2' onClick = {() => window.open(d.twitter, '_blank')}>
                    Equis X (antes twitter)
                    </button>
                    <button className='bg-cyan-400 text-white text-lg px-4 py-2' onClick = {() => window.open(d.linkedin, '_blank')}>
                    Linkedin
                    </button>
                    <button className='bg-rose-400 text-white text-lg px-4 py-1' onClick = {() => window.open(d.youtube, '_blank')}>
                    Youtube
                    </button>
              </div>
            </div>  
            ) )}
          </Slider>
        </div>
      </div>    
      </div>
    )
  }
  
  const data = [{
    name:`Brais Moure`,
    img:`../../src/assets/fotos/brais.png`,
    review:`Software Developer`,
    resena: `💻 Software engineer
    👋 Freelance fullstack
    ⭐️ GitHub Star, Microsoft MVP, GDG
    📚 Enseño programación
    📺 YouTube, Twitch, Discord & Elgato partner`,
    linkedin:'https://www.linkedin.com/in/braismoure/',
    youtube:'https://www.youtube.com/@mouredev',
    twitter:'https://twitter.com/MoureDev'
   },
   {
    name:`Fatz`,
    img:`../src/assets/fotos/fatz.png`,
    review:`Ingeniero de software`,
    resena: `Fazt es un canal en donde podrás encontrar una variedad de videos de programación, desarrollo Web y muchos otros temas relacionados al mundo de la informática en general.`,
    linkedin:'https://linkedin.com/company/fazttech/',
    youtube:'https://www.youtube.com/@FaztTech',
    twitter:'https://twitter.com/FaztTech'
   },
   {
    name:`Programador X`,
    img:`../src/assets/fotos/xx.png`,
    review:`Educador en informatica`,
    resena: `🌟 Fui ingeniero en AWS y programé para Google. Te guío a ser programador PRO! 🚀
    🧑‍💻 MI ACADEMIA 👉 https://www.academia-x.com
    📕 MI LIBRO DE HTML GRATIS 🔥🆓🔥 👉 https://www.academia-x.com/html-gratis.`,
    linkedin:'https://linkedin.com/in/xavier-reyes-ochoa',
    youtube:'https://www.youtube.com/@ProgramadorX',
    twitter:'https://twitter.com/programador_x_'
   },
  ];
  
  export default Eslider