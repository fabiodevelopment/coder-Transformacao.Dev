import useStarWars from "@/data/hooks/useStarWars"

interface PersonagensProps {
    personagens: any[]
}

export default function Personagens(props: PersonagensProps) {

    function renderizarPersonagens() {
        return (
            <ul>
                {props.personagens.map((personagem: any) => (
                    <li key={personagem.name}>{personagem.name}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            {renderizarPersonagens()}
        </div >
    )
}