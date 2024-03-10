numbers = [1,2,3,4,5,6,7,8,9]

new_numbers = list(filter(lambda item: item%2 ==0, numbers))

print(new_numbers)


newDict = [
    {"Name":'David', "Age": 20},{"Name":'Ale', "Age": 18},{"Name":'Jose', "Age": 15}
]

myList = list(filter(lambda d : d["Age"]>=18, newDict))
print(myList)