import { Logo } from "./logo/Logo"
import { Navigation } from "./navigation/Navigation"
import css from'./Header.module.css'
export function Header(){
    return <div className={css.header}>
     <Logo/>
     <Navigation/>
   </div>
   }