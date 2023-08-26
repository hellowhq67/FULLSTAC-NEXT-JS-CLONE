import Asidebar from '@/componet/Asidebar'
import Conteiner from '@/componet/Conteiner'
import Navbar from '@/componet/Navbar'
import { useRouter } from 'next/router'
import styels from "@/styles/Docs.module.css"
import SideConetet from '@/componet/SideConetet'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Page() {
  const router = useRouter()
  const [content, setContent] = useState([])
  useEffect(() => {

    axios.get('https://fullstac-next-js-clone-eiet.vercel.app/api/install')
      .then((res) => setContent(res.data))
      .catch((err) => console.log(err))

  }, [])

  return (
    <>
      <Navbar />
      <div className={styels.docwrapper}>
        <Asidebar />
        <Conteiner slug={router.query.slug} infos={content} />
        <SideConetet />
      </div>
    </>
  )
}
