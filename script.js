/* =========================================
   VERİ SETLERİ (BURÇLAR, TAROT, ÇİN BURCU VB.)
   ========================================= */

const burclar = [{
        ad: "Koç",
        ikon: "♈",
        gun: [21, 3, 19, 4],
        element: "Ateş",
        gezegen: "Mars",
        pozitif: "Cesaret, Enerji, Liderlik, Dürüstlük, Tutku",
        negatif: "Sabırsızlık, Acelecilik, Ani Öfke, Dürtüsellik",
        motto: "Ben varım!",
        renk: "Kırmızı, Turuncu",
        sansliSayilar: [1, 9, 18, 27],
        aciklama: "Koç burcu Zodyak'ın ilk burcusudur. Hayat dolu, enerjik ve rekabetçidir. Başladığı işi bitirme konusunda bazen zorlansa da, başlatma enerjisi muazzamdır."
    },
    {
        ad: "Boğa",
        ikon: "♉",
        gun: [20, 4, 20, 5],
        element: "Toprak",
        gezegen: "Venüs",
        pozitif: "Sabır, Güvenilirlik, Sadakat, Kararlılık, Sanatçı Ruh",
        negatif: "İnatçılık, Sahiplenicilik, Tembellik, Değişime Direnç",
        motto: "Benim var!",
        renk: "Yeşil, Toprak Tonları, Pembe",
        sansliSayilar: [2, 6, 15, 24],
        aciklama: "Boğa burcu huzur, konfor ve güven arar. Sabırlıdır ve ayakları yere sağlam basar. Ancak bir kez kızarsa sakinleşmesi zaman alabilir."
    },
    {
        ad: "İkizler",
        ikon: "♊",
        gun: [21, 5, 20, 6],
        element: "Hava",
        gezegen: "Merkür",
        pozitif: "Uyum, Zeka, İletişim, Merak, Hızlı Öğrenme",
        negatif: "Kararsızlık, Yüzeysellik, Sinirlilik, Odaklanma Sorunu",
        motto: "Düşünüyorum!",
        renk: "Sarı, Mavi, Açık Gri",
        sansliSayilar: [3, 5, 14, 23],
        aciklama: "İkizler burcu bilginin peşindedir. Çok sosyal, konuşkan ve esprilidir. Aynı anda birden fazla işle uğraşmayı sever."
    },
    {
        ad: "Yengeç",
        ikon: "♋",
        gun: [21, 6, 22, 7],
        element: "Su",
        gezegen: "Ay",
        pozitif: "Sadakat, Merhamet, Sezgi, Koruyuculuk, Empati",
        negatif: "Alınganlık, Karamsarlık, Geçmişe Takılı Kalma",
        motto: "Hissediyorum!",
        renk: "Gümüş, Beyaz, Deniz Mavisi",
        sansliSayilar: [2, 7, 11, 20],
        aciklama: "Yengeç burcu evi ve ailesi için yaşar. Sezgileri inanılmaz kuvvetlidir. Dışarıdan sert kabuklu görünse de içi çok hassastır."
    },
    {
        ad: "Aslan",
        ikon: "♌",
        gun: [23, 7, 22, 8],
        element: "Ateş",
        gezegen: "Güneş",
        pozitif: "Cömertlik, Özgüven, Yaratıcılık, Tutku, Liderlik",
        negatif: "Kibir, İnatçılık, Bencillik, Eleştiriye Kapalılık",
        motto: "Yönetiyorum!",
        renk: "Altın, Turuncu, Sarı",
        sansliSayilar: [1, 4, 10, 19],
        aciklama: "Aslanlar ormanların kralı gibidir. Sahnede olmayı, takdir edilmeyi ve yönetmeyi severler. Kalpleri geniştir ve koruyucudur."
    },
    {
        ad: "Başak",
        ikon: "♍",
        gun: [23, 8, 22, 9],
        element: "Toprak",
        gezegen: "Merkür",
        pozitif: "Titizlik, Analiz, Çalışkanlık, Pratiklik, Yardımseverlik",
        negatif: "Aşırı Eleştirellik, Takıntı, Endişe, Mükemmeliyetçilik",
        motto: "İncelerim!",
        renk: "Gri, Bej, Açık Sarı",
        sansliSayilar: [5, 14, 23, 32],
        aciklama: "Başak burcu detayların ustasıdır. Düzenli, planlı ve mantıklıdır. Her şeyin en iyisini ve en doğrusunu yapmaya çalışır."
    },
    {
        ad: "Terazi",
        ikon: "♎",
        gun: [23, 9, 22, 10],
        element: "Hava",
        gezegen: "Venüs",
        pozitif: "Adalet, Diplomasi, Zarafet, Sosyallik, Estetik",
        negatif: "Kararsızlık, Yüzleşmekten Kaçma, Tembellik",
        motto: "Dengelerim!",
        renk: "Pembe, Yeşil, Mavi",
        sansliSayilar: [6, 15, 24, 33],
        aciklama: "Terazi burcu denge ve uyum arar. Kavga ve gürültüden hoşlanmaz. Sanat, estetik ve ikili ilişkiler onlar için çok önemlidir."
    },
    {
        ad: "Akrep",
        ikon: "♏",
        gun: [23, 10, 21, 11],
        element: "Su",
        gezegen: "Plüton",
        pozitif: "Tutku, Kararlılık, Cesaret, Sadakat, Derinlik",
        negatif: "Kıskançlık, Şüphecilik, Gizlilik, Kindarlık",
        motto: "Arzuluyorum!",
        renk: "Siyah, Koyu Kırmızı, Bordo",
        sansliSayilar: [9, 18, 27, 45],
        aciklama: "Akrep burcu dönüşümün ve gizemin burcudur. Bakışları derin, sezgileri güçlüdür. Ya hep ya hiç mantığıyla yaşar."
    },
    {
        ad: "Yay",
        ikon: "♐",
        gun: [22, 11, 21, 12],
        element: "Ateş",
        gezegen: "Jüpiter",
        pozitif: "İyimserlik, Mizah, Cömertlik, İdealizm, Özgürlük",
        negatif: "Sabırsızlık, Patavatsızlık, Tutamayacağı Sözler Verme",
        motto: "Görüyorum!",
        renk: "Mor, Mavi, Turkuaz",
        sansliSayilar: [3, 12, 21, 30],
        aciklama: "Yay burcu gezmeyi, keşfetmeyi ve yeni kültürler öğrenmeyi sever. Hayata pozitif bakar ve özgürlüğüne çok düşkündür."
    },
    {
        ad: "Oğlak",
        ikon: "♑",
        gun: [22, 12, 19, 1],
        element: "Toprak",
        gezegen: "Satürn",
        pozitif: "Disiplin, Sorumluluk, Yönetim, Sabır, Hırs",
        negatif: "Kötümserlik, Affedememe, Soğukluk, İşkoliklik",
        motto: "Kullanırım!",
        renk: "Kahverengi, Siyah, Koyu Gri",
        sansliSayilar: [4, 8, 17, 26],
        aciklama: "Oğlak burcu başarı ve kariyer odaklıdır. Zamanı iyi yönetir, disiplinlidir ve zirveye tırmanmayı hedefler."
    },
    {
        ad: "Kova",
        ikon: "♒",
        gun: [20, 1, 18, 2],
        element: "Hava",
        gezegen: "Uranüs",
        pozitif: "Özgünlük, İlericilik, Bağımsızlık, İnsancıllık, Zeka",
        negatif: "Duygusal Kopukluk, İsyankarlık, Mesafe, İnatçılık",
        motto: "Biliyorum!",
        renk: "Mavi, Turkuaz, Gümüş",
        sansliSayilar: [4, 7, 11, 22],
        aciklama: "Kova burcu geleceği temsil eder. Sıra dışı fikirleri vardır, toplumun iyiliğini düşünür ama bireysel özgürlüğünden ödün vermez."
    },
    {
        ad: "Balık",
        ikon: "♓",
        gun: [19, 2, 20, 3],
        element: "Su",
        gezegen: "Neptün",
        pozitif: "Sezgi, Merhamet, Sanatsal, Bilgelik, Romantizm",
        negatif: "Gerçeklerden Kaçma, Aşırı Güven, Kurban Psikolojisi",
        motto: "İnanıyorum!",
        renk: "Deniz Yeşili, Leylak, Mor",
        sansliSayilar: [3, 7, 12, 25],
        aciklama: "Balık burcu hayalperest ve duygusaldır. Evrensel sevgiye inanır, herkesin derdini dinler ve sanatsal yetenekleri güçlüdür."
    }
];

const tarotDestesi = [
    // --- BÜYÜK ARKANA ---
    { ad: "Mecnun (The Fool)", ikon: "🤡", anlam: "Yeni başlangıçlar, masumiyet, spontane olmak. Risk almaktan korkma, evren seni destekliyor." },
    { ad: "Büyücü (The Magician)", ikon: "🧙‍♂️", anlam: "Yetenek, irade gücü, eyleme geçme. İhtiyacın olan tüm güce ve araçlara zaten sahipsin." },
    { ad: "Azize (The High Priestess)", ikon: "🌙", anlam: "Sezgi, gizem, bilinçaltı. İç sesini dinle, cevaplar mantığında değil ruhunda saklı." },
    { ad: "İmparatoriçe (The Empress)", ikon: "👸", anlam: "Bolluk, doğurganlık, doğa. Yaratıcılığını kullan ve hayatın güzelliklerinin tadını çıkar." },
    { ad: "İmparator (The Emperor)", ikon: "🤴", anlam: "Otorite, yapı, liderlik. Mantığınla hareket et, hayatında düzen ve disiplin kurma vakti." },
    { ad: "Aziz (The Hierophant)", ikon: "📿", anlam: "Gelenekler, inanç, ruhsal rehberlik. Kurallara uy, belki de bir akıl hocasına danışma vaktidir." },
    { ad: "Aşıklar (The Lovers)", ikon: "💑", anlam: "Aşk, uyum, önemli seçimler. Kalbinin sesini dinleyerek karar ver, ikilikleri birleştir." },
    { ad: "Savaş Arabası (The Chariot)", ikon: "🏇", anlam: "Zafer, irade, kontrol. Zıtlıkları dizginle, hedefine odaklan ve kararlılıkla ilerle." },
    { ad: "Güç (Strength)", ikon: "🦁", anlam: "Cesaret, sabır, şefkat. İçindeki canavarı kaba kuvvetle değil, sevgi ve sabırla ehlileştir." },
    { ad: "Ermiş (The Hermit)", ikon: "🏮", anlam: "İçsel rehberlik, yalnızlık, bilgelik. Dış dünyadan uzaklaş, kendine zaman ayır ve ruhunu dinle." },
    { ad: "Kader Çarkı (Wheel of Fortune)", ikon: "🎡", anlam: "Değişim, şans, döngüler. Şans senden yana dönüyor! Değişime direnme, akışına bırak." },
    { ad: "Adalet (Justice)", ikon: "⚖️", anlam: "Gerçek, hukuk, sebep-sonuç. Ne ektiysen onu biçeceksin. Adil ol ve dürüst davran." },
    { ad: "Asılan Adam (The Hanged Man)", ikon: "🙃", anlam: "Fedakarlık, yeni bakış açısı, duraksama. Olaylara farklı bir yönden bakmak için egonu bırak." },
    { ad: "Ölüm (Death)", ikon: "💀", anlam: "Bitişler, dönüşüm, yeni başlangıçlar. Korkma, eskiyi bırak ki hayatına yeni güzellikler gelebilsin." },
    { ad: "Denge (Temperance)", ikon: "🍶", anlam: "Uyum, ölçülülük, şifa. Hayatında aşırılıklardan kaçın, orta yolu ve iç huzuru bul." },
    { ad: "Şeytan (The Devil)", ikon: "😈", anlam: "Bağımlılık, materyalizm, toksik bağlar. Seni kısıtlayan zincirlerin aslında kendi zihninde, özgürleş." },
    { ad: "Yıkılan Kule (The Tower)", ikon: "🏚️", anlam: "Ani değişim, yıkım, uyanış. Temeli sağlam olmayan şeyler yıkılabilir, bu temizlik senin hayrınadır." },
    { ad: "Yıldız (The Star)", ikon: "🌟", anlam: "Umut, ilham, huzur, iyileşme. Fırtına dindi, evren seni kutsuyor. Geleceğe umutla bak." },
    { ad: "Ay (The Moon)", ikon: "🌚", anlam: "Yanılsama, korku, sezgi. Her şey göründüğü gibi olmayabilir, belirsizlikler içinde içgüdülerine güven." },
    { ad: "Güneş (The Sun)", ikon: "🌞", anlam: "Mutluluk, başarı, canlılık. Karanlık aydınlandı! Her şey yolunda, parlıyorsun ve enerjin çok yüksek." },
    { ad: "Mahkeme (Judgement)", ikon: "📯", anlam: "Uyanış, hesaplaşma, yenilenme. Geçmişi değerlendir, kendini affet ve yeni bir çağrıya kulak ver." },
    { ad: "Dünya (The World)", ikon: "🌍", anlam: "Tamamlanma, bütünlük, seyahat. Bir döngü başarıyla tamamlandı, hak ettiğin ödülü alıyorsun." },

    // --- KÜÇÜK ARKANA ---
    { ad: "Kupaların Ası (Ace of Cups)", ikon: "🏆", anlam: "Duygusal yeni başlangıçlar, sevgi seli ve sezgisel uyanış. Kalbini yeni hislere aç." },
    { ad: "Kupaların Onlusu (10 of Cups)", ikon: "🌈", anlam: "Aile saadeti, duygusal tatmin ve 'mutlu son'. Kalbin sevgiyle ve huzurla dolu." },
    { ad: "Tılsımların Ası (Ace of Pentacles)", ikon: "🪙", anlam: "Maddi fırsatlar, bolluk, yeni bir iş veya proje. Somut dünyada sağlam bir başlangıç." },
    { ad: "Tılsımların Onlusu (10 of Pentacles)", ikon: "🏰", anlam: "Zenginlik, nesiller boyu süren başarı, aile mirası ve kalıcı maddi güvence." },
    { ad: "Kılıçların Ası (Ace of Swords)", ikon: "🗡️", anlam: "Zihinsel netlik, yeni fikirler, gerçeğin ortaya çıkışı. Zihnin bir kılıç kadar keskin." },
    { ad: "Kılıçların Üçlüsü (3 of Swords)", ikon: "💔", anlam: "Kalp kırıklığı, keder veya bir hayal kırıklığı. Bu acıyı kabullenerek iyileşme sürecini başlat." },
    { ad: "Değneklerin Ası (Ace of Wands)", ikon: "🪄", anlam: "Yaratıcı enerji, ilham, tutku ve yüksek potansiyel. İçindeki ateşi yakma zamanı!" },
    { ad: "Değneklerin Altılısı (6 of Wands)", ikon: "🥇", anlam: "Zafer, takdir edilme, başarı. Çabalarının karşılığını alıyorsun, herkes seni alkışlıyor." },
    { ad: "Kupa Şövalyesi (Knight of Cups)", ikon: "💌", anlam: "Romantik bir teklif, sanatsal bir ilham veya güzel bir haber yolda. Duygularını takip et." },
    { ad: "Tılsım Kraliçesi (Queen of Pentacles)", ikon: "🌿", anlam: "Pratik, anaç, bolluk içinde ve maddi olarak güvende. Hem kendine hem de çevrene çok iyi bakıyorsun." },
    { ad: "Kılıç Kralı (King of Swords)", ikon: "🦅", anlam: "Mantıklı, adil, zeki ve otoriter bir lider. Kararlarını duygularınla değil, aklınla almalısın." },
    { ad: "Değnek Şövalyesi (Knight of Wands)", ikon: "🔥", anlam: "Cesur, fevri ve macera arayan enerji. Hızlı gelişmelere hazır ol, tutkularının peşinden git." }
];

const cinBurclari = [
    { ad: "Maymun", ikon: "🐒", ozellik: "Zeki, meraklı ve yenilikçi." },
    { ad: "Horoz", ikon: "🐓", ozellik: "Çalışkan, cesur ve yetenekli." },
    { ad: "Köpek", ikon: "🐕", ozellik: "Sadık, dürüst ve adil." },
    { ad: "Domuz", ikon: "🐖", ozellik: "Cömert, samimi ve barışçıl." },
    { ad: "Fare", ikon: "🐀", ozellik: "Zeki, uyumlu ve hızlı." },
    { ad: "Öküz", ikon: "🐂", ozellik: "Güçlü, kararlı ve güvenilir." },
    { ad: "Kaplan", ikon: "🐅", ozellik: "Cesur, rekabetçi ve lider." },
    { ad: "Tavşan", ikon: "🐇", ozellik: "Zarif, nazik ve duyarlı." },
    { ad: "Ejderha", ikon: "🐉", ozellik: "Güçlü, şanslı ve asil." },
    { ad: "Yılan", ikon: "🐍", ozellik: "Bilge, gizemli ve sezgisel." },
    { ad: "At", ikon: "🐎", ozellik: "Özgür, enerjik ve popüler." },
    { ad: "Keçi", ikon: "🐐", ozellik: "Yaratıcı, nazik ve sakin." }
];

const numerolojiYorumlari = {
    1: "Lider ruhlu, bağımsız ve yaratıcısın. Kendi yolunu çizmeyi seversin.",
    2: "Diplomatik, sezgisel ve barışçılsın. İşbirliği senin doğanda var.",
    3: "İletişim becerin yüksek, neşeli ve sanatsalsın. Kelimelerin gücünü kullanıyorsun.",
    4: "Disiplinli, pratik ve güvenilirsın. Sağlam temeller atmakta ustasın.",
    5: "Özgürlüğüne düşkün, maceracı ve değişken birisin. Rutin sana göre değil.",
    6: "Sorumluluk sahibi, koruyucu ve ailesine düşkünsün. Hizmet etmek seni mutlu eder.",
    7: "Analitik, gizemli ve bilgesin. Hayatın derin anlamlarını araştırıyorsun.",
    8: "Hırslı, güçlü ve yöneticisin. Maddi dünyada başarı senin için önemli.",
    9: "Hümanist, şefkatli ve cömertsin. Dünyayı daha iyi bir yer yapmak istiyorsun."
};

const elementRenkleri = {
    "Ateş": "#ff3d00",
    "Toprak": "#00e676",
    "Hava": "#d500f9",
    "Su": "#00b0ff"
};

/* =========================================
   BAŞLANGIÇ (SAYFA YÜKLENİNCE)
   ========================================= */
window.onload = () => {
    kartlariOlustur();
    selectleriDoldur();
    ayFaziHesapla();
    yeniMottoGetir(); // Sayfa açılınca mesajı değiştirir
};

/* =========================================
   TEMEL FONKSİYONLAR
   ========================================= */
function kartlariOlustur() {
    const container = document.getElementById('burc-listesi');
    container.innerHTML = "";
    burclar.forEach(burc => {
        const div = document.createElement('div');
        div.className = 'burc-card';
        div.innerHTML = `<div class="ikon">${burc.ikon}</div><h3>${burc.ad}</h3><p>${burc.element} Elementi</p>`;
        div.onclick = () => detayGoster(burc);
        container.appendChild(div);
    });
}

function selectleriDoldur() {
    const s1 = document.getElementById('burc1'),
        s2 = document.getElementById('burc2');
    burclar.forEach(b => {
        const opt = `<option value="${b.ad}">${b.ad}</option>`;
        s1.innerHTML += opt;
        s2.innerHTML += opt;
    });
}

function filtrele() {
    const metin = document.getElementById('burc-ara').value.toLowerCase();
    const el = document.getElementById('element-filtre').value;
    const kartlar = document.querySelectorAll('.burc-card');

    burclar.forEach((b, i) => {
        const metinUygun = b.ad.toLowerCase().includes(metin);
        const elUygun = el === "Hepsi" || b.element === el;
        kartlar[i].style.display = (metinUygun && elUygun) ? "block" : "none";
    });
}

/* =========================================
   HESAPLAMA ARAÇLARI
   ========================================= */

// 1. Gelişmiş Burç Analizi (Güneş & Yükselen)
function tamHaritaHesapla() {
    const tarihInput = document.getElementById('dogum-tarihi').value;
    const saatInput = document.getElementById('dogum-saati').value;
    const res = document.getElementById('hesaplama-sonucu');

    if (!tarihInput || !saatInput) {
        res.innerHTML = "<span style='color: #ff0055; font-size:1rem !important;'>Lütfen tarih ve saat gir!</span>";
        return;
    }

    const d = new Date(tarihInput);
    const g = d.getDate();
    const a = d.getMonth() + 1;
    let gunesBurcuIndex = -1;

    if ((a == 3 && g >= 21) || (a == 4 && g <= 19)) gunesBurcuIndex = 0;
    else if ((a == 4 && g >= 20) || (a == 5 && g <= 20)) gunesBurcuIndex = 1;
    else if ((a == 5 && g >= 21) || (a == 6 && g <= 20)) gunesBurcuIndex = 2;
    else if ((a == 6 && g >= 21) || (a == 7 && g <= 22)) gunesBurcuIndex = 3;
    else if ((a == 7 && g >= 23) || (a == 8 && g <= 22)) gunesBurcuIndex = 4;
    else if ((a == 8 && g >= 23) || (a == 9 && g <= 22)) gunesBurcuIndex = 5;
    else if ((a == 9 && g >= 23) || (a == 10 && g <= 22)) gunesBurcuIndex = 6;
    else if ((a == 10 && g >= 23) || (a == 11 && g <= 21)) gunesBurcuIndex = 7;
    else if ((a == 11 && g >= 22) || (a == 12 && g <= 21)) gunesBurcuIndex = 8;
    else if ((a == 12 && g >= 22) || (a == 1 && g <= 19)) gunesBurcuIndex = 9;
    else if ((a == 1 && g >= 20) || (a == 2 && g <= 18)) gunesBurcuIndex = 10;
    else if ((a == 2 && g >= 19) || (a == 3 && g <= 20)) gunesBurcuIndex = 11;

    const gunesBurcu = burclar[gunesBurcuIndex];
    let dogumSaati = parseInt(saatInput.split(':')[0]);
    let offset = Math.floor((dogumSaati - 6) / 2);

    if (offset < 0) offset += 12;

    let yukselenIndex = (gunesBurcuIndex + offset) % 12;
    if (yukselenIndex < 0) yukselenIndex += 12;

    const yukselenBurcu = burclar[yukselenIndex];

    res.innerHTML = `
        <div style="margin-bottom:5px;">
            <span style="color:#ffd700; font-size:1.3rem;">Güneş: ${gunesBurcu.ikon} ${gunesBurcu.ad}</span>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.2); padding-top:5px;">
            <span style="color:#00eeff; font-size:1.3rem;">Yükselen: ${yukselenBurcu.ikon} ${yukselenBurcu.ad}</span>
        </div>
    `;
    res.style.opacity = 0;
    setTimeout(() => { res.style.opacity = 1; }, 100);
}

// 2. Aşk Uyumu (Gelişmiş)
function uyumHesapla() {
    const s1 = document.getElementById('burc1').value;
    const s2 = document.getElementById('burc2').value;
    const b1 = burclar.find(x => x.ad === s1);
    const b2 = burclar.find(x => x.ad === s2);

    if (!b1 || !b2) return;

    let puan = 0;
    let yorum = "";
    let renk = "#ae00ff";
    const el1 = b1.element;
    const el2 = b2.element;

    if (s1 === s2) {
        puan = 85;
        yorum = "Aynaya bakmak gibi! Birbirinizi çok iyi anlarsınız ama bazen sıkılabilirsiniz.";
        renk = "#00e676";
    } else if (el1 === el2) {
        puan = 90;
        yorum = "Ruh ikizi uyumu! Enerjileriniz aynı frekansta titreşiyor. Harika bir takım olursunuz.";
        renk = "#00e676";
    } else if (
        (el1 === "Ateş" && el2 === "Hava") || (el1 === "Hava" && el2 === "Ateş") ||
        (el1 === "Toprak" && el2 === "Su") || (el1 === "Su" && el2 === "Toprak")
    ) {
        puan = 98;
        yorum = "Mükemmel Denge! Biriniz ateşken diğeriniz onu körükleyen rüzgar, ya da biriniz tohumken diğeriniz su.";
        renk = "#d500f9";
    } else {
        const zitlar = {
            "Koç": "Terazi",
            "Terazi": "Koç",
            "Boğa": "Akrep",
            "Akrep": "Boğa",
            "İkizler": "Yay",
            "Yay": "İkizler",
            "Yengeç": "Oğlak",
            "Oğlak": "Yengeç",
            "Aslan": "Kova",
            "Kova": "Aslan",
            "Başak": "Balık",
            "Balık": "Başak"
        };
        if (zitlar[s1] === s2) {
            puan = 80;
            yorum = "Zıt kutupların çekimi! Birbirinizde olmayan her şeye sahipsiniz. Tutkulu ve öğretici.";
            renk = "#ff9100";
        } else {
            puan = 45;
            yorum = "Zorlu bir sınav. Farklı dilleri konuşuyor gibisiniz, anlaşmak için sabır ve emek gerekecek.";
            renk = "#ff1744";
        }
    }

    const sonucDiv = document.getElementById('uyum-sonucu');
    sonucDiv.style.opacity = 0;

    setTimeout(() => {
        sonucDiv.innerHTML = `
            <div style="font-size: 2.5rem; font-weight:800; color: ${renk}; text-shadow: 0 0 20px ${renk}66;">%${puan}</div>
            <div style="font-size: 0.95rem; color: #eee; margin-top: 8px; font-style: italic; line-height:1.4;">"${yorum}"</div>
        `;
        sonucDiv.style.opacity = 1;
        sonucDiv.style.transition = "opacity 0.5s ease";
    }, 200);
}

// 3. Numeroloji
function numerolojiHesapla() {
    const tarihInput = document.getElementById('numeroloji-tarihi').value;
    const sonucDiv = document.getElementById('numeroloji-sonucu');
    const aciklamaDiv = document.getElementById('numeroloji-aciklama');

    if (!tarihInput) {
        sonucDiv.innerText = "Lütfen tarih seç!";
        sonucDiv.style.color = "red";
        aciklamaDiv.innerText = "";
        return;
    }

    let rakamlar = tarihInput.replace(/-/g, '');
    let toplam = 0;
    for (let i = 0; i < rakamlar.length; i++) { toplam += parseInt(rakamlar[i]); }

    while (toplam > 9) {
        let geciciToplam = 0;
        let stringToplam = toplam.toString();
        for (let j = 0; j < stringToplam.length; j++) { geciciToplam += parseInt(stringToplam[j]); }
        toplam = geciciToplam;
    }

    sonucDiv.innerHTML = `Yaşam Yolu Sayın: <span>${toplam}</span>`;
    sonucDiv.style.color = "#00eeff";
    aciklamaDiv.innerText = numerolojiYorumlari[toplam];
}

// 4. Tarot
function tarotCek() {
    const arka = document.getElementById('tarot-arka');
    const on = document.getElementById('tarot-on');
    const rastgeleIndex = Math.floor(Math.random() * tarotDestesi.length);
    const secilenKart = tarotDestesi[rastgeleIndex];

    document.getElementById('tarot-ikon').innerText = secilenKart.ikon;
    document.getElementById('tarot-adi').innerText = secilenKart.ad;
    document.getElementById('tarot-anlam').innerText = secilenKart.anlam;

    arka.style.display = 'none';
    on.style.display = 'flex';
}

function tarotSifirla() {
    const arka = document.getElementById('tarot-arka');
    const on = document.getElementById('tarot-on');
    on.style.display = 'none';
    arka.style.display = 'flex';
}

// 5. Çin Burcu
function cinBurcuHesapla() {
    const yil = document.getElementById('cin-yili').value;
    const sonucDiv = document.getElementById('cin-sonucu');
    const aciklamaDiv = document.getElementById('cin-aciklama');

    if (!yil || yil < 1900 || yil > 2100) {
        sonucDiv.innerText = "Geçerli yıl girin!";
        sonucDiv.style.color = "red";
        aciklamaDiv.innerText = "";
        return;
    }

    const kalan = yil % 12;
    const burc = cinBurclari[kalan];

    sonucDiv.innerHTML = `${burc.ikon} <strong>${burc.ad}</strong>`;
    aciklamaDiv.innerText = burc.ozellik;
    sonucDiv.style.color = "#00eeff";
}

// 6. Ay Fazı
function ayFaziHesapla() {
    const ayEvreleri = [
        { ad: "Yeni Ay", ikon: "🌑", aciklama: "Yeni başlangıçlar ve niyetler için en uygun zaman." },
        { ad: "Hilal", ikon: "🌒", aciklama: "Harekete geçmek ve niyetlerini büyütmek için ideal." },
        { ad: "İlk Dördün", ikon: "🌓", aciklama: "Karşılaşılan engelleri aşma ve irade gösterme zamanı." },
        { ad: "Şişkin Ay", ikon: "🌔", aciklama: "Son düzeltmeleri yapma ve hedefe odaklanma vakti." },
        { ad: "Dolunay", ikon: "🌕", aciklama: "Tamamlanma, hasat ve farkındalık zamanı. Enerji çok yüksek!" },
        { ad: "Azalan Şişkin", ikon: "🌖", aciklama: "Şükretme, paylaşma ve rahatlama dönemi." },
        { ad: "Son Dördün", ikon: "🌗", aciklama: "Bırakma, affetme ve temizlenme zamanı." },
        { ad: "Son Hilal", ikon: "🌘", aciklama: "İçe dönme, dinlenme ve iyileşme vakti." }
    ];

    const referansTarih = new Date(2000, 0, 6, 18, 14, 0);
    const bugun = new Date();
    const fark = bugun - referansTarih;
    const gunFarki = fark / (1000 * 60 * 60 * 24);
    const ayDongusu = 29.53058867;
    const ayYasi = gunFarki % ayDongusu;

    let evreIndex = Math.floor((ayYasi / ayDongusu) * 8);
    if (evreIndex >= 8) evreIndex = 0;

    const bugunkuEvre = ayEvreleri[evreIndex];

    document.getElementById('ay-fazi-ikon').innerText = bugunkuEvre.ikon;
    document.getElementById('ay-fazi-adi').innerText = bugunkuEvre.ad;
    document.getElementById('ay-fazi-aciklama').innerText = bugunkuEvre.aciklama;

    if (bugunkuEvre.ad === "Dolunay") {
        document.getElementById('ay-fazi-ikon').style.filter = "drop-shadow(0 0 30px #fff)";
    }
}

// 7. Biyoritim
function biyoritimHesapla() {
    const input = document.getElementById('bio-tarih').value;
    if (!input) return;

    const dogum = new Date(input);
    const bugun = new Date();
    const farkGun = Math.floor((bugun - dogum) / (1000 * 60 * 60 * 24));

    const fiziksel = Math.sin((2 * Math.PI * farkGun) / 23);
    const duygusal = Math.sin((2 * Math.PI * farkGun) / 28);
    const zihinsel = Math.sin((2 * Math.PI * farkGun) / 33);

    const pFiz = Math.round(((fiziksel + 1) / 2) * 100);
    const pDuy = Math.round(((duygusal + 1) / 2) * 100);
    const pZih = Math.round(((zihinsel + 1) / 2) * 100);

    document.getElementById('bio-sonuc').style.display = 'block';

    setTimeout(() => {
        document.getElementById('bio-fiziksel').style.width = `${pFiz}%`;
        document.getElementById('bio-duygusal').style.width = `${pDuy}%`;
        document.getElementById('bio-zihinsel').style.width = `${pZih}%`;
    }, 100);
}

// 8. İsim Analizi
function isimAnaliziYap() {
    const isim = document.getElementById('isim-input').value.toUpperCase().replace(/[^A-ZÇĞİÖŞÜ]/g, '');
    if (!isim) return;

    const alfabe = {
        'A': 1,
        'J': 1,
        'S': 1,
        'Ş': 1,
        'B': 2,
        'K': 2,
        'T': 2,
        'C': 3,
        'Ç': 3,
        'L': 3,
        'U': 3,
        'Ü': 3,
        'D': 4,
        'M': 4,
        'V': 4,
        'E': 5,
        'N': 5,
        'W': 5,
        'F': 6,
        'O': 6,
        'Ö': 6,
        'X': 6,
        'G': 7,
        'Ğ': 7,
        'P': 7,
        'Y': 7,
        'H': 8,
        'Q': 8,
        'Z': 8,
        'I': 9,
        'İ': 9,
        'R': 9
    };

    let toplam = 0;
    for (let harf of isim) { toplam += alfabe[harf] || 0; }

    while (toplam > 9 && toplam !== 11 && toplam !== 22) {
        let s = toplam.toString();
        let t = 0;
        for (let rakam of s) t += parseInt(rakam);
        toplam = t;
    }

    const yorumlar = {
        1: "Öncü, lider ve yaratıcı bir ruh.",
        2: "Nazik, işbirlikçi ve sevgi dolu.",
        3: "Sanatsal, sosyal ve neşeli.",
        4: "Pratik, düzenli ve güvenilir.",
        5: "Özgür ruhlu, gezgin ve maceracı.",
        6: "Sorumluluk sahibi ve aileye düşkün.",
        7: "Analitik, zeki ve araştırmacı.",
        8: "Güçlü, hırslı ve yönetici.",
        9: "Hümanist, yardımsever ve şifacı.",
        11: "Aydınlanmış, sezgisel (Usta Sayı).",
        22: "Büyük işler başaran (Usta Sayı)."
    };

    document.getElementById('isim-sonuc').innerHTML = `İsim Sayın: <span>${toplam}</span>`;
    document.getElementById('isim-aciklama').innerText = yorumlar[toplam] || "Gizemli bir enerji.";
}

// 9. Günlük Olumlama
const mottolar = [
    "Bugün mucizeleri hayatıma çekiyorum.", "Evrenin bolluk ve bereketi benimle.",
    "Kendimi olduğum gibi seviyorum ve kabul ediyorum.", "Karşılaştığım her zorluk beni güçlendiriyor.",
    "Bugün harika bir gün olacak!", "İçimdeki ışık her yeri aydınlatıyor.",
    "Ben mıknatısım, başarı bana gelir.", "Geçmişi affediyor, geleceğe umutla bakıyorum.",
    "Hayallerime adım adım yaklaşıyorum.", "Enerjim yüksek ve pozitifim."
];
const mottoIkonlari = ["🧘‍♂️", "✨", "🌟", "🍀", "🌈", "🌻", "🦄", "💫", "🕊️", "💎", "🧚‍♀️", "🧞‍♂️", "🚀", "🪐"];
let sonMottoIndex = -1;

function yeniMottoGetir() {
    let r;
    do { r = Math.floor(Math.random() * mottolar.length); } while (r === sonMottoIndex);
    sonMottoIndex = r;

    const rastgeleIkon = mottoIkonlari[Math.floor(Math.random() * mottoIkonlari.length)];
    const p = document.getElementById('gunluk-motto');
    const ikon = document.getElementById('motto-ikon');

    p.style.opacity = 0;
    p.style.transform = "scale(0.9)";
    ikon.style.transition = "all 0.3s ease";
    ikon.style.transform = "scale(0) rotate(-180deg)";
    ikon.style.opacity = 0;

    setTimeout(() => {
        p.innerText = `"${mottolar[r]}"`;
        ikon.innerText = rastgeleIkon;

        p.style.opacity = 1;
        p.style.transform = "scale(1)";
        ikon.style.transform = "scale(1) rotate(0deg)";
        ikon.style.opacity = 1;
    }, 300);
}

// 10. Sihirli Küre
const kureCevaplari = [
    "Kesinlikle<br>Evet", "Kaderinde<br>Var", "Yıldızlar<br>Onaylıyor", "İçgüdülerine<br>Güven",
    "Zamanı<br>Gelmedi", "Evren<br>Bekle Diyor", "Şimdi<br>Odaklanma", "Sisli,<br>Tekrar Sor",
    "Enerjiler<br>Uyumsuz", "Kesinlikle<br>Hayır", "Akışa<br>Bırak", "Başka Bir<br>Yol Dene"
];

function kureyiSalla() {
    const kure = document.getElementById('sihirli-kure');
    const text = document.getElementById('kure-cevap');

    if (kure.classList.contains('shake')) return;
    if (navigator.vibrate) navigator.vibrate(200);

    kure.classList.add('shake');
    text.style.opacity = 0;

    setTimeout(() => {
        kure.classList.remove('shake');
        const rastgele = Math.floor(Math.random() * kureCevaplari.length);
        text.style.fontSize = "0.75rem";
        text.innerHTML = kureCevaplari[rastgele];
        text.style.opacity = 1;
    }, 500);
}

// 11. Merkür Retrosu
function retroKontrol() {
    const bugun = new Date();

    const retrolar = [
        { basla: new Date(2025, 2, 15), bitis: new Date(2025, 3, 7) },
        { basla: new Date(2025, 6, 18), bitis: new Date(2025, 7, 11) },
        { basla: new Date(2025, 10, 9), bitis: new Date(2025, 10, 29) },
        { basla: new Date(2026, 1, 26), bitis: new Date(2026, 2, 20) },
        { basla: new Date(2026, 5, 29), bitis: new Date(2026, 6, 23) },
        { basla: new Date(2026, 9, 24), bitis: new Date(2026, 10, 12) }
    ];

    let retroVarMi = false;
    for (let r of retrolar) {
        if (bugun >= r.basla && bugun <= r.bitis) { retroVarMi = true; break; }
    }

    const durumDiv = document.getElementById('retro-durum');

    if (retroVarMi) {
        durumDiv.innerHTML = `
            <span style="font-size: 3rem; display:block; animation: pulse 1s infinite;">⚠️</span>
            <p style="color: #ff1744;">EVET, DİKKAT ET!</p>
            <small style="color:#ccc;">İletişim kopukluklarına ve eski sevgililere dikkat.</small>
        `;
    } else {
        durumDiv.innerHTML = `
            <span style="font-size: 3rem; display:block;">✅</span>
            <p style="color: #00e676;">HAYIR, GÜVENDESİN.</p>
            <small style="color:#ccc;">Merkür düz hareketinde. İletişim açık.</small>
        `;
    }
}

// 12. Melek Sayıları
function melekMesajiGoster() {
    const secim = document.getElementById('melek-sayisi').value;
    const sonucDiv = document.getElementById('melek-sonuc');

    const mesajlar = {
        "111": "Düşüncelerin gerçeğe dönüşüyor. Neyi dilediğine dikkat et, evren seni dinliyor! (Manifest Zamanı)",
        "222": "Her şey olması gerektiği gibi. Güven ve sabret, doğru yoldasın. Dengeyi koru.",
        "333": "Yükselmiş üstatlar ve rehberler seninle. İçindeki yaratıcı gücü serbest bırak.",
        "444": "Endişelenme, melekler tarafından korunuyorsun. Evren senin arkanda, güvendesin.",
        "555": "Büyük bir değişim fırtınası geliyor! Kemerlerini bağla, bu değişim senin hayrına olacak.",
        "666": "Maddi dünyaya çok odaklandın. Biraz içine dön ve ruhsal dengeyi bul.",
        "777": "Şans senden yana! Ruhsal olarak doğru yoldasın, mucizelere açık ol.",
        "888": "Finansal bolluk ve bereket akışı başlıyor. Emeklerinin karşılığını alacaksın.",
        "999": "Bir devir kapanıyor. Yeniye yer açmak için eskiyile vedalaşma vakti.",
        "000": "Sonsuz potansiyel! Sen evrenle birsin, yeni bir döngü başlıyor."
    };

    sonucDiv.style.opacity = 0;
    sonucDiv.style.transform = "translateY(10px)";

    setTimeout(() => {
        sonucDiv.innerHTML = `<span style="color:#00eeff; font-size:1.1rem; display:block; margin-bottom:5px;">${secim}</span> ${mesajlar[secim]}`;
        sonucDiv.style.opacity = 1;
        sonucDiv.style.transform = "translateY(0)";
        sonucDiv.style.transition = "all 0.5s ease";
    }, 200);
}

// 13. Ruh Hayvanı
function ruhHayvaniBul() {
    const tarih = document.getElementById('ruh-tarihi').value;
    const sonucDiv = document.getElementById('ruh-sonuc');

    if (!tarih) {
        sonucDiv.innerHTML = "<span style='color:red'>Tarih seçmelisin!</span>";
        return;
    }

    const d = new Date(tarih);
    const g = d.getDate();
    const a = d.getMonth() + 1;

    let hayvan = "",
        ozellik = "";

    if ((a == 1 && g >= 20) || (a == 2 && g <= 18)) {
        hayvan = "Su Samuru 🦦";
        ozellik = "Orijinal, bağımsız ve oyuncu.";
    } else if ((a == 2 && g >= 19) || (a == 3 && g <= 20)) {
        hayvan = "Kurt 🐺";
        ozellik = "Tutkulu, özgür ve sezgisel.";
    } else if ((a == 3 && g >= 21) || (a == 4 && g <= 19)) {
        hayvan = "Şahin 🦅";
        ozellik = "Lider, odaklanmış ve vizyoner.";
    } else if ((a == 4 && g >= 20) || (a == 5 && g <= 20)) {
        hayvan = "Kunduz 🦫";
        ozellik = "Çalışkan, yapıcı ve stratejik.";
    } else if ((a == 5 && g >= 21) || (a == 6 && g <= 20)) {
        hayvan = "Geyik 🦌";
        ozellik = "Canlı, hızlı ve esprili.";
    } else if ((a == 6 && g >= 21) || (a == 7 && g <= 22)) {
        hayvan = "Ağaçkakan 🐦";
        ozellik = "Koruyucu, empatik ve dinleyici.";
    } else if ((a == 7 && g >= 23) || (a == 8 && g <= 22)) {
        hayvan = "Somon Balığı 🐟";
        ozellik = "Odaklı, enerjik ve motive edici.";
    } else if ((a == 8 && g >= 23) || (a == 9 && g <= 22)) {
        hayvan = "Ayı 🐻";
        ozellik = "Pratik, güçlü ve güvenilir.";
    } else if ((a == 9 && g >= 23) || (a == 10 && g <= 22)) {
        hayvan = "Karga 🦅";
        ozellik = "Diplomatik, romantik ve idealist.";
    } else if ((a == 10 && g >= 23) || (a == 11 && g <= 21)) {
        hayvan = "Yılan 🐍";
        ozellik = "Gizemli, dönüştürücü ve bilge.";
    } else if ((a == 11 && g >= 22) || (a == 12 && g <= 21)) {
        hayvan = "Baykuş 🦉";
        ozellik = "Maceracı, bilge ve bağımsız.";
    } else if ((a == 12 && g >= 22) || (a == 1 && g <= 19)) {
        hayvan = "Kaz 🦆";
        ozellik = "Azimli, hırslı ve ciddi.";
    }

    sonucDiv.innerHTML = `
        <div style="font-size: 2.5rem; margin-bottom: 5px;">${hayvan.split(" ")[1]}</div>
        <strong style="color: #00eeff; display:block;">${hayvan.split(" ")[0]}</strong>
        <span style="font-size: 0.9rem; color: #ccc;">${ozellik}</span>
    `;
}

// 14. Rune Taşı
const runelar = [
    { s: "ᚠ", ad: "Fehu", a: "Zenginlik, yeni başlangıçlar, bolluk." },
    { s: "ᚢ", ad: "Uruz", a: "Güç, sağlık, dayanıklılık, değişim." },
    { s: "ᚦ", ad: "Thurisaz", a: "Korunma, çatışma, engelleri aşma." },
    { s: "ᚨ", ad: "Ansuz", a: "İletişim, bilgelik, ilahi mesajlar." },
    { s: "ᚱ", ad: "Raido", a: "Yolculuk, hareket, doğru yönü bulma." },
    { s: "ᚲ", ad: "Kaunan", a: "Aydınlanma, yaratıcılık, bilgi ateşi." },
    { s: "ᚷ", ad: "Gebo", a: "Hediye, ortaklık, cömertlik, denge." },
    { s: "ᚹ", ad: "Wunjo", a: "Neşe, başarı, mutluluk, uyum." },
    { s: "ᚺ", ad: "Hagalaz", a: "Ani değişim, fırtına, kaos, uyanış." },
    { s: "ᛅ", ad: "Naudiz", a: "İhtiyaç, sabır, zorluklarla büyüme." },
    { s: "ᛁ", ad: "Isaz", a: "Duraklama, buz, bekleme dönemi." },
    { s: "ᛃ", ad: "Jera", a: "Hasat, ödül, döngülerin tamamlanması." },
    { s: "ᛇ", ad: "Eihwaz", a: "Güvenilirlik, savunma, dayanıklılık." },
    { s: "ᛈ", ad: "Perthro", a: "Gizem, şans, bilinmeyen sırlar." },
    { s: "ᛉ", ad: "Algiz", a: "Koruma, rehberlik, yüksek benlik." },
    { s: "ᛋ", ad: "Sowilo", a: "Güneş, başarı, enerji, zafer." },
    { s: "ᛏ", ad: "Tiwaz", a: "Adalet, liderlik, fedakarlık, zafer." },
    { s: "ᛒ", ad: "Berkanan", a: "Yeni başlangıç, doğum, büyüme." },
    { s: "ᛖ", ad: "Ehwaz", a: "İlerleme, takım çalışması, güven." },
    { s: "ᛗ", ad: "Mannaz", a: "İnsanlık, benlik, sosyal ilişkiler." },
    { s: "ᛚ", ad: "Laguz", a: "Sezgi, akış, duygusal derinlik, su." },
    { s: "ᛜ", ad: "Ingwaz", a: "Potansiyel, içsel büyüme, tamamlanma." },
    { s: "ᛟ", ad: "Othala", a: "Miras, ev, kökler, aidiyet." },
    { s: "ᛞ", ad: "Dagaz", a: "Şafak, uyanış, netlik, umut." }
];

function runeCek() {
    const rIndex = Math.floor(Math.random() * runelar.length);
    const secilen = runelar[rIndex];
    const tas = document.getElementById('rune-tas');

    tas.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        document.getElementById('rune-sembol').innerText = secilen.s;
        document.getElementById('rune-isim').innerText = secilen.ad;
        document.getElementById('rune-anlam').innerText = secilen.a;
        tas.style.transform = "rotateY(0deg)";
    }, 200);
}

// 15. Aura Rengi
const auralar = [
    { renk: "#ff1744", ad: "Kırmızı", anlam: "Tutkulu, enerjik ve güçlüsün." },
    { renk: "#ff9100", ad: "Turuncu", anlam: "Yaratıcı, sosyal ve maceracısın." },
    { renk: "#ffea00", ad: "Sarı", anlam: "Neşeli, zeki ve iyimsersin." },
    { renk: "#00e676", ad: "Yeşil", anlam: "Şifacı, dengeli ve huzurlusun." },
    { renk: "#00b0ff", ad: "Mavi", anlam: "Sakin, iletişimci ve güvenilirsın." },
    { renk: "#651fff", ad: "İndigo", anlam: "Sezgisel, derin ve ruhsalsın." },
    { renk: "#d500f9", ad: "Mor", anlam: "Büyülü, vizyoner ve asilsin." },
    { renk: "#ffffff", ad: "Beyaz", anlam: "Saf, aydınlanmış ve koruyucusun." }
];

function auraAnaliz() {
    const kutu = document.getElementById('aura-kutu');
    const sonuc = document.getElementById('aura-sonuc');
    const ikon = document.getElementById('aura-ikon');

    let sayac = 0;
    sonuc.innerText = "Taranıyor...";

    const interval = setInterval(() => {
        const r = Math.floor(Math.random() * auralar.length);
        kutu.style.backgroundColor = auralar[r].renk;
        kutu.style.boxShadow = `0 0 20px ${auralar[r].renk}`;
        sayac++;

        if (sayac > 10) {
            clearInterval(interval);
            const final = auralar[Math.floor(Math.random() * auralar.length)];

            kutu.style.backgroundColor = final.renk;
            kutu.style.boxShadow = `0 0 50px ${final.renk}`;
            ikon.innerText = "✨";

            sonuc.innerHTML = `
                <strong style="color:${final.renk}; font-size:1.3rem;">${final.ad} Aura</strong><br>
                <span style="font-size:0.9rem;">${final.anlam}</span>
            `;
        }
    }, 150);
}

// 16. Uygulamayı Paylaş (Web Share API)
function uygulamayiPaylas() {
    if (navigator.share) {
        navigator.share({
            title: 'AstroNova ✨',
            text: 'Geleceğin yıldızlarda saklı! Kendi doğum haritanı ve günlük tarotunu hemen ücretsiz öğren. 🔮',
            url: window.location.href
        }).then(() => {
            console.log('Başarıyla paylaşıldı!');
        }).catch((error) => {
            console.error('Paylaşım hatası:', error);
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link kopyalandı! Arkadaşlarına gönderebilirsin. 🌌");
    }
}

/* =========================================
   UI VE EFEKT FONKSİYONLARI
   ========================================= */

function detayGoster(b) {
    const renk = elementRenkleri[b.element] || "#ae00ff";
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.setProperty('--theme-color', renk);
    modalContent.style.boxShadow = `0 0 50px ${renk}40`;

    document.getElementById('modal-bg-icon').innerText = b.ikon;
    document.getElementById('modal-ikon').innerText = b.ikon;
    document.getElementById('modal-baslik').innerText = b.ad;
    document.getElementById('modal-motto').innerText = b.motto;
    document.getElementById('tag-element').innerHTML = `Element: <strong>${b.element}</strong>`;
    document.getElementById('tag-gezegen').innerHTML = `Gezegen: <strong>${b.gezegen}</strong>`;
    document.getElementById('modal-aciklama').innerText = b.aciklama;
    document.getElementById('modal-sansli').innerText = b.sansliSayilar.join(", ");
    document.getElementById('modal-renk').innerText = b.renk;
    document.getElementById('modal-pozitif').innerText = b.pozitif;
    document.getElementById('modal-negatif').innerText = b.negatif;

    document.getElementById('burc-modal').style.display = 'flex';
}

document.querySelector('.close-btn').onclick = () => document.getElementById('burc-modal').style.display = 'none';
window.onclick = (e) => {
    if (e.target == document.getElementById('burc-modal')) document.getElementById('burc-modal').style.display = 'none';
};

function yildizOlustur() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.setProperty('--x', Math.random() * window.innerWidth + 200);
    star.style.animationDuration = Math.random() * 5 + 8 + 's';
    document.body.appendChild(star);
    setTimeout(() => { star.remove(); }, 4000);
}
setInterval(yildizOlustur, 200);

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const myBtn = document.getElementById("myBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

function yukariCik() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('load', () => {
    if (!localStorage.getItem('cerezOnayi')) {
        setTimeout(() => { document.getElementById('cookie-box').classList.add('show'); }, 1500);
    }
});

function cerezKabul() {
    const box = document.getElementById('cookie-box');
    box.classList.remove('show');
    localStorage.setItem('cerezOnayi', 'true');
}
// Arkadaşlık Uyumu Hesaplama Fonksiyonu
function arkadaslikUyumuHesapla() {
    const burc1 = document.getElementById('arkadas-burc1').value;
    const burc2 = document.getElementById('arkadas-burc2').value;

    const sonucDiv = document.getElementById('arkadas-uyum-sonucu');

    if (!burc1 || !burc2) {
        sonucDiv.innerHTML = "<span style='font-size: 1rem; color: #ff1744;'>Lütfen iki burcu da seçin!</span>";
        return;
    }

    // Burç isimlerinin harflerinden her eşleşme için sabit ama rastgele gibi duran bir skor üretiyoruz
    let skor = 65 + ((burc1.charCodeAt(0) + burc2.charCodeAt(1) || 0) % 36);

    // Aynı burçlarsa skor biraz yüksek olsun
    if (burc1 === burc2) skor = Math.min(100, skor + 15);

    // Tatlı arkadaşlık mesajları
    const mesajlar = [
        "Harika bir kanka ikilisi! Birlikte çok eğlenirsiniz.",
        "Birbirinizi çok iyi dengeliyorsunuz. Sırdaş olmak için mükemmel.",
        "Farklılıklarınız sizi daha iyi bir takım yapıyor. Bol macera var!",
        "Zaman zaman zıtlaşsanız da çok sağlam bir dostluk bağı kurabilirsiniz.",
        "Zihinsel uyumunuz efsane! Birlikte harika işler ve planlar çıkarırsınız.",
        "Çok dinamik, hareketli ve asla sıkıcı olmayan bir arkadaşlık.",
        "Derin sohbetlerin ve birbirine destek olmanın tam adresi!"
    ];

    // Skora göre rastgele ama hep aynı sonucu verecek mesaj seçimi
    const mesajIndex = (burc1.length + burc2.length + skor) % mesajlar.length;

    // Ekrana Yazdırma (Senin CSS yapına uygun olarak)
    sonucDiv.innerHTML = `
        <div style="font-size: 2.2rem; color: #00eeff; margin: 10px 0; text-shadow: 0 0 15px #00eeff;">%${skor}</div>
        <div style="font-size: 1rem; color: #ddd; font-style: italic; line-height: 1.5;">${mesajlar[mesajIndex]}</div>
    `;
}
// Arkadaşlık Uyumu kutularını burçlarla doldurma
window.addEventListener('DOMContentLoaded', () => {
    const burclar = ["Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık"];
    const arkadas1 = document.getElementById('arkadas-burc1');
    const arkadas2 = document.getElementById('arkadas-burc2');

    if (arkadas1 && arkadas2) {
        burclar.forEach(burc => {
            arkadas1.innerHTML += `<option value="${burc}">${burc}</option>`;
            arkadas2.innerHTML += `<option value="${burc}">${burc}</option>`;
        });
    }
});
// Yapay Zeka ile Rüya Yorumlama Fonksiyonu (Flask Backend üzerinden güvenli sürüm)
async function ruyaYorumla() {
    const inputStr = document.getElementById('ruya-input').value.trim();
    const sonucDiv = document.getElementById('ruya-sonuc');
    const aciklamaDiv = document.getElementById('ruya-aciklama');

    if (!inputStr) {
        sonucDiv.innerHTML = "<span style='color: #ff1744; font-size:1rem;'>Lütfen rüyanızı yazın!</span>";
        aciklamaDiv.style.display = "none";
        return;
    }

    // Kullanıcıya bekleme mesajı gösterelim
    sonucDiv.innerHTML = `<span style="color: #00eeff; font-size: 1rem; animation: pulse 1.5s infinite;">✨ Yıldızlara soruluyor...</span>`;
    aciklamaDiv.style.display = "none";

    try {
        const url = "http://localhost:5000/api/ruya-yorumla";
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-App-Source': 'AstroNova' // Yetkisiz kaynakları engellemek için özel başlık
            },
            body: JSON.stringify({
                ruya: inputStr
            })
        });

        const data = await response.json();

        if (response.ok) {
            const yorum = data.yorum;
            sonucDiv.innerHTML = `<span style="color: #ae00ff; text-shadow: 0 0 10px #ae00ff;">✨ Kozmik Mesaj ✨</span>`;
            aciklamaDiv.innerHTML = yorum;
            aciklamaDiv.style.display = "block";
        } else {
            const hataMesaji = data.hata || "Bilinmeyen bir hata oluştu.";
            sonucDiv.innerHTML = `<span style="color: #ff1744; font-size:1rem;">Hata: ${hataMesaji}</span>`;
        }
    } catch (error) {
        sonucDiv.innerHTML = `<span style="color: #ff1744; font-size:1rem;">Mistik frekans koptu (Sunucunun açık olduğundan emin olun).</span>`;
        console.error("API Hatası:", error);
    }
}