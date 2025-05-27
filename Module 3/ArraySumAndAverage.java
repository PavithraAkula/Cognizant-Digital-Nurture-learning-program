import java.util.Scanner;
public class ArraySumAndAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int size = scanner.nextInt();
        int[] numbers = new int[size];
        int sum = 0;
        for (int i = 0; i < size; i++) {
            System.out.print("Enter element " + (i + 1) + ": ");
            numbers[i] = scanner.nextInt();
            sum += numbers[i];
        }
        double average = (double) sum / size;
        System.out.println("Sum of elements: " + sum);
        System.out.println("Average of elements: " + average);
        scanner.close();
    }
}
