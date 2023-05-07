import { IconCheck } from "@tabler/icons-react"

interface PersonagensProps {
    personagens: any[]
    selecionar: (personagem: any) => void
}

export default function Personagens(props: PersonagensProps) {

    return (
        <table className="w-3/5 text-xl rounded-md overflow-hidden">
            <thead>
                <tr className="bg-zinc-900">
                    <th className="p-2 font-black">Nome</th>
                    <th className="p-2 font-black">Altura</th>
                    <th className="p-2 font-black">Peso</th>
                    <th className="p-2 font-black">Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.personagens.map((personagem: any, indice: number) => (
                    <tr
                        key={personagem.name}
                        className={`
                            text-center
                            ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-600'}
                        `}
                    >
                        <td className="p-2">{personagem.name}</td>
                        <td>{personagem.height}</td>
                        <td>{personagem.mass}</td>
                        <td>
                            <button className="botao" onClick={() => props.selecionar(personagem)}>
                                <IconCheck size={20} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}