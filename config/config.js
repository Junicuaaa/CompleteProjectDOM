export default {
  setData() {
    const FORM = document.querySelector("#mainForm");
    let arr = new Array();
    window.addEventListener("load", (e)=>{
      let STORAGE = JSON.parse(localStorage.getItem("formData"));
      (STORAGE === null) ? _ : arr = STORAGE;
    }, {once: true})
    FORM.addEventListener("submit", (e) => {
      e.preventDefault();
      let data = Object.fromEntries(new FormData(e.target));
      arr.unshift(data)
      localStorage.setItem("formData", JSON.stringify( arr ));
      FORM.reset();
    });
  },
};