numbers = [1,454,684,61,681,68,618]
tasks = ['Make to do', "play something", "none", "string"]
types = [1, True, "sfgfs", False, 14.55]

print(type(numbers))
print(numbers)

print(type(tasks))
print(tasks)

print(type(types))
print(types)

print(numbers[3])
print(tasks[3])

print("do" in tasks)

#CRUD

numbers2 = [1,2,3,4,5,6,7,8]

numbers2.append(700)

print(numbers2)

numbers2.insert(3,'Hola')

print(numbers2)

newList = numbers+ numbers2
print(newList)

index = newList.index('Hola')

print(index)

newList[index] = 'Adios'
print(newList)

newList.remove(681)
print(newList)

newList.pop()
print(newList)

newList.pop(1)
print(newList)

newList.reverse()
print(newList)

newList.pop(newList.index('Adios'))

newList.sort()
print(newList)


