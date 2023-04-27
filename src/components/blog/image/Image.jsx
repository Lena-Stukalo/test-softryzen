import css from './Image.module.css'
import img from '../../../images/home/blog.jpg'
export function Image(){
    return <img src={img} alt="people"  className={css.img}/>
   }