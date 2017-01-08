var chart_h = 40;
var chart_w = 80;
var stepX = 77 / 14;

$(function () {
    $('#chart-1').html('<defs><clipPath id="clip" x="0" y="0" width="80" height="40" ><rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/></clipPath><linearGradient id="gradient-1"><stop offset="0" stop-color="#00d5bd" /><stop offset="100" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-2"><stop offset="0" stop-color="#954ce9" /><stop offset="0.3" stop-color="#954ce9" /><stop offset="0.6" stop-color="#24c1ed" /><stop offset="1" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0"/></linearGradient><linearGradient id="gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0"/></linearGradient></defs>');
    $('#chart-2').html('<defs><clipPath id="clip" x="0" y="0" width="80" height="40" ><rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/></clipPath><linearGradient id="gradient-1"><stop offset="0" stop-color="#00d5bd" /><stop offset="100" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-2"><stop offset="0" stop-color="#954ce9" /><stop offset="0.3" stop-color="#954ce9" /><stop offset="0.6" stop-color="#24c1ed" /><stop offset="1" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0"/></linearGradient><linearGradient id="gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0"/></linearGradient></defs>');
    drawGrid('#chart-2');
    drawGrid('#chart-1');
    repeat();
    setInterval(repeat, 5000);
});

function repeat() {
    $('#chart-1').html('<defs><clipPath id="clip" x="0" y="0" width="80" height="40" ><rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/></clipPath><linearGradient id="gradient-1"><stop offset="0" stop-color="#00d5bd" /><stop offset="100" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-2"><stop offset="0" stop-color="#954ce9" /><stop offset="0.3" stop-color="#954ce9" /><stop offset="0.6" stop-color="#24c1ed" /><stop offset="1" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0"/></linearGradient><linearGradient id="gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0"/></linearGradient></defs>');
    $('#chart-2').html('<defs><clipPath id="clip" x="0" y="0" width="80" height="40" ><rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/></clipPath><linearGradient id="gradient-1"><stop offset="0" stop-color="#00d5bd" /><stop offset="100" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-2"><stop offset="0" stop-color="#954ce9" /><stop offset="0.3" stop-color="#954ce9" /><stop offset="0.6" stop-color="#24c1ed" /><stop offset="1" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0"/></linearGradient><linearGradient id="gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0"/></linearGradient></defs>');

    drawGrid('#chart-2');
    drawGrid('#chart-1');


    var temps = [];
    var pulses = [];

    $.get("http://strato-dev4.blockapps.net/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53", function (data) {

        for (var index in data) {
            if (data[index].transactionType == "FunctionCall") {
              var x = data[index].codeOrData;
              var pulse = parseInt(x.substr(x.length - 64), 16);
              x = x.substr(0, x.length - 64)
              var temp = parseInt(x.substr(x.length - 64), 16);
              x = x.substr(0, x.length - 64)
              var sensorId = x.substr(x.length - 64);
              temps.push(temp);
              pulses.push(pulse);
            }
        }
        console.log(temps);
        console.log(pulses);


        //    var chart_1_y = [
        //        80, 90, 85, 90, 91, 93, 93, 95, 90, 50, 60, 70, 60, 50, 45, 40, 50, 60
        //    ];
        //
        //      var chart_2_y = [
        //        80, 65, 65, 40, 55, 34, 54, 50, 60, 64, 55, 27, 24, 30
        //    ];

        var chart_1_y = pulses.reverse().slice(0, 15).reverse();
        var chart_2_y = temps.reverse().slice(0, 15).reverse();

        console.log(chart_1_y);
        console.log(chart_2_y);

        drawLineGraph('#chart-1', chart_1_y, '#graph-1-container', 1);
        drawLineGraph('#chart-2', chart_2_y, '#graph-2-container', 2);
    });
}

function point(x, y) {
    x: 0;
    y: 0;
}
/* DRAW GRID */
function drawGrid(graph) {
    var graph = Snap(graph);
    var g = graph.g();
    g.attr('id', 'grid');
    for (i = 0; i <= stepX + 2; i++) {
        var horizontalLine = graph.path(
            "M" + 0 + "," + stepX * i + " " +
            "L" + 77 + "," + stepX * i);
        horizontalLine.attr('class', 'horizontal');
        g.add(horizontalLine);
    };
    for (i = 0; i <= 14; i++) {
        var horizontalLine = graph.path(
            "M" + stepX * i + "," + 38.7 + " " +
            "L" + stepX * i + "," + 0)
        horizontalLine.attr('class', 'vertical');
        g.add(horizontalLine);
    };
}
drawGrid('#chart-2');
drawGrid('#chart-1');

function drawLineGraph(graph, points, container, id) {


    var graph = Snap(graph);


    /*END DRAW GRID*/

    /* PARSE POINTS */
    var myPoints = [];
    var shadowPoints = [];

    function parseData(points) {
        for (i = 0; i < points.length; i++) {
            var p = new point();
            var pv = points[i] / 100 * 40;
            p.x = 83.7 / points.length * i + 1;
            p.y = 40 - pv;
            if (p.x > 78) {
                p.x = 78;
            }
            myPoints.push(p);
        }
    }

    var segments = [];

    function createSegments(p_array) {
        for (i = 0; i < p_array.length; i++) {
            var seg = "L" + p_array[i].x + "," + p_array[i].y;
            if (i === 0) {
                seg = "M" + p_array[i].x + "," + p_array[i].y;
            }
            segments.push(seg);
        }
    }

    function joinLine(segments_array, id) {
        var line = segments_array.join(" ");
        var line = graph.path(line);
        line.attr('id', 'graph-' + id);
        var lineLength = line.getTotalLength();

        line.attr({
            'stroke-dasharray': lineLength,
            'stroke-dashoffset': lineLength
        });
    }

    function calculatePercentage(points, graph) {
        var initValue = points[0];
        var endValue = points[points.length - 1];
        var sum = endValue - initValue;
        var prefix;
        var percentageGain;
        var stepCount = 1300 / sum;

        function findPrefix() {
            if (sum > 0) {
                prefix = "+";
            } else {
                prefix = "";
            }
        }

        var percentagePrefix = "";

        function percentageChange() {
            percentageGain = initValue / endValue * 100;

            if (percentageGain > 100) {
                console.log('over100');
                percentageGain = Math.round(percentageGain * 100 * 10) / 100;
            } else if (percentageGain < 100) {
                console.log('under100');
                percentageGain = Math.round(percentageGain * 10) / 10;
            }
            if (initValue > endValue) {

                percentageGain = endValue / initValue * 100 - 100;
                percentageGain = percentageGain.toFixed(2);

                percentagePrefix = "";
                $(graph).find('.percentage-value').addClass('negative');
            } else {
                percentagePrefix = "+";
            }
            if (endValue > initValue) {
                percentageGain = endValue / initValue * 100;
                percentageGain = Math.round(percentageGain);
            }
        };
        percentageChange();
        findPrefix();

        var percentage = $(graph).find('.percentage-value');
        var totalGain = $(graph).find('.total-gain');
        var hVal = $(graph).find('.h-value');

        function count(graph, sum) {
            var totalGain = $(graph).find('.total-gain');
            var i = 0;
            var time = 1300;
            var intervalTime = Math.abs(time / sum);
            var timerID = 0;
            if (sum > 0) {
                var timerID = setInterval(function () {
                    i++;
                    totalGain.text(" " + percentagePrefix + i);
                    if (i === sum) clearInterval(timerID);
                }, intervalTime);
            } else if (sum < 0) {
                var timerID = setInterval(function () {
                    i--;
                    totalGain.text(" " + percentagePrefix + i);
                    if (i === sum) clearInterval(timerID);
                }, intervalTime);
            }
        }
        count(graph, endValue);

        percentage.text(percentagePrefix + percentageGain + "%");
        totalGain.text("0%");
        setTimeout(function () {
            percentage.addClass('visible');
            hVal.addClass('visible');
        }, 1300);

    }


    function showValues() {
        var val1 = $(graph).find('.h-value');
        var val2 = $(graph).find('.percentage-value');
        val1.addClass('visible');
        val2.addClass('visible');
    }

    function drawPolygon(segments, id) {
        var lastel = segments[segments.length - 1];
        var polySeg = segments.slice();
        polySeg.push([78, 38.4], [1, 38.4]);
        var polyLine = polySeg.join(' ').toString();
        var replacedString = polyLine.replace(/L/g, '').replace(/M/g, "");

        var poly = graph.polygon(replacedString);
        var clip = graph.rect(-80, 0, 80, 40);
        poly.attr({
            'id': 'poly-' + id,
            /*'clipPath':'url(#clip)'*/
            'clipPath': clip
        });
        clip.animate({
            transform: 't80,0'
        }, 1300, mina.linear);
    }

    parseData(points);

    createSegments(myPoints);
    calculatePercentage(points, container);
    joinLine(segments, id);

    drawPolygon(segments, id);


    /*$('#poly-'+id).attr('class','show');*/

    /* function drawPolygon(segments,id){
      var polySeg = segments;
      polySeg.push([80,40],[0,40]);
      var polyLine = segments.join(' ').toString();
      var replacedString = polyLine.replace(/L/g,'').replace(/M/g,"");
      var poly = graph.polygon(replacedString);
      poly.attr('id','poly-'+id)
    }
    drawPolygon(segments,id);*/
}
function drawCircle(container, id, progress, parent) {
    var paper = Snap(container);
    var prog = paper.path("M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50");
    var lineL = prog.getTotalLength();
    var oneUnit = lineL / 100;
    var toOffset = lineL - oneUnit * progress;
    var myID = 'circle-graph-' + id;
    prog.attr({
        'stroke-dashoffset': lineL,
        'stroke-dasharray': lineL,
        'id': myID
    });

    var animTime = 1300/*progress / 100*/

    prog.animate({
        'stroke-dashoffset': toOffset
    }, animTime, mina.easein);

    function countCircle(animtime, parent, progress) {
        var textContainer = $(parent).find('.circle-percentage');
        var i = 0;
        var time = 1300;
        var intervalTime = Math.abs(time / progress);
        var timerID = setInterval(function () {
            i++;
            textContainer.text(i + "%");
            if (i === progress) clearInterval(timerID);
        }, intervalTime);
    }
    countCircle(animTime, parent, progress);
};
