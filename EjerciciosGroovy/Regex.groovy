//import java.util.regex.Pattern
//import java.util.regex.Matcher

String message = 'Este es un test para regex'
def pattern = /test/
//def matcher = message =~'test'

if(message =~ pattern){
println "El texto si contiene el patron"
}else{
    println "El texto no contiene el patron"
}

//assert pattern =~ message

def phoneRegex = /(\d{3})-(\d{3})-(\d{4})/

List phones = [
    '345-234-8763',
    '653-453-7635',
    '1244-763-234'
]

phones.each{phone ->
    assert phone ==~ phoneRegex
}