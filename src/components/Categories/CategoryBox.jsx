import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

const CategoryBox = ({ label, icon: Icon, selected }) => {
  // console.log(selected);
  let [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  // console.log(params);

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
      // console.log(currentQuery);
    }
      const updatedQuery = { ...currentQuery, category: label };
      // console.log(updatedQuery);
      // new url
      const url = queryString.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
  };

  params.get("category")
  console.log(params);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3  hover:text-neutral-800 cursor-pointer text-black border-b-2 ${
        selected ? "border-b-neutral-800 text-neutral-800" : ""
      }`}
    >
      <Icon size={26} />
      {label}
    </div>
  );
};

export default CategoryBox;
