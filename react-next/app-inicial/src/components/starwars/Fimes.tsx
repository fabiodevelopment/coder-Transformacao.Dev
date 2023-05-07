interface FilmesProps {
    filmes: any[]
    voltar: () => void
}

export default function Filmes(props: FilmesProps) {

    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <button className="botao" onClick={props.voltar}>Voltar</button>
            <table className="w-3/5 text-xl rounded-md overflow-hidden">
                <thead>
                    <tr className="bg-zinc-900">
                        <th className="p-2 font-black">Título</th>
                        <th className="p-2 font-black">Episódio</th>
                        <th className="p-2 font-black">Data</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmes.map((filme: any, indice: number) => (
                        <tr
                            key={filme.title}
                            className={`
                            text-center
                            ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-600'}
                        `}
                        >
                            <td className="p-2">{filme.title}</td>
                            <td>{filme.episode_id}</td>
                            <td>{new Date(filme.release_date).toLocaleDateString('pt-BR')}</td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </div>
    )
}