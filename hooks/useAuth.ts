import axios from "axios"


const useAuth = () => {
    const signin = async ({email, password}: {email: string; password:string}) => {
        try {
            await axios.post("http://localhost:3000/api/auth/signin", {
                email,
                password
            });
        } catch (error) {
            
        }
    }

    const signup = async () => {}

    return {
        signin,
        signup
    }
}
 
export default useAuth;