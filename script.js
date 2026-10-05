const services=[
{title:"Thesis and Dissertation Writing",desc:"Complete research document writing from topic refinement and proposals through to literature review, methodology, data interpretation, discussion, conclusion and APA formatting.",items:["Topic Refinement","Research Proposal","Literature Review","APA Formatting"],color:"hsl(222 47% 20%)"},
{title:"Assignment Writing",desc:"Academic assignments developed with proper structure, scholarly sources and academic integrity across all educational disciplines.",items:["Case Studies","Reflective Reports","Analytical Essays","Critical Reviews"],color:"hsl(160 60% 35%)"},
{title:"Presentation Design",desc:"Visually appealing academic presentations for thesis defenses, seminars, research presentations and professional events with concise audience focused content.",items:["Thesis Defense Slides","Research Seminars","Business Presentations","Academic Seminars"],color:"hsl(280 60% 45%)"},
{title:"SPSS Data Analysis",desc:"Comprehensive statistical analysis with detailed interpretation of results according to research objectives and academic standards.",items:["Descriptive Statistics","Regression Analysis","ANOVA and T Tests","Reliability Analysis"],color:"hsl(340 75% 45%)"},
{title:"AI Content Humanization",desc:"Transform AI generated content into authentic natural academic writing while preserving the intended meaning and improving overall readability.",items:["AI Content Improvement","Academic Rewriting","Grammar Refinement","Structural Enhancement"],color:"hsl(43 80% 42%)"},
{title:"Plagiarism Reduction",desc:"Thorough similarity assessment, plagiarism reduction, citation corrections and referencing adjustments with complete confidentiality guaranteed.",items:["Similarity Checking","Report Interpretation","Citation Corrections","Content Refinement"],color:"hsl(200 70% 40%)"},
{title:"Turnitin Similarity Reports",desc:"Full Turnitin similarity assessment service. Review, interpret and reduce your document similarity score before final submission to your institution.",items:["Turnitin Report Generation","Similarity Score Reduction","Referencing Adjustments","Final Submission Ready"],color:"hsl(14 80% 45%)"}
];
const turnaround=[["Small Assignments","24 to 48 hours"],["Thesis Chapters","3 to 5 days per chapter"],["Full Thesis","2 to 4 weeks"],["SPSS Analysis","2 to 4 days"],["AI Humanization","24 hours"],["Plagiarism Reduction","24 to 48 hours"],["Turnitin Report","12 to 24 hours"],["Rush Orders","On Request"]];
const portfolios=[
{tag:"Thesis and Dissertation",title:"Research Writing Projects",desc:"Undergraduate, graduate and postgraduate research documents completed with thorough literature exploration, critical analysis and structured academic reporting.",color:"hsl(222 47% 18%)",high:["Topic refinement and research proposal development","Literature review with 30 or more scholarly sources","Methodology design and data interpretation","Discussion, conclusion and APA formatting"],note:"Project details remain confidential per client privacy agreements.",imgs:[["/assets/sample-litreview-table.png","Literature Review Table (APA Format)"],["/assets/sample-litreview-chapter.png","Literature Review Chapter Sample"]]},
{tag:"Assignment Writing",title:"Assignment Writing Services",desc:"Academic assignments across all educational disciplines developed with proper structure, credible scholarly sources and full academic integrity.",color:"hsl(160 55% 30%)",high:["Case studies and reflective reports","Analytical essays and critical reviews","Research based reports and academic papers","Proper structure and formatting throughout"],note:"All assignments delivered with originality and confidentiality.",imgs:[["/assets/sample-education.png","Sample 1: Education Research Assignment"],["/assets/sample-linguistic.png","Sample 2: Linguistics Research Assignment"],["/assets/sample-business.png","Sample 3: Business and Management Assignment"]]},
{tag:"Presentations",title:"Presentation Design Projects",desc:"Professional academic presentations for students, researchers and professionals designed with visually appealing layouts and audience focused content.",color:"hsl(280 55% 40%)",high:["Research and thesis defense slides","Academic seminars and project presentations","Business and professional presentations","Concise content with strong visual design"],note:"Sample designs available upon request.",imgs:[["/assets/sample-ppt-timeline.png","MPhil Synopsis Presentation: Project Timeline Slide"],["/assets/sample-ppt-coping.png","Research Presentation: Thematic Analysis Slide"]]},
{tag:"SPSS Analysis",title:"SPSS Data Analysis Projects",desc:"Statistical data analysis services for academic and research projects with detailed interpretation of results presented in plain academic language.",color:"hsl(340 70% 40%)",high:["Descriptive statistics and reliability analysis","Correlation and regression analysis","ANOVA and T Tests with full interpretation","Results formatted as per APA guidelines"],note:"All reports provided with easy to understand interpretations.",imgs:[["/assets/sample-spss.png","SPSS Frequency Table Output Sample"]]},
{tag:"AI Humanization",title:"AI Content Humanization",desc:"AI generated content transformed into authentic academic writing. The before and after Turnitin reports below show the actual results achieved for a real client document.",color:"hsl(43 80% 38%)",high:["AI generated content rewritten in natural academic voice","Zero AI detection on final version","Grammar and structure improved throughout","Original meaning fully preserved"],note:"Before and after samples available while protecting client information.",imgs:[["/assets/sample-turnitin-before.png","BEFORE: 100% AI Detected (Turnitin Report)"],["/assets/sample-turnitin-after.png","AFTER: 0% AI Detected (Humanized Report)"]]},
{tag:"Turnitin",title:"Turnitin Similarity Reports",desc:"Complete Turnitin similarity assessment service. The real before and after reports below demonstrate the results achieved through humanization and plagiarism reduction.",color:"hsl(14 75% 40%)",high:["Turnitin report generation and interpretation","Similarity score reduced to under 10 percent","Citation and referencing corrections","Final submission ready document"],note:"All reports handled with complete professional discretion.",imgs:[["/assets/sample-turnitin-before.png","BEFORE Humanization: 100% AI Detected"],["/assets/sample-turnitin-after.png","AFTER Humanization: 0% AI Detected"]]},
{tag:"Plagiarism Reduction",title:"Plagiarism Reduction Service",desc:"Comprehensive content review to reduce similarity, fix citations and improve originality without losing the original meaning of the document.",color:"hsl(200 65% 36%)",high:["Paragraph by paragraph similarity review","Paraphrasing, restructuring and citation fixes","Original meaning and academic argument preserved","Final document under 10 percent similarity"],note:"Confidential handling guaranteed for all submitted documents.",imgs:[["/assets/sample-turnitin-before.png","Before: High Similarity Score"],["/assets/sample-turnitin-after.png","After: Similarity Cleared to 0%"]]}
];
const reviews=[
["10:24 AM","Graduate Student","MS Research","The thesis was completed on time with thorough research and proper formatting. The literature review was particularly strong. Highly recommended. 🙏"],
["2:47 PM","University Student","Undergraduate","The assignments were well-structured and followed all guidelines. The writer maintained good communication throughout. Will definitely work again! ✅"],
["11:03 AM","MPhil Scholar","English Literature","The presentation slides were visually appealing and helped me secure good grades. The content was concise and effective. Really impressed! 👍"],
["4:15 PM","Research Scholar","SPSS Analysis","The SPSS analysis was accurate and the interpretation was easy to understand. The report helped me complete my thesis successfully. 📊"],
["9:52 AM","Academic Writer","AI Humanization","The AI content was humanized perfectly. Plagiarism was reduced significantly while the meaning remained intact. Very professional service! ✨"],
["3:30 PM","PhD Candidate","Dissertation","Absolutely fantastic work on my dissertation proposal. The research methodology section was done with great depth and academic rigor. 10/10! 🌟"],
["8:45 AM","BS Student","Case Study","She completed my case study assignment in under 24 hours and the quality was amazing. Full marks received! Very happy with the service. 🎉"],
["1:18 PM","MBA Graduate","Research Paper","My research paper was written with such depth and clarity. The referencing was flawless and the content was 100% original. Super impressed! 💯"],
["5:40 PM","MS Scholar","Chapter Writing","Three chapters were completed on time and exceeded my expectations. The academic language and formatting were spot on. Jazak Allah Khair! 🤍"],
["12:05 PM","BBA Student","Assignment Bundle","Ordered five assignments and all were submitted on time with excellent quality. Saved my semester! Highly recommended to every student. ✔️"],
["7:22 AM","Research Student","Turnitin Report","Turnitin similarity reduced from 38% to 6% while the content made even more sense. I was worried but she handled it perfectly. Shukria! 🌷"],
["6:55 PM","Commerce Student","Reflective Report","The reflective report was written so naturally — it sounded exactly like me but much more academic. Got full marks on it! Thank you so much. 🥰"],
["9:15 AM","Law Student","Critical Essay","Critical legal essay done with proper case references and strong arguments. The structure was professional and the reasoning was sharp. 5 stars! ⭐⭐⭐⭐⭐"],
["3:02 PM","Sociology Scholar","Thesis Proposal","My MPhil thesis proposal was crafted with such care and intellectual depth. The supervisor praised the problem statement specifically. Grateful! 🙌"],
["11:48 PM","IT Student","Technical Assignment","Even a technical assignment was handled perfectly. The research components were well-sourced and the formatting was exactly as required. 🔥"],
["8:30 AM","Psychology Student","Annotated Bib.","Annotated bibliography with 15 sources done in 12 hours. Each annotation was properly summarized and critically evaluated. Impressed! 😍"],
["2:11 PM","Education Scholar","Literature Review","The literature review covered 35+ sources and was synthesized beautifully. No copy-paste — all paraphrased and critically analyzed. MashaAllah! 🤲"],
["10:50 AM","Medical Student","Research Report","Medical research report was done accurately with proper citations and careful academic presentation. Highly recommend! 🏥"],
["4:45 PM","Finance Student","Analytical Essay","Financial analysis essay was written with real data and proper academic frameworks. Much better than what I could write myself. Thank you! 💰"],
["7:35 PM","Agricultural Scholar","Research Chapter","Research chapter for my MPhil thesis was completed beautifully. Even niche agricultural topics were researched thoroughly. Amazing work! 🌾"],
["6:10 AM","Business Student","SWOT Analysis","SWOT and PESTLE analysis assignment was detailed and well-organized. The writer clearly understood the business context. A+ work! 📈"],
["12:30 PM","English Student","Essay Writing","Essay on postcolonial literature was brilliant — proper use of theory and close textual analysis. My professor was genuinely impressed!"]
];
const faqs=[
["Is my project kept confidential?","Absolutely. Strict confidentiality is maintained for every project. Your name, topic, institution and all project details are never disclosed to anyone. Professional ethics and client privacy are the top priorities."],
["How do I place an order?","Simply contact Sumaia on WhatsApp at 03079674875 or fill out the Request a Quote form on this page. Share your project details including topic, deadline and requirements and you will receive a quote and timeline promptly."],
["What referencing styles do you use?","All major referencing styles are supported including APA 7th edition, Harvard, MLA, Chicago, Vancouver and IEEE. Simply specify your required style when placing your order."],
["Can you handle urgent or rush orders?","Yes! Rush orders are available with turnarounds as short as 12 to 24 hours for smaller tasks. Additional charges apply for urgent requests. Contact via WhatsApp to discuss your deadline."],
["Do you write content from scratch or edit existing work?","Both services are available. Original content can be written from scratch or existing work can be edited, improved, paraphrased or restructured based on your specific needs."],
["What subjects and disciplines do you cover?","A wide range of disciplines is covered including English Literature and Linguistics, Education, Business and Management, Social Sciences, Psychology, Law, Health Sciences, Engineering report writing and many more."],
["How is plagiarism avoided?","All content is written originally from reputable academic sources with proper citation. AI generated content is humanized and rewritten. Turnitin checks are offered to ensure similarity is below institutional thresholds, typically under 10 percent."],
["Can you reduce my Turnitin similarity score?","Yes. Plagiarism reduction is a core service. Documents with high similarity scores are rewritten, paraphrased and properly cited to bring the score below 10 percent in most cases."],
["What payment methods are accepted?","Payments are accepted via JazzCash, Easypaisa and Bank Transfer. Contact on WhatsApp to receive exact account details for your chosen payment method."],
["Will the work pass AI detection tools?","Yes. The AI Content Humanization service ensures your content reads naturally and passes AI detection tools. Work is rewritten to sound authentically human while preserving the original meaning."],
["Do you offer revisions?","Yes. Revisions are offered to ensure you are completely satisfied with the final work. Requirements should be shared clearly at the start to minimize revision rounds."],
["Can I see samples before ordering?","Yes. Real samples are available in the Portfolio section of this website showing actual work quality. Additional samples can be provided on request via WhatsApp."]
];
const articles=[
["The Complete Guide to Building a Strong Online Presence for Your Business","SEO & Blog Writing","A practical long-form guide covering websites, SEO, social media, reviews, email marketing and online visibility.","01_The_Complete_Guide_to_Building_a_Strong_Online_Presence_for_Your_Business.pdf"],
["How Content Marketing Helps Small Businesses Grow","SEO & Blog Writing","How useful, consistent content can build trust, attract search traffic and support business growth.","02_How_Content_Marketing_Helps_Small_Businesses_Grow.pdf"],
["How to Create Blog Content That People Actually Want to Read","SEO & Blog Writing","A reader-focused approach to choosing topics, understanding intent, structuring articles and editing for clarity.","03_How_to_Create_Blog_Content_That_People_Actually_Want_to_Read.pdf"],
["How to Write Website Content That Connects With Your Audience","Website & Business Content","A guide to writing homepage, service and CTA copy that helps visitors understand what a business offers.","04_How_to_Write_Website_Content_That_Connects_With_Your_Audience.pdf"],
["Why Clear Website Copy Matters for Business Growth","Website & Business Content","Why clarity, benefits, trust and strong calls to action matter when website copy needs to support business goals.","05_Why_Clear_Website_Copy_Matters_for_Business_Growth.pdf"],
["How to Create Social Media Content People Actually Want to Read","Social Media Writing","Practical guidance for useful posts, hooks, stories, promotional content, platform adaptation and engagement.","06_How_to_Create_Social_Media_Content_People_Actually_Want_to_Read.pdf"],
["Building a Consistent Social Media Content Strategy","Social Media Writing","A workable content system covering goals, platforms, content pillars, calendars, batching and measurement.","07_Building_a_Consistent_Social_Media_Content_Strategy.pdf"],
["How to Identify a Research Gap in Academic Research","Academic & Research Writing","A detailed guide to identifying contextual, methodological, theoretical, empirical and practical research gaps.","08_How_to_Identify_a_Research_Gap_in_Academic_Research.pdf"],
["A Practical Guide to Writing a Strong Research Proposal","Academic & Research Writing","A step-by-step guide to the problem statement, research gap, questions, literature review, methodology and ethics.","09_A_Practical_Guide_to_Writing_a_Strong_Research_Proposal.pdf"],
["Common Research Writing Mistakes and How to Avoid Them","Academic & Research Writing","A practical review of common problems in academic topics, literature reviews, methodology, analysis, referencing and conclusions.","10_Common_Research_Writing_Mistakes_and_How_to_Avoid_Them.pdf"],
["Mental Health Crisis among Graduates in Pakistan: Coping with Uncertainty in a Competitive World","Academic & Research Writing","An in-depth discussion of unemployment, family pressure, social comparison, uncertainty and practical coping strategies for graduates navigating Pakistan’s competitive job market.","11_Mental_Health_Crisis_among_Graduates_in_Pakistan.pdf"]
];

function renderServices(){
 const el=document.getElementById("serviceGrid");
 el.innerHTML=services.map((s,i)=>`<div class="service-card reveal"><div class="service-icon" style="background:${s.color}">${["✦","◆","▣","▥","✧","✓","T"][i]}</div><h3>${s.title}</h3><p>${s.desc}</p><ul>${s.items.map(x=>`<li style="--dot:${s.color}">${x}</li>`).join("")}</ul></div>`).join("");
 document.querySelectorAll(".service-card li").forEach(x=>x.style.setProperty("color","#444"));
}
function renderTurn(){
 document.getElementById("turnGrid").innerHTML=turnaround.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join("");
}
function renderPortfolio(){
 document.getElementById("portfolioList").innerHTML=portfolios.map((p,pi)=>`<article class="portfolio-block reveal">
 <div class="portfolio-head" style="background:${p.color}"><div class="ph-icon">${["✦","◆","▣","▥","✧","T","✓"][pi]}</div><div><div class="tag">${p.tag}</div><h3>${p.title}</h3><p>${p.desc}</p></div></div>
 <div class="portfolio-body"><div><h4>What is included</h4><ul>${p.high.map(x=>`<li>${x}</li>`).join("")}</ul><p class="note">${p.note}</p></div>
 <div><h4>Real samples — click to view</h4><div class="sample-grid">${p.imgs.map((im,ii)=>`<figure data-img="${im[0]}" data-label="${im[1]}"><img src="${im[0]}" alt="${im[1]}"><figcaption>${im[1]}</figcaption></figure>`).join("")}</div></div></div></article>`).join("");
 document.querySelectorAll(".sample-grid figure").forEach((f)=>f.addEventListener("click",()=>openLight(f.dataset.img,f.dataset.label)));
}
function renderReviews(){
 document.getElementById("reviewList").innerHTML=reviews.map(r=>`<div class="review"><div class="bubble-wrap"><div class="review-meta">${r[1]} · ${r[2]} · ${r[0]}</div><div class="bubble">${r[3]}</div></div></div>`).join("");
}
function renderFAQ(){
 document.getElementById("faqList").innerHTML=faqs.map((f,i)=>`<div class="faq-item reveal"><button class="faq-q" data-faq="${i}"><span>${f[0]}</span><span>⌄</span></button><div class="faq-a" hidden><div>${f[1]}</div></div></div>`).join("");
 document.querySelectorAll(".faq-q").forEach(b=>b.addEventListener("click",()=>{const a=b.nextElementSibling; const open=!a.hidden; document.querySelectorAll(".faq-a").forEach(x=>x.hidden=true); if(!open)a.hidden=false;}));
}
function renderArticles(){
 const cats=[...new Set(articles.map(a=>a[1]))];
 document.getElementById("articleGrid").innerHTML=articles.map(a=>`<article class="article-card reveal"><small>${a[1]}</small><h3>${a[0]}</h3><p>${a[2]}</p><div class="article-actions"><a href="/articles/${a[3]}" target="_blank">Read PDF</a><a class="pdf" href="/articles/${a[3]}" download>Download PDF</a></div></article>`).join("");
 const sel=document.getElementById("qService"); services.forEach(s=>sel.insertAdjacentHTML("beforeend",`<option>${s.title}</option>`));
}
let lightImages=[],lightIndex=0;
function openLight(src,label){lightImages=portfolios.flatMap(p=>p.imgs);lightIndex=lightImages.findIndex(x=>x[0]===src&&x[1]===label);if(lightIndex<0)lightIndex=0;updateLight();document.getElementById("lightbox").classList.add("open")}
function updateLight(){const x=lightImages[lightIndex];document.getElementById("lightboxImg").src=x[0];document.getElementById("lightboxLabel").textContent=x[1]}
document.getElementById("closeLight").onclick=()=>document.getElementById("lightbox").classList.remove("open");
document.getElementById("prevImg").onclick=()=>{lightIndex=(lightIndex-1+lightImages.length)%lightImages.length;updateLight()};
document.getElementById("nextImg").onclick=()=>{lightIndex=(lightIndex+1)%lightImages.length;updateLight()};
document.getElementById("lightbox").onclick=e=>{if(e.target.id==="lightbox")e.currentTarget.classList.remove("open")};

document.getElementById("quoteForm").addEventListener("submit",e=>{e.preventDefault();const msg=`Hi Sumaia! I would like to request a quote.\n\nName: ${document.getElementById("qName").value}\nService: ${document.getElementById("qService").value}\nDeadline: ${document.getElementById("qDeadline").value}\nDetails: ${document.getElementById("qDetails").value}\n\nPlease send me a quote. Thank you!`;window.open("https://wa.me/923079674875?text="+encodeURIComponent(msg),"_blank")});
document.getElementById("menuBtn").onclick=()=>document.getElementById("mobileMenu").classList.toggle("open");
document.querySelectorAll(".mobile-menu a").forEach(a=>a.onclick=()=>document.getElementById("mobileMenu").classList.remove("open"));
window.addEventListener("scroll",()=>{document.getElementById("navbar").classList.toggle("scrolled",scrollY>20);document.getElementById("topBtn").classList.toggle("show",scrollY>400)});
document.getElementById("topBtn").onclick=()=>scrollTo({top:0,behavior:"smooth"});
document.getElementById("year").textContent=new Date().getFullYear();
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
renderServices();renderTurn();renderPortfolio();renderReviews();renderFAQ();renderArticles();
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
