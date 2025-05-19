package rmi;

import model.Doctor;
import model.Patient;
import service.DoctorService;
import service.PaitentService;

import java.net.MalformedURLException;
import java.rmi.Naming;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class RMIClient {
    public static void main(String[] args) {
        try {
            DoctorService doctorService = (DoctorService) Naming.lookup("rmi://DESKTOP-QH4UH4E.Local:5731/doctorService");
            PaitentService patientService = (PaitentService) Naming.lookup("rmi://DESKTOP-QH4UH4E.Local:5731/patientService");

            Scanner scanner = new Scanner(System.in);
            int choice;
            do {
                System.out.println("\n============== MENU ==============");
                System.out.println("1. Thêm patient");
                System.out.println("2. Danh sach bac si theo ten khoa");
                System.out.println("3. Thong ke so luot dieu tri cua benh nhan theo thang/nam");
                System.out.println("0. Thoát");
                System.out.println("====================================");
                System.out.print("Chọn: ");
                choice = Integer.parseInt(scanner.nextLine());

                switch (choice){
                    case 1 -> {

//                        Enter ID:
//                        132-15-3542
//                        Enter name:
//                        tya
//                        Enter phone:
//                        0346013162
//                        Enter address:
//                        jaas
//                        Enter gender (Male/Female):
//                        Male
//                        Enter Date of birth (yyyy-MM-dd):
//                        2000-04-04
//                                ? Add Successfully
                        Patient patient = new Patient();

                        System.out.println("Enter ID:");
                        patient.setId(scanner.nextLine().trim());

                        System.out.println("Enter name:");
                        patient.setName(scanner.nextLine().trim());

                        System.out.println("Enter phone: ");
                        patient.setPhone(scanner.nextLine().trim());

                        System.out.println("Enter address: ");
                        patient.setAddress(scanner.nextLine().trim());

                        System.out.println("Enter gender (Male/Female): ");
                        String gender = scanner.nextLine().trim();
                        if (!gender.equalsIgnoreCase("Male") && !gender.equalsIgnoreCase("Female")) {
                            System.out.println("❌ Gender must be 'Male' or 'Female'");
                            break; // Thoát khỏi case nếu sai
                        }
                        patient.setGender(gender);

                        System.out.println("Enter Date of birth (yyyy-MM-dd): ");
                        try {
                            String dob = scanner.nextLine().trim();
                            patient.setDateOfBrith(LocalDate.parse(dob));
                        } catch (Exception e) {
                            System.out.println("❌ Invalid date format. Please use yyyy-MM-dd");
                            break; // Thoát khỏi case nếu sai
                        }

                        // Gọi thêm vào database
                        boolean result = patientService.addPatient(patient);
                        System.out.println(result ? "✅ Add Successfully" : "❌ Add Failed");
                    }

                    case 2 -> {
                        System.out.println("Enter DepartmentName: ");
                        String departmentName = scanner.nextLine();
                        List<Doctor> list = doctorService.getDoctorsByDepartment(departmentName);
                        if (list.isEmpty()){
                            System.out.println("Khong tim thay bac si theo ten khoa");
                        }
                        else {
                            System.out.println("\nDanh sach bac si theo ten khoa: " + list);
                        }
                    }
                    case 3 -> {
                        System.out.println("Enter month: ");
                        int month = Integer.parseInt(scanner.nextLine());

                        System.out.println("Enter year: ");
                        int year = Integer.parseInt(scanner.nextLine());

                        Map<Doctor, Integer> result = doctorService.getNoTreatmentByDoctor(month,year);
                        if (result.isEmpty()){
                            System.out.println("Khong co du lieu trong thang/nam nay!");
                        }else {
                            result.forEach((doctor, count) ->
                                    System.out.printf("DoctorID: %-10s | Quantity: %-20d\n", doctor.getId(), count)
                            );

                        }

                    }


                    case 0 -> System.out.println("Thoat chuong trinh");
                    default -> System.out.println("Lua chon khong phu hop!");

                }

            }while (choice!=0);
            scanner.close();


        }catch (MalformedURLException | NotBoundException | RemoteException e){
            e.printStackTrace();
            System.out.println("Server stopped......");
        }
    }
}
