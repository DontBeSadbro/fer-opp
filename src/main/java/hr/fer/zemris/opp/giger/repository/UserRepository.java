package hr.fer.zemris.opp.giger.repository;

import hr.fer.zemris.opp.giger.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findAllByUsername(String username);

    Optional<User> findAllByEmail(String username);

    List<User> findAllByUsernameLike(String username);

    Optional<User> findUserByUsername(String username);

}
