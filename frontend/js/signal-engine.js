// Adams AI Trading Signal Engine


function analyzeMarket(data){


let score = 0;



// Trend Analysis

if(data.price > data.ema50){

    score += 1;

}
else{

    score -= 1;

}



// RSI Analysis

if(data.rsi < 30){

    score += 1;

}


if(data.rsi > 70){

    score -= 1;

}



// MACD Analysis

if(data.macd === "bullish"){

    score += 1;

}


if(data.macd === "bearish"){

    score -= 1;

}




// Final Decision


let signal;



if(score >= 2){

    signal = "BUY";

}


else if(score <= -2){

    signal = "SELL";

}


else{

    signal = "WAIT";

}




return {

    signal: signal,

    strength: Math.abs(score) * 25 + "%"

};


}
