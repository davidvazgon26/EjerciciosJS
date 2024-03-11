import mod
import readCSV
import charts


def run():
    data = readCSV.read_csv('./app/data.csv')
    country = input('Type Country =>')

    result = mod.population_by_country(data, country)
    
    if len(result)> 0:
        country = result[0]
        labels, values = mod.get_population(country)
        charts.generateBarChart(labels, values)

if __name__ == '__main__':
    run()