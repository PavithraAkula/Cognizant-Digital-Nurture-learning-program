class ClassAndObjectCreation {
    String make;
    String model;
    int year;
    ClassAndObjectCreation(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    void displayDetails() {
        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Car Year: " + year);
    }
    public static void main(String[] args) {
        ClassAndObjectCreation car1 = new ClassAndObjectCreation("Toyota", "Corolla", 2020);
        ClassAndObjectCreation car2 = new ClassAndObjectCreation("Honda", "Civic", 2022);
        car1.displayDetails();
        System.out.println();
        car2.displayDetails();
    }
}
