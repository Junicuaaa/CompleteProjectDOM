import config from "../config/config.js";
export default {
  getData() {
    config.setData();
    Object.assign(this, JSON.parse(localStorage.getItem("formData")));
    const ws = new Worker("../services/wsForm.js", {type: "module"});
    console.log(this[0])
  },
};
