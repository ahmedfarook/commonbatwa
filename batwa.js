var code = 'HVFKNZHXR3CUERQ6JD2Z7G'
function timeout() {
    setTimeout(function(){ document.getElementById("code").value = ""; }, 5000);
  }
document.getElementById('Submit').onclick = function () {
    
    var codeval = document.getElementById("code").value
    if (codeval === code) {
        document.getElementById('updbal').textContent = "Wallet Balance = " +  '10000 Rs'
        document.getElementById("code").value = ""
    }
    else {
        document.getElementById("code").value = "Invalid code"
    
        //alert("Invalid code")
        timeout();
        
}

}

//document.getElementById("code").value = ""
//console.log(data)


//document.getElementById('updbal').textContent = "Wallet Balance = " + "0rs"