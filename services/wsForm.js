import format from "../Js/formater.js"
let ws = {
    showData(p1){
        // console.log(p1);
        const data = p1.map(element => {
            return(
                (element.type === "ingreso")? this.ingreso(element) : this.egresos(element)
            );
        })
        return data;
    },
    ingreso(p2){
        return `<div class="ingreso d-flex justify-content-between align-items-center px-2 border-bottom"><h6>${p2.description}</h6> <div>$${format.format(p2.amount)}</div></div>`
    },
    egresos(p2){
        return `<div class="egreso d-flex justify-content-between align-items-center px-2 border-bottom"><h6>${p2.description}</h6> 
        <div>$${format.format(p2.amount)}</div>
            <label class="button-delete border border-2 rounded-circle p-2 py-1 border-danger text-danger lh-1 bg-white">x</label>
        </div>`
    },
} 
self.addEventListener("message", (e)=>{
    const data = e.data
    postMessage(ws.showData(data))
})