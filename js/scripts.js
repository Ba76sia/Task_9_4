function drawTree(levels) {
    var star = '';
    for (var i = 0; i < levels; i++) {
        var space = '';
        star += '* ';
        for (var j = levels; j > i; j--) {
            space += ' ';
        }
        console.log(space + star);
    } 
}

drawTree(10);