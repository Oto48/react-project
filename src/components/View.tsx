import React, { FC } from "react";

interface Props {
    items: any
}

export const View: FC<Props> = ({items}) => {
    
    return items.map((items: any, i:number)=>(
        <p key={i}>{items.title}</p>           
    ))
}