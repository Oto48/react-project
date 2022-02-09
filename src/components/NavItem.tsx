import React, {useState} from 'react'

interface props{
  name: string;
  link: string;
  children: JSX.Element;
}

export const NavItem = (props: props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item' onMouseEnter={()=> setOpen(!open)} onMouseLeave={() => setOpen(!open)}>
      <a href={props.link} className='nav-link' target="_blank">{props.name}</a>
      <div className='menu'>
        {open ? props.children : null}
      </div>
    </li>
  )
}