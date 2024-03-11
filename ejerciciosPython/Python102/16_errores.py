# print(0/0))
# print(0/0)
# print(result)

sum = lambda x,y: x+y
assert sum(2,2) == 4

print('Hi')

try:
    print(0/0)
except ZeroDivisionError as error:
    print(error)


try:
    assert 1 != 1, "Uno es igual que uno"
except AssertionError as error:
    print(error)

try:
    age = 10
    if age < 18:
        raise Exception('No se permiten menores de edad')
except Exception as error:
    print(error)

print('Hi 2')