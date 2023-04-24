






function calculateValue() {
    var item1Value = parseInt(document.getElementById("item1").value);
    var item2Value = parseInt(document.getElementById("item2").value);
    var item3Value = parseInt(document.getElementById("item3").value);
    var item4Value = parseInt(document.getElementById("item4").value);
    var item5Value = parseInt(document.getElementById("item5").value);
    var item6Value = parseInt(document.getElementById("item6").value);
    var totalValue = item1Value + item2Value + item3Value + item4Value + item5Value + item6Value;
    document.getElementById("totalValue").innerHTML = "Total value: $" + totalValue;
  }