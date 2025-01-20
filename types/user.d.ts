export interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  $createdAt: string;
  $updatedAt: string;
}
