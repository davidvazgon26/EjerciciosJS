def increment(x):
    return x+1

print(increment(10))

## Lambda

increment2 = lambda x:x+1

print(increment2(20))

fullName = lambda name, lastName: f'My Full name is {name.title()} {lastName.title()}'

text = fullName('David', 'Vaz')

print(text)