Map map = [:]
Map map2 = [:] as TreeMap
TreeMap map3 = [:]
HashMap map4 = [:]
def map5 = new HashMap()  //Para crear un HashMap en groovy necesitar crear la instancia.

println map.getClass().name
println map2.getClass().name
println map3.getClass().name
println map4.getClass().name // los hashmap por default groovy los convierte en linkedHashMap
println map5.getClass().name

println "************* Cargando datos en el map************"

Map mapEjemplo = [:]
Map otroEjemplo = [
    1:[nombre: "Alejandro", Edad: 43, Sexo: "Que raro"],
    2:[nombre: "Firulais", Edad: 33, Sexo: "Que wouw"],
    3:[nombre: "El Turras", Edad: 38, Sexo: "Nel"],
    4:[nombre: "El Turras", Edad: 24, Sexo: "Simona"]
]

mapEjemplo << [nombre: "David", Edad: 43, Sexo: "A veces"]

mapSumandoMapas  = otroEjemplo.plus(mapEjemplo)


println mapEjemplo
println otroEjemplo
println mapSumandoMapas

mapSumandoMapas.remove(2)

println mapSumandoMapas

println mapEjemplo.containsKey("nombre")
println mapEjemplo.containsKey("email")

println otroEjemplo.keySet()

println mapEjemplo.keySet()

println mapEjemplo.size()

mapEjemplo.each{el ->
    println " Llave: ${el.key} || valor: ${el.value}"
}

println "************ Buscando valores ********************"

def miValor = mapEjemplo.find{ valor ->
    valor.value == 'David'
}

println miValor
println miValor.key
println miValor.value

Map people = [username:"YoMero", name:"David", age:43, email:"nel"]

def allEntries = people.findAll{el -> el.key.contains('m')}

println allEntries 

def names = otroEjemplo.collect{el -> el.value.nombre}
def namesDiff = otroEjemplo.collect([]as HashSet){el -> el.value.nombre}

def grouped = otroEjemplo.groupBy{el -> el.value.Edad > 30}

def grouped2 = otroEjemplo.groupBy{el -> el.value.Edad > 30 ? 'Mayor' : 'Menor'}

println names 
println namesDiff

println grouped
println grouped2

println "************Ordenamiento*****************"

def sorted =  otroEjemplo.sort{el -> el.value.nombre}
def sorted2 =  otroEjemplo.sort{el -> el.value.Edad}
def sorted3 =  otroEjemplo.sort{el -> -el.value.Edad}

println sorted
println sorted2
println sorted3