package com.api.dto;

import com.api.model.Person;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

@Data
@NoArgsConstructor
public class PersonDTO {

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private Long userId;

    public PersonDTO(Person person) {
        BeanUtils.copyProperties(person, this);
        if (person.getUser() != null) {
            this.userId = person.getUser().getId();
        }
    }
}
