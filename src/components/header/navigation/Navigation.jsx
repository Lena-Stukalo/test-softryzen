import css from './Navigation.module.css'
export function Navigation(){
    return <nav className="">
    <ul className={css.navList}>
        <li className={css.navItem}><a href="#home" className={css.link}>Home</a></li>
        <li className={css.navItem}><a href="#about"  className={css.link}>About</a></li>
        <li className={css.navItem}><a href="#cases" className={css.link}>Cases</a></li>
        <li className={css.navItem}><a href="#blog"  className={css.link}>Blog</a></li>
        <li className={css.navItem}><a href="#contact"  className={css.link}>Contact</a></li>
    </ul>
   </nav>
   }