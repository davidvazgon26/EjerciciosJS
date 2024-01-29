Closure printMessage = {name->
    println "Hola $name"
}

printMessage("David")
printMessage.call("David")

