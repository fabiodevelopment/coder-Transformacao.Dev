import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./MenuItem";


export default function Menu() {
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
            <MenuItem url="#depoimentos" className="hidden sm:flex">
                <span><IconBrandGoogle size={15} stroke={2} /></span>
                <span>Login</span>
            </MenuItem>

        </div>
    )
}