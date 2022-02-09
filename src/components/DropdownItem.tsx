import React from "react";
import { ReactMegaMenu } from "react-mega-menu";
  
const styleConf = {
    menuProps: {
      style: {
        backgroundColor: "rgb(230, 230, 230)",
        width: "240px",
        margin: "15px 0",
        borderRadius: "4px",
        boxShadow: "rgba(0, 0, 0, 0.15) -1.95px 1.95px 2.6px",
        textAlign: "left",
        padding: "0",
        zIndex: 1
      }
    },
    contentProps: {
      style: {
        margin: "10px 0",
        backgroundColor:"white",
        textAlign: "left",
        padding: "5px 25px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        borderRadius: "0 4px 4px 0",
        borderTop: "5px solid rgb(140, 153, 173)",
        zIndex: 1
      }
    },
    menuItemProps: {
      style: {
        height: "2em",
        paddingLeft: "15px",
      }
    },
    menuItemSelectedProps: {
      style: {
        height: "2em",
        cursor: "pointer",
        paddingLeft: "15px",
        backgroundColor: "white",
      }
    },
};

interface Props{
  data: Array<DataArray>
}

interface DataArray{
  label: string,
  key: number | string,
  items: JSX.Element
}


export default function DropdownItem(props:Props){
    return(
      <div className="dropdown-item">
        <ReactMegaMenu 
          direction="right"
          data={props.data}
          styleConfig={styleConf}
        />
      </div>
    )
}