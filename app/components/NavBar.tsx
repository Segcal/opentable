import Link from "next/link";
import AuthModal from "./AuthModal";


const NavBar = () => {
  return (
    <div>
      <nav className="bg-white p-2 flex justify-between">
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          OpenTable
        </Link>
        <div>
          <div className="flex">
            <AuthModal isSignin={true}/>
            <AuthModal isSignin={false}/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar