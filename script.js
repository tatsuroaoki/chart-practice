console.log("let's build some charts!")

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawAllocationChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Score Range');
	data.addColumn('number', 'Frequency');
	data.addRows([
		['0-100', 2],
		['100-200', 5],
		['200-300', 3]
		//		['Sausages', 3],
		//		['Pepperoni', 2]
	]);

	// Set chart options
	var options = {'title':'My Bowling Score Frequency',
																'width':400,
																'height':300};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}

function drawAllocationChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Expense');
	data.addColumn('number', 'Cents');
	data.addRows([
		['Administrative Costs', 4],
		['Fundraising', 16],
		['Youth Programs', 36],
		['Adult Programs', 44]
		//		['Sausages', 3],
		//		['Pepperoni', 2]
	]);

	// Set chart options
	var options = {'title':'Donation Allocation by Category',
																'width':400,
																'height':300,
																'pieHole': 0.5,
																'colors': ['#8AD1C2', '#9F8AD1', '#D18A99', '#BCD18A']};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('allocations'));
	chart.draw(data, options);
}