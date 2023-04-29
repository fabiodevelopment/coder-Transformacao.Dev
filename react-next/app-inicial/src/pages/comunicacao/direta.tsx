import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 className="text-5xl font-bold mb-5">Comunicação Direta</h1>
            <Avo nome="Bolivar" sobrenome="Paes" />
            <Avo nome="Camel" sobrenome="Haddad" />
        </div>
    )
}