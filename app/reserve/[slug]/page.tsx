
import Header from "./components/Header";
import FormControl from "./components/FormControl";
import NavBar from "../../components/NavBar";

const Reserve = () => {
  return (
    <div className="border-t h-screen">
      <NavBar />
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <FormControl />
      </div>
    </div>
  );
};

export default Reserve;
