
console.groupCollapsed('Stack')

class Stack{
    constructor(arr=[]) {
        this.arr=arr
    }
    push(arg){
        this.arr.push(arg)
    }
    pop(arg){
        return this.arr.pop()
    }
    showStack(){
        return this.arr
    }

}

let arr=[0,1,2,3,4,5,6,7,8,9]

let stack=new Stack(arr)
console.log(`Intial:[${stack.showStack()}]`)
stack.push(10)
console.log(`Push:[${stack.showStack()}]`)
stack.pop()
console.log(`Pop:[${stack.showStack()}]`)

console.groupEnd()






