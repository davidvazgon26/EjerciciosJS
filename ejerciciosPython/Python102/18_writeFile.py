with open('./17_text.txt', 'r+') as file:  #r+ escrcibe debajo de lo que ya tenia el archivo
    for line in file:
        print(line)
    file.write('\n')
    file.write('Nueva linea\n')
    file.write('Mas linea\n')
    file.write('Una mas\n')

with open('./17_text.txt', 'w+') as file:  # w+ sobre escribe el archivo
    for line in file:
        print(line)
    file.write('\n')
    file.write('Nueva linea\n')
    file.write('Mas linea\n')
    file.write('Una mas\n')
