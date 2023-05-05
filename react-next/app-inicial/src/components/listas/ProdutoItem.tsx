import Produto from "@/model/Produto"
import Moeda from "@/utils/Moeda"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (
        <div className={`
            flex flex-col 
            border border-zinc-600 rounded-md
            p-1
        `}>
            <Image
                src={produto.imagem}
                width={300} height={300}
                alt={produto.nome}
                priority
                className="rounded-md"
            />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">{produto.nome}</div>
                    <div className="text-green-500 text-1xl font-bold">{Moeda.formatar(produto.preco)}</div>
                </div>
                <div>
                    <div className="text-zinc-400 font-normal">{produto.descricao}</div>
                </div>
                <div>
                    <button
                        className="botao flex w-full justify-center gap-2 uppercase"
                        onClick={() => props.comprar(produto)}
                    >
                        <IconShoppingCart />
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}