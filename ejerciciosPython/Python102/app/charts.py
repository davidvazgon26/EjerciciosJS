import matplotlib.pyplot as plt

def generateBarChart(labels, values):
    fig, ax = plt.subplots()
    ax.bar(labels, values)
    plt.show()

def generatePieChart(labels, values):
    fig, ax = plt.subplots()
    ax.pie(values, labels=labels)
    ax.axis('equal')
    plt.show()

if __name__ == '__main__':
    labels = ['a','b','c']
    values = [30,40,90]
    # generateBarChart(labels, values)
    generatePieChart(labels, values)


