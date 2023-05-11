import Painel from "@/components/examples/indireta/Painel";
import Pagina from "@/components/template/Pagina";

export default function PaginaIndireta() {
    return (
        <Pagina>
            <div className="flex flex-col gap-5 justify-center items-center h-screen">
                <h1 className="text-5xl font-bold mb-5">Comunicação Indireta</h1>
                <div className="flex gap-5">
                    <Painel />
                </div>
            </div>
        </Pagina>
    )
}