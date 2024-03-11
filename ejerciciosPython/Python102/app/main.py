import mod

data = [
    {'Country': 'Colombia', 'Population': 300},
    {'Country': 'Bolivia', 'Population': 250},
    {'Country': 'Mexico', 'Population': 350}
]

# Permite poder llamar como modulo y como script con def run para modulo y el if si lo llamo como script

def run():
    keys, values = mod.get_population()

    print(keys)
    print(values)

    result = mod.population_by_country(data, 'Mexico')
    print(result)

# if __name__ == '__main__':
    # run()