import java.io.*;
import java.net.Socket;
import java.util.LinkedList;
import java.util.Queue;

public class Connect{
    private Socket socket;
    private InputThread inputThread;
    private OutputThread outputThread;
    public Connect(String hostname, int port){
        try {
            socket = new Socket(hostname, port);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        //incoming communication thread
        inputThread = new InputThread(socket);
        inputThread.start();
        //outbound communication thread
        outputThread = new OutputThread(socket);
        outputThread.start();
    }
    public String getReply(){
        return inputThread.getReply();
    }
    public void setCommand(String command){
        outputThread.setCommand(command);
        System.out.println("command got set");
    }
}
class InputThread extends Thread{
    private Socket socket;
    private BufferedReader in;
    private Queue<String> reply = new LinkedList<String>();
    public InputThread(Socket socket) {
        this.socket = socket;
    }
    public void run(){
        try{
            in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            while (true) {
                if (in.ready()) {
                    reply.add(in.readLine());
                }
            }
        }catch(Exception e){
            System.out.println("InputThread failed");
        }
    }
    public String getReply() {
        return reply.poll();
    }
}

class OutputThread extends Thread{
    private Socket socket;
    private Queue<String> command = new LinkedList<String>();
    public OutputThread(Socket socket){
        this.socket = socket;
    }
    private String msg;
    public void run(){
        try{
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            while (true) {
                if (command.element() != null) {
                    msg = command.poll();
                    System.out.println(msg);
                    out.println(msg + "\n");
                }
            }
        }catch(Exception e){
            System.out.println("Output Thread failed");
        }
    }
    public void setCommand(String command){
        this.command.add(command);
        System.out.printf("command got added");
    }
}


