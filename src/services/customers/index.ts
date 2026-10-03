import type {Customer} from "@/src/types";export interface CustomersService{findForShop(shopId:string,query:string):Promise<Customer[]>;}
