function setCellElementsSize() {
    let $cell = $( '.cell' );
    $cell.css( 'width', board.cellWidth + 'px' );
    $cell.css( 'height', board.cellHeight + 'px' );
}

function setUnitElementsSize() {
    let $unit = $( '.unit' );
    $unit.css( 'width', board.cellWidth + 'px' );
    $unit.css( 'height', board.cellHeight + 'px' );
}

function setUnitElementsPosition() {
    for ( let unit of units ) {
        let cell = getCellByIndexes( unit.indexes );
        let unitOffset = cell.$element.offset();
        unit.$element.offset({top: unitOffset.top, left: unitOffset.left});
    }
    // let $unit = $('.unit');
}

// function createUnits() {
//     for ( let [index, item] of unitsLibrary.entries() ) {
//         let $unit = $(`<div class="unit" id="unit-${index}">`);
//         let unit = new Unit($unit, item.name);
//         let imagePath = 'url(images/units/' + item.name + '.png)';
//         unit.$element.css('background-image', imagePath);
//         unit.$element.css('width', board.cellWidth + 'px');
//         unit.$element.css('height', board.cellHeight + 'px');
//
//
//         unit.indexes = item.indexes;
//         let cellOffset = $( `#cell-${unit.indexes.x}-${unit.indexes.y}` ).offset();
//         unit.$element.offset( { top: cellOffset.top, left: cellOffset.left } );
//
//         unit.health = item.health;
//         unit.damage = item.damage;
//         unit.speed = item.speed;
//
//         units.push(unit);
//         board.$element.append($unit);
//     }
// }

function initialization() {
    setCellElementsSize();
    setUnitElementsSize();
    setUnitElementsPosition();
    showAvailableCellsForCurrentUnit();
}