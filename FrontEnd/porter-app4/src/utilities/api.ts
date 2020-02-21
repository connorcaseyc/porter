import { axiosConfig } from "./axiosConfig";
import { IUser } from "../model/IUser";
import IPost from "../model/IPost";

export const getUserList = () => {
  return axiosConfig.get("userlist.app");
};

export const publishUser = (body: IUser) => {
  return axiosConfig.post("adduser.app", body);
};

export const getPostList = () => {
  return axiosConfig.get("postlist.app");
};

export const getUserPostList = () => {
  return axiosConfig.get("userpostlist.app");
};

export const publishPost = (body: IPost) => {
  return axiosConfig.post("addpost.app", body);
};

export const updatePass = async (email:string, password:string) =>{
  try{
    const response = await axiosConfig.put("updatepass.app", {
      email,
      password
    });
    console.log(response.status);
    if(response.status === 200){
      const body = await response.data;
      console.log(body);
      return "Your password has been changed return to login"
    }else if(response.status ===401){
      console.log("401 unathorized")
      return "Couldn't find an existing email";

    }
    else{
      console.log("not 200 or 401 but not an error")
      return "Email may not exist or something went wrong";

    }
  }catch(e){
    console.log(e);
    return 'possibly 500 or bad request'
  }
}
export const addUser = async (username: string, password: string, email: string,
  firstname: string, lastname: string) => {
  try {
    const response = await axiosConfig.post("adduser.app", {
      id: 0,
      username,
      password,
      email,
      firstname,
      lastname,
      bio: "",
      profpic: ""
    });
    if (response.status === 200) {
      const body = await response.data;
      console.log(body);
      return {
        body,
        signupMessage: "You have successfully registered"
      };
    }
    else if(response.status === 401){
      return{
        signupMessage: "Registration failed"
      }
    }
    else{
        return{
            signupMessage: "Something went wrong during registration",
            body:null
        }
    }
  } catch (e) {
    console.log(e);
    return {
      signupMessage: "Something went wrong during sign up",
      
    };
  }
};

export const apiLogin = async (username: string, password: string) => {
  try {
    const response = await axiosConfig.post("auth.app", {
      username,
      password
    });
    console.log(response.status);
    if (response.status === 200) {
      const body = await response.data;
      console.log(body);

      return {
        body,
        loginMessage: "Successful Login"
      };
    } else if (response.status === 401) {
      return {
        loginMessage: "Incorrect Username or Password",
        body: null
      };
    } else {
      return {
        loginMessage: "Something Went Wrong",
        body: null
      };
    }
  } catch (e) {
    console.log(e);
    return {
      loginMessage: "Something Went Wrong"
    };
  }
};
