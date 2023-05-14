import Link from "next/link"
import React from "react"


interface RedeSocialProps {
    icone: any
    url: string
}

export default function RedeSocial(props: RedeSocialProps) {
    return (
        <Link href={props.url} target="_blank">
            <div className="bg-pink-500 rounded-md p-1 mr-3 cursor-pointer">
                {React.cloneElement(props.icone, {
                    size: 35,
                    strokeWidth: 1,
                    className: "text-white",
                })}
            </div>
        </Link>
    )
}