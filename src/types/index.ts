export type Shop={id:string;name:string;phone?:string;createdAt?:string};
export type Offer={id:string;shopId:string;title:string;description?:string;active:boolean;startsAt?:string;endsAt?:string};
export type Customer={id:string;displayName?:string;phoneLast4?:string;createdAt?:string};
export type CustomerEvent={id:string;shopId:string;customerId?:string;type:string;occurredAt:string};
export type AIRecommendation={id:string;shopId:string;kind:string;summary:string};
export type MessageEvent={id:string;channel:"whatsapp"|"other";direction:"inbound"|"outbound";occurredAt:string};
