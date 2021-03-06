/*
 * Autor: Melanie Hammerschmidt
 * Reviewer: Lukas, Patrick
 * 
 * Description: TextAnalyser 
 * main class for text analysis
 * initializes Calculator data and starts TimerTask every 5 seconds
 * 
 */

package Project;

import java.io.File;
import java.util.Date;
import java.util.Timer;

public class Analyser {	
	public static final int TIMER_START = 0;
	public static final int TIMER_RATE = 5000;

	public static void main(String[] args) 
	{
		//get original path of JAR-File
		String path = new File(System.getProperty("java.class.path")).getAbsoluteFile().getParentFile().toString();

		//first initialisations in Calculator
		Calculator calc = new Calculator();
		calc.doInitialisations(path);
			
		//start analyser which is scheduled every 5 seconds
		Timer t = new Timer();
		AnalyserTask aT = new AnalyserTask(args[0], args[1], calc, new Date().getTime(), t, path);
		t.scheduleAtFixedRate(aT, TIMER_START, TIMER_RATE);
	}
}