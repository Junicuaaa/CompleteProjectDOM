import config from "../config/config.js";
export default {
  getData() {
    config.setData();
    Object.assign(this, JSON.parse(localStorage.getItem("formData")));
    const ws = new Worker("../services/wsForm.js", {type: "module"});
    ws.postMessage({data: this})
    ws.addEventListener("message", (e)=>{
      let doc = new DOMParser().parseFromString(e.data, "text/html")
    })
  },
};
