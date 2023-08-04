import Blogs from '@/componet/Blogs'
import Card from '@/componet/Card'
import Navbar from '@/componet/Navbar'
import Section from '@/componet/Section'
import Homes from '@/pages/Homes'
export default function Home() {
  return (
    <>

      <Navbar />
      <Homes />
      <Blogs/>
      <Card/>
      <Section/>

    </>
  )
}
