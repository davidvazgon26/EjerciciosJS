List numbers = [87634,523,32425,12,87345,763]

println numbers
println numbers.sort()
println numbers.reverse()

import groovy.transform.Sortable
import groovy.transform.Canonical

@Canonical
@Sortable(includes=['age'])
class Person {
    String name
    String lastname
    int age
}

List people = [
    new Person("Omar", "Verde", 33),
    new Person("Diego", "Blanco", 23),
    new Person("Arturo", "Rojo", 36),
    new Person("Luis", "Azul", 18),
    new Person("David", "Vazquez", 43)
]

String separator = '-'*80

println people
println separator 
println people.sort()
println separator 
println people.reverse()