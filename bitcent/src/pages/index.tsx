import Financas from "@/components/financas";
import Landing from "@/components/landing";
import Carregando from "@/components/template/Carregando";
import Pagina from "@/components/template/Pagina";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useContext } from "react";


export default function PaginaHome() {
  const { usuario, carregando } = useContext(AutenticacaoContext)

  if (carregando) return <Carregando />

  return usuario ? (
    <Financas />
  ) : (
    < Landing />
  )
}
