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
        return [
            {
              id: 'tree-title-customization-item-1',
              title: 'Navigation Item 1',
              link: "https://www.freecodecamp.org/",
              items: [
                {
                  id: 'sub-tree-title-customization-item-1',
                  title: 'Sub Navigation Item 1',
                },
              ],
            },
            {
              id: 'tree-title-customization-item-2',
              title: 'Navigation Item 2',
              link: "https://www.freecodecamp.org/",
              items: [
                {
                  id: 'sub-tree-title-customization-item-2',
                  title: 'Sub Navigation Item 1',
                },
              ],
            },
            {
              id: 'tree-title-customization-item-3',
              title: 'Navigation Item 3',
              link: "https://www.freecodecamp.org/",
              items: [
                {
                  id: 'sub-tree-title-customization-item-3',
                  title: 'Sub Navigation Item 1',
                },
              ],
            },
          ]
    }
}



export const Navbar = () => {
    const [items, setitems]=useState(getDatafromLS())
    return (
        <nav className='navbar'>
            <div><MenuIcon className='logo'/></div>
            <ul className='navbar-nav'>
                {items.map((item: any,i: any) => <NavItem key={i} name={item.title} link={item.link} children={<DropdownMenu items={item.items}/>} />)}
            </ul>
        </nav>
    )
}