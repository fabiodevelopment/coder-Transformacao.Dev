import Linha from "@/components/layout/Linha"
import Menu from "@/components/template/Menu"
import MenuItem from "@/components/template/MenuItem"
import Pagina from "@/components/template/Pagina"
import { IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconComponents, IconH1, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react"

export default function Home() {
  return (
    <Pagina>
      <Menu>
        <Linha>
          <MenuItem icone={<IconSourceCode size={70} strokeWidth={2} />}
            url="/hora.html"
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Hora (Estático)
          </MenuItem>
          <MenuItem icone={<IconSourceCode />}
            url="/horaAtual.html"
            className="bg-gradient-to-r from-red-500 to-orange-500" >
            Hora com JS (Estático)
          </MenuItem>
          <MenuItem icone={<IconClock />}
            url="/api/hora"
            className="bg-gradient-to-r from-red-500 to-orange-500" >
            Hora (Dinâmico)
          </MenuItem>
          <MenuItem icone={<IconTable />}
            url="/api/tabela"
            className="bg-gradient-to-r from-red-500 to-orange-500" >
            Tabela (Dinâmico)
          </MenuItem>
          <MenuItem icone={<IconArrowsDiff />}
            url="/api/usuarios"
            className="bg-gradient-to-r from-red-500 to-orange-500" >
            API de Usuários
          </MenuItem>
        </Linha>
        <Linha>
          <MenuItem icone={<IconComponents />}
            url="/examples/simples"
            className="bg-gradient-to-r from-cyan-500 to-green-500" >
            Componente Simples
          </MenuItem>
          <MenuItem icone={<IconH1 />}
            url="/examples/basico"
            className="bg-gradient-to-r from-cyan-500 to-green-500" >
            Componente Básico
          </MenuItem>
          <MenuItem icone={<IconClick />}
            url="/examples/evento"
            className="bg-gradient-to-r from-cyan-500 to-green-500" >
            Eventos e Estado
          </MenuItem>
          <MenuItem icone={<IconSitemap />}
            url="/examples/filhos"
            className="bg-gradient-to-r from-cyan-500 to-green-500" >
            Filhos
          </MenuItem>
          <MenuItem icone={<IconArrowMoveDown />}
            url="/examples/direta"
            className="bg-gradient-to-r from-cyan-500 to-green-500" >
            Comunicação Direta
          </MenuItem>
          <MenuItem icone={<IconArrowMoveUp />}
            url="/examples/indireta"
            className="bg-gradient-to-r from-cyan-500 to-green-500" >
            Comunicação Indireta
          </MenuItem>
        </Linha>

      </Menu>
    </Pagina>
  )
}
