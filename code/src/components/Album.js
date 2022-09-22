import React from 'react';

const Album = (props) => {
  return (
    <div className="Album">
      <img src={props.img} alt="Album cover" />
      <p>{props.name}</p>
    </div>
  );
};

export default (Album);