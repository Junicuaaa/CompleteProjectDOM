import config from "../config/config.js";
export default {
    walletAmount(){
        const formDataArray = JSON.parse(localStorage.getItem("formData"));
        const ws = new Worker("../services/wsWallet.js", {type: "module"});
        ws.postMessage(formDataArray)
        ws.addEventListener("message", (e)=>{
            let dom = document.querySelector("#wallet").innerHTML = "$"
            document.querySelector("#wallet").insertAdjacentHTML("beforeend", e.data)
        })
    }
}