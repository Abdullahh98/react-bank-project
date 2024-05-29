import instance from ".";
import { storeToken } from "./toekn";

const register = async (userInfo) => {
  try {
    // This is for seding the request with files
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    // END
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      formData
    );
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { register };
