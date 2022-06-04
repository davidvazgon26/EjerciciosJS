// cambiar el tipo de hora de am/pm por horario militar
//  12:01 AM => 00:01 y 11:59 PM => 23:59 

function converter(s){
    if((parseInt(s.split(":")[0]))>12) return s
    let h = s.split("",s.length)
     if(h.includes('P') ){
         let conv = s.split(":");
         conv[0] == "12"? conv[0] = "12" : conv[0]= parseInt(conv[0])+12;
         
        let last = conv.pop();
         last = last.split("");
         last.pop();
         last.pop();
         last = last.join("");
         conv.push(last);
         conv = conv.join(":")
        console.log(conv)
        return conv

    }
    else{
        let conv = s.split("")
        conv.pop()
        conv.pop()
        conv = conv.join("")
        conv = conv.split(":")
        if(conv[0] == "12") conv[0]="00"
        conv = conv.join(":") 
        console.log(conv)
        return conv
    }

}

converter("19:05:45")
converter("08:05:45PM")
converter("08:05:45AM")
converter("12:40:45AM")
converter("12:45:54PM")