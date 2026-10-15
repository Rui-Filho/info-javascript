/* European weekday  */

let date = new Date(2012, 0, 3);  // 3 Jan 2012


function getLocalDay(data){

    if(data.getDay()===0){
        return 7
    } else {
    return data.getDay()
    }
}





console.log( getLocalDay(date) );       // tuesday, should show 2