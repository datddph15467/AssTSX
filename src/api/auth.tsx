import instance from "./Instance";
import {User} from "../type/User"
export const signup =(user:User)=>{
    const url = "/users/register";
return instance.post(url,user);
}
export const signin = (user:User)=>{
    const url="/users/login";
    return instance.post(url,user);
}