function onUnitClick() {
    let $unit = $( this );
    let unit = getUnitByElement( $unit );
    // let unitSpeed = unit.speed;
    // let unitIndexes = unit.indexes;

    showAvailableCells( unit );


}

function onCellClick() {
    //
}

/////////////////////////////////////////////////////////////

function onHeroClickOLD() {
    $hero = $( this );
    let hero = getHero( $hero );
}

function onCellClickOLD() {
    //
}

function onCellClickOLD() {
    if ( selectionBlocked ) return;
    $( '.cell' ).removeClass( 'chosen-cell' );
    $( '.cell' ).removeClass( 'path-cell' );
    let $cell = $( this );
    cell = getCell( $cell );

    if ( cell.atTheChosenHeroMoveDistance ) {
        cell.chosen = true;
        let path = buildPath( getCellIndexes( $cell ), gCurrentHero.indexes );


        $( '.cell' ).each( function() {
            let $cell = $( this );
            let cellIndexes = getCellIndexes( $cell );
            for ( let item of path ) {
                if ( cellIndexes.x == item.x && cellIndexes.y == item.y ) {
                    $cell.addClass( 'path-cell' );
                }
            }
        });

        $cell.removeClass( 'path-cell' );
        $cell.addClass( 'chosen-cell' );

        if ( cell.chosen == cell.lastChosen ) {
            selectionBlocked = true;
            $( '.cell' ).removeClass( 'available-cell' );
            let step = 0;
            moveByPath( path, step );
            drawPathMap();
        }
    }

    cell.lastChosen = true;
    cell.chosen = false;
}