import { TagPicker } from 'rsuite'

const OPTIONS=[
  {
    value:'authorized',
    label:'Authorized'
  },
  {
    value:'initiated',
    label:'Initiated'
  },
  {
    value:'successful',
    label:'Successful'
  },
  {
    value:'returned',
    label:'Returned'
  },
  {
    value:'canceled',
    label:'Canceled'
  }
]

export default function Filter({onChange,value}) {
  return (
    <TagPicker 
    data={OPTIONS} 
    placeholder='Filter' 
    placement='bottomEnd'
    onChange={onChange}
    value= {value}
     />
  )
}




