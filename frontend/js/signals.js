// Adams AI Trading Signals


const signalContainer =
document.getElementById("signalContainer");



const signals = [


{
asset:"XAUUSD",
type:"BUY",
entry:"2385.50",
sl:"2375.00",
tp:"2410.00",
timeframe:"15 Minutes"
},


{
asset:"EURUSD",
type:"SELL",
entry:"1.0850",
sl:"1.0900",
tp:"1.0750",
timeframe:"1 Hour"
},


{
asset:"BTCUSD",
type:"BUY",
entry:"68000",
sl:"66500",
tp:"72000",
timeframe:"4 Hours"
}


];



signals.forEach(function(signal){



signalContainer.innerHTML += `


<div class="card">


<h3>
${signal.asset}
</h3>


<p>
Direction: <b>${signal.type}</b>
</p>


<p>
Entry: ${signal.entry}
</p>


<p>
Stop Loss: ${signal.sl}
</p>


<p>
Take Profit: ${signal.tp}
</p>


<p>
Timeframe: ${signal.timeframe}
</p>



</div>


`;



});
