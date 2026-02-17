export type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone?: string;
  age: number;
  city: string;
  role: string;
  active?: boolean;
};

export type UserInput = {
  name: string;
  userName: string;
  email: string;
  phone?: string;
  age: string;
  city: string;
  role: string;
  active?: boolean;
};
