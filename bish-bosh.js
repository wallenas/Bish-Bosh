// Update range-labels
function rangeUpdater(label, rangeElement) { 
    document.getElementById(label).innerHTML = document.getElementById(rangeElement).value; 
}


function bishBosh() {
    document.getElementById('numberList').innerHTML = "";
    var amount = document.getElementById('count').value;
    var bishTal = document.getElementById('bish').value;
    var boshTal = document.getElementById('bosh').value;

    for (let i = 1; i <= amount; i++) {
        console.log(`Loop i: ${i}
                    \nBish = ${bishTal} 
                    \nBosh = ${boshTal}`);

        var pElement = document.createElement("li");
        var outDiv = document.getElementById("numberList");
        
        if (i % bishTal == 0 && i % boshTal == 0) {
            console.log("bish-bosh")
            pElement.innerHTML = 'Bish-Bosh';
            pElement.style.color = "green";
            outDiv.appendChild(pElement);
        }

        else if (i % bishTal === 0) {
            console.log("bish")
            pElement.innerHTML = 'Bish';
            pElement.style.color = "red"
            outDiv.appendChild(pElement);
        }

        else if (i % boshTal == 0){
            console.log("bosh")
            pElement.innerHTML = "Bosh";
            pElement.style.color = "lightblue"
            outDiv.appendChild(pElement);
        }

        else {
            console.log("index")
            pElement.innerHTML = i;
            outDiv.appendChild(pElement);
        }

        
    }


}