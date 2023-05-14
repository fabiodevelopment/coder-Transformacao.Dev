import Area from "../comum/Area";
import Logo from "../comum/Logo";
import RedesSociais from "./RedeSociais";


export default function Rodape() {
    return (
        <Area className={`
          bg-slate-950 py-20 border-t border-purple-900
            bg-[url('/images/rodape-bg.jpg')]
            bg-no-repeat bg-cover
        `}>
            <div className="flex flex-col items-center md:items-start ">
                <Logo />
                <div className="mt-3 text-zinc-200 text-center md:text-left">
                    <div>Plataforma financeira</div>
                    <div className="flex gap-1.5">que <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">simplifica</span> sua vida</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
                <RedesSociais />
                <p className="text-zinc-100 mt-7 md:mt-0 text-center">
                    <span className="font-bold">COD<span className="text-pink-500">3</span>R</span> ® {new Date().getFullYear()} - Todos os direitos reservados
                </p>
            </div>
        </Area>
    )
}