import Alterar from "@/components/examples/contexto/Alterar";
import Exibir from "@/components/examples/contexto/Exibir";
import Pagina from "@/components/template/Pagina";

export default function PaginaContexto() {
    return (
        <Pagina>
            <div className="flex flex-col gap-5 items-center">
                <Exibir />
                <Alterar />
            </div>
        </Pagina>
    )
}