console.log("Hello my world ! ");

$.get("data.ebdo.org/v1/search/get-all", function(data, status) {
    // console.log(data.items.filter(x => x.type == "freq_vector")[0]);
    // console.log(data.items.filter(x => x.type == "psd"));

    var psd = {
        y: data.items.filter(x => x.type == "psd")[0].values,
        x: data.items.filter(x => x.type == "freq_vector")[0].values,
        type: 'scatter'
    };

    var dataPlot = [psd];

    Plotly.newPlot('myDiv', dataPlot);

    var xValues = data.items.filter(x => x.type == "freq_vector")[0].values;
    var yValues = data.items.filter(x => x.type == "psd").map(psd => psd.timestamp);

    var psd = data.items.filter(x => x.type == "psd").map(psd => psd.values);
    var rpsd = psd[0].map((col, i) => psd.map(row => row[i]));
    console.log(psd);

    var zValues = psd;

    var colorscaleValue = [
        [0, '#3D9970'],
        [1, '#001f3f']
    ];

    var dataHeatMap = [{
        x: xValues,
        y: yValues,
        z: zValues,
        type: 'heatmap',
        // colorscale: colorscaleValue,
        showscale: false
    }];

    Plotly.newPlot('heatmap', dataHeatMap);
});