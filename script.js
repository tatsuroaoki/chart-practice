google.charts.load('current', {'packages':['corechart', 'timeline']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Score Range');
  data.addColumn('number', 'Games');
  data.addRows([
    ['0-100', 2],
    ['100-200', 5],
    ['200-300', 3]
  ]);

  var options = {'title':'Bowling Score Incidences',
                 'width':400,
                 'height':300};

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawSemestersChart() {
  var data = new google.visualization.arrayToDataTable(
    [
      ['Semester', 'Credits', { role: 'style' }],
      ['Fall 2018', 0, '#114789'],
      ['Spring 2019', 0, '#8faeff'],
      ['Fall 2019', 1, '#114789'],
      ['Spring 2020', 1, '#8faeff'],
      ['Fall 2020', 3, '#114789'],
      ['Spring 2021', 3, '#8faeff'],
      ['Fall 2021', 3, '#114789'],
      ['Spring 2022', 3, '#8faeff']
    ]
  );
  var options = {'title':'Each Dollar Donated Goes To',
                 'width':400,
                 'height':300
                };

  var chart = new google.visualization.BarChart(document.getElementById('semesters'));
  chart.draw(data, options);
}

function drawAllocationChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Expense');
  data.addColumn('number', 'Cents');
  data.addRows([
    ['Administrative Costs', 4],
    ['Fundraising', 16],
    ['Youth Programs', 36],
    ['Adult Programs', 44]
  ]);

  var options = {'title':'Each Dollar Donated Goes To',
                 'width':400,
                 'height':300,
                 'pieHole': 0.5,
                  'colors': ['#8AD1C2', '#9F8AD1', '#D18A99', '#BCD18A']
                };

  var chart = new google.visualization.PieChart(document.getElementById('allocation'));
  chart.draw(data, options);
}

function drawTimelineChart(){
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Phase' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'Complete General Education Requirements', new Date(2018, 08, 01), new Date(2019, 4, 1)],
    [ 'Choose Major', new Date(2019, 5, 1),  new Date(2019, 7, 1)],
    [ 'One Major Course Per Semester', new Date(2019, 8, 01),  new Date(2020, 04, 01)],
    [ 'Three Major Courses Per Semester', new Date(2020, 8, 1),  new Date(2022, 4, 1)]
  ]);

  chart.draw(dataTable);
}


window.onload = function(){
  drawTimelineChart()
  // Event listeners for each button: clear all charts, redraw requested one
  document.getElementById('semester-trigger').addEventListener('click', function(){
      document.getElementById('semesters').innerHTML = ""
      document.getElementById('chart_div').innerHTML = ""
      document.getElementById('allocation').innerHTML = ""
      drawSemestersChart();
  })

  document.getElementById('bowling-trigger').addEventListener('click', function(){
    document.getElementById('semesters').innerHTML = ""
    document.getElementById('chart_div').innerHTML = ""
    document.getElementById('allocation').innerHTML = ""
    drawChart()
  })

  document.getElementById('allocation-trigger').addEventListener('click', function(){
    document.getElementById('semesters').innerHTML = ""
    document.getElementById('chart_div').innerHTML = ""
    document.getElementById('allocation').innerHTML = ""
    drawAllocationChart();
  })
}
