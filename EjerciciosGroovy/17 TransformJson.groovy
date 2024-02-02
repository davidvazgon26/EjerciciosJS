import groovy.json.JsonSlurper
import groovy.json.JsonOutput
import groovy.json.JsonGenerator

String json = '{"name":"David","lastname": "Vazquez", "age": 33 }'

def object = new JsonSlurper().parseText(json)

println object.name
println object['name']
println object['lastname']

String json2 = '''[
{"name":"David","lastname":"Vazquez","age":43},
{"name":"Ale","lastname":"Glz","age":13},
{"name":"Neo","lastname":"Anderson","age":23}
]'''

def people = new JsonSlurper().parseText(json2)

def names = people*.name
def lastname = people*.lastname
def ages = people*.age

println people

println names
println lastname
println ages

// assert names.contains('Davids')

println "************Creando un Json *******"

def peoples = new JsonSlurper().parseText(json2)

def generator = new JsonGenerator.Options()
.excludeFieldsByName('lastname')
.build()

String output = generator.toJson(people)

println output