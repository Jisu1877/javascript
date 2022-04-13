'use strict';

class Member {
    //생성자 (필드를 따로 적지 않았을때...)
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    // getters 생성
    get age() {
        return this._age + 1;
    }
    get color() {
        return "색상 :" + this._color;
    }

    // setters 생성
    set age(age) {
        // this._age = age;
        this._age = age < 1 ? 1 : age;
    }

    set color(color) {
        // this._color = color;
        if(color == "깜정" || color == "껌정" || color == "흑색" ) {
            this._color = "검정";
        }
        else {
            this._color = color;
        }
    }

    //메소드
    memberPrint() {
        console.log("성명 : " + this.name + " /나이 : " + this.age);
    }
}