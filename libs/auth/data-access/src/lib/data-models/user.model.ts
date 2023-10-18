export interface User {
  id: number;
  email: string,
  token: string,
}
export interface RegisterUserRequest {
  username: string;
  password: string;
}

export interface LoginUserRequest {
  username: string;
  password: string;

}


