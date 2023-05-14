import Area from "../comum/Area";
import Logo from "../comum/Logo";
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <Area className="bg-violet-900 fixed z-50">
            <div className="flex items-center justify-between h-20">
                <Logo />
                <Menu />
            </div>
        </Area>
    )
}