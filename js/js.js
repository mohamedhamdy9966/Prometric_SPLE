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
        question: "Who's responsible for for accreditation of health care systems ?" ,
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
            { text: "career in cycle" ,correct:"false"},
            { text: "oxaloacetate" ,correct:"false"},
            { text: "Citric acid" ,correct:"true"},
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
            { text: "Lisinopril" ,correct:"false"},
            { text: "Ramipril" ,correct:"false"},
            { text: "Enalapril" ,correct:"true"},
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
        // image: `<img src="../images/123"></img>`,
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
        // image: `<img src="../images/123.png" alt="img"></img>`,
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
        // image: `<img src="../images/123.png" alt="img"></img>`,
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
        // image: `<img src="../images/123" alt="img"></img>`,
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
];
//         // { 
//         // number99
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number100
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number101
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number102
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number103
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number104
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
//         // { 
//         // number92
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number93
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number94
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number95
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number96
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number97
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number98
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number99
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number100
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number101
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number102
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number103
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number104
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
//         // { 
//         // number92
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number93
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number94
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number95
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number96
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number97
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number98
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number99
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number100
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number101
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number102
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number103
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number104
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
//         // { 
//         // number92
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number93
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number94
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number95
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number96
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number97
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number98
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number99
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number100
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number101
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number102
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number103
//     //     question: "" ,
//     //     answers: [
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:true},
//     //         { text: "" ,correct:false},
//     //         { text: "" ,correct:false},
//     //     ]
//     // },
//         // { 
//         // number104
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
usernameInput.classList.add("user-input");

// Create password input field
var passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Password");
passwordInput.setAttribute("id", "password");
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

// login function
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
    login(enteredUsername, enteredPassword); // Call the login function with entered credentials
});

// handling username & password login
function login(usernameInput, passwordInput) {
    if (usernameInput === "ahmedessam" && passwordInput === "essam@1993") {
        startQuiz(); // Call startQuiz if credentials are correct
    } 
    else if (usernameInput === "m" && passwordInput === "m") {
        alert("Hello , Ahmed ! you can close the browser and reopen the website again to change the questions module, Best Of Luck !");
        startQuiz(); // Call startQuiz if credentials are correct
    } 
    // else if (usernameInput === "hawary" && passwordInput === "hawary@2024") {
    //     alert("Hello , Hawary ! you can close the browser and reopen the website again to change the questions module, To Start The exam Press Ok. Best Of Luck !");
    //     startQuiz(); // Call startQuiz if credentials are correct
    // }
    else if (usernameInput === "haninmubarak" && passwordInput === "hanin@2024") {
        alert("Hello , Hanin ! you can close the browser and reopen the website again to change the questions module, To Start The exam Press Ok. Best Of Luck !");
        startQuiz(); // Call startQuiz if credentials are correct
    }
    else if (usernameInput === "alaa_tallal" && passwordInput === "alaa@2024") {
        alert("Hello , Alaa ! you can close the browser and reopen the website again to change the questions module, To Start The exam Press Ok. Best Of Luck !");
        startQuiz(); // Call startQuiz if credentials are correct
    }
    else if (usernameInput === "khansa_gasm" && passwordInput === "khansa@2024") {
        alert("Hello , Khansa ! you can close the browser and reopen the website again to change the questions module, To Start The exam Press Ok. Best Of Luck !");
        startQuiz(); // Call startQuiz if credentials are correct
    }
    else if (usernameInput === "youssef_elanzy" && passwordInput === "youssef@2024") {
        alert("Hello , Youssef ! you can close the browser and reopen the website again to change the questions module, To Start The exam Press Ok. Best Of Luck !");
        startQuiz(); // Call startQuiz if credentials are correct
    }
    else if (usernameInput === "hossam_ali" && passwordInput === "hossam@2024") {
        alert("Hello , Hossam ! you can close the browser and reopen the website again to change the questions module, To Start The exam Press Ok. Best Of Luck !");
        startQuiz(); // Call startQuiz if credentials are correct
    }
    else if (usernameInput === "raghad" && passwordInput === "raghad@2024") {
        alert("Hello , Raghad ! you can close the browser and reopen the website again to change the questions module, To Start The exam Press Ok. Best Of Luck !");
        startQuiz(); // Call startQuiz if credentials are correct
    }
    else {
        alert("Please enter your username and password right");
    }
}

//getting questions
function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            let questionsCount = questionsObject.length;
            createBullets(questionsCount);
        }
    };
    myRequest.open("GET","questions.json", true);
    myRequest.send();
};

//createBullets
function createBullets (num) {
    countSpan.innerHTML = num;
    for (let i = 0; i < num; i++) {
        let theBullet = document.createElement("span");
        if (i === 0) {
            theBullet.className = "on";
            theBullet.innerHTML = i;
        }
        bulletsSpanContainer.appendChild(theBullet);
    }
}

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
}

//function to hide the login form after logging in
function hideLoginForm() {
    loginForm.classList.add("hidden");
    usernameInput.classList.add("hidden");
    passwordInput.classList.add("hidden");
    submitButton.classList.add("hidden");
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
    // photoElement.innerHTML = ``

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
    flagButton.style.display = "block";
    // previousButton.style.display = "block";
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
        }
    }
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
}

function Score() {
    clearInterval(timer);
    resetState();
    questionElement.innerHTML = `Congratulations ! you scored ${sofa} out of ${shuffledQuestions.length}`;
    nextButton.innerHTML = "Try Again...";
    nextButton.style.display = "block";
    previousButton.style.display = "none";
    flagButton.style.display = "block";
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

