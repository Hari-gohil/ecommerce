import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post("/api/users/logout");
      } catch (err) {
        console.log(err);
      }

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/signin");
    };

    logout();
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;
