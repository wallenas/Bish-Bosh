// Update range-labels
function rangeUpdater(label, rangeElement) { 
    document.getElementById(label).innerHTML = document.getElementById(rangeElement).value; 
}


function bishBosh() {
    document.getElementById('hej').innerHTML = "";
    var amount = document.getElementById('count').value;
    var bishTal = document.getElementById('bish').value;
    var boshTal = document.getElementById('bosh').value;

    for (let i = 1; i <= amount; i++) {
        console.log(`Loop i: ${i}\nBish = ${bishTal} \nBosh = ${boshTal}`);
        var pElement = document.createElement("label");
        var outDiv = document.getElementById("hej");
        
        if (i % bishTal == 0 && i % boshTal == 0) {
            console.log("bish-bosh")
            pElement.innerHTML = '  Bish-Bosh  ';
            outDiv.appendChild(pElement);
        }

        else if (i % bishTal === 0) {
            console.log("bish")
            pElement.innerHTML = '  Bish  ';
            outDiv.appendChild(pElement);
        }

        else if (i % boshTal == 0){
            console.log("bosh")
            pElement.innerHTML = "  Bosh  ";
            outDiv.appendChild(pElement);
        }

        else {
            console.log("index")
            pElement.innerHTML = "  " + i + "  ";
            outDiv.appendChild(pElement);
        }

        
    }


}