import Personagens from "@/components/starwars/Personagens";
import Background from "@/components/starwars/background";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personagens, obterPersonagens } = useStarWars()

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <Background />

            <button onClick={obterPersonagens} className="botao mt-4">
                Obter
            </button>

            {processando ? (
                <div>Processando...</div>
            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} />
            ) : (
                <div>Nenhum personagem</div>
            )}

        </div>
    )
}