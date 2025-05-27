// Base class
class  InheritanceExample {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass
class Dog extends  InheritanceExample{
    @Override
    void makeSound() {
        System.out.println("Bark");
    }

    public static void main(String[] args) {
        InheritanceExample genericAnimal = new InheritanceExample();
        Dog myDog = new Dog();

        genericAnimal.makeSound();  // Output: Animal makes a sound
        myDog.makeSound();          // Output: Bark
    }
}
