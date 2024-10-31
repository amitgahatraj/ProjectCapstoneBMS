// src/redux/actions/authActions.js
import api from "../../services/api";
import {
  authStart,
  authSuccess,
  authFailure,
  logout,
} from "../reducers/authReducer";

// Login Action
export const login = (credentials) => async (dispatch) => {
  dispatch(authStart());
  try {
    const response = await api.post("/auth/login", credentials);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    dispatch(authSuccess({ token, user }));
  } catch (error) {
    dispatch(authFailure(error.response?.data?.message || "Login failed"));
  }
};

// Register Action
export const register = (userData) => async (dispatch) => {
  dispatch(authStart());
  try {
    const response = await api.post("/auth/register", userData);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    dispatch(authSuccess({ token, user }));
  } catch (error) {
    dispatch(
      authFailure(error.response?.data?.message || "Registration failed")
    );
  }
};

// Logout Action
export const performLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout());
};
