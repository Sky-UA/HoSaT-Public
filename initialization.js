function initBoard() {
    board.cellWidth = $( window ).height() / 8;
    board.cellHeight = board.cellWidth * 4/3;
}

function createCells() {
    for ( let row = 0; row < board.rows; row++ ) {
        board.$element.append( $( `<div class="row" id="row-${row}">` ) );
    }

    for ( let row = 0; row < board.rows; row++ ) {
        for ( let column = 0; column < board.columns; column++ ) {
            let $cell = $( `<div class="cell" id="cell-${column}-${row}">` );
            $( '#row-' + row ).append( $cell );
            $cell.css( 'width', board.cellWidth + 'px' );
            $cell.css( 'height', board.cellHeight + 'px' );
            // $cell.text( `${row}-${column}` );
            let indexes = { x: column, y: row };
            cells.push( new Cell( $cell, indexes ) );
        }
    }
}

function createUnits() {
    for ( let [index, item] of unitsLibrary.entries() ) {
        let $unit = $(`<div class="unit" id="unit-${index}">`);
        let unit = new Unit($unit, item.name);
        let imagePath = 'url(images/units/' + item.imageFileName + '.png)';
        unit.$element.css('background-image', imagePath);
        unit.$element.css('width', board.cellWidth + 'px');
        unit.$element.css('height', board.cellHeight + 'px');


        unit.indexes = item.indexes;
        let cellOffset = $( `#cell-${unit.indexes.x}-${unit.indexes.y}` ).offset();
        unit.$element.offset( { top: cellOffset.top, left: cellOffset.left } );

        unit.health = item.health;
        unit.damage = item.damage;
        unit.speed = item.speed;

        units.push(unit);
        board.$element.append($unit);
    }
}

function initialization() {
    initBoard();
    createCells();
    createUnits();
}