import Pai from "./Pai";

interface AvoProps {
    nome: string
    sobrenome: string
}

export default function Avo(props: AvoProps) {
    return (
        <div className="flex flex-col gap-5 bg-purple-800 p-5 rounded-md border border-white">
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-bold">Avô</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Pai nome="José" sobrenome={props.sobrenome} />
                <Pai nome="Carlos" sobrenome={props.sobrenome} />
            </div>
        </div>
    )
}