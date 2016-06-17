$(function() {
	$('#calculate').on('click', function() {
		// gets all the user inputs
		var totalDue = $('#totalDue').val();
		var totalPaid = $('#totalPaid').val();
		// gets the change from the transaction and rounds it down to only get dollars
		var change = totalPaid - totalDue ;
		var dollars = Math.floor(change);
// takes the remaining dollars away and only leaves the coins
        change = change - dollars;
        // makes it easier to work with the change we have left over 
		 change = change * 100;
// gives the remainder for the quarters
		var quarter = Math.floor(change/25);
		change = change % 25;
		// gives remainder for dimes
		var dime = Math.floor(change/10);
		change = change % 10;
		// gives remainder for nickles
		var nickle = Math.floor(change/5);
		change = change % 5;
		// gives remainder for pennies
		var penny = Math.round(change);
		


// printing the change on the html page
		$('#dollars').html(dollars);
		$('#quarter').html(quarter);
		$('#dime').html(dime);
		$('#nickle').html(nickle);
		$('#penny').html(penny);


	})


});