import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  return response.data;
};

//with token
// export const signin = async (credentials: any) => {
//   const response = await axiosWithCredentials.post(
//     `${USERS_API}/signin`,
//     credentials
//   );
//   const { token } = response.data;
//   localStorage.setItem("token", token);
//   return response.data;
// };

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

// export const updateProfile = async (user: any) => {
//   const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
//   console.log("update profile response: ", response)
//   return response.data;
// };
export const updateProfile = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  console.log("update profile response: ", response);

  if (response.data.modifiedCount > 0) {
    // Assuming the server sends back the updated user data
    const updatedUserData = await axiosWithCredentials.get(`${USERS_API}/${user._id}`);
    console.log("Fetched updated user data: ", updatedUserData.data);
    return updatedUserData.data;
  } else {
    // Handle case where no data was updated
    console.log("No changes were made to the user data");
    return null;
  }
};


export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

//with token
//export const signup = async (user: any) => {
//  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
//  const { token } = response.data;
//  localStorage.setItem("token", token);
//  return response.data;
//};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};
// export const signout = async () => {
//   const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
//   localStorage.removeItem("token");
//   return response.data;
// };
