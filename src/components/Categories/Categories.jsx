import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {

const [params,setParams] = useSearchParams()
const category = params.get("category")
console.log(category);

  return (
    <Container>
      <div className="flex items-center justify-center gap-4 overflow-x-auto py-4 mb-6">
        {categories.map((item, idx) => (
          <CategoryBox
            key={idx}
            icon={item.icon}
            label={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};
export default Categories;
