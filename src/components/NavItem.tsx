import React, {useState} from 'react'

export const NavItem = (props: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item' onMouseEnter={()=> setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
      <a href="#" className='nav-link'>{props.link}</a>
      <div className='menu'>
        {open ? props.children : null}
      </div>
    </li>
  )
}