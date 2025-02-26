function active(){
    document.getElementById("female").classList.remove("active");
        document.getElementById("male").classList.add("active");
}
function active2(){
    document.getElementById("male").classList.remove("active");
    document.getElementById("female").classList.add("active");
}
function activationradio(id){
    document.getElementById("answer_1").classList.remove("active2");
    document.getElementById("answer_2").classList.remove("active2");
    document.getElementById("answer_3").classList.remove("active2");
    document.getElementById("answer_4").classList.remove("active2");
    document.getElementById(id).classList.add("active2");
}
function goal(id){
    document.getElementById("btn1").classList.remove("active3");
    document.getElementById("btn2").classList.remove("active3");
    document.getElementById("btn3").classList.remove("active3");
    document.getElementById("btn4").classList.remove("active3");
    document.getElementById(id).classList.add("active3");
}

function meals(id){
    document.getElementById("btd1").classList.remove("active3");
    document.getElementById("btd2").classList.remove("active3");
    document.getElementById("btd3").classList.remove("active3");
    document.getElementById("btd4").classList.remove("active3");
    document.getElementById(id).classList.add("active3");
}

function radio2(id){
    document.getElementById("answer_11").classList.remove("active4");
    document.getElementById("answer_22").classList.remove("active4");
    document.getElementById("answer_33").classList.remove("active4");
    document.getElementById(id).classList.add("active4");
}
