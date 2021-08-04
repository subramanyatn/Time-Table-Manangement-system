function myFunction() {
    var today = new Date();
    //var day = 6; var timeH=10; var timeM=36;
    var day = today.getDay();
    var timeH = today.getHours();
    var timeM = today.getMinutes();
    var timeEM = timeM;
    switch(day){
        case 0: day="Sunday";break;
        case 1: day="Monday";break;
        case 2: day="Tuesday";break;
        case 3: day="Wednesday";break;
        case 4: day="Thursday";break;
        case 5: day="Friday";break;
        case 6: day="Saturday";break;
    }
    if(timeH>=12){
        if(timeH>=13)
            timeH -=12;
        timeM = timeM+" pm";
    }else{
        timeM = timeM+" am";
    }
    var curr=day+", "+timeH+":"+timeM;
    document.getElementById("nowCont").innerHTML = curr;
}

function curSess(){
    var today = new Date();
    // var day = 1; var timeH=19; var timeM=00;
    var day = today.getDay();
    var timeH = today.getHours();
    var timeM = today.getMinutes();

    var tbl = document.getElementById("contTbl");
    var trows = tbl.getElementsByTagName("tr");
    var tcells = trows[0].getElementsByTagName("td");

    if(timeH>="9" && timeH<"19"){
        if(timeH>=13){
            timeH-=12;
        }
        for(var i=1;i<=10;i++){
            var sH = tcells[i].getElementsByTagName("span")[0];
            var sM = tcells[i].getElementsByTagName("span")[1];
            var eH = tcells[i].getElementsByTagName("span")[2];
            var eM = tcells[i].getElementsByTagName("span")[3];
            if((timeH=="5" && timeM>="30") || (timeH=="6" && timeM<="59")){
                tbl.rows[day].cells[10].style.backgroundColor="#3a93e0";
                tbl.rows[day].cells[10].style.color="#8ff5c6";
            }else if(sH.textContent==timeH && sM.textContent<=timeM && eH.textContent!=timeH){
                tbl.rows[day].cells[i].style.backgroundColor="#3a93e0";
                tbl.rows[day].cells[i].style.color="#8ff5c6";
            }else if(sH.textContent==timeH && sM.textContent<=timeM && eH.textContent==timeH && eM.textContent>timeM){
                tbl.rows[day].cells[i].style.backgroundColor="#3a93e0";
                tbl.rows[day].cells[i].style.color="#8ff5c6";
            }else if(sM.textContent>timeM && eH.textContent==timeH){
                tbl.rows[day].cells[i].style.backgroundColor="#3a93e0";
                tbl.rows[day].cells[i].style.color="#8ff5c6";
            }
        }
    }

    setInterval('window.location.reload()', 30000);
}



// function curSess(){
//     var today = new Date();
//     //var day = 6; var timeH=16; var timeM=14;
//     var day = today.getDay();
//     switch(day){
//         case 0: day="Sunday";break;
//         case 1: day="Monday";break;
//         case 2: day="Tuesday";break;
//         case 3: day="Wednesday";break;
//         case 4: day="Thursday";break;
//         case 5: day="Friday";break;
//         case 6: day="Saturday";break;
//     }
//     var timeH = today.getHours();
//     var timeM = today.getMinutes();
//     var row = document.getElementById("classTime");
//     var cells = row.getElementsByTagName("td");
//     if(timeH>="9" && timeH<="19"){
//         if(timeH>=13){
//             timeH-=12;
//         }
//         for(var i=1;i<=10;i++){
//             var sH = cells[i].getElementsByTagName("span")[0];
//             var sM = cells[i].getElementsByTagName("span")[1];
//             var eH = cells[i].getElementsByTagName("span")[2];
//             var eM = cells[i].getElementsByTagName("span")[3];
//             if((timeH=="5" && timeM>="30") || timeH=="6" || (timeH=="7" && timeM<="30")){
//                 cells[10].style.backgroundColor="#1F85DE";
//             }else if(sH.textContent==timeH && sM.textContent<=timeM && eH.textContent!=timeH){
//                 cells[i].style.backgroundColor="#1F85DE";
//             }else if(sH.textContent==timeH && sM.textContent<=timeM && eH.textContent==timeH && eM.textContent>=timeM){
//                 cells[i].style.backgroundColor="#1F85DE";
//             }else if(sM.textContent>timeM && eH.textContent==timeH){
//                 cells[i].style.backgroundColor="#1F85DE";
//             }
//         }
//     }
// }