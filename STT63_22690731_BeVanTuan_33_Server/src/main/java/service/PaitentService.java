package service;

import model.Patient;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface PaitentService extends Remote {
    boolean addPatient(Patient patient) throws RemoteException;
}
