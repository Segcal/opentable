import SearchBar from "./SearchBar";


const Header = () => {
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47]  to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find you table for any occasion
        </h1>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
