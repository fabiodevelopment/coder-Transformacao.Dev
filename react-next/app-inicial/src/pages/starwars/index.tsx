import Personagens from "@/components/starwars/Personagens";
import Background from "@/components/starwars/background";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personagens } = useStarWars()

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5 relative">
            <Background />

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