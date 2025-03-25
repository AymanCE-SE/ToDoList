let inputText = document.querySelector('input[type="text"]');
let add = document.querySelector('input[type="button"]');
let targetTable=document.querySelector('table');
let checkFlag = 0;
let flagColor=0;

add.onclick = ()=>{

    //row
    let row = document.createElement("tr");
    row.className="row";

    //checkBox
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkBox";

    let checkTD = document.createElement("td");
    checkTD.appendChild(checkBox)


    //data 
    let dataEntry = document.createElement("td")
    
    dataEntry.textContent= inputText.value;
    

    //delete button
    let deletion = document.createElement("input");
    deletion.type = "button";
    deletion.className= "cycle";
    let deleteTD = document.createElement("td");
    deleteTD.appendChild(deletion)
    
    //append to the row
    if(dataEntry.textContent!="")
    {
        row.appendChild(checkTD);
        row.appendChild(dataEntry);
        row.appendChild(deleteTD);
    }else alert("Please Enter a Value!!")
    targetTable.appendChild(row)

    inputText.value = ""
    //deletion of Task
    deletion.onclick= ()=>{
    let conf = confirm("You Sure You Want To delete the Item?")
    if(conf)
    row.remove()
    }

    // Toggle done/undone state
    checkBox.addEventListener("click", () => {
        dataEntry.classList.toggle("completed");
    });

}






