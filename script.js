
function compute()
{
    if(principal.value < 1){
        alert("Amount has to be a positive quantity")
        principal.focus()
        return
    }
    let interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    result = document.getElementById("result")
    result.innerHTML = "<p>If you deposit <mark>"+ principal +"</mark>,<br>an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"</mark></p>";

}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

finishPage = () =>{
    var rate = document.getElementById("rate").value;
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    years = document.getElementById("years");
    for(i=1; i<=10; i++){
    	let element = document.createElement("option")
    	element.innerText = i
    	element.setAttribute("value", i)
    	years.appendChild(element)
    }
}   