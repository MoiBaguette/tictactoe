import java.io.*;
import java.net.Socket;

public class Connect{
    private Socket socket;
    private InputThread inputThread;
    private OutputThread outputThread;
    public void connect(String hostname, int port){
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
    public StringBuilder getReply() {
        return inputThread.getReply();
    }
    public void setCommand(String command){
        outputThread.setCommand(command);
    }
    public boolean readReady(){
        return inputThread.isReadReady();
    }
    public void resetReadReady(){
        inputThread.resetReadReady();
    }
}
class InputThread extends Thread{
    private Socket socket;
    private BufferedReader in;
    private boolean state;
    private boolean readReady;
    private StringBuilder reply = new StringBuilder();
    public InputThread(Socket socket) {
        this.socket = socket;
        this.state = true;
        this.readReady = false;
    }
    public void run(){
        boolean beenHere = false;
        try{
            in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            while (state) {
                while (in.ready()) {
                    reply.append(in.readLine());
                    sleep(100);
                    beenHere = true;
                }
                if(beenHere){
                    readReady = true;
                    beenHere = false;
                }
            }
        }catch(Exception e){
            System.out.println("InputThread failed");
        }
    }
    public void setState(boolean state){
        this.state = state;
    }
    public StringBuilder getReply() {
        return this.reply;
    }
    public boolean isReadReady(){
        return readReady;
    }
    public void resetReadReady(){
        readReady = false;
        reply = null;
    }
}

class OutputThread extends Thread{
    private Socket socket;
    private boolean state;
    private String command;
    public OutputThread(Socket socket){
        this.socket = socket;
        this.state = true;
    }
    public void run(){
        try{
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            while (state) {
                System.out.println(command);
                if (command != null) {
                    out.println(command + "\n");
                    System.out.println(command);
                    command = null;
                }
            }
        }catch(Exception e){
            System.out.println("Output Thread failed");
        }
    }
    public void setState(boolean state){
        this.state = state;
    }
    public void setCommand(String command){
        this.command = command;
    }
}


