export default{
    format(p1){
        let config = new Intl.NumberFormat("de-De",{minimumFractionDigits:2});        
        return `${config.format(p1)}`;
    }

}