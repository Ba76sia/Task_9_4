function drawTree(levels) {
    var star = '';
    for (var i = 0; i < levels; i++) {
        var space = '';
        star += '*';
        console.log(space + star);
        for (var j = levels; j > i; j--);
    } 
}
drawTree(10);