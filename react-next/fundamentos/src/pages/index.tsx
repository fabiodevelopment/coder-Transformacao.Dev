import { Icon24Hours } from "@tabler/icons-react"

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-black text-white text-6xl

    `}>
      <Icon24Hours size={100} strokeWidth={1} />
      <span>Fundamentos</span>

    </div>
  )
}
