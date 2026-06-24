const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const demoUsers = [
  { username: 'admin', email: 'admin@prodigy.com', password: 'Admin@123', role: 'admin' },
  { username: 'johndoe', email: 'john@example.com', password: 'John@12345', role: 'user' },
  { username: 'janedoe', email: 'jane@example.com', password: 'Jane@12345', role: 'user' },
  { username: 'testuser', email: 'test@example.com', password: 'Test@12345', role: 'user' }
];

async function seedDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('Connected to database!');

    // Clear existing users (optional)
    await connection.execute('DELETE FROM refresh_tokens');
    await connection.execute('DELETE FROM users');
    console.log('Cleared existing users');

    // Insert demo users
    for (const user of demoUsers) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await connection.execute(
        'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
        [user.username, user.email, hashedPassword, user.role]
      );
      console.log(`✓ Inserted: ${user.username} (${user.email})`);
    }

    console.log('\n✓ Database seeded successfully!');
    console.log('\nDemo Accounts:');
    demoUsers.forEach(user => {
      console.log(`  Email: ${user.email} | Password: ${user.password} | Role: ${user.role}`);
    });

    await connection.end();
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
}

seedDatabase();
