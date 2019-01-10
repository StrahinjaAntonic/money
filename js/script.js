$(document).ready(function() {

    var now, months, month, year;
    
    now = new Date();
    
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = now.getMonth();
    
    year = now.getFullYear();

    $('.month').text(`${months[month]} ${year}`);
    
		$('#submit').click(function(){
			let date = $('#date').val();
			let cat = $('#categories option:selected').val()
			let number = $('#number').val();
			let message = $('#message').val();
			console.log(date, cat,number,message);

			var table = $('tbody').append(`
						<tr>
		                    <td>${date}</td>
		                    <td>${cat}</td>
		                    <td>${number}</td>
		                    <td>${message}</td>
		                </tr>`);

			$('.table').DataTable();

			localStorage.setItem("date", date);
			localStorage.setItem("cat", cat);
			localStorage.setItem("num", number);
			localStorage.setItem("message", message);
			
	   	})

	   	/*$('#clear').click(function(){
	   		localStorage.clear();
	   	})*/
    
	   	var date = localStorage.getItem("date");
	   	var cat = localStorage.getItem("cat");
	   	var number = localStorage.getItem("num");
	   	var message = localStorage.getItem("message");

	   	var table = $('tbody').append(`
						<tr>
		                    <td>${date}</td>
		                    <td>${cat}</td>
		                    <td>${number}</td>
		                    <td>${message}</td>
		                </tr>`);

			$('.table').DataTable();
    
});