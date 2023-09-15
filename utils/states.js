export const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

export const stateGraph = [
  {
    name: "Alabama",
    neighbors: ["Mississippi", "Tennessee", "Florida","Georgia"]
  },
  {
    name: "Arizona",
    neighbors: ["Nevada", "New Mexico", "Utah", "California", "Colorado"]
  },
  {
    name: "Arkansas",
    neighbors: ["Oklahoma", "Tennessee", "Texas", "Louisiana", "Mississippi", "Missouri"]
  },
  {
    name: "California",
    neighbors: ["Oregon", "Arizona", "Nevada"]
  },
  {
    name: "Colorado",
    neighbors: ["New Mexico", "Oklahoma", "Utah", "Wyoming", "Arizona", "Kansas", "Nebraska"]
  },
  {
    name: "Connecticut",
    neighbors: ["New York", "Rhode Island", "Massachusetts"]
  },
  {
    name: "Delaware",
    neighbors: ["New Jersey", "Pennsylvania", "Maryland"]
  },
  {
    name: "Florida",
    neighbors: ["Georgia", "Alabama"]
  },
  {
    name: "Georgia",
    neighbors: ["North Carolina", "South Carolina", "Tennessee", "Alabama", "Florida"]
  },
  {
    name: "Idaho",
    neighbors: ["Utah", "Washington", "Wyoming", "Montana", "Nevada", "Oregon"]
  },
  {
    name: "Illinois",
    neighbors: ["Kentucky", "Missouri", "Wisconsin", "Indiana", "Iowa", "Michigan"]
  },
  {
    name: "Indiana",
    neighbors: ["Michigan", "Ohio", "Illinois", "Kentucky"]
  },
  {
    name: "Iowa",
    neighbors: ["Nebraska", "South Dakota", "Wisconsin", "Illinois", "Minnesota", "Missouri"]
  },
  {
    name: "Kansas",
    neighbors: ["Nebraska", "Oklahoma", "Colorado", "Missouri"]
  },
  {
    name: "Kentucky",
    neighbors: ["Tennessee", "Virginia", "West Virginia", "Illinois", "Indiana", "Missouri", "Ohio"]
  },
  {
    name: "Louisiana",
    neighbors: ["Texas", "Arkansas", "Mississippi"]
  },
  {
    name: "Maine",
    neighbors: ["New Hampshire"]
  },
  {
    name: "Maryland",
    neighbors: ["Virginia", "West Virginia", "Delaware", "Pennsylvania"]
  },
  {
    name: "Massachusetts",
    neighbors: ["New York", "Rhode Island", "Vermont", "Connecticut", "New Hampshire"]
  },
  {
    name: "Michigan",
    neighbors: ["Ohio", "Illinois", "Indiana", "Wisconsin"]
  },
  {
    name: "Minnesota",
    neighbors: ["North Dakota", "South Dakota", "Iowa", "Wisconsin"]
  },
  {
    name: "Mississippi",
    neighbors: ["Louisiana", "Tennessee", "Alabama", "Arkansas"]
  },
  {
    name: "Missouri",
    neighbors: ["Nebraska", "Oklahoma", "Tennessee", "Arkansas", "Illinois", "Iowa", "Kansas", "Kentucky"]
  },
  {
    name: "Montana",
    neighbors: ["South Dakota", "Wyoming", "Idaho", "North Dakota"]
  },
  {
    name: "Nebraska",
    neighbors: ["Missouri", "South Dakota", "Wyoming", "Colorado", "Iowa", "Kansas"]
  },
  {
    name: "Nevada",
    neighbors: ["Idaho", "Oregon", "Utah", "Arizona", "California"]
  },
  {
    name: "New Hampshire",
    neighbors: ["Vermont", "Maine", "Massachusetts"]
  },
  {
    name: "New Jersey",
    neighbors: ["Pennsylvania", "Delaware", "New York"]
  },
  {
    name: "New Mexico",
    neighbors: ["Oklahoma", "Texas", "Utah", "Arizona", "Colorado"]
  },
  {
    name: "New York",
    neighbors: ["Pennsylvania", "Vermont", "Connecticut", "Massachusetts", "New Jersey"]
  },
  {
    name: "North Carolina",
    neighbors: ["Tennessee", "Virginia", "Georgia", "South Carolina"]
  },
  {
    name: "North Dakota",
    neighbors: ["South Dakota", "Minnesota", "Montana"]
  },
  {
    name: "Ohio",
    neighbors: ["Michigan", "Pennsylvania", "West Virginia", "Indiana", "Kentucky"]
  },
  {
    name: "Oklahoma",
    neighbors: ["Missouri", "New Mexico", "Texas", "Arkansas", "Colorado", "Kansas"]
  },
  {
    name: "Oregon",
    neighbors: ["Nevada", "Washington", "California", "Idaho"]
  },
  {
    name: "Pennsylvania",
    neighbors: ["New York", "Ohio", "West Virginia", "Delaware", "Maryland", "New Jersey"]
  },
  {
    name: "Rhode Island",
    neighbors: ["Massachusetts", "Connecticut"]
  },
  {
    name: "South Carolina",
    neighbors: ["North Carolina", "Georgia"]
  },
  {
    name: "South Dakota",
    neighbors: ["Nebraska", "North Dakota", "Wyoming", "Iowa", "Minnesota", "Montana"]
  },
  {
    name: "Tennessee",
    neighbors: ["Mississippi", "Missouri", "North Carolina", "Virginia", "Alabama", "Arkansas", "Georgia", "Kentucky"]
  },
  {
    name: "Texas",
    neighbors: ["New Mexico", "Oklahoma", "Arkansas", "Louisiana"]
  },
  {
    name: "Utah",
    neighbors: ["Nevada", "New Mexico", "Wyoming", "Arizona", "Colorado", "Idaho"]
  },
  {
    name: "Vermont",
    neighbors: ["New Hampshire", "New York", "Massachusetts"]
  },
  {
    name: "Virginia",
    neighbors: ["North Carolina", "Tennessee", "West Virginia", "Kentucky", "Maryland"]
  },
  {
    name: "Washington",
    neighbors: ["Oregon", "Idaho"]
  },
  {
    name: "West Virginia",
    neighbors: ["Pennsylvania", "Virginia", "Kentucky", "Maryland", "Ohio"]
  },
  {
    name: "Wisconsin",
    neighbors: ["Michigan", "Minnesota", "Illinois", "Iowa"]
  },
  {
    name: "Wyoming",
    neighbors: ["Nebraska", "South Dakota", "Utah", "Colorado", "Idaho", "Montana"]
  }
]
export const graph = [
    {
        id: 0,
        name: "Alabama",
        neighbors: [
            21,
            39,
            7,
            8
        ]
    },
    {
        id: 1,
        name: "Arizona",
        neighbors: [
            25,
            28,
            41,
            3,
            4
        ]
    },
    {
        id: 2,
        name: "Arkansas",
        neighbors: [
            33,
            39,
            40,
            15,
            21,
            22
        ]
    },
    {
        id: 3,
        name: "California",
        neighbors: [
            34,
            1,
            25
        ]
    },
    {
        id: 4,
        name: "Colorado",
        neighbors: [
            28,
            33,
            41,
            47,
            1,
            13,
            24
        ]
    },
    {
        id: 5,
        name: "Connecticut",
        neighbors: [
            29,
            36,
            18
        ]
    },
    {
        id: 6,
        name: "Delaware",
        neighbors: [
            27,
            35,
            17
        ]
    },
    {
        id: 7,
        name: "Florida",
        neighbors: [
            8,
            0
        ]
    },
    {
        id: 8,
        name: "Georgia",
        neighbors: [
            30,
            37,
            39,
            0,
            7
        ]
    },
    {
        id: 9,
        name: "Idaho",
        neighbors: [
            41,
            44,
            47,
            23,
            25,
            34
        ]
    },
    {
        id: 10,
        name: "Illinois",
        neighbors: [
            14,
            22,
            46,
            11,
            12,
            19
        ]
    },
    {
        id: 11,
        name: "Indiana",
        neighbors: [
            19,
            32,
            10,
            14
        ]
    },
    {
        id: 12,
        name: "Iowa",
        neighbors: [
            24,
            38,
            46,
            10,
            20,
            22
        ]
    },
    {
        id: 13,
        name: "Kansas",
        neighbors: [
            24,
            33,
            4,
            22
        ]
    },
    {
        id: 14,
        name: "Kentucky",
        neighbors: [
            39,
            43,
            45,
            10,
            11,
            22,
            32
        ]
    },
    {
        id: 15,
        name: "Louisiana",
        neighbors: [
            40,
            2,
            21
        ]
    },
    {
        id: 16,
        name: "Maine",
        neighbors: [
            26
        ]
    },
    {
        id: 17,
        name: "Maryland",
        neighbors: [
            43,
            45,
            6,
            35
        ]
    },
    {
        id: 18,
        name: "Massachusetts",
        neighbors: [
            29,
            36,
            42,
            5,
            26
        ]
    },
    {
        id: 19,
        name: "Michigan",
        neighbors: [
            32,
            10,
            11,
            46
        ]
    },
    {
        id: 20,
        name: "Minnesota",
        neighbors: [
            31,
            38,
            12,
            46
        ]
    },
    {
        id: 21,
        name: "Mississippi",
        neighbors: [
            15,
            39,
            0,
            2
        ]
    },
    {
        id: 22,
        name: "Missouri",
        neighbors: [
            24,
            33,
            39,
            2,
            10,
            12,
            13,
            14
        ]
    },
    {
        id: 23,
        name: "Montana",
        neighbors: [
            38,
            47,
            9,
            31
        ]
    },
    {
        id: 24,
        name: "Nebraska",
        neighbors: [
            22,
            38,
            47,
            4,
            12,
            13
        ]
    },
    {
        id: 25,
        name: "Nevada",
        neighbors: [
            9,
            34,
            41,
            1,
            3
        ]
    },
    {
        id: 26,
        name: "New Hampshire",
        neighbors: [
            42,
            16,
            18
        ]
    },
    {
        id: 27,
        name: "New Jersey",
        neighbors: [
            35,
            6,
            29
        ]
    },
    {
        id: 28,
        name: "New Mexico",
        neighbors: [
            33,
            40,
            41,
            1,
            4
        ]
    },
    {
        id: 29,
        name: "New York",
        neighbors: [
            35,
            42,
            5,
            18,
            27
        ]
    },
    {
        id: 30,
        name: "North Carolina",
        neighbors: [
            39,
            43,
            8,
            37
        ]
    },
    {
        id: 31,
        name: "North Dakota",
        neighbors: [
            38,
            20,
            23
        ]
    },
    {
        id: 32,
        name: "Ohio",
        neighbors: [
            19,
            35,
            45,
            11,
            14
        ]
    },
    {
        id: 33,
        name: "Oklahoma",
        neighbors: [
            22,
            28,
            40,
            2,
            4,
            13
        ]
    },
    {
        id: 34,
        name: "Oregon",
        neighbors: [
            25,
            44,
            3,
            9
        ]
    },
    {
        id: 35,
        name: "Pennsylvania",
        neighbors: [
            29,
            32,
            45,
            6,
            17,
            27
        ]
    },
    {
        id: 36,
        name: "Rhode Island",
        neighbors: [
            18,
            5
        ]
    },
    {
        id: 37,
        name: "South Carolina",
        neighbors: [
            30,
            8
        ]
    },
    {
        id: 38,
        name: "South Dakota",
        neighbors: [
            24,
            31,
            47,
            12,
            20,
            23
        ]
    },
    {
        id: 39,
        name: "Tennessee",
        neighbors: [
            21,
            22,
            30,
            43,
            0,
            2,
            8,
            14
        ]
    },
    {
        id: 40,
        name: "Texas",
        neighbors: [
            28,
            33,
            2,
            15
        ]
    },
    {
        id: 41,
        name: "Utah",
        neighbors: [
            25,
            28,
            47,
            1,
            4,
            9
        ]
    },
    {
        id: 42,
        name: "Vermont",
        neighbors: [
            26,
            29,
            18
        ]
    },
    {
        id: 43,
        name: "Virginia",
        neighbors: [
            30,
            39,
            45,
            14,
            17
        ]
    },
    {
        id: 44,
        name: "Washington",
        neighbors: [
            34,
            9
        ]
    },
    {
        id: 45,
        name: "West Virginia",
        neighbors: [
            35,
            43,
            14,
            17,
            32
        ]
    },
    {
        id: 46,
        name: "Wisconsin",
        neighbors: [
            19,
            20,
            10,
            12
        ]
    },
    {
        id: 47,
        name: "Wyoming",
        neighbors: [
            24,
            38,
            41,
            4,
            9,
            23
        ]
    }
]
