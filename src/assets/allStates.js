export const stateNames = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export const usGraph = new Map([
  ["Alabama", ["Mississippi", "Tennessee", "Florida", "Georgia"]],
  ["Alaska", ["Washington"]],
  ["Arizona", ["Nevada", "New Mexico", "Utah", "California", "Colorado"]],
  [
    "Arkansas",
    ["Oklahoma", "Tennessee", "Texas", "Louisiana", "Mississippi", "Missouri"],
  ],
  ["California", ["Oregon", "Arizona", "Nevada"]],
  [
    "Colorado",
    [
      "New Mexico",
      "Oklahoma",
      "Utah",
      "Wyoming",
      "Arizona",
      "Kansas",
      "Nebraska",
    ],
  ],
  ["Connecticut", ["New York", "Rhode Island", "Massachusetts"]],
  ["Delaware", ["New Jersey", "Pennsylvania", "Maryland"]],
  ["Florida", ["Georgia", "Alabama"]],
  [
    "Georgia",
    ["North Carolina", "South Carolina", "Tennessee", "Alabama", "Florida"],
  ],
  ["Hawaii", ["California"]],
  ["Idaho", ["Utah", "Washington", "Wyoming", "Montana", "Nevada", "Oregon"]],
  [
    "Illinois",
    ["Kentucky", "Missouri", "Wisconsin", "Indiana", "Iowa", "Michigan"],
  ],
  ["Indiana", ["Michigan", "Ohio", "Illinois", "Kentucky"]],
  [
    "Iowa",
    [
      "Nebraska",
      "South Dakota",
      "Wisconsin",
      "Illinois",
      "Minnesota",
      "Missouri",
    ],
  ],
  ["Kansas", ["Nebraska", "Oklahoma", "Colorado", "Missouri"]],
  [
    "Kentucky",
    [
      "Tennessee",
      "Virginia",
      "West Virginia",
      "Illinois",
      "Indiana",
      "Missouri",
      "Ohio",
    ],
  ],
  ["Louisiana", ["Texas", "Arkansas", "Mississippi"]],
  ["Maine", ["New Hampshire"]],
  ["Maryland", ["Virginia", "West Virginia", "Delaware", "Pennsylvania"]],
  [
    "Massachusetts",
    ["New York", "Rhode Island", "Vermont", "Connecticut", "New Hampshire"],
  ],
  ["Michigan", ["Ohio", "Illinois", "Indiana", "Wisconsin"]],
  ["Minnesota", ["North Dakota", "South Dakota", "Iowa", "Wisconsin"]],
  ["Mississippi", ["Louisiana", "Tennessee", "Alabama", "Arkansas"]],
  [
    "Missouri",
    [
      "Nebraska",
      "Oklahoma",
      "Tennessee",
      "Arkansas",
      "Illinois",
      "Iowa",
      "Kansas",
      "Kentucky",
    ],
  ],
  ["Montana", ["South Dakota", "Wyoming", "Idaho", "North Dakota"]],
  [
    "Nebraska",
    ["Missouri", "South Dakota", "Wyoming", "Colorado", "Iowa", "Kansas"],
  ],
  ["Nevada", ["Idaho", "Oregon", "Utah", "Arizona", "California"]],
  ["New Hampshire", ["Vermont", "Maine", "Massachusetts"]],
  ["New Jersey", ["Pennsylvania", "Delaware", "New York"]],
  ["New Mexico", ["Oklahoma", "Texas", "Utah", "Arizona", "Colorado"]],
  [
    "New York",
    ["Pennsylvania", "Vermont", "Connecticut", "Massachusetts", "New Jersey"],
  ],
  ["North Carolina", ["Tennessee", "Virginia", "Georgia", "South Carolina"]],
  ["North Dakota", ["South Dakota", "Minnesota", "Montana"]],
  [
    "Ohio",
    ["Michigan", "Pennsylvania", "West Virginia", "Indiana", "Kentucky"],
  ],
  [
    "Oklahoma",
    ["Missouri", "New Mexico", "Texas", "Arkansas", "Colorado", "Kansas"],
  ],
  ["Oregon", ["Nevada", "Washington", "California", "Idaho"]],
  [
    "Pennsylvania",
    ["New York", "Ohio", "West Virginia", "Delaware", "Maryland", "New Jersey"],
  ],
  ["Rhode Island", ["Massachusetts", "Connecticut"]],
  ["South Carolina", ["North Carolina", "Georgia"]],
  [
    "South Dakota",
    ["Nebraska", "North Dakota", "Wyoming", "Iowa", "Minnesota", "Montana"],
  ],
  [
    "Tennessee",
    [
      "Mississippi",
      "Missouri",
      "North Carolina",
      "Virginia",
      "Alabama",
      "Arkansas",
      "Georgia",
      "Kentucky",
    ],
  ],
  ["Texas", ["New Mexico", "Oklahoma", "Arkansas", "Louisiana"]],
  ["Utah", ["Nevada", "New Mexico", "Wyoming", "Arizona", "Colorado", "Idaho"]],
  ["Vermont", ["New Hampshire", "New York", "Massachusetts"]],
  [
    "Virginia",
    ["North Carolina", "Tennessee", "West Virginia", "Kentucky", "Maryland"],
  ],
  ["Washington", ["Oregon", "Idaho"]],
  [
    "West Virginia",
    ["Pennsylvania", "Virginia", "Kentucky", "Maryland", "Ohio"],
  ],
  ["Wisconsin", ["Michigan", "Minnesota", "Illinois", "Iowa"]],
  [
    "Wyoming",
    ["Nebraska", "South Dakota", "Utah", "Colorado", "Idaho", "Montana"],
  ],
]);
