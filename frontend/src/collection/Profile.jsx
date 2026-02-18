import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api/api";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await getUserProfile();
      setUser(data);
      console.log(data);
      
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>

      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Phone:</b> {user.phone ? user.phone : "Not Added"}
      </p>
    </div>
  );
};

export default Profile;
