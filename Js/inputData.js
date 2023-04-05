import config from "../config/config.js";
export default {
    getData() {
        config.setData();
        const formDataArray = JSON.parse(localStorage.getItem("formData"));
        const ws = new Worker("../services/wsForm.js", { type: "module" });
        ws.postMessage(formDataArray);
        ws.addEventListener("message", (e) => {
            const message = e.data;
            let ingreso = "ingreso"
            let egreso = "egreso"
            message.forEach(element => {
                (element.includes(ingreso))
                ?document.querySelector("#income").insertAdjacentHTML("beforeend", element)
                :document.querySelector("#egreso").insertAdjacentHTML("beforeend", element);
            });
        });
        document.querySelector(".a").addEventListener("click", (e) => {
            localStorage.clear();
            window.location.reload();
        })
    },
};