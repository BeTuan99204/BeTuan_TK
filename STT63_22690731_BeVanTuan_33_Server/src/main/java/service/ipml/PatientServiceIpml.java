package service.ipml;

import dao.PaitentDAO;
import model.Patient;
import service.PaitentService;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class PatientServiceIpml extends UnicastRemoteObject implements PaitentService {
    private  PaitentDAO paitentDAO;

    public PatientServiceIpml(PaitentDAO paitentDAO) throws RemoteException{
        super();
        this.paitentDAO = paitentDAO;
    }
    @Override
    public boolean addPatient(Patient patient) throws RuntimeException {
        return paitentDAO.addPatient(patient);
    }
}
