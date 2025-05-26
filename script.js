
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(value) {
        if (this.size === 0) {
            this.head = new Node(value);
            this.size++;
        } else {
            let current = this.head;
            while (current.next !== null){
                current = current.next;
            }
            let newNode = new Node(value);
            current.next = newNode; 
            this.size++;
        }
    }
    prepend(value) {
        if (this.size === 0) {
            this.head = new Node(value);
            this.size++;
        } else {
            let oldHead = this.head;
            let newNode = new Node(value);
            this.head = newNode;
            newNode.next = oldHead;
            this.size++;
        }
    }
    size() {
        return this.size;
    }
    head() {
        return this.head;
    }
    tail() {
        if (this.size === 0) {
            return null;
        } else {
            let current = this.head;
            while (current.next !== null){
                current = current.next;
            }
            return current;
        }
    }
    at(index) {
        if (index >= this.size) {
            return null;
        } else if (index < 0) {
            return null;
        } else {
            let current = this.head
            let counter = 0;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }
    }
    pop() {

    }
    contains(value) {
        // Search whether the linked list contains "value"
    }
    find(value) {
        // Find where the linked list contains "value"
    }
    toString() {
        // Convert linked list to string
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}