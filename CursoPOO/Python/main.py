
from car import Car
from account import Account

if __name__ == "__main__":
    print("Hola Python")

    car = Car("RHGSDG", Account("David Vazquez", "DOCPy"))
    print(vars(car))
    print(vars(car.driver))
