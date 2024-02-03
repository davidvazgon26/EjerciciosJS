class MySampleClass{
Map props = [:]

    def propertyMissing(String propertyName, Object value){
        props[propertyName] = value
    }

    def propertyMissing(String propertyName){
        props[propertyName]
    }
}

def object = new MySampleClass()

object.name = "David"
object.age = 44

println object.name 
println object.age