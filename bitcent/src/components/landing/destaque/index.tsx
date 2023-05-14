import Area from "../comum/Area";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import Slogan from "./Slogan";
import destaqueImage from "../../../../public/images/destaque-img.png"

export default function Destaque() {
    return (
        <Area id="inicio" className={`
            mt-20
            bg-[url('/images/destaque-bg.jpg')]
            bg-no-repeat bg-cover
        `}>
            <div className={`
                flex items-center justify-around
                h-[500px]
            `}>
                <Slogan />
                <ImagemResponsiva
                    imagem={destaqueImage}
                    alt="Imagem de destaque"
                    className="border border-purple-900 hidden md:inline bg-indigo-950"
                />
            </div>
        </Area>
    )
}