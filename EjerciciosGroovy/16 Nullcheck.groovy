import groovy.transform.NullCheck

 @NullCheck
class Person{
    String name
    String lastname
    int age

      Person(String name, String lastname, int age){
          this.name = name
          this.lastname = lastname
          this.age = age
      }
   
}

def person = new Person("David", "Vaz", 33)
def person2 = new Person("Ale", null, 33)
