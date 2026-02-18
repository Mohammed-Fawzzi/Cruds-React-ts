export type User = {
  id: string;
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
  age: string | number;
  city: string;
  role: string;
  active?: boolean;
};
