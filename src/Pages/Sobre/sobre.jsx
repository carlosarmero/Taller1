export default function Sobre() {
  const data = [
    { name: 'Java', country: 'Junior', bio: 'Se crea aplicacion de escritorio con lenguaje Java' },
    { name: 'Python', country: 'Junior', bio: 'Se crea pagina web basada en patrón CRUD' },
    { name: 'Javascript', country: 'Junior', bio: 'Se hacen diferentes pruebas como esta pagina basada en React' },
    { name: 'SQL', country: 'Junior', bio: 'Se manejan los conceptos basicos de bases de datos relacionales' },
    { name: 'Git', country: 'Junior', bio: 'Uso del conntrol de versiones tanto local como en GitHub' },
    { name: 'HTML Y CSS', country: 'Junior', bio: 'Practicas en diferentes proyectos personales' },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className='bg-violet-200 '>
          <th className="px-4 py-2">Tecnología</th>
          <th className="px-4 py-2">Nivel de experiencia</th>
          <th className="px-4 py-2">Descripción experiencia</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.country}</td>
            <td className="border px-4 py-2">{row.bio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};