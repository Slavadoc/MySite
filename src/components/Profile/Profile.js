import React from 'react'
import stylles from './Profile.module.css'// stylles = obj
import Photo from '../../common/img/photo.jpg'

const Profile =  () => {
  return <div className={stylles.profile}>
            <img src={Photo}className={stylles.img}/>
         </div>
}

export default Profile;
