import { Image } from "./image/Image"
import { Content } from "./content/Content"
import css from "./Contact.module.css"
export function Contact(){
    return <section  id="contact" className={css.container}>
     <Image/>
     <Content/>
   </section>
   }