import React, { useState } from 'react';
import DropdownItem from "./DropdownItem";

const Career = () => {
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
  }
];

export const DropdownMenu = (props: any) => {
  return(
    <div className='dropdown'>
      <DropdownItem data={[{label:props.items[0].title, key: props.items[0].id, items: <div className='flex-content'><Career /><Travel /></div>}]}/>
    </div>
  )
}