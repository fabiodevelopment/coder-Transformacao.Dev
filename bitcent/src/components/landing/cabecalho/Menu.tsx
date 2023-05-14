import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./MenuItem";


export default function Menu() {

    function loginGoogle() {
        console.log('loginGoogle')
    }

    return (
        <div className="flex gap-2">
            <MenuItem url="#inicio" className="hidden sm:flex">
                Início
            </MenuItem>
            <MenuItem url="#vantagens" className="hidden sm:flex">
                Vantagens
            </MenuItem>
            <MenuItem url="#depoimentos" className="hidden sm:flex">
                Depoimentos
            </MenuItem>
            <MenuItem onClick={loginGoogle} url="#depoimentos" className="hidden sm:flex bg-gradient-to-r from-pink-500 to-violet-500">
                <div className="flex items-center gap-2">
                    <span><IconBrandGoogle size={15} strokeWidth={2} /></span>
                    <span>Login</span>
                </div>
            </MenuItem>

        </div>
    )
}