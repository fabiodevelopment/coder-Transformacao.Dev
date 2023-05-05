import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/Moeda";
import Image from "next/image";

export default function CarrinhoItem(props: ItemCarrinho) {

    return (
        <div className={`
            flex rounded-md border border-zinc-700 p-2 gap-5 bg-zinc-900
        `}>
            <div>
                <Image
                    src={props.produto.imagem}
                    width={50}
                    height={50}
                    alt={props.produto.nome}
                />
            </div>
            <div className="flex justify-center items-center">
                {props.quantidade}
            </div>
            <div className="flex justify-center items-center text-1xl font-bold">
                {props.produto.nome}
            </div>
            <div className="flex justify-center items-center p-2 text-green-500 font-bold">
                {Moeda.formatar(props.produto.preco * props.quantidade)}
            </div>
        </div>
    )
}