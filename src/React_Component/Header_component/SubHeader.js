import React from 'react';
import './SubHeader.css';
import {Link} from 'react-router-dom';
import SubHeaderNavLink from './SubHeaderNavLink'
function SubHeader() {
    const categorys=['अंतरिक्ष ','Agriculture','Kirana','Phale', 'Bhajipala','Deary','Electronics','Chikan&Mutton','Medical','Hardware','Bekary&Sweet','Cake']
    return (
        <div  className='SubHeader'>
            {
                 categorys.map((category,index)=>{
                        return (<SubHeaderNavLink link={category.toLocaleLowerCase()} linkName={category} key={index}/>)
                })
            }
        </div>      
    )
}

export default SubHeader
