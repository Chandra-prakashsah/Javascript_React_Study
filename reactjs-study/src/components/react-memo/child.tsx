import {memo} from 'react'

const Child = (props: { name: string }) => {
    console.log("child")
  return (
    <div>{props.name}</div>
  )
}

export default memo(Child) 
//memo(Child) skip render if props are not changed
//if render time is getting longer, it will be better to use memo