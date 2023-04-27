import css from './Gallery.module.css'
import case1 from '../../../images/cases/cases1.jpg'
import case2 from '../../../images/cases/cases2.jpg'
import case3 from '../../../images/cases/cases3.jpg'
import case4 from '../../../images/cases/cases4.jpg'
import case5 from '../../../images/cases/cases5.jpg'
import case6 from '../../../images/cases/cases6.jpg'

export function Gallery(){
    const cases=[case1,case2,case3,case4,case5,case6];
    return <ul>
                {cases.map(item=>{
                    return <li className={css.item}><img src={item} alt="case" className={css.img}/></li>
                })}
    </ul>
   }