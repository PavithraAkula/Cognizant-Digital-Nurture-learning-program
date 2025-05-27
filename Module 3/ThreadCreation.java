class MessageThread extends Thread {
    private String message;

    public MessageThread(String message) {
        this.message = message;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - Count: " + i);
            try {
                Thread.sleep(500); // Sleep for 0.5 seconds to better observe output
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }
}

public class ThreadCreation {
    public static void main(String[] args) {
        MessageThread thread1 = new MessageThread("Thread 1 Message");
        MessageThread thread2 = new MessageThread("Thread 2 Message");

        thread1.start();
        thread2.start();
    }
}
