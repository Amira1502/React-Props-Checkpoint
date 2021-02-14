import React from "react";
import "./profile.css";
const Profile = ({ profile, handleData }) => {
  return (
    <div className="card">
   <img src={profile.image} />
    
   <h3 className="title">{profile.name}</h3>
   
    <h3>{profile.bio}</h3>
      <h3>{profile.profession}</h3>
     <button classeName="button" onClick={() => handleData(profile.name, profile.bio, profile.profession)}>
        More Details
      </button>  
    </div>
  );
};

export default Profile;
Profile.defaultProps = {
  profile: {
    image:
      "https://www.ormondbeachmartialarts.com/wp-content/uploads/2017/04/default-image.jpg",
    name: "inconnu",
    bio: "inconnu",
    profession: "inconnu",
  },
};