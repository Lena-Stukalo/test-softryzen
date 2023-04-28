import css from './Gallery.module.css'
import case1 from '../../../images/cases/cases1.jpg'
import case2 from '../../../images/cases/cases2.jpg'
import case3 from '../../../images/cases/cases3.jpg'
import case4 from '../../../images/cases/cases4.jpg'
import case5 from '../../../images/cases/cases5.jpg'
import case6 from '../../../images/cases/cases6.jpg'
import case1x2 from '../../../images/cases/cases1.jpg'
import case2x2 from '../../../images/cases/cases2.jpg'
import case3x2 from '../../../images/cases/cases3.jpg'
import case4x2 from '../../../images/cases/cases4.jpg'
import case5x2 from '../../../images/cases/cases5.jpg'
import case6x2 from '../../../images/cases/cases6.jpg'

export function Gallery({ showModal, getImg}){
    const cases=[case1,case2,case3,case4,case5,case6];
    const cases2x=[case1x2,case2x2,case3x2,case4x2,case5x2,case6x2];
    return <ul className={css.gallery}>
                {cases.map((item,index)=>{
                    return <li onClick={() => {
                       getImg(item)
                       showModal()
                      }} className={css.item} key={index}><img srcSet={`${cases2x[index]} 2x`} src={item} alt="case" className={css.img}/></li>
                })}
    </ul>
   }