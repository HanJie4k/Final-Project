import React from "react";
import useGetData from "../hooks/UseGetData";
function One() {
    const [dog, setDog] = useGetData('https://dog.ceo/api/breeds/image/random', {});
    return (
    <div>
        <h1 className="mainHeader">Random dog photo!</h1>
      <img className="photo" src={dog.message}/>
    </div>
    );
    }
  export default One;
  