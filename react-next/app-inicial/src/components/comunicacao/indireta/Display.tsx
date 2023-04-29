interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps) {
    return (
        <div className={`
            flex flex-1 justify-center items-center
            bg-zinc-800 text-5xl font-bold rounded-md p-5
        `}>
            {props.valor}
        </div>
    )
}