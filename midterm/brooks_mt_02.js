function checkTax() {
    var x = document.getElementById("TXP");

    if(x.value > 11) {
	    alert("Tax percentage too high");
	    document.getElementById('salesTax').value = "";
	}
}

function checkTip() {
    var y = document.getElementById("TPP");

    if(y.value < 4) {
	    alert("The tip percentage is too low");
	    document.getElementById('tip').value = "";
	}
}

function applyTax() {
    var inputAmount = parseFloat(document.getElementById('BASE').value);
    var salesTax = parseFloat(document.getElementById('TXP').value);
    var tip = parseFloat(document.getElementById('TPP').value);
    var taxprcnt = (salesTax / 100) * (inputAmount);
    var tipprcnt = (tip / 100) * (inputAmount);
    var grandTotal = inputAmount + taxprcnt + tipprcnt;

    document.getElementById('base_a').innerHTML = ('Base amount is: $' + inputAmount.toFixed(2) + '<Br> Tax amount is $' + taxprcnt.toFixed(2) + ' (' + salesTax + '%  tax) <br>'
    	+ 'Tip amount is $' + tipprcnt.toFixed(2) + ' (' + tip + '%  tip) <br>' + 'Total amount is: $' + grandTotal.toFixed(2));
}