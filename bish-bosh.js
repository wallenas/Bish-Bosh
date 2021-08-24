// Update range-labels
function rangeUpdater(label, rangeElement) { 
    document.getElementById(label).innerHTML = document.getElementById(rangeElement).value; 
}


function bishBosh() {
    // Clear items
    document.getElementById('numberList').innerHTML = "";

    var amount = document.getElementById('count').value;
    var bishTal = document.getElementById('bish').value;
    var boshTal = document.getElementById('bosh').value;

    for (let i = 1; i <= amount; i++) {
       /*
        console.log(`Loop i: ${i}
                    \nBish = ${bishTal} 
                    \nBosh = ${boshTal}`);

        */

        // Creates listitem
        var liElement = document.createElement("li");
        var outDiv = document.getElementById("numberList");
        
        if (i % bishTal == 0 && i % boshTal == 0) {
            // console.log("bish-bosh")
            
            liElement.innerHTML = 'Bish-Bosh';
            liElement.style.color = "green";
            outDiv.appendChild(liElement);
        }

        else if (i % bishTal == 0) {
            // console.log("bish")

            liElement.innerHTML = 'Bish';
            liElement.style.color = "red"
            outDiv.appendChild(liElement);
        }

        else if (i % boshTal == 0){
            // console.log("bosh")

            liElement.innerHTML = "Bosh";
            liElement.style.color = "lightblue"
            outDiv.appendChild(liElement);
        }

        else {
            // console.log("index")
            
            liElement.innerHTML = i;
            outDiv.appendChild(liElement);
        }

        
    }


}