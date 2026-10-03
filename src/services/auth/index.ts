export type AuthIdentity={userId:string;shopId:string};export interface AuthService{signInWithPhone(phone:string):Promise<void>;verifyCode(code:string):Promise<AuthIdentity>;signOut():Promise<void>;}
