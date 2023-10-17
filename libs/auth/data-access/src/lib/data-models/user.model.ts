export interface User {
  id: number;
  email: string,
  token: string,
}
export interface RegisterUserRequest {
  auth: any
  username: string;
  password: string;
}

export interface LoginUserRequest {
  auth: any
  username: string;
  password: string;

}


