import { Image } from "./image/Image"
import { Content } from "./content/Content"
import css from'./Blog.module.css'
export function Blog(){
    return <div className={css.container} id="about">
     <Image/>
     <Content/>
   </div>
   }