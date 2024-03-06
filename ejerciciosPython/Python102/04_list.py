numbers =[]

for item in range(1,11):
    numbers.append(item * 2 )

print(numbers)

## Short version
numbers_v2 = [item *2 for item in range(1,11)]
print(numbers_v2)

numbers2 = []
for i in range(1,11):
    if i % 2 == 0:
        numbers2.append(i*2)

print(numbers2)

## Short version
numbers2_v2 = [i*2 for i in range(1,11) if i%2 ==0]
print(numbers2_v2)