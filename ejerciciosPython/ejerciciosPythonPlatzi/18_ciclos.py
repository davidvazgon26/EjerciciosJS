#while

counter = 0 

while counter < 10:
    counter += 1
    if counter == 4:
        continue
    if counter == 8:
        break
    print(counter)

# For

for element in range(1,20):
    print(element)

myList = [323,616,6161,686,6464,98,99,77]

for el in myList:
    print(el)

myTuple = ('David','Ale','Vaz')

for e in myTuple:
    print(e)


product = {
    'name':'Camisa',
    'price':100,
    'stock':89
    }

for key in product:
    print(key, '=>', product[key])

for key, value in product.items():
    print(key, "=>", value) 

people = [
    {
        'name':'David',
        'age':34
    },
    {
        'name':'Cecy',
        'age':32
    },
    {
        'name':'Viky',
        'age':16
    }
]

for person in people:
    print(person)
    print(person['name'])

# anidado

matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

print(matriz)

for row in matriz:
    print(row)
    for column in row:
        print(column)