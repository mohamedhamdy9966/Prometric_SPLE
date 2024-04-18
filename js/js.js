// const questions = [
//     { 
//         // number1
//         question: "what is used For Cough from Herbs ?" ,
//         answers: [
//             { text: "Anise" ,correct:false},
//             { text: "Myrrh" ,correct:true},
//             { text: "Ginger" ,correct:false},
//             { text: "Peppermint" ,correct:false},
//         ]
//     },
//     {
//         // number2
//         question: "what is best Known For dry Cough ?" ,
//         answers: [
//             { text: "Guafincin" ,correct:false},
//             { text: "Dextromethorphan" ,correct:true},
//             { text: "Salbutmol" ,correct:false},
//             { text: "Theophylline" ,correct:false},
//         ] 
//     },
//     {
//         // number3
//         question: "Warfarin Toxicity Treated with ?" ,
//         answers: [
//             { text: "Atropine" ,correct:false},
//             { text: "Sodium BiCarbonate" ,correct:false},
//             { text: "Calcium in Saline" ,correct:false},
//             { text: "Vit k" ,correct:true},
//         ]
//     },
//     {
//         // number4
//         question: "Digoxin toxicity Treated with ?" ,
//         answers: [
//             { text: "Neostigamine" ,correct:"false"},
//             { text: "Defab" ,correct:"true"},
//             { text: "Pyridoxine" ,correct:"false"},
//             { text: "Physostigamine" ,correct:"false"},
//         ]
//     },
//     {
//         // number5
//         question: "BerriBerri Comes from lack of ?" ,
//         answers: [
//             { text: "B2" ,correct:"false"},
//             { text: "B1" ,correct:"true"},
//             { text: "B6" ,correct:"false"},
//             { text: "B12" ,correct:"false"},
//         ]  
//     },
//     {
//         // number6
//         question: "Drugs Can Induce their effects by all the following mechanisms except " ,
//         answers: [
//             { text: "inhibition of target enzymes" ,correct:"false"},
//             { text: "Binding to plasma proteins" ,correct:"true"},
//             { text: "Binding to target receptors" ,correct:"false"},
//             { text: "Blockade of iron channel" ,correct:"false"},
//         ]  
//     },
//     {
//         // number7
//         question: "Pharmacokinetics  is the study of the kinetics of the drug which includes the following except " ,
//         answers: [
//             { text: "Absorbtion" ,correct:"false"},
//             { text: "Uses" ,correct:"true"},
//             { text: "Excretion" ,correct:"false"},
//             { text: "Metabolism" ,correct:"false"},
//         ]  
//     },
//     {
//         // number8
//         question: "Advantages of the oral route of drug administration include the following except " ,
//         answers: [
//             { text: "Most Convenient" ,correct:"false"},
//             { text: "Best Route in emergency" ,correct:"true"},
//             { text: "Easiest Route" ,correct:"false"},
//             { text: "Most economic" ,correct:"false"},
//         ]  
//     },
//     {
//         // number9
//         question: "The Sublingual Route of drug administration is suitable for" ,
//         answers: [
//             { text: "Drug Rapidly Destroyed By liver" ,correct:"true"},
//             { text: "Drug used in large dose" ,correct:"false"},
//             { text: "drug rapidly excreted by kidney" ,correct:"false"},
//             { text: "Drug destroyed by salivary secretion" ,correct:"false"},
//         ]  
//     },
//     {
//         // number10
//         question: "Advantages of the intravenous route of drug administration include the following except " ,
//         answers: [
//             { text: "Rapid on set" ,correct:"false"},
//             { text: "Best on shock" ,correct:"false"},
//             { text: "Best for highly Irritant drugs" ,correct:"false"},
//             { text: "least in toxic reactions" ,correct:"true"},
//         ]  
//     },
//     {
//         // number11
//         question: "The following route is the best method for administration of oily drugs " ,
//         answers: [
//             { text: "Intravenous" ,correct:"false"},
//             { text: "Intramuscular" ,correct:"true"},
//             { text: "Inhalation" ,correct:"false"},
//             { text: "Sublingual" ,correct:"false"},
//         ]  
//     },
//     {
//         // number12
//         question: "Enteric Coated Tablets are used in " ,
//         answers: [
//             { text: "Drugs irritant to stomach" ,correct:"true"},
//             { text: "Drugs destroyed by intestinal enzymes" ,correct:"false"},
//             { text: "Antacids drugs" ,correct:"false"},
//             { text: "Drugs destroyed by saliva" ,correct:"false"},
//         ]  
//     },
//     {
//         // number13
//         question: "Which of the following drugs is produced by recombinant Dna technology " ,
//         answers: [
//             { text: "Atropine" ,correct:"false"},
//             { text: "Human Insulin" ,correct:"true"},
//             { text: "Digoxin" ,correct:"false"},
//             { text: "Aspirin" ,correct:"false"},
//         ]  
//     },
//     {
//         // number14
//         question: "All of the Following statements concerning (simple diffusion of drugs through lipid membranes) are true except " ,
//         answers: [
//             { text: "it occurs along a concentration gradient" ,correct:"false"},
//             { text: "it does not require cellular energy" ,correct:"false"},
//             { text: "ionized drugs is lipid soluble and diffusible" ,correct:"true"},
//             { text: "it does not require carrier" ,correct:"false"},
//         ]  
//     },
//     {
//         // number15
//         question: "Concerning Characteristics of (Zero order kinetics) which of the following is correct :",
//         answers: [
//             { text: "the t 1/2 is constant" ,correct:"false"},
//             { text: "Log-Plasma Concentration-time curve is linear" ,correct:"false"},
//             { text: "The rate of the process is proportional to the concentration of the drug" ,correct:"false"},
//             { text: "A constant amount of drug is eliminated per unit time" ,correct:"true"},
//         ]  
//     },
//     {
//         // number16
//         question: "A highly irritant drug in the form of an aqueous solution can be administered by" ,
//         answers: [
//             { text: "Subcutaneous injection" ,correct:"false"},
//             { text: "Intramuscular injection" ,correct:"false"},
//             { text: "Intravenous injection" ,correct:"true"},
//             { text: "intra-articular injection" ,correct:"false"},
//         ]  
//     },
//     {
//         // number17
//         question: "All of the following are possible consequences of phase 1 (non-synthetic) biotransformation EXCEPT " ,
//         answers: [
//             { text: "Production of a pharmacologically inactive metabolite" ,correct:"false"},
//             { text: "conversion of one pharmacologically active to another active substance" ,correct:"false"},
//             { text: "conversion of a pharmacologically inactive to an active substance" ,correct:"false"},
//             { text: "Combination of a drug with an endogenous substance" ,correct:"true"},
//         ]  
//     },
//     {
//         // number18
//         question: "Which of the following is correct as regards to drugs bound to plasma protein " ,
//         answers: [
//             { text: "Pharmacologically active" ,correct:"false"},
//             { text: "Diffusible through capillary walls" ,correct:"false"},
//             { text: "Excreted by glomerular filtration" ,correct:"false"},
//             { text: "A reservoir from which free drug can be dissociated" ,correct:"true"},
//         ]  
//     },
//     {
//         // number19
//         question: "Which of the following can inhibit hepatic microsomal enzymes" ,
//         answers: [
//             { text: "Phenobarbitone" ,correct:"false"},
//             { text: "Valporic acid" ,correct:"true"},
//             { text: "Phenytoin" ,correct:"false"},
//             { text: "Rifampicin" ,correct:"false"},
//         ]
//     },
//     {
//         // number20
//         question: "Who's responsible for for accreditation of health care systems ?" ,
//         answers: [
//             { text: "SFDA" ,correct:"false"},
//             { text: "WHO" ,correct:"false"},
//             { text: "MOH" ,correct:"false"},
//             { text: "CBAHI" ,correct:"true"},
//         ]
//     },
//     {
//         // number21
//         question: "Which of the following error detection strategies result in limiting detection ?" ,
//         answers: [
//             { text: "Bar-coding" ,correct:"false"},
//             { text: "trigger tools" ,correct:"false"},
//             { text: "voluntary reporting" ,correct:"false"},
//             { text: "mandatory reporting" ,correct:"true"},
//         ]
//     },
//     {
//         // number22
//         question: "Which of the following is phase-|| reaction of drug metabolism" ,
//         answers: [
//             { text: "Oxidation" ,correct:"false"},
//             { text: "Hydrolysis" ,correct:"false"},
//             { text: "Reduction" ,correct:"false"},
//             { text: "Acetylation" ,correct:"true"},
//         ]
//     },
//     {
//         // number23
//         question: "Which of the following is the precursor for 5_hydroxytryptamine ?" ,
//         answers: [
//             { text: "Proline" ,correct:"false"},
//             { text: "alanine" ,correct:"false"},
//             { text: "glutamine" ,correct:"false"},
//             { text: "tryptophan" ,correct:"true"},
//         ]
//     },
//     {
//         // number24
//         question: "What is the antidote of heparin toxicity ?" ,
//         answers: [
//             { text: "Protamine sulfate" ,correct:"true"},
//             { text: "Sodium Salicylate" ,correct:"false"},
//             { text: "Naloxone" ,correct:"false"},
//             { text: "Glucagon" ,correct:"false"},
//         ]
//     },
//     {
//         // number25
//         question: "Which of the following anesthetics drugs has a higher risk of causing anemia " ,
//         answers: [
//             { text: "propofol" ,correct:"false"},
//             { text: "ketamine" ,correct:"false"},
//             { text: "isoflurane" ,correct:"false"},
//             { text: "nitrous oxide" ,correct:"true"},
//         ]
//     },
//     {
//         // number26
//         question: "Which Amino acid we give for anorexia ?" ,
//         answers: [
//             { text: "alanine" ,correct:"false"},
//             { text: "arginine" ,correct:"false"},
//             { text: "valine" ,correct:"true"},
//             { text: "thymine" ,correct:"false"},
//         ]
//     },
//     {
//         // number27
//         question: "Glucosamine uses for " ,
//         answers: [
//             { text: "osteoporosis" ,correct:"false"},
//             { text: "osteomyelitis" ,correct:"false"},
//             { text: "osteoarthritis" ,correct:"true"},
//             { text: "Diabetes mellitus" ,correct:"false"},
//         ]
//     },
//     {
//         // number28
//         question: "which the carrier in krebs cycle ?" ,
//         answers: [
//             { text: "career in cycle" ,correct:"false"},
//             { text: "oxaloacetate" ,correct:"false"},
//             { text: "Citric acid" ,correct:"true"},
//             { text: "lactic acid" ,correct:"false"},
//         ]
//     },
//     {
//         // number29
//         question: "number of atp in glycolysis ?" ,
//         answers: [
//             { text: "1" ,correct:"false"},
//             { text: "22" ,correct:"false"},
//             { text: "24" ,correct:"false"},
//             { text: "2" ,correct:"true"},
//         ]
//     },
//     {
//         // number30
//         question: "Acetyl coA and citric acid cycle which vitamin is used ?" ,
//         answers: [
//             { text: "B6" ,correct:"false"},
//             { text: "B12" ,correct:"false"},
//             { text: "B2" ,correct:"true"},
//             { text: "B9" ,correct:"false"},
//         ]
//     },
//     {
//         // number31
//         question: "which of the following is anticoagulant agent" ,
//         answers: [
//             { text: "Aspirin" ,correct:"false"},
//             { text: "Warfarin" ,correct:"true"},
//             { text: "clopidogril" ,correct:"false"},
//             { text: "D.streptokinase" ,correct:"false"},
//         ]
//     },
//     {
//         // number32
//         question: "Risk factors for DVT ?" ,
//         answers: [
//             { text: "Age" ,correct:"false"},
//             { text: "food rich of VK" ,correct:"false"},
//             { text: "surgery" ,correct:"true"},
//             { text: "sex" ,correct:"false"},
//         ]
//     },
//     {
//         // number33
//         question: "Which type of Medication error if patient experiences anaphylaxis shock from prescribed drug ?" ,
//         answers: [
//             { text: "Category c" ,correct:"false"},
//             { text: "Category D" ,correct:"false"},
//             { text: "Category H" ,correct:"true"},
//             { text: "Category I" ,correct:"false"},
//         ]
//     },
//     {
//         // number34
//         question: "A Patient visit Pharmacy with a prescription, but the brand of drug prescribed is un available, What is the best action ?" ,
//         answers: [
//             { text: "Give same active ingredient in other brand and counsel patient on the change" ,correct:"true"},
//             { text: "Give same active ingredient in other brand without telling patient anything" ,correct:"false"},
//             { text: "don't dispense the prescription" ,correct:"false"},
//             { text: "dispense drug with other active ingredient with same company" ,correct:"false"},
//         ]
//     },
//     {
//         // number35
//         question: "Which Antacid cause low magnesium levels in patient ?" ,
//         answers: [
//             { text: "Ranitidine" ,correct:"false"},
//             { text: "Proton-pump inhibitor" ,correct:"true"},
//             { text: "Sucralfate" ,correct:"false"},
//             { text: "Misoprostol" ,correct:"false"},
//         ]
//     },
//     {
//         // number36
//         question: "Which cause hypertensive crisis in patient on lisinopril, metformin, topiramate, phenelzine. eats tyramine-rich foods ?" ,
//         answers: [
//             { text: "Lisinopril" ,correct:"false"},
//             { text: "Topiramate" ,correct:"false"},
//             { text: "Metformin" ,correct:"false"},
//             { text: "Phenelzine" ,correct:"true"},
//         ]
//     },
//     {
//         // number37
//         question: "Which of the following responsible for managing the procurement of medicines, devices and medical supplies for government hospitals and healthcare facilities ?" ,
//         answers: [
//             { text: "Saudi Central Board for accreditation of healthcare institutions" ,correct:"false"},
//             { text: "saudi food and drug administration" ,correct:"false"},
//             { text: "Ministry of health of Saudi Arabia" ,correct:"false"},
//             { text: "National Unified procurement company" ,correct:"true"},
//         ]
//     },
//     {
//         // number38
//         question: "Who should the background, affect, Troubling, Handling, and empathy (BATHE) interviewing technique be used for ?" ,
//         answers: [
//             { text: "Neonatal Intensive care Patient" ,correct:"false"},
//             { text: "Pediatric Patients" ,correct:"false"},
//             { text: "Palliative care patient" ,correct:"true"},
//             { text: "Hypotension patients" ,correct:"false"},
//         ]
//     },
//     {
//         // number39
//         question: "What is the mechanism of action of mannitol ?" ,
//         answers: [
//             { text: "increase osmotic pressure" ,correct:"true"},
//             { text: "decrease osmotic pressure" ,correct:"false"},
//             { text: "don't change osmotic pressure" ,correct:"false"},
//             { text: "increase glomerular filtration by decrease osmotic pressure" ,correct:"false"},
//         ]
//     },
//     {
//         // number40
//         question: "Which of the following vitamins may speed wound healing ?" ,
//         answers: [
//             { text: "B9 (folic acid)" ,correct:"false"},
//             { text: "B5 (pantothenic acid)" ,correct:"true"},
//             { text: "D (calciferol)" ,correct:"false"},
//             { text: "E (tocopherol)" ,correct:"false"},
//         ]
//     },
//     {
//         // number41
//         question: "Which of the following hypertension drug prefers for patients with severe liver dysfunction ?" ,
//         answers: [
//             { text: "Lisinopril" ,correct:"false"},
//             { text: "Ramipril" ,correct:"false"},
//             { text: "Enalapril" ,correct:"true"},
//             { text: "Perindopril" ,correct:"false"},
//         ]
//     },
//     {
//         // number42
//         question: "Which of the following parameter need monitoring before first dose of fingolimod ?" ,
//         answers: [
//             { text: "Sensitivity test" ,correct:"false"},
//             { text: "Kidney function test" ,correct:"false"},
//             { text: "ECG" ,correct:"true"},
//             { text: "Vision changes" ,correct:"false"},
//         ]
//     },
//     {
//         // number43
//         question: "Which of the following is first line for low activity rheumatoid arthritis ?" ,
//         answers: [
//             { text: "Mercaptopurine" ,correct:"false"},
//             { text: "Hydroxycloroqueen" ,correct:"true"},
//             { text: "Abatacept" ,correct:"false"},
//             { text: "Adalimumab" ,correct:"false"},
//         ]
//     },
//     {
//         // number44
//         question: "Mother read the leaflet and found different indication than her daughter disease, what the mother level of education ?" ,
//         answers: [
//             { text: "very basic" ,correct:"false"},
//             { text: "Basic" ,correct:"false"},
//             { text: "intermediate" ,correct:"true"},
//             { text: "professional" ,correct:"false"},
//         ]
//     },
//     {
//         // number45
//         question: "How get in-depth information in research ?" ,
//         answers: [
//             { text: "survey" ,correct:"false"},
//             { text: "questioners" ,correct:"false"},
//             { text: "reviewing medical records" ,correct:"false"},
//             { text: "focus group" ,correct:"true"},
//         ]
//     },
//     {
//         // number46
//         question: "What is the function of small nuclear (snRNAs) in protein synthesis ?" ,
//         answers: [
//             { text: "ACT as catalyst" ,correct:"false"},
//             { text: "Genetic blueprint for the protein" ,correct:"false"},
//             { text: "translates genetic code to amino acid" ,correct:"false"},
//             { text: "modifies mRNA molecules" ,correct:"true"},
//         ]
//     },
//     {
//         // number47
//         question: "What is the intervention is A1c 6.8, he on metformin 850 BID fasting glucose are all normal, but one slightly higher ?" ,
//         answers: [
//             { text: "add sulfonylurea" ,correct:"false"},
//             { text: "continue on his medication" ,correct:"true"},
//             { text: "increase metformin dose" ,correct:"false"},
//             { text: "decrease metformin dose" ,correct:"false"},
//         ]
//     },
//     {
//         // number48
//         question: "what is the maximum initial dose of lamotrigine with valporic acid ?" ,
//         answers: [
//             { text: "25 mg PO daily for 2 weeks" ,correct:"true"},
//             { text: "50 mg PO daily for 2 weeks" ,correct:"false"},
//             { text: "100 mg PO daily for 2 weeks" ,correct:"false"},
//             { text: "400 mg PO daily for 2 weeks" ,correct:"false"},
//         ]
//     },
//     {
//         // number49
//         question: "which of the following antibiotic used for malaria prophylaxis before travel ?" ,
//         answers: [
//             { text: "Ampicillin" ,correct:"false"},
//             { text: "Doxycycline" ,correct:"true"},
//             { text: "Cefdinir" ,correct:"false"},
//             { text: "Vancomycin" ,correct:"false"},
//         ]
//     },
//     {
//         // number50
//         question: "which of the following antihistamine suitable for pharmacy student have exams and suffering from allergic rhinitis ?" ,
//         answers: [
//             { text: "Promethazine" ,correct:"false"},
//             { text: "Fexofenadine" ,correct:"true"},
//             { text: "Chlorphenamine" ,correct:"false"},
//             { text: "Diphenydramine" ,correct:"false"},
//         ]
//     },
//     {
//         // number51
//         question: "Which of the following biochemical reaction need to convert codeine to morphine ?" ,
//         answers: [
//             { text: "Dealkylation" ,correct:"true"},
//             { text: "Reduction" ,correct:"false"},
//             { text: "Hydrolysis" ,correct:"false"},
//             { text: "Methylation" ,correct:"false"},
//         ]
//     },
//     {
//         // number52
//         question: "What is the relationship between childhood vaccines and autism ?" ,
//         answers: [
//             { text: "MMR vaccine causes autism" ,correct:"false"},
//             { text: "any vaccine can cause autism" ,correct:"false"},
//             { text: "Hepatitis B vaccine causes autism" ,correct:"false"},
//             { text: "None of the vaccines causes autism" ,correct:"true"},
//         ]
//     },
//     {
//         // number53
//         question: "What type of antibody is adalimumab ?" ,
//         answers: [
//             { text: "Human recombinant immunoglobulin" ,correct:"true"},
//             { text: "chimeric immunoglobulin" ,correct:"false"},
//             { text: "murine antibodies" ,correct:"false"},
//             { text: "humanized antibodies" ,correct:"false"},
//         ]
//     },
//     {
//         // number54
//         question: "Which of the following inhibits insulin ?" ,
//         answers: [
//             { text: "Glucose" ,correct:"false"},
//             { text: "Epinephrine" ,correct:"true"},
//             { text: "Cortisol" ,correct:"false"},
//             { text: "Glucagon" ,correct:"false"},
//         ]
//     },
//     {
//         // number55
//         question: "What is the caused of interaction between smoking and theophylline ?" ,
//         answers: [
//             { text: "Smoking decreases metabolism thereby, decreases levels of theophylline" ,correct:"false"},
//             { text: "smoking increase metabolism thereby, decreases levels of theophylline" ,correct:"true"},
//             { text: "smoking increase metabolism thereby, increase levels of theophylline" ,correct:"false"},
//             { text: "smoking decreases metabolism thereby, increases levels of theophylline" ,correct:"false"},
//         ]
//     },
//     {
//         // number56
//         question: "Which immunoglobulin IG activates mast cells ?" ,
//         answers: [
//             { text: "immunoglobulin E" ,correct:"true"},
//             { text: "immunoglobulin G" ,correct:"false"},
//             { text: "immunoglobulin A" ,correct:"false"},
//             { text: "immunoglobulin D" ,correct:"false"},
//         ]
//     },
//     {
//         // number57
//         question: "case about patient diagnosed with GAD and doctors agree that he needs long acting benzodiazepines" ,
//         answers: [
//             { text: "lorazepam" ,correct:"false"},
//             { text: "alprazolam" ,correct:"false"},
//             { text: "midazolam" ,correct:"false"},
//             { text: "diazepam" ,correct:"true"},
//         ]
//     },
//     {
//         // number58
//         question: "patient has sleep problems what is the best medication ?" ,
//         answers: [
//             { text: "Zolpidem" ,correct:"true"},
//             { text: "lorazepam" ,correct:"false"},
//             { text: "diazepam" ,correct:"false"},
//             { text: "Midazolam" ,correct:"false"},
//         ]
//     },
//     {
//         // number59
//         question: "The patient had her last period before the 13 months. she's experiencing hot flashes, she has a historycotomy, Best choice ?" ,
//         answers: [
//             { text: "Estrogen" ,correct:"true"},
//             { text: "Progesterone" ,correct:"false"},
//             { text: "Estrogen and progesterone" ,correct:"false"},
//             { text: "Progesterone and aldosterone" ,correct:"false"},
//         ]
//     },
//     {
//         // number60
//         question: "hepatic insufficiency and recently diagnosed with tonic clonic seizure, what is the best treatment ?" ,
//         answers: [
//             { text: "Phenytoin" ,correct:"false"},
//             { text: "Valporic acid" ,correct:"false"},
//             { text: "Ethosuxmide" ,correct:"false"},
//             { text: "Gabapentin" ,correct:"true"},
//         ]
//     },
//     {
//         // number61
//         question: "which of the following insulin has the longest duration of action ?" ,
//         answers: [
//             { text: "Aspart" ,correct:"false"},
//             { text: "Detemir" ,correct:"false"},
//             { text: "Glargine" ,correct:"false"},
//             { text: "Degludec" ,correct:"true"},
//         ]
//     },
//     {
//         // number62
//         question: "What is the effect of smoking on theophylline ?" ,
//         answers: [
//             { text: "inhibition of CYP3A4" ,correct:"false"},
//             { text: "inducer of CYP1A2" ,correct:"true"},
//             { text: "No effect" ,correct:"false"},
//             { text: "Decrease excretion of theophylline" ,correct:"false"},
//         ]
//     },
//     {
//         // number63
//         question: "Which herb causes hypoglycemia ?" ,
//         answers: [
//             { text: "St johns wart" ,correct:"false"},
//             { text: "Fenugreek" ,correct:"true"},
//             { text: "Anise" ,correct:"false"},
//             { text: "peppermint" ,correct:"false"},
//         ]
//     },
//     {
//         // number64
//         question: "Patient forget her tablet in bathroom what will happen to tablet ?" ,
//         answers: [
//             { text: "calcitrol" ,correct:"true"},
//             { text: "ergocalciferol" ,correct:"false"},
//             { text: "estradiol" ,correct:"false"},
//             { text: "calcidol" ,correct:"false"},
//         ]
//     },
//     {
//         // number65
//         question: "thyroid toxicity ?" ,
//         answers: [
//             { text: "Amiodarone" ,correct:"true"},
//             { text: "Digoxin" ,correct:"false"},
//             { text: "Warfarin" ,correct:"false"},
//             { text: "Piracetam" ,correct:"false"},
//         ]
//     },
//     {
//         // number66
//         question: "amount of drug is 5 mg in 1 ml what is the amount of drug in 1 tsp in microgram ?" ,
//         answers: [
//             { text: "5" ,correct:"false"},
//             { text: "25" ,correct:"false"},
//             { text: "2500" ,correct:"false"},
//             { text: "25000" ,correct:"true"},
//         ]
//     },
//     {
//         // number67
//         question: "A solution is made by dissolving 17.52 g of NaCl exactly 2000 ml. what is the molarity of this solution ?" ,
//         answers: [
//             { text: "3.33" ,correct:"false"},
//             { text: "0.15" ,correct:"true"},
//             { text: "3.00 * 10 -4" ,correct:"false"},
//             { text: "1.6 * 10 -4" ,correct:"false"},
//         ]
//     },
//     {
//         // number68
//         question: "5ml of injection that conc. 0.4% calculate the amount of drug ?" ,
//         answers: [
//             { text: "0.2 mg" ,correct:"false"},
//             { text: "2 mg" ,correct:"false"},
//             { text: "20 mg" ,correct:"true"},
//             { text: "200 mg" ,correct:"false"},
//         ]
//     },
//     {
//         // number69
//         question: "Prescription : Hydrocortisone 2% w/w , cold cream 60 gm , you have hydrocortisone solu. 100mg/ml.. how many milliliters will you use from the solution ?" ,
//         answers: [
//             { text: "10 ml" ,correct:"false"},
//             { text: "20 ml" ,correct:"true"},
//             { text: "30 ml" ,correct:"false"},
//             { text: "40 ml" ,correct:"false"},
//         ]
//     },
//     {
//         // number70
//         question: "How gm of substance X must added to 2000 gm of 10% substance X solution in order to prepare 25% of substance X solution" ,
//         answers: [
//             { text: "400 gm" ,correct:"true"},
//             { text: "40 gm" ,correct:"false"},
//             { text: "4 gm" ,correct:"false"},
//             { text: "0.4 gm" ,correct:"false"},
//         ]
//     },
//     {
//         // number71
//         question: "A patient weighting 80 Kg is supposed to receive a drug at a dose of 2mg/kg/day. what is the dose that the patient should take for each day :" ,
//         answers: [
//             { text: "40 mg" ,correct:"false"},
//             { text: "80 mg" ,correct:"false"},
//             { text: "160 mg" ,correct:"true"},
//             { text: "320 mg" ,correct:"false"},
//         ]
//     },
//     {
//         // number72
//         question: "Drug X is a given to a 70 kg patient at an infusion rate of 0.95 mg/kg/hr. How much drug we need for a 12-hr infusion bottle" ,
//         answers: [
//             { text: "798 mg" ,correct:"true"},
//             { text: "66.5 mg" ,correct:"false"},
//             { text: "665 mg" ,correct:"false"},
//             { text: "84 mg" ,correct:"false"},
//         ]
//     },
//     {
//         // number73
//         question: "Which of the following is the function of the pharmacy and therapeutic committee in a hospital ?" ,
//         answers: [
//             { text: "Responsible for poison management" ,correct:"false"},
//             { text: "Monitor the adverse reaction reporting" ,correct:"false"},
//             { text: "Monitor the medication error reporting" ,correct:"false"},
//             { text: "responsible for drug formulary management" ,correct:"true"},
//         ]
//     },
//     {
//         // number74
//         question: "Which of the following distribution systems works better for medicine requiring a higher level of controls ?" ,
//         answers: [
//             { text: "Bulk ward stock" ,correct:"false"},
//             { text: "Direct Procurement" ,correct:"false"},
//             { text: "Automated dispensing" ,correct:"true"},
//             { text: "individual medication order" ,correct:"false"},
//         ]
//     },
//     {
//         // number75
//         question: "which of the following medication has a side effect of metallic taste ?" ,
//         answers: [
//             { text: "cefuroxime" ,correct:"false"},
//             { text: "azithromycin" ,correct:"false"},
//             { text: "ciprofloxacin" ,correct:"false"},
//             { text: "metronidazole" ,correct:"true"},
//         ]
//     },
//     {
//         // number76
//         question: "Which of the following anesthetics drug has a higher risk of causing hepatic toxicity ?" ,
//         answers: [
//             { text: "Propofol" ,correct:"false"},
//             { text: "Ketamine" ,correct:"false"},
//             { text: "Isoflurane" ,correct:"true"},
//             { text: "Nitrous oxide" ,correct:"false"},
//         ]
//     },
//     {
//         // number77
//         question: "What is the type of anemia lack of intrinsic factor ?" ,
//         answers: [
//             { text: "Megaloblastic anemia" ,correct:"false"},
//             { text: "Pernicious anemia" ,correct:"true"},
//             { text: "Hemolytic anemia" ,correct:"false"},
//             { text: "Aplastic anemia" ,correct:"false"},
//         ]
//     },
//     {
//         // number78
//         question: "which drug is used to treat an anaphylactic reaction ?" ,
//         answers: [
//             { text: "Atropine" ,correct:"false"},
//             { text: "Adrenaline" ,correct:"true"},
//             { text: "Isoprinosine" ,correct:"false"},
//             { text: "Phentolamine" ,correct:"false"},
//         ]
//     },
//     {
//         // number79
//         question: "in which phase of clinical trials is the investigative drug compared with another drug ?" ,
//         answers: [
//             { text: "phase 0" ,correct:"false"},
//             { text: " phase 1" ,correct:"false"},
//             { text: "phase 2" ,correct:"false"},
//             { text: "phase 3" ,correct:"true"},
//         ]
//     },
//     {
//         // number80
//         question: "What is the measurement unit of a cost utility analysis (CUA)?" ,
//         answers: [
//             { text: "Neutral Unite" ,correct:"false"},
//             { text: "Monitory" ,correct:"false"},
//             { text: "Quality-adjusted life years" ,correct:"true"},
//             { text: "Willingness-to-pay" ,correct:"false"},
//         ]
//     },
//     {
//         // number81
//         question: "What vaccine are required for patient with COPD ?" ,
//         answers: [
//             { text: "BCG Vaccine" ,correct:"false"},
//             { text: "Pneumococcal polysaccharide vaccine" ,correct:"true"},
//             { text: "Oral polio vaccine" ,correct:"false"},
//             { text: "Hepatitis B vaccine" ,correct:"false"},
//         ]
//     },
//     {
//         // number82
//         question: "Which of the following vaccine used to prevent shingles ?" ,
//         answers: [
//             { text: "Varicella vaccine" ,correct:"false"},
//             { text: "HPV vaccine" ,correct:"false"},
//             { text: "pneumococcal conjugate vaccine" ,correct:"false"},
//             { text: "Zoster vaccine" ,correct:"true"},
//         ]
//     },
//     {
//         // number83
//         question: "What type of pharmacoeconomics analysis should be conducted for two medications with different costs and effectiveness ?" ,
//         answers: [
//             { text: "Cost minimization analysis" ,correct:"false"},
//             { text: "Cost benefit analysis" ,correct:"true"},
//             { text: "cost effectiveness analysis" ,correct:"false"},
//             { text: "Cost utility analysis" ,correct:"false"},
//         ]
//     },
//     {
//         // number84
//         question: "A doctor wants to compare between cefazolin and oxacillin in treating infection, what source should he check ?" ,
//         answers: [
//             { text: "Random Control Trials (RCTs)" ,correct:"true"},
//             { text: "Case report" ,correct:"false"},
//             { text: "Case control studies" ,correct:"false"},
//             { text: "Cohort studies" ,correct:"false"},
//         ]
//     },
//     {
//         // number85
//         question: "Which infection is considered critical in pregnant woman ?" ,
//         answers: [
//             { text: "Tetanus" ,correct:"false"},
//             { text: "Toxoplasmosis" ,correct:"true"},
//             { text: "Malaria" ,correct:"false"},
//             { text: "Pinworm" ,correct:"false"},
//         ]
//     },
//     {
//         // number86
//         question: "Which of the following medication can cause severe diarrhea ?" ,
//         answers: [
//             { text: "Leucovorin" ,correct:"false"},
//             { text: "Irinotecan" ,correct:"true"},
//             { text: "Peglotigase" ,correct:"false"},
//             { text: "Rasburicase" ,correct:"false"},
//         ]
//     },
//     {
//         // number87
//         question: "Which of the following is best used to treat pinworm infection ?" ,
//         answers: [
//             { text: "Metronidazole" ,correct:"false"},
//             { text: "Albendazole" ,correct:"true"},
//             { text: "Ketoconazole" ,correct:"false"},
//             { text: "Rifampicin" ,correct:"false"},
//         ]
//     },
//     {
//         // number89
//         question: "Which of the following is the max dose of statin in patient taking verapamil ?" ,
//         answers: [
//             { text: "4 mg" ,correct:"false"},
//             { text: "5 mg" ,correct:"false"},
//             { text: "10 mg" ,correct:"true"},
//             { text: "40 mg" ,correct:"false"},
//         ]
//     },
//     {
//         // number90
//         question: "Diabetic patient was diagnosed with chronic liver failure, he is currently on metformin, Enalapril , Pioglitazone and insulin. which medication should be stopped ?" ,
//         answers: [
//             { text: "Metformin" ,correct:"false"},
//             { text: "Enalapril" ,correct:"false"},
//             { text: "Pioglitazone" ,correct:"true"},
//             { text: "insulin" ,correct:"false"},
//         ]
//     },
//     {
//         // number91
//         question: "T lymphocyte is considered a part of which immunity ?" ,
//         answers: [
//             { text: "Natural immunity" ,correct:"false"},
//             { text: "Adaptive immunity" ,correct:"true"},
//             { text: "Active immunity" ,correct:"false"},
//             { text: "Passive immunity" ,correct:"false"},
//         ]
//     },
//     {
//         // number92
//         question: "Which of the following drugs can enhance clopidogril effects ?" ,
//         answers: [
//             { text: "Omeprazole" ,correct:"false"},
//             { text: "Cimetidine" ,correct:"true"},
//             { text: "Phenytoin" ,correct:"false"},
//             { text: "Valporic acid" ,correct:"false"},
//         ]
//     },
//     {
//         // number93
//         question: "Patient was diagnosed with urinary tract infection, he has a history of G6PD deficiency , which of the following antibiotics should be avoided ?" ,
//         answers: [
//             { text: "Nitrofurantoin" ,correct:"true"},
//             { text: "ampicillin" ,correct:"false"},
//             { text: "Gentamicin" ,correct:"false"},
//             { text: "Levofloxacin" ,correct:"false"},
//         ]
//     },
//     {
//         // number94
//         question: "Which type of cost is anxiety and fear ?" ,
//         answers: [
//             { text: "Direct medical cost" ,correct:"false"},
//             { text: "Direct non medical cost" ,correct:"false"},
//             { text: "Intangible cost" ,correct:"true"},
//             { text: "Indirect cost" ,correct:"false"},
//         ]
//     },
//     {
//         // number95
//         question: "Which of the following medications has role in treatment of respiratory syncytial virus (RSV) in newborn ?" ,
//         answers: [
//             { text: "Ribavirin" ,correct:"true"},
//             { text: "Omalizumab" ,correct:"false"},
//             { text: "Doxycycline" ,correct:"false"},
//             { text: "Azithromycin" ,correct:"false"},
//         ]
//     },
//     {
//         // number96
//         question: "Which of the following medications can be used in diabetic insipidus ?" ,
//         answers: [
//             { text: "Oxytocin" ,correct:"false"},
//             { text: "Convapatan" ,correct:"true"},
//             { text: "Desmopressin" ,correct:"false"},
//             { text: "Tolcapone" ,correct:"false"},
//         ]
//     },
//     {
//         // number97
//         question: "Which of the following is the active form of vitamin D ?" ,
//         answers: [
//             { text: "1,25 dihydroxycholecalciferol" ,correct:"true"},
//             { text: "calcidiol" ,correct:"false"},
//             { text: "25 hydroxycholecalciferol" ,correct:"false"},
//             { text: "Ergocalciferol" ,correct:"false"},
//         ]
//     },
//     {
//         // number98
//         question: "Patient presented to ER with pinpoint pupil, which drug overdose is suspected ?" ,
//         answers: [
//             { text: "Heroine" ,correct:"true"},
//             { text: "Naloxone" ,correct:"false"},
//             { text: "Atropine" ,correct:"false"},
//             { text: "Scopolamine" ,correct:"false"},
//         ]
//     },
//     {
//         // number99
//         question: "Which of the following is considered high intensity statin ?" ,
//         answers: [
//             { text: "Rosuvastatin 20 mg" ,correct:"true"},
//             { text: "Atorvastatin 10 mg" ,correct:"false"},
//             { text: "Pitavastatin 1 mg" ,correct:"false"},
//             { text: "Simavastatin 20 mg" ,correct:"false"},
//         ]
//     },
//     {
//         // number100
//         question: "ISO 5 ?" ,
//         answers: [
//             { text: "100" ,correct:"true"},
//             { text: "1000" ,correct:"false"},
//             { text: "10000" ,correct:"false"},
//             { text: "10" ,correct:"false"},
//         ]
//     },
//     {
//         // number101
//         question: "25 years old female didn't exposed to the sun two months ago , when she exposed for  minutes she got er face sun burn , doctor prescribed her sun block when she applied it for 18 minutes she got the same degree of sun burn but in her back. what is the calculated sun block spf ?" ,
//         answers: [
//             { text: "spf 7" ,correct:"false"},
//             { text: "spf 9" ,correct:"true"},
//             { text: "spf 10" ,correct:"false"},
//             { text: "spf 15" ,correct:"false"},
//         ]
//     },
//     {
//         // number102
//         question: "patient suffers from short term insomnia and is prescribed zolpidem , how many refills should be given ?" ,
//         answers: [
//             { text: "0 refills" ,correct:"true"},
//             { text: "1 refill" ,correct:"false"},
//             { text: "2 refills" ,correct:"false"},
//             { text: "3 refills" ,correct:"false"},
//         ]
//     },
//     {
//         // number103
//         question: "A doctor was in contact with a patient with C.difficile the doctor wiped his hand with antiseptic wipes " ,
//         answers: [
//             { text: "Need to use hand sanitizer" ,correct:"false"},
//             { text: "Antiseptic wipe is enough" ,correct:"false"},
//             { text: "Need to wash hands with soap and water" ,correct:"true"},
//             { text: "Need to wash hands with just water" ,correct:"false"},
//         ]
//     },
//     {
//         // number104
//         question: "Which major histocompatibility complex (MHC) molecule does T helper (CD4+) cells bind to ?" ,
//         answers: [
//             { text: "MHC 2" ,correct:"true"},
//             { text: "MHC 1" ,correct:"false"},
//             { text: "MHC 8" ,correct:"false"},
//             { text: "none of the above" ,correct:"false"},
//         ]
//     },
//     {
//         // number105
//         question: "Which drug have more efficacy ?" ,
//         answers: [
//             { text: "NNT = 15" ,correct:"false"},
//             { text: "NNT = 20" ,correct:"false"},
//             { text: "NNT = 12" ,correct:"false"},
//             { text: "NNT = 5" ,correct:"true"},
//         ]
//     },
//     {
//         // number88
//         question: "ST segment represent what ?" ,
//         answers: [
//             { text: "atrial conductivity" ,correct:"false"},
//             { text: "atrioventricular conduction" ,correct:"false"},
//             { text: "ventricular conduction" ,correct:"false"},
//             { text: "ventricular plateau" ,correct:"true"},
//         ]
//     },
// ];
const questions = [
    { 
        // number1
        question: "Which of the following compounds is urea cycle a biochemical reaction that produce urea from ?" ,
        answers: [
            { text: "Sucrose" ,correct:false},
            { text: "Glucose" ,correct:false},
            { text: "Glycogen" ,correct:false},
            { text: "Ammonia" ,correct:true},
        ]
    },
    { 
        // number2
        question: "Which of the following is enzymes is responsible for forming DNA copy from RNA ?" ,
        answers: [
            { text: "Reverse transcriptase" ,correct:true},
            { text: "DNA polymerase" ,correct:false},
            { text: "Helicase" ,correct:false},
            { text: "Primase" ,correct:false},
        ]
    },
    {
        // number3
        question: "Which of the following is a potential serious side effect that is common among all anticoagulants agents ?" ,
        answers: [
            { text: "Hypokalemia" ,correct:false},
            { text: "Major bleeding" ,correct:true},
            { text: "Liver Dysfunction" ,correct:false},
            { text: "Renal Dysfunction" ,correct:false},
        ]
    },
    { 
        // number4
        question: "Which of the following is an example of a parenteral direct thrombin inhibitor ?" ,
        answers: [
            { text: "enoxaparin" ,correct:false},
            { text: "argatroban" ,correct:true},
            { text: "fondaparinux" ,correct:false},
            { text: "unfractionated heparin" ,correct:false},
        ]
    },
    { 
        // number5
        question: "Which of the following anti platelets is contraindicated patients with transient ischemic attack (TIA) or stroke ?" ,
        answers: [
            { text: "Prasugrel" ,correct:true},
            { text: "Ticagrelor" ,correct:false},
            { text: "Clopidogrel" ,correct:false},
            { text: "Dipyridamole" ,correct:false},
        ]
    },
    { 
        // number6
        question: "Which of the following anti platelets agents the highest risk of causing dyspnea ?" ,
        answers: [
            { text: "Prasugrel" ,correct:false},
            { text: "Ticagrelor" ,correct:true},
            { text: "Clopidogril" ,correct:false},
            { text: "Warfarin" ,correct:false},
        ]
    },
    { 
        // number7
        question: "Which of the following can decrease the effect of warfarin ?" ,
        answers: [
            { text: "antibiotics" ,correct:false},
            { text: "paracetamol" ,correct:false},
            { text: "multivitamins" ,correct:true},
            { text: "calcium supplements" ,correct:false},
        ]
    },
    { 
        // number8
        question: "Which of the following is parenteral direct thrombin inhibitor ?" ,
        answers: [
            { text: "Argatroban" ,correct:true},
            { text: "Dabigatran" ,correct:false},
            { text: "Heparin" ,correct:false},
            { text: "Warfarin" ,correct:false},
        ]
    },
    { 
        // number9
        question: "Which side effect can be caused by statin therapy ?" ,
        answers: [
            { text: "Fatty liver" ,correct:false},
            { text: "New onset Diabetes" ,correct:true},
            { text: "Gout" ,correct:false},
            { text: "Flushing" ,correct:false},
        ]
    },
    { 
        // number10
        question: "Which of the following medication is anti androgen ?" ,
        answers: [
            { text: "Danazol" ,correct:false},
            { text: "Tamoxifen" ,correct:false},
            { text: "Finasteride" ,correct:true},
            { text: "Mifepristone" ,correct:false},
        ]
    },
    { 
        // number11
        question: "Before marketing phase ?" ,
        answers: [
            { text: "phase |||" ,correct:true},
            { text: "phase ||" ,correct:false},
            { text: "phase |V" ,correct:false},
            { text: "phase V" ,correct:false},
        ]
    },
    { 
        // number12
        question: "Patient take take morphine 90 mg and want replace by fentanyl patch" ,
        answers: [
            { text: "10 mg" ,correct:false},
            { text: "15 mg" ,correct:false},
            { text: "25 mg" ,correct:true},
            { text: "30 mg" ,correct:false},
        ]
    },
    { 
        // number13
        question: "Which of the following drugs both ant inflammatory and analgesic effect ?" ,
        answers: [
            { text: "Codeine" ,correct:false},
            { text: "Pethidine" ,correct:false},
            { text: "Ibuprofen" ,correct:true},
            { text: "Paracetamol" ,correct:false},
        ]
    },
    { 
        // number14
        question: "Aspirin is dispensed to an infant as antipyretic, Which of the following we should ask before dispensing the medication ?" ,
        answers: [
            { text: "Weight" ,correct:false},
            { text: "Age" ,correct:true},
            { text: "History of medications" ,correct:false},
            { text: "Head Circumference" ,correct:false},
        ]
    },
    { 
        // number15
        question: "What is ibuprofen and aspirin drug drug interaction ?" ,
        answers: [
            { text: "Increase bleeding" ,correct:true},
            { text: "decrease blood pressure" ,correct:false},
            { text: "increase blood pressure" ,correct:false},
            { text: "increase risk of myopathy" ,correct:false},
        ]
    },
    { 
        // number16
        question: "Xanthine oxidase inhibitor used in gout ?" ,
        answers: [
            { text: "sulindac" ,correct:false},
            { text: "allopurinol" ,correct:true},
            { text: "naproxen" ,correct:false},
            { text: "indomethacin" ,correct:false},
        ]
    },
    { 
        // number17
        question: "The following route of administration is not suitable for drugs with extensive hepatic first pass metabolism " ,
        answers: [
            { text: "Sublingual" ,correct:false},
            { text: "Oral" ,correct:true},
            { text: "Rectal" ,correct:false},
            { text: "Inhalation" ,correct:false},
        ]
    },
    { 
        // number18
        question: "An exaggerated normal pharmacological response to usual dose of drug is termed " ,
        answers: [
            { text: "Tolerance" ,correct:false},
            { text: "Supersensitivity" ,correct:true},
            { text: "Tachyphylaxis" ,correct:false},
            { text: "Idiosyncrasy" ,correct:false},
        ]
    },
    { 
        // number19
        question: "The ability of a drug to induce fetal malformation when given to a pregnant mother is termed :" ,
        answers: [
            { text: "Idiosyncrasy" ,correct:false},
            { text: "Tachyphylaxis" ,correct:false},
            { text: "Hypersensitivity" ,correct:false},
            { text: "Teratogenicity" ,correct:true},
        ]
    },
    { 
        // number20
        question: "The bioavailability of drugs after intravenous administration is :" ,
        answers: [
            { text: "10%" ,correct:false},
            { text: "25%" ,correct:false},
            { text: "50%" ,correct:false},
            { text: "100%" ,correct:true},
        ]
    },
    { 
        // number21
        question: "The volume of IV injection may vary from :" ,
        answers: [
            { text: "1-4 ml" ,correct:false},
            { text: "1-500 ml" ,correct:true},
            { text: "1-2 ml" ,correct:false},
            { text: "5-10 ml" ,correct:false},
        ]
    },
    { 
        // number22
        question: "The plasma concentration of theophylline after a simple IV dose of 300 mg was 9 mg/liter. calculate the volume of distribution (VD) :" ,
        answers: [
            { text: "3 L" ,correct:false},
            { text: "15 L" ,correct:false},
            { text: "33 L" ,correct:true},
            { text: "45 L" ,correct:false},
        ]
    },
    { 
        // number23
        question: "it is desired to maintain a plasma concentration of 0.15 g/L of carbenicillin in a patient. Plasma clearance equals 8.82 L/Hour. Calculate the infusion rate" ,
        answers: [
            { text: "5 gm/hour" ,correct:false},
            { text: "2.4 gm/hour" ,correct:false},
            { text: "3 gm/hour" ,correct:false},
            { text: "1.3 gm/hour" ,correct:true},
        ]
    },
    { 
        // number24
        question: "A drug has a t1/2 of 3 hours. What is the elimination rate constant (Kel) for this drug in a patient ?" ,
        answers: [
            { text: "0.15 hours" ,correct:false},
            { text: "0.231 hours" ,correct:true},
            { text: "0.33 hours" ,correct:false},
            { text: "0.6 hours" ,correct:false},
        ]
    },
    { 
        // number25
        question: "A drug was given in a loading dose of 98 mg to attain the desired plasma concentration of a 0.002 mg/ml. calculate the volume of distribution (VD)" ,
        answers: [
            { text: "39 L" ,correct:false},
            { text: "49 L" ,correct:true},
            { text: "59 L" ,correct:false},
            { text: "47 L" ,correct:false},
        ]
    },
    { 
        // number26
        question: "All of the following drugs may enhance breast milk production by increasing prolactin levels except" ,
        answers: [
            { text: "Halopridol" ,correct:false},
            { text: "Methyldopa" ,correct:false},
            { text: "Metoclopramide" ,correct:false},
            { text: "Bromocriptine" ,correct:true},
        ]
    },
    { 
        // number27
        question: "IF drug has A greater efficacy than drug B , then drug A :" ,
        answers: [
            { text: "is more toxic than drug B" ,correct:false},
            { text: "Has a greater affinity for the receptor than drug B" ,correct:false},
            { text: "Has a greater margin of safety than drug B" ,correct:false},
            { text: "is capable of producing a greater maximum effect than drug B" ,correct:true},
        ]
    },
    { 
        // number28
        question: "Digoxin is a drug still used for managing heart failure. the half-life of the drug is about 36 hours. How long will it take for blood levels of the drug to reach a steady concentration (Plateau) ?" ,
        answers: [
            { text: "36 hours" ,correct:false},
            { text: "3 days" ,correct:false},
            { text: "7 days" ,correct:true},
            { text: "14 days" ,correct:false},
        ]
    },
    { 
        // number29
        question: "Reductions of which one Pharmacokinetic factor does not account for more adverse drug effects in the elderly ?" ,
        answers: [
            { text: "absorbtion" ,correct:true},
            { text: "distribution" ,correct:false},
            { text: "hepatic metabolism" ,correct:false},
            { text: "renal excretion" ,correct:false},
        ]
    },
    { 
        // number30
        question: "Aspirin induced hemolytic anemia in G-6-PD deficiency is termed :" ,
        answers: [
            { text: "Teratogenecity" ,correct:false},
            { text: "Drug dependence" ,correct:false},
            { text: "Idiosyncrasy" ,correct:true},
            { text: "Hypersensitivity" ,correct:false},
        ]
    },
    { 
        // number31
        question: "Which of the following is the antidote in iron toxicity ?" ,
        answers: [
            { text: "Deferoxamine" ,correct:true},
            { text: "Ca gluconate" ,correct:false},
            { text: "Protamine sulfate" ,correct:false},
            { text: "Aluminum hydroxide" ,correct:false},
        ]
    },
    { 
        // number32
        question: "Which of the following is the antidote for propranolol ?" ,
        answers: [
            { text: "Insulin" ,correct:false},
            { text: "Glucagon" ,correct:true},
            { text: "Prednisone" ,correct:false},
            { text: "Calcium carbonate" ,correct:false},
        ]
    },
    { 
        // number33
        question: "Which of the following should be stopped 48 hrs before radio contrast dye imagining ?" ,
        answers: [
            { text: "Metformin" ,correct:true},
            { text: "Pioglitazone" ,correct:false},
            { text: "Acarbose" ,correct:false},
            { text: "Glipizide" ,correct:false},
        ]
    },
    { 
        // number34
        question: "which of the following medications is a member of glucagon like peptide agonists ?" ,
        answers: [
            { text: "Metformin" ,correct:false},
            { text: "Linagliptin" ,correct:false},
            { text: "Dapagliflozin" ,correct:false},
            { text: "Exenatide" ,correct:true},
        ]
    },
    { 
        // number35
        question: "Drug A has a volume of distribution of 500 L. 10% is excreted unchanged with a total clearance of 80 L/h. what is the hepatic clearance ?" ,
        answers: [
            { text: "90 L/hr" ,correct:false},
            { text: "85 L/hr" ,correct:false},
            { text: "72 L/hr" ,correct:true},
            { text: "63 L/hr" ,correct:false},
        ]
    },
    { 
        // number36
        question: "Which method is used to sterilize gloves ?" ,
        answers: [
            { text: "Autoclave" ,correct:true},
            { text: "Dry heat" ,correct:false},
            { text: "Infrared radiation" ,correct:false},
            { text: "Soap" ,correct:false},
        ]
    },
    { 
        // number37
        question: "What is the role of ministry of health about relation between MMR vaccine and autism ?" ,
        answers: [
            { text: "Recall the vaccine" ,correct:false},
            { text: "Could be targeted for specific people" ,correct:false},
            { text: "Enforce Policy Support" ,correct:true},
            { text: "There is no role for the Ministry of health" ,correct:false},
        ]
    },
    { 
        // number38
        question: "Which of the following is a side effect associated with aminoglycosides ?" ,
        answers: [
            { text: "Retinopathy" ,correct:false},
            { text: "Ototoxicity" ,correct:true},
            { text: "Alopecia" ,correct:false},
            { text: "Hepatotoxicity" ,correct:false},
        ]
    },
    { 
        // number39
        question: "Antidote of Tinzaparin ?" ,
        answers: [
            { text: "Proteins sulfate" ,correct:true},
            { text: "Vitamin K" ,correct:false},
            { text: "Prothrombin complex concentrate" ,correct:false},
            { text: "Idarucizumab" ,correct:false},
        ]
    },
    { 
        // number40
        question: "Which of the following is considered an outcome in cost utility analysis ?" ,
        answers: [
            { text: "Montary value" ,correct:false},
            { text: "Blood pressure reduction" ,correct:false},
            { text: "Dollars" ,correct:false},
            { text: "Adjusted quality of life" ,correct:true},
        ]
    },
    { 
        // number41
        question: "Patient has allergic rhinitis and the doctor wants to prescribe pseudoephedrine.Patient has a history of hypertension what should you do ?" ,
        answers: [
            { text: "Use pseudoephedrine with caution if hypertension is uncontrolled" ,correct:false},
            { text: "Don't dispense the prescription" ,correct:false},
            { text: "Use pseudoephedrine with caution if hypertension is controlled" ,correct:true},
            { text: "Pseudoephedrine can be safely used in this case" ,correct:false},
        ]
    },
    { 
        // number42
        question: "someone wants to open a pharmacy but there are no enough saudi pharmacists to hire. which of the following is true ?" ,
        answers: [
            { text: "No way to open it" ,correct:false},
            { text: "MOH may make an exception of nationality" ,correct:true},
            { text: "Anyone can open a pharmacy" ,correct:false},
            { text: "Hire anyone despite their profession" ,correct:false},
        ]
    },
    { 
        // number43
        question: "Patient was prescribed Adalimumab for rheumatoid arthritis and he knew it may cause malignancy. What is the suitable intervention ?" ,
        answers: [
            { text: "Assure him that it causes malignancy" ,correct:false},
            { text: "Tell him about benefits Vs risks of the medication" ,correct:true},
            { text: "Advice him not to take the medication" ,correct:false},
            { text: "Don't dispense the medication" ,correct:false},
        ]
    },
    { 
        // number44
        question: "Which of the following is the antidote of heparin ?" ,
        answers: [
            { text: "Protamine Sulfate" ,correct:true},
            { text: "Vitamin K" ,correct:false},
            { text: "Idarusizumab" ,correct:false},
            { text: "Prothrombin complex concentrate (PCC)" ,correct:false},
        ]
    },
    { 
        // number45
        question: "Which of the following medications decrease Warfarin Levels and decrease INR ?" ,
        answers: [
            { text: "Ceftriaxone" ,correct:false},
            { text: "Metronidazole" ,correct:false},
            { text: "Rifampin" ,correct:true},
            { text: "Erythromycin" ,correct:false},
        ]
    },
    { 
        // number46
        question: "How much litres is the plasma volume in adult person ?" ,
        answers: [
            { text: "3-5 L" ,correct:true},
            { text: "1.5 L" ,correct:false},
            { text: "9 L" ,correct:false},
            { text: "2 L" ,correct:false},
        ]
    },
    { 
        // number47
        question: "Which of the following is the appropriate age that quadrivalent menengiococcal vaccine MCV4 is given in KSA ?" ,
        answers: [
            { text: "At birth" ,correct:false},
            { text: "3 months" ,correct:false},
            { text: "6 months" ,correct:false},
            { text: "9 months" ,correct:true},
        ]
    },
    { 
        // number48
        question: "Bacterial genome consists of which of the following ?" ,
        answers: [
            { text: "RNA & DNA" ,correct:true},
            { text: "DNA only" ,correct:false},
            { text: "RNA only" ,correct:false},
            { text: "mRNA only" ,correct:false},
        ]
    },
    { 
        // number49
        question: "Which of the following vitamins has role in breast cancer prevention ?" ,
        answers: [
            { text: "Vitamin C" ,correct:false},
            { text: "Vitamin B1" ,correct:false},
            { text: "Vitamin D" ,correct:true},
            { text: "Vitamin B12" ,correct:false},
        ]
    },
    { 
        // number50
        question: "Which of the following are appropriate combination which can be used in patient suffering from glaucoma and asthma ?" ,
        answers: [
            { text: "Timolol and Propranolol" ,correct:false},
            { text: "Betaxolol and Latanoprost" ,correct:true},
            { text: "Bimatoprost" ,correct:false},
            { text: "Brimonidine and Timolol" ,correct:false},
        ]
    },
    { 
        // number51
        question: "Which of the following is the cornerstone in treatment of diarrhea ?" ,
        answers: [
            { text: "Fluids and electrolytes replacement" ,correct:true},
            { text: "Loperamind" ,correct:false},
            { text: "Nifurozoxaide" ,correct:false},
            { text: "Bismuth Subsalisylate" ,correct:false},
        ]
    },
    { 
        // number52
        question: "Patient presented with black stool. his medication history includes paracetamol and ibuprofen. Which of the following is correct ?" ,
        answers: [
            { text: "Gastrointestinal bleeding due to paracetamol" ,correct:false},
            { text: "Gastrointestinal bleeding due to Ibuprofen" ,correct:true},
            { text: "Dark stool is not a sign of Gastrointestinal Bleeding" ,correct:false},
            { text: "Black stool is normal" ,correct:false},
        ]
    },
    { 
        // number53
        question: "Which of the following immunosuppressants causes hirsutism ?" ,
        answers: [
            { text: "Prednisone" ,correct:false},
            { text: "Cyclosporine" ,correct:true},
            { text: "Tacrolimus" ,correct:false},
            { text: "Adalimumab" ,correct:false},
        ]
    },
    { 
        // number54
        question: "Which of the following label which must be written for vincristine vial ?" ,
        answers: [
            { text: "Fatal if given intrathecal only iv infusion" ,correct:true},
            { text: "Protect from light" ,correct:false},
            { text: "Should be given Intrathecally" ,correct:false},
            { text: "Protect from moisture" ,correct:false},
        ]
    },
    { 
        // number55
        question: "Which of the following is a main side effect associated with doxorubicin ?" ,
        answers: [
            { text: "Neurotoxicity" ,correct:false},
            { text: "Nephrotoxicity" ,correct:false},
            { text: "Cardiotoxicity" ,correct:true},
            { text: "Ototoxicity" ,correct:false},
        ]
    },
    { 
        // number56
        question: "Which of the following drugs is used for positive symptoms of schizophrenia ?" ,
        answers: [
            { text: "Halopridol" ,correct:true},
            { text: "levodopa" ,correct:false},
            { text: "sertraline" ,correct:false},
            { text: "citalopram" ,correct:false},
        ]
    },
    { 
        // number57
        question: "Which of the following situations allow for accepting verbal order ?" ,
        answers: [
            { text: "in a code status" ,correct:true},
            { text: "to start chemotherapy" ,correct:false},
            { text: "When prescriber is on vacation" ,correct:false},
            { text: "for a non-formulary drug request" ,correct:false},
        ]
    },
    { 
        // number58
        question: "Which of the following is used as an electronic medication dispenser to improve medication adherence ?" ,
        answers: [
            { text: "text messaging" ,correct:false},
            { text: "cell phone calendar" ,correct:false},
            { text: "E-pill multi alarm Time Cap" ,correct:false},
            { text: "Med-E-lert automatic pill dispenser" ,correct:true},
        ]
    },
    { 
        // number59
        question: "Drugs used after trial in hospital ?" ,
        answers: [
            { text: "internal validity" ,correct:false},
            { text: "external validity" ,correct:true},
            { text: "reliability" ,correct:false},
            { text: "responsibility" ,correct:false},
        ]
    },
    { 
        // number60
        question: "NSAIDs low git risk ?" ,
        answers: [
            { text: "Diclophenac sodium" ,correct:false},
            { text: "Celecoxib" ,correct:true},
            { text: "Diclophenac potassium" ,correct:false},
            { text: "ibuprofen" ,correct:false},
        ]
    },
        { 
        // number61
        question: "What is the constant rate of elimination of a drug where t1/2 is a 6 hours ?" ,
        answers: [
            { text: "0.2/hour" ,correct:false},
            { text: "0.3hour" ,correct:false},
            { text: "0.12hour" ,correct:false},
            { text: "0.11hour" ,correct:true},
        ]
    },
        { 
        // number62
        question: "A drug has a volume of distribution (Vd) of 49 litres, t1/2 of 3 hours. Calculate the clearance :" ,
        answers: [
            { text: "1.32 L/hour" ,correct:false},
            { text: "3.32 L/hour" ,correct:false},
            { text: "11.32 L/hour" ,correct:true},
            { text: "0.32 L/hour" ,correct:false},
        ]
    },
        { 
        // number63
        question: "Which one of these infections has vaccination ?" ,
        answers: [
            { text: "Varicella" ,correct:true},
            { text: "HIV" ,correct:false},
            { text: "HCV" ,correct:false},
            { text: "None" ,correct:false},
        ]
    },
        { 
        // number64
        question: "Which one of the following is more liable for influenza complications ?" ,
        answers: [
            { text: "healthy woman" ,correct:false},
            { text: "Pregnant" ,correct:true},
            { text: "Males" ,correct:false},
            { text: "11 year old child" ,correct:false},
        ]
    },
        { 
        // number65
        question: "Which of these equations is used to estimate creatinine clearance in adult ?" ,
        answers: [
            { text: "Schwartz" ,correct:false},
            { text: "Winter" ,correct:false},
            { text: "Cockcroft-Gault" ,correct:true},
            { text: "Young's" ,correct:false},
        ]
    },
        { 
        // number66
        question: "Which of the following is the most side effect associated with ICS inhaled corticosteroids ?" ,
        answers: [
            { text: "Fever" ,correct:false},
            { text: "Skin Rash" ,correct:false},
            { text: "Oral thrush" ,correct:true},
            { text: "Hair loss" ,correct:false},
        ]
    },
        { 
        // number67
        question: "Which of the following microorganism is responsible for dental carries ?" ,
        answers: [
            { text: "Streptococcus mutans" ,correct:true},
            { text: "Streptococcus pneumonia" ,correct:false},
            { text: "Streptococcus pyrogens" ,correct:false},
            { text: "Streptococcus aglactia" ,correct:false},
        ]
    },
        { 
        // number68
        question: "Young man admitted to ER with deep wound in his foot and his history of vaccination unknown. Which of the following interventions are appropriate ?" ,
        answers: [
            { text: "Give Td vaccine and TIG immunoglobulin" ,correct:true},
            { text: "Give Td vaccine only" ,correct:false},
            { text: "Give TIG immunoglobulin only" ,correct:false},
            { text: "Give nothing" ,correct:false},
        ]
    },
        { 
        // number69
        question: "A drug has a volume of distribution of 49 liters and a steady state concentration (Css) of 2 mg/liter. The loading dose is :" ,
        answers: [
            { text: "100 mg" ,correct:false},
            { text: "98 mg" ,correct:true},
            { text: "96 mg" ,correct:false},
            { text: "102 mg" ,correct:false},
        ]
    },
        { 
        // number70
        question: "Which of the following is the best timing to take insulin glargine ?" ,
        answers: [
            { text: "Before breakfast" ,correct:false},
            { text: "Before lunch" ,correct:false},
            { text: "Before dinner" ,correct:false},
            { text: "Before bedtime" ,correct:true},
        ]
    },
        { 
        // number71
        question: "Which of the following accurately defines half life ?" ,
        answers: [
            { text: "Time required for 50% of the drug to be absorbed" ,correct:false},
            { text: "Time required for 50% of the drug to be distributed" ,correct:false},
            { text: "Time required for 50% of the drug to be metabolized" ,correct:false},
            { text: "Time required for 50% of the drug to be eliminated" ,correct:true},
        ]
    },
        { 
        // number72
        question: "Which of the following is the chemical name for vitamin B12 ?" ,
        answers: [
            { text: "Cyanocobalamin" ,correct:true},
            { text: "Niacin" ,correct:false},
            { text: "Riboflavin" ,correct:false},
            { text: "Thiamine" ,correct:false},
        ]
    },
        { 
        // number73
        question: "30 year old woman came to ER with blueish sputum,diarrhea,vomiting,blue discoloration along gum line. Which heavy metal toxicity is suspected ?" ,
        answers: [
            { text: "Mercury" ,correct:false},
            { text: "Iron" ,correct:false},
            { text: "Lead" ,correct:true},
            { text: "Copper" ,correct:false},
        ]
    },
        { 
        // number74
        question: "Which of the following supplements can cause heart burn ?" ,
        answers: [
            { text: "Calcium carbonate" ,correct:false},
            { text: "Sodium hydroxide" ,correct:false},
            { text: "Potassium Chloride" ,correct:true},
            { text: "Magnesium hydroxide" ,correct:false},
        ]
    },
        { 
        // number75
        question: "Which of the following is the vector in plaque Fever ?" ,
        answers: [
            { text: "Fleas" ,correct:false},
            { text: "Tics" ,correct:false},
            { text: "Mosquito" ,correct:true},
            { text: "Worm" ,correct:false},
        ]
    },
        { 
        // number76
        question: "Which of the following can cause severe hypoglycemia ?" ,
        answers: [
            { text: "Glimeperide" ,correct:true},
            { text: "Pioglitazone" ,correct:false},
            { text: "Metformin" ,correct:false},
            { text: "Acarbose" ,correct:false},
        ]
    },
        { 
        // number77
        question: "Which of the following is an alpha hemolytic bacteria ?" ,
        answers: [
            { text: "Pseudomonas" ,correct:false},
            { text: "Actinobacter" ,correct:false},
            { text: "E.coli" ,correct:false},
            { text: "Streptococcus Pneumonia" ,correct:true},
        ]
    },
        { 
        // number78
        question: "Which of the following inhibits insulin ?" ,
        answers: [
            { text: "Cortisol" ,correct:false},
            { text: "Epinephrine" ,correct:true},
            { text: "Glucagon" ,correct:false},
            { text: "Thyroxine" ,correct:false},
        ]
    },
        { 
        // number79
        question: "Which is the indication of sevelamer ?" ,
        answers: [
            { text: "Hypernatremia" ,correct:false},
            { text: "Hyponatremia" ,correct:false},
            { text: "Hyperphosphatemia" ,correct:false},
            { text: "Hypophosphatemia" ,correct:true},
        ]
    },
        { 
        // number80
        question: "Which of the following is the recommended lab monitoring for Clozapine ?" ,
        answers: [
            { text: "Absolute Neutrophilic count" ,correct:true},
            { text: "Platelets" ,correct:false},
            { text: "Eye exam" ,correct:false},
            { text: "Liver function test" ,correct:false},
        ]
    },
        { 
        // number81
        question: "What Electrolytes are low in refeeding syndrome ?" ,
        answers: [
            { text: "Mg, K, PO4" ,correct:true},
            { text: "Mg, Cu, Al" ,correct:false},
            { text: "Ca, Na, Cu" ,correct:false},
            { text: "Na, PO4, Al" ,correct:false},
        ]
    },
        { 
        // number82
        question: "Patient with UGT1A1 mutation, which drug will have high risk of side-effects when used in such patient ?" ,
        answers: [
            { text: "Atazanavir" ,correct:true},
            { text: "Sofobuvir" ,correct:false},
            { text: "Acyclovir" ,correct:false},
            { text: "Cyclosporine" ,correct:false},
        ]
    },
        { 
        // number83
        question: "4 weeks old infant is diagnosed with patient ductus arterious. The doctor wants to avoid performing surgery. Which drug will be administrated to avoid a surgical closure ?" ,
        answers: [
            { text: "IV Propranolol" ,correct:false},
            { text: "IV Procainamide" ,correct:false},
            { text: "IV indomethacin" ,correct:true},
            { text: "IV alprostadil" ,correct:false},
        ]
    },
        { 
        // number84
        question: "Which of the following is considered high alert medication ?" ,
        answers: [
            { text: "Dextrose 50%" ,correct:true},
            { text: "0.9 NS" ,correct:false},
            { text: "Ibuprofen" ,correct:false},
            { text: "Lopermide" ,correct:false},
        ]
    },
        { 
        // number85
        question: "How many natural amino acids in the human body ?" ,
        answers: [
            { text: "20" ,correct:true},
            { text: "21" ,correct:false},
            { text: "22" ,correct:false},
            { text: "23" ,correct:false},
        ]
    },
        { 
        // number86
        question: "What vaccines are required for patient with Asthma/COPD ?" ,
        answers: [
            { text: "Meningococcus vaccine" ,correct:false},
            { text: "Pneumococcal vaccine" ,correct:true},
            { text: "Tdap" ,correct:false},
            { text: "Rubella" ,correct:false},
        ]
    },
        { 
        // number87
        question: "Which of the following is an adverse reactions associated with Cyclophosphamide ?" ,
        answers: [
            { text: "Optic neuritis" ,correct:false},
            { text: "Ototoxicity" ,correct:false},
            { text: "Hemorrhagic cystitis" ,correct:true},
            { text: "Cardiotoxicity" ,correct:false},
        ]
    },
        { 
        // number88
        question: "Which of the following is considered the most evident study ?" ,
        answers: [
            { text: "Case control" ,correct:false},
            { text: "Cross sectional" ,correct:false},
            { text: "Cohort" ,correct:false},
            { text: "Meta analysis" ,correct:true},
        ]
    },
        { 
        // number89
        question: "Which of the following committees is dedicated to developing and maintaining a list of approved medicine for the hospital medicines for the hospital use ?" ,
        answers: [
            { text: "MOH" ,correct:false},
            { text: "SFDA" ,correct:false},
            { text: "MOE" ,correct:false},
            { text: "Pharmacy & Therapeutic" ,correct:true},
        ]
    },
        { 
        // number90
        question: "Which of the following could be used for measurement in Case control design ?" ,
        answers: [
            { text: "Incidence" ,correct:false},
            { text: "Odds ratio" ,correct:true},
            { text: "Relative risk" ,correct:false},
            { text: "Relative risk ration" ,correct:false},
        ]
    },
        { 
        // number91
        question: "A drug given as 200 mg single dose , results in a peak plasma concentration of a 0.04 mg/ml. The apparent volume of distribution (Vd) is :" ,
        answers: [
            { text: "3 liters" ,correct:false},
            { text: "4 liters" ,correct:false},
            { text: "5 liters" ,correct:true},
            { text: "6 liters" ,correct:false},
        ]
    },
        { 
        // number1
        question: "what is used For Cough from Herbs ?" ,
        answers: [
            { text: "Anise" ,correct:false},
            { text: "Myrrh" ,correct:true},
            { text: "Ginger" ,correct:false},
            { text: "Peppermint" ,correct:false},
        ]
    },
    {
        // number2
        question: "what is best Known For dry Cough ?" ,
        answers: [
            { text: "Guafincin" ,correct:false},
            { text: "Dextromethorphan" ,correct:true},
            { text: "Salbutmol" ,correct:false},
            { text: "Theophylline" ,correct:false},
        ] 
    },
    {
        // number3
        question: "Warfarin Toxicity Treated with ?" ,
        answers: [
            { text: "Atropine" ,correct:false},
            { text: "Sodium BiCarbonate" ,correct:false},
            { text: "Calcium in Saline" ,correct:false},
            { text: "Vit k" ,correct:true},
        ]
    },
    {
        // number4
        question: "Digoxin toxicity Treated with ?" ,
        answers: [
            { text: "Neostigamine" ,correct:"false"},
            { text: "Defab" ,correct:"true"},
            { text: "Pyridoxine" ,correct:"false"},
            { text: "Physostigamine" ,correct:"false"},
        ]
    },
    {
        // number5
        question: "BerriBerri Comes from lack of ?" ,
        answers: [
            { text: "B2" ,correct:"false"},
            { text: "B1" ,correct:"true"},
            { text: "B6" ,correct:"false"},
            { text: "B12" ,correct:"false"},
        ]  
    },
    {
        // number6
        question: "Drugs Can Induce their effects by all the following mechanisms except " ,
        answers: [
            { text: "inhibition of target enzymes" ,correct:"false"},
            { text: "Binding to plasma proteins" ,correct:"true"},
            { text: "Binding to target receptors" ,correct:"false"},
            { text: "Blockade of iron channel" ,correct:"false"},
        ]  
    },
    {
        // number7
        question: "Pharmacokinetics  is the study of the kinetics of the drug which includes the following except " ,
        answers: [
            { text: "Absorbtion" ,correct:"false"},
            { text: "Uses" ,correct:"true"},
            { text: "Excretion" ,correct:"false"},
            { text: "Metabolism" ,correct:"false"},
        ]  
    },
    {
        // number8
        question: "Advantages of the oral route of drug administration include the following except " ,
        answers: [
            { text: "Most Convenient" ,correct:"false"},
            { text: "Best Route in emergency" ,correct:"true"},
            { text: "Easiest Route" ,correct:"false"},
            { text: "Most economic" ,correct:"false"},
        ]  
    },
    {
        // number9
        question: "The Sublingual Route of drug administration is suitable for" ,
        answers: [
            { text: "Drug Rapidly Destroyed By liver" ,correct:"true"},
            { text: "Drug used in large dose" ,correct:"false"},
            { text: "drug rapidly excreted by kidney" ,correct:"false"},
            { text: "Drug destroyed by salivary secretion" ,correct:"false"},
        ]  
    },
    {
        // number10
        question: "Advantages of the intravenous route of drug administration include the following except " ,
        answers: [
            { text: "Rapid on set" ,correct:"false"},
            { text: "Best on shock" ,correct:"false"},
            { text: "Best for highly Irritant drugs" ,correct:"false"},
            { text: "least in toxic reactions" ,correct:"true"},
        ]  
    },
    {
        // number11
        question: "The following route is the best method for administration of oily drugs " ,
        answers: [
            { text: "Intravenous" ,correct:"false"},
            { text: "Intramuscular" ,correct:"true"},
            { text: "Inhalation" ,correct:"false"},
            { text: "Sublingual" ,correct:"false"},
        ]  
    },
    {
        // number12
        question: "Enteric Coated Tablets are used in " ,
        answers: [
            { text: "Drugs irritant to stomach" ,correct:"true"},
            { text: "Drugs destroyed by intestinal enzymes" ,correct:"false"},
            { text: "Antacids drugs" ,correct:"false"},
            { text: "Drugs destroyed by saliva" ,correct:"false"},
        ]  
    },
    {
        // number13
        question: "Which of the following drugs is produced by recombinant Dna technology " ,
        answers: [
            { text: "Atropine" ,correct:"false"},
            { text: "Human Insulin" ,correct:"true"},
            { text: "Digoxin" ,correct:"false"},
            { text: "Aspirin" ,correct:"false"},
        ]  
    },
    {
        // number14
        question: "All of the Following statements concerning (simple diffusion of drugs through lipid membranes) are true except " ,
        answers: [
            { text: "it occurs along a concentration gradient" ,correct:"false"},
            { text: "it does not require cellular energy" ,correct:"false"},
            { text: "ionized drugs is lipid soluble and diffusible" ,correct:"true"},
            { text: "it does not require carrier" ,correct:"false"},
        ]  
    },
        // { 
        // number92
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number93
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number94
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number95
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number96
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number97
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number98
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number99
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number100
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number101
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number102
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number103
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number104
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
        // { 
        // number105
    //     question: "" ,
    //     answers: [
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:true},
    //         { text: "" ,correct:false},
    //         { text: "" ,correct:false},
    //     ]
    // },
];

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer_btn");
const nextButton = document.getElementById("next_btn");
const previousButton = document.getElementById("previous_btn");
const finishButton = document.getElementById("finish_btn");
const calculator = document.getElementById("helper-calculator");
const calculator_button = document.getElementById("calculator_button");
const timerElement = document.getElementById("timer"); 

let currentQuestionIndex = 0;
let sofa = 0;
let timer;

const quizDuration = 7200;

// Create form element
var loginForm = document.createElement("form");
loginForm.setAttribute("id", "loginForm");

// Create username input field
var usernameInput = document.createElement("input");
usernameInput.setAttribute("type", "text");
usernameInput.setAttribute("placeholder", "Username");
usernameInput.setAttribute("id", "username");

// Create password input field
var passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Password");
passwordInput.setAttribute("id", "password");

// Create submit button
var submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Login");

// Append elements to form
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(submitButton);

// Append form to the document body
document.body.appendChild(loginForm);

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
    login(enteredUsername, enteredPassword); // Call the login function with entered credentials
});


function login(usernameInput, passwordInput) {
    if (usernameInput === "ahmedessam" && passwordInput === "essam@1993") {
        startQuiz(); // Call startQuiz if credentials are correct
    } 
    else if (usernameInput === "m" && passwordInput === "m") {
        startQuiz(); // Call startQuiz if credentials are correct
    } 
    else if (usernameInput === "hawary" && passwordInput === "hawary@2024") {
        startQuiz(); // Call startQuiz if credentials are correct
    } else {
        alert("Please enter your username and password right");
    }
}

// startQuiz();
function startQuiz() {
    // Perform actions to start the quiz
    currentQuestionIndex = 0;
    sofa = 0;
    nextButton.innerHTML = "Next";
    previousButton.innerHTML = "Previous";
    showQuestion();
    startTimer();
    hideLoginForm();
}

// function previewPreviousQuestion() {
//     if (currentQuestionIndex > 0) {
//             currentQuestionIndex--;
//             nextButton.innerHTML = "Next";
//             previousButton.innerHTML = "Previous";
//             showQuestion();
//             hideLoginForm();
//     }
// }

function hideLoginForm() {
    loginForm.classList.add("hidden");
}

function startTimer() {
    let timeRemaining = quizDuration;

    timer = setInterval(function () {
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;

        timerElement.innerHTML = `Time: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            Score();
        }

        timeRemaining--;
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    // previousButton.style.display = "block";
    finishButton.style.display = "block";
    calculator_button.style.display = "block";  // or "flex" depending on the display style you want
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    };
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("perfecto");
        sofa++;
    }else{
        selectedButton.classList.add("shit");
    }
    Array.from(answersButton.children).forEach( button => {
        if (button.dataset.correct === "true") {
            button.classList.add("perfecto")
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
    // previousButton.style.display = "block";
    finishButton.style.display = "block";
}

function finishQuiz() {
    Score();
    currentQuestionIndex = questions.length;
}

function addEventListeners() {
    finishButton.addEventListener("click", finishQuiz);
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            startNext();
        } else if (currentQuestionIndex === questions.length) {
            Score();
        } else {
            currentQuestionIndex = 0; // Reset currentQuestionIndex to 0 to start the quiz again
            startQuiz(); // Start the quiz again
        }
    });
    // previousButton.addEventListener("click", previewPreviousQuestion);
}

addEventListeners();

function startNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        Score();
    }
}

function Score() {
    clearInterval(timer);
    resetState();
    questionElement.innerHTML = `Congratulations ! you scored ${sofa} out of ${questions.length}`;
    nextButton.innerHTML = "The End";
    nextButton.style.display = "block";
    previousButton.innerHTML = "Try Again";
    // previousButton.style.display = "block";
    finishButton.style.display = "none";
    calculator_button.style.display = "none";  // or "flex" depending on the display style you want
}
calculator_button.addEventListener("click", () => {
    if (calculator.style.display === "none") {
        calculator.style.display = "block";  // or "flex" depending on the display style you want
        // calculator_button.classList.add("actived");
    } else {
        calculator.style.display = "none";
        // calculator_button.classList.remove("actived");
    }
});

