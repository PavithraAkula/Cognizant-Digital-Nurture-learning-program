public class TypeCastingExample {
    public static void main(String[] args){
        double myDouble=9.78;
        int myInt=(int) myDouble;
        System.out.println("Double value: "+myDouble);
        System.out.println("After casting double to int: "+myInt);
        int anotherInt=42;
        double anotherDouble=anotherInt;
        System.out.println("Int value: "+anotherInt);
        System.out.println("After casting int to double: "+anotherDouble);
    }
}
