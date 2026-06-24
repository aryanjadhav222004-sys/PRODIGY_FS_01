const bcrypt = require('bcryptjs');

const passwords = {
  'Admin@123': 'admin',
  'John@12345': 'johndoe',
  'Jane@12345': 'janedoe',
  'Test@12345': 'testuser'
};

async function generateHashes() {
  for (const [password, username] of Object.entries(passwords)) {
    const hash = await bcrypt.hash(password, 10);
    console.log(`${username}: ${hash}`);
  }
}

generateHashes();