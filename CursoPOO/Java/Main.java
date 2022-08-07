package CursoPOO.Java;

class Main{ //La clase debe tener el mismo nombre del archivo

    public static void main(String[] args) {
        System.out.println("Hola Java");
        Car car = new Car("FHFGSG", new Account("David Vazquez", "DAV1234"));
       // car.license = "FHFGSG";
       // car.driver = "David Vazquez";
        car.passenger = 4;
        car.printDataCar();
    }
}