let board = {
    $element: $( '#board' ),
    rows: 8,
    columns: 8,
    cells: [
        {
            id: 0,
            indexes: { x: 0, y: 0 },
            $element: $( '#000' )
        },
        {
            id: 1,
            indexes: { x: 1, y: 0 },
            $element: $( '#001' )
        },
        {
            id: 2,
            indexes: { x: 2, y: 0 },
            $element: $( '#002' )
        },
        {
            id: 3,
            indexes: { x: 3, y: 0 },
            $element: $( '#003' )
        },
        {
            id: 4,
            indexes: { x: 4, y: 0 },
            $element: $( '#004' )
        },
        {
            id: 5,
            indexes: { x: 5, y: 0 },
            $element: $( '#005' )
        },
        {
            id: 6,
            indexes: { x: 6, y: 0 },
            $element: $( '#006' )
        },
        {
            id: 7,
            indexes: { x: 7, y: 0 },
            $element: $( '#007' )
        },
        {
            id: 8,
            indexes: { x: 0, y: 1 },
            $element: $( '#008' )
        },
        {
            id: 9,
            indexes: { x: 1, y: 1 },
            $element: $( '#009' )
        },
        {
            id: 10,
            indexes: { x: 2, y: 1 },
            $element: $( '#010' )
        },
        {
            id: 11,
            indexes: { x: 3, y: 1 },
            $element: $( '#011' )
        },
        {
            id: 12,
            indexes: { x: 4, y: 1 },
            $element: $( '#012' )
        },
        {
            id: 13,
            indexes: { x: 5, y: 1 },
            $element: $( '#013' )
        },
        {
            id: 14,
            indexes: { x: 6, y: 1 },
            $element: $( '#014' )
        },
        {
            id: 15,
            indexes: { x: 7, y: 1 },
            $element: $( '#015' )
        },
        {
            id: 16,
            indexes: { x: 0, y: 2 },
            $element: $( '#016' )
        },
        {
            id: 17,
            indexes: { x: 1, y: 2 },
            $element: $( '#017' )
        },
        {
            id: 18,
            indexes: { x: 2, y: 2 },
            $element: $( '#018' )
        },
        {
            id: 19,
            indexes: { x: 3, y: 2 },
            $element: $( '#019' )
        },
        {
            id: 20,
            indexes: { x: 4, y: 2 },
            $element: $( '#020' )
        },
        {
            id: 21,
            indexes: { x: 5, y: 2 },
            $element: $( '#021' )
        },
        {
            id: 22,
            indexes: { x: 6, y: 2 },
            $element: $( '#022' )
        },
        {
            id: 23,
            indexes: { x: 7, y: 2 },
            $element: $( '#023' )
        },
        {
            id: 24,
            indexes: { x: 0, y: 3 },
            $element: $( '#024' )
        },
        {
            id: 25,
            indexes: { x: 1, y: 3 },
            $element: $( '#025' )
        },
        {
            id: 26,
            indexes: { x: 2, y: 3 },
            $element: $( '#026' )
        },
        {
            id: 27,
            indexes: { x: 3, y: 3 },
            $element: $( '#027' )
        },
        {
            id: 28,
            indexes: { x: 4, y: 3 },
            $element: $( '#028' )
        },
        {
            id: 29,
            indexes: { x: 5, y: 3 },
            $element: $( '#029' )
        },
        {
            id: 30,
            indexes: { x: 6, y: 3 },
            $element: $( '#030' )
        },
        {
            id: 31,
            indexes: { x: 7, y: 3 },
            $element: $( '#031' )
        },
        {
            id: 32,
            indexes: { x: 0, y: 4 },
            $element: $( '#032' )
        },
        {
            id: 33,
            indexes: { x: 1, y: 4 },
            $element: $( '#033' )
        },
        {
            id: 34,
            indexes: { x: 2, y: 4 },
            $element: $( '#034' )
        },
        {
            id: 35,
            indexes: { x: 3, y: 4 },
            $element: $( '#035' )
        },
        {
            id: 36,
            indexes: { x: 4, y: 4 },
            $element: $( '#036' )
        },
        {
            id: 37,
            indexes: { x: 5, y: 4 },
            $element: $( '#037' )
        },
        {
            id: 38,
            indexes: { x: 6, y: 4 },
            $element: $( '#038' )
        },
        {
            id: 39,
            indexes: { x: 7, y: 4 },
            $element: $( '#039' )
        },
        {
            id: 40,
            indexes: { x: 0, y: 5 },
            $element: $( '#040' )
        },
        {
            id: 41,
            indexes: { x: 1, y: 5 },
            $element: $( '#041' )
        },
        {
            id: 42,
            indexes: { x: 2, y: 5 },
            $element: $( '#042' )
        },
        {
            id: 43,
            indexes: { x: 3, y: 5 },
            $element: $( '#043' )
        },
        {
            id: 44,
            indexes: { x: 4, y: 5 },
            $element: $( '#044' )
        },
        {
            id: 45,
            indexes: { x: 5, y: 5 },
            $element: $( '#045' )
        },
        {
            id: 46,
            indexes: { x: 6, y: 5 },
            $element: $( '#046' )
        },
        {
            id: 47,
            indexes: { x: 7, y: 5 },
            $element: $( '#047' )
        },
        {
            id: 48,
            indexes: { x: 0, y: 6 },
            $element: $( '#048' )
        },
        {
            id: 49,
            indexes: { x: 1, y: 6 },
            $element: $( '#049' )
        },
        {
            id: 50,
            indexes: { x: 2, y: 6 },
            $element: $( '#050' )
        },
        {
            id: 51,
            indexes: { x: 3, y: 6 },
            $element: $( '#051' )
        },
        {
            id: 52,
            indexes: { x: 4, y: 6 },
            $element: $( '#052' )
        },
        {
            id: 53,
            indexes: { x: 5, y: 6 },
            $element: $( '#053' )
        },
        {
            id: 54,
            indexes: { x: 6, y: 6 },
            $element: $( '#054' )
        },
        {
            id: 55,
            indexes: { x: 7, y: 6 },
            $element: $( '#055' )
        },
        {
            id: 56,
            indexes: { x: 0, y: 7 },
            $element: $( '#056' )
        },
        {
            id: 57,
            indexes: { x: 1, y: 7 },
            $element: $( '#057' )
        },
        {
            id: 58,
            indexes: { x: 2, y: 7 },
            $element: $( '#058' )
        },
        {
            id: 59,
            indexes: { x: 3, y: 7 },
            $element: $( '#059' )
        },
        {
            id: 60,
            indexes: { x: 4, y: 7 },
            $element: $( '#060' )
        },
        {
            id: 61,
            indexes: { x: 5, y: 7 },
            $element: $( '#061' )
        },
        {
            id: 62,
            indexes: { x: 6, y: 7 },
            $element: $( '#062' )
        },
        {
            id: 63,
            indexes: { x: 7, y: 7 },
            $element: $( '#063' )
        }
    ],
    cellWidth: $( window ).height() / 8,
    cellHeight: $( window ).height() / 8 * 4 / 3
};

let units = [
    {
        // id: 0,
        name: 'king1',
        team: 'white',
        health: 10,
        damage: 5,
        speed: 2,
        initiative: 1,
        indexes: { x: 2, y: 2 },
        isCurrent: true,
        $element: $( '#king1' )
    },
    {
        // id: 1,
        name: 'king2',
        team: 'white',
        health: 10,
        damage: 5,
        speed: 2,
        initiative: 2,
        isCurrent: false,
        indexes: { x: 5, y: 5 },
        $element: $( '#king2' )
    },
    {
        // id: 2,
        name: 'king3',
        team: 'white',
        health: 10,
        damage: 5,
        speed: 3,
        initiative: 1,
        isCurrent: false,
        indexes: { x: 4, y: 1 },
        $element: $( '#king3' )
    }
];