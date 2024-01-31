import groovy.transform.AutoClone

@AutoClone
class Person {
    String name
    String lastname
    int age
}

def person1 = new Person(name:"David", lastname:"Vazquez", age: 43);
def person2 = person1.clone();

println person1.hashCode()
println person2.hashCode()
