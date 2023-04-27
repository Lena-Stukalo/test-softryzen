import css from './Content.module.css'
import { Form } from '../form/Form'
export function Content(){
    return <div className={css.container}>
        <h2 className={css.title}>Request Callback</h2>
        <Form/>
       </div>
   }