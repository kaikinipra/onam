import type {Offer} from "@/src/types";export interface OffersService{listForShop(shopId:string):Promise<Offer[]>;}
