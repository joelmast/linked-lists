# linked-lists
Linked lists project (https://www.theodinproject.com/lessons/javascript-linked-lists)

JavaScript Linked List Project

This project implements a linked list data structure in JavaScript. Although JavaScript's built-in arrays handle dynamic sizing and manipulation efficiently, understanding linked lists provides a foundational grasp of how more complex data structures like graphs and binary trees operate.
About Linked Lists

A linked list is a linear collection of data elements, called nodes, where each node points to the next node in the sequence.

A basic representation looks like this:
[ HEAD_NODE ] -> [ NODE ] -> [ TAIL_NODE ] -> null
Features

The project requires the creation of a LinkedList class/factory and a Node class/factory. The LinkedList class should include the following core functionalities:

 -   append(value): Adds a new node to the end of the list.
 -
 -   prepend(value): Adds a new node to the beginning of the list.
 -
 -  size(): Returns the total number of nodes.
 -
 -  head(): Returns the first node.
 -
 -  tail(): Returns the last node.
 -
 -  at(index): Returns the node at a specified index.

 -  pop(): Removes the last element.

 -  contains(value): Checks if a given value exists in the list.

 -  find(value): Returns the index of a node containing the value, or null if not found.

 -  toString(): Provides a string representation of the list (e.g., ( value ) -> ( value ) -> null).
