document.getElementById('container').onchange = change
document.getElementById('billTotal').onkeyup = change


function change() {
    var bill = Number (document.getElementById('billTotal').value);
    var tipPercent = document.getElementById('tipInput').value;
    var split = document.getElementById('splitInput').value;
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipEach = tipValue / split;

    document.getElementById('tipOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitOutput').innerHTML = split;
    document.getElementById('newBill').innerHTML = "DKK " + newBillEach.toFixed(2);
    document.getElementById('tippp').innerHTML = "DKK " + tipEach.toFixed(2);
}	
	