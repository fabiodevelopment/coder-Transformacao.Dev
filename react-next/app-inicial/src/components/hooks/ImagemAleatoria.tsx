import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {

    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)
    const url = 'https://source.unsplash.com/featured/'

    function renderizarBotao(valor: string) {
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                    setPesquisa(valor)
                }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <div className="flex justify-center gap-7 mb-5">
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <Image
                className="rounded-md"
                src={`${url}${tamanho}x${tamanho}?${pesquisa}`}
                height={300} width={300}
                alt="Imagem" priority
            />
            <div className="flex gap-5 justify-between">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
            <div>
                <input
                    className="bg-zinc-800 p-3 w-full rounded-md"
                    type="number"
                    value={tamanho}
                    onChange={e => {
                        setTamanho(+e.target.value)
                    }}
                />
            </div>
        </div>
    )
}