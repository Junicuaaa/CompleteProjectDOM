export default {
  setData() {
    const FORM = document.querySelector("#mainForm");
    const arr = new Array();
    FORM.addEventListener("submit", (e) => {
      e.preventDefault();
      let data = Object.fromEntries(new FormData(e.target));
      arr.unshift(data);
      console.log(arr);
      localStorage.setItem("formData", JSON.stringify({ arr }));
      FORM.reset();
    });
  },
};
