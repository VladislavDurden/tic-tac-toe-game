document.getElementById('start').onclick = function () {

    document.getElementById('game-area').style.display = 'block';
    document.getElementById('start').style.display = 'none';

}


for (var i = 0; i < 9; i++) {

    document.getElementById('game-area').innerHTML += '<div class = "block" id = "id' + i + '"></div>';

}

var move = 0;


document.getElementById('game-area').onclick = function (Event) {

    if (Event.target.className == 'block') {

        if (move % 2 == 0) {
            Event.target.innerHTML = 'X';
        } else {
            Event.target.innerHTML = '0';
        }
        move++;
        checkWinner();
    }

}

//ПРОВЕРКА ПОБЕДИТЕЛЯ
function checkWinner() {

    //    ЯЧЕЙКИ

    var x1 = document.getElementById('id0'),
        x2 = document.getElementById('id1'),
        x3 = document.getElementById('id2'),
        x4 = document.getElementById('id3'),
        x5 = document.getElementById('id4'),
        x6 = document.getElementById('id5'),
        x7 = document.getElementById('id6'),
        x8 = document.getElementById('id7'),
        x9 = document.getElementById('id8'),

        //        ЛИНИИ КРЕСТИКОВ

        line1x = (x1.innerHTML == 'X' && x2.innerHTML == 'X' && x3.innerHTML == 'X'),
        line2x = (x4.innerHTML == 'X' && x5.innerHTML == 'X' && x6.innerHTML == 'X'),
        line3x = (x7.innerHTML == 'X' && x8.innerHTML == 'X' && x9.innerHTML == 'X'),
        row1x = (x1.innerHTML == 'X' && x4.innerHTML == 'X' && x7.innerHTML == 'X'),
        row2x = (x2.innerHTML == 'X' && x5.innerHTML == 'X' && x8.innerHTML == 'X'),
        row3x = (x3.innerHTML == 'X' && x6.innerHTML == 'X' && x9.innerHTML == 'X'),
        d1x = (x1.innerHTML == 'X' && x5.innerHTML == 'X' && x9.innerHTML == 'X'),
        d2x = (x3.innerHTML == 'X' && x5.innerHTML == 'X' && x7.innerHTML == 'X'),

        //        ЛИНИИ НОЛИКОВ

        line10 = (x1.innerHTML == '0' && x2.innerHTML == '0' && x3.innerHTML == '0'),
        line20 = (x4.innerHTML == '0' && x5.innerHTML == '0' && x6.innerHTML == '0'),
        line30 = (x7.innerHTML == '0' && x8.innerHTML == '0' && x9.innerHTML == '0'),
        row10 = (x1.innerHTML == '0' && x4.innerHTML == '0' && x7.innerHTML == '0'),
        row20 = (x2.innerHTML == '0' && x5.innerHTML == '0' && x8.innerHTML == '0'),
        row30 = (x3.innerHTML == '0' && x6.innerHTML == '0' && x9.innerHTML == '0'),
        d10 = (x1.innerHTML == '0' && x5.innerHTML == '0' && x9.innerHTML == '0'),
        d20 = (x3.innerHTML == '0' && x5.innerHTML == '0' && x7.innerHTML == '0');



    //   _________________ ДЛЯ КРЕСТИКОВ


    //    ПО ГОРИЗОНТАЛИ

    if (line1x || line2x || line3x) {

        if (line1x == true) {
            x1.className += " white";
            x2.className += " white";
            x3.className += " white";
        } else if (line2x == true) {
            x4.className += " white";
            x5.className += " white";
            x6.className += " white";
        } else if (line3x == true) {
            x7.className += " white";
            x8.className += " white";
            x9.className += " white";
        }

        setTimeout(function () {
            alert('X-player WIN ! ! !');
            location.reload();
        }, 100);
    }

    //    ПО ВЕРТИКАЛИ
    else if (row1x || row2x || row3x) {

        if (row1x == true) {
            x1.className += " white";
            x4.className += " white";
            x7.className += " white";
        } else if (row2x == true) {
            x2.className += " white";
            x5.className += " white";
            x8.className += " white";
        } else if (row3x == true) {
            x3.className += " white";
            x6.className += " white";
            x9.className += " white";
        }

        setTimeout(function () {
            alert('X-player WIN ! ! !');
            location.reload();
        }, 100);
    }

    //    ПО ДИАГОНАЛИ
    else if (d1x || d2x) {

        if (d1x == true) {
            x1.className += " white";
            x5.className += " white";
            x9.className += " white";
        } else if (d2x == true) {
            x3.className += " white";
            x5.className += " white";
            x7.className += " white";
        }

        setTimeout(function () {
            alert('X-player WIN ! ! !');
            location.reload();
        }, 100);
    };


    //   _________________ДЛЯ НОЛИКОВ


    //    ПО ГОРИЗОНТАЛИ

    if (line10 || line20 || line30) {

        if (line10 == true) {
            x1.className += " white";
            x2.className += " white";
            x3.className += " white";
        } else if (line20 == true) {
            x4.className += " white";
            x5.className += " white";
            x6.className += " white";
        } else if (line30 == true) {
            x7.className += " white";
            x8.className += " white";
            x9.className += " white";
        }

        setTimeout(function () {
            alert('0-player WIN ! ! !');
            location.reload();
        }, 100);
    }


    //    ПО ВЕРТИКАЛИ
    else if (row10 || row20 || row30) {

        if (row10 == true) {
            x1.className += " white";
            x4.className += " white";
            x7.className += " white";
        } else if (row20 == true) {
            x2.className += " white";
            x5.className += " white";
            x8.className += " white";
        } else if (row30 == true) {
            x3.className += " white";
            x6.className += " white";
            x9.className += " white";
        }

        setTimeout(function () {
            alert('0-player WIN ! ! !');
            location.reload();
        }, 100);
    }


    //    ПО ДИАГОНАЛИ
    else if (d10 || d20) {

        if (d10 == true) {
            x1.className += " white";
            x5.className += " white";
            x9.className += " white";
        } else if (d20 == true) {
            x3.className += " white";
            x5.className += " white";
            x7.className += " white";
        }

        setTimeout(function () {
            alert('0-player WIN ! ! !');
            location.reload();
            0
        }, 100);
    };



}
