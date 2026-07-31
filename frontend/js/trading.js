// Adams AI Demo Trading System


let balance = 10000;


let history = [];



const balanceDisplay =
document.getElementById("balance");



function updateBalance(){

balanceDisplay.innerHTML =
"$" + balance.toFixed(2);

}



function openTrade(type){


let asset =
document.getElementById("asset").value;



let amount =
Number(
document.getElementById("amount").value
);



if(amount > balance){

alert("Insufficient balance");

return;

}



let result =
Math.random() > 0.5 ? amount * 0.2 : -amount * 0.1;



balance += result;



history.push({

asset:asset,

type:type,

profit:result.toFixed(2)

});



document.getElementById("history")
.innerHTML = history.map(trade =>

`

<p>
${trade.type}
${trade.asset}

Result:
$${trade.profit}

</p>

`

).join("");



updateBalance();


}



document.getElementById("buy")
.onclick=function(){

openTrade("BUY");

};



document.getElementById("sell")
.onclick=function(){

openTrade("SELL");

};
