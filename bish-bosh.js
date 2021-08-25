/**
 * Update range-labels with range value  
 */ 
function rangeUpdater(label, rangeElement) { 
    document.getElementById(label).innerHTML = document.getElementById(rangeElement).value; 
}

/**
 * Adds li-elements to ul-list 'bishBoshList'.
 */
function bishBosh() {
    // Ul-list
    var listParent = document.getElementById('bishBoshList');
    
    // Range-values
    var amount = document.getElementById('count').value;
    var bishNumber = document.getElementById('bish').value;
    var boshNumber = document.getElementById('bosh').value;
    
    // Counter-elements
    var bishBoshCount = document.getElementById('bishbosh-count');
    var bishCount = document.getElementById('bish-count');
    var boshCount = document.getElementById('bosh-count');
    
    // Counters
    var bishboshCounter = 0;
    var bishCounter = 0
    var boshCounter = 0;

    // Clear items
    listParent.innerHTML = '';
    var counters = [bishBoshCount, bishCount, boshCount];
    counters.forEach(x => x.innerHTML = '0');

    // Main loop
    for (let i = 1; i <= amount; i++) {
        // console.log(`Loop i: ${i}`);

        // Creates listitem
        var liElement = document.createElement('li');
        
        // Number equally divided with both Bish and Bosh
        if (i % bishNumber == 0 && i % boshNumber == 0) {
            // console.log("bish-bosh")
            
            // Set element text and color
            liElement.innerHTML = 'Bish-Bosh';
            liElement.className = 'green'; // Seems safer than liElement.style.color = 'green'
            listParent.appendChild(liElement);

            // Adds to counter
            bishBoshCount.innerHTML = ++bishboshCounter;

        }

        // Number equally divided by Bish
        else if (i % bishNumber == 0) {
            // console.log('Bish')

            liElement.innerHTML = 'Bish';
            liElement.className = 'red';
            listParent.appendChild(liElement);

            bishCount.innerHTML = ++bishCounter;
        }

        // Number equally divided by Bosh
        else if (i % boshNumber == 0){
            // console.log('Bosh')

            liElement.innerHTML = 'Bosh';
            liElement.className = 'blue';
            listParent.appendChild(liElement);

            boshCount.innerHTML = ++boshCounter;
        }

        // Number not equally divided with bish nor bosh
        else {
            // console.log('Number')
            
            liElement.innerHTML = i;
            listParent.appendChild(liElement);
        }

    }


}