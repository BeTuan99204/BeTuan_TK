import jakarta.persistence.EntityManager;
import jakarta.persistence.Persistence;
import util.JPAUtils;

public class Main {
    public static void main(String[] args) {
        EntityManager em = Persistence.createEntityManagerFactory("mariadb-pu").createEntityManager();
    }
}
