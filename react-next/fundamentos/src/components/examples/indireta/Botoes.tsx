interface BotoesProps {
    mudarValor: (atleta: string) => void
}

export default function Botoes(props: BotoesProps) {
    return (
        <div className="flex gap-4">
            <button
                onClick={() => props.mudarValor('Tony Hank')}
                className="botao">
                Tony Hank
            </button>
            <button
                onClick={() => props.mudarValor('Bob Burnquist')}
                className="botao">
                Bob Burnquist
            </button>
        </div>
    )
}