const bcrypt = require('bcrypt');

const hastPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, salt);

    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if(result)
    console.log("Successfully LoggedIn.");
    else
    console.log("Wrong Password");
}
// hastPassword('monkey');
login('monke', '$2b$10$DVye7luaX8e.sn63X.47Ned1fs9nrFqxYjufWKlcjiivsmeKOYU3q');