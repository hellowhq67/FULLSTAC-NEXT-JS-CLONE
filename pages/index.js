import Blogs from '@/componet/Blogs'
import Card from '@/componet/Card'
import Navbar from '@/componet/Navbar'
import Section from '@/componet/Section'
import Home from '@/componet/Home'

export default function index() {
  return (
    <>

      <Navbar />
     <Home/>
      <Blogs />
      <Card />
      <Section />

    </>
  )
}
