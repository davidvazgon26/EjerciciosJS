List names = ["Jorge","Omar","David","Gloria","Maria","Sofia","Luis","Jaime"]

for(int i=0; i<names.size(); i++){
    println names[i];
}
println("**************************")
for(String name in names){
    println name
}

int count = names.size();
println("**************************")
while(count){
    println names[--count]
}

println("*********** Mapas ***************")

Map people = [omar:32, David:43, Mario:18]

for(i in people){
    println "${i.key} - ${i.value}"
}

println("*********** Each ***************")

names.each{println it}

people.each{key, value -> println "$key || $value"}

('a'..'g').each{text -> println text}

"Este es un texto".each{ println it.class.name; println it}

3.step(33,2){println it}

2.upto(14){println it}
