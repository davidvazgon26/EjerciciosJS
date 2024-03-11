import csv

def read_csv(path):
    with open(path, 'r') as csvFile:
        reader = csv.reader(csvFile, delimiter =',')
        header = next(reader)
        data = []

        for row in reader:
            iterable = zip(header, row)
            dictionary = {key:value for key, value in iterable}
            data.append(dictionary)
        return data

if __name__ == '__main__':
    data = read_csv('./app/data.csv')
    print(data)


