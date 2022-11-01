import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Tournament {
    private String serverReply;
    private TournamentThread thread; // this waits for the connect threads to be ready
    private Connect connect = new Connect();
	private StringBuilder something;
    public void start(){
        //open socket
        connect.connect("localhost", 7789);
        // listen for reply
		thread = new TournamentThread(connect);
		thread.start();
		while (thread.isAlive()) {}
		System.out.println(thread.getState());
		something = connect.getReply();
		System.out.println(something);
		connect.resetReadReady();
		connect.setCommand("login Gerco");
		TournamentThread thread1 = new TournamentThread(connect);
		thread1.start();
		while (thread1.isAlive()) {}
		something = connect.getReply();
	}
}
class TournamentThread extends Thread {
    private Connect connect;

    public TournamentThread(Connect connect) {
        this.connect = connect;
    }

    public void run() {
        try {
			while (!connect.readReady())
				sleep(100);
        } catch (Exception e) {
            System.out.println("InputThread failed");
        }
    }
}