function getCellByElement( $cell ) {
    for ( let cell of board.cells ) {
        if ( cell.$element.is( $cell ) ) {
            return cell;
        }
    }
}

function getCellByIndexes( indexes ) {
    for ( let cell of board.cells ) {
        if ( cell.indexes.x === indexes.x && cell.indexes.y === indexes.y ) {
            return cell;
        }
    }
}

function getUnitByElement( $unit ) {
    for ( let unit of units ) {
        if ( unit.$element.is( $unit ) ) {
            return unit;
        }
    }
}

function getCurrentUnit() {
    for ( let unit of units ) {
        if ( unit.isCurrent ) {
            return unit;
        }
    }
}

function showAvailableCellsForCurrentUnit() {
    let unit = getCurrentUnit();

    for ( let cell of board.cells ) {
        cell.isAvailable = false;
        cell.$element.removeClass( 'available-cell' );
    }

    for ( let cell of board.cells ) {
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

// function showAvailableCellsForCurrentUnit() {
//     let currentUnit = getCurrentUnit();
//
//     for ( let cell of cells ) {
//         cell.isAvailable = false;
//         cell.$element.removeClass( 'available-cell' );
//     }
// }

// function showAvailableCells( unit ) {
//     for ( let cell of cells ) {
//         cell.isAvailable = false;
//         cell.$element.removeClass( 'available-cell' );
//     }
//
//     for ( let cell of cells ) {
//         if ( cell.indexes.x <= unit.indexes.x && cell.indexes.y <= unit.indexes.y ) {
//             if ( cell.indexes.x + cell.indexes.y >= unit.indexes.x + unit.indexes.y - unit.speed ) {
//                 cell.isAvailable = true;
//                 cell.$element.addClass( 'available-cell' );
//             }
//         }
//
//         if ( cell.indexes.x >= unit.indexes.x && cell.indexes.y >= unit.indexes.y ) {
//             if ( cell.indexes.x + cell.indexes.y <= unit.indexes.x + unit.indexes.y + unit.speed ) {
//                 cell.isAvailable = true;
//                 cell.$element.addClass( 'available-cell' );
//             }
//         }
//
//         if ( cell.indexes.x >= unit.indexes.x && cell.indexes.y <= unit.indexes.y ) {
//             if ( cell.indexes.x - cell.indexes.y <= unit.indexes.x - unit.indexes.y + unit.speed ) {
//                 cell.isAvailable = true;
//                 cell.$element.addClass( 'available-cell' );
//             }
//         }
//
//         if ( cell.indexes.x <= unit.indexes.x && cell.indexes.y >= unit.indexes.y ) {
//             if ( cell.indexes.y - cell.indexes.x <= unit.indexes.y - unit.indexes.x + unit.speed ) {
//                 cell.isAvailable = true;
//                 cell.$element.addClass( 'available-cell' );
//             }
//         }
//     }
// }

function calculateUnitPath( from, to ) {
    let path = [];

    //

    return path;
}

function moveUnitByPath( unit, path ) {
    //
}