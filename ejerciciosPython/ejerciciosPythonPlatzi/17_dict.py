myDict = {}

print(type(myDict))

myDict = {
    "avion": "hdhdfhdh",
    "name": "sgsfgsg",
    "age": "hdhdsgffdhdgjfhdh",
    "lastName": "afasfaf"
}

print(myDict)
print(len(myDict))

print(myDict['name'])
print(myDict.get('avion'))
print(myDict.get('otraCosa'))

print("age" in myDict)
print("noEsta" in myDict)

person = {
    "name":"David",
    "lastName":"Vaz",
    "age":99,
    "langs":["JS","Go","Java"]
}

print(person)

person['name'] = "Ale"
person['age'] -= 30
person['langs'].append('rust')

print(person)

del person['lastName']
person.pop('age')
print(person)

print('items')
print(person.items())

print('keys')
print(person.keys())

print('values')
print(person.values())
