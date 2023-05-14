import Image from "next/image"

interface DepoimentoProps {
    avatar: string
    nome: string
    titulo: string
    texto: string
    destaque?: boolean
}

export default function Depoimento(props: DepoimentoProps) {
    return (
        <div className={`
            flex flex-col justify-center items-center gap-3
            bg-indigo-950 p-7 rounded-md w-[350px] h-[300px]
            border border-purple-950 
            ${props.destaque && 'xl:h-[350px]'}
        `}>
            <Image
                src={props.avatar}
                alt="Avatar"
                width={80}
                height={80}
                className={`
                    max-w-[80px] max-h-[80px] object-cover
                    rounded-tl-xl rounded-b-xl
                `}
            />
            <div className="flex flex-col items-center">
                <span className={`
                    text-xl text-white font-black
                `}>{props.nome}</span>
                <span className={`
                    text-sm text-zinc-200 font-thin
                `}>{props.titulo}</span>
            </div>
            <p className="text-center text-zinc-100">
                {props.texto}
            </p>
        </div>
    )
}