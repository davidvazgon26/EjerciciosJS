function Solution (){

    this.stack = [];
    this.queue = [];

    this.pushCharacter = function(char){
        this.stack.push(char);
    }

    this.enqueueCharacter = function(char){
        this.queue.push(char);
    }

    this.popCharacter = function(){
        return this.stack.pop();
    }

    this.dequeueCharacter = function(){
        return this.queue.shift();
    }
}

Solution.pushCharacter("David")

console.log(Solution.stack)