package dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import model.Patient;
import util.JPAUtils;

import java.time.LocalDate;

public class PaitentDAO {

    public EntityManager em;

    public PaitentDAO() {
        this.em = JPAUtils.getEntityManager();
    }

    public boolean addPatient(Patient patient) {
        String id = patient.getId();
        if(!id.matches("\\d{3}-\\d{2}-\\d{4}")){
            return false;
        }

        EntityTransaction tr = em.getTransaction();
        try {
            tr.begin();
            em.persist(patient);
            tr.commit();
            return true;

        }catch (Exception e) {
            if (tr.isActive())
                tr.rollback();
            return false;
        }
    }

    public static void main(String[] args) {
        PaitentDAO patientDAO = new PaitentDAO();
        //
//        Patient patient = new Patient();
//        patient.setDateOfBrith(LocalDate.of(2025, 05, 15));
//        patient.setAddress("12 Nguyen Van Bao");
//        patient.setGender("Male");
//        patient.setId("121-11-1111");
//        patient.setName("Tam Thanh");
//        patient.setPhone("0343632524");
//
//        boolean result = patientDAO.addPatient(patient);
//        System.out.println(result ? "Patient Succesfull" : "Patient Failed");


        Patient patient = new Patient();
        patient.setDateOfBrith(LocalDate.of(2025, 01, 15));
        patient.setAddress("12 Nguyen Van Bao");
        patient.setGender("Male");
        patient.setId("145-11-1111");
        patient.setName("Be tuan");
        patient.setPhone("0343632524");

        boolean result = patientDAO.addPatient(patient);
        System.out.println(result ? "Patient Succesfull" : "Patient Failed");
    }



}
