"use strict";
{
    function formatString(input, toUpper) {
        if (toUpper === true || toUpper === undefined) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    function filterByRating(items) {
        return items.filter(item => item.rating >= 4);
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];
    console.log(filterByRating(books));
}
