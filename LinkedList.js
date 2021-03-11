
//Create Linked List class points to first node known as 'head'
console.groupCollapsed("Linked List")

class LinkedList{
    constructor(head=null){
        this.head=head

    }
    //Returns the number of nodes in list
     getSize(){
    let count=0
        let node=this.head;
        while(node){
            count++;
            node=node.next
        }
        return count;
    }
    clear(){
        this.head=null
    }
    getLastNode(){
        let lastNode=this.head
        if(lastNode){
        while(lastNode.next){
            lastNode=lastNode.next
        }
    }
        return lastNode
    }
    getFirstNode(){
        return this.head
    }
    

}

//Creating Class to specfiy nodes

class ListNode{
    constructor(data){
        this.data=data
        this.next=null
    }
}



//initializing  2 nodes with data
 let node1=new ListNode(1)
 let node2=new ListNode(2)
 let node3=new ListNode()

//Pointing node1 to node2
node1.next=node2

let list=new LinkedList(node1)

console.log(list)


console.groupEnd()

