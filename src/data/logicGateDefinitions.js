
export const LOGIC_GATES = [
  {
    id: 1,
    name: 'NAND',
    displayDetails: {
      displayName: 'NAnd',
      description: 'not A and B',
      colour: 'blue',
      image: '',
      displayFunction: '(a, b) => (!(a && b))',
    },
    inputPins: [
      {
        id: 1,
        name: 'A',
        displayName: 'A',
        asciiValue: '97',
      },
      {
        id: 2,
        name: 'B',
        displayName: 'B',
        asciiValue: '98',
      }
    ],
    outputPins: [
      {
        id: 1,
        name: 'out',
        displayName: 'OUT',
      }
    ],
    logicFunction: (a, b) => (!(a && b)),
    truthTable: {
      columns: ['A', 'B', 'Out'],
      values: [
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 1],
        [1, 1, 0],
      ]
    },
  },
  {
    id: 2,
    name: 'AND',
    displayDetails: {
      displayName: 'And',
      description: 'A and B',
      colour: 'purple',
      image: '',
      displayFunction: '(a, b) => (a && b)',
    },
    inputPins: [
      {
        id: 1,
        displayName: 'A',
        asciiValue: '97',
        pin: 'A',
      },
      {
        id: 2,
        displayName: 'B',
        asciiValue: '98',
        pin: 'B',
      }
    ],
    outputPins: [
      {
        id: 1,
        displayName: 'OUT',
        pin: 'out',
      }
    ],
    logicFunction: (a, b) => (a && b),
    truthTable: {
      columns: ['A', 'B', 'Out'],
      values: [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ]
    },
  },
  {
    id: 3,
    name: 'NOT',
    displayDetails: {
      displayName: 'Not',
      description: 'not A',
      colour: 'green',
      image: '',
      displayFunction: '(a) => (!a)',
    },
    inputPins: [
      {
        id: 1,
        displayName: 'A',
        asciiValue: '97',
        pin: 'A',
      },
    ],
    outputPins: [
      {
        id: 1,
        displayName: 'OUT',
        pin: 'out',
      }
    ],
    logicFunction: (a) => (!a),
    truthTable: {
      columns: ['A', 'Out'],
      values: [
        [0, 1],
        [1, 0],
      ]
    },
  },
];
