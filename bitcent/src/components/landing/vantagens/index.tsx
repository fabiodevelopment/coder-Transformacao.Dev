import Area from "../comum/Area";
import Vantagem from "./Vantagem";
import destaqueImage from "../../../../public/images/destaque-img.png"
import vantagem1 from "../../../../public/images/vantagem-1.png"
import vantagem2 from "../../../../public/images/vantagem-2.png"
import vantagem3 from "../../../../public/images/vantagem-3.png"

export default function Vantagens() {
    return (
        <Area id="vantagens" className="border-t border-b border-purple-900 py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={vantagem1}
                    alt="Gerenciador"
                    titulo="Gerenciador financeiro completo e simples de usar"
                    subtitulo="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
                />
                <Vantagem
                    imagem={vantagem2}
                    alt="Organizado"
                    titulo="Organizado para você nunca mais esquecer uma conta"
                    subtitulo="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
                    inverter
                />
                <Vantagem
                    imagem={vantagem3}
                    alt="Planejamento"
                    titulo="Ideal para planejamento financeiro"
                    subtitulo="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
                />
            </div>
        </Area>
    )
}