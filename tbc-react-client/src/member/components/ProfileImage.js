import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Pas from "../../ProjectApiService";

const ProfileImage = (props) => {
  const { userId, width, height } = props;

  const [image, setImage] = useState(undefined);

  useEffect(() => {
    Pas.getUser(userId)
      .then((res) => Pas.getFile(res.data.profileImg))
      .then((res) => setImage(res.data))
      .catch((err) => console.log("Can not read profile image from DB !", err));
  }, [userId]);

  return (
    image !== undefined && (
      <Image
        src={`data:image/png;base64,${image.data}`}
        alt="profile image"
        style={{ width: width, height: height }}
        roundedCircle
      />
    )
  );
};

ProfileImage.defaultProps = {
  width: "50px",
  height: "50px",
};

export default ProfileImage;
