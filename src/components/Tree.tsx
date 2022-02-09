import React from 'react'
import { Tree } from '@fluentui/react-northstar'
import { TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-icons-northstar'

// const getDatafromLS=()=>{
//   const data = localStorage.getItem('items');
//   if(data){
//     return JSON.parse(data);
//   }
// }

// const items = getDatafromLS();

const titleRenderer = (Component: any, { content, expanded, open, hasSubtree, ...restProps }: any) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {expanded ? <div className='logo'><TriangleDownIcon /></div> : <div className='logo'><TriangleEndIcon /></div>}
    {content}
  </Component>
)

const TreeTitleCustomizationExample = (props:any) => (
  <Tree aria-label="Custom title" items={props.items} renderItemTitle={titleRenderer} />
)

export default TreeTitleCustomizationExample
