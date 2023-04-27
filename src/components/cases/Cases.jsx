import { Gallery } from "./gallery/Gallery"
import { Content } from "./content/Content"
import css from'./Cases.module.css'
export function Cases(){
    return <div className={css.container} id="cases">
     
     <Content/>
     <Gallery/>
   </div>
   }