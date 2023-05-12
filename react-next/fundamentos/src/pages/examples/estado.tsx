import Formulario from "@/components/examples/estado/Formulario";
import Minimo from "@/components/examples/estado/Minimo";
import Pagina from "@/components/template/Pagina";

export default function PaginaEstado() {
    return (
        <Pagina>
            <div className="flex flex-col gap-10 items-center">
                <Minimo />
                <Formulario />
            </div>
        </Pagina>
    )
}