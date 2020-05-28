var yahooStockPrices = require('yahoo-stock-prices');
var NETprice = "";
const client = require('discord-rich-presence')('715252355209232435');
var starttime = new Date();

// start month, start day, start year, end month, end day, end year, ticker, frequency

// month [ 0 -> 11 ] = [ January -> December ]


function updatePrices(){
yahooStockPrices.getCurrentPrice('NET', function(err, price){

    // console.log(price);
	NETprice=(price).toFixed(2);
	console.log(NETprice)

// --- DISCORD

	client.updatePresence({
		state: `$${NETprice}/share`,
		details: 'Currently Worth:',
		largeImageKey: 'cf',
		instance: true,
	  });

});
}

updatePrices()
setInterval(() => {
	updatePrices();
}, 15e3);


 


