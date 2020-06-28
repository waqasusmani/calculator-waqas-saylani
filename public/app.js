document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#entry").value="";
    document.querySelector("#result").value="";
})

var entryString="0";

function calculate(elem){
    document.querySelector("#result").value=""
    if (elem.id!="equals"){
        entryString=document.querySelector("#entry").value;
        entryString+=document.getElementById(elem.id).value;
        document.querySelector("#entry").value=entryString;
    }
    console.log(entryString)
    if (elem.id=="equals"){
        document.getElementById("entry").value="";
        if (elem.id!="plus" && elem.id!="minus" && elem.id!="multiply" && elem.id!="divide"){
            document.getElementById("result").value=eval(entryString);
        }
    }
    else {
        if (elem.id!="plus" && elem.id!="minus" && elem.id!="multiply" && elem.id!="divide") {
            document.getElementById("result").value=eval(entryString)
        }
        
    }
}

