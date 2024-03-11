file = open('./17_text.txt')
print(file.read())
file.close()

print("****** Linea por linea *********")
file = open('./17_text.txt')
print(file.readline())
print(file.readline())
print(file.readline())
file.close()

print("****** Linea por linea 2 *********")
file = open('./17_text.txt')
for line in file: 
    print(line)
file.close()

print("****** Linea por linea con with *********")
with open('./17_text.txt') as file:
    for line in file:
        print(line)