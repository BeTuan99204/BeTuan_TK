package service;

import model.Doctor;

import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;

public interface DoctorService extends Remote {
    List<Doctor> getDoctorsByDepartment(String deptName) throws RemoteException;
    Map<Doctor, Integer> getNoTreatmentByDoctor(int year, int month) throws RemoteException;
}
