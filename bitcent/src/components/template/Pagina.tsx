interface PaginaProps {
    externa?: boolean
    children: any
    clasName?: string
}


export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
            flex flex-col min-h-screen
            bg-gradient-to-b from-violet-950 to-slate-950
        `}>
            {props.children}
        </div>
    )
}