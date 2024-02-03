import groovy.util.XmlSlurper
import groovy.util.XmlParser
import groovy.xml.MarkupBuilder
//import groovy.json.JsonSlurper


String xml = '''
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me thi weekend!</body>
<people>
<person>
    <name>David</name>
</person>
<person>
    <name>Ale</name>
</person>
</people>
</note>
'''

def object = new XmlSlurper().parseText(xml)

println object.to
println object.from
println object.heading
println object.body
println object.people.person[1].name
println object.people.person[0].name

def object2 = new XmlParser().parseText(xml)

println object2

println object2.people.person*.name*.text()

println "*********Construyendo un XML***********"

def xml2 = new StringWriter()
def builder = new MarkupBuilder(xml2)

builder.people(title: 'Demo Epople list'){
    person(name:'Omar', lastname:"Chitiva", age:33){
    name('Omar')
    city('Torreon')
    }
    person(lastname:'Valenzuela', age:30){
    name('Jorge')
    city('Chiapas')
    }
}

println xml2


println "***********Ejercicio con XML*******************"

URL feedXML = 'https://refind.com/chrismessina.rss?amount=10'.toURL()

def feed = new XmlSlurper().parseText(feedXML.text)

feed.channel.item.each{entry ->
    println"""
    Title:${entry.title}
    Link:${entry.link}
    PubDate:${entry.pubDate}
    """
}





