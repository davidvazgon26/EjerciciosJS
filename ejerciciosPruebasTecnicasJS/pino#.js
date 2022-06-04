function staircase(n) {
    // Write your code here
  let str = ""
  
          let num = n-1
  for(let i=0;i<n;i++){
          let str="" 
      for(let j=1;j<=n;j++){
          //if(j<=n-i){ str = str + " "}
         // else{str = str + "#"}
         if(j>num){str = str + "#"}
         else{str = str + " "}
        
      }
      num = num-1
      console.log(str)
  }
  
  
}

staircase(10)