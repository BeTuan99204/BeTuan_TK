package model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true)

@Entity
@Table(name = "Doctor")
public class Doctor extends Person implements Serializable {

    private String specialty;;

    @ToString.Exclude
    @OneToMany(mappedBy = "doctor")
    private List<Treatment> treatments;
}
