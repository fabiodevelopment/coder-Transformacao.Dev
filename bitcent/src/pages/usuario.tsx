import Cabecalho from "@/components/template/Cabecalho";
import Pagina from "@/components/template/Pagina";
import Id from "@/logic/core/comum/Id";


export default function CadastroUsuario() {
    return (
        <Pagina>
            <Cabecalho />
            <div>
                Usuário!!! {Id.novo()}
            </div>
        </Pagina>
    )
}
