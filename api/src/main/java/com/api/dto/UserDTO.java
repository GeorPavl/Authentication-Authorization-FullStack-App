package com.api.dto;

import com.api.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.util.Date;

@Data
@NoArgsConstructor
public class UserDTO {

    private Long id;

    private String username;

    private String password;

    private String role;

    private Boolean enabled;

    private Date createTime;

    private Date updateTime;

    private PersonDTO personDTO;

    private String token;

    public UserDTO(User user) {
        BeanUtils.copyProperties(user, this);

        if (user.getPerson() != null) {
            this.personDTO = new PersonDTO(user.getPerson());
        }
    }
}
