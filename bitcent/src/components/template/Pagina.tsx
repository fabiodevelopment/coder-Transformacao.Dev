import ForcarAutenticacao from "../autenticacao/ForcarAutenticacao"

interface PaginaProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {

    function renderizar() {
        return (
            <div className={`
                    flex flex-col min-h-screen
                    ${props.externa ? (
                    'bg-gradient-to-b from-violet-950 to-slate-950'
                ) : (
                    'bg-neutral-950'
                )}
                    ${props.className ?? ''}
                `}>
                {props.children}
            </div>
        )
    }

    return props.externa ? renderizar() : (
        <ForcarAutenticacao>
            {renderizar()}
        </ForcarAutenticacao>
    )
}