import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import './HeaderOpt.css'

function HeaderOpt({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  
  return (
    <div className='headerOpt' onClick={onClick}>
        {Icon && <Icon className='headerOpt_icon' />}
        {avatar && 
            <Avatar className='headerOpt_icon'>
              {user?.email[0]}
            </Avatar>
        }
        <h3 className='headerOpt_title'>{title}</h3>
    </div>
  )
}

export default HeaderOpt