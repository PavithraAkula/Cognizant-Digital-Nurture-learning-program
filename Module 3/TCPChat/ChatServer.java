package TCPChat;

import java.io.*;
import java.net.*;

public class ChatServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(5000)) {
            System.out.println("Server started. Waiting for client...");
            Socket socket = serverSocket.accept();
            System.out.println("Client connected.");

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

            BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));

            String msgFromClient, msgToClient;

            while (true) {
                msgFromClient = in.readLine();
                if (msgFromClient.equalsIgnoreCase("bye")) {
                    System.out.println("Client disconnected.");
                    break;
                }
                System.out.println("Client: " + msgFromClient);

                System.out.print("You: ");
                msgToClient = consoleInput.readLine();
                out.println(msgToClient);
            }

            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
