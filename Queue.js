console.log('Queue')
class Queue{
    constructor(arr=[]){
        this.arr=arr
    }
    push(arg){
        this.arr.push(arg)
    }
    pop(arg){
       return this.arr.shift()
    }
    showQueue(){
        return this.arr
    }
}

let arr=[0,1,2,3,4,5,6,7,8,9]

let queue=new Queue(arr)
console.log(queue.showQueue())

queue.push(10)
console.log(queue.showQueue())

console.log(queue.pop())
console.log(queue.showQueue())