export const isValidNumber = (number:number)=>{

    const regex = new RegExp("[1-9]\d*");
    if(regex.test(number.toString())){
        return true
    }else{
        return false
    }

}