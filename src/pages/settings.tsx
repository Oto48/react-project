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
      return [
        {
          id: 'tree-title-customization-item-1',
          title: 'Navigation Item 1',
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

function Settings(){

  const [oldItems, setitems]=useState(getDatafromLS());
  const [titleName, setTitle]=useState('')
  // const [item, setTitle]=useState('New Item');
  const addItem=(e:any)=>{
    e.preventDefault();
    // let newItem={
    //   item,
    // }
    // setitems([...items,newItem]);
    // setTitle('New Item');

    let lastItem = oldItems.at(-1);
    let idNumber = +lastItem.id.split('-').at(-1) + 1;
    let id = "tree-title-customization-item-"+idNumber;
    let title = 'Navigation Item '+idNumber;
    let items = [{
      id: idNumber+'-sub-tree-title-customization-item-1',
      title: titleName
    }];
    
    let newItem={
      id,
      title,
      items
    }
    setitems([...oldItems, newItem]);
    setTitle("")
  }


  const save=()=>{
    localStorage.setItem('items',JSON.stringify(oldItems));
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
            <Button content="+ Add entry" primary onClick={addItem} disabled={titleName === ""} />
            <Input icon={<div className='logo'><SearchIcon /></div>} placeholder="Search..." className='search'/>
          </div>
          <form>
            <Input type="text" className='search' onChange={(e:any)=> setTitle(e.target.value)} value={titleName} placeholder="Set Title"/>
          </form>
          <List items={oldItems}/>
        </div>
        <div className='buttons'>
          <Button content="Discard" secondary onClick={cancel}/>
          <Button content="Save" primary onClick={save}/>
        </div>
      </div>
    )
}

export default Settings;