const maze = [
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 4 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: true, left: true, num: 9 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: true, right: false, bottom: true, left: true, num: 13 },
      { top: false, right: false, bottom: true, left: true, num: 14 }
    ],
    [
      { top: true, right: false, bottom: true, left: false, num: 15 },
      { top: true, right: false, bottom: true, left: false, num: 16 },
      { top: true, right: true, bottom: true, left: false, num: 16 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 22 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 4 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: true, left: true, num: 9 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: true, right: false, bottom: true, left: true, num: 13 },
      { top: false, right: false, bottom: true, left: true, num: 14 }
    ],
    [
      { top: true, right: false, bottom: true, left: false, num: 15 },
      { top: false, right: false, bottom: true, left: false, num: 15 },
      { top: true, right: true, bottom: true, left: false, num: 15 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 22 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 4 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: true, left: true, num: 9 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: true, right: false, bottom: true, left: true, num: 13 },
      { top: false, right: false, bottom: true, left: true, num: 14 }
    ],
    [
      { top: true, right: false, bottom: true, left: false, num: 15 },
      { top: false, right: false, bottom: true, left: false, num: 15 },
      { top: true, right: true, bottom: true, left: false, num: 15 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: true, left: true, num: 9 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: true, right: false, bottom: true, left: true, num: 13 },
      { top: false, right: false, bottom: true, left: true, num: 14 }
    ],
    [
      { top: true, right: false, bottom: true, left: false, num: 15 },
      { top: false, right: false, bottom: true, left: false, num: 15 },
      { top: true, right: true, bottom: true, left: false, num: 15 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: true, right: false, bottom: true, left: true, num: 13 },
      { top: false, right: false, bottom: true, left: true, num: 14 }
    ],
    [
      { top: true, right: false, bottom: true, left: false, num: 15 },
      { top: false, right: false, bottom: true, left: false, num: 15 },
      { top: true, right: true, bottom: true, left: false, num: 15 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: true, right: false, bottom: true, left: true, num: 13 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: true, right: false, bottom: true, left: false, num: 15 },
      { top: false, right: false, bottom: true, left: false, num: 15 },
      { top: true, right: true, bottom: true, left: false, num: 15 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 21 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: true, right: false, bottom: true, left: true, num: 13 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: true, right: false, bottom: true, left: false, num: 15 },
      { top: false, right: false, bottom: true, left: false, num: 15 },
      { top: true, right: true, bottom: true, left: false, num: 15 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: true, right: false, bottom: true, left: false, num: 15 },
      { top: false, right: false, bottom: true, left: false, num: 15 },
      { top: true, right: true, bottom: true, left: false, num: 15 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 11 },
      { top: false, right: false, bottom: true, left: false, num: 11 },
      { top: true, right: true, bottom: true, left: false, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: true, bottom: false, left: false, num: 23 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: true, left: true, num: 8 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 11 },
      { top: false, right: false, bottom: true, left: false, num: 11 },
      { top: true, right: true, bottom: true, left: false, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 11 },
      { top: false, right: false, bottom: true, left: false, num: 11 },
      { top: true, right: true, bottom: true, left: false, num: 11 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 24 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: true, left: false, num: 19 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 6 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: false, left: false, num: 18 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 5 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: false, left: false, num: 18 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: false, left: false, num: 18 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: false, left: false, num: 18 }
    ],
    [
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: false, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 },
      { top: true, right: false, bottom: false, left: false, num: 20 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 18 },
      { top: true, right: false, bottom: false, left: false, num: 18 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 1 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 7 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 2 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: false, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: false, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 12 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: true, right: true, bottom: false, left: false, num: 10 },
      { top: false, right: true, bottom: false, left: true, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: true, bottom: true, left: false, num: 10 },
      { top: true, right: false, bottom: true, left: true, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: true, right: false, bottom: false, left: false, num: 10 },
      { top: false, right: false, bottom: false, left: false, num: 10 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: true, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: false, left: true, num: 0 },
      { top: true, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: true, left: true, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: true, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: false, left: true, num: 0 },
      { top: true, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 }
    ],
    [
      { top: false, right: true, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: false, left: true, num: 0 },
      { top: true, right: false, bottom: true, left: true, num: 3 },
      { top: false, right: false, bottom: false, left: false, num: 3 },
      { top: false, right: false, bottom: true, left: false, num: 3 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 }
    ]
  ],
  [
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: true, bottom: true, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: true, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: true, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: true, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 }
    ],
    [
      { top: false, right: true, bottom: false, left: false, num: 0 },
      { top: false, right: true, bottom: false, left: true, num: 0 },
      { top: true, right: false, bottom: true, left: true, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: true, left: false, num: 0 },
      { top: false, right: false, bottom: true, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 }
    ],
    [
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: true, right: false, bottom: false, left: false, num: 0 },
      { top: false, right: false, bottom: false, left: false, num: 0 }
    ]
  ]
]

export default maze;