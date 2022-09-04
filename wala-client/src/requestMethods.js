import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// const TOKEN =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDRkNzczMDk5NDQ0Yjc4MjdhYjEyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTcwNTkxNCwiZXhwIjoxNjYxOTY1MTE0fQ.hN97wM_nCfHikdO6HRjsD3roULbHXXUDO_eyxgM21t4"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });