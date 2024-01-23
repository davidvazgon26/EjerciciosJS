// @groovy.transform.Canonical  // CAnonical trae ToString y Constructor juntos.
// @groovy.transform.ToString  //Esta anotacion permite usar el persona2

// Mi primer clase
class Person{
    String name ;
    int age;
    
    void setName(String name){
    println "Calling setName on Person"
    this.name = name;
    }
}

Person person = new Person();
person.setName('David');
person.setAge(42);

Person persona2 = new Person();
persona2.with{
    name = 'Alejandro'
    age = 32
}

Person person3 = new Person([name:'Juan', age:44]);

println "Name: ${person.getName()} Age: ${person.getAge()}";
println "Name: ${persona2.getName()} Age: ${persona2.getAge()}";
println "Name: ${person3.getName()} Age: ${person3.getAge()}";

//@groovy.transform.ToString
class Person2 {
    int age
    String name
}

Person2 person4 = new Person2()
person4.name = 'Ale'
person4.age = 33

println person4

Person2 person5 = new Person2([name:"omar", age:55])
println person5.name +", "+ person5.age

 Person2 person6 = [name:"Lupe", age:44];
 println person6.name +", "+ person6.age
//Necesitas el constructor para hacerlo asi y debes respetar el orden en que se declararon las propiedades en la clase.

//@groovy.transform.Canonical
//class Person3 {
//    String name
//    int age
//
//    // Constructor con parámetros
//    Person3(String name, int age) {
//        this.name = name
//        this.age = age
//    }
//}
//
//Person3 person7 = new Person3("Dale", 11)
//println person7