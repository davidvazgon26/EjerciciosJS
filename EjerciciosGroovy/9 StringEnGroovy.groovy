def name = 'David'
def message = "Hola $name mucho  gusto"

println "Tipo de dato: " + name.class.name
println "Tipo de dato: " + message.class.name
println "************************"

println "Class ${message.class.name} \n\n Value: $message"

def newMessage = $/
Este es un string con dollar slashes, y acepta interpolacion de valores,
por ejempl: Hola $name, como estas? y para escapar simbolos especiales puede ser asi: $$
/$

println newMessage

println "******** Otras funciones de los string manipulaciones *******"

def messageString = "Este es un string en Groovy"

println messageString.length()
println messageString[-1]
println messageString[11]
println messageString[5..9]
println messageString[9..5]

println messageString.reverse()

println "*********Haciendo un arbol de navidad ************"

(1..7).each{num ->
    println "*"*num
 }
 
 
 
 def height = 7

// Bucle externo para las filas
(1..height).each { row ->
    // Bucle interno para imprimir espacios en blanco
    (height - row).times {
        print " "
    }
    
    // Bucle interno para imprimir estrellas
    (2 * row - 1).times {
        print "*"
    }

    // Nueva línea después de cada fila
    println()
}

def simbol = '*'
int offset = 30

(1..10).each{ num ->
    println "${simbol*num}".center(offset)
}

println '||'.center(offset)


println "******** Otras funciones de los string *******"

def command = 'ls -lha ./EjerciciosGroovy'

command.execute().text
