import css from './Form.module.css'
export function Form(){
    return <form>
        <label htmlFor='name' className={css.label}>Enter your name</label>
        <input type="text" name="name" className={css.input}/>
        <label htmlFor='email' className={css.label}>Enter email*</label>
        <input type="text" name="email" className={css.input}/>
        <button type="submit" className={css.button}>Send</button>
    </form>
   }