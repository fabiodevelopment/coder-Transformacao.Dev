import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

export default function Evento() {

    let [valor, setValor] = useState<number>(0)

    function incrementar() {
        setValor(valor + 1)
        console.log('Incrementar Valor...', valor)
    }

    function decrementar() {
        setValor(valor - 1)
        console.log('Decrementar Valor...', valor)
    }

    return (
        <div className={`
        flex flex-col gap-4 items-center
        `}>
            <span className="text-3xl"><b>Valor: </b>{valor}</span>
            <div className="flex gap-5">
                <button
                    onClick={decrementar}
                >
                    <IconMinus />
                </button>
                <button
                    onClick={incrementar}
                >
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}