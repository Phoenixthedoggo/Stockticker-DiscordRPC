
// --- DEVELOPED / CREATED BY PHOENIXSHEPPY / PHOENIX SHEPHERD, WITH THE ASSISTANCE OF JACK FOX (https://github.com/Nexure)

var yahooStockPrices = require('yahoo-stock-prices');
var stockPrice = ""; // --- So like, "stockPrice" is a variable I used to determine what the current stock price is at any give time so that I can fill the STATE field in RPC.
const client = require('discord-rich-presence')('803082200550735883');
var stockTicker = "bb"; // --- This is the stock symbol of the stock you want to track, for instance I want Blackberry, so I put "bb".

function updatePrices(){
yahooStockPrices.getCurrentPrice(stockTicker, function(err, price){

	stockPrice=(price).toFixed(2);

// --- DISCORD RPC

	client.updatePresence({
		state: `$${stockPrice}/share`,
		details: 'Currently Worth:', 
		largeImageKey: 'bb', // --- bb is an asset on Discord's Developer Portal. Replace with that you name your asset.
		instance: true,
	  });

});
}

updatePrices()
setInterval(() => { // --- Don't touch this, it's the auto-check and replace timer.
	updatePrices();
}, 15e3);


 


