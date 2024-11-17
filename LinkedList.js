class Node {
constructor(data) {
 this.data = data;
 this.next = null;

}

}

class LinkedList {
constructor() {
   this.head = null;
 }


add(value) {
 if(this.head === null) {
    this.head = new Node(value);
    
    return;
  } 
  
  let current = this.head;
  
  while(current.next !== null){
   current = current.next;
   }
   
   current.next = new Node(value);
 }
 
 prepend(value) {
  let newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
  
 }
}

const linkedlist = new LinkedList();
console.log(linkedlist);
linkedlist.prepend(0);
console.log(linkedlist);
linkedlist.prepend(1);
console.log(linkedlist);
linkedlist.prepend(2);
console.log(linkedlist);