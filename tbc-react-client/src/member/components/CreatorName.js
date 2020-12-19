import React, { useState, useEffect } from 'react';
import Pas from '../../ProjectApiService';

const CreatorName = ({creatorId}) => {
  const [name, setName] = useState('');

  useEffect(()=>{
    Pas.getUser(creatorId)
    .then(res=>setName(res.data.name))
    .catch(err=>console.log(err));
  });

  return (
    <>{name}</>
  );
};

export default CreatorName;
