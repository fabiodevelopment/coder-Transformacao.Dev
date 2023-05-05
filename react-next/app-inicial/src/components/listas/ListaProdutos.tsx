import Produto from "@/model/Produto"
import ProdutoItem from "./ProdutoItem"

interface ListaProdutosProps {
    produtos: Produto[]
    comprar: (produto: Produto) => void
}

export default function ListaProdutos(props: ListaProdutosProps) {

    // console.log(props.produtos)
    return (
        <div className="flex flex-wrap gap-3 my-3">
            {props.produtos.map((produto) => {
                return <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar} />
            })}
        </div>
    )
}