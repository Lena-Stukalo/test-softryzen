import css from './Content.module.css'
export function Content(){
    return <div className={css.container}>
        <p className={css.preTitle}>What you are looking for</p>
    <h2 className={css.title}>We provide bespoke solutions</h2>
    <p className={css.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
   <button className={css.button}>Read More</button>
   </div>
   }