
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
        if (this.size === 0) {
            return null;
        } else if (this.size === 1) {
            this.head = null;
            this.size--;
        } else {
            let secondLast = this.at(size - 2);
            secondLast.next = null;
            this.size--;
        } 
    }
    contains(value) {
        if (this.size === 0) {
            return false;
        } else {
            let current = this.head;
            while (current.value !== value && current.next !== null){
                current = current.next;
            }
            if (current.value === value) {
                return true;
            } else {
                return false;
            }
        }
    }
    find(value) {
        if (this.size === 0) {
            return null;
        } else {
            let current = this.head;
            let index = 0;
            while (current.value !== value && current.next !== null){
                current = current.next;
                index++;
            }
            if (current.value === value) {
                return index;
            } else {
                return null;
            }
        }
        
    }
    toString() {
        if (this.size === 0) {
            return "null";
        }
        let result = "";
        let current = this.head;
        while (current.next !== null) {
            result += `( ${current.value} ) -> `;
            current = current.next;
        }
        result += `( ${current.value} ) -> `;
        result += "null";
        return result;

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export { Node, LinkedList }