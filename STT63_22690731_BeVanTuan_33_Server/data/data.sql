-- Insert dữ liệu bảng Patient
INSERT INTO Patient (id, name, phone, address, dateOfBrith, gender) VALUES
                                                                        ('P001', 'Nguyen Van A', '0909123456', '123 Le Loi, HCM', '1980-05-12', 'Male'),
                                                                        ('P002', 'Tran Thi B', NULL, '456 Nguyen Trai, HCM', '1992-08-25', 'Female'),
                                                                        ('P003', 'Le Van C', '0987654321', NULL, '1975-01-30', 'Male');

-- Insert dữ liệu bảng Doctor
INSERT INTO Doctor (id, name, phone, specialty) VALUES
                                                     ('D001', 'Dr. Hoang', NULL, 'Cardiology'),
                                                     ('D002', 'Dr. Mai', '0912345678', 'Neurology'),
                                                     ('D003', 'Dr. Lan', '0922333444', 'Pediatrics');

-- Insert dữ liệu bảng Department
INSERT INTO Department (id, location, name) VALUES
                                                ('DP001', 'Building A', 'Cardiology Department'),
                                                ('DP002', 'Building B', 'Neurology Department'),
                                                ('DP003', NULL, 'Pediatrics Department');

-- Insert dữ liệu bảng Treatment
INSERT INTO Treatment (startDate, diagnosis, endDate, patient_id, department_id, doctor_id) VALUES
                                                                                                ('2025-04-01', 'Heart disease', '2025-04-15', 'P001', 'DP001', 'D001'),
                                                                                                ('2025-03-20', 'Migraine', NULL, 'P002', 'DP002', 'D002'),
                                                                                                ('2025-05-10', 'Flu', '2025-05-20', 'P003', 'DP003', 'D003');

select * from Patient;

select d.*
from Doctor d
         inner join Treatment t on d.id = t.doctor_id
         inner join  Department dp on t.department_id = dp.id
where dp.name = 'Cardiology Department'


select doctor_id,count(t.patient_id) as soluong from doctor d
                                                         inner join treatment t on d.id = t.doctor_id
where MONTH(t.startDate) = 4 and YEAR(t.startDate) = 2025
GROUP BY doctor_id
ORDER BY d.specialty DESC


select doctor_id, count(t.patient_id) as soluong
from Doctor d
         inner join Treatment t on d.id = t.doctor_id
where month(t.startDate) = 3 and YEAR(t.startDate) = 2025
group by doctor_id


select
from Treatment t
where month()

SELECT DISTINCT t.doctor
FROM Treatment t
WHERE t.department.name = :name