console.log("let's build some charts!")

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['timeline']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
//google.charts.setOnLoadCallback(drawAllocationChart);
//google.charts.setOnLoadCallback(drawSemesterChart);
//google.charts.setOnLoadCallback(drawSemesterTimelineChart)

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
function drawSemesterChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Semester');
	data.addColumn('number', 'Classes');
	data.addRows([
		['Fall 2018', 10],
		['Spring 2019', 8],
		['Fall 2019', 1],
		['Spring 2020', 1],
		['Fall 2020', 3],
		['Spring 2021', 3],
		['Fall 2021', 3],
		['Spring 2022', 3]
	]);

	// Set chart options
	var options = {'title':'Donation Allocation by Category',
																'width':400,
																'height':300,
																'colors': ['3599BB']};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.BarChart(document.getElementById('semesters'));
	chart.draw(data, options);
}
//function drawSemesterTimelineChart() {
//	var container = document.getElementById('semester-timeline');
//	var chart = new google.visualization.Timeline(container);
//	var dataTable = new google.visualization.DataTable();
//	dataTable.addColumn({ type: 'string', id: 'Category'})
//	dataTable.addColumn({ type: 'string', id: 'Semesters'});
//	dataTable.addColumn({ type: 'date', id: 'Start' });
//	dataTable.addColumn({ type: 'date', id: 'End' });
//	dataTable.addRows([
//		['General Requirements', '1-2', new Date(2018, 9, 1), new Date(2019, 5, 31) ],
//		['Major', '3-4', new Date(2019, 9, 1), new Date(2020, 5, 1) ],
//		['OK', 'OK',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);
//
//	var options = {
//		timeline: { showRowLabels: false }
//	};
//
//	chart.draw(dataTable, options);
//}

window.onload = function() {
	// Event listeners for each button: clear all charts, redraw requested one
	document.getElementById('semester-trigger').addEventListener('click', function(){
		document.getElementById('semesters').innerHTML - "";
		document.getElementById('chart-div').innerHTML="";
		document.getElementById('allocation').innerHTML = "";
		drawSemesterChartChart();
	});


	document.getElementById('bowling-trigger').addEventListener('click', function(){
		document.getElementById('semesters').innerHTML - "";
		document.getElementById('chart-div').innerHTML="";
		document.getElementById('allocation').innerHTML = "";
		drawChart();
	});


	document.getElementById('allocation-trigger').addEventListener('click', function(){
		document.getElementById('semesters').innerHTML - "";
		document.getElementById('chart-div').innerHTML="";
		document.getElementById('allocation').innerHTML = "";
		drawAllocationChart();
	});
}