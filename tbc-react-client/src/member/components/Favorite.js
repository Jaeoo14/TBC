import React, { useState, useEffect } from "react";
import Pas from "../../ProjectApiService";

import FavoriteIcon from "@material-ui/icons/Favorite";
// import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import NotFavoriteIcon from "@material-ui/icons/FavoriteBorder";

const Favorite = ({ userId, projectId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    console.log("Favorite: login-userId=", userId, ", projectId=", projectId);
    Pas.getUser(userId)
      .then((res) => {
        setLike(
          res.data.likeProjects.split(",").filter((like) => like === projectId)
            .length !== 0
        ); // 숫자와 문자열 비교라서 '==' 사용.
      })
      .catch((err) => console.log(err));
  });

  const onToggle = () => {
    Pas.getUser(userId)
      .then((res) => {
        let member = res.data;
        if (like)
          // 이미 있으니 지운다.
          member.likeProjects = member.likeProjects
            .split(",")
            .filter((like) => like !== projectId)
            .toString();
        else {
          // 없으니 추가한다.
          if (member.likeProjects === "") member.likeProjects = projectId + "";
          else member.likeProjects += "," + projectId;
        }
        console.log("Favorite.onToggle member=", member);
        return Pas.updateUser(member);
      })
      .then((res) => setLike(!like))
      .catch((err) => {
        console.log(err);
        alert("로그인 사용자만 이용할 수 있습니다.");
      });
  };

  return (
    <div onClick={onToggle}>
      {like ? <FavoriteIcon color="secondary" /> : <NotFavoriteIcon />}
    </div>
  );
};

export default Favorite;
