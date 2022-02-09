import { MenuIcon } from '@fluentui/react-icons-northstar'
import React, { useState } from 'react'
import { DropdownMenu } from './DropdownMenu';
import { NavItem } from './NavItem';

interface Props{
    children: JSX.Element | JSX.Element[]
}

const getDatafromLS=()=>{
    const data = localStorage.getItem('items');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
}



export const Navbar = (props: Props) => {
    const [items, setitems]=useState(getDatafromLS())
    return (
        <nav className='navbar'>
            <div><MenuIcon className='logo'/></div>
            <ul className='navbar-nav'>
                {items.map((item: any,i: any) => <NavItem key={i} name={item.title} link="https://www.freecodecamp.org/" children={<DropdownMenu items={item.items}/>} />)}
            </ul>
        </nav>
    )
}