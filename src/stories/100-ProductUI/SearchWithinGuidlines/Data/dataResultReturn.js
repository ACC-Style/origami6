// Retrieve image
// https://www.stage.acc.org/wapi/GuidelinesHelper/retrieve?relativePath=07351097%2FS0735109710X00110%2FS0735109710007151%2Fgr28.jpg
// Autosuggest
// https://www.stage.acc.org/wapi/GuidelinesHelper/AutoSuggest?term=heart
// Search (TAB: Recommendations, Section, Tables & Figures)
// https://www.stage.acc.org/wapi/GuidelinesHelper/SearchResult?filters=section&filters=table&filters=image&filters=recommendations&page=1&rows=10&term=heart
// Retrieve (Detail of each search item and need section id as input)
// https://www.stage.acc.org/wapi/GuidelinesHelper/retrieve?eid=1-s2.0-S0735109717413064&sectionid=hl0007917
// Related Recommendations
// https://www.stage.acc.org/wapi/GuidelinesHelper/Relatedrecommendations?page=1&rows=100&term=7.9.1.1+Congenital+Long+QT+Syndrome

export const results = [
	{
		eid: "1-s2.0-S0735109718368463",
		itemtitle: "Coronary Anomalies",
		itemtitleFormatted: "<span>Coronary Anomalies</span>",
		summary:
			"Coronary abnormalities are among the most common congenital cardiovascular anomalies, surpassing in prevalence nearly all others combined. Coronary anomalies include anomalous aortic origin of a coronary artery (AAOCA), coronary fistula, and myoca...",
		contenttype: ["PG", "JL"],
		pubdate: "1554163200000",
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"2018 AHA/ACC Guideline for the Management of Adults With Congenital Heart Disease",
			"4 Specific Lesions",
			"4.4 Complex Lesions",
			"4.4.7 Coronary Anomalies",
		],
		doi: "10.1016/j.jacc.2018.08.1029",
		subtype: "section",
		sectionid: ["hl0009869"],
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>2018 AHA/ACC Guideline for the Management of Adults With Congenital Heart Disease</span>",
			"<span>4 Specific Lesions</span>",
			"<span>4.4 Complex Lesions</span>",
			"<span>4.4.7 Coronary Anomalies</span>",
		],
		refimage: null,
		caption: null,
		loe: null,
		cor: null,
		abs: [],
		comments: [],
		pointofcare: null,
		conditions: null,
		refinfo: null,
		vol: "73",
		issue: "12",
		pages: "e81-e192",
		coverdatetext: "02 April 2019",
		coverdatestart: "2019-04-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2019 Apr 2;73(12):e81-e192",
		hub: "/Guidelines/Hubs/Congenital-Heart-Disease",
		jacclink: "http://www.onlinejacc.org/content/73/12/e81",
		pdflink: "http://www.onlinejacc.org/content/73/12/e81.full.pdf",
		gltitle: "Adults with Congenital Heart Disease",
		url: "",
	},
	{
		eid: "71-s2.0-VA-SCD-7.9.1.1-1",
		itemtitle: "7.9.1.1 Congenital Long QT Syndrome",
		itemtitleFormatted: "<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		summary:
			"In patients with long QT syndrome with a resting QTc greater than 470 ms, a beta blocker is recommended. Beta blockers reduce adverse cardiac events for long QT syndrome type 1 (Figure 10) (>95%), long QT syndrome type 2 (Figure 11) (>75%), and fe...",
		contenttype: ["ACCG"],
		pubdate: null,
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"7 Ongoing Management of VA and SCD Risk Related to Specific Disease States",
			"7.9 Cardiac Channelopathies",
			"7.9.1 Specific Cardiac Channelopathy Syndromes",
			"7.9.1.1 Congenital Long QT Syndrome",
		],
		doi: "10.1016/j.jacc.2017.10.054",
		subtype: "publication",
		sectionid: null,
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>7 Ongoing Management of VA and SCD Risk Related to Specific Disease States</span>",
			"<span>7.9 Cardiac Channelopathies</span>",
			"<span>7.9.1 Specific Cardiac Channelopathy Syndromes</span>",
			"<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		],
		refimage: null,
		caption: null,
		loe: "B-NR",
		cor: "1",
		abs: [
			"In patients with long QT syndrome with a resting QTc greater than 470 ms, a beta blocker is recommended.",
		],
		comments: [
			"Beta blockers reduce adverse cardiac events for long QT syndrome type 1 (Figure 10) (&gt;95%), long QT syndrome type 2 (Figure 11) (&gt;75%), and females with long QT syndrome type 3 (Figure 12) by &gt;60% (S7.9.1.1-1-S7.9.1.1-5). There are limited data regarding efficacy of beta blockers in males with long QT syndrome type 3 (S7.9.1.1-3,S7.9.1.1-35,S7.9.1.1-36) but, in selected patients, beta blockers can be protective against SCA (S7.9.1.1-36,S7.9.1.1-37). Several observational studies have reported effectiveness for risk reduction in long QT syndrome with propranolol, atenolol, and nadolol with appropriate dosing (S7.9.1.1-26,S7.9.1.1-28,S7.9.1.1-38-S7.9.1.1-40), while metoprolol appears less effective (S7.9.1.1-41). RCTs to assess comparative efficacy of specific beta blockers are unavailable, although many centers favor the use of nadolol. For long QT syndrome type 1, 1 study reported atenolol reduced risk of VA while nadolol was not associated with risk reduction (S7.9.1.1-2). For long QT syndrome type 2, nadolol was reported to show superior efficacy (S7.9.1.1-1,S7.9.1.1-2). Patients receiving a beta blocker should undergo ongoing monitoring to assess changes in QTc over time, and adequacy of beta blockade with exertion (S7.9.1.1-26,S7.9.1.1-28).",
		],
		pointofcare: ["Treatment"],
		conditions: ["Ventricular Arrythmias-Sudden Cardiac Death"],
		refinfo: [
			'<reference id="bib766" doi="10.1016/j.jacc.2010.07.038">Abu-Zeitone A., Peterson D.R., Polonsky B., et al. (2014) Efficacy of different beta-blockers in the treatment of long QT syndrome. J Am Coll Cardiol 64:1352-1358.</reference>',
			'<reference id="bib767" doi="10.1161/CIRCGENETICS.111.961102">Goldenberg I., Bradley J., Moss A., et al. (2010) Beta-blocker efficacy in high-risk patients with the congenital long-QT syndrome types 1 and 2: implications for patient management. J Cardiovasc Electrophysiol 21:893-901.</reference>',
			'<reference id="bib768" doi="10.1016/j.jacc.2011.08.064">Moss A.J., Zareba W., Hall W.J., et al. (2000) Effectiveness and limitations of beta-blocker therapy in congenital long-QT syndrome. Circulation 101:616-623.</reference>',
			'<reference id="bib769" doi="10.1161/01.CIR.0000020013.73106.D8">Sauer A.J., Moss A.J., McNitt S., et al. (2007) Long QT syndrome in adults. J Am Coll Cardiol 49:329-337.</reference>',
			'<reference id="bib770" doi="10.1161/CIRCULATIONAHA.116.021823">Vincent G.M., Schwartz P.J., Denjoy I., et al. (2009) High efficacy of beta-blockers in long-QT syndrome type 1: contribution of noncompliance and QT-prolonging drugs to the occurrence of beta-blocker treatment "failures" Circulation 119:215-221.</reference>',
		],
		vol: "72",
		issue: "14",
		pages: "e91",
		coverdatetext: null,
		coverdatestart: "2018-10-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2018 Oct 2;72(14):e91",
		hub: "/Guidelines/Hubs/Ventricular-Arrhythmias",
		jacclink: "http://www.onlinejacc.org/content/72/14/e91",
		pdflink: "http://www.onlinejacc.org/content/72/14/e91.full.pdf",
		gltitle:
			"Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
		url: "",
	},
	{
		eid: "71-s2.0-VA-SCD-7.9.1.1-3",
		itemtitle: "7.9.1.1 Congenital Long QT Syndrome",
		itemtitleFormatted: "<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		summary:
			"In patients with long QT syndrome and recurrent appropriate ICD shocks despite maximum tolerated doses of a beta blocker, intensification of medical therapy with additional medications (guided by consideration of according to the particular long Q...",
		contenttype: ["ACCG"],
		pubdate: null,
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"7 Ongoing Management of VA and SCD Risk Related to Specific Disease States",
			"7.9 Cardiac Channelopathies",
			"7.9.1 Specific Cardiac Channelopathy Syndromes",
			"7.9.1.1 Congenital Long QT Syndrome",
		],
		doi: "10.1016/j.jacc.2017.10.054",
		subtype: "publication",
		sectionid: null,
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>7 Ongoing Management of VA and SCD Risk Related to Specific Disease States</span>",
			"<span>7.9 Cardiac Channelopathies</span>",
			"<span>7.9.1 Specific Cardiac Channelopathy Syndromes</span>",
			"<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		],
		refimage: null,
		caption: null,
		loe: "B-NR",
		cor: "1",
		abs: [
			"In patients with long QT syndrome and recurrent appropriate ICD shocks despite maximum tolerated doses of a beta blocker, intensification of medical therapy with additional medications (guided by consideration of according to the particular long QT syndrome type) or left cardiac sympathetic denervation, is recommended.",
		],
		comments: [
			"Mexiletine is an additional medication that can be used in patients with long QT syndrome and recurrent ICD shocks. Left cardiac sympathetic denervation is associated with a reduction the number of appropriate ICD shocks and VA burden (S7.9.1.1-13-S7.9.1.1-16). Reduction of the QTc to &lt;500 ms after left cardiac sympathetic denervation has been correlated with reduced risk of recurrent ICD shocks and frequency of symptoms (S7.9.1.1-16,S7.9.1.1-52); however, SCD or SCA is reported in 3% to 10% of patients (S7.9.1.1-15,S7.9.1.1-16,S7.9.1.1-48,S7.9.1.1-50). Although arrhythmia burden is often reduced, up to 27% of high-risk patients experience at least 1 recurrence (S7.9.1.1-13,S7.9.1.1-14,S7.9.1.1-48). Patient outcomes are improved if the left cardiac sympathetic denervation is performed in centers with surgical expertise in this procedure. Use of additional medications is guided by long QT syndrome type. In long QT syndrome type 3, ranolazine, mexiletine, and flecainide shorten the QTc and have been used to reduce recurrent arrhythmias (S7.9.1.1-6,S7.9.1.1-7,S7.9.1.1-10).",
		],
		pointofcare: ["Treatment"],
		conditions: ["Ventricular Arrythmias-Sudden Cardiac Death"],
		refinfo: null,
		vol: "72",
		issue: "14",
		pages: "e91",
		coverdatetext: null,
		coverdatestart: "2018-10-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2018 Oct 2;72(14):e91",
		hub: "/Guidelines/Hubs/Ventricular-Arrhythmias",
		jacclink: "http://www.onlinejacc.org/content/72/14/e91",
		pdflink: "http://www.onlinejacc.org/content/72/14/e91.full.pdf",
		gltitle:
			"Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
		url: "",
	},
	{
		eid: "71-s2.0-VA-SCD-7.9.1.1-4",
		itemtitle: "7.9.1.1 Congenital Long QT Syndrome",
		itemtitleFormatted: "<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		summary:
			"In patients with clinically diagnosed long QT syndrome, genetic counseling and genetic testing are recommended. Genetic testing for disease-causing mutations in long QT syndrome offers important diagnostic, prognostic, and therapeutic information ...",
		contenttype: ["ACCG"],
		pubdate: null,
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"7 Ongoing Management of VA and SCD Risk Related to Specific Disease States",
			"7.9 Cardiac Channelopathies",
			"7.9.1 Specific Cardiac Channelopathy Syndromes",
			"7.9.1.1 Congenital Long QT Syndrome",
		],
		doi: "10.1016/j.jacc.2017.10.054",
		subtype: "publication",
		sectionid: null,
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>7 Ongoing Management of VA and SCD Risk Related to Specific Disease States</span>",
			"<span>7.9 Cardiac Channelopathies</span>",
			"<span>7.9.1 Specific Cardiac Channelopathy Syndromes</span>",
			"<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		],
		refimage: null,
		caption: null,
		loe: "B-NR",
		cor: "1",
		abs: [
			"In patients with clinically diagnosed long QT syndrome, genetic counseling and genetic testing are recommended.",
		],
		comments: [
			"Genetic testing for disease-causing mutations in long QT syndrome offers important diagnostic, prognostic, and therapeutic information in addition to the clinical evaluation, and a positive test can facilitate establishing risk for family members. The yield of genetic testing in long QT syndrome phenotype-positive patients is 50% to 86%, with the higher range present in patients with marked QT prolongation or positive family history of SCD (S7.9.1.1-17,S7.9.1.1-21,S7.9.1.1-53). A negative genetic test does not exclude the diagnosis of long QT syndrome, which relies on the clinical evaluation. In asymptomatic patients with otherwise unexplained prolonged QTc ≥480 ms on serial ECGs, genetic testing may help confirm the diagnosis and supplement prognostic information in addition to clinical symptoms and QTc duration (S7.9.1.1-5,S7.9.1.1-18-S7.9.1.1-20,S7.9.1.1-30,S7.9.1.1-35,S7.9.1.1-54-S7.9.1.1-56).",
		],
		pointofcare: ["Diagnosis"],
		conditions: ["Ventricular Arrythmias-Sudden Cardiac Death"],
		refinfo: [
			'<reference id="bib782" doi="10.1161/hc1102.105288">Bai R., Napolitano C., Bloise R., et al. (2009) Yield of genetic screening in inherited cardiac channelopathies: how to prioritize access to genetic testing. Circ Arrhythm Electrophysiol 2:6-15.</reference>',
			'<reference id="bib783" doi="10.1001/jama.296.10.1249">Costa J., Lopes C.M., Barsheshet A., et al. (2012) Combined assessment of sex- and mutation-specific information for risk stratification in type 1 long QT syndrome. Heart Rhythm 9:892-898.</reference>',
			'<reference id="bib784" doi="10.1001/jama.292.11.1341">Kim J.A., Lopes C.M., Moss A.J., et al. (2010) Trigger-specific risk factors and response to therapy in long QT syndrome type 2. Heart Rhythm 7:1797-1805.</reference>',
			'<reference id="bib785" doi="10.1056/NEJMoa022147">Migdalovich D., Moss A.J., Lopes C.M., et al. (2011) Mutation and gender-specific risk in type 2 long QT syndrome: implications for risk stratification for life-threatening cardiac events in patients with long QT syndrome. Heart Rhythm 8:1537-1543.</reference>',
			'<reference id="bib786" doi="10.1016/j.jacc.2009.05.029">Tester D.J., Will M.L., Haglund C.M., et al. (2006) Effect of clinical phenotype on yield of long QT syndrome genetic testing. J Am Coll Cardiol 47:764-768.</reference>',
		],
		vol: "72",
		issue: "14",
		pages: "e91",
		coverdatetext: null,
		coverdatestart: "2018-10-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2018 Oct 2;72(14):e91",
		hub: "/Guidelines/Hubs/Ventricular-Arrhythmias",
		jacclink: "http://www.onlinejacc.org/content/72/14/e91",
		pdflink: "http://www.onlinejacc.org/content/72/14/e91.full.pdf",
		gltitle:
			"Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
		url: "",
	},
	{
		eid: "71-s2.0-VA-SCD-7.9.1.1-2",
		itemtitle: "7.9.1.1 Congenital Long QT Syndrome",
		itemtitleFormatted: "<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		summary:
			"In high-risk patients with symptomatic long QT syndrome in whom a beta blocker is ineffective or not tolerated, intensification of therapy with additional medications (guided by consideration of the particular long QT syndrome type), left cardiac ...",
		contenttype: ["ACCG"],
		pubdate: null,
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"7 Ongoing Management of VA and SCD Risk Related to Specific Disease States",
			"7.9 Cardiac Channelopathies",
			"7.9.1 Specific Cardiac Channelopathy Syndromes",
			"7.9.1.1 Congenital Long QT Syndrome",
		],
		doi: "10.1016/j.jacc.2017.10.054",
		subtype: "publication",
		sectionid: null,
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>7 Ongoing Management of VA and SCD Risk Related to Specific Disease States</span>",
			"<span>7.9 Cardiac Channelopathies</span>",
			"<span>7.9.1 Specific Cardiac Channelopathy Syndromes</span>",
			"<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		],
		refimage: null,
		caption: null,
		loe: "B-NR",
		cor: "1",
		abs: [
			"In high-risk patients with symptomatic long QT syndrome in whom a beta blocker is ineffective or not tolerated, intensification of therapy with additional medications (guided by consideration of the particular long QT syndrome type), left cardiac sympathetic denervation, and/or an ICD is recommended.",
		],
		comments: [
			"High-risk patients with long QT syndrome include those with QTc &gt;500 ms, genotypes long QT syndrome type 2 and long QT syndrome type 3, females with genotype long QT syndrome type 2, &lt;40 years of age, onset of symptoms at &lt;10 years of age, and patients with prior cardiac arrest or recurrent syncope (S7.9.1.1-3,S7.9.1.1-8,S7.9.1.1-11,S7.9.1.1-30,S7.9.1.1-38). Women with long QT syndrome type 2 are at a higher risk of postpartum cardiac arrest/SCD (S7.9.1.1-42,S7.9.1.1-43) and should receive prepregnancy counseling. Patients with long QT syndrome and recurrent syncope while receiving a beta blocker have an increased risk of SCA or appropriate ICD shocks (S7.9.1.1-9) and escalation of therapy is warranted to prevent SCD. Earlier studies reported benefit of antibradycardia pacing, with recurrent syncope or cardiac arrest reported in 7% to 24% of patients (S7.9.1.1-44-S7.9.1.1-47). In high-risk patients, observational studies support effectiveness of the ICD in preventing SCD, with consideration of left cardiac sympathetic denervation to reduce the frequency of ICD shocks (S7.9.1.1-16,S7.9.1.1-48,S7.9.1.1-49). Left cardiac sympathetic denervation can reduce VA burden, but up to 27% of high-risk patients experience at least 1 recurrence (S7.9.1.1-16,S7.9.1.1-48,S7.9.1.1-50). Left cardiac sympathetic denervation may be more effective in patients with long QT syndrome type 1 and long QT syndrome type 3 (S7.9.1.1-16). Complications related to left cardiac sympathetic denervation occur in 8% to 20% of patients (S7.9.1.1-48,S7.9.1.1-51). Syncope in patients with long QT syndrome may occur due to vasovagal syncope, noncompliance with medications, or proarrhythmia from concurrent medications (S7.9.1.1-5). Clinical evaluation that incorporates consideration of genotype, QTc interval, medication compliance, and shared decision-making regarding the need to change or escalate therapy is important. Use of additional medications is guided by long QT syndrome type. In long QT syndrome type 3 ranolazine, mexiletine, and flecainide shorten the QTc and have been used to reduce recurrent arrhythmias (S7.9.1.1-6,S7.9.1.1-7,S7.9.1.1-10).",
		],
		pointofcare: ["Treatment"],
		conditions: ["Ventricular Arrythmias-Sudden Cardiac Death"],
		refinfo: null,
		vol: "72",
		issue: "14",
		pages: "e91",
		coverdatetext: null,
		coverdatestart: "2018-10-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2018 Oct 2;72(14):e91",
		hub: "/Guidelines/Hubs/Ventricular-Arrhythmias",
		jacclink: "http://www.onlinejacc.org/content/72/14/e91",
		pdflink: "http://www.onlinejacc.org/content/72/14/e91.full.pdf",
		gltitle:
			"Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
		url: "",
	},
	{
		eid: "71-s2.0-VA-SCD-7.9.1.1-5",
		itemtitle: "7.9.1.1 Congenital Long QT Syndrome",
		itemtitleFormatted: "<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		summary:
			"In patients with suspected long QT syndrome, ambulatory electrocardiographic monitoring, recording the ECG lying and immediately on standing, and/or exercise treadmill testing can be useful for establishing a diagnosis and monitoring the response ...",
		contenttype: ["ACCG"],
		pubdate: null,
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"7 Ongoing Management of VA and SCD Risk Related to Specific Disease States",
			"7.9 Cardiac Channelopathies",
			"7.9.1 Specific Cardiac Channelopathy Syndromes",
			"7.9.1.1 Congenital Long QT Syndrome",
		],
		doi: "10.1016/j.jacc.2017.10.054",
		subtype: "publication",
		sectionid: null,
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>7 Ongoing Management of VA and SCD Risk Related to Specific Disease States</span>",
			"<span>7.9 Cardiac Channelopathies</span>",
			"<span>7.9.1 Specific Cardiac Channelopathy Syndromes</span>",
			"<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		],
		refimage: null,
		caption: null,
		loe: "B-NR",
		cor: "2a",
		abs: [
			"In patients with suspected long QT syndrome, ambulatory electrocardiographic monitoring, recording the ECG lying and immediately on standing, and/or exercise treadmill testing can be useful for establishing a diagnosis and monitoring the response to therapy.",
		],
		comments: [
			"In a prospective, observational study of patients with suspected long QT syndrome, patients with a history of syncope or cardiac arrest and either an affected first-degree relative or a borderline or prolonged QTc interval underwent exercise treadmill testing and bicycle exercise, with ECGs recorded before, during, and after exercise, as well as in different positions (S7.9.1.1-27). long QT syndrome was confirmed by genetic testing in all affected individuals. Among patients with borderline-to-normal resting QTc intervals, prolongation of the 4-minute recovery QTc ≥445 ms had high sensitivity for correctly identifying patients with long QT syndrome (S7.9.1.1-27). A study in younger patients demonstrated QTc prolongation &gt;460 ms at 7 minutes of recovery predicted long QT syndrome type 1 or long QT syndrome type 2 patients versus controls (S7.9.1.1-23). In a study using burst bicycle exercise, patients with latent long QT syndrome had a significantly greater increase in QTc with exercise than either controls or those with QTc prolongation at baseline (S7.9.1.1-24). These findings can be useful in establishing whether long QT syndrome is present. Monitoring adequacy of beta-blocker therapy using exercise testing can be beneficial, particularly in school-aged patients (S7.9.1.1-26,S7.9.1.1-28). Beta-blocker therapy may be associated with a decrease in supine and peak exercise QTc, with the exception of long QT syndrome type 1 patients with C-loop mutations (S7.9.1.1-25).",
		],
		pointofcare: ["Diagnosis", "Follow-up"],
		conditions: ["Ventricular Arrythmias-Sudden Cardiac Death"],
		refinfo: [
			'<reference id="bib787" doi="">Adler A., van der Werf C., Postema P.G., et al. (2012) The phenomenon of "QT stunning": The abnormal QT prolongation provoked by standing persists even as the heart rate returns to normal in patients with long QT syndrome. Heart Rhythm 9:901-908.</reference>',
			'<reference id="bib788" doi="">Aziz P.F., Wieand T.S., Ganley J., et al. (2011) Genotype- and mutation site-specific QT adaptation during exercise, recovery, and postural changes in children with long-QT syndrome. Circ Arrhythm Electrophysiol 4:867-873.</reference>',
			'<reference id="bib789" doi="10.1016/j.jacc.2011.03.038">Chattha I.S., Sy R.W., Yee R., et al. (2010) Utility of the recovery electrocardiogram after exercise: a novel indicator for the diagnosis and genotyping of long QT syndrome? Heart Rhythm 7:906-911.</reference>',
			'<reference id="bib790" doi="10.1016/j.jacc.2014.10.043">Laksman Z.W., Hamilton R.M., Chockalingam P., et al. (2013) Mutation location effect on severity of phenotype during exercise testing in type 1 long-QT syndrome: impact of transmembrane and C-loop location. J Cardiovasc Electrophysiol 24:1015-1020.</reference>',
			'<reference id="bib791" doi="10.1016/j.jacc.2013.09.078">Moltedo J.M., Kim J.J., Friedman R.A., et al. (2011) Use of a cardioselective beta-blocker for pediatric patients with prolonged QT syndrome. Pediatr Cardiol 32:63-66.</reference>',
			'<reference id="bib792" doi="10.1093/europace/euv301">Sy R.W., van der Werf C., Chattha I.S., et al. (2011) Derivation and validation of a simple exercise-based algorithm for prediction of genetic testing in relatives of LQTS probands. Circulation 124:2187-2194.</reference>',
			'<reference id="bib793" doi="10.1016/j.jacc.2007.05.042">Villain E., Denjoy I., Lupoglazoff J.M., et al. (2004) Low incidence of cardiac events with beta-blocking therapy in children with long QT syndrome. Eur Heart J 25:1405-1411.</reference>',
			'<reference id="bib794" doi="10.1016/j.hrthm.2010.08.023">Viskin S., Postema P.G., Bhuiyan Z.A., et al. (2010) The response of the QT interval to the brief tachycardia provoked by standing: a bedside test for diagnosing long QT syndrome. J Am Coll Cardiol 55:1955-1961.</reference>',
		],
		vol: "72",
		issue: "14",
		pages: "e91",
		coverdatetext: null,
		coverdatestart: "2018-10-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2018 Oct 2;72(14):e91",
		hub: "/Guidelines/Hubs/Ventricular-Arrhythmias",
		jacclink: "http://www.onlinejacc.org/content/72/14/e91",
		pdflink: "http://www.onlinejacc.org/content/72/14/e91.full.pdf",
		gltitle:
			"Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
		url: "",
	},
	{
		eid: "71-s2.0-VA-SCD-7.9.1.1-6",
		itemtitle: "7.9.1.1 Congenital Long QT Syndrome",
		itemtitleFormatted: "<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		summary:
			"In asymptomatic patients with long QT syndrome and a resting QTc less than 470 ms, chronic therapy with a beta blocker is reasonable. Approximately 10% to 36% of genotype-positive patients with long QT syndrome have QTc intervals ≤440 ms, most com...",
		contenttype: ["ACCG"],
		pubdate: null,
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"7 Ongoing Management of VA and SCD Risk Related to Specific Disease States",
			"7.9 Cardiac Channelopathies",
			"7.9.1 Specific Cardiac Channelopathy Syndromes",
			"7.9.1.1 Congenital Long QT Syndrome",
		],
		doi: "10.1016/j.jacc.2017.10.054",
		subtype: "publication",
		sectionid: null,
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>7 Ongoing Management of VA and SCD Risk Related to Specific Disease States</span>",
			"<span>7.9 Cardiac Channelopathies</span>",
			"<span>7.9.1 Specific Cardiac Channelopathy Syndromes</span>",
			"<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		],
		refimage: null,
		caption: null,
		loe: "B-NR",
		cor: "2a",
		abs: [
			"In asymptomatic patients with long QT syndrome and a resting QTc less than 470 ms, chronic therapy with a beta blocker is reasonable.",
		],
		comments: [
			"Approximately 10% to 36% of genotype-positive patients with long QT syndrome have QTc intervals ≤440 ms, most commonly patients with long QT syndrome type 1 (S7.9.1.1-31,S7.9.1.1-35). Patients with long QT syndrome and normal QTc have a lower risk of VA and SCD compared to those with prolonged QTc (S7.9.1.1-35), but still have an increased risk of SCA or SCD compared with genotype-negative, age- and sex-matched general patients (S7.9.1.1-31). Beta blockers reduce the risk of adverse cardiac events substantially (S7.9.1.1-1-S7.9.1.1-5,S7.9.1.1-30,S7.9.1.1-36,S7.9.1.1-38,S7.9.1.1-41,S7.9.1.1-57). During the periods of highest risk in the first 3 decades of life (S7.9.1.1-11,S7.9.1.1-18), treatment with a beta blocker may reduce risk of SCA (S7.9.1.1-26,S7.9.1.1-28,S7.9.1.1-36,S7.9.1.1-38). Changes in QTc occur over time, particularly during puberty and during and after pregnancy, indicating the need for assessment of QTc on ECG annually or with medication changes, and assessing medication efficacy with exercise testing as feasible. Asymptomatic adult (male) long QT syndrome patients with normal QTc intervals may choose to decline beta-blocker therapy (S7.9.1.1-11,S7.9.1.1-34).",
		],
		pointofcare: ["Treatment"],
		conditions: ["Ventricular Arrythmias-Sudden Cardiac Death"],
		refinfo: null,
		vol: "72",
		issue: "14",
		pages: "e91",
		coverdatetext: null,
		coverdatestart: "2018-10-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2018 Oct 2;72(14):e91",
		hub: "/Guidelines/Hubs/Ventricular-Arrhythmias",
		jacclink: "http://www.onlinejacc.org/content/72/14/e91",
		pdflink: "http://www.onlinejacc.org/content/72/14/e91.full.pdf",
		gltitle:
			"Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
		url: "",
	},
	{
		eid: "71-s2.0-VA-SCD-7.9.1.1-7",
		itemtitle: "7.9.1.1 Congenital Long QT Syndrome",
		itemtitleFormatted: "<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		summary:
			"In asymptomatic patients with long QT syndrome and a resting QTc greater than 500 ms while receiving a beta blocker, intensification of therapy with medications (guided by consideration of the particular long QT syndrome type), left cardiac sympat...",
		contenttype: ["ACCG"],
		pubdate: null,
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"7 Ongoing Management of VA and SCD Risk Related to Specific Disease States",
			"7.9 Cardiac Channelopathies",
			"7.9.1 Specific Cardiac Channelopathy Syndromes",
			"7.9.1.1 Congenital Long QT Syndrome",
		],
		doi: "10.1016/j.jacc.2017.10.054",
		subtype: "publication",
		sectionid: null,
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>7 Ongoing Management of VA and SCD Risk Related to Specific Disease States</span>",
			"<span>7.9 Cardiac Channelopathies</span>",
			"<span>7.9.1 Specific Cardiac Channelopathy Syndromes</span>",
			"<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		],
		refimage: null,
		caption: null,
		loe: "B-NR",
		cor: "2b",
		abs: [
			"In asymptomatic patients with long QT syndrome and a resting QTc greater than 500 ms while receiving a beta blocker, intensification of therapy with medications (guided by consideration of the particular long QT syndrome type), left cardiac sympathetic denervation or an ICD may be considered.",
		],
		comments: [
			"The risk of adverse cardiac events from VA is influenced by the patient&#39;s resting QTc interval, age, sex, and long QT syndrome genotype/mutation. For asymptomatic males with long QT syndrome, the risk of cardiac events is highest in childhood (S7.9.1.1-2,S7.9.1.1-8,S7.9.1.1-11,S7.9.1.1-30), during a time when medication compliance is challenging. Young women with LQT2 and QTc &gt;500 ms are at increased risk of SCA (S7.9.1.1-2,S7.9.1.1-11,S7.9.1.1-18-S7.9.1.1-20,S7.9.1.1-30,S7.9.1.1-35) especially in the 9 months postpartum, and may be candidates for primary prevention ICD placement or use of a wearable cardioverter-defibrillator (S7.9.1.1-30).",
		],
		pointofcare: ["Treatment"],
		conditions: ["Ventricular Arrythmias-Sudden Cardiac Death"],
		refinfo: null,
		vol: "72",
		issue: "14",
		pages: "e91",
		coverdatetext: null,
		coverdatestart: "2018-10-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2018 Oct 2;72(14):e91",
		hub: "/Guidelines/Hubs/Ventricular-Arrhythmias",
		jacclink: "http://www.onlinejacc.org/content/72/14/e91",
		pdflink: "http://www.onlinejacc.org/content/72/14/e91.full.pdf",
		gltitle:
			"Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
		url: "",
	},
	{
		eid: "71-s2.0-VA-SCD-7.9.1.1-8",
		itemtitle: "7.9.1.1 Congenital Long QT Syndrome",
		itemtitleFormatted: "<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		summary:
			"In patients with long QT syndrome, QT-prolonging medications are potentially harmful. The risk of adverse events increases in patients with long QT syndrome with prolongation of the QTc >500 ms (S7.9.1.1-2,S7.9.1.1-12,S7.9.1.1-26,S7.9.1.1-35,S7.9....",
		contenttype: ["ACCG"],
		pubdate: null,
		sectiontitle: [
			"JACC (Journal of the American College of Cardiology)",
			"7 Ongoing Management of VA and SCD Risk Related to Specific Disease States",
			"7.9 Cardiac Channelopathies",
			"7.9.1 Specific Cardiac Channelopathy Syndromes",
			"7.9.1.1 Congenital Long QT Syndrome",
		],
		doi: "10.1016/j.jacc.2017.10.054",
		subtype: "publication",
		sectionid: null,
		sectiontitleformatted: [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>7 Ongoing Management of VA and SCD Risk Related to Specific Disease States</span>",
			"<span>7.9 Cardiac Channelopathies</span>",
			"<span>7.9.1 Specific Cardiac Channelopathy Syndromes</span>",
			"<span>7.9.1.1 Congenital Long QT Syndrome</span>",
		],
		refimage: null,
		caption: null,
		loe: "B-NR",
		cor: "3: Harm",
		abs: [
			"In patients with long QT syndrome, QT-prolonging medications are potentially harmful.",
		],
		comments: [
			"The risk of adverse events increases in patients with long QT syndrome with prolongation of the QTc &gt;500 ms (S7.9.1.1-2,S7.9.1.1-12,S7.9.1.1-26,S7.9.1.1-35,S7.9.1.1-41,S7.9.1.1-58). QT-prolonging medications (www.crediblemeds.org) (S7.9.1.1-59) should not be used in patients with long QT syndrome unless there is no suitable alternative; careful monitoring of the QTc during therapy is recommended, with consideration for discontinuing therapy with marked QTc prolongation. Concurrent use of stimulant or nonstimulant attention deficit/hyperactivity medications was associated with an increased risk of syncope/cardiac arrest in long QT syndrome, particularly males, in 1 study (S7.9.1.1-34), but it did not appear to be associated with increased risk in another retrospective study (S7.9.1.1-60). Episodes of torsades de pointes can be precipitated by exposure to a QT prolonging medication, or hypokalemia induced by diuretics or gastrointestinal illness. Attention to maintaining normal potassium and magnesium balance when medications or situations that promote depletion are encountered is an important component of management. Rare case reports exist of fever prolonging the QT interval in patients with long QT syndrome type 2; fever should be reduced with antipyretics (S7.9.1.1-61)(Table 10).",
		],
		pointofcare: ["Treatment"],
		conditions: ["Ventricular Arrythmias-Sudden Cardiac Death"],
		refinfo: null,
		vol: "72",
		issue: "14",
		pages: "e91",
		coverdatetext: null,
		coverdatestart: "2018-10-02",
		statustype: "S300",
		citation: "J Am Coll Cardiol. 2018 Oct 2;72(14):e91",
		hub: "/Guidelines/Hubs/Ventricular-Arrhythmias",
		jacclink: "http://www.onlinejacc.org/content/72/14/e91",
		pdflink: "http://www.onlinejacc.org/content/72/14/e91.full.pdf",
		gltitle:
			"Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death",
		url: "",
	},
];
export const resultSection = [
	{
		"eid": "1-s2.0-S0735109718368463",
		"itemtitle": "Coronary Anomalies",
		"itemtitleFormatted": "<span>Coronary Anomalies</span>",
		"summary": "Coronary abnormalities are among the most common congenital cardiovascular anomalies, surpassing in prevalence nearly all others combined. Coronary anomalies include anomalous aortic origin of a coronary artery (AAOCA), coronary fistula, and myoca...",
		"contenttype": [
			"PG",
			"JL"
		],
		"pubdate": "1554163200000",
		"sectiontitle": [
			"JACC (Journal of the American College of Cardiology)",
			"2018 AHA/ACC Guideline for the Management of Adults With Congenital Heart Disease",
			"4 Specific Lesions",
			"4.4 Complex Lesions",
			"4.4.7 Coronary Anomalies"
		],
		"doi": "10.1016/j.jacc.2018.08.1029",
		"subtype": "section",
		"sectionid": [
			"hl0009869"
		],
		"sectiontitleformatted": [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>2018 AHA/ACC Guideline for the Management of Adults With Congenital Heart Disease</span>",
			"<span>4 Specific Lesions</span>",
			"<span>4.4 Complex Lesions</span>",
			"<span>4.4.7 Coronary Anomalies</span>"
		],
		"refimage": null,
		"caption": null,
		"loe": null,
		"cor": null,
		"abs": [],
		"comments": [],
		"pointofcare": null,
		"conditions": null,
		"refinfo": null,
		"vol": "73",
		"issue": "12",
		"pages": "e81-e192",
		"coverdatetext": "02 April 2019",
		"coverdatestart": "2019-04-02",
		"statustype": "S300",
		"citation": "J Am Coll Cardiol. 2019 Apr 2;73(12):e81-e192",
		"hub": "/Guidelines/Hubs/Congenital-Heart-Disease",
		"jacclink": "http://www.onlinejacc.org/content/73/12/e81#sec7.4.7",
		"pdflink": "http://www.onlinejacc.org/content/73/12/e81.full.pdf",
		"gltitle": "Adults with Congenital Heart Disease",
		"url": ""
	}
];
export const resultImage = [
	{
		"eid": "1-s2.0-S073510971838985X-gr3",
		"itemtitle": "2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay",
		"itemtitleFormatted": "<span>2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay</span>",
		"summary": "Initial Evaluation of Suspected Atrioventricular Block AlgorithmColors correspond to Class of Recommendation in Table 2. *Targeted Advanced Imaging—Magnetic Resonance Imaging (MRI): Amyloidosis, myocarditis, hemochromatosis, sarcoidosis, CHD, sinu...",
		"contenttype": ["IM"],
		"pubdate": null,
		"sectiontitle": [
			"JACC (Journal of the American College of Cardiology)",
			"2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay",
			"Figure 3"
		],
		"doi": "10.1016/j.jacc.2018.10.044",
		"subtype": "publication",
		"sectionid": ["hl0000045"],
		"sectiontitleformatted": [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay</span>",
			"<span>Figure 3</span>"
		],
		"refimage": [
			"07351097/S07351097XXXXXXXX/S073510971838985X/gr3-t.gif",
			"07351097/S07351097XXXXXXXX/S073510971838985X/gr3.jpg",
		],
		"caption": [
			"Initial Evaluation of Suspected Atrioventricular Block AlgorithmColors correspond to Class of Recommendation in Table 2. *Targeted Advanced Imaging—Magnetic Resonance Imaging (MRI): Amyloidosis, myocarditis, hemochromatosis, sarcoidosis, CHD, sinus of Valsalva aneurysm, aortic dissection, arrhythmogenic right ventricular cardiomyopathy; fluoro-deoxy-glucose (fludeoxyglucose)-positron emission tomography (FDG PET): sarcoidosis; 99m technetium pyrophosphate (Tc PYP) or 99m technetium 3,3-diphosphono-1,2-propanodicarboxylic acid (TC-DPD): Transthyretin (TTR) amyloidosis; cardiac computed tomography (CT): CHD, sinus of Valsalva aneurysm, aortic dissection, arrhythmogenic right ventricular cardiomyopathy; echo longitudinal strain: Amyloidosis; transesophageal echocardiogram (TEE): Endocarditis, sinus of Valsalva aneurysm, aortic dissection, CHD.†Refer to Section 6.4., Figure 7. ‡The atrioventricular node is more likely the site of block with second-degree Mobitz type I atrioventricular block and a narrow QRS complex or severe first-degree atrioventricular block (>0.30 s) with a narrow QRS complex.AV indicates atrioventricular; ACHD, adult congenital heart disease; CHD, congenital heart disease; and CM, cardiomyopathy."
		],
		"loe": null,
		"cor": null,
		"abs": [],
		"comments": [],
		"pointofcare": null,
		"conditions": null,
		"refinfo": null,
		"vol": null,
		"issue": null,
		"pages": null,
		"coverdatetext": null,
		"coverdatestart": null,
		"statustype": "S100",
		"citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2018.10.044",
		"hub": "/Guidelines/Hubs/Bradycardia-and-Cardiac-Conduction-Delay",
		"jacclink": "http://www.onlinejacc.org/content/74/7/e51#fig3",
		"pdflink": "http://www.onlinejacc.org/content/74/7/e51.full.pdf",
		"gltitle": "Bradycardia and Cardiac Conduction Delay",
		"url": ""
	}
];

export const resultRecommendation = [

        {
            "eid": "71-s2.0-HCM2020-8.3-2",
            "itemtitle": "8.3. Management of Patients With HCM and Atrial Fibrillation",
            "itemtitleFormatted": "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>",
            "summary": "In patients with HCM and subclinical AF detected by internal or external cardiac device or monitor of >24 hours' duration for a given episode, anticoagulation is recommended with DOAC as first-line option and vitamin K antagonists as second-line o...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "8. Management of HCM",
                "8.3. Management of Patients With HCM and Atrial Fibrillation"
            ],
            "doi": "10.1016/j.jacc.2020.08.045",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>8. Management of HCM</span>",
                "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "C-LD",
            "cor": "1",
            "abs": [
                "In patients with HCM and subclinical AF detected by internal or external cardiac device or monitor of &gt;24 hours&#39; duration for a given episode, anticoagulation is recommended with DOAC as first-line option and vitamin K antagonists as second-line option, independent of CHA<sub>2</sub>DS<sub>2</sub>-VASc score."
            ],
            "comments": [
                "AF, commonly observed in patients with HCM, is associated with significant morbidity, impaired quality of life, and substantial stroke risk. Therapy includes prevention of thromboembolic events and controlling symptoms. Traditional stroke risk scoring systems used in the general population are not predictive in patients with HCM. Vitamin K antagonists are effective for stroke prevention, and recent studies support the use of DOACs as well. In view of the substantial stroke risk, periodic AF surveillance would allow for early intervention with anticoagulants in high-risk patients. Asymptomatic AF detected by cardiac devices or monitors also increases risk of stroke, so the decision to anticoagulate should take into considerations the duration of episodes as well as underlying risk factors. When a rhythm control strategy is needed, a number of antiarrhythmic drugs have been shown to be safe and effective, allowing for individualization according to underlying substrate and patient preference. Catheter ablation is also an important option, although the procedure is less effective than in the general population, and there is a more frequent need of repeat procedures and concomitant use of antiarrhythmic drugs. Surgical AF ablation, often with atrial appendage removal, is a potential rhythm management option in patients undergoing surgical myectomy. Surgical AF ablation or maze is not frequently pursued as an isolated surgical indication. Other supraventricular arrhythmias and atrial flutter are likely not increased in incidence in patients with HCM, and treatment is usually similar to populations without HCM.<br /> <br /> Similar to patients without HCM, subclinical or asymptomatic AF (SCAF) is detected by cardiac devices in patients with HCM as well. SCAF was reported in 16 of 30 patients with HCM (53%) after a median follow-up of 595 days (7). Device-detected AF was identified in 29 out of 114 patients with HCM (25%), resulting in an annualized incidence of 4%/year (6). In patients without HCM, SCAF has been associated with an increased risk of thromboembolism, albeit lower than risk described for clinical AF (8). Considerable debate exists regarding the AF duration threshold for initiating anticoagulation in SCAF because the duration used to define and quantify AF varied significantly between different studies. Nevertheless, the data increasingly show that longer duration episodes are associated with greatest risk. An ASSERT (Atrial Fibrillation Reduction Atrial Pacing Trial) substudy suggested only episodes &gt;24 hours were associated with increased risk (15). Also influencing risk are the total AF burden (11) and the presence of traditional risk factors, whereas very short episodes lasting a few seconds do not appear to increase risk (16, 17). When making the diagnosis of device-detected AF, review of stored intracardiac electrograms is essential to exclude artifact or false-positives."
            ],
            "pointofcare": [
                "Treatment"
            ],
            "conditions": [
                "Hypertrophic Cardiomyopathy",
                "Atrial Fibrillation"
            ],
            "refinfo": [
                "<reference id=\"bib1\" doi=\"\">Quality AfHRa. The CAHPS Ambulatory Care Improvement Guide: Practical Strategies for Improving Patient Experience. Available at: https://www.ahrq.gov/cahps/quality-improvement/improvement-guide/6-strategies-for-improving/communication/strategy6i-shared-decisionmaking.html. Accessed: October 7.</reference>",
                "<reference id=\"bib6\" doi=\"\">Guadagnoli E, Ward P. Patient participation in decision-making. Soc Sci Med. 1998;47:329-39.</reference>",
                "<reference id=\"bib7\" doi=\"\">Legare F, Adekpedjou R, Stacey D, et al. Interventions for increasing the use of shared decision making by healthcare professionals. Cochrane Database Syst Rev. 2018;7:CD006732.</reference>",
                "<reference id=\"bib8\" doi=\"\">Kim LK, Swaminathan RV, Looser P, et al. Hospital volume outcomes after septal myectomy and alcohol septal ablation for treatment of obstructive hypertrophic cardiomyopathy: US nationwide inpatient database, 2003-2011. JAMA Cardiol. 2016;1:324-32.</reference>"
            ],
            "vol": null,
            "issue": null,
            "pages": null,
            "coverdatetext": null,
            "coverdatestart": null,
            "statustype": null,
            "citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2020.08.045",
            "hub": "/Guidelines/Hubs/Hypertrophic-Cardiomyopathy",
            "jacclink": "https://www.jacc.org/doi/10.1016/j.jacc.2020.08.045#sec19.3",
            "pdflink": "https://www.jacc.org/doi/pdf/10.1016/j.jacc.2020.08.045",
            "gltitle": "Hypertrophic Cardiomyopathy",
            "url": ""
        },
        {
            "eid": "71-s2.0-HCM2020-8.3-4",
            "itemtitle": "8.3. Management of Patients With HCM and Atrial Fibrillation",
            "itemtitleFormatted": "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>",
            "summary": "In patients with HCM and subclinical AF detected by internal or external device or monitor, of >5 minutes' but 24 hours increased stroke risk (15), other evidence suggests that shorter duration episodes may pose risk in patients with traditional r...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "8. Management of HCM",
                "8.3. Management of Patients With HCM and Atrial Fibrillation"
            ],
            "doi": "10.1016/j.jacc.2020.08.045",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>8. Management of HCM</span>",
                "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "C-LD",
            "cor": "2a",
            "abs": [
                "In patients with HCM and subclinical AF detected by internal or external device or monitor, of &gt;5 minutes&#39; but &lt;24 hours&#39; duration for a given episode, anticoagulation with DOAC as first-line option and vitamin K antagonists as second-line option can be beneficial, taking into consideration duration of AF episodes, total AF burden, underlying risk factors, and bleeding risk."
            ],
            "comments": [
                "AF, commonly observed in patients with HCM, is associated with significant morbidity, impaired quality of life, and substantial stroke risk. Therapy includes prevention of thromboembolic events and controlling symptoms. Traditional stroke risk scoring systems used in the general population are not predictive in patients with HCM. Vitamin K antagonists are effective for stroke prevention, and recent studies support the use of DOACs as well. In view of the substantial stroke risk, periodic AF surveillance would allow for early intervention with anticoagulants in high-risk patients. Asymptomatic AF detected by cardiac devices or monitors also increases risk of stroke, so the decision to anticoagulate should take into considerations the duration of episodes as well as underlying risk factors. When a rhythm control strategy is needed, a number of antiarrhythmic drugs have been shown to be safe and effective, allowing for individualization according to underlying substrate and patient preference. Catheter ablation is also an important option, although the procedure is less effective than in the general population, and there is a more frequent need of repeat procedures and concomitant use of antiarrhythmic drugs. Surgical AF ablation, often with atrial appendage removal, is a potential rhythm management option in patients undergoing surgical myectomy. Surgical AF ablation or maze is not frequently pursued as an isolated surgical indication. Other supraventricular arrhythmias and atrial flutter are likely not increased in incidence in patients with HCM, and treatment is usually similar to populations without HCM.<br /> <br /> SCAF is often observed in patients with HCM and implanted cardiac devices (6, 7) and has been associated with an increased risk of thromboembolism (8). Yet, the minimum duration of SCAF that confers increased risk has not been precisely defined, because there appears to be a gradient of risk depending on underlying substrate. Although ASSERT data suggested only episodes &gt;24 hours increased stroke risk (15), other evidence suggests that shorter duration episodes may pose risk in patients with traditional risks factors (16). In ASSERT, the absolute stroke risk increased with increasing CHADS<sub>2</sub> score, reaching a rate of 3.78 per year in those with score &gt;2 (18). Botto stratified risk according to AF duration and CHADS<sub>2</sub> score, with a CHADS<sub>2</sub> score of 1 increasing the risk only if AF duration was &gt;24 hours, whereas for CHADS<sub>2</sub> &gt;2, episodes &gt;5 minutes increased risk (19). Similar risk stratification is unavailable in HCM, yet risk factors for stroke in the population with HCM have been identified and include advancing age, previous embolic events, NYHA functional class, left atrial diameter, vascular disease, and maximal LV wall thickness (30). When very short AF duration is observed, continued surveillance should be maintained as the burden of AF is likely to progress."
            ],
            "pointofcare": [
                "Treatment"
            ],
            "conditions": [
                "Hypertrophic Cardiomyopathy",
                "Atrial Fibrillation"
            ],
            "refinfo": [
                "<reference id=\"bib1\" doi=\"\">Quality AfHRa. The CAHPS Ambulatory Care Improvement Guide: Practical Strategies for Improving Patient Experience. Available at: https://www.ahrq.gov/cahps/quality-improvement/improvement-guide/6-strategies-for-improving/communication/strategy6i-shared-decisionmaking.html. Accessed: October 7.</reference>",
                "<reference id=\"bib6\" doi=\"\">Guadagnoli E, Ward P. Patient participation in decision-making. Soc Sci Med. 1998;47:329-39.</reference>",
                "<reference id=\"bib7\" doi=\"\">Legare F, Adekpedjou R, Stacey D, et al. Interventions for increasing the use of shared decision making by healthcare professionals. Cochrane Database Syst Rev. 2018;7:CD006732.</reference>",
                "<reference id=\"bib8\" doi=\"\">Kim LK, Swaminathan RV, Looser P, et al. Hospital volume outcomes after septal myectomy and alcohol septal ablation for treatment of obstructive hypertrophic cardiomyopathy: US nationwide inpatient database, 2003-2011. JAMA Cardiol. 2016;1:324-32.</reference>",
                "<reference id=\"bib11\" doi=\"\">Maron BJ, Nishimura RA, Maron MS. Shared decision-making in HCM. Nat Rev Cardiol. 2017;14:125-6.</reference>"
            ],
            "vol": null,
            "issue": null,
            "pages": null,
            "coverdatetext": null,
            "coverdatestart": null,
            "statustype": null,
            "citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2020.08.045",
            "hub": "/Guidelines/Hubs/Hypertrophic-Cardiomyopathy",
            "jacclink": "https://www.jacc.org/doi/10.1016/j.jacc.2020.08.045#sec19.3",
            "pdflink": "https://www.jacc.org/doi/pdf/10.1016/j.jacc.2020.08.045",
            "gltitle": "Hypertrophic Cardiomyopathy",
            "url": ""
        },
        {
            "eid": "71-s2.0-HCM2020-8.3-5",
            "itemtitle": "8.3. Management of Patients With HCM and Atrial Fibrillation",
            "itemtitleFormatted": "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>",
            "summary": "In patients with HCM and poorly tolerated AF, a rhythm control strategy with cardioversion or antiarrhythmic drugs can be beneficial with the choice of an agent according to AF symptom severity, patient preferences, and comorbid conditions. AF, co...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "8. Management of HCM",
                "8.3. Management of Patients With HCM and Atrial Fibrillation"
            ],
            "doi": "10.1016/j.jacc.2020.08.045",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>8. Management of HCM</span>",
                "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "B-NR",
            "cor": "2a",
            "abs": [
                "In patients with HCM and poorly tolerated AF, a rhythm control strategy with cardioversion or antiarrhythmic drugs can be beneficial with the choice of an agent according to AF symptom severity, patient preferences, and comorbid conditions."
            ],
            "comments": [
                "AF, commonly observed in patients with HCM, is associated with significant morbidity, impaired quality of life, and substantial stroke risk. Therapy includes prevention of thromboembolic events and controlling symptoms. Traditional stroke risk scoring systems used in the general population are not predictive in patients with HCM. Vitamin K antagonists are effective for stroke prevention, and recent studies support the use of DOACs as well. In view of the substantial stroke risk, periodic AF surveillance would allow for early intervention with anticoagulants in high-risk patients. Asymptomatic AF detected by cardiac devices or monitors also increases risk of stroke, so the decision to anticoagulate should take into considerations the duration of episodes as well as underlying risk factors. When a rhythm control strategy is needed, a number of antiarrhythmic drugs have been shown to be safe and effective, allowing for individualization according to underlying substrate and patient preference. Catheter ablation is also an important option, although the procedure is less effective than in the general population, and there is a more frequent need of repeat procedures and concomitant use of antiarrhythmic drugs. Surgical AF ablation, often with atrial appendage removal, is a potential rhythm management option in patients undergoing surgical myectomy. Surgical AF ablation or maze is not frequently pursued as an isolated surgical indication. Other supraventricular arrhythmias and atrial flutter are likely not increased in incidence in patients with HCM, and treatment is usually similar to populations without HCM.<br /> <br /> Recent studies suggest that with current therapies, AF in patients with HCM can be managed effectively, leading to low morbidity and mortality compared with historical controls (9, 10). In general, drug selection for rhythm control in patients with HCM is based on extrapolation from studies of the AF population at large. Yet, reports suggest several drugs are safe and effective in a population with HCM. Amiodarone has been used over many years and is generally deemed a favored option (10, 20). Disopyramide has been safely prescribed for reduction of LVOTO, but its efficacy in AF is not well established (21, 31). Data on NYHA class IC antiarrhythmic agents are limited because of concerns regarding their use in patients with structural heart disease. When used, therapy with class IC agents is safest in the presence of an ICD (10). Class III agents have been used as well. A recent report in 25 patients with HCM showed dofetilide to be well tolerated and facilitated AF management (13). Sotalol has also been shown to be safe and is commonly used in pediatric patients as well, either in oral or intravenous forms (23, 32-34). The U.S. Food and Drug Administration-mandated safety precautions should be adopted when prescribing antiarrhythmic drugs."
            ],
            "pointofcare": [
                "Treatment"
            ],
            "conditions": [
                "Hypertrophic Cardiomyopathy",
                "Atrial Fibrillation"
            ],
            "refinfo": [
                "<reference id=\"bib10\" doi=\"\">Sorajja P, Ommen SR, Holmes DR, Jr., et al. Survival after alcohol septal ablation for obstructive hypertrophic cardiomyopathy. Circulation. 2012;126:2374-80.</reference>",
                "<reference id=\"bib12\" doi=\"\">Chambers JB, Prendergast B, Iung B, et al. Standards defining a 'Heart Valve Centre': ESC Working Group on Valvular Heart Disease and European Association for Cardiothoracic Surgery Viewpoint. European heart journal. 2017;38:2177-83.</reference>",
                "<reference id=\"bib13\" doi=\"\">Semsarian C, Ingles J, Maron MS, et al. New perspectives on the prevalence of hypertrophic cardiomyopathy. Journal of the American College of Cardiology. 2015;65:1249-54.</reference>",
                "<reference id=\"bib14\" doi=\"\">Maron BJ, Ommen SR, Semsarian C, et al. Hypertrophic cardiomyopathy: present and future, with translation into contemporary cardiovascular medicine. J Am Coll Cardiol. 2014;64:83-99.</reference>",
                "<reference id=\"bib15\" doi=\"\">Ommen SR, Maron BJ, Olivotto I, et al. Long-term effects of surgical septal myectomy on survival in patients with obstructive hypertrophic cardiomyopathy. J Am Coll Cardiol. 2005;46:470-6.</reference>",
                "<reference id=\"bib16\" doi=\"\">Desai MY, Bhonsale A, Smedira NG, et al. Predictors of long-term outcomes in symptomatic hypertrophic obstructive cardiomyopathy patients undergoing surgical relief of left ventricular outflow tract obstruction. Circulation. 2013;128:209-16.</reference>",
                "<reference id=\"bib17\" doi=\"\">Lim KK, Maron BJ, Knight BP. Successful catheter ablation of hemodynamically unstable monomorphic ventricular tachycardia in a patient with hypertrophic cardiomyopathy and apical aneurysm. Journal of cardiovascular electrophysiology. 2009;20:445-7.</reference>",
                "<reference id=\"bib18\" doi=\"\">Dukkipati SR, d'Avila A, Soejima K, et al. Long-term outcomes of combined epicardial and endocardial ablation of monomorphic ventricular tachycardia related to hypertrophic cardiomyopathy. Circulation Arrhythmia and electrophysiology. 2011;4:185-94.</reference>",
                "<reference id=\"bib19\" doi=\"\">Rowin EJ, Maron BJ, Abt P, et al. Impact of advanced therapies for improving survival to heart transplant in patients with hypertrophic cardiomyopathy. Am J Cardiol. 2018;121:986-96.</reference>",
                "<reference id=\"bib20\" doi=\"\">Pasqualucci D, Fornaro A, Castelli G, et al. Clinical spectrum, therapeutic options, and outcome of advanced heart failure in hypertrophic cardiomyopathy. Circ Heart Fail. 2015;8:1014-21.</reference>",
                "<reference id=\"bib21\" doi=\"\">Nishimura RA, O'Gara PT, Bavaria JE, et al. 2019 AATS/ACC/ASE/SCAI/STS Expert Consensus Systems of Care Document: A Proposal to Optimize Care for Patients With Valvular Heart Disease: A Joint Report of the American Association for Thoracic Surgery, American College of Cardiology, American Society of Echocardiography, Society for Cardiovascular Angiography and Interventions, and Society of Thoracic Surgeons. J Am Coll Cardiol. 2019;73:2609-35.</reference>",
                "<reference id=\"bib22\" doi=\"\">Polanco AR, D'Angelo A, Shea N, et al. Impact of Septal Myectomy Volume on Mitral-Valve Replacement Rate in Hypertrophic Cardiomyopathy Patients. Cardiology. 2020;145:161-7.</reference>",
                "<reference id=\"bib23\" doi=\"\">Holst KA, Hanson KT, Ommen SR, et al. Septal myectomy in hypertrophic cardiomyopathy: national outcomes of concomitant mitral surgery. Mayo Clin Proc. 2019;94:66-73.</reference>",
                "<reference id=\"bib24\" doi=\"\">Maron BJ, Maron MS, Semsarian C. Genetics of hypertrophic cardiomyopathy after 20 years: clinical perspectives. J Am Coll Cardiol. 2012;60:705-15.</reference>"
            ],
            "vol": null,
            "issue": null,
            "pages": null,
            "coverdatetext": null,
            "coverdatestart": null,
            "statustype": null,
            "citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2020.08.045",
            "hub": "/Guidelines/Hubs/Hypertrophic-Cardiomyopathy",
            "jacclink": "https://www.jacc.org/doi/10.1016/j.jacc.2020.08.045#sec19.3",
            "pdflink": "https://www.jacc.org/doi/pdf/10.1016/j.jacc.2020.08.045",
            "gltitle": "Hypertrophic Cardiomyopathy",
            "url": ""
        },
        {
            "eid": "71-s2.0-AF-7.4-7",
            "itemtitle": "7.4 AF complicating ACS",
            "itemtitleFormatted": "<span>7.4 AF complicating ACS</span>",
            "summary": "In patients with AF at increased risk of stroke (based on CHA2DS2-VASc risk score of 2 or greater) who have undergone PCI with stenting for ACS, double therapy with a P2Y12 inhibitor (clopidogrel) and dabigatran 150 mg twice daily is reasonable to...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "JACC (Journal of the American College of Cardiology)",
                "7 Specific Patient Groups and AF",
                "7.4 AF complicating ACS"
            ],
            "doi": "10.1016/j.jacc.2019.01.011",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>JACC (Journal of the American College of Cardiology)</span>",
                "<span>7 Specific Patient Groups and AF</span>",
                "<span>7.4 AF complicating ACS</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "B-R",
            "cor": "2a",
            "abs": [
                "In patients with AF at increased risk of stroke (based on CHA<sub>2</sub>DS<sub>2</sub>-VASc risk score of 2 or greater) who have undergone PCI with stenting for ACS, double therapy with a P2Y12 inhibitor (clopidogrel) and dabigatran 150 mg twice daily is reasonable to reduce the risk of bleeding as compared with triple therapy."
            ],
            "comments": [
                "RE-DUAL PCI was an international, multicenter, randomized open-label trial of 2,725 patients with nonvalvular AF who had undergone PCI with stenting. Patients were randomized to receive 1 of 3 treatments: double therapy with dabigatran (110 mg twice daily) plus either clopidogrel or ticagrelor (110-mg dual-therapy group), double therapy with dabigatran (150 mg twice daily) plus either clopidogrel or ticagrelor (150-mg dual-therapy group), or triple therapy with warfarin plus aspirin (≤100 mg daily) and either clopidogrel or ticagrelor (triple-therapy group). The incidence of major or clinically relevant nonmajor bleeding was higher in the triple-therapy group than in the 110-mg dual-therapy group and the 150-mg dual-therapy group. In addition, the 2 dual-therapy groups combined were noninferior to the triple-therapy group with regard to the composite efficacy endpoint of thromboembolic events (MI, stroke, or systemic embolism), death, or unplanned revascularization. Clopidogrel was the most common P2Y12 inhibitor used (88%). Notably, the study was not powered to evaluate risk of stent thrombosis or systemic thromboembolism (S7.4-1).<br /> <br /> In aggregate, the data to date on comparisons of double versus triple therapy demonstrate that double therapy significantly reduces the risk of bleeding without a signal of harm with regard to stent thrombosis in clinical trials that enrolled both patients with stable ischemic disease and patients with ACS. With regard to the antithrombotic dosages studied, only the RE-DUAL PCI trial and WOEST trials studied antithrombotic dosages known to reduce the risk of systemic thromboembolism (S7.4-1, S7.4-3). The ongoing AUGUSTUS (A Study of Apixaban in Patients With Atrial Fibrillation, not Caused by a Heart Valve Problem, who are at Risk for Thrombosis due to Having had a Recent Coronary Event, Such as a Heart Attack or a Procedure to Open the Vessels of the Heart) trial is an open-label 2x2 factorial RCT to evaluate the safety of apixaban versus vitamin K antagonist and aspirin versus aspirin placebo in patients with AF and ACS or PCI (S7.4-24). The ENTRUST-AF-PCI (Edoxaban Treatment Versus Vitamin K Antagonist in Patients With Atrial Fibrillation Undergoing Percutaneous Coronary Intervention) is an ongoing trial evaluating edoxaban treatment versus vitamin K antagonist treatment in patients with AF undergoing PCI (S7.4-25). These trials will provide further evidence on treatment approaches designed to mitigate bleeding while reducing the risks of stent thrombosis and systemic thromboembolism."
            ],
            "pointofcare": [
                "Treatment",
                "Follow-up"
            ],
            "conditions": [
                "STEMI",
                "NonSTEMI",
                "Atrial Fibrillation"
            ],
            "refinfo": [
                "<reference id=\"bibfu133\" doi=\"10.1056/NEJMoa1708454\">Cannon CP, Bhatt DL, Oldgren J, et al. Dual antithrombotic therapy with dabigatran after PCI in atrial fibrillation. N Engl J Med. 2017;377:1513-24.</reference>"
            ],
            "vol": "74",
            "issue": "1",
            "pages": "104",
            "coverdatetext": null,
            "coverdatestart": "2019-07-09",
            "statustype": "S300",
            "citation": "J Am Coll Cardiol. 2019 Jul 9;74(1):104",
            "hub": "/Guidelines/Hubs/Atrial-Fibrillation",
            "jacclink": "http://www.onlinejacc.org/content/74/1/104#sec7.4",
            "pdflink": "http://www.onlinejacc.org/content/74/1/104.full.pdf",
            "gltitle": "Atrial Fibrillation (Focused Update)",
            "url": ""
        },
        {
            "eid": "71-s2.0-HCM2020-8.3-6",
            "itemtitle": "8.3. Management of Patients With HCM and Atrial Fibrillation",
            "itemtitleFormatted": "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>",
            "summary": "In patients with HCM and symptomatic AF, as part of a AF rhythm control strategy, catheter ablation for AF can be effective when drug therapy is ineffective, contraindicated, or not the patient's preference. AF, commonly observed in patients with ...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "8. Management of HCM",
                "8.3. Management of Patients With HCM and Atrial Fibrillation"
            ],
            "doi": "10.1016/j.jacc.2020.08.045",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>8. Management of HCM</span>",
                "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "B-NR",
            "cor": "2a",
            "abs": [
                "In patients with HCM and symptomatic AF, as part of a AF rhythm control strategy, catheter ablation for AF can be effective when drug therapy is ineffective, contraindicated, or not the patient&#39;s preference."
            ],
            "comments": [
                "AF, commonly observed in patients with HCM, is associated with significant morbidity, impaired quality of life, and substantial stroke risk. Therapy includes prevention of thromboembolic events and controlling symptoms. Traditional stroke risk scoring systems used in the general population are not predictive in patients with HCM. Vitamin K antagonists are effective for stroke prevention, and recent studies support the use of DOACs as well. In view of the substantial stroke risk, periodic AF surveillance would allow for early intervention with anticoagulants in high-risk patients. Asymptomatic AF detected by cardiac devices or monitors also increases risk of stroke, so the decision to anticoagulate should take into considerations the duration of episodes as well as underlying risk factors. When a rhythm control strategy is needed, a number of antiarrhythmic drugs have been shown to be safe and effective, allowing for individualization according to underlying substrate and patient preference. Catheter ablation is also an important option, although the procedure is less effective than in the general population, and there is a more frequent need of repeat procedures and concomitant use of antiarrhythmic drugs. Surgical AF ablation, often with atrial appendage removal, is a potential rhythm management option in patients undergoing surgical myectomy. Surgical AF ablation or maze is not frequently pursued as an isolated surgical indication. Other supraventricular arrhythmias and atrial flutter are likely not increased in incidence in patients with HCM, and treatment is usually similar to populations without HCM.<br /> <br /> Catheter ablation plays an important role in the management of AF and typical atrial flutter. Although no RCTs exist in this area, a number of meta-analyses have been published in patients with HCM undergoing catheter ablation for drug refractory AF, including one that compared catheter ablation between patients with HCM versus a cohort without HCM (12, 25). In general, the procedure is safe and remains an important tool. However, the results seem less favorable compared with patients without HCM, with a 2-fold higher risk of relapse, more frequent need of repeat procedures, and higher use of concomitant antiarrhythmic drugs. This is attributed to the fact that patients with HCM have a greater degree of electrophysiologic and structural remodeling than the population without HCM (25). Contributing factors for atrial remodeling include LVOTO, diastolic impairment, MR, and other factors. It can be postulated that aggressive intervention in the earlier stages of disease would be more effective, but this is unproven, and ongoing remodeling is expected. With that in mind, some authors have suggested the need for a more extensive ablation approach, with linear lesions and ablation of triggers not associated with the pulmonary veins often required to improve the long-term durability of the procedure (26)."
            ],
            "pointofcare": [
                "Treatment"
            ],
            "conditions": [
                "Hypertrophic Cardiomyopathy",
                "Atrial Fibrillation"
            ],
            "refinfo": [
                "<reference id=\"bib12\" doi=\"\">Chambers JB, Prendergast B, Iung B, et al. Standards defining a 'Heart Valve Centre': ESC Working Group on Valvular Heart Disease and European Association for Cardiothoracic Surgery Viewpoint. European heart journal. 2017;38:2177-83.</reference>",
                "<reference id=\"bib25\" doi=\"\">Ingles J, Yeates L, Semsarian C. The emerging role of the cardiac genetic counselor. Heart Rhythm. 2011;8:1958-62.</reference>",
                "<reference id=\"bib26\" doi=\"\">Ahmad F, McNally EM, Ackerman MJ, et al. Establishment of Specialized Clinical Cardiovascular Genetics Programs: Recognizing the Need and Meeting Standards: A Scientific Statement From the American Heart Association. Circ Genom Precis Med. 2019;HCG0000000000000054.</reference>"
            ],
            "vol": null,
            "issue": null,
            "pages": null,
            "coverdatetext": null,
            "coverdatestart": null,
            "statustype": null,
            "citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2020.08.045",
            "hub": "/Guidelines/Hubs/Hypertrophic-Cardiomyopathy",
            "jacclink": "https://www.jacc.org/doi/10.1016/j.jacc.2020.08.045#sec19.3",
            "pdflink": "https://www.jacc.org/doi/pdf/10.1016/j.jacc.2020.08.045",
            "gltitle": "Hypertrophic Cardiomyopathy",
            "url": ""
        },
        {
            "eid": "71-s2.0-HCM2020-8.3-7",
            "itemtitle": "8.3. Management of Patients With HCM and Atrial Fibrillation",
            "itemtitleFormatted": "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>",
            "summary": "In patients with HCM and AF who require surgical myectomy, concomitant surgical AF ablation procedure can be beneficial for AF rhythm control. AF, commonly observed in patients with HCM, is associated with significant morbidity, impaired quality o...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "8. Management of HCM",
                "8.3. Management of Patients With HCM and Atrial Fibrillation"
            ],
            "doi": "10.1016/j.jacc.2020.08.045",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>8. Management of HCM</span>",
                "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "B-NR",
            "cor": "2a",
            "abs": [
                "In patients with HCM and AF who require surgical myectomy, concomitant surgical AF ablation procedure can be beneficial for AF rhythm control."
            ],
            "comments": [
                "AF, commonly observed in patients with HCM, is associated with significant morbidity, impaired quality of life, and substantial stroke risk. Therapy includes prevention of thromboembolic events and controlling symptoms. Traditional stroke risk scoring systems used in the general population are not predictive in patients with HCM. Vitamin K antagonists are effective for stroke prevention, and recent studies support the use of DOACs as well. In view of the substantial stroke risk, periodic AF surveillance would allow for early intervention with anticoagulants in high-risk patients. Asymptomatic AF detected by cardiac devices or monitors also increases risk of stroke, so the decision to anticoagulate should take into considerations the duration of episodes as well as underlying risk factors. When a rhythm control strategy is needed, a number of antiarrhythmic drugs have been shown to be safe and effective, allowing for individualization according to underlying substrate and patient preference. Catheter ablation is also an important option, although the procedure is less effective than in the general population, and there is a more frequent need of repeat procedures and concomitant use of antiarrhythmic drugs. Surgical AF ablation, often with atrial appendage removal, is a potential rhythm management option in patients undergoing surgical myectomy. Surgical AF ablation or maze is not frequently pursued as an isolated surgical indication. Other supraventricular arrhythmias and atrial flutter are likely not increased in incidence in patients with HCM, and treatment is usually similar to populations without HCM.<br /> <br /> AF in patients with HCM is often poorly tolerated; therefore, aggressive rhythm control strategies are at times required. In view of the lower success rate of catheter ablation in HCM compared with the general AF population, surgical AF ablation is a potential rhythm management option, especially in patients already undergoing open heart surgery for a surgical myectomy. In combination with surgical relief of the LVOT gradient and MR, which can limit or even reverse negative atrial remodeling, concomitant surgical AF ablation may be successful in decreasing AF burden. Several studies have reported satisfactory midterm efficacy, yet these reports universally include a small number of patients, and the durability of the procedure appears to decrease with time (27, 29). In a recent study that represents the largest series of patients with AF treated surgically, freedom from AF recurrence at 1 year was 44% for ablation patients (n=49) and 75% with the maze procedure (n=72) (P&lt;0.001) (10). In this study, with concomitant surgical ablation, freedom from AF at 3 years was 70%, left atrial size being a predictor of recurrence (10). Data on the stand-alone surgical AF ablation are scant but have been reported in a limited number of patients."
            ],
            "pointofcare": [
                "Treatment"
            ],
            "conditions": [
                "Hypertrophic Cardiomyopathy",
                "Atrial Fibrillation"
            ],
            "refinfo": [
                "<reference id=\"bib10\" doi=\"\">Sorajja P, Ommen SR, Holmes DR, Jr., et al. Survival after alcohol septal ablation for obstructive hypertrophic cardiomyopathy. Circulation. 2012;126:2374-80.</reference>",
                "<reference id=\"bib13\" doi=\"\">Semsarian C, Ingles J, Maron MS, et al. New perspectives on the prevalence of hypertrophic cardiomyopathy. Journal of the American College of Cardiology. 2015;65:1249-54.</reference>",
                "<reference id=\"bib27\" doi=\"\">van Velzen HG, Schinkel AFL, Baart SJ, et al. Outcomes of Contemporary Family Screening in Hypertrophic Cardiomyopathy. Circ Genom Precis Med. 2018;11:e001896.</reference>",
                "<reference id=\"bib28\" doi=\"\">Ranthe MF, Carstensen L, Oyen N, et al. Risk of Cardiomyopathy in Younger Persons With a Family History of Death from Cardiomyopathy: A Nationwide Family Study in a Cohort of 3.9 Million Persons. Circulation. 2015;132:1013-9.</reference>",
                "<reference id=\"bib29\" doi=\"\">Lafreniere-Roula M, Bolkier Y, Zahavich L, et al. Family screening for hypertrophic cardiomyopathy: Is it time to change practice guidelines? Eur Heart J. 2019;40:3672-81.</reference>"
            ],
            "vol": null,
            "issue": null,
            "pages": null,
            "coverdatetext": null,
            "coverdatestart": null,
            "statustype": null,
            "citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2020.08.045",
            "hub": "/Guidelines/Hubs/Hypertrophic-Cardiomyopathy",
            "jacclink": "https://www.jacc.org/doi/10.1016/j.jacc.2020.08.045#sec19.3",
            "pdflink": "https://www.jacc.org/doi/pdf/10.1016/j.jacc.2020.08.045",
            "gltitle": "Hypertrophic Cardiomyopathy",
            "url": ""
        },
        {
            "eid": "71-s2.0-HCM2020-8.3-1",
            "itemtitle": "8.3. Management of Patients With HCM and Atrial Fibrillation",
            "itemtitleFormatted": "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>",
            "summary": "In patients with HCM and clinical AF, anticoagulation is recommended with direct-acting oral anticoagulants (DOAC) as first-line option and vitamin K antagonists as second-line option, independent of CHA2DS2-VASc score. AF, commonly observed in pa...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "8. Management of HCM",
                "8.3. Management of Patients With HCM and Atrial Fibrillation"
            ],
            "doi": "10.1016/j.jacc.2020.08.045",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>8. Management of HCM</span>",
                "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "B-NR",
            "cor": "1",
            "abs": [
                "In patients with HCM and clinical AF, anticoagulation is recommended with direct-acting oral anticoagulants (DOAC) as first-line option and vitamin K antagonists as second-line option, independent of CHA<sub>2</sub>DS<sub>2</sub>-VASc score."
            ],
            "comments": [
                "AF, commonly observed in patients with HCM, is associated with significant morbidity, impaired quality of life, and substantial stroke risk. Therapy includes prevention of thromboembolic events and controlling symptoms. Traditional stroke risk scoring systems used in the general population are not predictive in patients with HCM. Vitamin K antagonists are effective for stroke prevention, and recent studies support the use of DOACs as well. In view of the substantial stroke risk, periodic AF surveillance would allow for early intervention with anticoagulants in high-risk patients. Asymptomatic AF detected by cardiac devices or monitors also increases risk of stroke, so the decision to anticoagulate should take into considerations the duration of episodes as well as underlying risk factors. When a rhythm control strategy is needed, a number of antiarrhythmic drugs have been shown to be safe and effective, allowing for individualization according to underlying substrate and patient preference. Catheter ablation is also an important option, although the procedure is less effective than in the general population, and there is a more frequent need of repeat procedures and concomitant use of antiarrhythmic drugs. Surgical AF ablation, often with atrial appendage removal, is a potential rhythm management option in patients undergoing surgical myectomy. Surgical AF ablation or maze is not frequently pursued as an isolated surgical indication. Other supraventricular arrhythmias and atrial flutter are likely not increased in incidence in patients with HCM, and treatment is usually similar to populations without HCM.<br /> <br /> Clinical AF is AF that causes symptoms for which patients seek medical attention. Although there are no RCTs, the risk of systemic embolization is high in patients with HCM with AF. A meta-analysis that included 33 studies and 7,381 patients revealed an overall prevalence of thromboembolism in patients with HCM with AF of 27.09% and incidence of 3.75 per 100 patients) (1). The stroke risk is independent of CHA<sub>2</sub>DS<sub>2</sub>-VASc score (30), with a significant number of strokes observed in patients with a score of 0. A number of studies have shown that anticoagulation, particularly warfarin with target international normalized ratio 2 to 3, reduces the stroke risk in this population (2, 30), whereas more recent publications have shown DOACs to be at least as effective as warfarin, with additional advantages reported, such as improved patient satisfaction and long-term outcomes (3-5). Although left atrial appendage occlusion devices have been evaluated in populations, the number of patients with HCM in these trials was limited. Thus, the role of left atrial appendage occlusion devices in HCM remains untested. The recommendations for anticoagulation of patients with atrial flutter are the same as those for patients with AF (14)."
            ],
            "pointofcare": [
                "Treatment"
            ],
            "conditions": [
                "Hypertrophic Cardiomyopathy",
                "Atrial Fibrillation"
            ],
            "refinfo": [
                "<reference id=\"bib1\" doi=\"\">Quality AfHRa. The CAHPS Ambulatory Care Improvement Guide: Practical Strategies for Improving Patient Experience. Available at: https://www.ahrq.gov/cahps/quality-improvement/improvement-guide/6-strategies-for-improving/communication/strategy6i-shared-decisionmaking.html. Accessed: October 7.</reference>",
                "<reference id=\"bib2\" doi=\"\">Quality AfHRa. AHRQ Health Literacy Universal Precautions Toolkit. Available at: Accessed: January 1.</reference>",
                "<reference id=\"bib3\" doi=\"\">Greenfield S, Kaplan SH, Ware JE, Jr., et al. Patients' participation in medical care: effects on blood sugar control and quality of life in diabetes. J Gen Intern Med. 1988;3:448-57.</reference>",
                "<reference id=\"bib4\" doi=\"\">Greenfield S, Kaplan S, Ware JE, Jr. Expanding patient involvement in care. Effects on patient outcomes. Ann Intern Med. 1985;102:520-8.</reference>",
                "<reference id=\"bib5\" doi=\"\">Kaplan SH, Greenfield S, Ware JE, Jr. Assessing the effects of physician-patient interactions on the outcomes of chronic disease. Med Care. 1989;27:S110-27.</reference>"
            ],
            "vol": null,
            "issue": null,
            "pages": null,
            "coverdatetext": null,
            "coverdatestart": null,
            "statustype": null,
            "citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2020.08.045",
            "hub": "/Guidelines/Hubs/Hypertrophic-Cardiomyopathy",
            "jacclink": "https://www.jacc.org/doi/10.1016/j.jacc.2020.08.045#sec19.3",
            "pdflink": "https://www.jacc.org/doi/pdf/10.1016/j.jacc.2020.08.045",
            "gltitle": "Hypertrophic Cardiomyopathy",
            "url": ""
        },
        {
            "eid": "71-s2.0-HCM2020-8.3-3",
            "itemtitle": "8.3. Management of Patients With HCM and Atrial Fibrillation",
            "itemtitleFormatted": "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>",
            "summary": "In patients with AF in whom rate control strategy is planned, either beta-blockers, verapamil, or diltiazem are recommended, with the choice of agents according to patient preferences and comorbid conditions. AF, commonly observed in patients with...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "8. Management of HCM",
                "8.3. Management of Patients With HCM and Atrial Fibrillation"
            ],
            "doi": "10.1016/j.jacc.2020.08.045",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>8. Management of HCM</span>",
                "<span>8.3. Management of Patients With HCM and Atrial Fibrillation</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "C-LD",
            "cor": "1",
            "abs": [
                "In patients with AF in whom rate control strategy is planned, either beta-blockers, verapamil, or diltiazem are recommended, with the choice of agents according to patient preferences and comorbid conditions."
            ],
            "comments": [
                "AF, commonly observed in patients with HCM, is associated with significant morbidity, impaired quality of life, and substantial stroke risk. Therapy includes prevention of thromboembolic events and controlling symptoms. Traditional stroke risk scoring systems used in the general population are not predictive in patients with HCM. Vitamin K antagonists are effective for stroke prevention, and recent studies support the use of DOACs as well. In view of the substantial stroke risk, periodic AF surveillance would allow for early intervention with anticoagulants in high-risk patients. Asymptomatic AF detected by cardiac devices or monitors also increases risk of stroke, so the decision to anticoagulate should take into considerations the duration of episodes as well as underlying risk factors. When a rhythm control strategy is needed, a number of antiarrhythmic drugs have been shown to be safe and effective, allowing for individualization according to underlying substrate and patient preference. Catheter ablation is also an important option, although the procedure is less effective than in the general population, and there is a more frequent need of repeat procedures and concomitant use of antiarrhythmic drugs. Surgical AF ablation, often with atrial appendage removal, is a potential rhythm management option in patients undergoing surgical myectomy. Surgical AF ablation or maze is not frequently pursued as an isolated surgical indication. Other supraventricular arrhythmias and atrial flutter are likely not increased in incidence in patients with HCM, and treatment is usually similar to populations without HCM.<br /> <br /> Given the poor tolerance of AF in patients with HCM, a rhythm-control strategy is often preferred, because more recent data support improved outcomes with a rhythm-control strategy compared with historical controls (9, 10). For those patients for whom a rate-control strategy is chosen (e.g., because of patient choice, antiarrhythmic drug failure, or intolerance), a non-dihydropyridine calcium channel blocker, a beta-blocker, or a combination of the two is preferable. There is a theoretical concern that digoxin could exacerbate LVOTO attributable to a positive inotropic effect. However, in the absence of a gradient, digoxin is a potential option although data on efficacy in this population are lacking. The choice of medication should be individually determined according to age, underlying substrate, and comorbidities, as well as severity of symptoms. Dose adjustments are based on the balance between adequate rate control versus side effects, including excessive bradycardia. In patients with hypotension, dyspnea at rest and very high resting gradients (e.g., &gt;100 mm Hg), verapamil should be avoided. Atrioventricular node ablation with pacemaker implantation can be a last option in refractory cases."
            ],
            "pointofcare": [
                "Treatment"
            ],
            "conditions": [
                "Hypertrophic Cardiomyopathy",
                "Atrial Fibrillation"
            ],
            "refinfo": [
                "<reference id=\"bib9\" doi=\"\">Panaich SS, Badheka AO, Chothani A, et al. Results of ventricular septal myectomy and hypertrophic cardiomyopathy (from Nationwide Inpatient Sample [1998-2010]). Am J Cardiol. 2014;114:1390-5.</reference>",
                "<reference id=\"bib10\" doi=\"\">Sorajja P, Ommen SR, Holmes DR, Jr., et al. Survival after alcohol septal ablation for obstructive hypertrophic cardiomyopathy. Circulation. 2012;126:2374-80.</reference>"
            ],
            "vol": null,
            "issue": null,
            "pages": null,
            "coverdatetext": null,
            "coverdatestart": null,
            "statustype": null,
            "citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2020.08.045",
            "hub": "/Guidelines/Hubs/Hypertrophic-Cardiomyopathy",
            "jacclink": "https://www.jacc.org/doi/10.1016/j.jacc.2020.08.045#sec19.3",
            "pdflink": "https://www.jacc.org/doi/pdf/10.1016/j.jacc.2020.08.045",
            "gltitle": "Hypertrophic Cardiomyopathy",
            "url": ""
        },
        {
            "eid": "71-s2.0-BRADY-8.1.2.2-3",
            "itemtitle": "8.1.2.2. Surgery for Atrial Fibrillation",
            "itemtitleFormatted": "<span>8.1.2.2. Surgery for Atrial Fibrillation</span>",
            "summary": "In patients undergoing surgery for AF who will likely require future CRT or ventricular pacing, intraoperative placement of a permanent epicardial left ventricular lead may be considered. AF is present in 30% to 50% of patients undergoing valve su...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "JACC (Journal of the American College of Cardiology)",
                "8. Special Populations",
                "8.1. Perioperative Management",
                "8.1.1. Patients at Risk for Bradycardia During Noncardiac Surgery or Procedures",
                "8.1.2.2. Surgery for Atrial Fibrillation"
            ],
            "doi": "10.1016/j.jacc.2018.10.044",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>JACC (Journal of the American College of Cardiology)</span>",
                "<span>8. Special Populations</span>",
                "<span>8.1. Perioperative Management</span>",
                "<span>8.1.1. Patients at Risk for Bradycardia During Noncardiac Surgery or Procedures</span>",
                "<span>8.1.2.2. Surgery for Atrial Fibrillation</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "C-EO",
            "cor": "2b",
            "abs": [
                "In patients undergoing surgery for AF who will likely require future CRT or ventricular pacing, intraoperative placement of a permanent epicardial left ventricular lead may be considered."
            ],
            "comments": [
                "AF is present in 30% to 50% of patients undergoing valve surgery and is associated with reduced survival and increased risk of stroke (S8.1.2.2-2). Successful surgical correction of AF is associated with improved patient survival compared with patients who have recurrent AF (S8.1.2.2-5). Up to 65% of patients undergoing mitral surgery with AF undergo surgery directed toward management of AF (S8.1.2.2-6). A recent single center study found reported that 11% of patients undergoing a Cox Maze IV procedure in addition to mitral valve surgery required postoperative PPM implantation (S8.1.2.2-4).<br /> <br /> The data on whether surgery for AF is associated with an increased risk for postoperative bradycardia and PPM implant are mixed, in part caused by the significant evolution in the lesion set and surgical technique (S8.1.2.2-1--S8.1.2.2-4). An analysis of the STS registry and an RCT found that adding ablation for AF was associated with an increased likelihood of PPM implantation (S8.1.2.2-1, S8.1.2.2-2). However, a meta-analysis of 16 RCTs found no difference in need for permanent pacer in patients randomized to additional surgery for AF (OR: 0.88; 95% CI: 0.51--1.51; p=0.64) (S8.1.2.2-3). <br /> <br /> Surgical left ventricular lead placement is performed as a stand-alone procedure when placement via coronary sinus is unsuccessful (S8.1.2.2-7). If a patient has an indication for cardiac resynchronization before cardiac surgery, an epicardial placement of a left ventricular lead at the time of surgery for AF may offer future benefit without significant risk of harm. In addition, placement of a nonapical, lateral epicardial lead will allow more pacing options if the patient undergoes a future atrioventricular nodal ablation. Although traditionally considered a contraindication, it may be that MRI can be performed safely in selected patients with abandoned leads under the auspices of specialized protocols (S8.1.2.2-8--S8.1.2.2-10). At the time of a future CRT procedure the operator can implant a coronary sinus lead or use the capped epicardial lead if necessary."
            ],
            "pointofcare": [
                "Treatment",
                "Follow-up"
            ],
            "conditions": [
                "Atrial Fibrillation",
                "Perioperative CV Eval for NonCV Surgery",
                "Bradycardia",
                "Heart Failure"
            ],
            "refinfo": [
                "<reference id=\"bib795\" doi=\"10.1016/j.athoracsur.2004.10.041\"> Navia JL, Atik FA, Grimm RA, et al. Minimally invasive left ventricular epicardial lead placement: surgical techniques for heart failure resynchronization therapy. Ann Thorac Surg. 2005;79:1536-44; discussion-44.</reference>",
                "<reference id=\"bib796\" doi=\"\"> Kusumoto FM, Schoenfeld MH, Wilkoff BL, et al. 2017 HRS expert consensus statement on cardiovascular implantable electronic device lead management and extraction. Heart Rhythm. 2017;14:e503-51.</reference>",
                "<reference id=\"bib797\" doi=\"10.1016/j.hrthm.2017.04.025\"> Indik JH, Gimbel JR, Abe H, et al. 2017 HRS expert consensus statement on magnetic resonance imaging and radiation exposure in patients with cardiovascular implantable electronic devices. Heart Rhythm. 2017;14:e97-153.</reference>",
                "<reference id=\"bib798\" doi=\"\"> Padmanabhan D, Kella DK, Mehta R, et al. Safety of magnetic resonance imaging in patients with legacy pacemakers and defibrillators and abandoned leads. Heart Rhythm. 2018;15:228-33.</reference>"
            ],
            "vol": "74",
            "issue": "7",
            "pages": "e51",
            "coverdatetext": null,
            "coverdatestart": "2019-08-20",
            "statustype": "S300",
            "citation": "J Am Coll Cardiol. 2019 Aug 20;74(7):e51",
            "hub": "/Guidelines/Hubs/Bradycardia-and-Cardiac-Conduction-Delay",
            "jacclink": "http://www.onlinejacc.org/content/74/7/e51#sec12.1.2.2",
            "pdflink": "http://www.onlinejacc.org/content/74/7/e51.full.pdf",
            "gltitle": "Bradycardia and Cardiac Conduction Delay",
            "url": ""
        },
        {
            "eid": "71-s2.0-AF-6.1.1-1",
            "itemtitle": "6.1.1 Prevention of Thromboembolism: Recommendations",
            "itemtitleFormatted": "<span>6.1.1 Prevention of Thromboembolism: Recommendations</span>",
            "summary": "For patients with AF or atrial flutter of 48 hours' duration or longer, or when the duration of AF is unknown, anticoagulation with warfarin (INR 2.0 to 3.0), a factor Xa inhibitor, or direct thrombin inhibitor is recommended for at least 3 weeks ...",
            "contenttype": [
                "ACCG"
            ],
            "pubdate": null,
            "sectiontitle": [
                "JACC (Journal of the American College of Cardiology)",
                "6 Rhythm Control",
                "6.1 Electrical and Pharmacological Cardioversion of AF and Atrial Flutter",
                "6.1.1 Prevention of Thromboembolism: Recommendations"
            ],
            "doi": "10.1016/j.jacc.2019.01.011",
            "subtype": "publication",
            "sectionid": null,
            "sectiontitleformatted": [
                "<span>JACC (Journal of the American College of Cardiology)</span>",
                "<span>6 Rhythm Control</span>",
                "<span>6.1 Electrical and Pharmacological Cardioversion of AF and Atrial Flutter</span>",
                "<span>6.1.1 Prevention of Thromboembolism: Recommendations</span>"
            ],
            "refimage": null,
            "caption": null,
            "loe": "B-R",
            "cor": "1",
            "abs": [
                "For patients with AF or atrial flutter of 48 hours&#39; duration or longer, or when the duration of AF is unknown, anticoagulation with warfarin (INR 2.0 to 3.0), a factor Xa inhibitor, or direct thrombin inhibitor is recommended for at least 3 weeks before and at least 4 weeks after cardioversion, regardless of the CHA<sub>2</sub>DS<sub>2</sub>-VASc score or the method (electrical or pharmacological) used to restore sinus rhythm."
            ],
            "comments": [
                "Three prospective RCTs have evaluated the safety and efficacy of newly initiated factor Xa inhibitors (rivaroxaban and apixaban) for cardioversion as an alternative to warfarin (S6.1.1-7, S6.1.1-8, S6.1.1-17). In addition, retrospective analyses have been performed on the subset of patients undergoing cardioversion within the context of the larger randomized trials that compared each of the FDA-approved NOACs with warfarin for thromboembolism prevention with AF. The results were consistent and support the assertion that NOACs are an effective and safe alternative to warfarin for patients undergoing cardioversion. An alternative to waiting 3 weeks before cardioversion is to perform transesophageal echocardiography to exclude thrombus (see separate recommendation in this section). The decision about long-term anticoagulant therapy (beyond 4 weeks) is based on the thromboembolic risk profile (Section 4) and bleeding risk profile. The &quot;48-hour rule&quot; has also been questioned, because delay to cardioversion of 12 hours or longer from symptom onset was associated with a greater risk of thromboembolic complications compared to cardioversion of less than 12 hours (1.1% versus 0.3%) (S6.1.1-18) and the risk of thromboembolic complications with cardioversion of 12 hour or longer increases substantially in patients &gt;75 years of age and in women (S6.1.1-19)."
            ],
            "pointofcare": [
                "Treatment"
            ],
            "conditions": [
                "Atrial Fibrillation",
                "Prevention"
            ],
            "refinfo": [
                "<reference id=\"bibfu107\" doi=\"10.1016/S0735-1097(02)02052-1\">Gallagher MM, Hennessy BJ, Edvardsson N, et al. Embolic complications of direct current cardioversion of atrial arrhythmias: association with low intensity of anticoagulation at the time of cardioversion. J Am Coll Cardiol. 2002;40:926-33.</reference>",
                "<reference id=\"bibfu108\" doi=\"10.1067/mhj.2000.106648\">Jaber WA, Prior DL, Thamilarasan M, et al. Efficacy of anticoagulation in resolving left atrial and left atrial appendage thrombi: a transesophageal echocardiographic study. Am Heart J. 2000;140:150-6.</reference>",
                "<reference id=\"bibfu109\" doi=\"10.1378/chest.11-2304\">You JJ, Singer DE, Howard PA, et al. Antithrombotic therapy for atrial fibrillation: antithrombotic therapy and prevention of thrombosis, 9th ed: American College of Chest Physicians evidence-based clinical practice guidelines. Chest. 2012;141:e531S-e575S.</reference>",
                "<reference id=\"bibfu110\" doi=\"10.1161/CIRCULATIONAHA.110.977546\">Nagarakanti R, Ezekowitz MD, Oldgren J, et al. Dabigatran versus warfarin in patients with atrial fibrillation: an analysis of patients undergoing cardioversion. Circulation. 2011;123:131-6.</reference>",
                "<reference id=\"bibfu111\" doi=\"10.1016/j.jacc.2013.02.025\">Piccini JP, Stevens SR, Lokhnygina Y, et al. Outcomes after cardioversion and atrial fibrillation ablation in patients treated with rivaroxaban and warfarin in the ROCKET AF trial. J Am Coll Cardiol. 2013;61:1998-2006.</reference>",
                "<reference id=\"bibfu112\" doi=\"10.1016/j.jacc.2013.09.062\">Flaker G, Lopes RD, Al-Khatib SM, et al. Efficacy and safety of apixaban in patients after cardioversion for atrial fibrillation: insights from the ARISTOTLE Trial (Apixaban for Reduction in Stroke and Other Thromboembolic Events in Atrial Fibrillation). J Am Coll Cardiol. 2014;63:1082-7.</reference>",
                "<reference id=\"bibfu113\" doi=\"10.1093/eurheartj/ehu367\">Cappato R, Ezekowitz MD, Klein AL, et al. Rivaroxaban vs. vitamin K antagonists for cardioversion in atrial fibrillation. Eur Heart J. 2014;35:3346-55.</reference>",
                "<reference id=\"bibfu114\" doi=\"\">Goette A, Merino JL, Ezekowitz MD, et al. Edoxaban versus enoxaparin-warfarin in patients undergoing cardioversion of atrial fibrillation (ENSURE-AF): a randomised, open-label, phase 3b trial. Lancet. 2016;388:1995-2003.</reference>",
                "<reference id=\"bibfu115\" doi=\"\">Pallisgaard JL, Lindhardt TB, Hansen ML, et al. Cardioversion and risk of adverse events with dabigatran versus warfarin-a nationwide cohort study. PLoS ONE. 2015;10:e0141377.</reference>",
                "<reference id=\"bibfu116\" doi=\"\">Plitt A, Ezekowitz MD, De Caterina R, et al. Cardioversion of atrial fibrillation in ENGAGE AF-TIMI 48. Clin Cardiol. 2016;39:345-6.</reference>",
                "<reference id=\"bibfu117\" doi=\"\">Dentali F, Botto GL, Gianni M, et al. Efficacy and safety of direct oral anticoagulants in patients undergoing cardioversion for atrial fibrillation: a systematic review and meta-analysis of the literature. Int J Cardiol. 2015;185:72-7.</reference>",
                "<reference id=\"bibfu118\" doi=\"\">Ezekowitz MD, Pollack CV Jr, Halperin JL, et al. Apixaban compared to heparin/vitamin K antagonist in patients with atrial fibrillation scheduled for cardioversion: the EMANATE trial. Eur Heart J. 2018;39:2959-71.</reference>"
            ],
            "vol": "74",
            "issue": "1",
            "pages": "104",
            "coverdatetext": null,
            "coverdatestart": "2019-07-09",
            "statustype": "S300",
            "citation": "J Am Coll Cardiol. 2019 Jul 9;74(1):104",
            "hub": "/Guidelines/Hubs/Atrial-Fibrillation",
            "jacclink": "http://www.onlinejacc.org/content/74/1/104#sec6.1.1",
            "pdflink": "http://www.onlinejacc.org/content/74/1/104.full.pdf",
            "gltitle": "Atrial Fibrillation (Focused Update)",
            "url": ""
        }

];


export const resultTable = [
	{
		"eid": "1-s2.0-S0735109720377962-hl0000833",
		"itemtitle": "Structure of Primary and Comprehensive Valve Centers",
		"itemtitleFormatted": "<span>Structure of Primary and Comprehensive Valve Centers</span>",
		"summary": "Table 11 Structure of Primary and Comprehensive Valve Centers Comprehensive (Level I) Valve Center Primary (Level II) Valve Center Interventional procedures ∗ TAVI–transfemoral TAVI–transfemoral Percutaneous aortic valve balloon dilation Percutane...",
		"contenttype": [
			"PG",
			"JL"
		],
		"pubdate": null,
		"sectiontitle": [
			"JACC (Journal of the American College of Cardiology)",
			"2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease",
			"Structure of Primary and Comprehensive Valve Centers"
		],
		"doi": "10.1016/j.jacc.2020.11.018",
		"subtype": "table",
		"sectionid": [
			"hl0000833"
		],
		"sectiontitleformatted": [
			"<span>JACC (Journal of the American College of Cardiology)</span>",
			"<span>2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease</span>",
			"<span>Structure of Primary and Comprehensive Valve Centers</span>"
		],
		"refimage": null,
		"caption": null,
		"loe": null,
		"cor": null,
		"abs": [],
		"comments": [],
		"pointofcare": null,
		"conditions": null,
		"refinfo": null,
		"vol": null,
		"issue": null,
		"pages": null,
		"coverdatetext": null,
		"coverdatestart": null,
		"statustype": "S200",
		"citation": "J Am Coll Cardiol. 0001 Jan 1. doi: 10.1016/j.jacc.2020.11.018",
		"hub": "/Guidelines/Hubs/Valvular-Heart-Disease",
		"jacclink": "https://www.jacc.org/doi/10.1016/j.jacc.2020.11.018",
		"pdflink": "https://www.jacc.org/doi/pdf/10.1016/j.jacc.2020.11.018",
		"gltitle": "Valvular Heart Disease",
		"url": ""
	},
]

export const sectionContent = [
	{
		results:
			'<section id="hl0005480"><a id="sec10"></a><section id="hl0007506"><a id="sec10.9"></a><section id="hl0007580"><a id="sec10.9.1"></a><section id="hl0007917"><a id="sec10.9.1.3"></a><a id="sectitle0450"></a><h3 id="hl0007919"><span class="section-label">7.9.1.3</span>&nbsp;Brugada Syndrome</h3><div id="undtbl35" class="table"><div class="inline-table-caption">Recommendations for Brugada Syndrome</div><div class="inline-table-caption">References that support the recommendations are summarized in <a id="hl0007926" href="http://jaccjacc.acc.org/Clinical_Document/2017_VASCD_Data_Supplement.pdf" target="_blank">Online Data Supplement 42</a> and Systematic Review Report. </div><div><table id="hl0007927"><thead><tr><th id="hl0007933" scope="col" class="table-align-"  >COR</th><th id="hl0007934" scope="col" class="table-align-"  >LOE</th><th id="hl0007935" scope="col" class="table-align-"  >Recommendations</th></tr></thead><tbody><tr><td id="hl0007938" class="table-align-"  ><b>I</b></td><td id="hl0007940" class="table-align-"  ><b>B-NR</b></td><td id="hl0007942" class="table-align-"  ><ul id="hl0007943"><li id="hl0007944"><span class="list-item-label"></span><p id="hl0007947"><b>In asymptomatic patients with only inducible type 1 Brugada electrocardiographic pattern, observation without therapy is recommended.</b></p></li></ul></td></tr><tr><td id="hl0007950" class="table-align-"  ><b>I</b></td><td id="hl0007952" class="table-align-"  ><b>B-NR</b></td><td id="hl0007954" class="table-align-"  ><ul id="hl0007955"><li id="hl0007956"><span class="list-item-label"></span><p id="hl0007959"><b>In patients with Brugada syndrome with spontaneous type 1 Brugada electrocardiographic pattern and cardiac arrest, sustained VA or a recent history of syncope presumed due to VA, an ICD is recommended if meaningful survival of greater than 1 year is expected</b><a class="inline-reference" href="#bib856"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib858"><b>[2]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0007965" class="table-align-"  ><b>I</b></td><td id="hl0007967" class="table-align-"  ><b>B-NR</b></td><td id="hl0007969" class="table-align-"  ><ul id="hl0007970"><li id="hl0007971"><span class="list-item-label"></span><p id="hl0007974"><b>In patients with Brugada syndrome experiencing recurrent ICD shocks for polymorphic VT, intensification of therapy with quinidine or catheter ablation is recommended</b><a class="inline-reference" href="#bib859"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib860"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib861"><b>[3]</b></a>,&nbsp;<a class="inline-reference" href="#bib862"><b>[4]</b></a>,&nbsp;<a class="inline-reference" href="#bib863"><b>[5]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0007980" class="table-align-"  ><b>I</b></td><td id="hl0007982" class="table-align-"  ><b>B-NR</b></td><td id="hl0007984" class="table-align-"  ><ul id="hl0007985"><li id="hl0007986"><span class="list-item-label"></span><p id="hl0007989"><b>In patients with spontaneous type 1 Brugada electrocardiographic pattern and symptomatic VA who either are not candidates for or decline an ICD, quinidine or catheter ablation is recommended</b><a class="inline-reference" href="#bib859"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib861"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib862"><b>[3]</b></a>,&nbsp;<a class="inline-reference" href="#bib863"><b>[4]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0007995" class="table-align-"  ><b>IIa</b></td><td id="hl0007997" class="table-align-"  ><b>B-NR</b></td><td id="hl0007999" class="table-align-"  ><ul id="hl0008000"><li id="hl0008001"><span class="list-item-label"></span><p id="hl0008004"><b>In patients with suspected Brugada syndrome in the absence of a spontaneous type 1 Brugada electrocardiographic pattern, a pharmacological challenge using a sodium channel blocker can be useful for diagnosis</b><a class="inline-reference" href="#bib864"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib865"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib866"><b>[3]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0008010" class="table-align-"  ><b>IIb</b></td><td id="hl0008012" class="table-align-"  ><b>B-NR</b><sup>SR</sup></td><td id="hl0008015" class="table-align-"  ><ul id="hl0008016"><li id="hl0008017"><span class="list-item-label"></span><p id="hl0008020"><b>In patients with asymptomatic Brugada syndrome and a spontaneous type 1 Brugada electrocardiographic pattern, an electrophysiological study with programmed ventricular stimulation using single and double extrastimuli may be considered for further risk stratification</b><a class="inline-reference" href="#bib853"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib858"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib865"><b>[3]</b></a>,&nbsp;<a class="inline-reference" href="#bib867"><b>[4]</b></a>,&nbsp;<a class="inline-reference" href="#bib868"><b>[5]</b></a>,&nbsp;<a class="inline-reference" href="#bib869"><b>[6]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0008026" class="table-align-"  ><b>IIb</b></td><td id="hl0008028" class="table-align-"  ><b>C-EO</b></td><td id="hl0008030" class="table-align-"  ><ul id="hl0008031"><li id="hl0008032"><span class="list-item-label"></span><p id="hl0008035"><b>In patients with suspected or established Brugada syndrome, genetic counseling and genetic testing may be useful to facilitate cascade screening of relatives</b><a class="inline-reference" href="#bib870"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib871"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib872"><b>[3]</b></a><b>.</b></p></li></ul></td></tr></tbody></table></div><div class="inline-table-caption">SR indicated systematic review.</div></div><p id="hl0008042"><i>and</i>. </p><div class="inline-image figure" id="fig14"><figure><figcaption class="inline-image-label">Figure 14</figcaption><img src="//" alt="" data-eid="1-s2.0-S0735109717413064" data-locator="gr14" data-attachment-filename="07351097/S0735109717X00442/S0735109717413064/gr14-t.gif" /><div class="caption-holder"><div class="inline-image-caption">Prevention of SCD in Patients With Brugada Syndrome</div><div class="inline-image-caption">Colors correspond to Class of Recommendation in . See  for discussion. *ICD candidacy as determined by functional status, life expectancy or patient preference. 1° indicates primary; ECG, electrocardiogram; EP, electrophysiological; ICD implantable cardioverter-defibrillator; SCD, sudden cardiac death; VT, ventricular tachycardia; and VF, ventricular fibrillation. </div></div></figure></div><div class="inline-image figure" id="fig15"><figure><figcaption class="inline-image-label">Figure 15</figcaption><img src="//" alt="" data-eid="1-s2.0-S0735109717413064" data-locator="gr15" data-attachment-filename="07351097/S0735109717X00442/S0735109717413064/gr15-t.gif" /><div class="caption-holder"><div class="inline-image-caption">Brugada Syndrome</div></div></figure></div><p id="hl0008050"><b>Synopsis</b></p><p id="hl0008052">Refer to the “Systematic Review for the 2017 ACC/AHA/HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death” for the complete systematic evidence review for additional data and analyses <a class="inline-reference" href="#bib867">(S7.9.1.3-15)</a>. The results from the question “For asymptomatic patients with Brugada syndrome, what is the association between an abnormal EP study and SCD and other arrhythmia endpoints? (Part 1)” and the writing committee’s review of the totality of the literature were used to frame decision-making. Recommendations that are based on a body of evidence that includes the systematic review conducted by the ERC are denoted by the superscript SR (e.g., LOE: B-R <sup>SR</sup>). </p><p id="hl0008055">Factors identified as potential triggers of VF and SCA in Brugada syndrome include some psychotropic medications, and anesthetic agents, cocaine, excessive alcohol intake, and fever (<a id="hl0008056" href="http://www.brugadadrugs.org" target="_blank">www.brugadadrugs.org</a>) <a class="inline-reference" href="#bib873">[1]</a>,&nbsp;<a class="inline-reference" href="#bib874">[2]</a>. These agents should be avoided, and fever warrants early and aggressive measures to reduce temperature <a class="inline-reference" href="#bib875">(S7.9.1.3-23)</a>. </p><p id="hl0008059"><b>Recommendation-Specific Supportive Text</b></p><ul id="hl0008061"><li id="hl0008062"><span class="list-item-label">1.</span><p id="hl0008064">The risk of major adverse cardiac events in asymptomatic patients without spontaneous type 1 electrocardiographic changes of Brugada syndrome ( ), or with only medication-induced electrocardiographic changes, is low <a class="inline-reference" href="#bib853">[1]</a>,&nbsp;<a class="inline-reference" href="#bib854">[2]</a>,&nbsp;<a class="inline-reference" href="#bib855">[3]</a>,&nbsp;<a class="inline-reference" href="#bib856">[4]</a>,&nbsp;<a class="inline-reference" href="#bib857">[5]</a>. A positive family history of Brugada syndrome or SCA is not a significant predictor of adverse events in Brugada syndrome <a class="inline-reference" href="#bib853">[1]</a>,&nbsp;<a class="inline-reference" href="#bib854">[2]</a>,&nbsp;<a class="inline-reference" href="#bib856">[3]</a>,&nbsp;<a class="inline-reference" href="#bib857">[4]</a>. Implantation of an ICD in an asymptomatic patient without a spontaneous type 1 Brugada electrocardiographic has not been shown to confer any benefit. </p></li><li id="hl0008068"><span class="list-item-label">2.</span><p id="hl0008070">Brugada syndrome is characterized by coved ST elevation in leads V1 or V2 positioned in the second, third, or fourth intercostal space either spontaneously or induced by administration of a sodium channel–blocking drug in the absence of other causes of ST elevation <a class="inline-reference" href="#bib876">(S7.9.1.3-24)</a> and negative T waves in the right precordial leads, and is associated with syncope or SCA due to VF, predominantly in young males, although it has been reported in all age groups. The type 1 Brugada ECG with coved ST elevation in right precordial leads may be present spontaneously, during fever or vagotonic states, or after medication challenge with sodium channel blockers. QRS complex fractionation is seen in a minority of patients. Patients with spontaneous coved type ST elevation and a history of syncope or prior SCA are at the highest risk for potentially lethal VA. ICD implantation has been shown to reduce mortality in symptomatic patients with Brugada syndrome <a class="inline-reference" href="#bib877">[1]</a>,&nbsp;<a class="inline-reference" href="#bib878">[2]</a>. </p></li><li id="hl0008073"><span class="list-item-label">3.</span><p id="hl0008075">Ablation of abnormal areas of epicardial late activation in the RV can suppress recurrent VA as shown in a small number of patients <a class="inline-reference" href="#bib860">[1]</a>,&nbsp;<a class="inline-reference" href="#bib861">[2]</a>,&nbsp;<a class="inline-reference" href="#bib863">[3]</a>,&nbsp;<a class="inline-reference" href="#bib879">[4]</a>. In these reports, the spontaneous type 1 Brugada pattern on ECG may be eliminated in &gt;75% of patients, and recurrences of VT/VF are markedly reduced <a class="inline-reference" href="#bib861">[1]</a>,&nbsp;<a class="inline-reference" href="#bib862">[2]</a>,&nbsp;<a class="inline-reference" href="#bib863">[3]</a>. Experience and follow-up after ablation are limited, and an ICD for patients who have had syncope or SCA is recommended. A series of patients with Brugada syndrome treated with quinidine had no deaths during a mean follow-up of over 9 years, although adverse effects of quinidine were reported in 38% of patients, these authors felt that quinidine could be used as an alternative to the ICD in selected patients <a class="inline-reference" href="#bib859">(S7.9.1.3-7)</a>. </p></li><li id="hl0008079"><span class="list-item-label">4.</span><p id="hl0008081">Observational studies show that quinidine can suppress VF storm in patients with Brugada syndrome, and a low risk of arrhythmia was observed in a long-term observational study (681). No patient treated with quinidine experienced SCD. Adverse effects of quinidine occur in up to 37% of patients. Catheter ablation targeting the epicardial right ventricular areas of abnormality has also been shown to reduce recurrent VF episodes and normalize the ECG (682, 684, 685).</p></li><li id="hl0008082"><span class="list-item-label">5.</span><p id="hl0008084">Administration of procainamide, flecainide, or ajmaline may be useful to provoke type 1 ST elevation in patients suspected to have Brugada syndrome as a cause of symptoms but who do not have a type 1 electrocardiographic pattern at baseline. Medication challenge should be terminated with the development of VA, marked QRS widening, or type 1 Brugada electrocardiographic pattern <a class="inline-reference" href="#bib866">[1]</a>,&nbsp;<a class="inline-reference" href="#bib880">[2]</a>. The use of high electrocardiographic electrode positioning in the second and third interspaces for electrocardiographic recording improves detection of a type 1 Brugada ECG <a class="inline-reference" href="#bib881">(S7.9.1.3-29)</a>. Asymptomatic patients with a family history of Brugada syndrome may be offered sodium channel blocker challenge for diagnostic evaluation, although a positive test does not require chronic therapy due to a low risk in this setting <a class="inline-reference" href="#bib864">(S7.9.1.3-12)</a>. In asymptomatic patients with type 1 Brugada electrocardiographic findings, medication challenge does not offer additional diagnostic value. </p></li><li id="hl0008088"><span class="list-item-label">6.</span><p id="hl0008090">Polymorphic VT/VF induced by programmed stimulation has been associated with an increased risk of VA in some patients with spontaneous type 1 Brugada ECG <a class="inline-reference" href="#bib865">(S7.9.1.3-13)</a>. The specificity of programmed stimulation for assessing risk decreases with the inclusion of triple extrastimuli <a class="inline-reference" href="#bib858">[1]</a>,&nbsp;<a class="inline-reference" href="#bib865">[2]</a>. The value of programmed stimulation in asymptomatic patients with spontaneous type 1 Brugada ECGs has been the subject of multiple studies <a class="inline-reference" href="#bib853">[1]</a>,&nbsp;<a class="inline-reference" href="#bib854">[2]</a>,&nbsp;<a class="inline-reference" href="#bib856">[3]</a>,&nbsp;<a class="inline-reference" href="#bib857">[4]</a>. A report found that the prognostic value has decreased over time, possibly as patients with less severe phenotypes have been recognized and studied <a class="inline-reference" href="#bib853">(S7.9.1.3-1)</a>. Some experts use the results of programmed ventricular stimulation for informing shared decision-making in consideration of the ICD. In symptomatic patients with Brugada syndrome, programmed ventricular stimulation for risk stratification does not add anything to the evaluation of the patients as an ICD is warranted <a class="inline-reference" href="#bib854">[1]</a>,&nbsp;<a class="inline-reference" href="#bib856">[2]</a>,&nbsp;<a class="inline-reference" href="#bib858">[3]</a>. </p></li><li id="hl0008096"><span class="list-item-label">7.</span><p id="hl0008098">The yield of genetic testing in phenotype positive patients is approximately 20% to 30% in Brugada syndrome <a class="inline-reference" href="#bib856">[1]</a>,&nbsp;<a class="inline-reference" href="#bib868">[2]</a>,&nbsp;<a class="inline-reference" href="#bib870">[3]</a>,&nbsp;<a class="inline-reference" href="#bib871">[4]</a>,&nbsp;<a class="inline-reference" href="#bib882">[5]</a>,&nbsp;<a class="inline-reference" href="#bib883">[6]</a>. <i>SCN5A</i> variants account for most of this subset of genotype positive Brugada syndrome. However, 2% to 10% of otherwise healthy individuals host a rare variant of <i>SCN5A</i><a class="inline-reference" href="#bib872">[1]</a>,&nbsp;<a class="inline-reference" href="#bib883">[2]</a>. A negative genetic test does not exclude the diagnosis of Brugada syndrome, which is usually based on electrocardiographic and clinical characteristics. Risk stratification is based on symptoms and clinical findings <a class="inline-reference" href="#bib884">(S7.9.1.3-32)</a>; genotype status is not correlated with the risk of adverse events <a class="inline-reference" href="#bib857">[1]</a>,&nbsp;<a class="inline-reference" href="#bib870">[2]</a>,&nbsp;<a class="inline-reference" href="#bib871">[3]</a>,&nbsp;<a class="inline-reference" href="#bib885">[4]</a>. Identification of a pathogenetic mutation may help facilitate recognition of carrier status in family members, allowing for lifestyle modification and potential treatment. </p></li><li id="hl0008105"><span class="list-item-label">8.</span><p id="hl0008107">Factors identified as potential triggers of VF and SCA in Brugada syndrome include some psychotropic medications, and anesthetic agents, cocaine, excessive alcohol intake, and fever (<a id="hl0008108" href="http://www.brugadadrugs.org" target="_blank">www.brugadadrugs.org</a>) <a class="inline-reference" href="#bib873">[1]</a>,&nbsp;<a class="inline-reference" href="#bib874">[2]</a>. These agents should be avoided and fever warrants early and aggressive measures to reduce temperature <a class="inline-reference" href="#bib875">(S7.9.1.3-23)</a>. </p></li></ul></section></section></section></section>',
		errorMessage: "",
	},
	{
		results:
			'<section id="hl0006474"><a id="sec7"></a><section id="hl0008811"><a id="sec7.4"></a><section id="hl0009869"><a id="sec7.4.7"></a><a id="sectitle0465"></a><h3 id="hl0009871"><span class="section-label">4.4.7</span>&nbsp;Coronary Anomalies</h3><p id="hl0009872">Coronary abnormalities are among the most common congenital cardiovascular anomalies, surpassing in prevalence nearly all others combined. Coronary anomalies include anomalous aortic origin of a coronary artery (AAOCA), coronary fistula, and myocardial bridge. Many congenital coronary abnormalities have a benign outcome. In contrast, natural history studies of anomalous coronary artery from the PA (particularly anomalous left coronary artery from the PA) suggest poor outcome in untreated patients; similar natural history studies are lacking regarding untreated patients with AAOCA, but other evidence raises concern. See  and  for a diagnostic and treatment algorithm for AAOCA. </p><div id="tbl34" class="table"><div class="inline-table-label">Table 34</div><div class="inline-table-caption">Factors That May Relate to the Clinical Importance of AAOCA and Risk of SCD</div><div><table id="hl0002855"><tbody><tr><td id="hl0002860" class="table-align-"  >Age</td><td id="hl0002861" class="table-align-"  >AAOCA is more commonly invoked as the cause of SCD in patients &lt;35 y of age than in patients &gt;35 y of age, in whom atherosclerotic coronary disease becomes a more prevalent cause. However, death has been attributed to AAOCA in patients of all ages; there does not seem to be an age beyond which the AAOCA may not be relevant, even in the setting of atherosclerotic coronary disease and other concomitant conditions <a class="inline-reference" href="#bib816">[1]</a>,&nbsp;<a class="inline-reference" href="#bib817">[2]</a>. </td></tr><tr><td id="hl0002864" class="table-align-"  >Anatomy of coronary ostium and proximal coronary course</td><td id="hl0002865" class="table-align-"  >Slit-like/fish-mouth-shaped orifice, acute angle takeoff, intramural course, interarterial course and hypoplasia of the proximal coronary artery have all been proposed as reasons for symptoms, ischemia and SCD in patients with AAOCA. The slit-like orifice is more commonly seen in anomalous right coronary artery arising from the left sinus. Each of these anatomic findings offers a pathophysiological mechanism for intermittent ischemia, particularly at times of high cardiac output and/or increased aortic wall tension, such as during exercise <a class="inline-reference" href="#bib821">[1]</a>,&nbsp;<a class="inline-reference" href="#bib824">[2]</a>,&nbsp;<a class="inline-reference" href="#bib825">[3]</a>,&nbsp;<a class="inline-reference" href="#bib826">[4]</a>. </td></tr><tr><td id="hl0002868" class="table-align-"  >Anomalous origin</td><td id="hl0002869" class="table-align-"  >Left coronary artery arising from the right cusp is less common than the right coronary artery arising from the left cusp but is more often found in autopsy series of SCD <a class="inline-reference" href="#bib816">[1]</a>,&nbsp;<a class="inline-reference" href="#bib818">[2]</a>,&nbsp;<a class="inline-reference" href="#bib830">[3]</a>. This suggests that anomalous origin of the left coronary artery from the right cusp is more likely to cause SCD than anomalous origin of the right coronary artery from the left cusp. This may be due either to anatomic features that make anomalous aortic origin of the left coronary artery prone to coronary compromise or because a larger proportion of myocardium is supplied by the left coronary artery, or both. </td></tr><tr><td id="hl0002872" class="table-align-"  >Exercise</td><td id="hl0002873" class="table-align-"  >Autopsy series suggest a most patients die during, or in close temporal association with, exercise <a class="inline-reference" href="#bib818">[1]</a>,&nbsp;<a class="inline-reference" href="#bib819">[2]</a>,&nbsp;<a class="inline-reference" href="#bib820">[3]</a>. </td></tr><tr><td id="hl0002876" class="table-align-"  >Ischemia</td><td id="hl0002877" class="table-align-"  >Autopsy series demonstrate myocardial fibrosis in a significant number of patients whose deaths were attributed to AAOCA, particularly in patients with anomalous left coronary artery arising from the right cusp <a class="inline-reference" href="#bib820">(S4.4.7-5)</a>. Surgical series describe patients with ischemia or MI before surgical repair in the absence of other CAD, suggesting a relation of the coronary anomaly to the ischemia <a class="inline-reference" href="#bib831">(S4.4.7-16)</a>. This suggests that had perfusion imaging been obtained before SCD, ischemia would have been found in such patients <a class="inline-reference" href="#bib832">[1]</a>,&nbsp;<a class="inline-reference" href="#bib833">[2]</a>. However, other data indicate that a normal stress test does not preclude a SCD event, with the proviso that most of those studies used only stress ECG, rather than the more sensitive and specific modalities of nuclear perfusion imaging or stress echocardiography. In addition, postoperative studies have shown that ischemia may be found after surgical repair in the distribution not supplied by the abnormal coronary artery and may not persist on repeat testing <a class="inline-reference" href="#bib834">(S4.4.7-19)</a>. </td></tr><tr><td id="hl0002883" class="table-align-"  >Symptoms</td><td id="hl0002884" class="table-align-"  >In autopsy and surgical series, a significant number of patients reported cardiovascular symptoms, including before SCD events <a class="inline-reference" href="#bib819">[1]</a>,&nbsp;<a class="inline-reference" href="#bib822">[2]</a>,&nbsp;<a class="inline-reference" href="#bib823">[3]</a>,&nbsp;<a class="inline-reference" href="#bib835">[4]</a>,&nbsp;<a class="inline-reference" href="#bib836">[5]</a>. Symptoms are more commonly reported in patients in whom the left coronary artery arises from the right sinus. Surgical series have described improvement in symptoms after surgical repair <a class="inline-reference" href="#bib818">[1]</a>,&nbsp;<a class="inline-reference" href="#bib819">[2]</a>,&nbsp;<a class="inline-reference" href="#bib820">[3]</a>,&nbsp;<a class="inline-reference" href="#bib821">[4]</a>,&nbsp;<a class="inline-reference" href="#bib822">[5]</a>,&nbsp;<a class="inline-reference" href="#bib823">[6]</a>. </td></tr></tbody></table></div><div class="inline-table-caption">AAOCA indicates anomalous aortic origin of the coronary artery; CAD, coronary artery disease; ECG, electrocardiogram; MI, myocardial infarction; and SCD, sudden cardiac death.</div></div><div class="inline-image figure" id="fig5"><figure><figcaption class="inline-image-label">Figure 5</figcaption><img src="//" alt="" data-eid="1-s2.0-S0735109718368463" data-locator="gr5" data-attachment-filename="07351097/S0735109718X00187/S0735109718368463/gr5-t.gif" /><div class="caption-holder"><div class="inline-image-caption">Anomalous Aortic Origin of the Coronary Artery</div><div class="inline-image-caption">*Surgical intervention to involve unroofing or coronary revascularization for patients with concomitant fixed obstruction.</div></div></figure></div><p id="hl0009877">Assessment of the risk of SCD in patients with AAOCA and of the role of AAOCA in causing ischemia or symptoms is difficult because available data do not adequately capture the clinical spectrum of these anomalies. Autopsy series are available that help describe the anomalies found in patients who suffered SCD contrasted to other causes of death <a class="inline-reference" href="#bib816">[1]</a>,&nbsp;<a class="inline-reference" href="#bib817">[2]</a>,&nbsp;<a class="inline-reference" href="#bib818">[3]</a>,&nbsp;<a class="inline-reference" href="#bib819">[4]</a>,&nbsp;<a class="inline-reference" href="#bib820">[5]</a>. There are surgical case series that describe findings before operation, operative anatomy and postoperative course <a class="inline-reference" href="#bib817">[1]</a>,&nbsp;<a class="inline-reference" href="#bib820">[2]</a>,&nbsp;<a class="inline-reference" href="#bib821">[3]</a>,&nbsp;<a class="inline-reference" href="#bib822">[4]</a>,&nbsp;<a class="inline-reference" href="#bib823">[5]</a>. There are imaging studies describing the anatomy and potential pathophysiological abnormalities associated with AAOCA <a class="inline-reference" href="#bib822">[1]</a>,&nbsp;<a class="inline-reference" href="#bib824">[2]</a>,&nbsp;<a class="inline-reference" href="#bib825">[3]</a>,&nbsp;<a class="inline-reference" href="#bib826">[4]</a>. There are surgical series describing improvement in symptoms after operation <a class="inline-reference" href="#bib821">[1]</a>,&nbsp;<a class="inline-reference" href="#bib822">[2]</a>,&nbsp;<a class="inline-reference" href="#bib823">[3]</a>. There are surveys and registries that describe the heterogeneous management strategies applied to AAOCA <a class="inline-reference" href="#bib827">[1]</a>,&nbsp;<a class="inline-reference" href="#bib828">[2]</a>,&nbsp;<a class="inline-reference" href="#bib829">[3]</a>. What is lacking are data proving that any particular management strategy prevents SCD. As a consequence, decisions regarding whether surgery is necessary or exercise restriction or medical therapy might be beneficial are all based on synthesizing limited data and applying to an individual patient. Clinicians commonly extrapolate to assist in medical decision-making, but the consequences of being “wrong” for a young patient with AAOCA may be perceived to be greater than for many other conditions. Consequently, there is often a clinical urge to seek a reason to do something like surgical repair, because the available data do not identify clinical features that provide reassurance that a patient is at low risk of cardiovascular events. Unfortunately, evidence demonstrating that surgical repair ameliorates SCD risk, derived from large enough cohorts followed over a sufficient period of time, is not available. </p><section id="hl0009883"><a id="sec7.4.7.1"></a><a id="sectitle0470"></a><h3 id="hl0009885"><span class="section-label">4.4.7.1</span>&nbsp;Anomalous Coronary Artery Evaluation</h3><div id="undtbl46" class="table"><div class="inline-table-caption">Recommendations for Anomalous Coronary Artery Evaluation</div><div class="inline-table-caption">Referenced studies that support recommendations are summarized in <a id="hl0009892" href="http://jaccjacc.acc.org/Clinical_Document/ACHD_Guideline_ES-FT_Data_Supplements_08-02-18.pdf" target="_blank">Online Data Supplement 51</a>. </div><div><table id="hl0009893"><thead><tr><th id="hl0009899" scope="col" class="table-align-"  >COR</th><th id="hl0009900" scope="col" class="table-align-"  >LOE</th><th id="hl0009901" scope="col" class="table-align-"  >Recommendations</th></tr></thead><tbody><tr><td id="hl0009904" class="table-align-center" colspan="3" >Diagnostic</td></tr><tr><td id="hl0009906" class="table-align-"  ><b>I</b></td><td id="hl0009908" class="table-align-"  ><b>C-LD</b></td><td id="hl0009910" class="table-align-"  ><ul id="hl0009911"><li id="hl0009912"><span class="list-item-label">1.</span><p id="hl0009914"><b>Coronary angiography, using catheterization, CT, or CMR, is recommended for evaluation of anomalous coronary artery</b><a class="inline-reference" href="#bib837"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib838"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib839"><b>[3]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0009920" class="table-align-"  ><b>I</b></td><td id="hl0009922" class="table-align-"  ><b>C-LD</b></td><td id="hl0009924" class="table-align-"  ><ul id="hl0009925"><li id="hl0009926"><span class="list-item-label">2.</span><p id="hl0009928"><b>Anatomic and physiological evaluation should be performed in patients with anomalous aortic origin of the left coronary from the right sinus and/or right coronary from the left sinus</b><a class="inline-reference" href="#bib840"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib841"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib842"><b>[3]</b></a>,&nbsp;<a class="inline-reference" href="#bib843"><b>[4]</b></a>,&nbsp;<a class="inline-reference" href="#bib844"><b>[5]</b></a>,&nbsp;<a class="inline-reference" href="#bib845"><b>[6]</b></a><b>.</b></p></li></ul></td></tr></tbody></table></div></div><p id="hl0009933"><b>Recommendation-Specific Supportive Text</b></p><ul id="hl0009935"><li id="hl0009936"><span class="list-item-label">1.</span><p id="hl0009938">CTA, CMR, and catheterization can all delineate the proximal course of the coronary artery and relationship to other structures. CTA is generally preferred because it has superior spatial and temporal resolution, although CMR may also provide adequate delineation of the relationship of the coronary artery to the aorta, PA and other structures, including whether the proximal course appears to be intramural. Coronary angiography by catheterization can be helpful when there is concern about stenosis in the coronary artery or when concomitant hemodynamic evaluation for shunt assessment or intravascular ultrasonography/flow evaluation is needed.</p></li><li id="hl0009939"><span class="list-item-label">2.</span><p id="hl0009941">Assessment of AAOCA is enhanced when the precise anatomy and physiological impact of the coronary artery anomaly are understood. As described in , the specific anomalous origin, anatomy of the orifice and proximal vessel and presence of ischemia may all influence the clinical course and thus the management options. Understanding these issues as precisely as possible will better inform clinical decisions. </p></li></ul></section><section id="hl0009943"><a id="sec7.4.7.2"></a><a id="sectitle0475"></a><h3 id="hl0009945"><span class="section-label">4.4.7.2</span>&nbsp;Anomalous Aortic Origin of Coronary Artery</h3><div id="undtbl47" class="table"><div class="inline-table-caption">Recommendations for Anomalous Aortic Origin of Coronary Artery</div><div class="inline-table-caption">Referenced studies that support recommendations are summarized in <a id="hl0009952" href="http://jaccjacc.acc.org/Clinical_Document/ACHD_Guideline_ES-FT_Data_Supplements_08-02-18.pdf" target="_blank">Online Data Supplement 51</a>. </div><div><table id="hl0009953"><thead><tr><th id="hl0009959" scope="col" class="table-align-"  >COR</th><th id="hl0009960" scope="col" class="table-align-"  >LOE</th><th id="hl0009961" scope="col" class="table-align-"  >Recommendations</th></tr></thead><tbody><tr><td id="hl0009964" class="table-align-center" colspan="3" >Therapeutic</td></tr><tr><td id="hl0009966" class="table-align-"  ><b>I</b></td><td id="hl0009968" class="table-align-"  ><b>B-NR</b></td><td id="hl0009970" class="table-align-"  ><ul id="hl0009971"><li id="hl0009972"><span class="list-item-label">1.</span><p id="hl0009974"><b>Surgery is recommended for AAOCA from the left sinus or AAOCA from the right sinus for symptoms or diagnostic evidence consistent with coronary ischemia attributable to the anomalous coronary artery</b><a class="inline-reference" href="#bib846"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib847"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib848"><b>[3]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0009980" class="table-align-"  ><b>IIa</b></td><td id="hl0009982" class="table-align-"  ><b>C-LD</b></td><td id="hl0009984" class="table-align-"  ><ul id="hl0009985"><li id="hl0009986"><span class="list-item-label">2.</span><p id="hl0009988"><b>Surgery is reasonable for anomalous aortic origin of the left coronary artery from the right sinus in the absence of symptoms or ischemia</b><a class="inline-reference" href="#bib849"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib850"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib851"><b>[3]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0009994" class="table-align-"  ><b>IIa</b></td><td id="hl0009996" class="table-align-"  ><b>C-EO</b></td><td id="hl0009998" class="table-align-"  ><ul id="hl0009999"><li id="hl0010000"><span class="list-item-label">3.</span><p id="hl0010002"><b>Surgery for AAOCA is reasonable in the setting of ventricular arrhythmias.</b></p></li></ul></td></tr><tr><td id="hl0010005" class="table-align-"  ><b>IIb</b></td><td id="hl0010007" class="table-align-"  ><b>B-NR</b></td><td id="hl0010009" class="table-align-"  ><ul id="hl0010010"><li id="hl0010011"><span class="list-item-label">4.</span><p id="hl0010013"><b>Surgery or continued observation may be reasonable for asymptomatic patients with an anomalous left coronary artery arising from the right sinus or right coronary artery arising from the left sinus without ischemia or anatomic or physiological evaluation suggesting potential for compromise of coronary perfusion (e.g., intramural course, fish-mouth-shaped orifice, acute angle)</b><a class="inline-reference" href="#bib849"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib850"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib851"><b>[3]</b></a><b>.</b></p></li></ul></td></tr></tbody></table></div></div><p id="hl0010018"><b>Recommendation-Specific Supportive Text</b></p><ul id="hl0010020"><li id="hl0010021"><span class="list-item-label">1.</span><p id="hl0010023">In patients with symptoms related to AAOCA, repair of the anomaly should alleviate symptoms. In autopsy and surgical series, cardiac symptoms are more common in patients with a left coronary artery arising from the right coronary cusp. In autopsy studies of patients who died because of an anomalous coronary artery, fibrosis is a common finding, suggesting that ischemia preceded the terminal event. However, there are patients in whom a SCD event occurred despite normal stress ECG, and consequently absence of ischemia is not reassuring. Autopsy series show that many patients whose death is attributed to anomalous coronary arteries are young, thus management of patients should take age into account, with heightened concern about the risk of sudden death in younger patients <a class="inline-reference" href="#bib852">[1]</a>,&nbsp;<a class="inline-reference" href="#bib853">[2]</a>,&nbsp;<a class="inline-reference" href="#bib854">[3]</a>. </p></li><li id="hl0010025"><span class="list-item-label">2.</span><p id="hl0010027">Anomalous left coronary from the right sinus is less common than anomalous right coronary from the left sinus <a class="inline-reference" href="#bib855">(S4.4.7.2-10)</a>, but anomalous left coronary artery from the right is more commonly found in autopsy series of athletes and military recruits who had nontraumatic death than right coronary from the left sinus <a class="inline-reference" href="#bib846">[1]</a>,&nbsp;<a class="inline-reference" href="#bib856">[2]</a>,&nbsp;<a class="inline-reference" href="#bib857">[3]</a>,&nbsp;<a class="inline-reference" href="#bib858">[4]</a>. The overrepresentation of the anomalous left coronary from the right sinus suggests a higher risk of SCD, particular at extremes of exertion and in patients &lt;35 years of age. </p><p id="hl0010030">There are some anatomic features that are thought to be associated with increased risk of compromise of coronary flow and/or SCD, including a fish-mouth-shaped or slit-like orifice, or intramural course <a class="inline-reference" href="#bib859">(S4.4.7.2-14)</a>, although the slit-like orifice is more commonly encountered in a right coronary arising from the left cusp. It is difficult to quantitate the absolute risk of SCD associated with anomalous aortic origin of the left coronary from the right sinus, and data demonstrating that surgery ameliorates the SCD risk have not been published. Until studies suggest otherwise, limited data and expert consensus suggest that it is reasonable that adults with this malformation should undergo surgical unroofing unless there are extenuating circumstances that would make surgery high risk. </p></li><li id="hl0010032"><span class="list-item-label">3.</span><p id="hl0010034">In patients with ventricular arrhythmias presumed related to ischemia caused by anomalous origin of a coronary artery, repair is an option to alleviate the ischemia and presumably mitigate the recurrence of ventricular arrhythmias. However, care should be individualized, as there may be other factors (e.g., CAD, cardiomyopathy, residual ischemia) contributing to ventricular arrhythmias that warrant continued vigilance and additional therapy.</p></li><li id="hl0010035"><span class="list-item-label">4.</span><p id="hl0010037">Anomalous aortic origin of the right coronary from the left sinus is more common than anomalous aortic origin of the left coronary from the right sinus. The risk of SCD with the former malformation is difficult to quantitate. There is some physiological rationale to believe that asymptomatic patients without evidence of compromised blood flow would benefit from unroofing, but there are not data to demonstrate that surgical interventions alter the risk of SCD. Thus, watchful waiting may be an appropriate course as well, particularly for a patient with an anomalous right coronary arising from the left sinus.</p></li></ul></section><section id="hl0010038"><a id="sec7.4.7.3"></a><a id="sectitle0480"></a><h3 id="hl0010040"><span class="section-label">4.4.7.3</span>&nbsp;Anomalous Coronary Artery Arising From the PA</h3><div id="undtbl48" class="table"><div class="inline-table-caption">Recommendations for Anomalous Coronary Artery Arising From the PA</div><div class="inline-table-caption">Referenced studies that support recommendations are summarized in <a id="hl0010047" href="http://jaccjacc.acc.org/Clinical_Document/ACHD_Guideline_ES-FT_Data_Supplements_08-02-18.pdf" target="_blank">Online Data Supplement 51</a>. </div><div><table id="hl0010048"><thead><tr><th id="hl0010054" scope="col" class="table-align-"  >COR</th><th id="hl0010055" scope="col" class="table-align-"  >LOE</th><th id="hl0010056" scope="col" class="table-align-"  >Recommendations</th></tr></thead><tbody><tr><td id="hl0010059" class="table-align-center" colspan="3" >Therapeutic</td></tr><tr><td id="hl0010061" class="table-align-"  ><b>I</b></td><td id="hl0010063" class="table-align-"  ><b>B-NR</b></td><td id="hl0010065" class="table-align-"  ><ul id="hl0010066"><li id="hl0010067"><span class="list-item-label">1.</span><p id="hl0010069"><b>Surgery is recommended for anomalous left coronary artery from the PA</b><a class="inline-reference" href="#bib860"><b>[1]</b></a>,&nbsp;<a class="inline-reference" href="#bib861"><b>[2]</b></a>,&nbsp;<a class="inline-reference" href="#bib862"><b>[3]</b></a>,&nbsp;<a class="inline-reference" href="#bib863"><b>[4]</b></a>,&nbsp;<a class="inline-reference" href="#bib864"><b>[5]</b></a>,&nbsp;<a class="inline-reference" href="#bib865"><b>[6]</b></a>,&nbsp;<a class="inline-reference" href="#bib866"><b>[7]</b></a><b>.</b></p></li></ul></td></tr><tr><td id="hl0010075" class="table-align-"  ><b>I</b></td><td id="hl0010077" class="table-align-"  ><b>C-EO</b></td><td id="hl0010079" class="table-align-"  ><ul id="hl0010080"><li id="hl0010081"><span class="list-item-label">2.</span><p id="hl0010083"><b>In a symptomatic adult with anomalous right coronary artery from the PA with symptoms attributed to the anomalous coronary, surgery is recommended.</b></p></li></ul></td></tr><tr><td id="hl0010086" class="table-align-"  ><b>IIa</b></td><td id="hl0010088" class="table-align-"  ><b>C-EO</b></td><td id="hl0010090" class="table-align-"  ><ul id="hl0010091"><li id="hl0010092"><span class="list-item-label">3.</span><p id="hl0010094"><b>Surgery for anomalous right coronary artery from the PA is reasonable in an asymptomatic adult with ventricular dysfunction or with myocardial ischemia attributed to anomalous right coronary artery from the PA.</b></p></li></ul></td></tr></tbody></table></div></div><p id="hl0010096"><b>Recommendation-Specific Supportive Text</b></p><ul id="hl0010098"><li id="hl0010099"><span class="list-item-label">1.</span><p id="hl0010101">Surgery can include reimplantation of the left coronary artery directly into the aorta with or without an interposition graft. Ligation or closure of the left coronary artery at the level of the PA with coronary artery bypass grafting can also be performed, usually using the left internal mammary artery anastomosed to the left anterior descending.</p></li><li id="hl0010102"><span class="list-item-label">2.</span><p id="hl0010104">Surgery can include reimplantation of the right coronary artery directly into the aorta with or without an interposition graft. Ligation or closure of the right coronary artery at the level of the PA with coronary artery bypass grafting can also be performed, usually using the right internal mammary artery anastomosed to the right coronary or posterior descending coronary artery.</p></li><li id="hl0010105"><span class="list-item-label">3.</span><p id="hl0010107">Surgery to alleviate ischemia or ventricular dysfunction is reasonable if the anomalous coronary artery is thought to be the cause. Surgery can include reimplantation of the right coronary artery directly into the aorta with or without an interposition graft. Ligation or closure of the right coronary artery at the level of the PA with coronary artery bypass grafting can also be performed, usually using the right internal mammary artery anastomosed to the right coronary or posterior descending coronary artery.</p></li></ul></section></section></section></section>',
		errorMessage: "",
	},
	{
		results:
			'<div id="undtbl55" class="table"><div><table id="hl0001932"><thead><tr><th id="hl0001945" scope="col" class="table-align-"  >Reviewer</th><th id="hl0001946" scope="col" class="table-align-"  >Representation</th><th id="hl0001947" scope="col" class="table-align-"  >Employment</th><th id="hl0001948" scope="col" class="table-align-"  >Consultant</th><th id="hl0001949" scope="col" class="table-align-"  >Speakers Bureau</th><th id="hl0001950" scope="col" class="table-align-"  >Ownership/Partnership/Principal</th><th id="hl0001951" scope="col" class="table-align-"  >Personal Research</th><th id="hl0001952" scope="col" class="table-align-"  >Institutional, Organizational, or Other Financial Benefit</th><th id="hl0001953" scope="col" class="table-align-"  >Salary</th><th id="hl0001954" scope="col" class="table-align-"  >Expert Witness</th></tr></thead><tbody><tr><td id="hl0001957" class="table-align-"  >Alfred E. Buxton</td><td id="hl0001958" class="table-align-"  >Content Reviewer</td><td id="hl0001959" class="table-align-"  >Professor of Medicine—Harvard Medical School—Beth Israel Deaconess Medical Center</td><td id="hl0001960" class="table-align-"  >None</td><td id="hl0001961" class="table-align-"  >None</td><td id="hl0001962" class="table-align-"  >None</td><td id="hl0001963" class="table-align-"  ><ul id="hl0001964"><li id="hl0001965"><span class="list-item-label">▪</span><p id="hl0001967">NHLBI (DSMB) <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li></ul></td><td id="hl0001969" class="table-align-"  ><ul id="hl0001970"><li id="hl0001971"><span class="list-item-label">▪</span><p id="hl0001973">Medtronic <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0001975"><span class="list-item-label">▪</span><p id="hl0001977">Biosense Webster <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li></ul></td><td id="hl0001979" class="table-align-"  >None</td><td id="hl0001980" class="table-align-"  >None</td></tr><tr><td id="hl0001982" class="table-align-"  >Andrew E. Epstein</td><td id="hl0001983" class="table-align-"  >Content Reviewer</td><td id="hl0001984" class="table-align-"  >Professor of Medicine—Cardiovascular Division University of Pennsylvania—Chief of Cardiology Section—Philadelphia VA Medical Center</td><td id="hl0001985" class="table-align-"  ><ul id="hl0001986"><li id="hl0001987"><span class="list-item-label">▪</span><p id="hl0001989">Zoll <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0001992" class="table-align-"  >None</td><td id="hl0001993" class="table-align-"  >None</td><td id="hl0001994" class="table-align-"  ><ul id="hl0001995"><li id="hl0001996"><span class="list-item-label">▪</span><p id="hl0001998">Biotronik <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002001"><span class="list-item-label">▪</span><p id="hl0002003">Boston Scientific <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002006"><span class="list-item-label">▪</span><p id="hl0002008">Boston Scientific (DSMB) <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002011"><span class="list-item-label">▪</span><p id="hl0002013">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002016"><span class="list-item-label">▪</span><p id="hl0002018">Medtronic (DSMB)</p></li><li id="hl0002019"><span class="list-item-label">▪</span><p id="hl0002021">St Jude Medical/Abbott <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002024"><span class="list-item-label">▪</span><p id="hl0002026">St Jude Medical/Abbott (DSMB) <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002029" class="table-align-"  >None</td><td id="hl0002030" class="table-align-"  >None</td><td id="hl0002031" class="table-align-"  ><ul id="hl0002032"><li id="hl0002033"><span class="list-item-label">▪</span><p id="hl0002035">Defendant, Amiodarone pulmonary toxicity, 2016</p></li><li id="hl0002036"><span class="list-item-label">▪</span><p id="hl0002038">Defendant, Appropriateness of pacemaker implantation, 2016 <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td></tr><tr><td id="hl0002042" class="table-align-"  >Brian Olshansky</td><td id="hl0002043" class="table-align-"  >Content Reviewer</td><td id="hl0002044" class="table-align-"  >Adjunct Professor of Medicine—Des Moines University—Professor Emeritus—University of Iowa</td><td id="hl0002045" class="table-align-"  ><ul id="hl0002046"><li id="hl0002047"><span class="list-item-label">▪</span><p id="hl0002049">Boehringer Ingleheim</p></li><li id="hl0002050"><span class="list-item-label">▪</span><p id="hl0002052">Lundbeck Inc <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002055"><span class="list-item-label">▪</span><p id="hl0002057">On-X/Cryolife</p></li></ul></td><td id="hl0002058" class="table-align-"  ><ul id="hl0002059"><li id="hl0002060"><span class="list-item-label">▪</span><p id="hl0002062">Lundbeck Inc <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002065"><span class="list-item-label">▪</span><p id="hl0002067">On-X/Cryolife</p></li></ul></td><td id="hl0002068" class="table-align-"  >None</td><td id="hl0002069" class="table-align-"  ><ul id="hl0002070"><li id="hl0002071"><span class="list-item-label">▪</span><p id="hl0002073">Amarin (DSMB) <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002076" class="table-align-"  >None</td><td id="hl0002077" class="table-align-"  >None</td><td id="hl0002078" class="table-align-"  ><ul id="hl0002079"><li id="hl0002080"><span class="list-item-label">▪</span><p id="hl0002082">Plaintiff, Long QT sudden death, 2017</p></li></ul></td></tr><tr><td id="hl0002084" class="table-align-"  >Bulent Gorenek</td><td id="hl0002085" class="table-align-"  >Content Reviewer—ACC EP Council</td><td id="hl0002086" class="table-align-"  ></td><td id="hl0002087" class="table-align-"  >None</td><td id="hl0002088" class="table-align-"  >None</td><td id="hl0002089" class="table-align-"  >None</td><td id="hl0002090" class="table-align-"  >None</td><td id="hl0002091" class="table-align-"  >None</td><td id="hl0002092" class="table-align-"  >None</td><td id="hl0002093" class="table-align-"  >None</td></tr><tr><td id="hl0002095" class="table-align-"  >Charles I. Berul</td><td id="hl0002096" class="table-align-"  >Content Reviewer</td><td id="hl0002097" class="table-align-"  >Division Chief of Pediatric Cardiology—Children&#x27;s National Medical Center</td><td id="hl0002098" class="table-align-"  >None</td><td id="hl0002099" class="table-align-"  >None</td><td id="hl0002100" class="table-align-"  >None</td><td id="hl0002101" class="table-align-"  >None</td><td id="hl0002102" class="table-align-"  ><ul id="hl0002103"><li id="hl0002104"><span class="list-item-label">▪</span><p id="hl0002106">Circulation <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002109" class="table-align-"  >None</td><td id="hl0002110" class="table-align-"  >None</td></tr><tr><td id="hl0002112" class="table-align-"  >Darren Sudman</td><td id="hl0002113" class="table-align-"  >Content Reviewer</td><td id="hl0002114" class="table-align-"  >Executive Director—Simon’s Fund</td><td id="hl0002115" class="table-align-"  >None</td><td id="hl0002116" class="table-align-"  >None</td><td id="hl0002117" class="table-align-"  >None</td><td id="hl0002118" class="table-align-"  >None</td><td id="hl0002119" class="table-align-"  >None</td><td id="hl0002120" class="table-align-"  >None</td><td id="hl0002121" class="table-align-"  >None</td></tr><tr><td id="hl0002123" class="table-align-"  >George J. Klein</td><td id="hl0002124" class="table-align-"  >Content Reviewer</td><td id="hl0002125" class="table-align-"  >Chief of Cardiology—London Health Sciences Center</td><td id="hl0002126" class="table-align-"  ><ul id="hl0002127"><li id="hl0002128"><span class="list-item-label">▪</span><p id="hl0002130">Biotronik</p></li><li id="hl0002131"><span class="list-item-label">▪</span><p id="hl0002133">Boston Scientific</p></li><li id="hl0002134"><span class="list-item-label">▪</span><p id="hl0002136">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002139" class="table-align-"  >None</td><td id="hl0002140" class="table-align-"  >None</td><td id="hl0002141" class="table-align-"  >None</td><td id="hl0002142" class="table-align-"  >None</td><td id="hl0002143" class="table-align-"  >None</td><td id="hl0002144" class="table-align-"  >None</td></tr><tr><td id="hl0002146" class="table-align-"  >Glenn N. Levine</td><td id="hl0002147" class="table-align-"  >Content Reviewer—ACC/AHA Task Force on Clinical Practice Guidelines</td><td id="hl0002148" class="table-align-"  >Professor of Medicine—Baylor College of Medicine <br>Director—Cardiac Care Unit—Michael E. DeBakey Medical Center </td><td id="hl0002150" class="table-align-"  >None</td><td id="hl0002151" class="table-align-"  >None</td><td id="hl0002152" class="table-align-"  >None</td><td id="hl0002153" class="table-align-"  >None</td><td id="hl0002154" class="table-align-"  >None</td><td id="hl0002155" class="table-align-"  >None</td><td id="hl0002156" class="table-align-"  ><ul id="hl0002157"><li id="hl0002158"><span class="list-item-label">▪</span><p id="hl0002160">Defendant, Catheterization Laboratory Procedure, 2016</p></li><li id="hl0002161"><span class="list-item-label">▪</span><p id="hl0002163">Defendant, Out of hospital death, 2016</p></li></ul></td></tr><tr><td id="hl0002165" class="table-align-"  >Gurusher S. Panjrath</td><td id="hl0002166" class="table-align-"  >Content Reviewer—ACC Heart Failure and Transplant Council</td><td id="hl0002167" class="table-align-"  >Director Heart Failure and Mechanical Support Program—George Washington University</td><td id="hl0002168" class="table-align-"  ><ul id="hl0002169"><li id="hl0002170"><span class="list-item-label">▪</span><p id="hl0002172">Amgen Inc. <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002175" class="table-align-"  >None</td><td id="hl0002176" class="table-align-"  >None</td><td id="hl0002177" class="table-align-"  >None</td><td id="hl0002178" class="table-align-"  ><ul id="hl0002179"><li id="hl0002180"><span class="list-item-label">▪</span><p id="hl0002182">BEAT-HF <a class="inline-reference" href="#dtbl2fnddagger">‡</a></p></li><li id="hl0002184"><span class="list-item-label">▪</span><p id="hl0002186">ENDEAVOUR <a class="inline-reference" href="#dtbl2fnddagger">‡</a></p></li></ul></td><td id="hl0002188" class="table-align-"  >None</td><td id="hl0002189" class="table-align-"  >None</td></tr><tr><td id="hl0002191" class="table-align-"  >James P. Daubert</td><td id="hl0002192" class="table-align-"  >Official Reviewer—AHA</td><td id="hl0002193" class="table-align-"  >Duke University Medical Center</td><td id="hl0002194" class="table-align-"  ><ul id="hl0002195"><li id="hl0002196"><span class="list-item-label">▪</span><p id="hl0002198">Biosense Webster</p></li><li id="hl0002199"><span class="list-item-label">▪</span><p id="hl0002201">Boston Scientific</p></li><li id="hl0002202"><span class="list-item-label">▪</span><p id="hl0002204">CardioFocus</p></li><li id="hl0002205"><span class="list-item-label">▪</span><p id="hl0002207">Gilead</p></li><li id="hl0002208"><span class="list-item-label">▪</span><p id="hl0002210">Heart Metabolics</p></li><li id="hl0002211"><span class="list-item-label">▪</span><p id="hl0002213">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002216"><span class="list-item-label">▪</span><p id="hl0002218">St. Jude Medical</p></li><li id="hl0002219"><span class="list-item-label">▪</span><p id="hl0002221">Zoll</p></li></ul></td><td id="hl0002222" class="table-align-"  >None</td><td id="hl0002223" class="table-align-"  >None</td><td id="hl0002224" class="table-align-"  ><ul id="hl0002225"><li id="hl0002226"><span class="list-item-label">▪</span><p id="hl0002228">ARCA biopharma</p></li><li id="hl0002229"><span class="list-item-label">▪</span><p id="hl0002231">Biosense Webster <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002234"><span class="list-item-label">▪</span><p id="hl0002236">Boston Scientific <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002239"><span class="list-item-label">▪</span><p id="hl0002241">Gilead <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002244"><span class="list-item-label">▪</span><p id="hl0002246">Gilead (DSMB)</p></li><li id="hl0002247"><span class="list-item-label">▪</span><p id="hl0002249">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002252"><span class="list-item-label">▪</span><p id="hl0002254">NHLBI <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002257"><span class="list-item-label">▪</span><p id="hl0002259">NHLBI (DSMB)</p></li><li id="hl0002260"><span class="list-item-label">▪</span><p id="hl0002262">Northwestern University</p></li><li id="hl0002263"><span class="list-item-label">▪</span><p id="hl0002265">St. Jude Medical (DSMB)</p></li><li id="hl0002266"><span class="list-item-label">▪</span><p id="hl0002268">VytronUS (DSMB)</p></li></ul></td><td id="hl0002269" class="table-align-"  ><ul id="hl0002270"><li id="hl0002271"><span class="list-item-label">▪</span><p id="hl0002273">Biosense <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002276"><span class="list-item-label">▪</span><p id="hl0002278">Biotronik <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002281"><span class="list-item-label">▪</span><p id="hl0002283">Boston Scientific <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002286"><span class="list-item-label">▪</span><p id="hl0002288">Gilead Sciences, Inc. <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002291"><span class="list-item-label">▪</span><p id="hl0002293">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002296"><span class="list-item-label">▪</span><p id="hl0002298">St. Jude Medical <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002301" class="table-align-"  ><ul id="hl0002302"><li id="hl0002303"><span class="list-item-label">▪</span><p id="hl0002305">ACC</p></li></ul></td><td id="hl0002306" class="table-align-"  >None</td></tr><tr><td id="hl0002308" class="table-align-"  >James Tisdale</td><td id="hl0002309" class="table-align-"  >Content Reviewer—ACC EP Council</td><td id="hl0002310" class="table-align-"  >Professor—College of Pharmacy <br>Purdue University—Adjunct Professor—School of Medicine <br>Indiana University </td><td id="hl0002313" class="table-align-"  >None</td><td id="hl0002314" class="table-align-"  >None</td><td id="hl0002315" class="table-align-"  >None</td><td id="hl0002316" class="table-align-"  ><ul id="hl0002317"><li id="hl0002318"><span class="list-item-label">▪</span><p id="hl0002320">AHA <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002323"><span class="list-item-label">▪</span><p id="hl0002325">HRS <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002328"><span class="list-item-label">▪</span><p id="hl0002330">Indiana Clinical Translational Sciences Institute/Strategic Research Initiative <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002333" class="table-align-"  ><ul id="hl0002334"><li id="hl0002335"><span class="list-item-label">▪</span><p id="hl0002337">ACC <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002339"><span class="list-item-label">▪</span><p id="hl0002341">AHA <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002343"><span class="list-item-label">▪</span><p id="hl0002345">AZCert <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002347"><span class="list-item-label">▪</span><p id="hl0002349">QT drugs list, credible meds.org <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li></ul></td><td id="hl0002351" class="table-align-"  >None</td><td id="hl0002352" class="table-align-"  ><ul id="hl0002353"><li id="hl0002354"><span class="list-item-label">▪</span><p id="hl0002356">Plaintiff, Drug-induced torsades de pointes, 2017 <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td></tr><tr><td id="hl0002360" class="table-align-"  >John L. Sapp</td><td id="hl0002361" class="table-align-"  >Official Reviewer—HRS</td><td id="hl0002362" class="table-align-"  >Interim Head—Division of Cardiology <br>QEII Health Sciences Centre—Professor of Medicine—Dalhousie University </td><td id="hl0002364" class="table-align-"  ><ul id="hl0002365"><li id="hl0002366"><span class="list-item-label">▪</span><p id="hl0002368">Biosense Webster <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002371"><span class="list-item-label">▪</span><p id="hl0002373">Medtronic</p></li><li id="hl0002374"><span class="list-item-label">▪</span><p id="hl0002376">St. Jude</p></li></ul></td><td id="hl0002377" class="table-align-"  >None</td><td id="hl0002378" class="table-align-"  >None</td><td id="hl0002379" class="table-align-"  ><ul id="hl0002380"><li id="hl0002381"><span class="list-item-label">▪</span><p id="hl0002383">Biosense Webster <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002386"><span class="list-item-label">▪</span><p id="hl0002388">Canadian Institute of Health Research <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002391"><span class="list-item-label">▪</span><p id="hl0002393">DSMB <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002395"><span class="list-item-label">▪</span><p id="hl0002397">Phillips healthcare <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002400"><span class="list-item-label">▪</span><p id="hl0002402">St. Jude Medical <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002405" class="table-align-"  ><ul id="hl0002406"><li id="hl0002407"><span class="list-item-label">▪</span><p id="hl0002409">ARTESiA <a class="inline-reference" href="#dtbl2fnddagger">‡</a></p></li><li id="hl0002411"><span class="list-item-label">▪</span><p id="hl0002413">Medtronic <a class="inline-reference" href="#dtbl2fnddagger">‡</a></p></li><li id="hl0002415"><span class="list-item-label">▪</span><p id="hl0002417">Optisure Registry <a class="inline-reference" href="#dtbl2fnddagger">‡</a></p></li><li id="hl0002419"><span class="list-item-label">▪</span><p id="hl0002421">St. Jude <a class="inline-reference" href="#dtbl2fnddagger">‡</a></p></li></ul></td><td id="hl0002423" class="table-align-"  >None</td><td id="hl0002424" class="table-align-"  >None</td></tr><tr><td id="hl0002426" class="table-align-"  >Joseph Edward Marine</td><td id="hl0002427" class="table-align-"  >Official Reviewer—ACC</td><td id="hl0002428" class="table-align-"  >Associate Professor of Medicine—Johns Hopkins University School of Medicine</td><td id="hl0002429" class="table-align-"  >None</td><td id="hl0002430" class="table-align-"  >None</td><td id="hl0002431" class="table-align-"  >None</td><td id="hl0002432" class="table-align-"  >None</td><td id="hl0002433" class="table-align-"  ><ul id="hl0002434"><li id="hl0002435"><span class="list-item-label">▪</span><p id="hl0002437">UpToDate</p></li></ul></td><td id="hl0002438" class="table-align-"  >None</td><td id="hl0002439" class="table-align-"  >None</td></tr><tr><td id="hl0002441" class="table-align-"  >Kathleen T. Hickey</td><td id="hl0002442" class="table-align-"  >Official Reviewer—AHA</td><td id="hl0002443" class="table-align-"  >Professor of Nursing—Columbia University Medical Center</td><td id="hl0002444" class="table-align-"  >None</td><td id="hl0002445" class="table-align-"  >None</td><td id="hl0002446" class="table-align-"  >None</td><td id="hl0002447" class="table-align-"  >None</td><td id="hl0002448" class="table-align-"  >None</td><td id="hl0002449" class="table-align-"  >None</td><td id="hl0002450" class="table-align-"  >None</td></tr><tr><td id="hl0002452" class="table-align-"  >Kenneth A. Ellenbogen</td><td id="hl0002453" class="table-align-"  >Content Reviewer</td><td id="hl0002454" class="table-align-"  >Chief of Cardiology—Virginia Commonwealth University Medical Center</td><td id="hl0002455" class="table-align-"  ><ul id="hl0002456"><li id="hl0002457"><span class="list-item-label">▪</span><p id="hl0002459">AHA</p></li><li id="hl0002460"><span class="list-item-label">▪</span><p id="hl0002462">AtriCure <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002465"><span class="list-item-label">▪</span><p id="hl0002467">Biosense Webster <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002470"><span class="list-item-label">▪</span><p id="hl0002472">Biotronik <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002475"><span class="list-item-label">▪</span><p id="hl0002477">Boston Science <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002480"><span class="list-item-label">▪</span><p id="hl0002482">Capricor</p></li><li id="hl0002483"><span class="list-item-label">▪</span><p id="hl0002485">HRS</p></li><li id="hl0002486"><span class="list-item-label">▪</span><p id="hl0002488">Janssen</p></li><li id="hl0002489"><span class="list-item-label">▪</span><p id="hl0002491">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002494"><span class="list-item-label">▪</span><p id="hl0002496">Pfizer <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002499"><span class="list-item-label">▪</span><p id="hl0002501">Sentra heart</p></li><li id="hl0002502"><span class="list-item-label">▪</span><p id="hl0002504">St. Jude Medical <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002507" class="table-align-"  >None</td><td id="hl0002508" class="table-align-"  >None</td><td id="hl0002509" class="table-align-"  ><ul id="hl0002510"><li id="hl0002511"><span class="list-item-label">▪</span><p id="hl0002513">AtriCure <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002516"><span class="list-item-label">▪</span><p id="hl0002518">Biosense Webster <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002521"><span class="list-item-label">▪</span><p id="hl0002523">Boston Science <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002526"><span class="list-item-label">▪</span><p id="hl0002528">Daiichi Sankyo</p></li><li id="hl0002529"><span class="list-item-label">▪</span><p id="hl0002531">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002534"><span class="list-item-label">▪</span><p id="hl0002536">Medtronic (DSMB) <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002539"><span class="list-item-label">▪</span><p id="hl0002541">NIH <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002544"><span class="list-item-label">▪</span><p id="hl0002546">Pfizer <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002549" class="table-align-"  ><ul id="hl0002550"><li id="hl0002551"><span class="list-item-label">▪</span><p id="hl0002553">Biosense Webster <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002556"><span class="list-item-label">▪</span><p id="hl0002558">Boston Science <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002561"><span class="list-item-label">▪</span><p id="hl0002563">Circulation <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002565"><span class="list-item-label">▪</span><p id="hl0002567">Heart Rhythm <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002569"><span class="list-item-label">▪</span><p id="hl0002571">JACC <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002573"><span class="list-item-label">▪</span><p id="hl0002575">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002578"><span class="list-item-label">▪</span><p id="hl0002580">PACE <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002582"><span class="list-item-label">▪</span><p id="hl0002584">Sanofi Aventis</p></li></ul></td><td id="hl0002585" class="table-align-"  >None</td><td id="hl0002586" class="table-align-"  >None</td></tr><tr><td id="hl0002588" class="table-align-"  >Kim K. Birtcher</td><td id="hl0002589" class="table-align-"  >Content Reviewer—ACC/AHA Task Force on Clinical Practice Guidelines</td><td id="hl0002590" class="table-align-"  >University of Houston—College of Pharmacology</td><td id="hl0002591" class="table-align-"  ><ul id="hl0002592"><li id="hl0002593"><span class="list-item-label">▪</span><p id="hl0002595">Jones and Bartlett Learning</p></li></ul></td><td id="hl0002596" class="table-align-"  >None</td><td id="hl0002597" class="table-align-"  >None</td><td id="hl0002598" class="table-align-"  >None</td><td id="hl0002599" class="table-align-"  ><ul id="hl0002600"><li id="hl0002601"><span class="list-item-label">▪</span><p id="hl0002603">Accreditation Council for Clinical Lipidology</p></li></ul></td><td id="hl0002604" class="table-align-"  ><ul id="hl0002605"><li id="hl0002606"><span class="list-item-label">▪</span><p id="hl0002608">University of Houston College of Pharmacology <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002611"><span class="list-item-label">▪</span><p id="hl0002613">Walgreens <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002616" class="table-align-"  >None</td></tr><tr><td id="hl0002618" class="table-align-"  >Kristen B. Campbell</td><td id="hl0002619" class="table-align-"  >Content Reviewer</td><td id="hl0002620" class="table-align-"  >Duke University Hospital</td><td id="hl0002621" class="table-align-"  >None</td><td id="hl0002622" class="table-align-"  >None</td><td id="hl0002623" class="table-align-"  >None</td><td id="hl0002624" class="table-align-"  >None</td><td id="hl0002625" class="table-align-"  >None</td><td id="hl0002626" class="table-align-"  >None</td><td id="hl0002627" class="table-align-"  >None</td></tr><tr><td id="hl0002629" class="table-align-"  >Kristen K. Patton</td><td id="hl0002630" class="table-align-"  >Content Reviewer</td><td id="hl0002631" class="table-align-"  >Professor of Medicine—University of Washington</td><td id="hl0002632" class="table-align-"  >None</td><td id="hl0002633" class="table-align-"  >None</td><td id="hl0002634" class="table-align-"  >None</td><td id="hl0002635" class="table-align-"  >None</td><td id="hl0002636" class="table-align-"  ><ul id="hl0002637"><li id="hl0002638"><span class="list-item-label">▪</span><p id="hl0002640">ABIM</p></li><li id="hl0002641"><span class="list-item-label">▪</span><p id="hl0002643">ACGME <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002645"><span class="list-item-label">▪</span><p id="hl0002647">AHA <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002649"><span class="list-item-label">▪</span><p id="hl0002651">FDA</p></li><li id="hl0002652"><span class="list-item-label">▪</span><p id="hl0002654">HRS <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li></ul></td><td id="hl0002656" class="table-align-"  >None</td><td id="hl0002657" class="table-align-"  >None</td></tr><tr><td id="hl0002659" class="table-align-"  >L. Brent Mitchell</td><td id="hl0002660" class="table-align-"  >Content Reviewer</td><td id="hl0002661" class="table-align-"  >Professor—Department of Cardiac Sciences—Libin Cardiovascular Institute of Alberta—University of Calgary—Alberta Health Services</td><td id="hl0002662" class="table-align-"  ><ul id="hl0002663"><li id="hl0002664"><span class="list-item-label">▪</span><p id="hl0002666">Boehringer Ingelheim <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002669"><span class="list-item-label">▪</span><p id="hl0002671">Forest Pharmaceuticals</p></li><li id="hl0002672"><span class="list-item-label">▪</span><p id="hl0002674">Guidant Canada <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002677"><span class="list-item-label">▪</span><p id="hl0002679">Medtronic Canada <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002682"><span class="list-item-label">▪</span><p id="hl0002684">Medtronic Inc <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002687"><span class="list-item-label">▪</span><p id="hl0002689">Merck</p></li><li id="hl0002690"><span class="list-item-label">▪</span><p id="hl0002692">Pfizer <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002695"><span class="list-item-label">▪</span><p id="hl0002697">Servier Canada <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002700" class="table-align-"  >None</td><td id="hl0002701" class="table-align-"  >None</td><td id="hl0002702" class="table-align-"  ><ul id="hl0002703"><li id="hl0002704"><span class="list-item-label">▪</span><p id="hl0002706">Boston Scientific <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002709" class="table-align-"  ><ul id="hl0002710"><li id="hl0002711"><span class="list-item-label">▪</span><p id="hl0002713">ARTESIA <a class="inline-reference" href="#dtbl2fnddagger">‡</a></p></li><li id="hl0002715"><span class="list-item-label">▪</span><p id="hl0002717">Health Protection Branch, Government of Canada</p></li></ul></td><td id="hl0002718" class="table-align-"  >None</td><td id="hl0002719" class="table-align-"  >None</td></tr><tr><td id="hl0002721" class="table-align-"  >Martin Borggrefe</td><td id="hl0002722" class="table-align-"  >Content Reviewer</td><td id="hl0002723" class="table-align-"  >I Medizinische KlinikKlinikum Mannheim <br>GmbHUniversitätsklinikum </td><td id="hl0002725" class="table-align-"  ><ul id="hl0002726"><li id="hl0002727"><span class="list-item-label">▪</span><p id="hl0002729">Bayer Health Care</p></li><li id="hl0002730"><span class="list-item-label">▪</span><p id="hl0002732">Boehringer Ingelheim</p></li><li id="hl0002733"><span class="list-item-label">▪</span><p id="hl0002735">Impulse Dynamics</p></li><li id="hl0002736"><span class="list-item-label">▪</span><p id="hl0002738">Sanofi Aventis</p></li><li id="hl0002739"><span class="list-item-label">▪</span><p id="hl0002741">St. Jude Medical</p></li></ul></td><td id="hl0002742" class="table-align-"  >None</td><td id="hl0002743" class="table-align-"  >None</td><td id="hl0002744" class="table-align-"  ><ul id="hl0002745"><li id="hl0002746"><span class="list-item-label">▪</span><p id="hl0002748">German Centre for Cardiovascular Research <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002751" class="table-align-"  >None</td><td id="hl0002752" class="table-align-"  >None</td><td id="hl0002753" class="table-align-"  >None</td></tr><tr><td id="hl0002755" class="table-align-"  >Mathew D. Hutchinson</td><td id="hl0002756" class="table-align-"  >Official Reviewer—HRS</td><td id="hl0002757" class="table-align-"  >Professor of Medicine—University of Arizona College of Medicine—Tucson</td><td id="hl0002758" class="table-align-"  ><ul id="hl0002759"><li id="hl0002760"><span class="list-item-label">▪</span><p id="hl0002762">St. Jude Medical</p></li></ul></td><td id="hl0002763" class="table-align-"  >None</td><td id="hl0002764" class="table-align-"  >None</td><td id="hl0002765" class="table-align-"  >None</td><td id="hl0002766" class="table-align-"  >None</td><td id="hl0002767" class="table-align-"  >None</td><td id="hl0002768" class="table-align-"  >None</td></tr><tr><td id="hl0002770" class="table-align-"  >Matthew W. Martinez</td><td id="hl0002771" class="table-align-"  >Content Reviewer—Sports and Exercise EP Council</td><td id="hl0002772" class="table-align-"  >Lehigh Valley Health Network</td><td id="hl0002773" class="table-align-"  >None</td><td id="hl0002774" class="table-align-"  >None</td><td id="hl0002775" class="table-align-"  >None</td><td id="hl0002776" class="table-align-"  >None</td><td id="hl0002777" class="table-align-"  >None</td><td id="hl0002778" class="table-align-"  >None</td><td id="hl0002779" class="table-align-"  >None</td></tr><tr><td id="hl0002781" class="table-align-"  >Melissa R. Robinson</td><td id="hl0002782" class="table-align-"  >Content Reviewer</td><td id="hl0002783" class="table-align-"  >Director—Complex Ablation Program—University of Washington</td><td id="hl0002784" class="table-align-"  ><ul id="hl0002785"><li id="hl0002786"><span class="list-item-label">▪</span><p id="hl0002788">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002791"><span class="list-item-label">▪</span><p id="hl0002793">Abbott <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002796"><span class="list-item-label">▪</span><p id="hl0002798">Boston Scientific <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002801" class="table-align-"  >None</td><td id="hl0002802" class="table-align-"  >None</td><td id="hl0002803" class="table-align-"  >None</td><td id="hl0002804" class="table-align-"  >None</td><td id="hl0002805" class="table-align-"  >None</td><td id="hl0002806" class="table-align-"  >None</td></tr><tr><td id="hl0002808" class="table-align-"  >Michael J. Silka</td><td id="hl0002809" class="table-align-"  >Content Reviewer</td><td id="hl0002810" class="table-align-"  >Children&#x27;s Hospital Los Angeles</td><td id="hl0002811" class="table-align-"  >None</td><td id="hl0002812" class="table-align-"  >None</td><td id="hl0002813" class="table-align-"  >None</td><td id="hl0002814" class="table-align-"  >None</td><td id="hl0002815" class="table-align-"  >None</td><td id="hl0002816" class="table-align-"  >None</td><td id="hl0002817" class="table-align-"  ><ul id="hl0002818"><li id="hl0002819"><span class="list-item-label">▪</span><p id="hl0002821">Defendant, ICD implantation, 2017</p></li></ul></td></tr><tr><td id="hl0002823" class="table-align-"  >Miguel A. Quinones</td><td id="hl0002824" class="table-align-"  >Content Reviewer</td><td id="hl0002825" class="table-align-"  >Methodist DeBakey Heart and Vascular Center</td><td id="hl0002826" class="table-align-"  >None</td><td id="hl0002827" class="table-align-"  >None</td><td id="hl0002828" class="table-align-"  >None</td><td id="hl0002829" class="table-align-"  >None</td><td id="hl0002830" class="table-align-"  ><ul id="hl0002831"><li id="hl0002832"><span class="list-item-label">▪</span><p id="hl0002834">Houston Methodist Hospital <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002837" class="table-align-"  >None</td><td id="hl0002838" class="table-align-"  >None</td></tr><tr><td id="hl0002840" class="table-align-"  >Mitchell T. Saltzberg</td><td id="hl0002841" class="table-align-"  >Organizational Reviewer—HFSA</td><td id="hl0002842" class="table-align-"  >Jefferson Medical College—Christiana Care Health System</td><td id="hl0002843" class="table-align-"  >None</td><td id="hl0002844" class="table-align-"  >None</td><td id="hl0002845" class="table-align-"  ><ul id="hl0002846"><li id="hl0002847"><span class="list-item-label">▪</span><p id="hl0002849">Nephroceuticals <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002852"><span class="list-item-label">▪</span><p id="hl0002854">Stem Cell Theranostics <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002857" class="table-align-"  >None</td><td id="hl0002858" class="table-align-"  >None</td><td id="hl0002859" class="table-align-"  >None</td><td id="hl0002860" class="table-align-"  >None</td></tr><tr><td id="hl0002862" class="table-align-"  >N.A. Mark Estes III</td><td id="hl0002863" class="table-align-"  >Content Reviewer</td><td id="hl0002864" class="table-align-"  >Professor of Medicine—Tufts University School of Medicine</td><td id="hl0002865" class="table-align-"  ><ul id="hl0002866"><li id="hl0002867"><span class="list-item-label">▪</span><p id="hl0002869">Boston Scientific <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002872"><span class="list-item-label">▪</span><p id="hl0002874">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002877"><span class="list-item-label">▪</span><p id="hl0002879">St. Jude Medical <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002882" class="table-align-"  >None</td><td id="hl0002883" class="table-align-"  >None</td><td id="hl0002884" class="table-align-"  ><ul id="hl0002885"><li id="hl0002886"><span class="list-item-label">▪</span><p id="hl0002888">Boston Scientific <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002891"><span class="list-item-label">▪</span><p id="hl0002893">International Board of Heart Rhythm Examiners <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0002895"><span class="list-item-label">▪</span><p id="hl0002897">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002900"><span class="list-item-label">▪</span><p id="hl0002902">St. Jude Medical <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002905" class="table-align-"  >None</td><td id="hl0002906" class="table-align-"  >None</td><td id="hl0002907" class="table-align-"  >None</td></tr><tr><td id="hl0002909" class="table-align-"  >Norma M. Keller</td><td id="hl0002910" class="table-align-"  >Official Reviewer—ACC</td><td id="hl0002911" class="table-align-"  >New York University Medical Center</td><td id="hl0002912" class="table-align-"  >None</td><td id="hl0002913" class="table-align-"  >None</td><td id="hl0002914" class="table-align-"  >None</td><td id="hl0002915" class="table-align-"  >None</td><td id="hl0002916" class="table-align-"  >None</td><td id="hl0002917" class="table-align-"  >None</td><td id="hl0002918" class="table-align-"  >None</td></tr><tr><td id="hl0002920" class="table-align-"  >Peter Leong-Sit</td><td id="hl0002921" class="table-align-"  >Content Reviewer—HRS</td><td id="hl0002922" class="table-align-"  >Associate Professor of Medicine—Western University—London Health Sciences Centre</td><td id="hl0002923" class="table-align-"  ><ul id="hl0002924"><li id="hl0002925"><span class="list-item-label">▪</span><p id="hl0002927">Medtronic Canada</p></li></ul></td><td id="hl0002928" class="table-align-"  ><ul id="hl0002929"><li id="hl0002930"><span class="list-item-label">▪</span><p id="hl0002932">Bayer Healthcare Pharmaceuticals</p></li><li id="hl0002933"><span class="list-item-label">▪</span><p id="hl0002935">Biosense Webster</p></li><li id="hl0002936"><span class="list-item-label">▪</span><p id="hl0002938">Johnson and Johnson</p></li></ul></td><td id="hl0002939" class="table-align-"  >None</td><td id="hl0002940" class="table-align-"  >None</td><td id="hl0002941" class="table-align-"  >None</td><td id="hl0002942" class="table-align-"  ><ul id="hl0002943"><li id="hl0002944"><span class="list-item-label">▪</span><p id="hl0002946">Bayer Healthcare Pharmaceuticals <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002949" class="table-align-"  >None</td></tr><tr><td id="hl0002951" class="table-align-"  >Rachel J. Lampert</td><td id="hl0002952" class="table-align-"  >Content Reviewer</td><td id="hl0002953" class="table-align-"  >Yale University School of Medicine—Section of Cardiology</td><td id="hl0002954" class="table-align-"  ><ul id="hl0002955"><li id="hl0002956"><span class="list-item-label">▪</span><p id="hl0002958">Medtronic <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002961" class="table-align-"  >None</td><td id="hl0002962" class="table-align-"  >None</td><td id="hl0002963" class="table-align-"  ><ul id="hl0002964"><li id="hl0002965"><span class="list-item-label">▪</span><p id="hl0002967">Boston Scientific <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002970"><span class="list-item-label">▪</span><p id="hl0002972">GE Medical <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002975"><span class="list-item-label">▪</span><p id="hl0002977">Medtronic, Inc. <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li><li id="hl0002980"><span class="list-item-label">▪</span><p id="hl0002982">St. Jude Medical <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0002985" class="table-align-"  >None</td><td id="hl0002986" class="table-align-"  >None</td><td id="hl0002987" class="table-align-"  >None</td></tr><tr><td id="hl0002989" class="table-align-"  >Sami Viskin</td><td id="hl0002990" class="table-align-"  >Content Reviewer</td><td id="hl0002991" class="table-align-"  >Tel Aviv Medical Center—Department of Cardiology</td><td id="hl0002992" class="table-align-"  ><ul id="hl0002993"><li id="hl0002994"><span class="list-item-label">▪</span><p id="hl0002996">Boston Scientific European Strategy Advisory Board</p></li></ul></td><td id="hl0002997" class="table-align-"  >None</td><td id="hl0002998" class="table-align-"  >None</td><td id="hl0002999" class="table-align-"  >None</td><td id="hl0003000" class="table-align-"  >None</td><td id="hl0003001" class="table-align-"  >None</td><td id="hl0003002" class="table-align-"  >None</td></tr><tr><td id="hl0003004" class="table-align-"  >Samuel S. Gidding</td><td id="hl0003005" class="table-align-"  >Content Reviewer—ACC/AHA Task Force on Clinical Practice Guidelines</td><td id="hl0003006" class="table-align-"  >Dupont Hospital for Children—Nemours Cardiac Center</td><td id="hl0003007" class="table-align-"  ><ul id="hl0003008"><li id="hl0003009"><span class="list-item-label">▪</span><p id="hl0003011">Familial Hypercholesterolemia Foundation <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0003013"><span class="list-item-label">▪</span><p id="hl0003015">Regenxbio</p></li></ul></td><td id="hl0003016" class="table-align-"  >None</td><td id="hl0003017" class="table-align-"  >None</td><td id="hl0003018" class="table-align-"  ><ul id="hl0003019"><li id="hl0003020"><span class="list-item-label">▪</span><p id="hl0003022">Familial Hypercholestrolemia Foundation <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li><li id="hl0003024"><span class="list-item-label">▪</span><p id="hl0003026">NIH Grants <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0003029" class="table-align-"  ><ul id="hl0003030"><li id="hl0003031"><span class="list-item-label">▪</span><p id="hl0003033">Cardiology Division Head <a class="inline-reference" href="#dtbl2fndagger">†</a></p></li></ul></td><td id="hl0003035" class="table-align-"  >None</td><td id="hl0003036" class="table-align-"  >None</td></tr><tr><td id="hl0003038" class="table-align-"  >Silvia G. Priori</td><td id="hl0003039" class="table-align-"  >Content Reviewer</td><td id="hl0003040" class="table-align-"  >Professore Ordinario di Cardiologia—Università di Pavia—Direttore Scientifico—Istituti Clinici Scientifici Maugeri—Pavia, Italia</td><td id="hl0003041" class="table-align-"  ><ul id="hl0003042"><li id="hl0003043"><span class="list-item-label">▪</span><p id="hl0003045">Ambry Genetics</p></li><li id="hl0003046"><span class="list-item-label">▪</span><p id="hl0003048">Boston Scientific</p></li><li id="hl0003049"><span class="list-item-label">▪</span><p id="hl0003051">Medtronic</p></li><li id="hl0003052"><span class="list-item-label">▪</span><p id="hl0003054">Medtronic, Inc.</p></li></ul></td><td id="hl0003055" class="table-align-"  >None</td><td id="hl0003056" class="table-align-"  ><ul id="hl0003057"><li id="hl0003058"><span class="list-item-label">▪</span><p id="hl0003060">Audentes Therapeutics Inc <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0003063" class="table-align-"  ><ul id="hl0003064"><li id="hl0003065"><span class="list-item-label">▪</span><p id="hl0003067">Gilead Sciences <a class="inline-reference" href="#dtbl2fnlowast"><sup>∗</sup></a></p></li></ul></td><td id="hl0003070" class="table-align-"  ><ul id="hl0003071"><li id="hl0003072"><span class="list-item-label">▪</span><p id="hl0003074">HRS</p></li><li id="hl0003075"><span class="list-item-label">▪</span><p id="hl0003077">GS-US-372-1234 <a class="inline-reference" href="#dtbl2fnddagger">‡</a></p></li></ul></td><td id="hl0003079" class="table-align-"  >None</td><td id="hl0003080" class="table-align-"  >None</td></tr><tr><td id="hl0003082" class="table-align-"  >Susan Strong</td><td id="hl0003083" class="table-align-"  >Official Reviewer—AHA</td><td id="hl0003084" class="table-align-"  >Sabin Middle School</td><td id="hl0003085" class="table-align-"  >None</td><td id="hl0003086" class="table-align-"  >None</td><td id="hl0003087" class="table-align-"  >None</td><td id="hl0003088" class="table-align-"  >None</td><td id="hl0003089" class="table-align-"  >None</td><td id="hl0003090" class="table-align-"  >None</td><td id="hl0003091" class="table-align-"  >None</td></tr><tr><td id="hl0003093" class="table-align-"  >Win-Kuang Shen</td><td id="hl0003094" class="table-align-"  >Content Reviewer</td><td id="hl0003095" class="table-align-"  >Professor of Medicine—Consultant—Mayo Clinic Arizona, Phoenix Campus</td><td id="hl0003096" class="table-align-"  >None</td><td id="hl0003097" class="table-align-"  >None</td><td id="hl0003098" class="table-align-"  >None</td><td id="hl0003099" class="table-align-"  >None</td><td id="hl0003100" class="table-align-"  >None</td><td id="hl0003101" class="table-align-"  >None</td><td id="hl0003102" class="table-align-"  >None</td></tr><tr><td id="hl0003104" class="table-align-"  >Zachary D. Goldberger</td><td id="hl0003105" class="table-align-"  >Official Reviewer—ACC/AHA Task Force on Clinical Practice Guidelines Lead Reviewer</td><td id="hl0003106" class="table-align-"  >Assistant Professor of Medicine—Division of Cardiology—Harborview Medical Center—University of Washington School of Medicine</td><td id="hl0003107" class="table-align-"  ><ul id="hl0003108"><li id="hl0003109"><span class="list-item-label">▪</span><p id="hl0003111">RubiconMD</p></li></ul></td><td id="hl0003112" class="table-align-"  >None</td><td id="hl0003113" class="table-align-"  >None</td><td id="hl0003114" class="table-align-"  >None</td><td id="hl0003115" class="table-align-"  >None</td><td id="hl0003116" class="table-align-"  >None</td><td id="hl0003117" class="table-align-"  >None</td></tr></tbody></table></div><div class="inline-table-caption">This table represents the relationships of reviewers with industry and other entities that were disclosed at the time of peer review, including those not deemed to be relevant to this document, at the time this document was under review. The table does not necessarily reflect relationships with industry at the time of publication. A person is deemed to have a significant interest in a business if the interest represents ownership of ≥5% of the voting stock or share of the business entity, or ownership of ≥$5000 of the fair market value of the business entity; or if funds received by the person from the business entity exceed 5% of the person’s gross income for the previous year. Relationships that exist with no financial benefit are also included for the purpose of transparency. Relationships in this table are modest unless otherwise noted. Names are listed in alphabetical order within each category of review. Please refer to <a id="hl0003120" href="http://www.acc.org/guidelines/about-guidelines-and-clinical-documents/relationships-with-industry-policy" target="_blank">http://www.acc.org/guidelines/about-guidelines-and-clinical-documents/relationships-with-industry-policy</a> for definitions of disclosure categories or additional information about the ACC/AHA Disclosure Policy for Writing Committees. </div><div class="inline-table-caption">ABIM indicates American Board of Internal Medicine; ACC, American College of Cardiology; ACGME, Accreditation Council for Graduate Medical Education; AHA, American Heart Association; ARTESiA, Apixaban for the Reduction of Thrombo-Embolism in Patients With Device-Detected Sub-Clinical Atrial Fibrillation; BEAT-HF, Better Effectiveness After Transition–Heart Failure DSMB, data safety monitoring board; ENDEAVOUR, carfilzomib and dexamethasone versus bortezomib and dexamethasone for patients with relapsed or refractory multiple myeloma; EP, electrophysiology; FDA, U.S. Food and Drug Administration; HFSA, Heart Failure Society of America; HRS, Heart Rhythm Society; ICD, implantable cardioverter-defibrillator; JACC, Journal of the American College of Cardiology; NIH, National Institutes of Health; NHLBI, National Heart, Lung, and Blood Institute; and PACE, Programs of All-Inclusive Care for the Elderly.</div><ul class="table-footnotes"><li id="hl0003122"><a id="dtbl2fndagger"></a><span class="superscript-reference">†</span>No financial benefit.</li><li id="hl0003125"><a id="dtbl2fnddagger"></a><span class="superscript-reference">‡</span>This disclosure was entered under the Clinical Trial Enroller category in the ACC’s disclosure system. To appear in this category, the author acknowledges that there is no direct or institutional relationship with the trial sponsor as defined in the ACC/AHA Disclosure Policy for Writing Committees.</li><li id="hl0003128"><a id="dtbl2fnlowast"></a><span class="superscript-reference">∗</span>Significant relationship.</li></ul></div>',
		errorMessage: "",
	},
];
