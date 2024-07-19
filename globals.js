let board = {};
let cells = [];
let units = [];

board = {
    $element: $( '#board' ),
    rows: 16,
    columns: 8,
    cellWidth: undefined,
    cellHeight: undefined
};

class Cell {
    constructor(
        $element,
        indexes
    ) {
        this.$element = $element;
        this.indexes = indexes;
        this.isAvailable = false;
    }
}

class Unit {
    constructor(
        $element,
        name
    ) {
        this.$element = $element;
        this.name = name;
        this.indexes = { x: undefined, y: undefined }; //TODO constructor??
    }
}