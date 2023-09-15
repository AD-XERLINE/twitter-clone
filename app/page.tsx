
import ContentForm from "@/components/Posts/ContentForm";
import TopSide from "@/components/TopSIde";
import '@/style/page.css'

export default function Home() {

  return (
    <div>
      <TopSide label="Home" />

      <ContentForm  />
    </div>
  )
}
