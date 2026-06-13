/* Mock dataset for the Ecosystem DB UI kit — agrifood-tech startups,
   investors, people and news. Shapes mirror src/types in the app. */

const SECTORS = [
  'Agritech',
  'Innovative Food',
  'Food Logistics & Delivery',
  'In-store Retail & Restaurant Tech',
  'Kitchen & Cooking Tech',
  'Food as a Medicine',
];

const SECTOR_COLORS = {
  'Agritech': '#1D9E75',
  'Innovative Food': '#639922',
  'Food Logistics & Delivery': '#EF9F27',
  'In-store Retail & Restaurant Tech': '#D85A30',
  'Kitchen & Cooking Tech': '#97C459',
  'Food as a Medicine': '#7F77DD',
};
const sectorColor = (s) => SECTOR_COLORS[s] || '#888780';

const NODE_COLORS = { startup: '#2563eb', investor: '#16a34a', person: '#9333ea', corporate: '#ea580c' };

const FUNDING_STAGES = ['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Growth', 'Bootstrapped', 'Grant'];

const STARTUPS = [
  { id:'s1', company_name:'Mosa Meat', sector:'Food as a Medicine', category:'New Food Products', technology:'Cultivated meat', funding_stage:'Series B', city:'Maastricht', country:'Netherlands', region:'Europe', founded_year:2016, employees:160, total_funding:'$96M', website_url:'mosameat.com', keywords:['cultivated meat','cell-ag','beef'], short_overview:'Cultivated beef grown directly from animal cells, without slaughter.' },
  { id:'s2', company_name:'Apeel Sciences', sector:'Food Logistics & Delivery', category:'Packaging', technology:'Edible coating', funding_stage:'Growth', city:'Santa Barbara', country:'United States', region:'North America', founded_year:2012, employees:480, total_funding:'$640M', website_url:'apeel.com', keywords:['shelf-life','food waste','coating'], short_overview:'Plant-based coatings that double the shelf life of fresh produce.' },
  { id:'s3', company_name:'Infarm', sector:'Agritech', category:'New Cultivation Systems', technology:'Vertical farming', funding_stage:'Series C', city:'Berlin', country:'Germany', region:'Europe', founded_year:2013, employees:600, total_funding:'$600M', website_url:'infarm.com', keywords:['vertical farming','indoor','leafy greens'], short_overview:'Modular vertical farms deployed directly in grocery stores and hubs.' },
  { id:'s4', company_name:'Mycorena', sector:'Innovative Food', category:'New Ingredients', technology:'Fermentation', funding_stage:'Series A', city:'Gothenburg', country:'Sweden', region:'Europe', founded_year:2017, employees:70, total_funding:'$48M', website_url:'mycorena.com', keywords:['mycoprotein','fermentation','protein'], short_overview:'Fungi-based mycoprotein ingredient for the next generation of meat alternatives.' },
  { id:'s5', company_name:'NotCo', sector:'Innovative Food', category:'New Food Products', technology:'AI formulation', funding_stage:'Series D', city:'Santiago', country:'Chile', region:'LATAM', founded_year:2015, employees:300, total_funding:'$420M', website_url:'notco.com', keywords:['plant-based','AI','dairy'], short_overview:'Uses AI ("Giuseppe") to reformulate animal products from plants.' },
  { id:'s6', company_name:'Aerofarms', sector:'Agritech', category:'New Cultivation Systems', technology:'Aeroponics', funding_stage:'Series C', city:'Newark', country:'United States', region:'North America', founded_year:2004, employees:200, total_funding:'$238M', website_url:'aerofarms.com', keywords:['aeroponics','vertical farming'], short_overview:'Indoor vertical farming using aeroponic mist and no soil.' },
  { id:'s7', company_name:'Wasteless', sector:'In-store Retail & Restaurant Tech', category:'Retail Analytics Platform', technology:'Dynamic pricing', funding_stage:'Seed', city:'Tel Aviv', country:'Israel', region:'Middle East', founded_year:2016, employees:45, total_funding:'$8M', website_url:'wasteless.com', keywords:['dynamic pricing','food waste','retail'], short_overview:'AI dynamic pricing that cuts grocery food waste at the shelf.' },
  { id:'s8', company_name:'Karakuri', sector:'Kitchen & Cooking Tech', category:'Cooking Robots', technology:'Robotics', funding_stage:'Seed', city:'London', country:'United Kingdom', region:'Europe', founded_year:2018, employees:35, total_funding:'$10M', website_url:'karakuri.com', keywords:['robotics','automation','kitchen'], short_overview:'Robotic systems that assemble customised meals at scale.' },
  { id:'s9', company_name:'DayTwo', sector:'Food as a Medicine', category:'Personalized Nutrition', technology:'Microbiome', funding_stage:'Series C', city:'Boston', country:'United States', region:'North America', founded_year:2015, employees:120, total_funding:'$170M', website_url:'daytwo.com', keywords:['microbiome','personalised nutrition','metabolic'], short_overview:'Gut-microbiome analysis driving personalised nutrition for metabolic health.' },
  { id:'s10', company_name:'Olive Robotics', sector:'Agritech', category:'Crop Automation & Robotics', technology:'Robotics', funding_stage:'Pre-seed', city:'Valencia', country:'Spain', region:'Europe', founded_year:2021, employees:12, total_funding:'$2M', website_url:'oliverobotics.io', keywords:['robotics','harvesting','orchard'], short_overview:'Autonomous robots for selective olive and fruit harvesting.' },
  { id:'s11', company_name:'Phenix', sector:'Food Logistics & Delivery', category:'Waste Management', technology:'Marketplace', funding_stage:'Series B', city:'Paris', country:'France', region:'Europe', founded_year:2014, employees:200, total_funding:'$50M', website_url:'wearephenix.com', keywords:['food waste','redistribution','marketplace'], short_overview:'Connects retailers with charities and consumers to redistribute unsold food.' },
  { id:'s12', company_name:'Cana', sector:'Kitchen & Cooking Tech', category:'Cloud Kitchen', technology:'Molecular printing', funding_stage:'Series A', city:'Redwood City', country:'United States', region:'North America', founded_year:2019, employees:90, total_funding:'$30M', website_url:'cana.com', keywords:['beverage','molecular','appliance'], short_overview:'A molecular beverage printer that makes any drink from cartridges.' },
];

const INVESTORS = [
  { id:'i1', investor_name:'Astanor Ventures', investor_type:'Venture Capital', country:'Belgium', region:'Europe', aum:'$1.2B', focus_areas:['agritech','sustainability','impact'] },
  { id:'i2', investor_name:'AgFunder', investor_type:'Venture Capital', country:'United States', region:'North America', aum:'$300M', focus_areas:['agrifoodtech','early-stage'] },
  { id:'i3', investor_name:'Five Seasons Ventures', investor_type:'Venture Capital', country:'France', region:'Europe', aum:'$250M', focus_areas:['foodtech','consumer'] },
  { id:'i4', investor_name:'Eatable Adventures', investor_type:'Corporate VC', country:'Spain', region:'Europe', aum:'—', focus_areas:['foodtech','agritech','acceleration'] },
  { id:'i5', investor_name:'Big Idea Ventures', investor_type:'Impact Fund', country:'United States', region:'North America', aum:'$200M', focus_areas:['alt-protein','sustainability'] },
];

const PEOPLE = [
  { id:'p1', full_name:'Maarten Bosch', role:'CEO', company:'Mosa Meat', company_type:'Startup', expertise:['cell-ag','operations'], country:'Netherlands' },
  { id:'p2', full_name:'Matías Muchnick', role:'Founder & CEO', company:'NotCo', company_type:'Startup', expertise:['AI','product'], country:'Chile' },
  { id:'p3', full_name:'Ramkumar Nair', role:'Founder & CEO', company:'Mycorena', company_type:'Startup', expertise:['fermentation','science'], country:'Sweden' },
  { id:'p4', full_name:'Bernard Lukey', role:'Partner', company:'AgFunder', company_type:'Investor', expertise:['venture','agrifood'], country:'United States' },
];

const NEWS = [
  { source:'AgFunderNews', date:'2d', category:'Funding', title:'Cultivated-meat scale-up closes €40M Series B', summary:'European cell-ag leader raises growth round to build a pilot production facility.' },
  { source:'Sifted', date:'3d', category:'Market', title:'Foodtech funding rebounds in Q1 across Europe', summary:'Early-stage agrifood deals up 18% as investors return to fundamentals.' },
  { source:'TechCrunch', date:'4d', category:'Technology', title:'AI reformulation cuts plant-based dev time in half', summary:'New models compress months of R&D into days for alt-dairy products.' },
  { source:'Reuters', date:'5d', category:'Policy', title:'EU greenlights two novel-food applications', summary:'Regulatory clearance opens the single market to precision-fermented proteins.' },
  { source:'Forbes', date:'6d', category:'People', title:'Veteran retail exec joins agritech board', summary:'Former grocery COO takes advisory seat at a vertical-farming scale-up.' },
  { source:'AgFunderNews', date:'1w', category:'Funding', title:'Robotics harvesting startup raises seed', summary:'Autonomous orchard robots attract early backing from impact funds.' },
];

const TAG_COLORS = {
  Funding: ['#dcfce7','#15803d'], Technology:['#dbeafe','#1d4ed8'],
  Market:['#fef3c7','#b45309'], Policy:['#f3e8ff','#7e22ce'], People:['#ffe4e6','#be123c'],
};

Object.assign(window, {
  SECTORS, SECTOR_COLORS, sectorColor, NODE_COLORS, FUNDING_STAGES,
  STARTUPS, INVESTORS, PEOPLE, NEWS, TAG_COLORS,
});
