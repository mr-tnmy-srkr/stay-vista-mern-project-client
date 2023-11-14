import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon,selected }) => {
console.log(selected);
    let [params, setParams] = useSearchParams();
const navigate = useNavigate()

const handleClick = ()=>{
 let currentQuery = {}
 if(params){
    currentQuery = qs.parse(params.toString())
    const updatedQuery = {...currentQuery,category : label}
    const url = qs.stringifyUrl({
        url:'/',
        query : updatedQuery
    })
    navigate(url)
 }
}

// console.log(params);
// params.get("category")

  return (
    <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3  hover:text-neutral-800 cursor-pointer text-black border-b-2 ${selected ? "border-b-neutral-800 text-neutral-800": ""}`}>
      <Icon size={26}/>
      {label}
    </div>
  );
};

export default CategoryBox;
