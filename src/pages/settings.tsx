import React, { useEffect, useState } from 'react';
import List from "../components/Tree";
import { SearchIcon } from '@fluentui/react-icons-northstar'
import { Button, Input } from '@fluentui/react-northstar'
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

function Settings(){

  const [items, setitems]=useState(getDatafromLS());
  const [item, setTitle]=useState('New Item');
  const handleAdditemSubmit=(e:any)=>{
    e.preventDefault();
    let newItem={
      item,
    }
    setitems([...items,newItem]);
    setTitle('New Item');
  }

  const save=()=>{
    localStorage.setItem('items',JSON.stringify(items));
  }

  const cancel=()=>{
    setitems(getDatafromLS())
  }

    return(
      <div className='settings'>
        <div className='settings-container'>
          <h1>Configure Navigation</h1>
          <p>The Mega Menu can be configured here</p>
          <h3>Add Navigation entries</h3>
          <p>Here's an example of how a section can be used to group inputs</p>
          <div className='add-entry'>
            <Button content="+ Add entry" primary onClick={handleAdditemSubmit}/>
            <Input icon={<div className='logo'><SearchIcon /></div>} placeholder="Search..." />
          </div>
          <List />
          <View items={items}/>
        </div>
        <div className='buttons'>
          <Button content="Discard" secondary onClick={cancel}/>
          <Button content="Save" primary onClick={save}/>
        </div>
      </div>
    )
}

export default Settings;