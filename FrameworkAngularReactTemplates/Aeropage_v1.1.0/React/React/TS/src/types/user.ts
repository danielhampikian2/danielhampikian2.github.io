export type UserType = {
  id: string
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  role: 'admin' | 'user'
  token: string
}

export type AuthContextType = {
  session: UserType | undefined;
  isAuthenticated: boolean;
  saveSession: (session: UserType) => void;
  removeSession: () => void;
}
