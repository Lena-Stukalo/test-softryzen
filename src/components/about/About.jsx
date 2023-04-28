import { Image } from "./image/Image"
import { Content } from "./content/Content"
import css from'./About.module.css'
export function About(){
    return <div className={css.container} id="about">
     <Image/>
     <Content/>
   </div>
   }