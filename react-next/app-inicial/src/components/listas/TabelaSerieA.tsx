interface TabelaSerieAProps {
    times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
    // console.log(props.times)
    const itens: any[] = []

    // For transformação : String > <li>
    for (let i = 0; i < props.times.length; i++) {
        // console.log(props.times[i])
        itens.push(
            <li key={props.times[i]} className="text-xl list-decimal">
                {props.times[i]}
            </li>
        )
    }

    // Map : Fuction : transforma (item array, indice) em uma <li>
    const itens2 = props.times.map((time, i) => {
        return (
            <li key={time}
                className={`
                text-xl list-decimal
                ${i % 2 === 0 ? 'bg-zinc-600' : 'bg-zinc-800'}
            `}
            >
                {time}
            </li>
        )
    })

    return (
        <ol>
            {/* {itens} */}
            {itens2}
        </ol>
    )
}