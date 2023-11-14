const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 cursor-pointer text-black">
      <Icon size={26}/>
      {label}
    </div>
  );
};

export default CategoryBox;
