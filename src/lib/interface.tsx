export interface SessionInterface {
  expires: string;
  user: UserInterface;
}
export interface userCV {
  id: string;
  about?: string;
  education?: string;
  experience?: string;
  skills?: string[];
  firstName?: string;
  lastName?: string;
  registerID?: string;
  gender?: string;
  bDay?: Date;
  phoneNumber?: string;
  email: string;
  address?: string;
  career?: string;
  salaryExpectency?: number;
  workDuration?: string;
}

export interface UserInterface {
  email?: string;
  id?: string;
  image?: string;
  name?: string;
  role?: string;
  cvId?: string;
  cv?: userCV;
}
