console.groupCollapsed('Queue')

class Queue{
    constructor(arr=[]){
        this.arr=arr
    }
    enqueue(arg){
        this.arr.push(arg)
    }
    dequeue(arg){
       return this.arr.shift()
    }
    showQueue(){
        return this.arr
    }
}

let arr=[0,1,2,3,4,5,6,7,8,9]

let queue=new Queue(arr)
console.log(`Intial:[${queue.showQueue()}]`)

queue.enqueue(10)
console.log(`After enqueue:[${queue.showQueue()}]`)

console.log(queue.dequeue())
console.log(`After dequeue:[${queue.showQueue()}]`)
console.groupEnd()