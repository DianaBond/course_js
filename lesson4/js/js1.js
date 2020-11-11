
function DataTime(fDate, sDate){
    let counter = 0;
    let woDays = 0;
    while (fDate.getTime()<sDate.getTime()){
        if (fDate.getDay() !==0 && fDate.getDay() !==6){
            counter++;
        }
        fDate.setDate(fDate.getDay()+1);
    }
    return counter;
}

let quantity = DataTime("2020-09-25","2020-09-16");
console.log(quantity);