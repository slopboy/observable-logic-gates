
export const LOGIC_GATES = [
  {
    id: 1,
    name: 'NAND',
    displayDetails: {
      displayName: 'NAnd',
      description: 'not A and B',
      colour: 'blue',
      image: '',
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
    logicFunction: (a, b) => (!(a && b)),
  },
  {
    id: 2,
    name: 'AND',
    displayDetails: {
      displayName: 'And',
      description: 'A and B',
      colour: 'purple',
      image: '',
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
    logicFunction: (a, b) => ((a && b)),
  },
  {
    id: 3,
    name: 'NOT',
    displayDetails: {
      displayName: 'Not',
      description: 'not A',
      colour: 'green',
      image: '',
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
  },
];
