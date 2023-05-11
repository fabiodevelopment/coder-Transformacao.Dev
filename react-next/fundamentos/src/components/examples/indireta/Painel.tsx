import { useState } from "react";
import Botoes from "./Botoes";

export default function Painel() {

    const [nome, setNome] = useState<string>('Skatista')

    function mudarValor(atleta: string) {
        setNome(atleta)
    }

    return (
        <div className={`
        flex flex-col items-center gap-5
        `}>
            <h2 className="p-9 text-3xl bg-black border rounded-xl">{nome}</h2>
            <Botoes mudarValor={mudarValor} />
        </div>
    )
}