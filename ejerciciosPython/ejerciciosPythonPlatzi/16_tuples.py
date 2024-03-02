## Las tuplas son constantes, por lo que solo son de lectura
import random

myTuple = (1,2,3,4,5)
myTuple2 = (1,2,"G",3,4,5,"G", "G")
myTuple3 = ("A","B")

print(type(myTuple))

print(myTuple)
print(myTuple2)
print(myTuple3)

print(myTuple2.index("G"))
print(myTuple2.count("G"))

myList = list(myTuple2)
print(myList)
print(type(myList))

myList[2] = "D"
myTupleAgain = tuple(myList)
print(myTupleAgain)
print(type(myTupleAgain))


print(random.choice(myTupleAgain))
print(random.choice(myTupleAgain))
print(random.choice(myTupleAgain))
