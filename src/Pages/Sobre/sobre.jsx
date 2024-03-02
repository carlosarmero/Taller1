export default function Sobre() {
  const data = [
    { name: 'Java', nivel: 'Junior', exp: 'Se crea aplicación de escritorio con lenguaje Java' },
    { name: 'Python', nivel: 'Junior', exp: 'Se crea pagina web basada en patrón CRUD' },
    { name: 'Javascript', nivel: 'Junior', exp: 'Se hacen diferentes pruebas como esta página basada en React' },
    { name: 'SQL', nivel: 'Junior', exp: 'Se manejan los conceptos básicos de bases de datos relacionales' },
    { name: 'Git', nivel: 'Junior', exp: 'Uso del control de versiones tanto local como en GitHub' },
    { name: 'HTML Y CSS', nivel: 'Junior', exp: 'Practicas en diferentes proyectos personales' },
  ];

  return (

    <> <div className="bg-amber-100">
    <div className="mb-2 bg-yellow-100">
       <p><header className="mb-2 font-bold text-2xl">Tecnólogo en análisis y desarrollo de Sistemas de Información</header>
       

Conocimiento de los conceptos básicos en SQL, HTML, CSS, JavaScript, JAVA, GIT, Python y la disposición de aprender. Ingles avanzado B2+. Entusiasmo por mi trabajo y muy profesional, aprendo con rapidez nuevas ideas y conceptos y me gusta desarrollar soluciones creativas e innovadoras, capaz de trabajar en proyectos motivados por conseguir los objetivos
       </p>
      </div>
      
      <table className="table-auto w-full bg-rose-50">
      <thead>
        <tr className='bg-orange-400 '>
          <th className="px-4 py-2">Tecnología</th>
          <th className="px-4 py-2">Nivel de experiencia</th>
          <th className="px-4 py-2">Descripción experiencia</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.nivel}</td>
            <td className="border px-4 py-2">{row.exp}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div></>
  );
};