import { useState } from 'react'
import css from '../Form.module.css'
export function TextInput({name, label, type}){
    const [value,setValue]=useState('')
    const handleInput=(e)=>{ 
        setValue(e.target.value);
    }

        return<div className={css.tumb}>
        <label htmlFor={name} className={!value?css.label:css.fullfield}>{label}</label>
        <input type={type} id={name} value={value} name={name} className={css.input} onChange={handleInput} />
        </div>
}