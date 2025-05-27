public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2; // Multiplication (*) has higher precedence than addition (+)
        System.out.println("10 + 5 * 2 = " + result1); // Expected 10 + (5*2) = 20
        
        int result2 = (10 + 5) * 2; // Parentheses override precedence
        System.out.println("(10 + 5) * 2 = " + result2); // Expected (10+5)*2 = 30

        int result3 = 100 / 5 + 3 * 2; // Division and multiplication have same precedence, evaluated left to right
        System.out.println("100 / 5 + 3 * 2 = " + result3); // (100/5)=20 + (3*2)=6 => 26

        int result4 = 100 / (5 + 3) * 2; // Parentheses first
        System.out.println("100 / (5 + 3) * 2 = " + result4); // 100/8=12 * 2=24

        int result5 = 10 + 20 - 5 * 2 / 2; // Multiplication and division first, left to right
        // 5*2=10, 10/2=5, then 10+20=30, finally 30-5=25
        System.out.println("10 + 20 - 5 * 2 / 2 = " + result5); // 25
    }
}
