public class TypeCastingExample {
    public static void main(String[] args) {
        double doubleValue = 9.78;
        int intValue = (int) doubleValue; // Narrowing casting
        int intNum = 10;
        double doubleNum = intNum; // Widening casting

        System.out.println("Double to int: " + intValue);
        System.out.println("Int to double: " + doubleNum);
    }
}