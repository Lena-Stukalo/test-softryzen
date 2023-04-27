import { NetworkList } from "./networkList/NetworkLIst"
import css from './Footer.module.css'
export function Footer(){
    return <footer className={css.container}  id="about">
        <NetworkList/>
     <p className={css.text}>Copyright © 2021 - FinanceLedger</p>
   </footer>
   }