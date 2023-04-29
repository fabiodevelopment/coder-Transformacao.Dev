import Filho from "./Filho";

interface PaiProps {
    nome: string
    sobrenome: string
}

export default function Pai(props: PaiProps) {
    return (
        <div className={`
            flex flex-col gap-5 bg-blue-500 text-white border border-white p-5 rounded-md
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-bold">Pai</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Filho nome="Renata" sobrenome={props.sobrenome} />
                <Filho nome="Marcelo" sobrenome={props.sobrenome} />
            </div>
        </div>
    )
}