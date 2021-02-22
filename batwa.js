var code = 'hvfkN/qlp/zhXR3cuerq6jd2Z7g'

document.getElementById('Submit').onclick = function () {
    
    var codeval = document.getElementById("code").value
    if (codeval === code) {
        document.getElementById('updbal').textContent = "Wallet Balance = " +  '10000 Rs'
        document.getElementById("code").value = ""
    }

}

//document.getElementById("code").value = ""
//console.log(data)


//document.getElementById('updbal').textContent = "Wallet Balance = " + "0rs"