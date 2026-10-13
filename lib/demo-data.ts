export type Campaign = {
 id: string; slug: string; title: string; description: string; prizeTitle: string;
 prizeValueMinor: string; currency: "NGN"; targetMinor: string; raisedMinor: string;
 startsAt: string; endsAt: string; status: "DEMO"; entryMode: "FREE"|"PAID"|"BOTH";
 settlementPolicy: string; rulesVersion: number; demoOnly: true;
};
export const demoCampaigns: Campaign[] = [
 {id:"demo-md-001",slug:"home-keys-demo",title:"Your next set of keys",description:"Illustrative campaign for the WEWIN interface preview.",prizeTitle:"Illustrative 3-bedroom home",prizeValueMinor:"10000000000",currency:"NGN",targetMinor:"10000000000",raisedMinor:"6850000000",startsAt:"2026-10-01T00:00:00.000Z",endsAt:"2026-10-14T23:59:59.000Z",status:"DEMO",entryMode:"BOTH",settlementPolicy:"No real entries; no live settlement.",rulesVersion:1,demoOnly:true},
 {id:"demo-md-002",slug:"dream-suv-demo",title:"Drive your dream",description:"Illustrative campaign for interface testing.",prizeTitle:"Illustrative new SUV",prizeValueMinor:"6000000000",currency:"NGN",targetMinor:"6000000000",raisedMinor:"4120000000",startsAt:"2026-10-01T00:00:00.000Z",endsAt:"2026-10-16T23:59:59.000Z",status:"DEMO",entryMode:"BOTH",settlementPolicy:"No real entries; no live settlement.",rulesVersion:1,demoOnly:true}
];