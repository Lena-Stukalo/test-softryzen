import { Header } from "components/header/Header"
import { Hero } from "components/hero/Hero"
import { About } from "components/about/About"
import { Cases } from "components/cases/Cases"
import { Blog } from "components/blog/Blog"
import { Team } from "components/team/Team"
import { Contact } from "components/contacts/Contact"
import { Footer } from "components/footer/Footer"
export function LayOut(){
    return <div className="">
     <Header/>
     <Hero/>
     <About/>
     <Cases/>
     <Blog/>
     <Team/>
     <Contact/>
     <Footer/>
    </div>
   }