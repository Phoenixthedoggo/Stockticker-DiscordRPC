
// --- DEVELOPED / CREATED BY PHOENIXTHEDOGGO / PHOENIX SHEPHERD, WITH THE ASSISTANCE OF JACK FOX (https://github.com/Nexure)

var yahooStockPrices = require('yahoo-stock-prices');
var NETprice = ""; // --- So like, "NETprice" is a variable I used to determine what the current stock price is at any give time so that I can fill the STATE field in RPC.
const client = require('discord-rich-presence')('715252355209232435');

function updatePrices(){
yahooStockPrices.getCurrentPrice('NET', function(err, price){ // --- 'NET' is the stock name. Replace with whatever you want to track :3

	NETprice=(price).toFixed(2); // --- So feel free to rename / replace it.

// --- DISCORD RPC

	client.updatePresence({
		state: `$${NETprice}/share`, // -- And here.
		details: 'Currently Worth:', 
		largeImageKey: 'cf', // --- cf is an asset on Discord's Developer Portal. Replace with that you name your asset.
		instance: true,
	  });

});
}

updatePrices()
setInterval(() => { // --- Don't touch this, it's the auto-check and replace timer.
	updatePrices();
}, 15e3);


 


