const questions = [
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
    {
        // number15
        question: "Concerning Characteristics of (Zero order kinetics) which of the following is correct :",
        answers: [
            { text: "the t 1/2 is constant" ,correct:"false"},
            { text: "Log-Plasma Concentration-time curve is linear" ,correct:"false"},
            { text: "The rate of the process is proportional to the concentration of the drug" ,correct:"false"},
            { text: "A constant amount of drug is eliminated per unit time" ,correct:"true"},
        ]  
    },
    {
        // number16
        question: "A highly irritant drug in the form of an aqueous solution can be administered by" ,
        answers: [
            { text: "Subcutaneous injection" ,correct:"false"},
            { text: "Intramuscular injection" ,correct:"false"},
            { text: "Intravenous injection" ,correct:"true"},
            { text: "intra-articular injection" ,correct:"false"},
        ]  
    },
    {
        // number17
        question: "All of the following are possible consequences of phase 1 (non-synthetic) biotransformation EXCEPT " ,
        answers: [
            { text: "Production of a pharmacologically inactive metabolite" ,correct:"false"},
            { text: "conversion of one pharmacologically active to another active substance" ,correct:"false"},
            { text: "conversion of a pharmacologically inactive to an active substance" ,correct:"false"},
            { text: "Combination of a drug with an endogenous substance" ,correct:"true"},
        ]  
    },
    {
        // number18
        question: "Which of the following is correct as regards to drugs bound to plasma protein " ,
        answers: [
            { text: "Pharmacologically active" ,correct:"false"},
            { text: "Diffusible through capillary walls" ,correct:"false"},
            { text: "Excreted by glomerular filtration" ,correct:"false"},
            { text: "A reservoir from which free drug can be dissociated" ,correct:"true"},
        ]  
    },
    {
        // number19
        question: "Which of the following can inhibit hepatic microsomal enzymes" ,
        answers: [
            { text: "Phenobarbitone" ,correct:"false"},
            { text: "Valporic acid" ,correct:"true"},
            { text: "Phenytoin" ,correct:"false"},
            { text: "Rifampicin" ,correct:"false"},
        ]
    },
    {
        // number20
        question: "Who's responsible for accreditation of health care systems ?" ,
        answers: [
            { text: "SFDA" ,correct:"false"},
            { text: "WHO" ,correct:"false"},
            { text: "MOH" ,correct:"false"},
            { text: "CBAHI" ,correct:"true"},
        ]
    },
    {
        // number21
        question: "Which of the following error detection strategies result in limiting detection ?" ,
        answers: [
            { text: "Bar-coding" ,correct:"false"},
            { text: "trigger tools" ,correct:"false"},
            { text: "voluntary reporting" ,correct:"false"},
            { text: "mandatory reporting" ,correct:"true"},
        ]
    },
    {
        // number22
        question: "Which of the following is phase-|| reaction of drug metabolism" ,
        answers: [
            { text: "Oxidation" ,correct:"false"},
            { text: "Hydrolysis" ,correct:"false"},
            { text: "Reduction" ,correct:"false"},
            { text: "Acetylation" ,correct:"true"},
        ]
    },
    {
        // number23
        question: "Which of the following is the precursor for 5_hydroxytryptamine ?" ,
        answers: [
            { text: "Proline" ,correct:"false"},
            { text: "alanine" ,correct:"false"},
            { text: "glutamine" ,correct:"false"},
            { text: "tryptophan" ,correct:"true"},
        ]
    },
    {
        // number24
        question: "What is the antidote of heparin toxicity ?" ,
        answers: [
            { text: "Protamine sulfate" ,correct:"true"},
            { text: "Sodium Salicylate" ,correct:"false"},
            { text: "Naloxone" ,correct:"false"},
            { text: "Glucagon" ,correct:"false"},
        ]
    },
    {
        // number25
        question: "Which of the following anesthetics drugs has a higher risk of causing anemia " ,
        answers: [
            { text: "propofol" ,correct:"false"},
            { text: "ketamine" ,correct:"false"},
            { text: "isoflurane" ,correct:"false"},
            { text: "nitrous oxide" ,correct:"true"},
        ]
    },
    {
        // number26
        question: "Which Amino acid we give for anorexia ?" ,
        answers: [
            { text: "alanine" ,correct:"false"},
            { text: "arginine" ,correct:"false"},
            { text: "valine" ,correct:"true"},
            { text: "thymine" ,correct:"false"},
        ]
    },
    {
        // number27
        question: "Glucosamine uses for " ,
        answers: [
            { text: "osteoporosis" ,correct:"false"},
            { text: "osteomyelitis" ,correct:"false"},
            { text: "osteoarthritis" ,correct:"true"},
            { text: "Diabetes mellitus" ,correct:"false"},
        ]
    },
    {
        // number28
        question: "which the carrier in krebs cycle ?" ,
        answers: [
            { text: "Citric acid" ,correct:"false"},
            { text: "oxaloacetate" ,correct:"false"},
            { text: "NADH" ,correct:"true"},
            { text: "lactic acid" ,correct:"false"},
        ]
    },
    {
        // number29
        question: "number of atp in glycolysis ?" ,
        answers: [
            { text: "1" ,correct:"false"},
            { text: "22" ,correct:"false"},
            { text: "24" ,correct:"false"},
            { text: "2" ,correct:"true"},
        ]
    },
    {
        // number30
        question: "Acetyl coA and citric acid cycle which vitamin is used ?" ,
        answers: [
            { text: "B6" ,correct:"false"},
            { text: "B12" ,correct:"false"},
            { text: "B2" ,correct:"true"},
            { text: "B9" ,correct:"false"},
        ]
    },
    {
        // number31
        question: "which of the following is anticoagulant agent" ,
        answers: [
            { text: "Aspirin" ,correct:"false"},
            { text: "Warfarin" ,correct:"true"},
            { text: "clopidogril" ,correct:"false"},
            { text: "D.streptokinase" ,correct:"false"},
        ]
    },
    {
        // number32
        question: "Risk factors for DVT ?" ,
        answers: [
            { text: "Age" ,correct:"false"},
            { text: "food rich of VK" ,correct:"false"},
            { text: "surgery" ,correct:"true"},
            { text: "sex" ,correct:"false"},
        ]
    },
    {
        // number33
        question: "Which type of Medication error if patient experiences anaphylaxis shock from prescribed drug ?" ,
        answers: [
            { text: "Category c" ,correct:"false"},
            { text: "Category D" ,correct:"false"},
            { text: "Category H" ,correct:"true"},
            { text: "Category I" ,correct:"false"},
        ]
    },
    {
        // number34
        question: "A Patient visit Pharmacy with a prescription, but the brand of drug prescribed is un available, What is the best action ?" ,
        answers: [
            { text: "Give same active ingredient in other brand and counsel patient on the change" ,correct:"true"},
            { text: "Give same active ingredient in other brand without telling patient anything" ,correct:"false"},
            { text: "don't dispense the prescription" ,correct:"false"},
            { text: "dispense drug with other active ingredient with same company" ,correct:"false"},
        ]
    },
    {
        // number35
        question: "Which Antacid cause low magnesium levels in patient ?" ,
        answers: [
            { text: "Ranitidine" ,correct:"false"},
            { text: "Proton-pump inhibitor" ,correct:"true"},
            { text: "Sucralfate" ,correct:"false"},
            { text: "Misoprostol" ,correct:"false"},
        ]
    },
    {
        // number36
        question: "Which cause hypertensive crisis in patient on lisinopril, metformin, topiramate, phenelzine. eats tyramine-rich foods ?" ,
        answers: [
            { text: "Lisinopril" ,correct:"false"},
            { text: "Topiramate" ,correct:"false"},
            { text: "Metformin" ,correct:"false"},
            { text: "Phenelzine" ,correct:"true"},
        ]
    },
    {
        // number37
        question: "Which of the following responsible for managing the procurement of medicines, devices and medical supplies for government hospitals and healthcare facilities ?" ,
        answers: [
            { text: "Saudi Central Board for accreditation of healthcare institutions" ,correct:"false"},
            { text: "saudi food and drug administration" ,correct:"false"},
            { text: "Ministry of health of Saudi Arabia" ,correct:"false"},
            { text: "National Unified procurement company" ,correct:"true"},
        ]
    },
    {
        // number38
        question: "Who should the background, affect, Troubling, Handling, and empathy (BATHE) interviewing technique be used for ?" ,
        answers: [
            { text: "Neonatal Intensive care Patient" ,correct:"false"},
            { text: "Pediatric Patients" ,correct:"false"},
            { text: "Palliative care patient" ,correct:"true"},
            { text: "Hypotension patients" ,correct:"false"},
        ]
    },
    {
        // number39
        question: "What is the mechanism of action of mannitol ?" ,
        answers: [
            { text: "increase osmotic pressure" ,correct:"true"},
            { text: "decrease osmotic pressure" ,correct:"false"},
            { text: "don't change osmotic pressure" ,correct:"false"},
            { text: "increase glomerular filtration by decrease osmotic pressure" ,correct:"false"},
        ]
    },
    {
        // number40
        question: "Which of the following vitamins may speed wound healing ?" ,
        answers: [
            { text: "B9 (folic acid)" ,correct:"false"},
            { text: "B5 (pantothenic acid)" ,correct:"true"},
            { text: "D (calciferol)" ,correct:"false"},
            { text: "E (tocopherol)" ,correct:"false"},
        ]
    },
    {
        // number41
        question: "Which of the following hypertension drug prefers for patients with severe liver dysfunction ?" ,
        answers: [
            { text: "Lisinopril" ,correct:"true"},
            { text: "Ramipril" ,correct:"false"},
            { text: "Enalapril" ,correct:"false"},
            { text: "Perindopril" ,correct:"false"},
        ]
    },
    {
        // number42
        question: "Which of the following parameter need monitoring before first dose of fingolimod ?" ,
        answers: [
            { text: "Sensitivity test" ,correct:"false"},
            { text: "Kidney function test" ,correct:"false"},
            { text: "Heart Rate (ECG)" ,correct:"true"},
            { text: "Vision changes" ,correct:"false"},
        ]
    },
    {
        // number43
        question: "Which of the following is first line for low activity rheumatoid arthritis ?" ,
        answers: [
            { text: "Mercaptopurine" ,correct:"false"},
            { text: "Hydroxycloroqueen" ,correct:"true"},
            { text: "Abatacept" ,correct:"false"},
            { text: "Adalimumab" ,correct:"false"},
        ]
    },
    {
        // number44
        question: "Mother read the leaflet and found different indication than her daughter disease, what the mother level of education ?" ,
        answers: [
            { text: "very basic" ,correct:"false"},
            { text: "Basic" ,correct:"false"},
            { text: "intermediate" ,correct:"true"},
            { text: "professional" ,correct:"false"},
        ]
    },
    {
        // number45
        question: "How get in-depth information in research ?" ,
        answers: [
            { text: "survey" ,correct:"false"},
            { text: "questioners" ,correct:"false"},
            { text: "reviewing medical records" ,correct:"false"},
            { text: "focus group" ,correct:"true"},
        ]
    },
    {
        // number46
        question: "What is the function of small nuclear (snRNAs) in protein synthesis ?" ,
        answers: [
            { text: "ACT as catalyst" ,correct:"false"},
            { text: "Genetic blueprint for the protein" ,correct:"false"},
            { text: "translates genetic code to amino acid" ,correct:"false"},
            { text: "modifies mRNA molecules" ,correct:"true"},
        ]
    },
    {
        // number47
        question: "What is the intervention is A1c 6.8, he on metformin 850 BID fasting glucose are all normal, but one slightly higher ?" ,
        answers: [
            { text: "add sulfonylurea" ,correct:"false"},
            { text: "continue on his medication" ,correct:"true"},
            { text: "increase metformin dose" ,correct:"false"},
            { text: "decrease metformin dose" ,correct:"false"},
        ]
    },
    {
        // number48
        question: "what is the maximum initial dose of lamotrigine with valporic acid ?" ,
        answers: [
            { text: "25 mg PO daily for 2 weeks" ,correct:"true"},
            { text: "50 mg PO daily for 2 weeks" ,correct:"false"},
            { text: "100 mg PO daily for 2 weeks" ,correct:"false"},
            { text: "400 mg PO daily for 2 weeks" ,correct:"false"},
        ]
    },
    {
        // number49
        question: "which of the following antibiotic used for malaria prophylaxis before travel ?" ,
        answers: [
            { text: "Ampicillin" ,correct:"false"},
            { text: "Doxycycline" ,correct:"true"},
            { text: "Cefdinir" ,correct:"false"},
            { text: "Vancomycin" ,correct:"false"},
        ]
    },
    {
        // number50
        question: "which of the following antihistamine suitable for pharmacy student have exams and suffering from allergic rhinitis ?" ,
        answers: [
            { text: "Promethazine" ,correct:"false"},
            { text: "Fexofenadine" ,correct:"true"},
            { text: "Chlorphenamine" ,correct:"false"},
            { text: "Diphenydramine" ,correct:"false"},
        ]
    },
    {
        // number51
        question: "Which of the following biochemical reaction need to convert codeine to morphine ?" ,
        answers: [
            { text: "Dealkylation" ,correct:"true"},
            { text: "Reduction" ,correct:"false"},
            { text: "Hydrolysis" ,correct:"false"},
            { text: "Methylation" ,correct:"false"},
        ]
    },
    {
        // number52
        question: "What is the relationship between childhood vaccines and autism ?" ,
        answers: [
            { text: "MMR vaccine causes autism" ,correct:"false"},
            { text: "any vaccine can cause autism" ,correct:"false"},
            { text: "Hepatitis B vaccine causes autism" ,correct:"false"},
            { text: "None of the vaccines causes autism" ,correct:"true"},
        ]
    },
    {
        // number53
        question: "What type of antibody is adalimumab ?" ,
        answers: [
            { text: "Human recombinant immunoglobulin" ,correct:"true"},
            { text: "chimeric immunoglobulin" ,correct:"false"},
            { text: "murine antibodies" ,correct:"false"},
            { text: "humanized antibodies" ,correct:"false"},
        ]
    },
    {
        // number54
        question: "Which of the following inhibits insulin ?" ,
        answers: [
            { text: "Glucose" ,correct:"false"},
            { text: "Epinephrine" ,correct:"true"},
            { text: "Cortisol" ,correct:"false"},
            { text: "Glucagon" ,correct:"false"},
        ]
    },
    {
        // number55
        question: "What is the caused of interaction between smoking and theophylline ?" ,
        answers: [
            { text: "Smoking decreases metabolism thereby, decreases levels of theophylline" ,correct:"false"},
            { text: "smoking increase metabolism thereby, decreases levels of theophylline" ,correct:"true"},
            { text: "smoking increase metabolism thereby, increase levels of theophylline" ,correct:"false"},
            { text: "smoking decreases metabolism thereby, increases levels of theophylline" ,correct:"false"},
        ]
    },
    {
        // number56
        question: "Which immunoglobulin IG activates mast cells ?" ,
        answers: [
            { text: "immunoglobulin E" ,correct:"true"},
            { text: "immunoglobulin G" ,correct:"false"},
            { text: "immunoglobulin A" ,correct:"false"},
            { text: "immunoglobulin D" ,correct:"false"},
        ]
    },
    {
        // number57
        question: "case about patient diagnosed with GAD and doctors agree that he needs long acting benzodiazepines" ,
        answers: [
            { text: "lorazepam" ,correct:"false"},
            { text: "alprazolam" ,correct:"false"},
            { text: "midazolam" ,correct:"false"},
            { text: "diazepam" ,correct:"true"},
        ]
    },
    {
        // number58
        question: "patient has chronic sleep problems what is the best medication ?" ,
        answers: [
            { text: "Zolpidem" ,correct:"true"},
            { text: "lorazepam" ,correct:"false"},
            { text: "diazepam" ,correct:"false"},
            { text: "Midazolam" ,correct:"false"},
        ]
    },
    {
        // number59
        question: "The patient had her last period before the 13 months. she's experiencing hot flashes, she has a historycotomy, Best choice ?" ,
        answers: [
            { text: "Estrogen" ,correct:"true"},
            { text: "Progesterone" ,correct:"false"},
            { text: "Estrogen and progesterone" ,correct:"false"},
            { text: "Progesterone and aldosterone" ,correct:"false"},
        ]
    },
    {
        // number60
        question: "hepatic insufficiency and recently diagnosed with tonic clonic seizure, what is the best treatment ?" ,
        answers: [
            { text: "Phenytoin" ,correct:"false"},
            { text: "Valporic acid" ,correct:"false"},
            { text: "Ethosuxmide" ,correct:"false"},
            { text: "Gabapentin" ,correct:"true"},
        ]
    },
    {
        // number61
        question: "which of the following insulin has the longest duration of action ?" ,
        answers: [
            { text: "Aspart" ,correct:"false"},
            { text: "Detemir" ,correct:"false"},
            { text: "Glargine" ,correct:"false"},
            { text: "Degludec" ,correct:"true"},
        ]
    },
    {
        // number62
        question: "What is the effect of smoking on theophylline ?" ,
        answers: [
            { text: "inhibition of CYP3A4" ,correct:"false"},
            { text: "inducer of CYP1A2" ,correct:"true"},
            { text: "No effect" ,correct:"false"},
            { text: "Decrease excretion of theophylline" ,correct:"false"},
        ]
    },
    {
        // number63
        question: "Which herb causes hypoglycemia ?" ,
        answers: [
            { text: "St johns wart" ,correct:"false"},
            { text: "Fenugreek" ,correct:"true"},
            { text: "Anise" ,correct:"false"},
            { text: "peppermint" ,correct:"false"},
        ]
    },
    {
        // number64
        question: "Patient forgets her tablet in bathroom what will happen to tablet ?" ,
        answers: [
            { text: "Hydrosis" ,correct:"true"},
            { text: "Esterficaion" ,correct:"false"},
            { text: "Oxidation" ,correct:"false"},
            { text: "Carboxylation" ,correct:"false"},
        ]
    },
    {
        // number65
        question: "thyroid toxicity ?" ,
        answers: [
            { text: "Amiodarone" ,correct:"true"},
            { text: "Digoxin" ,correct:"false"},
            { text: "Warfarin" ,correct:"false"},
            { text: "Piracetam" ,correct:"false"},
        ]
    },
    {
        // number66
        question: "amount of drug is 5 mg in 1 ml what is the amount of drug in 1 tsp in microgram ?" ,
        answers: [
            { text: "5" ,correct:"false"},
            { text: "25" ,correct:"false"},
            { text: "2500" ,correct:"false"},
            { text: "25000" ,correct:"true"},
        ]
    },
    {
        // number67
        question: "A solution is made by dissolving 17.52 g of NaCl exactly 2000 ml. what is the molarity of this solution ?" ,
        answers: [
            { text: "3.33" ,correct:"false"},
            { text: "0.15" ,correct:"true"},
            { text: "3.00 * 10 -4" ,correct:"false"},
            { text: "1.6 * 10 -4" ,correct:"false"},
        ]
    },
    {
        // number68
        question: "5ml of injection that conc. 0.4% calculate the amount of drug ?" ,
        answers: [
            { text: "0.2 mg" ,correct:"false"},
            { text: "2 mg" ,correct:"false"},
            { text: "20 mg" ,correct:"true"},
            { text: "200 mg" ,correct:"false"},
        ]
    },
    {
        // number69
        question: "Prescription : Hydrocortisone 2% w/w , cold cream 60 gm , you have hydrocortisone solu. 100mg/ml.. how many milliliters will you use from the solution ?" ,
        answers: [
            { text: "10 ml" ,correct:"false"},
            { text: "12.25 ml" ,correct:"true"},
            { text: "24.5 ml" ,correct:"false"},
            { text: "6.125 ml" ,correct:"false"},
        ]
    },
    {
        // number70
        question: "How gm of substance X must added to 2000 gm of 10% substance X solution in order to prepare 25% of substance X solution" ,
        answers: [
            { text: "400 gm" ,correct:"true"},
            { text: "40 gm" ,correct:"false"},
            { text: "4 gm" ,correct:"false"},
            { text: "0.4 gm" ,correct:"false"},
        ]
    },
    {
        // number71
        question: "A patient weighting 80 Kg is supposed to receive a drug at a dose of 2mg/kg/day. what is the dose that the patient should take for each day :" ,
        answers: [
            { text: "40 mg" ,correct:"false"},
            { text: "80 mg" ,correct:"false"},
            { text: "160 mg" ,correct:"true"},
            { text: "320 mg" ,correct:"false"},
        ]
    },
    {
        // number72
        question: "Drug X is a given to a 70 kg patient at an infusion rate of 0.95 mg/kg/hr. How much drug we need for a 12-hr infusion bottle" ,
        answers: [
            { text: "798 mg" ,correct:"true"},
            { text: "66.5 mg" ,correct:"false"},
            { text: "665 mg" ,correct:"false"},
            { text: "84 mg" ,correct:"false"},
        ]
    },
    {
        // number73
        question: "Which of the following is the function of the pharmacy and therapeutic committee in a hospital ?" ,
        answers: [
            { text: "Responsible for poison management" ,correct:"false"},
            { text: "Monitor the adverse reaction reporting" ,correct:"false"},
            { text: "Monitor the medication error reporting" ,correct:"false"},
            { text: "responsible for drug formulary management" ,correct:"true"},
        ]
    },
    {
        // number74
        question: "Which of the following distribution systems works better for medicine requiring a higher level of controls ?" ,
        answers: [
            { text: "Bulk ward stock" ,correct:"false"},
            { text: "Direct Procurement" ,correct:"false"},
            { text: "Automated dispensing" ,correct:"true"},
            { text: "individual medication order" ,correct:"false"},
        ]
    },
    {
        // number75
        question: "which of the following medication has a side effect of metallic taste ?" ,
        answers: [
            { text: "cefuroxime" ,correct:"false"},
            { text: "azithromycin" ,correct:"false"},
            { text: "ciprofloxacin" ,correct:"false"},
            { text: "metronidazole" ,correct:"true"},
        ]
    },
    {
        // number76
        question: "Which of the following anesthetics drug has a higher risk of causing hepatic toxicity ?" ,
        answers: [
            { text: "Propofol" ,correct:"false"},
            { text: "Ketamine" ,correct:"false"},
            { text: "Isoflurane" ,correct:"true"},
            { text: "Nitrous oxide" ,correct:"false"},
        ]
    },
    {
        // number77
        question: "What is the type of anemia lack of intrinsic factor ?" ,
        answers: [
            { text: "Megaloblastic anemia" ,correct:"false"},
            { text: "Pernicious anemia" ,correct:"true"},
            { text: "Hemolytic anemia" ,correct:"false"},
            { text: "Aplastic anemia" ,correct:"false"},
        ]
    },
    {
        // number78
        question: "which drug is used to treat an anaphylactic reaction ?" ,
        answers: [
            { text: "Atropine" ,correct:"false"},
            { text: "Adrenaline" ,correct:"true"},
            { text: "Isoprinosine" ,correct:"false"},
            { text: "Phentolamine" ,correct:"false"},
        ]
    },
    {
        // number79
        question: "in which phase of clinical trials is the investigative drug compared with another drug ?" ,
        answers: [
            { text: "phase 0" ,correct:"false"},
            { text: " phase 1" ,correct:"false"},
            { text: "phase 2" ,correct:"false"},
            { text: "phase 3" ,correct:"true"},
        ]
    },
    {
        // number80
        question: "What is the measurement unit of a cost utility analysis (CUA)?" ,
        answers: [
            { text: "Neutral Unite" ,correct:"false"},
            { text: "Monitory" ,correct:"false"},
            { text: "Quality-adjusted life years" ,correct:"true"},
            { text: "Willingness-to-pay" ,correct:"false"},
        ]
    },
    {
        // number81
        question: "What vaccine are required for patient with COPD ?" ,
        answers: [
            { text: "BCG Vaccine" ,correct:"false"},
            { text: "Pneumococcal polysaccharide vaccine" ,correct:"true"},
            { text: "Oral polio vaccine" ,correct:"false"},
            { text: "Hepatitis B vaccine" ,correct:"false"},
        ]
    },
    {
        // number82
        question: "Which of the following vaccine used to prevent shingles ?" ,
        answers: [
            { text: "Varicella vaccine" ,correct:"false"},
            { text: "HPV vaccine" ,correct:"false"},
            { text: "pneumococcal conjugate vaccine" ,correct:"false"},
            { text: "Zoster vaccine" ,correct:"true"},
        ]
    },
    {
        // number83
        question: "What type of pharmacoeconomics analysis should be conducted for two medications with different costs and effectiveness ?" ,
        answers: [
            { text: "Cost minimization analysis" ,correct:"false"},
            { text: "Cost benefit analysis" ,correct:"false"},
            { text: "cost effectiveness analysis" ,correct:"true"},
            { text: "Cost utility analysis" ,correct:"false"},
        ]
    },
    {
        // number84
        question: "A doctor wants to compare between cefazolin and oxacillin in treating infection, what source should he check ?" ,
        answers: [
            { text: "Random Control Trials (RCTs)" ,correct:"true"},
            { text: "Case report" ,correct:"false"},
            { text: "Case control studies" ,correct:"false"},
            { text: "Cohort studies" ,correct:"false"},
        ]
    },
    {
        // number85
        question: "Which infection is considered critical in pregnant woman ?" ,
        answers: [
            { text: "Tetanus" ,correct:"false"},
            { text: "Toxoplasmosis" ,correct:"true"},
            { text: "Malaria" ,correct:"false"},
            { text: "Pinworm" ,correct:"false"},
        ]
    },
    {
        // number86
        question: "Which of the following medication can cause severe diarrhea ?" ,
        answers: [
            { text: "Leucovorin" ,correct:"false"},
            { text: "Irinotecan" ,correct:"true"},
            { text: "Peglotigase" ,correct:"false"},
            { text: "Rasburicase" ,correct:"false"},
        ]
    },
    {
        // number87
        question: "Which of the following is best used to treat pinworm infection ?" ,
        answers: [
            { text: "Metronidazole" ,correct:"false"},
            { text: "Albendazole" ,correct:"true"},
            { text: "Ketoconazole" ,correct:"false"},
            { text: "Rifampicin" ,correct:"false"},
        ]
    },
    {
        // number89
        question: "Which of the following is the max dose of statin in patient taking verapamil ?" ,
        answers: [
            { text: "4 mg" ,correct:"false"},
            { text: "5 mg" ,correct:"false"},
            { text: "10 mg" ,correct:"true"},
            { text: "40 mg" ,correct:"false"},
        ]
    },
    {
        // number90
        question: "Diabetic patient was diagnosed with chronic liver failure, he is currently on metformin, Enalapril , Pioglitazone and insulin. which medication should be stopped ?" ,
        answers: [
            { text: "Metformin" ,correct:"false"},
            { text: "Enalapril" ,correct:"false"},
            { text: "Pioglitazone" ,correct:"true"},
            { text: "insulin" ,correct:"false"},
        ]
    },
    {
        // number91
        question: "T lymphocyte is considered a part of which immunity ?" ,
        answers: [
            { text: "Natural immunity" ,correct:"false"},
            { text: "Adaptive immunity" ,correct:"true"},
            { text: "Active immunity" ,correct:"false"},
            { text: "Passive immunity" ,correct:"false"},
        ]
    },
    {
        // number92
        question: "Which of the following drugs can enhance clopidogril effects ?" ,
        answers: [
            { text: "Omeprazole" ,correct:"false"},
            { text: "Cimetidine" ,correct:"false"},
            { text: "Phenytoin" ,correct:"true"},
            { text: "Valporic acid" ,correct:"false"},
        ]
    },
    {
        // number93
        question: "Patient was diagnosed with urinary tract infection, he has a history of G6PD deficiency , which of the following antibiotics should be avoided ?" ,
        answers: [
            { text: "Nitrofurantoin" ,correct:"true"},
            { text: "ampicillin" ,correct:"false"},
            { text: "Gentamicin" ,correct:"false"},
            { text: "Levofloxacin" ,correct:"false"},
        ]
    },
    {
        // number94
        question: "Which type of cost is anxiety and fear ?" ,
        answers: [
            { text: "Direct medical cost" ,correct:"false"},
            { text: "Direct non medical cost" ,correct:"false"},
            { text: "Intangible cost" ,correct:"true"},
            { text: "Indirect cost" ,correct:"false"},
        ]
    },
    {
        // number95
        question: "Which of the following medications has role in treatment of respiratory syncytial virus (RSV) in newborn ?" ,
        answers: [
            { text: "Ribavirin" ,correct:"true"},
            { text: "Omalizumab" ,correct:"false"},
            { text: "Doxycycline" ,correct:"false"},
            { text: "Azithromycin" ,correct:"false"},
        ]
    },
    {
        // number96
        question: "Which of the following medications can be used in diabetic insipidus ?" ,
        answers: [
            { text: "Oxytocin" ,correct:"false"},
            { text: "Convapatan" ,correct:"false"},
            { text: "Desmopressin" ,correct:"true"},
            { text: "Tolcapone" ,correct:"false"},
        ]
    },
    {
        // number97
        question: "Which of the following is the active form of vitamin D ?" ,
        answers: [
            { text: "1,25 dihydroxycholecalciferol" ,correct:"true"},
            { text: "calcidiol" ,correct:"false"},
            { text: "25 hydroxycholecalciferol" ,correct:"false"},
            { text: "Ergocalciferol" ,correct:"false"},
        ]
    },
    {
        // number98
        question: "Patient presented to ER with pinpoint pupil, which drug overdose is suspected ?" ,
        answers: [
            { text: "Heroine" ,correct:"true"},
            { text: "Naloxone" ,correct:"false"},
            { text: "Atropine" ,correct:"false"},
            { text: "Scopolamine" ,correct:"false"},
        ]
    },
    {
        // number99
        question: "Which of the following is considered high intensity statin ?" ,
        answers: [
            { text: "Rosuvastatin 20 mg" ,correct:"true"},
            { text: "Atorvastatin 10 mg" ,correct:"false"},
            { text: "Pitavastatin 1 mg" ,correct:"false"},
            { text: "Simavastatin 20 mg" ,correct:"false"},
        ]
    },
    {
        // number100
        question: "ISO 5 ?" ,
        answers: [
            { text: "100" ,correct:"true"},
            { text: "1000" ,correct:"false"},
            { text: "10000" ,correct:"false"},
            { text: "10" ,correct:"false"},
        ]
    },
    {
        // number101
        question: "25 years old female didn't exposed to the sun two months ago , when she exposed for two minutes she got er face sun burn , doctor prescribed her sun block when she applied it for 18 minutes she got the same degree of sun burn but in her back. what is the calculated sun block spf ?" ,
        answers: [
            { text: "spf 7" ,correct:"false"},
            { text: "spf 9" ,correct:"true"},
            { text: "spf 10" ,correct:"false"},
            { text: "spf 15" ,correct:"false"},
        ]
    },
    {
        // number102
        question: "patient suffers from short term insomnia and is prescribed zolpidem , how many refills should be given ?" ,
        answers: [
            { text: "0 refills" ,correct:"true"},
            { text: "1 refill" ,correct:"false"},
            { text: "2 refills" ,correct:"false"},
            { text: "3 refills" ,correct:"false"},
        ]
    },
    {
        // number103
        question: "A doctor was in contact with a patient with C.difficile the doctor wiped his hand with antiseptic wipes " ,
        answers: [
            { text: "Need to use hand sanitizer" ,correct:"false"},
            { text: "Antiseptic wipe is enough" ,correct:"false"},
            { text: "Need to wash hands with soap and water" ,correct:"true"},
            { text: "Need to wash hands with just water" ,correct:"false"},
        ]
    },
    {
        // number104
        question: "Which major histocompatibility complex (MHC) molecule does T helper (CD4+) cells bind to ?" ,
        answers: [
            { text: "MHC 2" ,correct:"true"},
            { text: "MHC 1" ,correct:"false"},
            { text: "MHC 8" ,correct:"false"},
            { text: "none of the above" ,correct:"false"},
        ]
    },
    {
        // number105
        question: "Which drug have more efficacy ?" ,
        answers: [
            { text: "NNT = 15" ,correct:"false"},
            { text: "NNT = 20" ,correct:"false"},
            { text: "NNT = 12" ,correct:"false"},
            { text: "NNT = 5" ,correct:"true"},
        ]
    },
    {
        // number88
        question: "ST segment represent what ?" ,
        answers: [
            { text: "atrial conductivity" ,correct:"false"},
            { text: "atrioventricular conduction" ,correct:"false"},
            { text: "ventricular conduction" ,correct:"false"},
            { text: "ventricular plateau" ,correct:"true"},
        ]
    },
        { 
        // number89
        question: "A Saudi Man aged 30 years old named saif lives in makka with his family and his old parents aged 60 and 55 years old and his wife fatma and son called naif and daughter called somia,Which drug should be taken for optimum emergency management of an anaphylactic reaction for saif ?" ,
        answers: [
            { text: "Albuterol" ,correct:false},
            { text: "Atropine" ,correct:false},
            { text: "Epinephrine" ,correct:true},
            { text: "Propranolol" ,correct:false},
]},
        { 
        // number90
        question: "A hypothetical drug, Drug X, can be administered by all the routes listed below. Which administration route is guaranteed to provide complete (100%) bioavailability of that drug ?" ,
        answers: [
            { text: "intramuscular" ,correct:false},
            { text: "Intravenous" ,correct:true},
            { text: "Oral" ,correct:false},
            { text: "Rectal" ,correct:false},
        ]
    },
        { 
        // number91
        question: "Cimetidine, is one of the best examples of a drug that inhibits the P450 system. That means it inhibits the ------ of some drugs :" ,
        answers: [
            { text: "Absorbtion" ,correct:false},
            { text: "Distribution" ,correct:false},
            { text: "Metabolism" ,correct:true},
            { text: "Excretion" ,correct:false},
        ]
    },
        { 
        // number92
        question: "Drug A increases blood pressure by 10 mm HG. Drug B increases pressure by 10 mm Hg also. Giving the two drugs together, each at their own (right) doses, increases blood pressure by 30 mm Hg. This is an example of :" ,
        answers: [
            { text: "Pharmacologic antagonism" ,correct:false},
            { text: "Summation" ,correct:false},
            { text: "Potentiation" ,correct:false},
            { text: "Synergism" ,correct:true},
        ]
    },
        { 
        // number93
        question: "X is a drug that is (extensively bound) to plasma proteins, if you give a therapeutic dose to a person with severe hypoalbuminemia, which one of the following effects would you expect to occur ?" ,
        answers: [
            { text: "A greater than normal (possibly toxic) response to the drug" ,correct:true},
            { text: "A longer duration of action" ,correct:false},
            { text: "A slower onset of action" ,correct:false},
            { text: "A drug effect completely different from what X normally would cause" ,correct:false},
        ]
    },
        { 
        // number94
        question: "A pharmacist works in a community pharmacy in Mekka in saudi arabia received a prescription to prepare a drug which the dose of it for a 70 kg adult is 80 mg but he will prepare it for the child called Fahad aged 8 years the dose for him is :" ,
        answers: [
            { text: "12.5" ,correct:false},
            { text: "18" ,correct:false},
            { text: "20" ,correct:false},
            { text: "32" ,correct:true},
        ]
    },
        { 
        // number95
        question: "Creatinine Clearance is used as a measure of :" ,
        answers: [
            { text: "Renal excretion rate" ,correct:false},
            { text: "Glomerular filtration rate" ,correct:true},
            { text: "Active renal secretion" ,correct:false},
            { text: "Passive renal absorption" ,correct:false},
        ]
    },
        { 
        // number96
        question: "All the following are phase II biotransformation reactions EXCEPT :" ,
        answers: [
            { text: "Hydrolysis" ,correct:true},
            { text: "Acetylation" ,correct:false},
            { text: "Methylation" ,correct:false},
            { text: "Glucuronidation" ,correct:false},
        ]
    },
        { 
        // number97
        question: "A foreigner Citizen called adam from Pakistan aged 35 years old lives in saudi arabia with his wife he took a drug that metabolism may generate a toxic metabolite :" ,
        answers: [
            { text: "Diazepam" ,correct:false},
            { text: "Captopril" ,correct:false},
            { text: "Phenobarbitone" ,correct:false},
            { text: "Paracetamol" ,correct:true},
        ]
    },
        { 
        // number98
        question: "Kazim is 60 years old man lives with his son and his wife in a family house with a maid to help him take care of him and serve his needs diagnosed with heart failure taking many drugs one of them is Digoxin at a target concentration of 1.5 Microgram/litre, Vd = 500 L , the required IV loading dose is : " ,
        answers: [
            { text: "0.5 mg" ,correct:false},
            { text: "0.75 mg" ,correct:true},
            { text: "1.0 mg" ,correct:false},
            { text: "1.5 mg" ,correct:false},
        ]
    },
        { 
        // number99
        question: "Sharif is 40 years old pharmacist lives and work in geddah a patient came to the pharmacy and asked him about drug tolerance he answered " ,
        answers: [
            { text: "Decreased response to the usual dose of a drug" ,correct:true},
            { text: "Increased response to the usual dose of a drug" ,correct:false},
            { text: "Abnormal reaction to a drug due to genetic or enzyme defect" ,correct:false},
            { text: "Inactivation of a drug be the kidney" ,correct:false},
        ]
    },
        { 
        // number100
        question: "Ayman is a foreigner citizen lives in saudi arabia in riyad with his father who aged more than 70 years , his father needs" ,
        answers: [
            { text: "Larger dose than adult dose" ,correct:false},
            { text: "Smaller dose than the adult dose" ,correct:true},
            { text: "Equal dose to that of the adult dose" ,correct:false},
            { text: "A dose that is equal to the infant dose" ,correct:false},
        ]
    },
        { 
        // number101
        question: "Allergic reactions to drugs can result in all of the following clinical manifestations EXCEPT " ,
        answers: [
            { text: "Angioneurotic edema" ,correct:false},
            { text: "Peptic Ulcer" ,correct:true},
            { text: "Asthma" ,correct:false},
            { text: "Fever" ,correct:false},
        ]
    },
        { 
        // number102
        question: "Reversal of histamine-induced bronchonstriction by adrenaline is regarded as :" ,
        answers: [
            { text: "Competitive antagonism" ,correct:false},
            { text: "NonCompetitive antagonism" ,correct:false},
            { text: "Chemical antagonism" ,correct:false},
            { text: "Physiological antagonism" ,correct:true},
        ]
    },
        { 
        // number103
        question: "Meropenem is a new drug released in the market by a well known and trusted drug company the Pharmacokinetic parameters of a new drug are as follows : Vd = 80 L, Cl = 4 L/hour, the half life of this drud called meropenem equals :" ,
        answers: [
            { text: "3 hours" ,correct:false},
            { text: "14 hours" ,correct:true},
            { text: "78 hours" ,correct:false},
            { text: "120 hours" ,correct:false},
        ]
    },
        { 
        // number104
        question: "Sildenafil is a new drug released in the market by a well known and trusted drug company used for erectile dysfunction in men it first was made for treat hypertension patient,The maximum effect (Emax) achieved by a drug is a measure of :" ,
        answers: [
            { text: "Therapeutic index" ,correct:false},
            { text: "Efficacy" ,correct:true},
            { text: "Antagonist magnitude" ,correct:false},
            { text: "Potency" ,correct:false},
        ]
    },
        { 
        // number105
        question: "With your knowledge ,pharmaceutical background and Experience in the Saudi and Global medical field especially in Pharmaceutical field Which of the following Statements INCORRECT :" ,
        answers: [
            { text: "Drug metabolism can be affected by genetic variation" ,correct:false},
            { text: "Renal Excretion of a weak acid and/or base drugs is affected by urinary pH" ,correct:false},
            { text: "Partial agonists have no effect in absence of agonist" ,correct:true},
            { text: "Drugs with zero order Kinetics have a non-linear disappearance curve" ,correct:false},
        ]
    },
        { 
        // number211
        question: "Regarding biotransformation of most of the drugs" ,
        answers: [
            { text: "The general aim is to convert active lipid soluble drugs into inactive water soluble metabolites" ,correct:true},
            { text: "Phase I metabolism includes conjugation with glucuronic acid" ,correct:false},
            { text: "Always leads to inactivation of drugs" ,correct:false},
            { text: "Phase II metabolism includes hydrolysis" ,correct:false},
        ]
    },
        { 
        // number212
        question: "Two drugs with the same effect were given together , the net effect produced was greater then the sum of their individual effects. This phenomenon is termed :" ,
        answers: [
            { text: "Potentiation" ,correct:false},
            { text: "Synergism" ,correct:true},
            { text: "Addition" ,correct:false},
            { text: "Cross tolerance" ,correct:false},
        ]
    },
        { 
        // number213
        question: "A weak acid drug with pKa = 4 is placed in a solution which has a pH of 3 What is the ratio of unionized to ionized drug ?" ,
        answers: [
            { text: "0.1" ,correct:false},
            { text: "1" ,correct:false},
            { text: "10" ,correct:true},
            { text: "100" ,correct:false},
        ]
    },
        { 
        // number214
        question: "The phrase ( ability to bind to a receptor ) fits the definition of :" ,
        answers: [
            { text: "Affinity" ,correct:true},
            { text: "Agonist" ,correct:false},
            { text: "Antagonist" ,correct:false},
            { text: "Efficacy" ,correct:false},
        ]
    },
        { 
        // number215
        question: "Drug absorption is often irregular with :" ,
        answers: [
            { text: "Intravenous administration" ,correct:false},
            { text: "Intramuscular administration" ,correct:false},
            { text: "Rectal suppository administration" ,correct:true},
            { text: "Intranasal spray administration" ,correct:false},
        ]
    },
        { 
        // number216
        question: "Mechanisms responsible for drug interactions include those related to :" ,
        answers: [
            { text: "Absorption" ,correct:false},
            { text: "Biotransformation and excretion" ,correct:false},
            { text: "Protein binding" ,correct:false},
            { text: "All The above" ,correct:true},
        ]
    },
        { 
        // number217
        question: "Which of the following is the best definition of any drug that has a quaternary structure ?" ,
        answers: [
            { text: "absorbed very well , with oral bioavailabilities of or very close to 100%" ,correct:false},
            { text: "blocks both muscarinic and nicotinic receptors for ACh" ,correct:false},
            { text: "derived from a plant" ,correct:false},
            { text: "ionized at physiologic pH , can't enter the CNS well , if at all" ,correct:true},
        ]
    },
        { 
        // number218
        question: "The margin of safety of a drug gives you information about the :" ,
        answers: [
            { text: "number of drug interactions that are likely to be caused" ,correct:false},
            { text: "relative ratio between a drug's average lethal and average effective dose" ,correct:true},
            { text: "number of indications for which it can be used" ,correct:false},
            { text: "number of contraindications for which it shouldn't be used" ,correct:false},
        ]
    },
        { 
        // number219
        question: "A drug cleared partially 50% by liver and 50% by kidney , it's normal dose is 300 mg/day. the suitable dose for a patient with creatinine clearance 20 ml/min (normal creatinine clearance = 100 ml/min) :" ,
        answers: [
            { text: "100 mg/day" ,correct:false},
            { text: "130 mg/day" ,correct:false},
            { text: "150 mg/day" ,correct:false},
            { text: "180 mg/day" ,correct:true},
        ]
    },
        { 
        // number220
        question: "Drug metabolism usually results in a product that is :" ,
        answers: [
            { text: "More likely to distribute intracellularly " ,correct:false},
            { text: "Less lipid-soluble than the original drug" ,correct:true},
            { text: "More likely to be absorbed by kidney tubules" ,correct:false},
            { text: "Less polar than the original drug" ,correct:false},
        ]
    },
        { 
        // number221
        question: "Therapeutic drug monitoring is indicated in the following conditions EXCEPT :" ,
        answers: [
            { text: "Drug produces symptoms of toxicity" ,correct:false},
            { text: "Non compliance is suspected" ,correct:false},
            { text: "The dose of the drug doesn't produce the desired therapeutic effect" ,correct:false},
            { text: "Easily measured therapeutic response" ,correct:true},
        ]
    },
        { 
        // number222
        question: "Concerning first-order kinetics, which of the following is INCORRECT :" ,
        answers: [
            { text: "The rate of the process is proportional to concentration of the drug" ,correct:false},
            { text: "Log Plasma concentration-time curve is linear" ,correct:false},
            { text: "Digoxin follows this form of kinetics" ,correct:false},
            { text: "A constant amount of drug is eliminated per unit time" ,correct:true},
        ]
    },
        { 
        // number223
        question: "Concerning renal excretion of drugs, which of the following is CORRECT :" ,
        answers: [
            { text: "Protein-bound drugs are easily filtered through glomeruli" ,correct:false},
            { text: "Drugs with large volume of distribution (Vd) have rapid clearance" ,correct:false},
            { text: "Acidification of urine increase excretion of alkaline drugs" ,correct:true},
            { text: "Alkalinization of urine decrease excretion of aspirin" ,correct:false},
        ]
    },
        { 
        // number224
        question: "Which of the following drugs may follow zero order kinetics :" ,
        answers: [
            { text: "Diazepam" ,correct:false},
            { text: "Phenobarbitone" ,correct:false},
            { text: "Propranolol" ,correct:false},
            { text: "Phenytoin" ,correct:true},
        ]
    },
        { 
        // number225
        question: "Teratogenecity is" ,
        answers: [
            { text: "Drug induced disease" ,correct:false},
            { text: "Decrease response to the usual dose of the drug" ,correct:false},
            { text: "Abnormal response due to genetic abnormality" ,correct:false},
            { text: "The drug induces fetal malformation when given to pregnant women" ,correct:true},
        ]
    },
        { 
        // number226
        question: "Which of the following is phase I biotransformation reaction :" ,
        answers: [
            { text: "Glucuronide conjugation with chloramphenicol" ,correct:false},
            { text: "Glycine conjugation with salicylate" ,correct:false},
            { text: "Hydrolysis of acetylcholine" ,correct:true},
            { text: "Acetylation of Sulfonamides" ,correct:false},
        ]
    },
        { 
        // number227
        question: "An abnormal reaction to a drug due to genetic abnormality is termed :" ,
        answers: [
            { text: "Tachyphylaxis" ,correct:false},
            { text: "Teratogenicity" ,correct:false},
            { text: "Idiosyncrasy" ,correct:true},
            { text: "Hypersensitivity" ,correct:false},
        ]
    },
        { 
        // number228
        question: "All of the following drgs cause enzyme induction Except :" ,
        answers: [
            { text: "Androgen" ,correct:false},
            { text: "Phenobarbitone" ,correct:false},
            { text: "Rifampicin" ,correct:false},
            { text: "Cimetidine" ,correct:true},
        ]
    },
        { 
        // number229
        question: "Which of the following is INCORRECT regarding drug distribution :" ,
        answers: [
            { text: "it depends on blood flow and size of organ" ,correct:false},
            { text: "Depends on solubility of the drug in tissue" ,correct:false},
            { text: "Is increased for drug which is less ionized" ,correct:false},
            { text: "Is increased for drugs strongly bound to plasma proteins" ,correct:true},
        ]
    },
        { 
        // number230
        question: "Which of the following would be likely the result of a decrease in urinary pH :" ,
        answers: [
            { text: "Decreased urinary excretion of a weak base" ,correct:false},
            { text: "Increased urinary excretion of a weak acid" ,correct:false},
            { text: "Increased urinary excretion of weak base" ,correct:true},
            { text: "Decreased urinary excretion of a nonionized drug" ,correct:false},
        ]
    },
        { 
        // number231
        question: "An old man named Fahad Came to hospital with renal failure which of these drugs need dose adjustments",
        answers: [
            { text: "Clindamycin" ,correct:false},
            { text: "imipenem" ,correct:true},
            { text: "Ceftriaxone" ,correct:false},
            { text: "Linezolid" ,correct:false},
        ]
    },
        { 
        // number232
        question: "Which of these drugs need double checks" ,
        answers: [
            { text: "Antibiotics" ,correct:false},
            { text: "Antidepressants" ,correct:false},
            { text: "Antiinflammatory" ,correct:false},
            { text: "Anti thrombolytic" ,correct:true},
        ]
    },
        { 
        // number233
        question: "A 62-year-old patient, otherwise healthy, was brought to the emergency department in a confused state after ingesting one green fruit of castor bean two hours ago. he had vomit once at home. He had dryness of mouth and the pupils were bilaterally dilated with sluggish reaction to light. He was treated symptomatically with activated charcoal. Which of the following is the main active constituent responsible for the toxic effect of castor seeds ?" ,
        answers: [
            { text: "Barbaloin" ,correct:false},
            { text: "Ricin" ,correct:true},
            { text: "Mezerein" ,correct:false},
            { text: "Ergotamine" ,correct:false},
        ]
    },
        { 
        // number234
        question: "A-65-year-old man asks about vaccination before he leaves for summer vacation next month. He brings his vaccination record for the past 4 years Today's Date : 05/31/2014 . Herpes Zoster : 8/2011 , Influenza : Every Year , Pneumococcal : 10/2011 . Which vaccination should this patient receive ?" ,
        answers: [
            { text: "Influenza" ,correct:false},
            { text: "Pneumococcal polysaccharide" ,correct:true},
            { text: "Hepatitis A" ,correct:false},
            { text: "Measles , Mumps , Rubella" ,correct:false},
        ]
    },
        { 
        // number235
        question: "Price of product was increased from 100 SA Riyals to 105 SA Riyals. This resulted in a large decline on demand from 120 to 80. Which of the following types of demand does this product follow ?" ,
        answers: [
            { text: "Latent" ,correct:false},
            { text: "Elastic" ,correct:true},
            { text: "Unaffected" ,correct:false},
            { text: "Inelastic" ,correct:false},
        ]
    },
        { 
        // number236
        question: "Which of the immunoglobulin (Ig) is frequently found to beelevated in asthmatic patients ?" ,
        answers: [
            { text: "IgA" ,correct:false},
            { text: "IgE" ,correct:true},
            { text: "IgM" ,correct:false},
            { text: "IgD" ,correct:false},
        ]
    },
        { 
        // number237
        question: "A 48 woman suufers from fatigue, weakness and polyurination and lab tests proved that she is diabetic . A doctor prescribed her 850 mg metformin twice a day and so blood sugar become normal but after sometime she did another lab tests and the result was hemoglubinated sugar increased by 1% than the last result what will you advise her ?" ,
        answers: [
            { text: "Decrease metformin dose" ,correct:false},
            { text: "Increase metformin dose" ,correct:true},
            { text: "Do nothing" ,correct:false},
            { text: "Shifting to another type insulin" ,correct:false},
        ]
    },
        { 
        // number238
        question: "A pharmacy already has a medication for 3500 SAR but has side effects. There are two alternative drugs with the same efficacy, drug A costs 3000 SAR and drug B costs SAR, What is the best decision ?" ,
        answers: [
            { text: "Accept both drugs" ,correct:false},
            { text: "Accept A and reject B" ,correct:true},
            { text: "Reject both drugs" ,correct:false},
            { text: "Reject A and accept B" ,correct:false},
        ]
    },
        { 
        // number239
        question: "A Child called Fahad came with his parents suffers from bowel, leg, and bone pain, What should be given ?" ,
        answers: [
            { text: "Calcidol" ,correct:false},
            { text: "Folic acid" ,correct:true},
            { text: "Ergocholecaliferol" ,correct:false},
            { text: "Ferritin" ,correct:false},
        ]
    },
        { 
        // number240
        question: "A patient with sneezing, cold, and runny nose. Which treatment should you give ?" ,
        answers: [
            { text: "Paracetamol" ,correct:false},
            { text: "Pseudoephedrine" ,correct:true},
            { text: "Ibuprofen" ,correct:false},
            { text: "Citric acid" ,correct:false},
        ]
    },
        { 
        // number241
        question: "Which of the following medication error is difficult to prevent ?" ,
        answers: [
            { text: "Omission error" ,correct:false},
            { text: "Allergic reactions to an unknown patient" ,correct:true},
            { text: "Wrong time error" ,correct:false},
            { text: "Incorrect duration of treatment" ,correct:false},
        ]
    },
        { 
        // number242
        question: "A 20 year-old man encounters a serious road accident. He is brought to the hospital with deep wounds. His vaccination history is unknown.Which of the following would be best to administer to this patient at this time ?" ,
        answers: [
            { text: "Tetanus vaccine" ,correct:false},
            { text: "Tetanus vaccine and tetanus immune globulin" ,correct:true},
            { text: "Tetanus immune globulin" ,correct:false},
            { text: "Tetanus vaccine and human papilloma virus vaccine" ,correct:false},
        ]
    },
        { 
        // number243
        question: "Which of the following is used as an electronic medication dispenser to improve medication adherence ?" ,
        answers: [
            { text: "Text messaging" ,correct:false},
            { text: "Med-E-Lert Automatic Pill Dispenser" ,correct:true},
            { text: "Cell Phone Calendar" ,correct:false},
            { text: "E-Pill MultiAlarm TimeCap" ,correct:false},
        ]
    },
        { 
        // number244
        question: "Which of the following terms describes living microbe with reduced virulence and used for vaccination ?" ,
        answers: [
            { text: "Virulent" ,correct:false},
            { text: "Attenuated" ,correct:true},
            { text: "Dormant" ,correct:false},
            { text: "Encapsulated" ,correct:false},
        ]
    },
        { 
        // number245
        question: "A28-year-old pregnant woman called Heba Lives Abroad who in labor is admitted to the hospital in riyad related to her medical husband insurance. She tested positive for group B streptococcus colonization at her 36-week appointment. She has a penicillin allergy and her culture are resistant to both clindamycin and erythromycin. What is the recommended treatment for this patient ?" ,
        answers: [
            { text: "Cefazolin" ,correct:false},
            { text: "Vancomycin" ,correct:true},
            { text: "Penicillin G" ,correct:false},
            { text: "Ceftriaxone" ,correct:false},
        ]
    },
        { 
        // number246
        question: "67 year old man called Salman lives in Qasim with his wife without his children presents with complaints of tremors trouble waiding and masked face parkinsons disease is suspected levodopa is prescribed along with a compound to lower required dose of levodopa and to achieve an effective brain dopamine concentration. Which of the following is that most likely compound ?" ,
        answers: [
            { text: "Pergolide" ,correct:false},
            { text: "Carbidopa" ,correct:true},
            { text: "Selegiline" ,correct:false},
            { text: "Entacapone" ,correct:false},
        ]
    },
        { 
        // number247
        question: "What is the latin abbreviation for (after meals)?" ,
        answers: [
            { text: "A.C." ,correct:false},
            { text: "P.C." ,correct:true},
            { text: "A.A." ,correct:false},
            { text: "I.C." ,correct:false},
        ]
    },
        { 
        // number248
        question: "A drug has a clearance value of 4.75 L/hour and 65% is cleared vy renal excretion. Which of the following would be the non-renal clearance value ?" ,
        answers: [
            { text: "1.25 L/hour" ,correct:false},
            { text: "1.66 L/hour" ,correct:true},
            { text: "1.90 L/hour" ,correct:false},
            { text: "2.05 L/hour" ,correct:false},
        ]
    },
        { 
        // number249
        question: "Which of the following represents the immunity acquired by give living organism with attenuated virus ?" ,
        answers: [
            { text: "Local immunity" ,correct:false},
            { text: "Artificial active immunity" ,correct:true},
            { text: "Passive immunity" ,correct:false},
            { text: "Natural Active immunity" ,correct:false},
        ]
    },
        { 
        // number450
        question: "Which of the ethical principles do violates as a pharmacist when time and give consultations to only relative ?" ,
        answers: [
            { text: "Autonomy" ,correct:false},
            { text: "Justice" ,correct:true},
            { text: "Beneficence" ,correct:false},
            { text: "Righteous" ,correct:false},
        ]
    },
        { 
        // number451
        question: "A patient with ASCVD and his lipid profile is controlled on statin 80 mg, he recently discovered that he is has a SLC)!B!*5, but however he has never complained about myopathy, what is the best course of actions :" ,
        answers: [
            { text: "Continue the same dose of statin" ,correct:true},
            { text: "Switch to gemfibrozil" ,correct:false},
            { text: "Reduce the dose of statin to 40 mg" ,correct:false},
            { text: "Reduce the dose of statin to 20 mg" ,correct:false},
        ]
    },
        { 
        // number252
        question: "Which of the following is a coomon enzyme polymorphism that could potentially alter clopidogrel efficacy ?" ,
        answers: [
            { text: "Cyp2c7" ,correct:false},
            { text: "Cyp2c19" ,correct:true},
            { text: "Cyp2c9" ,correct:false},
            { text: "Cyp2c10" ,correct:false},
        ]
    },
        { 
        // number253
        question: "Which of the following is related to health services not reaching patients in rural area ?" ,
        answers: [
            { text: "Affordability" ,correct:false},
            { text: "Accessibility" ,correct:true},
            { text: "Acceptability" ,correct:false},
            { text: "Availability" ,correct:false},
        ]
    },
        { 
        // number254
        question: "Which is the following FALSE regarding bioavailability :" ,
        answers: [
            { text: "It's calculated from comparison of the area under the plasma concentration time curves after IV and oral administration" ,correct:false},
            { text: "Usually less than 100% after oral route" ,correct:false},
            { text: "It's high for drugs undergoing extensive first pass hepatic metabolism" ,correct:true},
            { text: "May be altered by pharmaceutical formulation" ,correct:false},
        ]
    },
        { 
        // number255
        question: "Which of the following is FALSE regarding highly lipid soluble drugs :" ,
        answers: [
            { text: "Have low lipid/water coefficient" ,correct:false},
            { text: "Not readily absorbed from gut" ,correct:false},
            { text: "Are readily excreted without metabolism" ,correct:false},
            { text: "All of the above" ,correct:true},
        ]
    },
        { 
        // number256
        question: "Drug metabolism can result in one of the following :" ,
        answers: [
            { text: "Metabolites with greater water solubility than the parent compound" ,correct:false},
            { text: "Glucuronic conjugation" ,correct:false},
            { text: "Metabolites with greater pharmacological activity than the parent compound" ,correct:false},
            { text: "All of the above" ,correct:true},
        ]
    },
        { 
        // number257
        question: "Sources of data in insurance companies ?" ,
        answers: [
            { text: "Claims" ,correct:true},
            { text: "Heath Data" ,correct:false},
            { text: "Information Collection" ,correct:false},
            { text: "Random Survey" ,correct:false},
        ]
    },
        { 
        // number258
        question: "Which of the following error detection strategies result in limiting detection ?" ,
        answers: [
            { text: "bar-coding" ,correct:false},
            { text: "trigger tools" ,correct:false},
            { text: "voluntary reporting" ,correct:false},
            { text: "mandatory reporting" ,correct:true},
        ]
    },
        { 
        // number259
        question: "Mid goal to long term future goal ?" ,
        answers: [
            { text: "Mission" ,correct:false},
            { text: "Vision" ,correct:true},
            { text: "Plan" ,correct:false},
            { text: "Strategy" ,correct:false},
        ]
    },
        { 
        // number260
        question: "Preventive and curative institution is ?" ,
        answers: [
            { text: "Primary" ,correct:false},
            { text: "Secondary" ,correct:true},
            { text: "tertiary" ,correct:false},
            { text: "Specialty" ,correct:false},
        ]
    },
        { 
        // number261
        question: "Mission and vision can be present in which strategy ?" ,
        answers: [
            { text: "Planning" ,correct:false},
            { text: "Organization" ,correct:false},
            { text: "Strategic" ,correct:true},
            { text: "Handling" ,correct:false},
        ]
    },
        { 
        // number262
        question: "Long term plan use all aspects in organization ?" ,
        answers: [
            { text: "Strategy" ,correct:true},
            { text: "Operation" ,correct:false},
            { text: "Organization" ,correct:false},
            { text: "Vision" ,correct:false},
        ]
    },
        { 
        // number263
        question: "Pharmacist wrote email to another pharmacist to ask add medication to the formulary in the hospital this is consider as ?" ,
        answers: [
            { text: "Inter institutional" ,correct:false},
            { text: "Intra institutional" ,correct:false},
            { text: "Written communication" ,correct:true},
            { text: "Non Verbal communication" ,correct:false},
        ]
    },
        { 
        // number264
        question: "Head of pharmacy decide to make group to arrange formulary drugs in hospital ?" ,
        answers: [
            { text: "Organizing" ,correct:false},
            { text: "Planning" ,correct:true},
            { text: "Leading" ,correct:false},
            { text: "Handling" ,correct:false},
        ]
    },
        { 
        // number265
        question: "You received a prescription on a plain paper what to do ?" ,
        answers: [
            { text: "Tell the manager " ,correct:false},
            { text: "Talk to the prescriber and don't dispense it" ,correct:true},
            { text: "Talk to Your colleague and ask for his opinion" ,correct:false},
            { text: "Inform the police" ,correct:false},
        ]
    },
        { 
        // number266
        question: "Pharmacist manager screamed on one of the pharmacists who dispensed wrong medication in front of all of the staff what is the good response ?" ,
        answers: [
            { text: "He should punish him in separate area" ,correct:false},
            { text: "Ask for a meeting with the staff" ,correct:false},
            { text: "Cut from his salary" ,correct:false},
            { text: "Try to find the cause of the error and set solutions" ,correct:true},
        ]
    },
        { 
        // number267
        question: "Which of the following is the function of the pharmacy and therapeutic committee in a hospital ?" ,
        answers: [
            { text: "Responsible for poison management" ,correct:false},
            { text: "Monitor the adverse reaction reporting" ,correct:false},
            { text: "Monitor the medication error reporting" ,correct:false},
            { text: "Responsible for drug formulary management" ,correct:true},
        ]
    },
        { 
        // number268
        question: "Which of the following committees is dedicated to developing and maintaining a list of approved medicine for the hospital medicines for the hospital use ?" ,
        answers: [
            { text: "Medical records" ,correct:false},
            { text: "Medication audit" ,correct:false},
            { text: "Quality assurance" ,correct:false},
            { text: "Pharmacy and therapeutics" ,correct:true},
        ]
    },
        { 
        // number269
        question: "Which of the following is the definition of management ?" ,
        answers: [
            { text: "The art of maximizing Profitability" ,correct:false},
            { text: "The art of maximizing Productivity" ,correct:true},
            { text: "The art of maximizing Possibilities" ,correct:false},
            { text: "The art of maximizing Predictability" ,correct:false},
        ]
    },
        { 
        // number270
        question: "A-65-year- old man presents to the Pharmacy for a refill his medication. On review of his refill history, The pharmacist noticed that he does not refill his medication regularly. Upon asking him, The Patient started that he has multiple medication that require complex administration. Which of the following non adherence factors affecting above patient ?" ,
        answers: [
            { text: "Patient related Factors" ,correct:false},
            { text: "Provider related Factors" ,correct:false},
            { text: "Health Care System Factors" ,correct:false},
            { text: "Medication and Condition Factor" ,correct:true},
        ]
    },
        { 
        // number271
        question: "It's the broad range of health care services provided by in order to optimize therapeutic outcomes for individual patients Which of the following is the term used to describe the above-mentioned definition ?" ,
        answers: [
            { text: "Pharmaceutical care" ,correct:false},
            { text: "Medication Counselling" ,correct:false},
            { text: "Medication reconciliation" ,correct:false},
            { text: "Medication therapy Management" ,correct:true},
        ]
    },
        { 
        // number272
        question: "Free Medical Sample Drugs (formulary or non-formulary) are provided by pharmaceutical sales representatives to physicians or members of the health care team. Which of the following is the most appropriate recommended policy for dealing with sample drugs ?" ,
        answers: [
            { text: "Dispense them directly to the patient" ,correct:false},
            { text: "Keep Them with the rest of original items" ,correct:false},
            { text: "Keep in outpatient clinics or nursing units" ,correct:false},
            { text: "Exclude them from in-patient pharmacy, drug store or doctor's offices" ,correct:true},
        ]
    },
        { 
        // number273
        question: "The hierarchy is showing Hospital X organizational chart.A Pharmacist assigned as a clinical pharmacist in neuroscience ward. Which of the following managerial position will the co-worker re submitting a complaint ?" ,
        answers: [
            { text: "Pharmacy director" ,correct:false},
            { text: "Medical Affair Director" ,correct:false},
            { text: "Neuroscience ward director" ,correct:false},
            { text: "Clinical pharmacy department head" ,correct:true},
        ]
    },
        { 
        // number274
        question: "Most on Prescription ?" ,
        answers: [
            { text: "Patient name - mrn - date" ,correct:false},
            { text: "Physician name - number - signature" ,correct:false},
            { text: "Patient name - age - sex - Diagnose" ,correct:false},
            { text: "All of the above" ,correct:true},
        ]
    },
        { 
        // number275
        question: "Which of the following medication has a side effect metallic taste ?" ,
        answers: [
            { text: "Cefuroxime" ,correct:false},
            { text: "Azithromycin" ,correct:false},
            { text: "Ciprofloxacin" ,correct:false},
            { text: "Metronidazole" ,correct:true},
        ]
    },
        { 
        // number276
        question: "Which of the following is the advantage of using intravenous anesthetic drugs ?" ,
        answers: [
            { text: "Produce fast onset of anesthesia" ,correct:true},
            { text: "Helps in maintaining anesthesia" ,correct:false},
            { text: "Increases the minimum alveolar concentration (MAC) of the anesthetic drugs." ,correct:false},
            { text: "Produce less cardiovascular and respiratory suppression" ,correct:false},
        ]
    },
        { 
        // number277
        question: "Which of the following is the mode of action of phentolamine ?" ,
        answers: [
            { text: "Beta-adrenergic Blocker" ,correct:false},
            { text: "Beta-adrenergic Agonist" ,correct:false},
            { text: "Alpha-adrenergic Agonist" ,correct:false},
            { text: "Alpha-adrenergic Blocker (non selective alpha blocker) " ,correct:true},
        ]
    },
        { 
        // number278
        question: "Which of the following is a consequence of stimulation of alpha-1 Adreno receptors ?" ,
        answers: [
            { text: "A flushing Adrenergic Receptors" ,correct:false},
            { text: "Increased Heart Rate" ,correct:false},
            { text: "Constricted Bronchioles" ,correct:false},
            { text: "Elevated blood pressure" ,correct:true},
        ]
    },
        { 
        // number279
        question: "Which drug is used to treat an anaphylactic reaction ?" ,
        answers: [
            { text: "Atropine" ,correct:false},
            { text: "Adrenaline" ,correct:true},
            { text: "Isoprinosine" ,correct:false},
            { text: "Phentolamine" ,correct:false},
        ]
    },
        { 
        // number280
        question: "Which of the following is a property of amphetamine ?" ,
        answers: [
            { text: "it doesn't across the blood brain barrier" ,correct:false},
            { text: "it stimulates the release of stored acetylcholine" ,correct:false},
            { text: "it stimulates the release of stored norepinephrine" ,correct:true},
            { text: "it stimulates the release of five hydroxytryptophan (5-HT)" ,correct:false},
        ]
    },
        { 
        // number281
        question: "A 25-year-old driver was held for reckless driving and confronting a policeman. He is too confident, Talkative, restless and continuously walking around the hall. Which of the following is the drug that the driver is abusing ?" ,
        answers: [
            { text: "Diazepam" ,correct:false},
            { text: "Theophylline" ,correct:false},
            { text: "Amphetamine" ,correct:true},
            { text: "Lysergic acid diethylamide (LSD)" ,correct:false},
        ]
    },
        { 
        // number282
        question: "What is the pharmacological classification of Ipratropium bromide ?" ,
        answers: [
            { text: "Beta agonist" ,correct:false},
            { text: "Alpha agonist" ,correct:false},
            { text: "Cholineregic agonist" ,correct:false},
            { text: "Antimuscarinic agent" ,correct:true},
        ]
    },
        { 
        // number283
        question: "Which of the following describes the mechanism of action of Rivastigmine ?" ,
        answers: [
            { text: "Cholinesterase inhibitor" ,correct:true},
            { text: "Alpha-a receptor inhibitor" ,correct:false},
            { text: "Serotonin re uptake inhibitor" ,correct:false},
            { text: "Angiotensin converting enzyme inhibitor" ,correct:false},
        ]
    },
        { 
        // number284
        question: "Drugs to reverse action of atropine ?" ,
        answers: [
            { text: "Physotigmine" ,correct:true},
            { text: "Benztropine" ,correct:false},
            { text: "Disulfiram" ,correct:false},
            { text: "Propranolol" ,correct:false},
        ]
    },
        { 
        // number285
        question: "Catechol amine with COMT ?" ,
        answers: [
            { text: "Rapid metabolism" ,correct:true},
            { text: "Slow Metabolism" ,correct:false},
            { text: "Intermediate Metabolism" ,correct:false},
            { text: "Very Slow Metabolism" ,correct:false},
        ]
    },
        { 
        // number286
        question: "A 21-year-old patient went through respiratory depression after receiving anesthetic agent. Which of the following will counter act post-anesthetic respiratory depression ?" ,
        answers: [
            { text: "Morphine" ,correct:false},
            { text: "Picrotoxin" ,correct:true},
            { text: "Diazepam" ,correct:false},
            { text: "Thiopental" ,correct:false},
        ]
    },
        { 
        // number287
        question: "Which of the following drugs would decrease the amount of minimum alveolar concentration (MAC) for an anesthetic drug ?" ,
        answers: [
            { text: "Diazepam" ,correct:true},
            { text: "Buspirone" ,correct:false},
            { text: "Ephedrine" ,correct:false},
            { text: "Loratadine" ,correct:false},
        ]
    },
        { 
        // number288
        question: "Which depolarizing neuromuscular blocker is less potent than tubocurarine ?" ,
        answers: [
            { text: "Succinylcholine (Anectine)" ,correct:true},
            { text: "Rocuronium (Zemuron)" ,correct:false},
            { text: "Pipecuronium (Arduan)" ,correct:false},
            { text: "Doxacurium (Nuromax)" ,correct:false},
        ]
    },
        { 
        // number289
        question: "Which of the following is heparin antidote ?" ,
        answers: [
            { text: "Protamine Sulfate" ,correct:true},
            { text: "Octreotide" ,correct:false},
            { text: "N-Acetylcysteine" ,correct:false},
            { text: "Naloxone Hydrochloride" ,correct:false},
        ]
    },
        { 
        // number290
        question: "Which of the following situation is most likely to be controlled by administering parenteral calcium as an antidote ?" ,
        answers: [
            { text: "HypoKalemia" ,correct:false},
            { text: "Verapamil" ,correct:true},
            { text: "Heroine intoxication" ,correct:false},
            { text: "Cocaine intoxication" ,correct:false},
        ]
    },
        { 
        // number291
        question: "A 55-year-old man called Fahad presents with an excessive bronchial and oconasal secretions.History revealed, is exposed to an organophosphate insecticide. Which of the following is the best management ?" ,
        answers: [
            { text: "Atropine IV" ,correct:true},
            { text: "Diphenhydramine orally" ,correct:false},
            { text: "Pralidoxime intramuscularly" ,correct:false},
            { text: "Physostigmine intramuscularly" ,correct:false},
        ]
    },
        { 
        // number292
        question: "In case a patient develops toxicity from midazolam. Which of the following medications can be given as an antidote ?" ,
        answers: [
            { text: "Atropine" ,correct:false},
            { text: "Flumazenil" ,correct:true},
            { text: "Amifostine" ,correct:false},
            { text: "Acetylcysteine" ,correct:false},
        ]
    },
        { 
        // number293
        question: "Which of the following is the precursor for 5_hydroxytryptamine ?" ,
        answers: [
            { text: "Proline" ,correct:false},
            { text: "Alanine" ,correct:false},
            { text: "Glutamine" ,correct:false},
            { text: "Tryptophan" ,correct:true},
        ]
    },
        { 
        // number294
        question: "Where does the electron transport chain reaction pathway take ?" ,
        answers: [
            { text: "Cell Cytoplasm" ,correct:false},
            { text: "Golgi Apparatus" ,correct:false},
            { text: "Outer mitochondrial membrane" ,correct:false},
            { text: "Inner mitochondrial membrane" ,correct:true},
        ]
    },
        { 
        // number295
        question: "pH difference between extracellular and intracellular fluid is " ,
        answers: [
            { text: "Nil" ,correct:false},
            { text: "0.2" ,correct:false},
            { text: "0.4" ,correct:true},
            { text: "0.8" ,correct:false},
        ]
    },
        { 
        // number296
        question: "Role of Atp ?" ,
        answers: [
            { text: "Energy carrier" ,correct:true},
            { text: "Oxygen carrier" ,correct:false},
            { text: "Amino acid carrier" ,correct:false},
            { text: "Glucose carrier" ,correct:false},
        ]
    },
        { 
        // number297
        question: "Which is Cytokine ?" ,
        answers: [
            { text: "Leukotriene" ,correct:true},
            { text: "Adrenaline" ,correct:false},
            { text: "Gonadotropin" ,correct:false},
            { text: "Glucagon" ,correct:false},
        ]
    },
        { 
        // number298
        question: "Which Process does Insulin work on or increase ?" ,
        answers: [
            { text: "Glycogenolysis" ,correct:false},
            { text: "Glyconeogenesis" ,correct:true},
            { text: "Glucogensis" ,correct:false},
            { text: "Ketogenesis" ,correct:false},
        ]
    },
        { 
        // number299
        question: "The synthesis of Glycogen from Glucose called ?" ,
        answers: [
            { text: "Glycogenesis" ,correct:true},
            { text: "Glyconeogenesis" ,correct:false},
            { text: "Glucogenesis" ,correct:false},
            { text: "Ketogenesis" ,correct:false},
        ]
    },
        { 
        // number300
        question: "How much molecule ATP molecules are produced for every glucose." ,
        answers: [
            { text: "12" ,correct:false},
            { text: "24" ,correct:false},
            { text: "34" ,correct:true},
            { text: "32" ,correct:false},
        ]
    },
        { 
        // number301
        question: "Krebs cycle for production of ?" ,
        answers: [
            { text: "COMT" ,correct:false},
            { text: "ATP" ,correct:true},
            { text: "Necessary Amino acids" ,correct:false},
            { text: "Non-Necessary Amino acids" ,correct:false},
        ]
    },
        { 
        // number302
        question: "DNA ligase enzyme for ligation of ?" ,
        answers: [
            { text: "mRNA with TRNA" ,correct:false},
            { text: "2mRNA molecules" ,correct:false},
            { text: "2tRNA molecules" ,correct:false},
            { text: "2DNA strands" ,correct:true},
        ]
    },
        { 
        // number303
        question: "How many amino acid in the human body ?" ,
        answers: [
            { text: "20" ,correct:true},
            { text: "30" ,correct:false},
            { text: "40" ,correct:false},
            { text: "28" ,correct:false},
        ]
    },
        { 
        // number304
        question: "Which Parameter used when we give statin and there is Rhabdomyolysis ?" ,
        answers: [
            { text: "Creatine Kinase" ,correct:true},
            { text: "Crcl" ,correct:false},
            { text: "Creatine Conc" ,correct:false},
            { text: "Fatty acids Conc" ,correct:false},
        ]
    },
        { 
        // number305
        question: "Purpose of mitochondria ?" ,
        answers: [
            { text: "Synthesis of DNA" ,correct:false},
            { text: "Synthesis of RNA" ,correct:false},
            { text: "Produce ATP" ,correct:true},
            { text: "Produce Cytoplasm" ,correct:false},
        ]
    },
        { 
        // number306
        question: "Which is complex Protein ?" ,
        answers: [
            { text: "Pr" ,correct:false},
            { text: "Sec" ,correct:false},
            { text: "Tri" ,correct:false},
            { text: "Quaternary in structure" ,correct:true},
        ]
    },
        { 
        // number307
        question: "acetyl-CoA to form malonyl-coA which vitamin is used ?" ,
        answers: [
            { text: "biotin (B7)" ,correct:true},
            { text: "riboflavin" ,correct:false},
            { text: "Pyridoxine" ,correct:false},
            { text: "Nicotinamide" ,correct:false},
        ]
    },
        { 
        // number308
        question: "Coenzyme for Cystathionase synthase and Cystathionase enzymes which catalyze the transfiguration of methionine to cysteine ?" ,
        answers: [
            { text: "B2" ,correct:false},
            { text: "B3" ,correct:false},
            { text: "B5" ,correct:false},
            { text: "B6" ,correct:true},
        ]
    },
        { 
        // number309
        question: "Acetyl coA and citric acid cycle which vitamine is used ?" ,
        answers: [
            { text: "B6" ,correct:false},
            { text: "B12" ,correct:false},
            { text: "B2" ,correct:true},
            { text: "B9" ,correct:false},
        ]
    },
        { 
        // number310
        question: "Which the carrier in Citric acid cycle ?" ,
        answers: [
            { text: "Carrier in krebs cycle" ,correct:false},
            { text: "Oxaloacetate" ,correct:true},
            { text: "Citric acid" ,correct:false},
            { text: "Lactic acid" ,correct:false},
        ]
    },
        { 
        // number311
        question: "Which of the following inhibits gluconeogenesis?" ,
        answers: [
            { text: "Insulin" ,correct:true},
            { text: "Glucagon" ,correct:false},
            { text: "Epinephrine" ,correct:false},
            { text: "Glucocorticoides" ,correct:false},
        ]
    },
        { 
        // number312
        question: "Which of the following pairs represents the purines nitrogenous bases?" ,
        answers: [
            { text: "Adenine (A) and Uracil (U)" ,correct:false},
            { text: "Cytosine (C) and Uracil (U)" ,correct:false},
            { text: "Adenine (A) and Guanine (G)" ,correct:true},
            { text: "Cytosine (C) and Guanine (G)" ,correct:false},
        ]
    },
        { 
        // number313
        question: "What the function of small nuclear (snRNAs) in protein synthesis?" ,
        answers: [
            { text: "Act as Catalyst" ,correct:false},
            { text: "Modifies mRNA molecules" ,correct:true},
            { text: "Genetic blueprint for the protein" ,correct:false},
            { text: "Translates genetic code to amino acid" ,correct:false},
        ]
    },
        { 
        // number314
        question: "Which of the following is a non-essential amino acid?",
        answers: [
            { text: "Lysine" ,correct:false},
            { text: "Valine" ,correct:false},
            { text: "Cysteine" ,correct:true},
            { text: "Isoleucine" ,correct:false},
        ]
    },
        { 
        // number315
        question: "which the Carbohydrates produce more energy ?" ,
        answers: [
            { text: "Fructose" ,correct:false},
            { text: "Glucose" ,correct:true},
            { text: "Maltose" ,correct:false},
            { text: "Sucrose" ,correct:false},
        ]
    },
        { 
        // number316
        question: "Which of the following compounds is urea cycle a biochemical reaction that produce urea from ?" ,
        answers: [
            { text: "Sucrose" ,correct:false},
            { text: "Glucose" ,correct:false},
            { text: "Glycogen" ,correct:false},
            { text: "Ammonia" ,correct:true},
        ]
    },
        { 
        // number317
        question: "A water-soluble vitamin catalyzes the carboxylation of acetyl-COA to form malonyl-CoA, which is required for the synthesis of fatty acids Which of the following vitamins plays this role ?" ,
        image: "images/3.PNG",
        answers: [
            { text: "Biotin" ,correct:true},
            { text: "Riboflavin" ,correct:false},
            { text: "Pyridoxine" ,correct:false},
            { text: "Nictionamide" ,correct:false},
        ]
    },
        { 
        // number318
        question: "Which of the following is a function of alcohol dehydrogenase enzyme?" ,
        answers: [
            { text: "Accelerates the reduction of ethanol" ,correct:false},
            { text: "Accelerate the addition of hydrogen to ethanol" ,correct:false},
            { text: "Accelerates the addition of phosphate to ethanol" ,correct:false},
            { text: "Accelerates the removal of hydrogen from ethano" ,correct:true},
        ]
    },
    { 
        // number319
        question: "Which of the following enzymes is responsible for forming DNA copy from RNA?" ,
        answers: [
            { text: "Reverse transcriptase" ,correct:true},
            { text: "DNA polymerase" ,correct:false},
            { text: "Helicase" ,correct:false},
            { text: "Primase" ,correct:false},
        ]
    },
    { 
        // number320
        question: "Which of the following is a potential serious side effect that is common among all anticoagulants agents ?" ,
        answers: [
            { text: "Hypokalemia" ,correct:false},
            { text: "Major Bleeding" ,correct:true},
            { text: "Liver Dysfunction" ,correct:false},
            { text: "Renal Dysfunction" ,correct:false},
        ]
    },
        { 
        // number321
        question: "Which of the following is an example of a parenteral direct thrombin inhibitor?" ,
        answers: [
            { text: "enoxaparin" ,correct:false},
            { text: "argatroban" ,correct:true},
            { text: "fondaparinux" ,correct:false},
            { text: "unfractionated heparin" ,correct:false},
        ]
    },
        { 
        // number322
        question: "which of the following anti platelets is contraindicated patients with transient ischemic attack (TIA) or stroke?" ,
        answers: [
            { text: "Prasugrel" ,correct:true},
            { text: "Ticagrelor" ,correct:false},
            { text: "Clopidogrel" ,correct:false},
            { text: "Dipyridamole" ,correct:false},
        ]
    },
        { 
        // number323
        question: "which of the following antiplatelet agents the highest risk of causing dyspnea ?" ,
        answers: [
            { text: "Prasugrel" ,correct:false},
            { text: "Ticagrelor" ,correct:true},
            { text: "Clopidogrel" ,correct:false},
            { text: "Dipyridamole" ,correct:false},
        ]
    },
        { 
        // number324
        question: "Which of the following is the recommended anti-coagulation strategy for atrial fibrillation patient with a CHA2DS2-VACS score of 5?" ,
        answers: [
            { text: "aspirin" ,correct:false},
            { text: "dabigatran" ,correct:true},
            { text: "clopidogrel" ,correct:false},
            { text: "no anticoagulation" ,correct:false},
        ]
    },
        { 
        // number325
        question: "Which of the following could lead to decrease in international normalization ratio (INR) in a patient of warfarin therapy?" ,
        answers: [
            { text: "decrease the consumption of dietary vitamin K" ,correct:false},
            { text: "carbamazepine therapy" ,correct:true},
            { text: "cotrimoxazole therapy" ,correct:false},
            { text: "metronidazole therapy" ,correct:false},
        ]
    },
        { 
        // number326
        question: "- Which of the following is the preferred anticoagulant therapy during hemodialysis procedure?" ,
        answers: [
            { text: "Enoxaparin" ,correct:false},
            { text: "Dabigatran" ,correct:false},
            { text: "Rivaroxaban" ,correct:false},
            { text: "Unfractionated heparin (UFH) " ,correct:true},
        ]
    },
        { 
        // number327
        question: "Which of the following medications is an anticoagulant agent?" ,
        answers: [
            { text: "Aspirin" ,correct:false},
            { text: "Warfain" ,correct:true},
            { text: "Clopidogrel" ,correct:false},
            { text: "D. Streptokinase" ,correct:false},
        ]
    },
        { 
        // number328
        question: "Which of the following is the mechanism of action of apixaban?" ,
        answers: [
            { text: "an indirect inhibitor of thrombin" ,correct:false},
            { text: "an indirect inhibitor of factor Xa" ,correct:false},
            { text: "a direct inhibitor of thrombin " ,correct:false},
            { text: "a direct inhibitor of factor Xa" ,correct:true},
        ]
    },
        { 
        // number329
        question: "Which of the following can decrease the effect of warfarin?" ,
        answers: [
            { text: "Antibiotics" ,correct:false},
            { text: "Paracetamol" ,correct:false},
            { text: "Multivitamins" ,correct:true},
            { text: "Calcium supplement" ,correct:false},
        ]
    },
        { 
        // number330
        question: "Which of the following best represents the activity of dipyridamole?" ,
        answers: [
            { text: "It has fibrinolytic activity" ,correct:false},
            { text: "It has antifibrinolytic activity" ,correct:false},
            { text: "It is a platelet aggregation inhibitor" ,correct:true},
            { text: "It is a phosphodiesterase enzyme inducer" ,correct:false},
        ]
    },
        { 
        // number331
        question: "What is the route of administration of Enoxaparin?" ,
        answers: [
            { text: "Intrathecal bolus" ,correct:false},
            { text: "Transdermal injection" ,correct:false},
            { text: "Subcutaneous injection" ,correct:true},
            { text: "Intramuscular injection " ,correct:false},
        ]
    },
        { 
        // number332
        question: "Which of the following drugs can be used to lyse fibrin clots?" ,
        answers: [
            { text: "heparin" ,correct:false},
            { text: "warfarin" ,correct:false},
            { text: "enoxaparin" ,correct:false},
            { text: "streptokinase" ,correct:true},
        ]
    },
        { 
        // number333
        question: "Which of the following medications produces antiplatelet effect by inhibiting Adenosine Diphosphate (ADP) receptors?" ,
        answers: [
            { text: "aspirin" ,correct:false},
            { text: "abciximab" ,correct:false},
            { text: "clopidogrel" ,correct:true},
            { text: "streptokinase" ,correct:false},
        ]
    },
        { 
        // number334
        question: "Which of the following is recommended regarding air bubble in the syringe for a patient starting on enoxaparin subcutaneous Injection?" ,
        answers: [
            { text: "inject the dose with the air bubble" ,correct:true},
            { text: "Inject the air bubble if the volume is small" ,correct:false},
            { text: "remove the air bubble to avoid wastage of the dose" ,correct:false},
            { text: "remove air bubble and adjust volume before injection" ,correct:false},
        ]
    },
        { 
        // number335
        question: "Which of the following is a potential serious side effect that is common among all anticoagulant agents?" ,
        answers: [
            { text: "hypokalemia" ,correct:false},
            { text: "major bleeding" ,correct:true},
            { text: "liver dysfunction" ,correct:false},
            { text: "renal dysfunction" ,correct:false},
        ]
    },
        { 
        // number336
        question: "Which of the following statements describes unfractionated heparin?" ,
        answers: [
            { text: "enolic acid derivative" ,correct:false},
            { text: "propionic acid derivative" ,correct:false},
            { text: "acetyl ester of salicylic acid" ,correct:false},
            { text: "mucopolysaccharide polymers" ,correct:true},
        ]
    },
        { 
        // number337
        question: "The recommended DVT prophylaxis dose for postpartum in women with heigh risk of DVT is?" ,
        answers: [
            { text: "3 weeks" ,correct:false},
            { text: "6 weeks" ,correct:true},
            { text: "3 months" ,correct:false},
            { text: "6 months" ,correct:false},
        ]
    },
        { 
        // number338
        question: "Which of the following is parenteral direct thrombin inhibitor?" ,
        answers: [
            { text: "Argatroban" ,correct:true},
            { text: "Dabigatran (ORAL )" ,correct:false},
            { text: "Heparin" ,correct:false},
            { text: "Warfarin" ,correct:false},
        ]
    },
        { 
        // number339
        question: "how ibuprofen inhibit antiplatelet effect of aspirin ?" ,
        answers: [
            { text: "Ibuprofen bind to cox2 and hinder it's acetylation by aspirin" ,correct:false},
            { text: "Ibuprofen bind to cox1 and hinder it's acetylation by aspirin" ,correct:true},
            { text: "Ibuprofen bind to cox2 and hinder it's Oxidation by aspirin" ,correct:false},
            { text: "Ibuprofen bind to cox1 and hinder it's Oxidation by aspirin" ,correct:false},
        ]
    },
        { 
        // number340
        question: "patient on warfarin and has mechanical valve and INR 3.5, what should you do ?" ,
        answers: [
            { text: "No management" ,correct:true},
            { text: "decrease warfarin dose" ,correct:false},
            { text: "increase warfarin dose" ,correct:false},
            { text: "replace warfarin" ,correct:false},
        ]
    },
        { 
        // number341
        question: "Neonate with coagulopathy which vit K route will you use ?" ,
        answers: [
            { text: "Suppository" ,correct:false},
            { text: "Iv" ,correct:true},
            { text: "Sc" ,correct:false},
            { text: "Im" ,correct:false},
        ]
    },
        { 
        // number342
        question: "antiplatelet C.I. in patients with transient ischemic attack ?" ,
        answers: [
            { text: "dipyradimole" ,correct:false},
            { text: "clopidogrel" ,correct:false},
            { text: "prasugrel" ,correct:true},
            { text: "ticagrelor" ,correct:false},
        ]
    },
        { 
        // number343
        question: "INR monitoring after initiation as outpatient ?" ,
        answers: [
            { text: "next day" ,correct:false},
            { text: "2-5 days" ,correct:true},
            { text: "1 month" ,correct:false},
            { text: "3 months" ,correct:false},
        ]
    },
        { 
        // number344
        question: "treatments of pulmonary embolism?" ,
        answers: [
            { text: "Enoxaparin 40 mg sc once daily" ,correct:false},
            { text: "Rivaroxaban" ,correct:false},
            { text: "Enoxaparin 1 mg/ kg twice daily Or 2 mg/ kg once daily" ,correct:true},
            { text: "Enoxaparin 5 mg/ kg twice daily Or 10 mg/ kg once daily" ,correct:false},
        ]
    },
        { 
        // number345
        question: "patient is taking warfarin 4.5 mg PO daily came to the clinic with INR of 5.1 without any signs of active bleeding, what is the appropriate management for her ?" ,
        answers: [
            { text: "Hold warfarin and give vit K IV" ,correct:false},
            { text: "Hold warfarin and resume with lower dose" ,correct:true},
            { text: "Hold warfarin and give platelet" ,correct:false},
            { text: "Hold warfarin and give StreptoKinase" ,correct:false},
        ]
    },
        { 
        // number346
        question: "in pregnancy what the trimester can be use warfarin ?" ,
        answers: [
            { text: "first" ,correct:false},
            { text: "second" ,correct:false},
            { text: "third trimester" ,correct:false},
            { text: "avoided use in pregnancy" ,correct:true},
        ]
    },
        { 
        // number347
        question: "Pt use Warfarin 10mg and INR low why ?" ,
        answers: [
            { text: "Low dose" ,correct:false},
            { text: "Dite" ,correct:true},
            { text: "Low bioavailability of warfarin" ,correct:false},
            { text: "Exercises" ,correct:false},
        ]
    },
        { 
        // number348
        question: "which the fallowing uses in prophylaxis stroke ?" ,
        answers: [
            { text: "anticoagulant" ,correct:false},
            { text: "thrombolytic drug" ,correct:false},
            { text: "antipletalate" ,correct:true},
            { text: "Warfarin" ,correct:false},
        ]
    },
        { 
        // number349
        question: "Which the fallowing drugs inducing thrombocytopenia ?" ,
        answers: [
            { text: "UFH" ,correct:true},
            { text: "LMWH" ,correct:false},
            { text: "warfarin" ,correct:false},
            { text: "Aspirin" ,correct:false},
        ]
    },
        { 
        // number350
        question: "Which the fallowing drugs treatment thrombocytopenia ?" ,
        answers: [
            { text: "UFH" ,correct:false},
            { text: "LMWH" ,correct:false},
            { text: "warfarin" ,correct:false},
            { text: "Argatroban" ,correct:true},
        ]
    },
        { 
        // number351
        question: "Medication for osteoporosis in menopausal women given monthly ?" ,
        answers: [
            { text: "Zoledronic acid" ,correct:false},
            { text: "ibandronate" ,correct:true},
            { text: "raloxifene" ,correct:false},
            { text: "Mefenamic acid" ,correct:false},
        ]
    },
        { 
        // number352
        question: "Medication for osteoporosis in women given once per a year ?" ,
        answers: [
            { text: "Zoledronic acid" ,correct:true},
            { text: "ibandronate" ,correct:false},
            { text: "raloxifene" ,correct:false},
            { text: "Mefenamic acid" ,correct:false},
        ]
    },
        { 
        // number353
        question: "Medication for osteoporosis in women given weekly ?" ,
        answers: [
            { text: "Zoledronic acid" ,correct:false},
            { text: "ibandronate" ,correct:false},
            { text: "raloxifene" ,correct:false},
            { text: "Alendronate" ,correct:true},
        ]
    },
        { 
        // number354
        question: "gold standard test for Osteoporosis ?" ,
        answers: [
            { text: "(DEXA) dual-energy x-ray absorptiometry" ,correct:true},
            { text: "CT" ,correct:false},
            { text: "MRI" ,correct:false},
            { text: "Reynold test" ,correct:false},
        ]
    },
        { 
        // number355
        question: "Which of the following osteoporosis drugs can cause esophageal ulcers ?" ,
        answers: [
            { text: "denosumab" ,correct:false},
            { text: "teriparatide" ,correct:false},
            { text: "alendronate" ,correct:true},
            { text: "zelodronic acid" ,correct:false},
        ]
    },
        { 
        // number356
        question: "Which of the following medications for osteoporosis will significantly reduce the risk of hip fracture ?" ,
        answers: [
            { text: "Phosphate" ,correct:false},
            { text: "Risedronate" ,correct:true},
            { text: "Raloxifene" ,correct:false},
            { text: "Calcitonin" ,correct:false},
        ]
    },
        { 
        // number357
        question: "A 65-year patient suffered from Osteomalacia with finger numbness, tingling and burning of extremities. The doctor prescribed vitamin D and an IV calcium supplement. Which of the following calcium salts did the physician most likely prescribed ?" ,
        answers: [
            { text: "Calcium citrate (21%calcium)" ,correct:false},
            { text: "Calcium lactate(13%calcium)" ,correct:false},
            { text: "Calcium gluconate (9%calcium)" ,correct:true},
            { text: "Calcium phosphate (39% calcium)" ,correct:false},
        ]
    },
        { 
        // number358
        question: "A 6-year-old child weighing 28 kg came to the clinic with viral infection. The physician prescribed acyclovir at a dose of 20 mg/kg four times a day. Acyclovir is available as 200 mg/5 ml oral suspension. How many milliliters would be administered per day ?" ,
        answers: [
            { text: "10" ,correct:false},
            { text: "14" ,correct:false},
            { text: "44" ,correct:false},
            { text: "56" ,correct:true},
        ]
    },
        { 
        // number359
        question: "A physician prescribed heparin at a dose of 75 units/Kg every six hours for a child weighing 15 kg, heparin is available in 2.5 ml vial containing 12,500 units. How many milliliters of heparin solution would be administered every day ?" ,
        answers: [
            { text: "0.5" ,correct:false},
            { text: "0.9" ,correct:true},
            { text: "1.5" ,correct:false},
            { text: "1.8" ,correct:false},
        ]
    },
        { 
        // number360
        question: "The following formula was prescribed by a dermatologist for a patient with dermatitis.Hydrocortisone 1.5% w/w , Cream base to make 50g . the pharmacist has two strengths of hydrocortisone creams in his hand, 2.5% and 1%. Therefore, in order to compound this prescription, the pharmacist is going to add these two creams strength together in certain proportions to fulfill this formulation. Which of the following is the weight ratio of the two strengths of hydrocortisone needed ?" ,
        answers: [
            { text: "1:2" ,correct:false},
            { text: "1:1" ,correct:false},
            { text: "0.5:1" ,correct:true},
            { text: "2:1" ,correct:false},
        ]
    },
        { 
        // number361
        question: "The pharmacist received a prescription to extemporaneously prepare moxifloxacin oral suspension from the 400 mg tablet in a concentration of 20 mg/ml with total volume of 60 mL Which of the following is the number of tablets of moxiflaxacin 400 mg needed to prepare the above prescription ?" ,
        answers: [
            { text: "2" ,correct:false},
            { text: "3" ,correct:true},
            { text: "4" ,correct:false},
            { text: "6" ,correct:false},
        ]
    },
        { 
        // number362
        question: "Drug X has an infusion rate of 0.95 mg/kg/hr. Which of the following is the amount of drug X (in mg) needed for a 12- hr infusion if patient weight is 70 kg ?" ,
        answers: [
            { text: "66.5 mg" ,correct:false},
            { text: "84 mg" ,correct:false},
            { text: "665 mg" ,correct:false},
            { text: "798 mg" ,correct:true},
        ]
    },
        { 
        // number363
        question: "A patient is to receive one mg of hydromorphine hydrochloride injection for pain. Hydromrophine hydrochloride is available as 500 mg in a 50 ml vial. How many milliliters would be injected ?" ,
        answers: [
            { text: "0.1" ,correct:true},
            { text: "0.5" ,correct:false},
            { text: "1.0" ,correct:false},
            { text: "2.0" ,correct:false},
        ]
    },
        { 
        // number364
        question: "A solution contains 2.5 mg of a drug per milliliter. administered at a rate of 50 mg/hr. (1 ml = 30 drops). Which of the following Is the most appropriate infusion rate ?" ,
        answers: [
            { text: "5 drops/min" ,correct:false},
            { text: "10 drops/min" ,correct:true},
            { text: "20 drops/min" ,correct:false},
            { text: "40 drops/min" ,correct:false},
        ]
    },
        { 
        // number365
        question: "A 2.5% intravenous drug is infused at a rate of 1.5 ml/min. Which of the amount of the drug (in mg) that is infused in each hour ?" ,
        answers: [
            { text: "25" ,correct:false},
            { text: "225" ,correct:false},
            { text: "2000" ,correct:false},
            { text: "2250" ,correct:true},
        ]
    },
        { 
        // number366
        question: "A technician is preparing 250 ml of 70% (w/v) dextrose solution Which of the following is the total amount of dextrose (in grams) in the final preparation ?" ,
        answers: [
            { text: "125 g" ,correct:false},
            { text: "150 g" ,correct:false},
            { text: "175 g" ,correct:true},
            { text: "200 g" ,correct:false},
        ]
    },
        { 
        // number367
        question: "How many milliliters of paracetamol syrup of 120 mg/5 ml strength would be prepared using 1.8 kg of paracetamol ?" ,
        answers: [
            { text: "15,000 mL" ,correct:false},
            { text: "30,000 mL" ,correct:false},
            { text: "50,000 mL" ,correct:false},
            { text: "75,000 mL" ,correct:true},
        ]
    },
        { 
        // number368
        question: "What is the percentage w/v of 10 ml vial that contains 50 mEq of ammonium chloride per 10 ml if 1 mEq of ammonium chloride = 0.0535g ?" ,
        answers: [
            { text: "0.535" ,correct:false},
            { text: "2.675" ,correct:true},
            { text: "5.350" ,correct:false},
            { text: "26.750" ,correct:false},
        ]
    },
        { 
        // number369
        question: "One folic acid tablet contains 400 mcg of folic acid as an active ingredient. How many tablets would be required for the preparation of 30 grams of folic acid ?" ,
        answers: [
            { text: "5000 tablets" ,correct:false},
            { text: "7500 tablets" ,correct:false},
            { text: "50000 tablets" ,correct:false},
            { text: "75000 tablets" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A 6-year-old HIV infected boy measuring 0.9 m2 is to receive nevirapine 140 mg/m two times daily. Nevirapine is available as 50 mg/5 ml suspension. How many millilters of nevirapine suspension would be administered per dose ?" ,
        answers: [
            { text: "6.3" ,correct:false},
            { text: "12.6" ,correct:true},
            { text: "14.0" ,correct:false},
            { text: "16.5" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A drug has a clearance value of 4.75 L/hour and 65% is cleared by renal excretion . Which of the following would be the non-renal clearance value ?" ,
        answers: [
            { text: "1.25 L/hrs" ,correct:false},
            { text: "1.66 L/hrs" ,correct:true},
            { text: "1.90 L/hrs" ,correct:false},
            { text: "2.05 L/hrs" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A patient is to receive 400 ml intravenous infusion of a 1% drug that will be over 10 hours Which of the following is the amount (milligrams)of the drug that will be delivered in 15 minutes ?" ,
        answers: [
            { text: "100 mg" ,correct:true},
            { text: "150 mg" ,correct:false},
            { text: "200 mg" ,correct:false},
            { text: "400 mg" ,correct:false},
        ]
    },
        { 
        // number105
        question: "Penicillin-G potassium Is available in 50 ml vial containing 20 gram. Each milligram of penicillin-G potasslum is equal to 1500 units . How many units of penicillin G potassium are there in each vial ?" ,
        answers: [
            { text: "15,000,000" ,correct:false},
            { text: "20,000,000" ,correct:false},
            { text: "25,000,000" ,correct:false},
            { text: "30,000,000" ,correct:true},
        ]
    },
        { 
        // number105
        question: "-A physician prescribes, for a 6-year-old child 10 mg, omeprazole daily for seven days as a syrup formulation. Omeprazóle capsules strength are available in the pharmacy is 10 mg Which of the following is the number of capsules required to make to suffice the total doses in the prescription if the final concentration syrup should be 2 mg/mL ?" ,
        answers: [
            { text: "2" ,correct:false},
            { text: "3" ,correct:false},
            { text: "5" ,correct:false},
            { text: "7" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A 35-year-old individual is receiving 20 mg of propranolol hydro four times daily as a prophylaxis to migraine attacks. The drug 25% bioavailability due to extensive first pass effect.What amount of the drug reaches the systemic circulation after dosing ?" ,
        answers: [
            { text: "2.5 mg" ,correct:false},
            { text: "5.0 mg" ,correct:true},
            { text: "7.5 mg" ,correct:false},
            { text: "10 mg" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A 55-year-old man with a history of recurrent back pain is admitted to the hospital, he was prescribed paracetamol 1000 mg P.O Q6hr PRN for 1-month available tablet is 500mg. What is the maximum quantity given for a refill ?" ,
        answers: [
            { text: "8 tablets" ,correct:false},
            { text: "24 tablets" ,correct:false},
            { text: "42 tablets" ,correct:false},
            { text: "240 tablets" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A child weighing 25 kg is prescribed acetazolamide 2.5 mg/kg every 12 hours. Acetazolamide is available in a liquid dosage form with strength of 25 mg/ml.How many milliliters would the patient be administered per dose ?" ,
        answers: [
            { text: "2.5" ,correct:true},
            { text: "5.0" ,correct:false},
            { text: "7.5" ,correct:false},
            { text: "10" ,correct:false},
        ]
    },
        { 
        // number105
        question: "-The diclophenac sodium suppository is prepared according to the following formula:Diclophenac sodium 2.5% , Triglyceride base to make 1g . How many grams of diclophenac sodium should be used to prepare 24000 suppositories ?" ,
        answers: [
            { text: "120" ,correct:false},
            { text: "240" ,correct:false},
            { text: "480" ,correct:false},
            { text: "600" ,correct:true},
        ]
    },
        { 
        // number105
        question: "Which of the following is the amount of dextrose (in grams) that is present in 100 ml of 10% dextrose solution ?" ,
        answers: [
            { text: "1" ,correct:false},
            { text: "10" ,correct:true},
            { text: "100" ,correct:false},
            { text: "1000" ,correct:false},
        ]
    },
        { 
        // number105
        question: "a 4-year-old boy is admitted with dehydration. he is started on dextrose 5% and normal saline with 40 milliequivalent potassium chloride per liter at a rate of 40 ml per hour weight is 16 kilograms. How much potassium chloride (in milliequivalent per kilograms per day) is her receiving ?" ,
        answers: [
            { text: "2.4" ,correct:true},
            { text: "3" ,correct:false},
            { text: "4.5" ,correct:false},
            { text: "6" ,correct:false},
        ]
    },
        { 
        // number105
        question: "which of the following is the percentage (%) strength of ketorolac tromethamine in an ophthalmic solution if 200 micrograms of the drug are present in 50 microliters of the solution ?" ,
        answers: [
            { text: "0.25" ,correct:false},
            { text: "0.40" ,correct:true},
            { text: "0.50" ,correct:false},
            { text: "0.80" ,correct:false},
        ]
    },
        { 
        // number105
        question: "10 ml vial contains 1 gm of clindamycin hydrochloride. each milligram of clindamycin hydrochloride is equivalent to 800 micrograms (mcg) of clindamycin. How much clindamycin in micrograms (mcg) is present in 3 ml solution ?" ,
        answers: [
            { text: "240" ,correct:false},
            { text: "2400" ,correct:false},
            { text: "24000" ,correct:false},
            { text: "240000" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A solution contains 27 mg of antipyrine per 500 microliter. How many grams of antipyrine are there in 3 ml of the solution ?" ,
        answers: [
            { text: "0.162 gm" ,correct:true},
            { text: "0.270 gm" ,correct:false},
            { text: "162 gm" ,correct:false},
            { text: "270 gm" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A 5-years-old girl weights 16 kilograms and is 95 centimeters tall. Which of the following is her body surface area in squared meter (m) ?" ,
        answers: [
            { text: "0.1" ,correct:false},
            { text: "0.4" ,correct:false},
            { text: "0.6" ,correct:true},
            { text: "0.9" ,correct:false},
        ]
    },
        { 
        // number105
        question: "The following prescription is received in a hospital pharmacy: Losartan 25 mg, S: Take 1 tab BID M: 3 weeks, Which of the following instructions will be on the prescription label ?" ,
        answers: [
            { text: "Take 1 tablet once daily (21 tablets)" ,correct:false},
            { text: "Take 2 tablets once daily (42 tablets)" ,correct:false},
            { text: "Take 1 tablet twice daily (42 tablets)" ,correct:true},
            { text: "Take 2 tablets twice daily (48 tablets)" ,correct:false},
        ]
    },
        { 
        // number105
        question: "How many milliliters are there in one table spoonful in a metric system?" ,
        answers: [
            { text: "2.5 ml" ,correct:false},
            { text: "5.0 ml" ,correct:false},
            { text: "10 ml" ,correct:false},
            { text: "15 ml" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A solution contains 2.5 mg of a drug per milliliter. The drug is to be administered at a rate of 50 mg/hr. (1 mL= 30 drops). Which of the following is the most appropriate infusion rate ?" ,
        answers: [
            { text: "5 drops/min" ,correct:false},
            { text: "10 drops/min" ,correct:true},
            { text: "20 drops/min" ,correct:false},
            { text: "40 drops/min" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A patient is to receive two drops of dexamethasone four times daily. The dexamethasone is available as 0.1% solution in a 5 ml bottle with a dropper calibrated to deliver 16 drop per ml. How many days will the bottle last ?" ,
        answers: [
            { text: "4" ,correct:false},
            { text: "6" ,correct:false},
            { text: "8" ,correct:false},
            { text: "10" ,correct:true},
        ]
    },
        { 
        // number105
        question: "What is the specific gravity of a liquid if 121.92 ml of its weight is 107.56 g ?" ,
        answers: [
            { text: "0.882 s.g." ,correct:true},
            { text: "1.88 s.g." ,correct:false},
            { text: "2.88 s.g." ,correct:false},
            { text: "8.822 s.g." ,correct:false},
        ]
    },
        { 
        // number105
        question: "A physician prescribed 5000 units of heparin two times daily for five days. Heparin is available in a vial containing 20,000 units/ml. How many milliliters should be given for each dose ?" ,
        answers: [
            { text: "0.25" ,correct:true},
            { text: "0.50" ,correct:false},
            { text: "0.75" ,correct:false},
            { text: "1.50" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A solution contains 5 gm of drug per 25 ml.Which of the following is the concentration, in mg/ml, of the drug ?" ,
        answers: [
            { text: "50 mg/ml" ,correct:false},
            { text: "100 mg/ml" ,correct:false},
            { text: "200 mg/ml" ,correct:true},
            { text: "400 mg/ml" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A 20-year-old boy who weighs 10 kg is prescribed Drug x as 1 mg/kg/hour infusion, The pharmacy prepared the prescription by diluting 5 ml of 25 mg/ml concentration via to100 ml with normal saline. Which of the following is the rate of infusion (in ml/hour) " ,
        answers: [
            { text: "2" ,correct:false},
            { text: "4" ,correct:false},
            { text: "6" ,correct:false},
            { text: "8" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A drug has a total body clearance of 2.5 L/hr. Its hepatic metabolism accounts for 25% during less blood perfusion and 40 % when blood perfusion is higher to the liver . What will be the hepatic clearance value in fed state of stomach ?" ,
        answers: [
            { text: "0.50 L/hr" ,correct:false},
            { text: "0.75 L/hr" ,correct:false},
            { text: "1.00 L/hr" ,correct:true},
            { text: "1.50 L/hr" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A physician ordered Labetalol hydrochloride intravenous infusion at a close of 500 micrograms/min over an hour for a hypertensive patient. Labetalol hydrochloride is available in a 20 ml vial containing 5 mg/ml of the drug . Which of the following is the amount in (milliliters) of labetalol hydrochloride solution that should be administered ?" ,
        answers: [
            { text: "4.5" ,correct:false},
            { text: "6" ,correct:true},
            { text: "7.5" ,correct:false},
            { text: "10" ,correct:false},
        ]
    },
        { 
        // number105
        question: "An ointment was prepared by incorporating 15 g of a drug into 150 g of petrolatum. What would be the concentration of the drug in the ointment ?" ,
        answers: [
            { text: "0.91%" ,correct:false},
            { text: "1.00%" ,correct:false},
            { text: "0.10%" ,correct:false},
            { text: "10.00%" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A 2.5%intravenous drug is infused at a rate of 1.5 m/min Which of the amount of the drug (in mg) that is infused in each hour ?" ,
        answers: [
            { text: "25" ,correct:false},
            { text: "225" ,correct:false},
            { text: "2000" ,correct:false},
            { text: "2250" ,correct:true},
        ]
    },
        { 
        // number105
        question: "If a pharmacist has a stock solution of D5W and D50W How many milliliters form each solution will need in order to prepare a 450 ml of D15W solution ?" ,
        answers: [
            { text: "D50w/D5w=100/350" ,correct:true},
            { text: "D50w/D5w=350/100" ,correct:false},
            { text: "D50w/D5W=200/250" ,correct:false},
            { text: "D50w/D5w= 250/200" ,correct:false},
        ]
    },
        { 
        // number105
        question: "How much of 5% w/v solution would be required to prepare 60 ml of 5mg/ml solution ?" ,
        answers: [
            { text: "6 ml" ,correct:true},
            { text: "10 ml" ,correct:false},
            { text: "15 ml" ,correct:false},
            { text: "18 ml" ,correct:false},
        ]
    },
        { 
        // number105
        question: "The pharmacy receives a prescription for labetalol 800 mg twice daily for three days. The available strength of labetalol in the pharmacy is 200 mg. Which of the following is the number of 200 mg labetalol tablet needed to prepare the above prescriptions for the total duration ?" ,
        answers: [
            { text: "8" ,correct:false},
            { text: "12" ,correct:false},
            { text: "16" ,correct:false},
            { text: "24" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A drug vial contains 0.2% of drug x. Which of the following is the amount of the drug x (in mg) in a 5ml dose ?" ,
        answers: [
            { text: "0.1" ,correct:false},
            { text: "1" ,correct:false},
            { text: "10" ,correct:true},
            { text: "100" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A patient is to receive 25 mg of dextromethorphan four times daily for cough. The pharmacist dispensed two 125 ml bottles containing 10 mg of dextromethorphan per 5 ml. How many days will the two bottles last ?" ,
        answers: [
            { text: "3" ,correct:false},
            { text: "5" ,correct:true},
            { text: "7" ,correct:false},
            { text: "9" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A hospitalized patient with hypertension is prescribed nicardipine hydrochloride intravenous infusion at a dose of 5 mg per hour for four hours. Nicardipine hydrochloride is available as a 10 ml vial containing 25 mg of nicardipine hydrochloride. How many milliliters of nicardipine should be used ?" ,
        answers: [
            { text: "2.5" ,correct:false},
            { text: "4.0" ,correct:false},
            { text: "8.0" ,correct:true},
            { text: "10.0" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A 100 mL infusion bottle contains 2 g of potassium chloride (KCI). (Mol.wt.kcl= 74.6). Which of the following is the most likely amount of KCL present in the infusion bottle ?" ,
        answers: [
            { text: "12.7 mEq" ,correct:false},
            { text: "20 mEq" ,correct:false},
            { text: "26.8 mEq" ,correct:true},
            { text: "78.5 mEq" ,correct:false},
        ]
    },
        { 
        // number105
        question: "Heparin is prepared in a piggy-bag which contains 25,000 units in 250 ml. How many milliliters of heparin per hour must be given to a 70-kilogram male patient if infusion rate is 10 units\kg\hour ?" ,
        answers: [
            { text: "5 ml" ,correct:false},
            { text: "7 ml" ,correct:true},
            { text: "10 ml" ,correct:false},
            { text: "20 ml" ,correct:false},
        ]
    },
        { 
        // number105
        question: "What is the weight of 60 ml olive oil (density: 0.92 g\ml) ?" ,
        answers: [
            { text: "36.66 gm" ,correct:false},
            { text: "49.60 gm" ,correct:false},
            { text: "55.20 gm" ,correct:true},
            { text: "65.86 gm" ,correct:false},
        ]
    },
        { 
        // number105
        question: "How many grams of water are needed to make 100grams of 5% (W\W) solution of potassium acetate ?" ,
        answers: [
            { text: "57 g" ,correct:false},
            { text: "95 g" ,correct:false},
            { text: "115 g" ,correct:true},
            { text: "140 g" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A patient is prescribed 0.25% alcaftadine ophthalmic solution, one drop for each eye per day. Alcaftadine is available in a 3 ml bottle and one ml contains 14 drops. How many days will the bottle last ?" ,
        answers: [
            { text: "6" ,correct:false},
            { text: "13" ,correct:false},
            { text: "17" ,correct:false},
            { text: "21" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A500 infusion bottle contains 11.72 g of potassium chloride (kCI). The molecular weight of KCI= 74.6 grams. Which of the following is the amount of KCI, in milliequivalent (mEq), present in the bottle ?" ,
        answers: [
            { text: "0.637 mEq" ,correct:false},
            { text: "6.37 mEq" ,correct:false},
            { text: "11.72mEq" ,correct:false},
            { text: "157.1 mEq" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A 65-year-old man (weight=70 kg) with acute decompensated heart failure is to be started on dobutamine 5 mcg\kg\ minute. The infusion bag contains dobutamine 150 mg in 100 ml of 0.9% sodium chloride. He has normal renal function. Which of the following is the rate of infusion of dobutamine ?" ,
        answers: [
            { text: "0.25 mL\hour" ,correct:false},
            { text: "1.3 mL\hour" ,correct:false},
            { text: "14 mL\hour" ,correct:true},
            { text: "26 mL\hour" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A 6-year-old HIV infected boy measuring o.9 m2 is to receive nevirapine 140 mg\m2 two times daily. Nevirapine is available as 50 mg / 5 ml suspension. How many milliliters of nevirapine suspension would be administered per dose ?" ,
        answers: [
            { text: "6.3" ,correct:false},
            { text: "12.6" ,correct:true},
            { text: "14.0" ,correct:false},
            { text: "16.5" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A patient is to receive 750 ml 5% dextrose over five hours. The intravenous infusion set delivers 10 drops\ ml. Which of the following is the flow rate in ml\min to deliver the prescribed volume ?" ,
        answers: [
            { text: "1.5" ,correct:false},
            { text: "2.0" ,correct:false},
            { text: "2.5" ,correct:true},
            { text: "3.0" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A pharmacist calculates a dose of 500 µg/min for continuous infusion of dopamine based on weight of the patient. The concentration of a premixed dopamine infusion is 400 mg/250 ml. What is the most likely amount of dopamine in ml received by the patient in the first hour of treatment ?" ,
        answers: [
            { text: "10 ml" ,correct:false},
            { text: "19 ml" ,correct:true},
            { text: "24 ml" ,correct:false},
            { text: "28 ml" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A drug was given to a patient with a constant intravenous infusion rate of 10 mg/hour. The half-life of the drug is three hours. Which of the following is the time in hours to reach steady state plasma concentration ?" ,
        answers: [
            { text: "10" ,correct:false},
            { text: "15" ,correct:true},
            { text: "20" ,correct:false},
            { text: "30" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A syrup is 70% w/v solution of sucrose in water. How much of sucrose is required to prepare 500 ml of this syrup ?" ,
        answers: [
            { text: "250 g" ,correct:false},
            { text: "300 g" ,correct:false},
            { text: "350 g" ,correct:true},
            { text: "400 g" ,correct:false},
        ]
    },
        { 
        // number105
        question: "Lidocaine is commonly administered for patient exhibiting cardiac arrhythmias. Lidocaine pharmacokinetic parameters are as follows half- life = 2 hours, clearance = 9 mL/min/kg and volume of distribution = 70 L. Which of the following is the time (in minutes) needed to achieve 87.5% of the steady state concentration in a 70-kg individual ?" ,
        answers: [
            { text: "77 minutes" ,correct:false},
            { text: "0.077 minutes" ,correct:true},
            { text: "0.77 minutes" ,correct:false},
            { text: "7.7 minutes" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A 9-year-old child weighing 36 kg came to the clinic with chickenpox. The physician prescribed acyclovir at a dose of 20 mg/kg four times a day for five days. Acyclovir is available as 200 mg/5ml oral suspension. How many milliliters of suspension should be dispensed ?" ,
        answers: [
            { text: "240" ,correct:false},
            { text: "320" ,correct:false},
            { text: "360" ,correct:true},
            { text: "540" ,correct:false},
        ]
    },
        { 
        // number105
        question: "How many grams of dextrose are in a 250 ml bag of 10% dextrose ?" ,
        answers: [
            { text: "12.5" ,correct:false},
            { text: "25" ,correct:true},
            { text: "50" ,correct:false},
            { text: "100" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A water sample contains 9 ppm of magnesium. Which of the following is the percentage of magnesium in this sample ?" ,
        answers: [
            { text: "0.9%" ,correct:false},
            { text: "0.09%" ,correct:false},
            { text: "0.009%" ,correct:false},
            { text: "0.0009%" ,correct:true},
        ]
    },
        { 
        // number105
        question: "Results data from a bioavailability study of four different dosage forms of an antibiotic drug is shown (see table). The volunteers fasted for 12 hours prior to taking the drug products. Urine samples were collected up to 72 hours after the administration of the drug to obtain the maximum urinary drug excretion. Which of the following is the absolute bioavailability of the tablet dosage form ?" ,
        image:"images/1.PNG",
        answers: [
            { text: "80%" ,correct:false},
            { text: "85%" ,correct:true},
            { text: "90%" ,correct:false},
            { text: "95%" ,correct:false},
        ]
    },
        { 
        // number105
        question: "Which of the following is the expected bioavailability (F) of drugs given by intravenous route ?" ,
        answers: [
            { text: "less than 25%" ,correct:false},
            { text: "25%-50%" ,correct:false},
            { text: "75% -100%" ,correct:false},
            { text: "100%" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A patient presents a prescription with the following antiviral regimen. Start with 50 mg then decrease by 10 mg every 2 days until finished. Which of the following quantities of 5 mg tablets is needed to fill this prescription ?" ,
        answers: [
            { text: "20" ,correct:false},
            { text: "30" ,correct:false},
            { text: "40" ,correct:false},
            { text: "60" ,correct:true},
        ]
    },
        { 
        // number105
        question: "Which of the following is the calculation of the apparent volume of distribution if the patient received 400 mg of intravenous medication that produced immediate blood concentration of 10 microgram/ml ?" ,
        answers: [
            { text: "0.025 L" ,correct:false},
            { text: "0.4 L" ,correct:false},
            { text: "25 L" ,correct:false},
            { text: "40 L" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A solution contains 2.5 mg of a drug per milliliter. The drug is to be administered at a rate of 50 mg/hr. (1 mL=30 drops). Which of the following is the most appropriate infusion rate ?" ,
        answers: [
            { text: "5 drops/min" ,correct:false},
            { text: "10 drops/min" ,correct:true},
            { text: "20 drops/min" ,correct:false},
            { text: "40 drops/min" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A 20 ml vial of penicillin-G potassium containing 2,000,000 units is available. Each mg of the drug is equivalent to 1600 units. How many milligrams of penicillin-G potassium are there in one ml of the solution ?" ,
        answers: [
            { text: "12.50" ,correct:false},
            { text: "62.50" ,correct:false},
            { text: "160" ,correct:false},
            { text: "1250" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A drug vial contains 0.2% of drug X. Which of the following is the amount of the drug X (in mg) in a 10 ml dose ?" ,
        answers: [
            { text: "0.1" ,correct:false},
            { text: "1" ,correct:false},
            { text: "10" ,correct:false},
            { text: "20" ,correct:true},
        ]
    },
        { 
        // number105
        question: "The vitamin-D solution is available in a 2.5 ml bottle containing 36,000 international units The recommended daily dose for children is 400 international units. Each ml of vitamin D solution contains 36 drops. How many drops should be administered to a child per day ?" ,
        answers: [
            { text: "1" ,correct:true},
            { text: "2" ,correct:false},
            { text: "4" ,correct:false},
            { text: "12" ,correct:false},
        ]
    },
        { 
        // number105
        question: "The diagram shows the role of a vitamin as coenzyme for cystathionine synthase and cystathionase enzymes which catalyze the transsulfuration of methionine to cysteine (see image).Which of the following is the vitamin indicated by the star* in the figure ?" ,
        image: "images/2.PNG",
        answers: [
            { text: "B2" ,correct:false},
            { text: "B3" ,correct:false},
            { text: "B5" ,correct:false},
            { text: "B6" ,correct:true},
        ]
    },
            { 
        // number105
        question: "Quinine is an important antimalarial drug with very complicated structure and is very sensitive stereochemistry (see image). Which pharmacological activity the drug will possess stereochemistry at the arrow has changed from R to S ?" ,
        image: "images/4.PNG",
        answers: [
            { text: "anticancer" ,correct:false},
            { text: "antimalarial" ,correct:false},
            { text: "anticoagulant" ,correct:false},
            { text: "antiarrhythmic" ,correct:true},
        ]
    },
        { 
        // number105
        question: "The structure of norepinephrine-serotonin reuptake inhibitor (NSRI) (see image) Which of the following structure modifications can transform this drug into a selective norepinephrine re-uptake inhibitor (SNRI) analogue ? " ,
        image: "images/5.PNG",
        answers: [
            { text: "quaternization of the side chain amino group" ,correct:false},
            { text: "transformation of the side chain amino group into a primary amine" ,correct:false},
            { text: "replacement of the side chain N.N-dimethylamino group with a hydroxyl group" ,correct:false},
            { text: "demethylation of the side chain tertiary amino group to yield a secondary amino group" ,correct:true},
        ]
    },
        { 
        // number105
        question: "Thalidomide is a potent immunomodulatory drug used to treat leprosy Thalidomide exist in two conformation structures with different pharmacological and toxicological activates teratogenicity is believed to be caused on conformational structure (see image). Which of the following is the most appropriate term used to call the two conformations of the thalidomide ?" ,
        image: "images/6.PNG",
        answers: [
            { text: "Isomers" ,correct:false},
            { text: "Epimers" ,correct:false},
            { text: "Enatntimomers" ,correct:true},
            { text: "diasteriomers" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A structure of the glibenclamide (glyburide)(see image). Which of the following pharmacophore does Glibenclamide (glyburide) contain ?" ,
        image: "images/7.PNG",
        answers: [
            { text: "Benzenesulfate urea" ,correct:false},
            { text: "Benzenesulfinyl urea" ,correct:false},
            { text: "Benzenesulfhydryl urea" ,correct:false},
            { text: "Benzenesulphonyl urea" ,correct:true},
        ]
    },
        { 
        // number105
        question: "A pharmacist adds 2 g of potassium chloride to 1L of D5W/1/2 normal saline. Atomic welghts (see table).Which of the following is the most likely osmolality of solution assuming the final volume as 1 L ?" ,
        image: "images/8.PNG",
        answers: [
            { text: "54 mosm/L" ,correct:true},
            { text: "300 mosm/L" ,correct:false},
            { text: "400 mosm/L" ,correct:false},
            { text: "460 mosm/L" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A budesonide inhaler delivers 200 puffs and each puff contains 100 micrograms of the drug. Which of the following is the amount (in milligrams) of total budesonide present in the inhaler ?" ,
        answers: [
            { text: "10 mg" ,correct:false},
            { text: "20 mg" ,correct:true},
            { text: "10000 mg" ,correct:false},
            { text: "20000 mg" ,correct:false},
        ]
    },
        { 
        // number105
        question: "A 5OO infusion bottle contains 11.72g of potassium chloride (KCI). The molecular weight of KCL 74.6 grams. Which of the following is the amount of KCL in milliequivalent (mEq). present in the bottle ?" ,
        answers: [
            { text: "0. 637 mEq" ,correct:false},
            { text: "6.37 mEq" ,correct:false},
            { text: "11.72 mEq" ,correct:false},
            { text: "157.1 mEq" ,correct:true},
        ]
    },
];
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number105
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
// ];

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer_btn");
const photo = document.getElementById("photo");
const nextButton = document.getElementById("next_btn");
const previousButton = document.getElementById("previous_btn");
const finishButton = document.getElementById("finish_btn");
const flagButton = document.getElementById("flag_btn");
const navigationButtons = document.getElementById("navigation_buttons");
const calculator = document.getElementById("helper-calculator");
const calculator_button = document.getElementById("calculator_button");
const timerElement = document.getElementById("timer");
const instructions = document.getElementById("instructions");
const sidebar = document.getElementById("sidebar");
const contact = document.getElementById("contact");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let bulletsContainer = document.querySelector(".bullets .spans");

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
usernameInput.setAttribute("pattern", "[A-Za-z]+"); // Ensure only letters
usernameInput.required = true;
usernameInput.classList.add("user-input");

// Create password input field
var passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Password");
passwordInput.setAttribute("id", "password");
passwordInput.required = true;
passwordInput.classList.add("user-input");

// Create submit button
var submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Login");
submitButton.classList.add("login-input");

// Append elements to form
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(submitButton);

// Append form to the document body
document.body.appendChild(loginForm);

document.getElementById("username").addEventListener("input", function() {
    const usernameError = document.getElementById("usernameError");
    if (!/^[A-Za-z]*$/.test(this.value)) {
        usernameError.textContent = "Username must contain only letters.";
    } else {
        usernameError.textContent = "";
    }
});

// login function
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
    login(enteredUsername, enteredPassword); // Call the login function with entered credentials
});

function login(usernameInput, passwordInput) {
    const validCredentials = {
        "m": "m",
        "haninmubarak": "hanin@2024",
        "alaatallal": "alaa@2024",
        "khansagasm": "khansa@2024",
        "youssefelanzy": "youssef@2024",
        "raghad": "raghad@2024",
        "ranakarim": "rana@2024",
        // "rahaf" : "rahaf@2024",
        "sharif" : "madkour@2024",
        // "AEC" : "aec@2024",
        "saqar" : "saqar@2024",
        "moussa" : "moussa@2024",
        "nader" : "nader@2024",
        "razan" : "razan@2024",
        // ends in 7/7
        "nada" : "kassem@2024"
        // ends in 21/7
    };

    if (validCredentials[usernameInput] === passwordInput) {
        alert(`Hello, ${usernameInput}! You can close the browser and reopen the website again to change the questions module. Best of luck!`);
        startQuiz(); // Call startQuiz if credentials are correct
    } else {
        alert("Please enter your username and password correctly.");
    }
};

//createBullets
function createBullets () {
    for (let i = 1; i < 106; i++) {
        let theBullet = document.createElement("span");
        theBullet.textContent = i;
        if (i+1 === currentQuestionIndex + 1) {
            theBullet.classList.add("on");
        }
        theBullet.addEventListener("click", () => handleBulletClick(i)); // Add event listener
        bulletsSpanContainer.appendChild(theBullet);
    }
};

//scroll the bullets
bulletsContainer.addEventListener("wheel", function(event) {
    let deltaY = event.deltaY;
    let scrollSpeed = 20; // Adjust this value to control scroll speed

    bulletsContainer.scrollTop += deltaY > 0 ? scrollSpeed : -scrollSpeed;

    // Prevent default scrolling behavior
    event.preventDefault();
});

// Create a function to handle bullet span click
function handleBulletClick(index) {
    currentQuestionIndex = index - 1; // Adjust index to match array index
    showQuestion();
    highlightSelectedAnswer();
};

//slice questions
// Shuffle the questions array to ensure randomness
function shuffle(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
}

// Select the first 10 questions after shuffling
const shuffledQuestions = shuffle(questions).slice(0, 105);


// startQuiz();
function startQuiz() {
    // Perform actions to start the quiz
    currentQuestionIndex = 0;
    sofa = 0;
    nextButton.innerHTML = "Next >";
    previousButton.innerHTML = "< Previous";
    showQuestion();
    startTimer();
    hideLoginForm();
    createBullets();
    sidebar.style.display ="flex";
    contact.style.display ="none";
}

//function to hide the login form after logging in
function hideLoginForm() {
    loginForm.classList.add("hidden");
    usernameInput.classList.add("hidden");
    passwordInput.classList.add("hidden");
    submitButton.classList.add("hidden");
    instructions.classList.add("hidden");
}

function startTimer() {
    let timeRemaining = quizDuration;

    timer = setInterval(function () {
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;

        timerElement.innerHTML = `Section Time Remaining: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

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
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
     // Check if the current question has an image
     if (currentQuestion.image) {
        // Create an image element
        const imageElement = document.createElement("img");
        imageElement.src = currentQuestion.image;
        imageElement.classList.add("question-image");
        questionElement.appendChild(imageElement);
    }
    //shuffle the answers
    // const shuffledAnswers = shuffle(currentQuestion.answers);

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
    nextButton.style.display = "block";
    navigationButtons.display = "flex";
    flagButton.style.display = "block";
    previousButton.style.display = "block";
    finishButton.style.display = "block";
    calculator_button.style.display = "block";  // or "flex" depending on the display style you want
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    };
}

document.addEventListener('mousedown', function(event) {
    // Check if the right mouse button is clicked (button 2) and prevent default context menu
    if (event.button === 2) {
        // Prevent the default context menu from appearing
        event.preventDefault();
        
        // Check if the clicked element is a button
        if (event.target.classList.contains('btn')) {
            // Add line-through style to the clicked button's text
            event.target.style.textDecoration = 'line-through';
        };
    };
});

let answers = JSON.parse(sessionStorage.getItem("answers")) || Array(questions.length).fill(null);

// select the answer button
function selectAnswer(e) {
    const selectedButton = e.target;
    const selectedIndex = Array.from(answersButton.children).indexOf(selectedButton);
    answers[currentQuestionIndex] = selectedIndex; // Save the selected answer index
    sessionStorage.setItem("answers", JSON.stringify(answers)); // Save answers to local storage
    updateSelectedAnswer(selectedButton); // Update UI to highlight selected answer
    showNavigationButtons(); // Show navigation buttons
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
    navigationButtons.style.display = "flex";
    flagButton.style.display = "block";
    previousButton.style.display = "block";
    finishButton.style.display = "block";
}

// Define a function to update UI to highlight selected answer
function updateSelectedAnswer(selectedButton) {
    button.disabled = "true";
    Array.from(answersButton.children).forEach(button => {
        button.classList.remove("selected");
        button.disabled = true;
    });
    selectedButton.classList.add("selected"); // Add selected class to the clicked button
}

function finishQuiz() {
    Score();
    currentQuestionIndex = shuffledQuestions.length;
}

function addEventListeners() {
    finishButton.addEventListener("click", finishQuiz);
    // flagButton.addEventListener("click",flagQuestion);
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < shuffledQuestions.length) {
            startNext();
        }else {
            // currentQuestionIndex = 0; // Reset currentQuestionIndex to 0 to start the quiz again
            startQuiz(); // Start the quiz again
        }
    });
    previousButton.addEventListener("click", previewPreviousQuestion);
}

addEventListeners();

// Define a function to move to the previous question
function previewPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        showNavigationButtons(); // Show navigation buttons
        highlightSelectedAnswer(); // Highlight previously selected answer
        nextButton.style.display = "block";
        navigationButtons.display = "flex";
        previousButton.style.display = "block";
    }
};

//start next question
function startNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
        highlightSelectedAnswer(); // Highlight previously selected answer
        showNavigationButtons(); // Show navigation buttons
    } else {
        Score();
    }
};

// Define a function to highlight previously selected answer
function highlightSelectedAnswer() {
    const selectedIndex = answers[currentQuestionIndex];
    if (selectedIndex !== null && selectedIndex !== undefined) {
        const selectedButton = answersButton.children[selectedIndex];
        updateSelectedAnswer(selectedButton);
        Array.from(answersButton.children).forEach( button => {
            button.disabled = "true";
        });
    }
};

// Function to show or hide navigation buttons based on current question index
function showNavigationButtons() {
    if (currentQuestionIndex === 0) {
        previousButton.style.display = "none"; // Hide previous button on first question
    } else {
        previousButton.style.display = "block"; // Show previous button on subsequent questions
    }
}

function updateSelectedAnswer(selectedButton) {
    Array.from(answersButton.children).forEach(button => {
        button.classList.remove("selected"); 
    });
    selectedButton.classList.add("selected");
    const bulletIndex = currentQuestionIndex;
    const bulletSpan = document.querySelector(`.bullets .spans span:nth-child(${bulletIndex + 1})`);
    bulletSpan.classList.add("answered");
}

function Score() {
    clearInterval(timer);
    resetState();
    questionElement.innerHTML = `Congratulations ! you scored ${sofa} out of ${shuffledQuestions.length}`;
    nextButton.innerHTML = "Try Again...";
    nextButton.style.display = "block";
    navigationButtons.style.display = "flex";
    previousButton.style.display = "none";
    flagButton.style.display = "none";
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

