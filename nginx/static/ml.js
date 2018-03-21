$.get("data.ebdo.org/v1/search/get-all", function(data, status) {
    var mlValues = data.items.filter(x => x.id == "testML")[0];

    var xValues = mlValues.x;
    var yValues = mlValues.y;

    var mlPlot = {
        y: xValues,
        x: yValues,
        mode: 'markers',
        type: 'scatter'
    };

    var dataPlot = [mlPlot];

    Plotly.newPlot('myDiv', dataPlot);
});
