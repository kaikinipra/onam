import type {AIRecommendation} from "@/src/types";export interface AIService{getRecommendations(shopId:string):Promise<AIRecommendation[]>;}
