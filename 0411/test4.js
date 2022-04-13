'use strict'
const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

function dateBring() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const yymmdd2 = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

    document.getElementById("startDate").value = yymmdd;
    document.getElementById("endDate").value = yymmdd2;
}

function compareDateCheck1() {
    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;

    const startDate = new Date(start);
    const endDate = new Date(end);
    let res;

    if(isSameDay(startDate, endDate)) {
        res = "처음에 입력된 날짜와 같습니다.";
    }
    else {
        res = "처음에 입력된 날짜와 다릅니다."
    }
    document.getElementById("demo").innerHTML = res;
}
    // function isSameDay(startDate, endDate) {
    //     return startDate.getFullYear() === endDate.getFullYear() &&
    //         startDate.getMonth() === endDate.getMonth() &&
    //         startDate.getDate() === endDate.getDate();
    // }

    // 익명함수
    // const isSameDay = function(startDate, endDate) {
    //     return startDate.getFullYear() === endDate.getFullYear() &&
    //     startDate.getMonth() === endDate.getMonth() &&
    //     startDate.getDate() === endDate.getDate();
    // }

    const isSameDay = (startDate, endDate) => {
        return startDate.getFullYear() === endDate.getFullYear() &&
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getDate() === endDate.getDate();
    }

    // 날짜 차이 비교하기(endDate - startDate)
    function compareDateCheck2() {
        let start = document.getElementById("startDate").value;
        let end = document.getElementById("endDate").value;
    
        const startDate = new Date(start);
        const endDate = new Date(end);

        let res = endDate.getTime() - startDate.getTime();
        res = res / (24 * 60 * 60 * 1000);

        document.getElementById("demo").innerHTML = res;
    }