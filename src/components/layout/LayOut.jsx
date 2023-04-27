import { Header } from "components/header/Header"
import { Hero } from "components/hero/Hero"
import { About } from "components/about/About"
import { Cases } from "components/cases/Cases"
export function LayOut(){
    return <div className="">
     <Header/>
     <Hero/>
     <About/>
     <Cases/>
    </div>
   }