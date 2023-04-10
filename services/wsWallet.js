import format from "../Js/formater.js"
let ws = {
    walletAmount(p1){
        let income = new Array();
        let expenses = new Array();
        let wallet = 0;
        const data = p1.map(element => {
            (element.type === "ingreso")
            ?(income.unshift(parseInt(element.amount)),
            console.log(income)
            ) 
            :expenses.unshift(parseInt(element.amount));
        });
        let total = income.reduce((a, b) => a + b, 0);
        console.log(total);
        let negativeTotal = expenses.reduce((a, b) => a + b, 0);
        console.log(negativeTotal);
        wallet = total - negativeTotal;
        let porcentaje = ((negativeTotal * 100)/total);
        return ({data: format.format(wallet), total1: format.format(total), total2: format.format(negativeTotal), porcentaje1: porcentaje.toFixed(2)})
    }
}

self.addEventListener("message", (e)=>{
    postMessage(ws.walletAmount(e.data))
}) 