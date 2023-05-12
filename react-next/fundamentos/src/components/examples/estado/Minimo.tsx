import { useState } from "react"

export default function Minimo() {
    /* let nome = 'Fulano' */

    const [valor, setValor] = useState<string>('Fulano')

    return (
        <div className="flex flex-col gap-5 items-center">

            <span className="text-2xl font-black">Exemplo Estado Mínimo</span>
            <input
                className="entrada"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                type="text"
            />

        </div>
    )
}