import React, { useState } from 'react';
import DropdownItem from "./DropdownItem";
import { View } from '../components/View';

const getDatafromLS=()=>{
  const data = localStorage.getItem('items');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


const Career = () => {
  const [items, setitems]=useState(getDatafromLS());
  return(
    <div>
      <div>
        <h2>MY Career and Benefits</h2>
        <p>HRweb</p>
        <p>Benefits</p>
        <p>Learning Portal</p>
        <p>Internal Jobs</p>
        <p>Company Store</p>
        <p>Give</p>
      </div>
      <div>
        <h2>Travel and Expense</h2>
        <p>Travel</p>
        <p>Expenses</p>
        <p>Payments</p>
        <p>US Immigration Travel</p>
      </div>
    </div>
  );
};
  
const Travel = () => {
  return(
    <div>
      <div>
        <h2>MY Career and Benefits</h2>
        <p>HRweb</p>
        <p>Benefits</p>
        <p>Learning Portal</p>
        <p>Internal Jobs</p>
        <p>Company Store</p>
        <p>Give</p>
      </div>
      <div>
        <h2>Travel and Expense</h2>
        <p>Travel</p>
        <p>Expenses</p>
        <p>Payments</p>
        <p>US Immigration Travel</p>
      </div>
    </div>
  );
};

const NewItems = () => {
  const [items, setitems]=useState(getDatafromLS());
  return(
    <View items={items}/>
  );
};
  
const data = [
  {
    label: "Sub Menu Item 1",
    key: 1,
    items: <div className='flex-content'><Career /><Travel /></div>
  },
  {
    label: "Sub Menu Item 2",
    key: 2,
    items: <div className='flex-content'><Career /><Travel /></div>
  },
  {
    label: "Sub Menu Item 3",
    key: 3,
    items: <div className='flex-content'><Career /><Travel /></div>
  },
  {
    label: "New Items",
    key: "New Items",
    items: <NewItems />
  }
];

export const DropdownMenu = () => {
  // const [items, setbooks]=useState(getDatafromLS());
  return(
    <div className='dropdown'>
      <DropdownItem data={data}/>
    </div>
  )
}