import java.sql.*;

public class TransactionHandlinginJDBC {
    private Connection conn;

    public TransactionHandlinginJDBC(Connection conn) {
        this.conn = conn;
    }

    public void transfer(int fromAccountId, int toAccountId, double amount) throws SQLException {
        try {
            conn.setAutoCommit(false);

            try (PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
                 PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {

                debit.setDouble(1, amount);
                debit.setInt(2, fromAccountId);
                debit.executeUpdate();

                credit.setDouble(1, amount);
                credit.setInt(2, toAccountId);
                credit.executeUpdate();

                conn.commit();
                System.out.println("Transfer successful!");
            } catch (SQLException e) {
                conn.rollback();
                System.out.println("Transfer failed, rolled back.");
                throw e;
            }
        } finally {
            conn.setAutoCommit(true);
        }
    }
}
