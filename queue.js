class _Node {
    constructor(value) {
        this.value=value,
        this.next=null,
        this.prev=null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;

    dequeue() {
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        //make the first item on the queue to be the
        //the item that is next on the line
        // the item after the current first item

        const node = this.first;
        this.first = node.prev;

        //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }

        return node.value;
    }

    peek() {
      console.log(this.last.data);
      return this.last.data;
    }
}
