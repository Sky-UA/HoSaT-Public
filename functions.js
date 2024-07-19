function getUnitByElement( $unit ) {
    for ( let item of units ) {
        if ( item.$element.is( $unit ) ) {
            console.log( ' = ' + item.name );
            return item;
        }
    }
}

function showAvailableCells( unit ) {
    for ( let cell of cells ) {
        cell.isAvailable = false;
        cell.$element.removeClass( 'available-cell' );
    }

    for ( let cell of cells ) {
        if ( cell.indexes.x <= unit.indexes.x && cell.indexes.y <= unit.indexes.y ) {
            if ( cell.indexes.x + cell.indexes.y >= unit.indexes.x + unit.indexes.y - unit.speed ) {
                cell.isAvailable = true;
                cell.$element.addClass( 'available-cell' );
            }
        }

        if ( cell.indexes.x >= unit.indexes.x && cell.indexes.y >= unit.indexes.y ) {
            if ( cell.indexes.x + cell.indexes.y <= unit.indexes.x + unit.indexes.y + unit.speed ) {
                cell.isAvailable = true;
                cell.$element.addClass( 'available-cell' );
            }
        }

        if ( cell.indexes.x >= unit.indexes.x && cell.indexes.y <= unit.indexes.y ) {
            if ( cell.indexes.x - cell.indexes.y <= unit.indexes.x - unit.indexes.y + unit.speed ) {
                cell.isAvailable = true;
                cell.$element.addClass( 'available-cell' );
            }
        }

        if ( cell.indexes.x <= unit.indexes.x && cell.indexes.y >= unit.indexes.y ) {
            if ( cell.indexes.y - cell.indexes.x <= unit.indexes.y - unit.indexes.x + unit.speed ) {
                cell.isAvailable = true;
                cell.$element.addClass( 'available-cell' );
            }
        }
    }
}

function calculateUnitPath( from, to ) {
    let path = [];

    //

    return path;
}

function moveUnitByPath( unit, path ) {
    //
}