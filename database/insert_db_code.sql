-- -----------------------
-- Insert to `user` table 
-- -----------------------

INSERT INTO `users_db`.`user` (`username`, `password`, `role`) VALUES ('mary', '$2a$10$ugiVLLsEAyeRPGqrfGx2Q.CcsbET8wqjBxMQZshZOSSFlgxpM6NDa', 'ROLE_ADMIN');
INSERT INTO `users_db`.`user` (`username`, `password`, `role`) VALUES ('john', '$2a$10$ugiVLLsEAyeRPGqrfGx2Q.CcsbET8wqjBxMQZshZOSSFlgxpM6NDa', 'ROLE_USER');
INSERT INTO `users_db`.`user` (`username`, `password`, `role`) VALUES ('tim', '$2a$10$ugiVLLsEAyeRPGqrfGx2Q.CcsbET8wqjBxMQZshZOSSFlgxpM6NDa', 'ROLE_USER');

-- -----------------------
-- Insert to `person` table 
-- -----------------------

INSERT INTO `users_db`.`person` (`first_name`, `last_name`, `email`, `user_id`) VALUES ('Mary', 'Public', 'mary@public.gr', '1');
INSERT INTO `users_db`.`person` (`first_name`, `last_name`, `email`, `user_id`) VALUES ('John', 'Doe', 'john@doe.gr', '2');
INSERT INTO `users_db`.`person` (`first_name`, `last_name`, `email`, `user_id`) VALUES ('Tim', 'Rose', 'tim@rose.gr', '3');
