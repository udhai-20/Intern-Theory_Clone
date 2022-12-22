import { json } from "react-router-dom";

const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getData = (key) => {
  try {
    let data = localStorage.getItem(key);
    let datas = JSON.parse(data);
    return datas;
  } catch (e) {
    return null;
  }
};

export { saveData, getData };
