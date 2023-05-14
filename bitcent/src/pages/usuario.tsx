import { useContext } from "react";
import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import Pagina from "@/components/template/Pagina";
import TituloPagina from "@/components/template/TituloPagina";
import { IconForms } from "@tabler/icons-react";
import Formularios from "@/components/usuario/Formularios";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function CadastroUsuario() {

    const { usuario } = useContext(AutenticacaoContext)

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
                <TituloPagina
                    icone={<IconForms />}
                    principal="Dados Cadastrais"
                    secundario={`Informações de ${usuario?.email}`}
                />
                <Formularios />
            </Conteudo>
        </Pagina>
    )
}
