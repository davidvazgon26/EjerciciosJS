import functools

numbers = [1,2,3,4,6,4,6,7,8]

res = functools.reduce(lambda counter, item:counter+item, numbers)

print("REsult: ", res)

def accumulation(counter, item):
    print('Counter: ', counter)
    print('item: ', item)
    return counter+item

result = functools.reduce(accumulation, numbers )

print(result)