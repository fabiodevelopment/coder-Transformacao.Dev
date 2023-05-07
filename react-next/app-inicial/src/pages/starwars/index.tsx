import Filmes from "@/components/starwars/Fimes";
import Personagens from "@/components/starwars/Personagens";
import Background from "@/components/starwars/background";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personagens, filmes, voltar, selecionarPersonagem } = useStarWars()

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5 relative">
            <Background />

            {processando ? (
                <div>Processando...</div>
            ) : filmes.length > 0 ? (
                <Filmes filmes={filmes} voltar={voltar} />
            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} selecionar={selecionarPersonagem} />
            ) : (
                <div>Dados não encontrados</div>
            )}

        </div>
    )
}