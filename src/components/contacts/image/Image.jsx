import css from './Image.module.css'
import img from '../../../images/home/contact.jpg'
import img2x from '../../../images/home/contact@2x.jpg'
export function Image(){
    return <img srcSet={`${img2x} 2x`} src={img} alt="people"  className={css.img}/>
   }