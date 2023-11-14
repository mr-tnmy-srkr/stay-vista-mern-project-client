import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div className="flex items-center justify-center overflow-x-auto py-4 mb-6">
        {categories.map((category, idx) => (
          <CategoryBox
            key={idx}
            icon={category.icon}
            label={category.label}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
