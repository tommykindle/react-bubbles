import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  console.log('am I working')
  const [colorList, setColorList] = useState([]);

  const getColors = () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
      .then(res => {
        console.log(res);
        setColorList(res.data);
      })
      .catch(err => console.log(err.response))
  }
  useEffect(() => {
    getColors();
  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
