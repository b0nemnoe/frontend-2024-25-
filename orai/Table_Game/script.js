table = [
    [1, 2, 1],
    [2, 4, 2],
    [1, 2, 1]
]

table2 = [
    [3, 7, 4],
    [5, 16, 11],
    [2, 9, 7]
  ]

function FindIncrements(table) {
    a_b = table[0][1]
    a_c = table[1][0]
    a_b_c_d = table[1][1]
    b_d = table[1][2]
    c_d = table[2][1]


    a = a_b + a_c - a_b_c_d
    b = a_b - a
    c = a_c - a
    d = c_d - c

    if(a + d != b_d){
        return [-1]
    }

    return [a, b, c, d]
}

FindIncrements(table2)