Template.charts.rendered = function() {
    chart = {
     target: 'chart1',
     type: 'BarChart',
     columns: [
       ['string', 'Topping'],
       ['number', 'Slices']
     ],
     rows: [
       ['Mushrooms', 3],
       ['Onions', 1],
       ['Olives', 1],
       ['Zucchini', 1],
       ['Pepperoni', 2]
     ],
     options: {
       'title':'How Much Pizza I Ate Last Night',
       'width':400,
       'height':300
     }
   };

   drawChart(chart);
}


Template.chart2.rendered = function() {
    chart = {
     target: 'chart2',
     type: 'PieChart',
     columns: [
       ['string', 'Topping'],
       ['number', 'Slices']
     ],
     rows: [
       ['Mushrooms', 3],
       ['Onions', 1],
       ['Olives', 1],
       ['Zucchini', 1],
       ['Pepperoni', 2]
     ],
     options: {
       'title':'How Much Pizza I Ate Last Night',
       'width':400,
       'height':300
     }
    };
    drawChart(chart);
}
