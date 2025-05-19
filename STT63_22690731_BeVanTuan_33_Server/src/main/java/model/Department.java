package model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
@Table(name = "Department")

public class Department implements Serializable {

    @Id
    private String id;
    private String name;
    private String location;

    @ToString.Exclude
    @OneToMany(mappedBy = "department")
    private List<Treatment> treatments;


}
