import { Gallery } from "./gallery/Gallery"
import { Content } from "./content/Content"
import css from'./Team.module.css'
export function Team(){
    return <div className={css.container} id="cases">
     
     <Content/>
     <Gallery/>
   </div>
   }