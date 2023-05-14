import Link from "next/link"

interface MenuItemProps {
    children: any
    className?: string
    url?: string
    onClick?: () => void
}


export default function MenuItem(props: MenuItemProps) {

    function renderizarBotao() {
        console.log('renderizarBotao')
        return (
            <div className={`
                flex justify-center items-center cursor-pointer
                text-zinc-300 m-2 p-4 rounded-md h-9
                ${props.className ?? ''}
            `} onClick={props.onClick}>
                {props.children}
            </div>
        )
    }

    return props.url ? (
        <Link href={props.url} >{renderizarBotao()}</Link>
    ) : renderizarBotao()

}