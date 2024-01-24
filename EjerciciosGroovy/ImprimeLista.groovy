def list = []
println list.class.name

def name= '"David"'
def map = [class: [name:"algo +"]]

def elements = [1,1111111,0.1,0..7,'a'..'z', "Normal string", "GString $name",[]]

println list.class.name

elements.each{ println"""$it - ${ it.class.name} """}

println map.class.name
println map.getClass().name


Closure write = { param ->
    println param
    println param.class.name
}

write(1)
write(2.0)
write("String")
write([1..9])