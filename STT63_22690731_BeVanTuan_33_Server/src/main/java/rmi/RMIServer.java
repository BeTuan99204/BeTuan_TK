package rmi;

import dao.DoctorDAO;
import dao.PaitentDAO;
import service.DoctorService;
import service.PaitentService;
import service.ipml.DoctorServiceIpml;
import service.ipml.PatientServiceIpml;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;

public class RMIServer {
    public static void main(String[] args) throws NamingException, RemoteException {
        Context context = new InitialContext();

        LocateRegistry.createRegistry(5731);

        DoctorDAO doctorDAO = new DoctorDAO();
        PaitentDAO paitentDAO =  new PaitentDAO();

        DoctorService doctorService = new DoctorServiceIpml(doctorDAO);
        PaitentService paitentService = new PatientServiceIpml(paitentDAO);

        context.bind(("rmi://DESKTOP-QH4UH4E.Local:5731/doctorService"), doctorService);
        context.bind(("rmi://DESKTOP-QH4UH4E.Local:5731/patientService"), paitentService);

        System.out.println("Server started......");
    }
}
