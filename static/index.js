function suggestion() {

    var model = "gpt2-horror-stories";

    var monsterlen = document.getElementsByName("monster").length;
    var monster ="";

    for(var i =0;i<monsterlen;i++){
        if(document.getElementsByName("monster")[i].checked==true){
            monster = document.getElementsByName("monster")[i].value;
        }
    }

    var formData = new FormData();
    formData.append("context", monster );
    formData.append("model", model);
    fetch(
        "/gpt2",
        {
            method: "POST",
            body:formData
        }
    )
    .then(response => {
        if (response.status == 200){
            return response
        }
        else{
            throw Error("Failed");
        }
    })
    .then(response => response.json())
    .then(response => {
        var element = document.getElementById("context");

            element.innerHTML = monster + response[0];

    })
    .catch(e => {

        var element = document.getElementById("context");
        element.innerHTML = monster+e;
    })
}

function concat(newText) {
    var context = document.getElementById("context");
    var text = context.value;
    text += newText;

    context.value = text;
    clearSelect();
}

function clearSelect() {
    var items = document.getElementsByClassName("item");
    for (let index = 0; index < items.length; index++) {
        items[index].innerHTML = "";
    }
}