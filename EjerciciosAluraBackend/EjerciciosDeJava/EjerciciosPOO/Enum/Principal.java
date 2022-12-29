package EjerciciosPOO.Enum;


public class Principal {
    public static void main(String[] args) {
        for (ConstEnum dia : ConstEnum.values()) {
            System.out.println("El dia de la semana es: "+ dia);
        }

        ConstEnum domingo = ConstEnum.DOMINGO;

        System.out.println(domingo.name());
        System.out.println(domingo.ordinal());
        System.out.println(domingo.toString());
    }
}
