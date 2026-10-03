import type {CustomerEvent} from "@/src/types";export interface EventsService{record(event:Omit<CustomerEvent,"id">):Promise<void>;}
