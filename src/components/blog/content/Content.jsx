import css from './Content.module.css'
export function Content(){
    return <div className={css.container} id='blog'>
        <p className={css.preTitle}>April 16 2020</p>
    <h2 className={css.title}>Blog Post One</h2>
    <p className={css.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
   <button className={css.button}>Read Our Blog</button>
   </div>
   }