
import css from './Form.module.css'
import { TextInput } from './input/TextInput'
export function Form(){
    
    return <form className={css.form} name="contact v1" method='post' data-netlify='true' onSabmit='submit'>
        <input type='hidden' name='form-name' value='contact v1'/>
        <TextInput name='name' label='Enter your name' type='text'/>
        <TextInput name='email' label='Enter email*' type='email'/>
        <button type="submit" className={css.button}>Send</button>
    </form>
   }