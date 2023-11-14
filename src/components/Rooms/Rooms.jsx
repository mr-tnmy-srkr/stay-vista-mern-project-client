import { useEffect, useState } from "react"
import Card from "./Card"

const Rooms = () => {

const [rooms,setRooms] = useState([])
useEffect(()=>{
  fetch('./rooms.json')
  .then(res=>res.json())
  .then(data=>setRooms(data))
},[])
console.log(rooms);
  return (
    <div>
      {
        rooms?.map(room=><Card key={room._id}></Card>)
      }
    </div>
  )
}

export default Rooms