def validate = { valor ->
    println valor
    ? """El valor ${valor} es verdadero"""
    : """El valor ${valor} es falso """
}


validate(0)
validate(1)
validate(0.0)
validate([])
validate(['elemento'])
validate([:])
validate([name:'David'])

def elem = null
validate(elem)

class Person{
    String name
    int Age
}

Person person = new Person()
person.with{
    name= "David"
    age = 43
}


if(person.getAge()> 18){
    println "La persona es mayor"
}else{
    println "La persona no es valida"
}


//Usando asBoolean

class Person2{
    String name
    int Age
    
    boolean asBoolean(){
        age>40
    }
}

Person2 person2 = new Person2()
person2.with{
    name= "David"
    age = 43
}


if(person2){
    println "La persona es mayor a 40"
}else{
    println "La persona no es mayor a 40"
}

//Usando ternarios
println person2 ? "La persona es mayor a 40 ternario" : "La persona no es mayor a 40 ternario"

//Sobreescribiento el metodo string
class Person3{
    String name
    int Age
    
    boolean asBoolean(){
        age>40
    }
    
    String toString(){""" $name es mayor de 40 """}
}

Person3 person3 = new Person3(name:"David", age:43)

println person3 ?: "No es mayor"

//Manejando asserts

assert person3.age > 18 //true
//assert person3.age < 18 // false

assert person3.name.contains('t')

