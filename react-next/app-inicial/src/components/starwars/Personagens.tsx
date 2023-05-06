import useProcessando from "@/data/hooks/useProcessando"

export default function Personagens() {

    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()

    async function simularChamadaAPI() {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1)
            }, 6000)
        })
    }

    async function obterPersonagens() {
        try {
            iniciarProcessamento()
            await simularChamadaAPI()
        } finally {
            finalizarProcessamento()
        }
    }

    return (
        <div>
            {processando ? (
                <div>Processando...</div>
            ) : (
                <h1>Conteúdo com os personagens</h1>
            )}
            <button onClick={obterPersonagens} className="botao mt-4">
                Obter
            </button>
        </div>
    )
}