import { useCallback, useEffect, useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [personagens, setPersonagens] = useState<any>([])

    const obterPersonagens = useCallback(async function () {
        try {
            console.log('obter personagens...')
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/people/')
            const dados = await resp.json()
            setPersonagens(dados.results)
        } finally {
            finalizarProcessamento()
        }
    }, [iniciarProcessamento, finalizarProcessamento])

    useEffect(() => {
        obterPersonagens()
    }, [obterPersonagens])



    return {
        personagens,
        processando
    }
}