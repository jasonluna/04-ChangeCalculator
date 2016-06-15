$(function() {
	$('#calculate').on('click', function() {
		var totalDue = $('#totalDue').val();
		var totalPaid = $('#totalPaid').val();
		var change = totalPaid - totalDue ;
		var dollars = Math.floor(change);
		change = change - dollars;
		 change = change * 100;
		var quarter = Math.floor(change/25);
		change = change % 25;
		var dime = Math.floor(change/10);
		change = change % 10;
		var nickle = Math.floor(change/5);
		change = change % 5;
		var penny = Math.round(change);
		



		$('#dollars').html(dollars);
		$('#quarter').html(quarter);
		$('#dime').html(dime);
		$('#nickle').html(nickle);
		$('#penny').html(penny);


	})


});