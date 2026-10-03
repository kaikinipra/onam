import type {MessageEvent} from "@/src/types";export interface WhatsAppService{sendMessage(destination:string,message:string):Promise<MessageEvent>;}
