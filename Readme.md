<!-- 1 number Question Ans -->
* getElementById(id)
Selects one element
By ID only
Returns a single element (not a list)

* getElementsByClassName(className)
Selects multiple elements
By class name only
Returns a live HTMLCollection

* querySelector(cssSelector)
Selects the first matching element
Uses CSS-style selectors (.class, #id, tag, etc.)
Returns a single element

<!-- 2 number Question Ans -->
I create and insert a new element into the DOM in 3 stap
1. Create the element
2. Add content or attributes
3. I  need to select a parent element where you want to insert it.
<!-- 3 number Question Ans -->
Event Bubbling is a behavior in JavaScript where an event starts from the deepest (innermost) element and then bubbles up to its parent, then grandparent, and so on, up to the document.

<!-- 4 number Question Ans -->
Event Delegation : Event Delegation is a technique where you attach a single event listener to a parent element instead of each child. That parent listens for events that bubble up from its children.

It is Useful because improves performance (many child elements),Helps manage dynamically added elements,Cleaner and less repetitive code

<!-- 5 number Question Ans -->
preventDefault() :Prevents browser’s default action	Stop form submission or link follow
stopPropagation() :Stops event from bubbling up/down	Stop event reaching parent handlers