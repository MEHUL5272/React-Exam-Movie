export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));

  return {
    type: LOGIN,
    payload: user,
  };
};

export const logoutUser = () => {
  localStorage.removeItem("user");

  return {
    type: LOGOUT,
  };
};