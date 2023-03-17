let list = [];

        function Deletefirst(){
        list.shift();
        document.getElementById("demo").innerHTML = list;
        return list;
    } 

        function Deletelast(){
        list.pop();
        document.getElementById("demo").innerHTML = list;
        return list;
    }

    function listadd() {
    newItem = document.getElementById("shop-item").value;
    list.push(newItem);
    document.getElementById("demo").innerHTML = list;
    return list;
    }

    document.getElementById("add-list").addEventListener("click",function(){ listadd(...list)});

    document.getElementById("first-delete").addEventListener("click",function(){ Deletefirst(...list)});

    document.getElementById("last-delete").addEventListener("click",function(){ Deletelast (...list)});

    