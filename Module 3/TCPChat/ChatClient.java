package TCPChat;

import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 5000)) {
            System.out.println("Connected to server.");

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

            BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));

            String msgToServer, msgFromServer;

            while (true) {
                System.out.print("You: ");
                msgToServer = consoleInput.readLine();
                out.println(msgToServer);

                if (msgToServer.equalsIgnoreCase("bye")) {
                    break;
                }

                msgFromServer = in.readLine();
                System.out.println("Server: " + msgFromServer);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

