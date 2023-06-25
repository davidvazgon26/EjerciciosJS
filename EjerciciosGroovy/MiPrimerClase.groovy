 @groovy.transform.Canonical  // CAnonical trae ToString y Constructor juntos.
// @groovy.transform.ToString  //Esta anotacion permite usar el persona2

// Mi primer clase
class Person{
    String name ;
    int age;

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
Person person4 = new Person('Daniel', 49); 
Person person5 = ["Lupe", 34];
//Necesitas el constructor para hacerlo asi y debes respetar el orden en que se declararon las propiedades en la clase.

println "Name: ${person.getName()} Age: ${person.getAge()}";
println "Name: ${persona2.getName()} Age: ${persona2.getAge()}";
println "Name: ${person3.getName()} Age: ${person3.getAge()}";
println "Name: ${person4.getName()} Age: ${person4.getAge()}";
println "Name: ${person5.getName()} Age: ${person5.getAge()}";