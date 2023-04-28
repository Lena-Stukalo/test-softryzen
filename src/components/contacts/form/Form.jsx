
import css from './Form.module.css'
import { TextInput } from './input/TextInput'
export function Form(){
    
    return <form className={css.form} name="contact" method='post' data-netlify="true" onSubmit={()=>{}}>
        <input type='hidden' name='form-name' value='contact'/>
        <TextInput name='name' label='Enter your name' type='text'required={false}/>
        <TextInput name='email' label='Enter email*' type='email' required={true}/>
        <button type="submit" className={css.button}>Send</button>
    </form>
   }