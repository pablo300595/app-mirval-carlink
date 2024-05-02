import { Address } from "./address.model";
import { ContactInfo } from "./contact-info.model";
import { UserRole } from "./user-role.model";

export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    address: Address;
    contactInfo: ContactInfo;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    profileImage?: string | null;
    bio?: string;
    socialLinks?: { [key: string]: string };
    preferences?: { [key: string]: any };
}
  