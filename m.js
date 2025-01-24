function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function test(d1, d2) {
    var diff = monthDiff(d1, d2);
    console.log(
        d1.toISOString().substring(0, 10),
        "to",
        d2.toISOString().substring(0, 10),
        ":",
        diff
    );
}

test (
    new Date(2024, 8, 23), // November 4th, 2008
    new Date()  // March 12th, 2010
);
// Result: 16

test(
    new Date(2010, 0, 1),  // January 1st, 2010
    new Date(2010, 2, 12)  // March 12th, 2010
);
// Result: 2

test(
    new Date(2010, 1, 1),  // February 1st, 2010
    new Date(2010, 2, 12)  // March 12th, 2010
);
// Result: 


var diff = monthDiff(d1, d2);
console.log(
    d1.toISOString().substring(0, 10),
    "to",
    d2.toISOString().substring(0, 10),
    ":",
    diff = (d1,d2)
);