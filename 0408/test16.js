'use strict';

function regexCheck() {
    //정규표현식을 만든다.
    const regex1 =  /atom/gm; //'atom'문자열이 포함되어있으면? true, 없으면 false
    const regex2 = /mbc|kbs|sbs/gm;
    const regex3 = /홍길(동|순)/gm;
    const regex4 = /[a-g]/gm;   //a~g까지 포함하고 있는가?
    // const regex5 = /[a-z]/gm;  //a~z까지 포함하고 있는가?
    const regex5 = /[^a-z]/gm;  //a~z문자외에 다른문자를 포함하고 있는가?
    const regex6 = /[A-Z]/gm;  //A~Z를 포함하고 있는가?
    const regex6_2 = /^[A-Z]/gm;  //A~Z를 포함하고 있는가? 각괄호앞의 ^는 시작문자열을 의미, 첫글자는 영문대문자가 오면 true

    // ===========================

    let content = document.getElementById("content").value;
    if(content == "") {
        alert("1. 문자열을 입력하세요?");
        return false;
    }
    // else if(!content.match(regex1)) {
    //     alert("2. atom문자열을 포함하고 있지 않습니다.");
    //     return false;
    // }
    // else if(!content.match(regex2)) {
    //     alert("3. mbc,kbs,sbs문자열을 포함하고 있지 않습니다.");
    //     return false;
    // }
    // else if(!content.match(regex3)) {
    //     alert("4. 홍길동/홍길순 문자열을 포함하고 있지 않습니다.");
    //     return false;
    else if(!content.match(regex4)) {
        alert("5. a/b/c/d/e/f/g 문자열을 포함하고 있지 않습니다.");
        return false;
    }
    // else if(content.match(regex5)) {
    //     alert("5. a~z문자외에 다른문자를 포함하고 있다.");
    //     return false;
    // }
    // else if(content.match(regex5)) {
    //     alert("5. 영문소문자 외에 다른 문자를 포함하고 있습니다.");
    //     return false;
    // }
    // else if(content.match(regex6)) {
    //     alert("6. 영문대문자를 포함하고 있습니다.");
    //     return false;
    // }
    // else if(!regex6.test(content)) {
    //     alert("6. 영문대문자를 포함하고 있지 않습니다.");
    //     return false;
    // }
    // else if(regex6_2.test(content)) {
    //     alert("6. 첫글자가 영문대문자 입니다..");
    //     return false;
    // }
        alert("작업끝");
        document.getElementById("content").focus();

}