import React from "react";
import Profile from "../Profile component/profile";
import "./profile.css";



const ProfilList = () => {
  let profils = [
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjufp-__JFr3D2w8oa2SRj1DwtkKPWWVOsA&usqp=CAU",
    bio: "web developper", 
    name: "Amira",
    profession: "js",
     },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WUx40RcbMrWzkDttvsv2_JkDqm0UezjQWw&usqp=CAU",
      name: "Martin Dubois",
      bio: "Small Buisness",
      profession: "CEO MARK",
    },
    {
      image:"https://img.icons8.com/plasticine/2x/user.png",
      name: "Martin",
      bio: "Designer",
      profession: "js",
    },
  ];
  const handleData = (name, bio, profession) => {
    alert(`this User has the name ${name},his bio ${bio} and his profession ${profession}`);
  };

  return (
    <div>
      <h2>The Profile</h2>
      <div className="card">
        {profils.map((profile, i) => (
          <Profile profile={profile} key={i} handleData={handleData} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ProfilList;