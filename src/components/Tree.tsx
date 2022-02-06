import React from 'react'
import { Tree } from '@fluentui/react-northstar'
import { TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-icons-northstar'

const items = [
  {
    id: 'tree-title-customization-item-1',
    title: 'Navigation Item 1',
    items: [
      {
        id: 'tree-title-customization-item-2',
        title: 'Subnavigation Item 1',
        items: [
          {
            id: 'tree-title-customization-item-3',
            title: 'Sub Sub Navigation Item 1',
          },
        ],
      },
    ],
  },
  {
    id: 'tree-title-customization-item-4',
    title: 'Navigation Item 2',
    items: [
      {
        id: 'tree-title-customization-item-5',
        title: 'Sub Navigation Item 1',
      },
    ],
  },
  {
    id: 'tree-title-customization-item-6',
    title: 'Navigation Item 3',
    items: [
      {
        id: 'tree-title-customization-item-7',
        title: 'Sub Navigation Item 1',
      },
    ],
  },
  {
    id: 'tree-title-customization-item-8',
    title: 'Navigation Item 4',
    items: [
      {
        id: 'tree-title-customization-item-9',
        title: 'Sub Navigation Item 1',
      },
    ],
  },
  {
    id: 'tree-title-customization-item-10',
    title: 'Navigation Item 5',
    items: [
      {
        id: 'tree-title-customization-item-11',
        title: 'Sub Navigation Item 1',
      },
    ],
  },
  {
    id: 'tree-title-customization-item-12',
    title: 'Navigation Item 6',
    items: [
      {
        id: 'tree-title-customization-item-13',
        title: 'Sub Navigation Item 1',
      },
    ],
  },
]

const titleRenderer = (Component: any, { content, expanded, open, hasSubtree, ...restProps }: any) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {expanded ? <div className='logo'><TriangleDownIcon /></div> : <div className='logo'><TriangleEndIcon /></div>}
    {content}
  </Component>
)

const TreeTitleCustomizationExample = () => (
  <Tree aria-label="Custom title" items={items} renderItemTitle={titleRenderer} />
)

export default TreeTitleCustomizationExample
