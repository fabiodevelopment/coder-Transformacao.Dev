interface PaginaProps {
    externa?: boolean
    children: any
    clasName?: string
}


export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
            flex flex-col min-h-screen
            ${props.externa ? (
                'bg-gradient-to-b from-violet-950 to-slate-950'
            ) : (
                'bg-neutral-950'
            )}
        `}>
            {props.children}
        </div>
    )
}