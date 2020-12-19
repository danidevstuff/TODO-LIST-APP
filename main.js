const addbtn = document.getElementById('btn');

var input = document.getElementById('input_box');

const container = document.getElementById('container');

const ok = document.getElementById('item');

const remove_all = document.getElementById("allbtn");

addbtn.onclick = function() {
    var para = document.createElement('p');
    var btn = document.createElement("button");
    var t=  document.createTextNode("REMOVE");
    para.innerText = input.value;
    btn.appendChild(t);
    ok.appendChild(para);
    para.appendChild(btn);
    btn.classList.add("removebtn")
    input.value = "";
    para.classList.add('jsstuff');
    btn.addEventListener("click",function(){
        para.remove();
    }
    );

    remove_all.addEventListener("click", function(){
        para.remove();
    });
    
};

