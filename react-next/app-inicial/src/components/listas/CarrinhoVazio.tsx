import { IconCircleX } from "@tabler/icons-react";

export default function CarrinhoVazio() {
    return (
        <div className="flex justify-center items-center gap-2 text-zinc-500">
            <IconCircleX />
            <span> Nenhum item no Carrinho</span>
        </div>
    )
}