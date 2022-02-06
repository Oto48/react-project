import React from 'react'

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const Navbar = (props: Props) => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                {props.children}
            </ul>
        </nav>
    )
}