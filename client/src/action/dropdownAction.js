import axios from 'axios';

export const createDropDown = (option) => {
    axios.post(`http://localhost:8080/api/save/option/`,option);
  };