class MyLinkedList {
    #head;
    #tail;
    #size;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (this.#size === 0 || this.#size <= index) {
            return -1
        }

        let node = this.#head;

        for (let i = 0; i !== index; i++) {
            node = node.getNext();
        }

        return node.getVal();
    }

    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
     * @param {number} val
     * @return {void}
     */
    addAtHead(value) {
        if (this.#size === 0) {
            this.#head = new Node(value);
            this.#tail = this.#head;
        }

        else {
            let node = new Node(value, this.#head, null);
            this.#head.setPrev(node);
            this.#head = node;
        }

        this.#size++;
    }

    /**
     * Append a node of value val to the last element of the linked list. 
     * @param {number} val
     * @return {void}
     */
    addAtTail(value) {
        if (this.#size === 0) {
            this.#tail = new Node(value);
            this.#head = this.#tail;
        }

        else {
            let node = new Node(value, null, this.#tail);
            this.#tail.setNext(node);
            this.#tail = node;
        }

        this.#size++;
    }

    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
     * @param {number} index 
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, value) {
        if (index <= this.#size) {
            
            if (index === 0) {
                this.addAtHead(value);
            }

            else if (index === this.#size) {
                this.addAtTail(value);
            }

            else {
                let tempNode = this.#head;

                for (let i = 0; i !== index; i++) {
                    tempNode = tempNode.getNext();
                }

                let node = new Node(value, tempNode, tempNode.getPrev());

                tempNode.getPrev().setNext(node);
                tempNode.setPrev(node);

                this.#size++;
            }
        }
    }

    /**
     * Delete the index-th node in the linked list, if the index is valid. 
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < this.#size) {
            
            if (index === 0) {
                this.#head = this.#head.getNext();

                if (this.#head !== null) {
                    this.#head.setPrev(null);
                }

                else {
                    this.#tail = null;
                }
            }

            else if (index === this.#size - 1) {
                this.#tail = this.#tail.getPrev();

                if (this.#tail !== null) {
                    this.#tail.setNext(null);
                }

                else {
                    this.#head = null;
                }
                
            }

            else {
                let tempNode = this.#head;

                for (let i = 0; i !== index; i++) {
                    tempNode = tempNode.getNext();
                }

                tempNode.getPrev().setNext(tempNode.getNext());
                tempNode.getNext().setPrev(tempNode.getPrev());
            }

            this.#size--;
        }
    }
}

class Node {
    #value;
    #next;
    #prev;

    constructor(value, next = null, prev = null) {
        this.#value = value;
        this.#next = next;
        this.#prev = prev;
    }

    getVal() {
        return this.#value;
    }

    setNext(next) {
        this.#next = next;
    }

    getNext() {
        return this.#next;
    }

    setPrev(prev) {
        this.#prev = prev;
    }

    getPrev() {
        return this.#prev;
    }
}