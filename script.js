document.getElementById('check-button').addEventListener('click', function() {
    var playerTotal = parseInt(document.getElementById('player-total').value);
    var dealerUpcard = parseInt(document.getElementById('dealer-upcard').value);

    if (isNaN(playerTotal) || playerTotal < 2 || playerTotal > 20 || isNaN(dealerUpcard) || dealerUpcard < 2 || dealerUpcard > 11) {
        document.getElementById('result').innerText = "Invalid input. Hand total should be between 2 and 20, and dealer upcard value should be between 2 and 11.";
        return;
    }

    var decision = determineBasicStrategy(playerTotal, dealerUpcard);
    document.getElementById('result').innerText = "Basic Strategy Decision: " + decision;
});

function determineBasicStrategy(playerTotal, dealerUpcard) {
    // Decision-making logic based on basic strategy
    if (playerTotal >= 17) {
        return "Stand";
    } else if (playerTotal <= 8) {
        return "Hit";
    } else if (playerTotal == 9) {
        return (dealerUpcard >= 3 && dealerUpcard <= 6) ? "Hit" : "Double Down";
    } else if (playerTotal == 10) {
        return (dealerUpcard >= 2 && dealerUpcard <= 9) ? "Double Down" : "Hit";
    } else if (playerTotal == 11) {
        return "Double Down";
    } else if (playerTotal == 12) {
        return (dealerUpcard >= 4 && dealerUpcard <= 6) ? "Stand" : "Hit";
    } else if (playerTotal >= 13 && playerTotal <= 16) {
        return (dealerUpcard >= 2 && dealerUpcard <= 6) ? "Stand" : "Hit";
    } else {
        return "Error: Invalid hand total";
    }
}
