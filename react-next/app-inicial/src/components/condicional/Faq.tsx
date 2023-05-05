import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {

    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/5">
            <Pergunta
                indice={0}
                aberta={ativo === 0}
                texto="Quem descobriu o Brasil?" resposta="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={1}
                aberta={ativo === 1}
                texto="O que é TypeScript?" resposta="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={2}
                aberta={ativo === 2}
                texto="React é um framework?" resposta="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta
                indice={3}
                aberta={ativo === 3}
                texto="Quais as principais funcionalidades do NextJS?" resposta="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}