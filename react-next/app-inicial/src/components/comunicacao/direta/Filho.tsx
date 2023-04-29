interface FilhoProps {
    nome: string
    sobrenome: string
}

export default function Filho(props: FilhoProps) {
    return (
        <div className={`
            flex flex-col justify-center items-center
            bg-green-500 rounded-md p-5
            border border-white
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-bold">Filho</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
        </div>
    )
}