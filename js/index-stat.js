var chart_h = 40;
var chart_w = 80;
var stepX = 77 / 14;

$(function () {
    $('#chart-1').html('<defs><clipPath id="clip" x="0" y="0" width="80" height="40" ><rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/></clipPath><linearGradient id="gradient-1"><stop offset="0" stop-color="#00d5bd" /><stop offset="100" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-2"><stop offset="0" stop-color="#954ce9" /><stop offset="0.3" stop-color="#954ce9" /><stop offset="0.6" stop-color="#24c1ed" /><stop offset="1" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0"/></linearGradient><linearGradient id="gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0"/></linearGradient></defs>');
    $('#chart-2').html('<defs><clipPath id="clip" x="0" y="0" width="80" height="40" ><rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/></clipPath><linearGradient id="gradient-1"><stop offset="0" stop-color="#00d5bd" /><stop offset="100" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-2"><stop offset="0" stop-color="#954ce9" /><stop offset="0.3" stop-color="#954ce9" /><stop offset="0.6" stop-color="#24c1ed" /><stop offset="1" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0"/></linearGradient><linearGradient id="gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0"/></linearGradient></defs>');
    drawGrid('#chart-2');
    drawGrid('#chart-1');
    repeat();
    stop = setInterval(repeat, 5000);
});

function repeat() {
    $('#chart-1').html('<defs><clipPath id="clip" x="0" y="0" width="80" height="40" ><rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/></clipPath><linearGradient id="gradient-1"><stop offset="0" stop-color="#00d5bd" /><stop offset="100" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-2"><stop offset="0" stop-color="#954ce9" /><stop offset="0.3" stop-color="#954ce9" /><stop offset="0.6" stop-color="#24c1ed" /><stop offset="1" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0"/></linearGradient><linearGradient id="gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0"/></linearGradient></defs>');
    $('#chart-2').html('<defs><clipPath id="clip" x="0" y="0" width="80" height="40" ><rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/></clipPath><linearGradient id="gradient-1"><stop offset="0" stop-color="#00d5bd" /><stop offset="100" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-2"><stop offset="0" stop-color="#954ce9" /><stop offset="0.3" stop-color="#954ce9" /><stop offset="0.6" stop-color="#24c1ed" /><stop offset="1" stop-color="#24c1ed" /></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(0, 213, 189, 1)" stop-opacity="0"/></linearGradient><linearGradient id="gradient-4" x1="0%" y1="0%" x2="0%" y2="100%">><stop offset="0" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.07"/><stop offset="0.5" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0.13"/><stop offset="1" stop-color="rgba(149, 76, 233, 1)" stop-opacity="0"/></linearGradient></defs>');

    drawGrid('#chart-2');
    drawGrid('#chart-1');


    var temps = [];
    var pulses = [];
    var history = [];
    codes = [];

    $.get("http://strato-dev4.blockapps.net/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53", function (data) {
//	data = JSON.parse('[{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"f76a432205e133c2d40a1d82216354d243efe5f8c0c4b30093af9971f604a534","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000230000000000000000000000000000000000000000000000000000000000000050","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80729,"r":"c988026e79de69d9633ed905b88b8dec7551bd1e9048b85a65565119d1089cf2","s":"218ae0b1bb30d761fe4c8edeefd360aa6d9d54143b9df019bf6f172f3cd3a1ac","timestamp":"2017-01-05 08:09:32.849137 UTC","v":"1b","nonce":0},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"b3e081fd893980b99c697c4256c51d2b68b094f6e9417cce6f9e89e266b1e733","gasLimit":3141592,"codeOrData":"43b0e8df00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000004f","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"500000000000000000000","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80730,"r":"448f954ca04493fe504989869e3773aaa3b7d24c00867ff21a01efe4e86ecccd","s":"d96d2a7e39f7a97b328f907c695b83f32ef0e2451b323a3d008a464a423e5459","timestamp":"2017-01-05 08:09:55.740626 UTC","v":"1c","nonce":1},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"aa6c936241174c856613f263ae62d950d383487d42fa1d233b6deec6bcb0cf6c","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000230000000000000000000000000000000000000000000000000000000000000046","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80855,"r":"89a1e41750cde076d171615027fc913d694932213055df89324df25b0c27d3b","s":"d36e6aaa69bde9f7c27d4b87847cb73693ab484f79d29a2dfad04fa982ec5f0c","timestamp":"2017-01-06 17:50:07.139385 UTC","v":"1c","nonce":2},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"905d5d3703b2d10ff62cd838bd3193a98764a88e18226128de6e7cc66f312a14","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000044","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80856,"r":"215084d434bb88b6ce06e5fac15ff4d8e3ddd9e0a790218d0aee813aa55ae513","s":"635206153886afda30c641325b395fed64175b23e0c64333e5f7224abb6e5998","timestamp":"2017-01-06 17:51:21.76061 UTC","v":"1b","nonce":3},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"b6b10d1dd85af6902eca1ac40d671c20e3804a19a820e6d00a0229671f177ce9","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000000000000000000046","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80857,"r":"3fb5de471ee0c70045c7485475247170759a0f87deaeaa30fc8e27c1a07e45eb","s":"c0bf73034ab7d22b37d57c37fbb162b7589d392b5c6f8f9d00c5ea7b1ad432a7","timestamp":"2017-01-06 17:51:42.348073 UTC","v":"1b","nonce":4},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"4a60423b6c78816ff41558b63cf5ab3cac5fa25d5128ae1985d9813a9ff13bf2","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000000000000000000045","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80858,"r":"b2cec69b1b211225b03ca1a082d45d95c7c4fa82ca3223078aad90fb38b1379b","s":"93964a24296b5e425f9d2f1410c8d2b79899b4daf91626c9af43d6f790c8e643","timestamp":"2017-01-06 17:52:03.204544 UTC","v":"1c","nonce":5},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"cfc704ed4ad0e9714446911678daa3904269c5fdcb14f179eb32e87327417e46","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000000000000000000048","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80859,"r":"c8b1d0a94900975376e356d3e5fcebf922e8062b559e0767a7ad7eefadcdba47","s":"f929ae9df1acb07c5d050db7099467e0774d7ea7787c991abe7fb4533d71eb0a","timestamp":"2017-01-06 17:52:18.853633 UTC","v":"1c","nonce":6},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"f739952674daf2d48b17387f769cc91a6b89b125394bf047ed957722ffbf8f94","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000000000000000000046","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80860,"r":"b7504c3adc993e6da2ae1d5e079be86bb9ac4f73b35b54725ece58b2c49e28ab","s":"929fb0f5fb0d4764b87a7a2335bea95d32f0936b858c004b8d3291278b6be7a8","timestamp":"2017-01-06 17:53:19.381533 UTC","v":"1c","nonce":7},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"99f0064fa5a1bd83bb422b066bb4b09d68d62371615f056f5a6ca24561a80f13","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000000000000000000042","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80861,"r":"c9a8d530c1a65859a714e83afaf866d7aefa497bb1c643547787c4bdb50ac6d","s":"8b260ae533da03451da58cfd23e29114b1298de3be3bc83a4a0f0bd7b80f7c9e","timestamp":"2017-01-06 17:53:40.800906 UTC","v":"1c","nonce":8},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"c3693d75e1005f64697720d4d2726bf087f4c75ad5d14869f7c6922101505ed3","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000046","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80862,"r":"fe7436dacf8298a543f7c7da8682b2d648e03d10e370331207ea78cafc3caaf","s":"80892c39eeef1b4ce758f873fa6208b3f126c295c7e77d960d0cfb8a6e827b76","timestamp":"2017-01-06 17:53:58.590952 UTC","v":"1b","nonce":9},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"110ac2be4e2dc76c2c7d27d195983d496752baf42c849f242f1bedadf73a0ea8","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000046","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80863,"r":"df82b4d514553197360ed71aa185e1d3e57e94861841ded5e0e2f7bcdb2d2bf1","s":"36d4fe60a7872ff88ac44bd2b20cf50d3ed7c5a9c28f50991b57fc11dc68af1c","timestamp":"2017-01-06 17:55:48.536907 UTC","v":"1b","nonce":10},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"30c02bffb4545b5bdddc7dbc119b492e2e5fa72cbcda37bd3f1c031c0ee3e499","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000044","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80864,"r":"356138087cbe958c59f6e7a4d06885082235967cac82689200e35055a6e449d9","s":"7e9bbe8ff770e5f5c34458f633e5bddd80355c204d1e3362c48e69795016cf75","timestamp":"2017-01-06 17:56:05.240109 UTC","v":"1b","nonce":11},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"2da669533f4628d9b4dc6b5b2c9877f164ced522edc9f6b2ed6b89fd3756af0c","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000044","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80865,"r":"6a322d52bd9aebde37b514ffdcaea70138d301baa1ba916ad5b649fe1c2001c0","s":"5debe514bbf29d64ce919b71bdc45ef8415de1e7ea61002b197ed92dc4f969b8","timestamp":"2017-01-06 17:56:19.791881 UTC","v":"1c","nonce":12},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"98cf9aa3a5e3a664152c8ea210be89adeabe455d8331e9aac8b831e27e0fae3a","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000044","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80866,"r":"ee2abfa592371ff34b8e08cf6b4f6ed445652dfbf023111e3489007701a29b91","s":"9f39bc31bbd8ae5ac64544df31a239bfd1002d090257e628dc2592654c8da065","timestamp":"2017-01-06 17:56:22.29449 UTC","v":"1b","nonce":13},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"d16ac3846cf60b41b6db11b3a0bb5545d335a0532a6e8598becd8b82cab40158","gasLimit":3141592,"codeOrData":"43b0e8df0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000003c","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80867,"r":"3b5723d143ea11a41255cbf7c912f7d7659b0d72cb0686cf3b7e85f69b2ca967","s":"d4b293624da7de5fa0cc27b8732383ab8aab04cb62fd9d6c588ada4c2729deb3","timestamp":"2017-01-06 17:56:35.717652 UTC","v":"1b","nonce":14},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"bd3d4c6887dd85575a1b62129689b9d35a2edbbd320d757394698e5a8c819557","gasLimit":3141592,"codeOrData":"43b0e8df0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000003c","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80868,"r":"e16fe446e60db8780ef43eed02227084beef6eb76c352978fe8aca02f89a959b","s":"4573f863c1ddd6e03e778b138fc593b87b0eb3b2cc14087ba0559f94d0c694f2","timestamp":"2017-01-06 17:56:38.049297 UTC","v":"1c","nonce":15},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"b5251eda58e27c8f576cdad0e5ac26c997d4596d0b70494364467e24962f555c","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000210000000000000000000000000000000000000000000000000000000000000040","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80869,"r":"258b9fb820f6a16861406b08b511beb5aecbc203fa54cf328b478743f8f8b438","s":"de005c881e46b861a862c64519bf70af431f84b695bbebae7a6b238313af7be","timestamp":"2017-01-06 17:56:47.300882 UTC","v":"1c","nonce":16},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"77f585f3a7c46b8f569ef73a3621e0320d1415662abff22c68fbf6e1b12c1797","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000220000000000000000000000000000000000000000000000000000000000000043","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80870,"r":"a0e2101c6baca5a705c0b459dd3372aad71eecdbb3511de88cd79c4a57bfc493","s":"c7c7e58f6f67e1bed8ca0d9efef605196120c166c04b96ba518f77652abe83c0","timestamp":"2017-01-06 17:56:56.088038 UTC","v":"1b","nonce":17},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"04dacbfc316e3da353f518b5aa0c668b511f3a462566e996579a8c21ab47146c","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000230000000000000000000000000000000000000000000000000000000000000044","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80871,"r":"cbdb753f8fd2e6f38fb6f91caa6d4155559ceabd33a3381bf464eb844688db38","s":"944d6841a4be92517ffa34a31a8a90b0b8b0fa0dbe67643482140ee91c09886","timestamp":"2017-01-06 17:57:03.119047 UTC","v":"1c","nonce":18},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"771828c98cddfc7a42b9f1ff69aeb8d9bccfe41df3deb27a5056da82c29dbd04","gasLimit":3141592,"codeOrData":"43b0e8df0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000020","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80878,"r":"fe2da4ecffafd50c81585e96f58d57d8fa6214441fef1d1e7337fa0e4c190b86","s":"2e2e62657e4ee9ae851c6a387f18c40b3ea45bf08706f0802c6b1882788ffb7","timestamp":"2017-01-06 18:32:34.077128 UTC","v":"1c","nonce":19},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"7e88c3ac5d8d381f3e153b7991c16a0315d2faf5cdb43405ef480aae1ebe7007","gasLimit":3141592,"codeOrData":"43b0e8df0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000001d000000000000000000000000000000000000000000000000000000000000001e","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80879,"r":"24c42616b7eb47572c9d383ad788ddfd6d2cc34282c3af4c74ffa15782410a50","s":"193a1c414fe3b07d2781993c54b19f8b92f6049570a8dd4e9ac1151d2aec7260","timestamp":"2017-01-06 18:42:23.82464 UTC","v":"1c","nonce":20},{"transactionType":"FunctionCall","next":"/eth/v1.2/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881","hash":"793a0eb90e52bbb491fba660a1f2a5ba846d9e355da4f900f922c464f4118095","gasLimit":3141592,"codeOrData":"43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000350000000000000000000000000000000000000000000000000000000000000049","gasPrice":1,"to":"8538f435375c28820881d03d71e56160000ff55e","value":"0","from":"83e57e66164169b097c05d5c9ff43e81cc803c53","fromBlock":"False","blockNumber":80880,"r":"51d3021a01c3a7cdaf5006c270401a710b2397a3f07cdc592e244be7310f8357","s":"b285c93b8632e9c30a41cf192bfbf362dad74880c8bacd2696c9fa82e1b98c89","timestamp":"2017-01-06 18:43:02.981778 UTC","v":"1c","nonce":21}]');
//	data.push({
//    "transactionType": "FunctionCall",
//    "next": "\/eth\/v1.2\/transaction?from=83e57e66164169b097c05d5c9ff43e81cc803c53&index=80881",
//    "hash": "f76a432205e133c2d40a1d82216355d243efe5f8c0c4b30093af9971f604a534",
//    "gasLimit": 3141592,
//    "codeOrData": "43b0e8df000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000",
//    "gasPrice": 1,
//    "to": "8538f435375c28820881d03d71e56160000ff55e",
//    "value": "0",
//    "from": "83e57e66164169b097c05d5c9ff43e81cc803c53",
//    "fromBlock": "False",
//    "blockNumber": 80929,
//    "r": "c988026e79de69d9633ed905b88b8dec7551bd1e9048b85a65565119d1089cf2",
//    "s": "218ae0b1bb30d761fe4c8edeefd360aa6d9d54143b9df019bf6f172f3cd3a1ac",
//    "timestamp": "2017-01-05 20:21:11.126543 UTC",
//    "v": "1b",
//    "nonce": 22
//  });
        for (var index in data) {
            if (data[index].transactionType == "FunctionCall") {
              var x = data[index].codeOrData;
              var pulse = parseInt(x.substr(x.length - 64), 16);
              x = x.substr(0, x.length - 64)
              var temp = parseInt(x.substr(x.length - 64), 16);
              x = x.substr(0, x.length - 64)
              var sensorId = parseInt(x.substr(x.length - 64), 16);
              var txhash = data[index].hash;
              var timest = data[index].timestamp;
              temps.push(temp);
              pulses.push(pulse);
              history.push({
                sensorId: sensorId,
                temperature: temp,
                heartRate: pulse,
              });
              codes.push({
                str: JSON.stringify(history[history.length-1]),
                txhash: txhash,
                txtime: timest
              });
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
      

      
//        $('.ticker').html("");
        for (var ind in codes) {
          if (!$("#" + codes[ind].txhash).length) {
            $('.ticker').prepend('<a target="_blank" href="http://strato-dev4.blockapps.net:9000/transaction/' + codes[ind].txhash + '"><div class="tickerwrapper" id="' + codes[ind].txhash + '" style="opacity: 0;"><div class="timestamp">' + codes[ind].txtime.split('.')[0] + '</div><div class="flright"><div class="language">' + codes[ind].str + '</div><div class="txhash">' + codes[ind].txhash + '</div></div></div></a>');
            $("#" + codes[ind].txhash).animate({opacity: (1 - (((codes.length - 1) - ind) * 0.24))}, 500);
          }
        }
      
        //isDead = (chart_1_y[0] < 30) && (chart_2_y[0] < 30);
        isDead = true;

	
        dodead = function(){
	if (isDead) {
         if (!$("#transferred").length) {
          $('.health-status').text('Deceased');
          $('.death-wrap').css("color", "red");
          $('.usertext').css('border-right', 'solid red');
          $('.ticker').prepend('<a target="_blank" href="#"><div class="tickerwrapper noopac" style="background: rgb(32, 73, 20);" id="transferred"><div class="timestamp">' + "DECEASED" + '</div><div class="flright"><div class="language">' + 'Funds Transferred Succesfully' + '</div><div class="txhash">' + "#8971789A878967876"+ '</div></div></div></a>');
         $("#transferred").animate({opacity: 1}, 500);

         }
        }
	};
	//dodead();

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
//                    totalGain.text(" " + percentagePrefix + i);
                    totalGain.text("  " + i);
                    if (i === sum) clearInterval(timerID);
                }, intervalTime);
            } else if (sum < 0) {
                var timerID = setInterval(function () {
                    i--;
                    totalGain.text("  " + i);
//                    totalGain.text(" " + percentagePrefix + i);
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
