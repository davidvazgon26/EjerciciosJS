// AST o Abstract Syntax Tree

// asi seria antes de usar notaciones en groovy
//class Person{
//    String name
//    String lastname
//    int age
//
//    // Sobre escribiendo el metodo toString
//    String toString(){
//        "Person($name, $lastname, $age)"
//    }
//}
//
//def person = new Person ([name:"David", lastname:"Vazquez", age:43])
//
//println person
//
//asi seria ahora con la notacion.

import groovy.transform.ToString

@ToString(includes=['name', 'age'])  //Tambien puedo usar exclude
class Person {
    String name
    String lastname
    int age
}

def person = new Person ([name:"David", lastname:"Vazquez", age:43])
def person2 = new Person ([name:"David", lastname:"Vazquez", age:43])

println person

println person.hashCode()
println person2.hashCode()
println person.equals(person2)
