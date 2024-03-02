export default function Sobre() {
  const data = [
    { name: 'Java', nivel: 'Junior', exp: 'Se crea aplicacion de escritorio con lenguaje Java' },
    { name: 'Python', nivel: 'Junior', exp: 'Se crea pagina web basada en patrón CRUD' },
    { name: 'Javascript', nivel: 'Junior', exp: 'Se hacen diferentes pruebas como esta pagina basada en React' },
    { name: 'SQL', nivel: 'Junior', exp: 'Se manejan los conceptos basicos de bases de datos relacionales' },
    { name: 'Git', nivel: 'Junior', exp: 'Uso del conntrol de versiones tanto local como en GitHub' },
    { name: 'HTML Y CSS', nivel: 'Junior', exp: 'Practicas en diferentes proyectos personales' },
  ];

  return (
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
  );
};