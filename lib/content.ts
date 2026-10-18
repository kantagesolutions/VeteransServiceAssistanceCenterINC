export const contact = {phone:'762-716-0434', email:'vsainc18@gmail.com', address:'2326 Wrightsboro Road, Augusta, GA 30904', donate:'https://www.paypal.com/ncp/payment/TJWX8HT7WPP8Q'};
export const introduction = 'Veterans Service & Assistance Center, INC. helps veterans and their families connect with housing assistance, advocacy, suicide prevention, and wellness resources, community support, education, outreach, and other available resources.';
export const mission = 'Our mission is to provide support and resources to veterans and their families while honoring their service and sacrifice.';
export const missionDetail = 'Through assistance, education, outreach, and advocacy, we work to help veterans and their families address challenges involving housing, wellness, employment, education, financial stability, and access to community resources.';
export const services = [
 {title:'Housing Assistance',description:'Helping veterans who are homeless or at risk of homelessness identify housing resources and community programs.',category:'Housing Resources',icon:'home'},
 {title:'Veteran & Family Support',description:'Connecting veterans and their families with resources and programs that may address their individual needs.',category:'Military & Veterans',icon:'people'},
 {title:'Advocacy',description:'Supporting veterans with dignity and respect and helping them identify appropriate services and resources.',category:'Veteran Service Organizations & Claim Offices',icon:'scales'},
 {title:'Suicide Prevention & Wellness',description:'Education, awareness, outreach, and connections to appropriate mental health and crisis resources.',category:'VA National Hotlines',icon:'heart'},
 {title:'Community Resources',description:'Connections to food, employment, transportation, healthcare, education, financial and family resources.',category:'Food Resources',icon:'sun'},
 {title:'Education & Outreach',description:'Working with community organizations to reach veterans and improve awareness of available assistance.',category:'Military & Veterans',icon:'book'}
];
export const story = "Founder, Retired SSG Tonya L. Price, has served in the US Army for 20 years. During her service, she served those doing what she loved as a Behavioral Health Specialist. Since retirement, she has used her knowledge and experience from her time in active duty to help those become educated on what benefits they are eligible for as well as helping fellow soldiers, even after their service. She has strived to do as much as possible for those who have found themselves in difficult situations, such as losing their home or becoming unemployed. Retired SSG Price has dedicated countless time to help and has helped over 2,000 veterans within the CSRA as well in other states by guiding them into the right direction whether she could help or knew someone who could.";
export const involvement = [
 {title:'Volunteer',description:'Give your time and experience to support veterans and families in our community.',cta:'Reach Out',topic:'Volunteering'},
 {title:'Become a Partner',description:'Work with us to connect veterans with services, resources, education, and opportunities.',cta:'Connect With Us',topic:'Partnership'},
 {title:'Make a Donation',description:'Help us continue providing outreach, resources, education, advocacy, and assistance.',cta:'Donate',topic:'Donation'}
];
export const resourceHref=(category:string)=>`/resource-center/?category=${encodeURIComponent(category)}`;
