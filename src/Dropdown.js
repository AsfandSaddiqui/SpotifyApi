import React from "react";
import style from "./Dropdown.module.css";
const Dropdown = ({ search }) => {
  return search.ResponseFromAPI.map((item, id) => {
    return (
      <>
        <div className={style.wrapper} key={id}>
          <img src={item.album.images[0].url} alt="" />
          <div className={style.info}>
            <h4>{item.name}</h4>
            <p>{item.artists[0].name}</p>{" "}
          </div>
        </div>
      </>
    );
  });
};

export default Dropdown;
