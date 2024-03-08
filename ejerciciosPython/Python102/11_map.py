numbers = [1,2,3,4]

numbers_v2 = []

for i in numbers:
    numbers_v2.append(i*2)

print(numbers_v2)

numbers_v3 = list(map(lambda item: item * 3, numbers))
print(numbers_v3)

list1 = [1,2,3,4,5]
list2 = [6,7,8,9]

print(list1)
print(list2)

resultList = list(map(lambda itemL1, itemL2: itemL1+itemL2, list1, list2))
print(resultList)

resultDic = dict(zip(list1,list2))
print(resultDic)