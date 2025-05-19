package dao;

import jakarta.persistence.EntityManager;
import model.Doctor;
import util.JPAUtils;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class DoctorDAO {

    public EntityManager em;
    public DoctorDAO() {
        this.em = JPAUtils.getEntityManager();
    }

    public List<Doctor> getDoctorsByDepartment(String deptName) {
        String jpql = """
                select d from Doctor d
                join d.treatments t
                join t.department de
                where de.name = :deptName
                """;
        return em.createQuery(jpql,Doctor.class).setParameter("deptName",deptName).getResultList();

    }

    public Map<Doctor, Integer> getNoTreatmentByDoctor(int year, int month) {
        String jpql = """
        select d, count(t) from Doctor d
        join d.treatments t
        where function('month', t.startDate) = :month
          and function('year', t.startDate) = :year
        group by d
        order by d.specialty
    """;

        Map<Doctor, Integer> map = new LinkedHashMap<>();

        List<Object[]> results = em.createQuery(jpql, Object[].class)
                .setParameter("year", year)
                .setParameter("month", month)
                .getResultList();

        for (Object[] row : results) {
            Doctor doctor = (Doctor) row[0];
            Integer count = ((Long) row[1]).intValue();
            map.put(doctor, count);
        }

        return map;
    }


    public static void main(String[] args) {
        DoctorDAO doctorDAO = new DoctorDAO();
//        List<Doctor> list = doctorDAO.getDoctorsByDepartment("Cardiology Department");
//        System.out.println("Danh sach doctor: " + list);

        Map<Doctor, Integer> map = doctorDAO.getNoTreatmentByDoctor(2025, 3);
        for (Map.Entry<Doctor, Integer> entry : map.entrySet()) {
            System.out.println("Doctor: " + entry.getKey() + ", Number of treatments: " + entry.getValue());
        }

    }

}
