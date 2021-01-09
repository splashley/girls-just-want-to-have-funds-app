import React, { createContext, useEffect, useState } from "react";
import Avatar, { Option } from "avataaars";

const AvatarProvider = () => {
  return (
    <div>
      Your Avatar:
      <Avatar
        style={{ width: "200px", height: "200px" }}
        avatarStyle="Circle"
        topType="LongHairMiaWallace"
        accessoriesType="Prescription02"
        hairColor="BrownDark"
        facialHairType="Blank"
        clotheType="Hoodie"
        clotheColor="PastelBlue"
        eyeType="Happy"
        eyebrowType="Default"
        mouthType="Smile"
        skinColor="Light"
      />
    </div>
  );
};

export default AvatarProvider;
