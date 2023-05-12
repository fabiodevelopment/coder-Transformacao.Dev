import { useState } from "react"

interface Produto {
    nome: string
    preco: number
    desconto: number
}

export default function Formulario() {

    const [produto, setProduto] = useState<Produto>({
        nome: '',
        preco: 0,
        desconto: 0
    })

    return (
        <div className="flex flex-col gap-5 items-center">
            <span className="flex text-2xl font-black">
                Exemplo Formulario
            </span>
            <div className="flex gap-2 items-center">
                <span>Nome:</span>
                <input
                    type="text"
                    value={produto.nome}
                    className="entrada"
                    onChange={(e) => {
                        setProduto({
                            ...produto,
                            nome: e.target.value
                        })
                    }}
                />
            </div>
            <div className="flex gap-2 items-center">
                <span>Preço:</span>
                <input
                    type="number"
                    value={produto.preco}
                    className="entrada"
                    min={0}
                    step={1}
                    onChange={(e) => {
                        setProduto({
                            ...produto,
                            preco: +e.target.value
                        })
                    }}
                />
            </div>
            <div className="flex gap-2 items-center">
                <span>Desconto:</span>
                <input
                    type="number"
                    value={produto.desconto}
                    className="entrada"
                    min={0}
                    max={0.6}
                    step={0.1}
                    onChange={(e) => {
                        setProduto({
                            ...produto,
                            desconto: +e.target.value
                        })
                    }}
                />
            </div>
            <div className="flex flex-col gap-2">
                <span>{JSON.stringify(produto)}</span>
                <span>{produto.nome}</span>
                <span>R$ {produto.preco}</span>
                <span>R$ {produto.desconto}</span>
                <span>R$ {produto.preco * (1 - produto.desconto)}</span>

            </div>
        </div>
    )
}