name = "otra vez"
last_name = "yo merangas"

print(name)
print(last_name)

fullname = name +" "+ last_name
print(fullname)

quote = "I'm David"

print(quote)

template = "Hi, " + quote + " nad my lastname is: " + last_name

print(template)

template2 = "Hi, {} and my lastname is {}".format(name, last_name) 
print(template2)

template3 = f"Hi, {name} and my lastname is {last_name}"
print(template3)