import axiosSecure from "."
// .get na dileo get method eta bujhe nei

// Fetch all rooms from db
export const getAllRooms =async ()=>{
    const {data} =await axiosSecure("/rooms")
    return data
}
// Fetch single room data from db
export const getRoom = async id => {
    const { data } = await axiosSecure(`/room/${id}`)
    return data
  }