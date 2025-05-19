package service.ipml;

import dao.DoctorDAO;
import model.Doctor;
import service.DoctorService;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;
import java.util.List;
import java.util.Map;

public class DoctorServiceIpml extends UnicastRemoteObject implements DoctorService {
    private DoctorDAO doctorDAO;

    public DoctorServiceIpml(DoctorDAO doctorDAO) throws RemoteException {
        super();
        this.doctorDAO = doctorDAO;
    }

    @Override
    public List<Doctor> getDoctorsByDepartment(String deptName) throws RemoteException {
        return doctorDAO.getDoctorsByDepartment(deptName);
    }

    @Override
    public Map<Doctor, Integer> getNoTreatmentByDoctor(int year, int month) throws RemoteException {
        return doctorDAO.getNoTreatmentByDoctor(year,month);
    }
}
