// Договор посуточной аренды — тексты на 7 языках (перевод английской версии Denari Rent SRL).
// Подставляются данные брони и гостя; печать с подписью приходит с сервера только по ссылке гостя.
const CT={
en:{title:"Daily Rental Agreement No.",city:"Chișinău",
pre:"{co}, fiscal code {idno}, hereinafter referred to as the Landlord, on the one hand, and {tenant}, hereinafter referred to as the Tenant, on the other hand, have concluded this Agreement as follows:",
s1:"SUBJECT OF THE AGREEMENT",p11:"The Landlord undertakes to provide furnished residential premises located at {addr} for the temporary accommodation of {persons} person(s).",
p11b:"The Tenant undertakes to pay for the services rendered in accordance with the price list in effect at the time of signing this Agreement.",
p11c:"The Tenant bears full responsibility for the safekeeping of the property and shall compensate material losses in case of damage, at market value.",
p12:"The rental period is {nights} night(s), from {d1} to {d2}.",p13:"The rental cost is {amount}.",p14:"Check-in time: from {cin}; check-out time: by {cout} local time.",
s2:"RIGHTS AND OBLIGATIONS OF THE PARTIES",p21:"The Landlord undertakes to:",
p211:"Provide the Tenant with the specified premises by the agreed date, in proper working condition and clean, equipped in accordance with the inventory list, and inform the Tenant of the services included in the price.",
p22:"The Tenant undertakes to:",p221:"Accept the services provided by the Landlord and pay for them in full.",p222:"Comply with the accommodation rules established by the Landlord.",
s3:"DETAILS AND SIGNATURES OF THE PARTIES",ll:"LANDLORD",tt:"TENANT",adm:"Administrator",doc:"ID document No.",ph:"Phone",bankc:"Bank code",acc:"Accepted electronically",sign:"Signature",
ui:{c_title:"Rental agreement",c_read:"Please read the agreement and confirm.",c_agree:"I have read and accept the terms of the agreement",c_btn:"Sign the agreement",c_done:"Agreement signed",c_print:"Download / print",docno:"Passport / ID number",e_docno:"Please enter the document number",e_agree:"Please tick the box to accept the agreement",c_show:"Show the agreement"}},
ro:{title:"Contract de închiriere pe zi nr.",city:"mun. Chișinău",
pre:"{co}, cod fiscal {idno}, denumită în continuare Locator, pe de o parte, și {tenant}, denumit(ă) în continuare Locatar, pe de altă parte, au încheiat prezentul Contract după cum urmează:",
s1:"OBIECTUL CONTRACTULUI",p11:"Locatorul se obligă să pună la dispoziție o încăpere de locuit mobilată, situată la adresa {addr}, pentru cazarea temporară a {persons} persoane.",
p11b:"Locatarul se obligă să achite serviciile prestate conform listei de prețuri în vigoare la momentul semnării prezentului Contract.",
p11c:"Locatarul poartă întreaga răspundere pentru integritatea bunurilor și compensează prejudiciul material în caz de deteriorare, la valoarea de piață.",
p12:"Termenul de închiriere este de {nights} nopți, de la {d1} până la {d2}.",p13:"Costul închirierii constituie {amount}.",p14:"Ora de cazare: de la {cin}; ora de eliberare: până la {cout}, ora locală.",
s2:"DREPTURILE ȘI OBLIGAȚIILE PĂRȚILOR",p21:"Locatorul se obligă:",
p211:"Să pună la dispoziția Locatarului încăperea indicată la data convenită, în stare bună de funcționare și curată, dotată conform listei de inventar, și să informeze Locatarul despre serviciile incluse în preț.",
p22:"Locatarul se obligă:",p221:"Să accepte serviciile prestate de Locator și să le achite integral.",p222:"Să respecte regulile de cazare stabilite de Locator.",
s3:"DATELE ȘI SEMNĂTURILE PĂRȚILOR",ll:"LOCATOR",tt:"LOCATAR",adm:"Administrator",doc:"Act de identitate nr.",ph:"Telefon",bankc:"Cod bancar",acc:"Acceptat electronic",sign:"Semnătura",
ui:{c_title:"Contract de închiriere",c_read:"Vă rugăm să citiți contractul și să confirmați.",c_agree:"Am citit și accept condițiile contractului",c_btn:"Semnează contractul",c_done:"Contract semnat",c_print:"Descarcă / tipărește",docno:"Numărul pașaportului / buletinului",e_docno:"Introduceți numărul actului de identitate",e_agree:"Bifați acceptarea contractului",c_show:"Vezi contractul"}},
ru:{title:"Договор посуточной аренды №",city:"мун. Кишинёв",
pre:"{co}, фискальный код {idno}, именуемое в дальнейшем Арендодатель, с одной стороны, и {tenant}, именуемый(ая) в дальнейшем Арендатор, с другой стороны, заключили настоящий Договор о нижеследующем:",
s1:"ПРЕДМЕТ ДОГОВОРА",p11:"Арендодатель обязуется предоставить меблированное жилое помещение по адресу {addr} для временного проживания {persons} чел.",
p11b:"Арендатор обязуется оплатить оказанные услуги в соответствии с прейскурантом, действующим на момент подписания настоящего Договора.",
p11c:"Арендатор несёт полную ответственность за сохранность имущества и возмещает материальный ущерб в случае его повреждения по рыночной стоимости.",
p12:"Срок аренды — {nights} ноч., с {d1} по {d2}.",p13:"Стоимость аренды составляет {amount}.",p14:"Время заезда: с {cin}; время выезда: до {cout} по местному времени.",
s2:"ПРАВА И ОБЯЗАННОСТИ СТОРОН",p21:"Арендодатель обязуется:",
p211:"Предоставить Арендатору указанное помещение к согласованной дате в исправном и чистом состоянии, укомплектованное согласно описи имущества, а также проинформировать Арендатора об услугах, входящих в стоимость.",
p22:"Арендатор обязуется:",p221:"Принять услуги, оказанные Арендодателем, и оплатить их в полном объёме.",p222:"Соблюдать правила проживания, установленные Арендодателем.",
s3:"РЕКВИЗИТЫ И ПОДПИСИ СТОРОН",ll:"АРЕНДОДАТЕЛЬ",tt:"АРЕНДАТОР",adm:"Администратор",doc:"Документ №",ph:"Телефон",bankc:"Код банка",acc:"Принято электронно",sign:"Подпись",
ui:{c_title:"Договор аренды",c_read:"Пожалуйста, прочитайте договор и подтвердите.",c_agree:"Я прочитал(а) и принимаю условия договора",c_btn:"Подписать договор",c_done:"Договор подписан",c_print:"Скачать / распечатать",docno:"Номер паспорта / ID",e_docno:"Укажите номер документа",e_agree:"Отметьте согласие с договором",c_show:"Показать договор"}},
uk:{title:"Договір подобової оренди №",city:"мун. Кишинів",
pre:"{co}, фіскальний код {idno}, що надалі іменується Орендодавець, з одного боку, та {tenant}, що надалі іменується Орендар, з іншого боку, уклали цей Договір про таке:",
s1:"ПРЕДМЕТ ДОГОВОРУ",p11:"Орендодавець зобов'язується надати мебльоване житлове приміщення за адресою {addr} для тимчасового проживання {persons} особи (осіб).",
p11b:"Орендар зобов'язується оплатити надані послуги відповідно до прейскуранту, чинного на момент підписання цього Договору.",
p11c:"Орендар несе повну відповідальність за збереження майна та відшкодовує матеріальні збитки в разі його пошкодження за ринковою вартістю.",
p12:"Строк оренди — {nights} ноч., з {d1} по {d2}.",p13:"Вартість оренди становить {amount}.",p14:"Час заїзду: з {cin}; час виїзду: до {cout} за місцевим часом.",
s2:"ПРАВА ТА ОБОВ'ЯЗКИ СТОРІН",p21:"Орендодавець зобов'язується:",
p211:"Надати Орендарю зазначене приміщення до погодженої дати у справному та чистому стані, укомплектоване відповідно до опису майна, а також поінформувати Орендаря про послуги, що входять до вартості.",
p22:"Орендар зобов'язується:",p221:"Прийняти послуги, надані Орендодавцем, і оплатити їх у повному обсязі.",p222:"Дотримуватися правил проживання, встановлених Орендодавцем.",
s3:"РЕКВІЗИТИ ТА ПІДПИСИ СТОРІН",ll:"ОРЕНДОДАВЕЦЬ",tt:"ОРЕНДАР",adm:"Адміністратор",doc:"Документ №",ph:"Телефон",bankc:"Код банку",acc:"Прийнято електронно",sign:"Підпис",
ui:{c_title:"Договір оренди",c_read:"Будь ласка, прочитайте договір і підтвердьте.",c_agree:"Я прочитав(ла) і приймаю умови договору",c_btn:"Підписати договір",c_done:"Договір підписано",c_print:"Завантажити / роздрукувати",docno:"Номер паспорта / ID",e_docno:"Вкажіть номер документа",e_agree:"Позначте згоду з договором",c_show:"Показати договір"}},
it:{title:"Contratto di locazione giornaliera n.",city:"Chișinău",
pre:"{co}, codice fiscale {idno}, di seguito denominata il Locatore, da una parte, e {tenant}, di seguito denominato/a il Conduttore, dall'altra parte, hanno concluso il presente Contratto come segue:",
s1:"OGGETTO DEL CONTRATTO",p11:"Il Locatore si impegna a mettere a disposizione un'unità abitativa arredata situata in {addr} per l'alloggio temporaneo di {persons} persona/e.",
p11b:"Il Conduttore si impegna a pagare i servizi resi secondo il listino prezzi in vigore al momento della firma del presente Contratto.",
p11c:"Il Conduttore è pienamente responsabile della custodia dei beni e risarcisce i danni materiali in caso di deterioramento, al valore di mercato.",
p12:"Il periodo di locazione è di {nights} notte/i, dal {d1} al {d2}.",p13:"Il costo della locazione è di {amount}.",p14:"Orario di check-in: dalle {cin}; orario di check-out: entro le {cout}, ora locale.",
s2:"DIRITTI E OBBLIGHI DELLE PARTI",p21:"Il Locatore si impegna a:",
p211:"Mettere a disposizione del Conduttore l'unità indicata entro la data concordata, in buono stato e pulita, arredata secondo l'inventario, e informare il Conduttore dei servizi inclusi nel prezzo.",
p22:"Il Conduttore si impegna a:",p221:"Accettare i servizi forniti dal Locatore e pagarli per intero.",p222:"Rispettare le regole di soggiorno stabilite dal Locatore.",
s3:"DATI E FIRME DELLE PARTI",ll:"LOCATORE",tt:"CONDUTTORE",adm:"Amministratore",doc:"Documento n.",ph:"Telefono",bankc:"Codice banca",acc:"Accettato elettronicamente",sign:"Firma",
ui:{c_title:"Contratto di locazione",c_read:"La preghiamo di leggere il contratto e confermare.",c_agree:"Ho letto e accetto le condizioni del contratto",c_btn:"Firma il contratto",c_done:"Contratto firmato",c_print:"Scarica / stampa",docno:"Numero del passaporto / documento",e_docno:"Inserisca il numero del documento",e_agree:"Spunti l'accettazione del contratto",c_show:"Mostra il contratto"}},
de:{title:"Tagesmietvertrag Nr.",city:"Chișinău",
pre:"{co}, Steuernummer {idno}, nachfolgend Vermieter genannt, einerseits, und {tenant}, nachfolgend Mieter genannt, andererseits, schließen folgenden Vertrag:",
s1:"VERTRAGSGEGENSTAND",p11:"Der Vermieter verpflichtet sich, eine möblierte Wohnung unter der Adresse {addr} zur vorübergehenden Unterbringung von {persons} Person(en) bereitzustellen.",
p11b:"Der Mieter verpflichtet sich, die erbrachten Leistungen gemäß der bei Vertragsunterzeichnung gültigen Preisliste zu bezahlen.",
p11c:"Der Mieter trägt die volle Verantwortung für die Erhaltung des Eigentums und ersetzt Sachschäden im Fall einer Beschädigung zum Marktwert.",
p12:"Die Mietdauer beträgt {nights} Nacht/Nächte, vom {d1} bis zum {d2}.",p13:"Der Mietpreis beträgt {amount}.",p14:"Check-in: ab {cin}; Check-out: bis {cout} Ortszeit.",
s2:"RECHTE UND PFLICHTEN DER PARTEIEN",p21:"Der Vermieter verpflichtet sich:",
p211:"dem Mieter die genannte Wohnung zum vereinbarten Datum in ordnungsgemäßem und sauberem Zustand, gemäß Inventarliste ausgestattet, zu übergeben und den Mieter über die im Preis enthaltenen Leistungen zu informieren.",
p22:"Der Mieter verpflichtet sich:",p221:"die vom Vermieter erbrachten Leistungen anzunehmen und vollständig zu bezahlen.",p222:"die vom Vermieter festgelegten Hausregeln einzuhalten.",
s3:"ANGABEN UND UNTERSCHRIFTEN DER PARTEIEN",ll:"VERMIETER",tt:"MIETER",adm:"Geschäftsführerin",doc:"Ausweis-Nr.",ph:"Telefon",bankc:"Bankcode",acc:"Elektronisch angenommen",sign:"Unterschrift",
ui:{c_title:"Mietvertrag",c_read:"Bitte lesen Sie den Vertrag und bestätigen Sie ihn.",c_agree:"Ich habe die Vertragsbedingungen gelesen und akzeptiere sie",c_btn:"Vertrag unterschreiben",c_done:"Vertrag unterschrieben",c_print:"Herunterladen / drucken",docno:"Reisepass- / Ausweisnummer",e_docno:"Bitte die Ausweisnummer eingeben",e_agree:"Bitte die Annahme des Vertrags bestätigen",c_show:"Vertrag anzeigen"}},
tr:{title:"Günlük Kira Sözleşmesi No.",city:"Kişinev",
pre:"Bir tarafta, bundan böyle Kiraya Veren olarak anılacak olan {co} (vergi kodu {idno}) ile diğer tarafta, bundan böyle Kiracı olarak anılacak olan {tenant}, aşağıdaki şartlarla işbu Sözleşmeyi akdetmiştir:",
s1:"SÖZLEŞMENİN KONUSU",p11:"Kiraya Veren, {addr} adresinde bulunan eşyalı konutu {persons} kişinin geçici konaklaması için sağlamayı taahhüt eder.",
p11b:"Kiracı, verilen hizmetlerin bedelini işbu Sözleşmenin imzalandığı tarihte geçerli fiyat listesine göre ödemeyi taahhüt eder.",
p11c:"Kiracı, eşyaların korunmasından tamamen sorumludur ve hasar durumunda maddi zararı piyasa değeri üzerinden tazmin eder.",
p12:"Kira süresi {nights} gecedir: {d1} – {d2}.",p13:"Kira bedeli {amount}.",p14:"Giriş saati: {cin} itibarıyla; çıkış saati: yerel saatle en geç {cout}.",
s2:"TARAFLARIN HAK VE YÜKÜMLÜLÜKLERİ",p21:"Kiraya Veren şunları taahhüt eder:",
p211:"Belirtilen konutu kararlaştırılan tarihte, çalışır ve temiz durumda, demirbaş listesine uygun donanımla Kiracıya teslim etmek ve fiyata dahil hizmetler hakkında Kiracıyı bilgilendirmek.",
p22:"Kiracı şunları taahhüt eder:",p221:"Kiraya Veren tarafından sağlanan hizmetleri kabul etmek ve bedelini tam olarak ödemek.",p222:"Kiraya Veren tarafından belirlenen konaklama kurallarına uymak.",
s3:"TARAFLARIN BİLGİLERİ VE İMZALARI",ll:"KİRAYA VEREN",tt:"KİRACI",adm:"Yönetici",doc:"Kimlik belgesi no.",ph:"Telefon",bankc:"Banka kodu",acc:"Elektronik olarak kabul edildi",sign:"İmza",
ui:{c_title:"Kira sözleşmesi",c_read:"Lütfen sözleşmeyi okuyun ve onaylayın.",c_agree:"Sözleşme şartlarını okudum ve kabul ediyorum",c_btn:"Sözleşmeyi imzala",c_done:"Sözleşme imzalandı",c_print:"İndir / yazdır",docno:"Pasaport / kimlik numarası",e_docno:"Lütfen belge numarasını girin",e_agree:"Lütfen sözleşmeyi kabul ettiğinizi işaretleyin",c_show:"Sözleşmeyi göster"}}
};
function contractHTML(c,L,esc){
  const K=CT[L]||CT.en, loc=L==="uk"?"uk-UA":L;
  const dt=s=>s?new Date(s.length>10?s:s+"T12:00:00").toLocaleDateString(loc,{day:"numeric",month:"long",year:"numeric"}):"________";
  const B=s=>`<b>${esc(s)}</b>`;
  const v={co:B(c.company||"\"DENARI RENT\" SRL"),idno:esc(c.idno||""),tenant:B(c.tenant?.name||"________"),addr:B(c.address||"________"),persons:B(c.persons??"__"),
    nights:B(c.nights??"__"),d1:B(dt(c.d1)),d2:B(dt(c.d2)),amount:B(c.amount!=null?`${Number(c.amount).toLocaleString(loc)} ${c.currency==="MDL"?"lei":c.currency||""}`:"________"),cin:B(c.cin||""),cout:B(c.cout||"")};
  const f=s=>s.replace(/\{(\w+)\}/g,(_,k)=>v[k]??"");
  const p=(n,s)=>`<p><span class="n">${n}</span> ${f(s)}</p>`;
  const acc=c.accepted_at?`<div class="acc">✓ ${K.acc}: ${new Date(c.accepted_at).toLocaleString(loc,{dateStyle:"long",timeStyle:"short"})}</div>`:`<div class="line">${K.sign}</div>`;
  return `<article class="contract" lang="${L}">
  <h2>${K.title} ${esc(c.no||"")}</h2><p class="r">${K.city}, ${dt(c.accepted_at||new Date().toISOString())}</p>
  <p>${f(K.pre)}</p>
  <h3>1. ${K.s1}</h3>${p("1.1.",K.p11)}<p>${f(K.p11b)}</p><p>${f(K.p11c)}</p>${p("1.2.",K.p12)}${p("1.3.",K.p13)}${p("1.4.",K.p14)}
  <h3>2. ${K.s2}</h3>${p("2.1.",K.p21)}${p("2.1.1.",K.p211)}${p("2.2.",K.p22)}${p("2.2.1.",K.p221)}${p("2.2.2.",K.p222)}
  <h3>3. ${K.s3}</h3>
  <div class="parties">
    <div class="party"><div class="pl">${K.ll}</div><b>${esc(c.company||"")}</b><div>IDNO ${esc(c.idno||"")}</div><div>${esc(c.address_co||"")}</div>
      <div>IBAN ${esc(c.iban||"")}</div><div>${K.bankc}: ${esc(c.bank_code||"")}</div><div>${esc(c.bank||"")}</div><div>${K.adm} ${esc(c.admin||"")}</div>
      <div class="stampbox">${c.stamp?`<img class="stamp" src="${c.stamp}" alt="">`:""}<div class="line">${K.sign}</div></div></div>
    <div class="party"><div class="pl">${K.tt}</div><b>${esc(c.tenant?.name||"")}</b><div>${K.doc} ${esc(c.tenant?.doc_number||"________")}</div><div>${K.ph}: ${esc(c.tenant?.phone||"")}</div>
      <div class="stampbox">${acc}</div></div>
  </div></article>`;
}
