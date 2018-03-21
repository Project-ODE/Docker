function fsPlot() {
    var f = document.getElementById('from').value;
    var t = document.getElementById('to').value;
    var s = document.getElementById('ste').value;

    console.log(s);

    $.get(`data.ebdo.org/v1/examples/fake-timeserie/${f}/${t}/${s}`, function(data, status) {
        console.log(data);
        var trace1 = {
            x: data.items.map(frame => frame.ts),
            y: data.items.map(frame => frame.val),
            type: 'scatter'
        };


        var data = [trace1];

        Plotly.newPlot('myDiv', data);
    });
}