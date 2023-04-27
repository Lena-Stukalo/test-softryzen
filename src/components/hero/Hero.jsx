import css from './Hero.module.css'
export function Hero(){
    return <section className={css.container} id='home'>
        <h1 className={css.title}>The Sky Is The Limit</h1>
        <p  className={css.text}>We provide world class financial assistance</p>
        <button  className={css.buttton}><p className={css.butttonText}>Read More</p></button>
    </section>
   }