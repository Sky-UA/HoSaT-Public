function buildPath( from, to ) {
    let resultPath = [];
    let preferHorizontalMovement = Math.abs( from.x - to.x ) > Math.abs( from.y - to.y );
    let distance = gMap[ from.y ][ from.x ];
    let current = from;
    let currentDistance = distance;

    while ( current.x != to.x || current.y != to.y ) {
        let stopSearch = false;
        let bestCandidate = null;

        for ( let y = current.y - 1; y <= current.y + 1; y++ ) {
            for ( let x = current.x - 1; x <= current.x + 1; x++ ) {
                if ( y < 0 || y > BOARD_SIZE - 1 || x < 0 || x > BOARD_SIZE - 1 ) continue;

                if ( gMap[ y ][ x ] == currentDistance - 1 ) {
                    let isHorizontalMovement = Math.abs( x - current.x ) != 0 && Math.abs( y - current.y ) == 0;
                    bestCandidate = { x, y };
                    if ( preferHorizontalMovement == isHorizontalMovement ) {
                        stopSearch = true;
                        break;
                    }
                }
            }

            if ( stopSearch ) break;
        }

        current = bestCandidate;
        resultPath.push( bestCandidate );
        currentDistance--;
        if ( currentDistance < 0 ) break;
    }

    resultPath.reverse();
    resultPath.push( from );
    return resultPath;
}

function moveByPath( path, step ) {
    if ( step == path.length ) {
        selectionBlocked = false;
        markPossibleTargets();
        return;
    }

    let nextCellIndexes = path[ step ];
    let $cell = $( `#cell-${nextCellIndexes.x}-${nextCellIndexes.y}` );

    if ( step == path.length - 1 ) {
        gCurrentHero.$element.removeClass( 'chosen-hero' );
        gCurrentHero.indexes = nextCellIndexes;
    }

    let cellOffset = $cell.offset();

    gCurrentHero.$element.animate( {
        left: cellOffset.left,
        top: cellOffset.top
    }, {
        duration: 500,
        easing: "linear",
        done: function() {
            gCurrentHero.indexes = getCellIndexes( $cell );
            drawPathMap();
            if ( step < path.length - 1 ) gCurrentHero.currentAP--;
            describeHeroParameters();
            $cell.removeClass( 'path-cell' );
            moveByPath( path, step + 1 );
        }
    } );
}

function onCellClick() {
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