var maxProfits = function(prices) {
    buyPrice = 0;
    sellPrice = null;
    for(let i=1;i < prices.length;i++) {
        if(prices[buyPrice] > prices[i]) {
          buyPrice = i;
        }
    }
    for(let i = buyPrice + 1;i < prices.length;i++) {
        if(!sellPrice && prices[buyPrice] < prices[i]) {
            sellPrice = i;
        } 
            if(sellPrice > 0 && prices[sellPrice] < prices[i]) {
                sellPrice = i;
            }
    }
    if(buyPrice == prices.length -1) {
        return 0;
    }
    return prices[sellPrice] - prices[buyPrice];
};
// Best time to buy abd sell stocks

var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }
    
    let min = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i]-min);
        min = Math.min(min, prices[i]);
    }
    
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))