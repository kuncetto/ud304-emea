/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems, unorderedList;

articleItems = $('.article-item');

unorderedList = articleItems.first().children('ul');

unorderedList.remove();
