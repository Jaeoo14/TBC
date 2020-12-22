import React, { useState, useEffect } from "react";
import Pas from "../../ProjectApiService";

import FavoriteIcon from "@material-ui/icons/Favorite";
// import NotFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import NotFavoriteIcon from "@material-ui/icons/FavoriteBorder";

const Favorite = ({ userId, projectId }) => {
  // 변경해야 할 것.
  // 성능을 위해 Favorite에서 매번 DB에서 사용자 정보를 읽지 않고
  // Favorite를 호출하는 곳에서 사용자 정보를 props로 넘겨주게 해야 한다.

  const [like, setLike] = useState(false);

  useEffect(() => {
    console.log("Favorite: login-userId=", userId, ", projectId=", projectId);
    Pas.getUser(userId)
      .then((res) => {
        setLike(
          res.data.likeProjects.split(",").filter((like) => like == projectId).length !== 0
        ); // 숫자와 문자열 비교라서 '==' 사용.
      })
      .catch((err) => console.log(err));
  });

  const onToggle = (e) => {
    // 변경되었을 때는 갱신해 주어야 한다.
    e.stopPropagation();

    Pas.getUser(userId)
      .then((res) => {
        let member = res.data;
        if (like)
          // 이미 있으니 지운다.
          member.likeProjects = member.likeProjects
            .split(",")
            .filter((like) => like != projectId)
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
      {like ? <FavoriteIcon color="secondary" /> : <NotFavoriteIcon/>}
    </div>
  );
};

export default Favorite;
