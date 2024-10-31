import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { performLogout } from "../../redux/actions/authActions";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(performLogout());
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold">
          Banking System
        </Link>
        {auth.token && (
          <>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
            {auth.user.role === "admin" && (
              <Link to="/admin" className="hover:underline">
                Admin
              </Link>
            )}
          </>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {auth.token ? (
          <button
            onClick={handleLogout}
            className="flex items-center hover:bg-blue-700 px-3 py-2 rounded"
          >
            <FiLogOut className="mr-1" /> Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:bg-blue-700 px-3 py-2 rounded">
              Login
            </Link>
            <Link
              to="/register"
              className="hover:bg-blue-700 px-3 py-2 rounded"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
