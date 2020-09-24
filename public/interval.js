function interval(int, coins) {

    let correctInterval = []
    
    if (int !== 'default') {
        correctInterval.push(coins[0])
        
        for (let i = 0; i < coins.length; i++) {
            for (let j = 0; j < coins.length; j++) {

                let dif = coins[j+1].date - coins[i].date
                
                if (int === 'interval1') {
                    if (dif === 60000) {
                        correctInterval.unshift(coins[i + 1])
                    }
                } else if (int === 'interval2') {
                    if (dif === 1800000) {
                        correctInterval.unshift(coins[i + 1])
                    }
                } else if (int === 'interval3') {
                    if (dif === 3600000) {
                        correctInterval.unshift(coins[i + 1])
                    }
                } else if (int === 'interval4') {
                    if (dif === 86400000) {
                        correctInterval.unshift(coins[i + 1])
                    }
                }
            }
        }
    } else {
        return correctInterval
    }
    return correctInterval
}

module.exports = interval