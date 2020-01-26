export const allUsers = [
  {
    id: new Date().getTime(),
    email: "user@user.user",
    password: "123456",
    invlovledBoards: [],
    assignedTeam: []
  }
];

export class User {
  constructor(email, password) {
    this.id = new Date().getTime();
    this.email = email;
    this.password = password;
    this.involvedBoards = [];
    this.assignedTeam = [];
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  setRole(role) {
    this.role = role;
  }
  getRole() {
    return this.role;
  }
}
