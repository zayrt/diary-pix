export class User {
  id: string;
  email: string;
  username: string;
  token: string;

  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
    this.token = user.authentication_token;
  }
}
