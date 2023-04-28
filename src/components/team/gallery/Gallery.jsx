import css from './Gallery.module.css'
import team1 from '../../../images/team/person1.jpg'
import team2 from '../../../images/team/person2.jpg'
import team3 from '../../../images/team/person3.jpg'
import team1x2 from '../../../images/team/person1@2x.jpg'
import team2x2 from '../../../images/team/person2@2x.jpg'
import team3x2 from '../../../images/team/person3@2x.jpg'
import { NetworkList } from './networkList/NetworkLIst'

export function Gallery(){
    return <ul className={css.gallery}>
<li className={css.item} key='John Doe'>
    <div className={css.tumb}>
    <img src={team1} alt="team mate" srcSet={`${team1x2} 2x`} className={css.img}/>
<NetworkList className={css.transform}/>
    </div>
    
<p className={css.name}>John Doe</p>
<p className={css.ocupation}>President</p>
</li>
<li className={css.item} key='Jane Doe'><div className={css.tumb} ><img src={team2} srcSet={`${team2x2} 2x`} alt="team mate"  className={css.img}/>
<NetworkList className={css.transform}/>
</div>
<p className={css.name}>Jane Doe</p>
<p className={css.ocupation}>Vice President</p>
</li>
<li className={css.item} key='Steve Smith'> <div className={css.tumb}><img src={team3} srcSet={`${team3x2} 2x`} alt="team mate"  className={css.img}/>
<NetworkList className={css.transform}/>
</div>
<p className={css.name}>Steve Smith</p>
<p className={css.ocupation}>Marketing Head</p>
</li>
    </ul>
   }