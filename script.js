/* =============================================================
   Anas Osman — Elite Coach
   ملف الجافاسكريبت (JS) — الترجمة، الحاسبة، السلايدر، والتأثيرات
   ============================================================= */

        const translations = {
            ar: {
                nav_start: "ابدأ الآن",
                hero_badge: "تدريب شخصي أونلاين 1 على 1",
                hero_title: 'اصنع نسختك الأفضل وابنِ جسماً <span class="text-accent">قوياً وعضلات صلبة</span>',
                hero_desc: "برامج تدريبية وتغذية مخصصة بالكامل لأهدافك، مصممة خصيصاً لتتناسب مع جدولك اليومي ونمط حياتك دون تعقيد.",
                hero_cta: "احجز تدريبك الآن عبر واتساب",
                about_badge: "خبرة واحترافية",
                about_title: "الكابتن أنس عثمان",
                about_desc: "مدير نادي غراند فيتنس في مرسين بخبرة تمتد لأكثر من 20 عاماً في مجال التدريب وإدارة المنشآت الرياضية. مدرب معتمد وحاصل على شهادات عالمية متخصصة في بناء العضلات، التغذية الرياضية، وتطوير الأداء البدني.",
                stat_1: "سنوات خبرة طويلة",
                stat_2: "مدير النادي في مرسين",
                stat_3: "شهادات واعتمادات دولية",
                book_badge: "كتاب الكابتن",
                book_title: "نواميس الجسد",
                book_subtitle: "المرجع الشامل لبناء العضلات وأصول التغذية وقيادة الذات",
                book_author: "المدرب: أنس عثمان الجميلي",
                book_desc: "خلاصة سنوات من الخبرة العملية في التدريب، بين دفتي كتاب واحد يشرح أسس بناء العضلات، قواعد التغذية الصحيحة، وكيفية قيادة ذاتك نحو هدفك.",
                book_btn: "احصل على الكتاب الآن",
                calc_badge: "أداة مجانية",
                calc_title: "حاسبة السعرات الحرارية (TDEE)",
                calc_sub: "احسب سعراتك اليومية واعرف كم تحتاج لتخسيس الوزن أو بناء العضلات",
                calc_gender: "الجنس",
                calc_male: "ذكر",
                calc_female: "أنثى",
                calc_age: "العمر (سنوات)",
                calc_weight: "الوزن (كغ)",
                calc_height: "الطول (سم)",
                calc_activity: "مستوى النشاط البدني",
                act_1: "قليل الحركة (لا توجد تمارين تقريباً)",
                act_2: "خفيف الحركة (تمرين خفيف 1-3 أيام بالأسبوع)",
                act_3: "متوسط الحركة (تمرين متوسط 3-5 أيام بالأسبوع)",
                act_4: "نشيط جداً (تمرين مكثف 6-7 أيام بالأسبوع)",
                calc_btn: "احسب سعراتي الآن",
                res_title: "نتيجتك التقديرية اليومية:",
                res_maintain: "سعرات الثبات",
                res_cut: "التنشيف (خسارة وزن)",
                res_bulk: "الضخامة (بناء عضلات)",
                res_wa: "أرسل نتيجتي للكابتن أنس وابدأ خطتك 🟢",
                food_badge: "أداة مجانية",
                food_title: "دليل السعرات الغذائية",
                food_sub: "دور عن أي أكلة واعرف سعراتها وبروتينها وكاربها ودهونها لكل 100غ",
                food_search_ph: "دور عن أكلة... (مثلاً: دجاج، سلمون، حليب)",
                food_empty: "ما لقينا نتيجة، جرب كلمة تانية",
                food_per: "لكل 100غ",
                food_protein: "بروتين",
                food_carbs: "كارب",
                food_fat: "دهون",
                food_cat_all: "الكل",
                food_cat_poultry: "دواجن",
                food_cat_redmeat: "لحوم حمراء",
                food_cat_fish: "أسماك ومأكولات بحرية",
                food_cat_dairy: "ألبان وبيض",
                food_cat_grains: "حبوب وبقوليات",
                food_cat_veg: "خضار",
                food_cat_fruit: "فواكه",
                food_cat_nuts: "مكسرات ودهون",
                food_select_category: "اختار النوع",
                food_select_item: "اختار الصنف",
                food_choose_prompt: "اختار النوع والصنف فوق لتشوف التفاصيل",
                features_heading: "لماذا تختار الكابتن أنس عثمان؟",
                features_sub: "منهجية علمية واضحة تضمن لك الوصول لهدفك بكفاءة",
                f1_title: "خطط مخصصة 100%",
                f1_desc: "لا توجد برامج جاهزة؛ كل خطوة تُبنى بناءً على وزنك، طولك، وهدفك الشخصي.",
                f2_title: "مرونة في التغذية",
                f2_desc: "استمتع بأكل تحبه مع حساب السعرات والميكروز بدقة، وبدون حرمان قاسي.",
                f3_title: "متابعة مستمرة",
                f3_desc: "تعديلات دورية على الجداول بناءً على استجابة جسمك وتقاريرك الأسبوعية.",
                f4_title: "توفير الوقت والجهد",
                f4_desc: "تمارين ذكية ومدروسة تعطيك أقصى نتيجة ممكنة في أقل وقت.",
                packages_heading: "الباقات والخدمات",
                packages_sub: "اختر البرنامج الذي يناسب طموحك وابدأ الرحلة اليوم",
                p1_badge: "تغذية فقط",
                p1_title: "باقة النظام الغذائي",
                p1_desc: "مخصصة لمن يمتلكون جدول تمرين ويحتاجون لتنظيم السعرات والأكل.",
                p1_li1: "خطة غذائية محسوبة بدقة",
                p1_li2: "قائمة بدائل الأطعمة المفضلة",
                p1_li3: "تعديلات أسبوعية مستمرة",
                p1_btn: "اختر التغذية",
                p2_badge: "تمرين فقط",
                p2_title: "باقة الجدول التدريبي",
                p2_desc: "مصممة لمن يتابعون نظامهم الغذائي ويحتاجون لجدول تمرين احترافي.",
                p2_li1: "جدول تمرين (جيم أو منزل)",
                p2_li2: "تحديد الأوزان والتكرارات بدقة",
                p2_li3: "تطوير الأداء وكسر الثبات",
                p2_btn: "اختر التمرين",
                p3_badge: "الأكثر طلباً",
                p3_title: "الباقة الشاملة (VIP)",
                p3_desc: "متابعة متكاملة تضمن لك تحولاً حقيقياً وشاملاً في بنيتك الجسمية.",
                p3_li1: "تمرين + تغذية مخصصة 100%",
                p3_li2: "متابعة وتعديلات أسبوعية",
                p3_li3: "دعم مباشر ومستمر عبر واتساب",
                p3_btn: "احجز الباقة الشاملة",
                p4_badge: "تحدي التحول",
                p4_title: "باقة 3 أشهر مكثفة",
                p4_desc: "لتحقيق تغيير جذري وعميق في الجسم بأفضل سعر وتخطيط طويل المدى.",
                p4_li1: "كل مميزات الباقة الشاملة",
                p4_li2: "أولوية مطلقة في الرد والدعم",
                p4_li3: "تخفيض خاص للالتزام الطويل",
                p4_btn: "ابدأ تحدي التحول",
                faq_heading: "الأسئلة الشائعة",
                faq_sub: "كل ما تحتاج معرفته قبل البدء",
                faq1_q: "هل البرامج تناسب المبتدئين؟",
                faq1_a: "نعم، يتم تصميم الجدول بناءً على مستواك الحالي تماماً، سواء كنت مبتدئاً تبدأ خطواتك الأولى أو محترفاً تبحث عن كسر الثبات.",
                faq2_q: "كيف يتم التواصل واستلام الجداول؟",
                faq2_a: "يتم التواصل بشكل مباشر بالكامل عبر محادثة الواتساب فور إتمام الاشتراك، حيث تستلم جداولك وتتابع تقاريرك بكل سهولة.",
                faq3_q: "هل النظام الغذائي يحرمنا من الأكل المعتاد؟",
                faq3_a: "أبداً، نعتمد على نظام مرن (Flexible Diet) يناسب يومك ويهدف للاستمرارية بدون قيود معقدة أو حرمان قاسي.",
                cta_title: "لا تنتظر غداً، القرار يبدأ اليوم!",
                cta_desc: "تواصل معنا مباشرة الآن ودعنا نبدأ خطة تطوير جسمك خطوة بخطوة.",
                cta_btn: "تواصل مع الكابتن أنس الآن",
                footer_text: "© 2026 Anas Osman. جميع الحقوق محفوظة."
            },
            en: {
                nav_start: "Start Now",
                hero_badge: "1-on-1 Online Personal Training",
                hero_title: 'Build Your Best Version & <span class="text-accent">Solid Muscle Mass</span>',
                hero_desc: "Fully customized workout and nutrition programs tailored entirely to your goals, lifestyle, and daily schedule.",
                hero_cta: "Book Your Training via WhatsApp",
                about_badge: "Experience & Professionalism",
                about_title: "Coach Anas Osman",
                about_desc: "Manager of Grand Fitness in Mersin with over 20 years of experience in fitness coaching and facility management. A certified coach holding international certificates specialized in muscle building, sports nutrition, and physical performance optimization.",
                stat_1: "Years of Experience",
                stat_2: "Club Manager in Mersin",
                stat_3: "International Certificates",
                book_badge: "Coach's Book",
                book_title: "نواميس الجسد",
                book_subtitle: "The complete guide to building muscle, nutrition fundamentals, and self-discipline",
                book_author: "By Coach Anas Osman Al-Jumaili",
                book_desc: "Years of hands-on coaching experience distilled into one book covering the fundamentals of muscle building, proper nutrition, and how to lead yourself toward your goal.",
                book_btn: "Get the Book Now",
                calc_badge: "Free Tool",
                calc_title: "Calorie Calculator (TDEE)",
                calc_sub: "Calculate your daily calories and know what you need for weight loss or muscle building",
                calc_gender: "Gender",
                calc_male: "Male",
                calc_female: "Female",
                calc_age: "Age (Years)",
                calc_weight: "Weight (kg)",
                calc_height: "Height (cm)",
                calc_activity: "Activity Level",
                act_1: "Sedentary (Little or no exercise)",
                act_2: "Lightly active (Light exercise 1-3 days/week)",
                act_3: "Moderately active (Moderate exercise 3-5 days/week)",
                act_4: "Very active (Hard exercise 6-7 days/week)",
                calc_btn: "Calculate My Calories",
                res_title: "Your Estimated Daily Result:",
                res_maintain: "Maintain Weight",
                res_cut: "Fat Loss (Cut)",
                res_bulk: "Muscle Building (Bulk)",
                res_wa: "Send my result to Coach Anas & start plan 🟢",
                food_badge: "Free Tool",
                food_title: "Food Calorie Guide",
                food_sub: "Search any food and see its calories, protein, carbs and fat per 100g",
                food_search_ph: "Search a food... (e.g. chicken, salmon, milk)",
                food_empty: "No results found, try another word",
                food_per: "per 100g",
                food_protein: "Protein",
                food_carbs: "Carbs",
                food_fat: "Fat",
                food_cat_all: "All",
                food_cat_poultry: "Poultry",
                food_cat_redmeat: "Red Meat",
                food_cat_fish: "Fish & Seafood",
                food_cat_dairy: "Dairy & Eggs",
                food_cat_grains: "Grains & Legumes",
                food_cat_veg: "Vegetables",
                food_cat_fruit: "Fruits",
                food_cat_nuts: "Nuts & Fats",
                food_select_category: "Choose Category",
                food_select_item: "Choose Food",
                food_choose_prompt: "Pick a category and food above to see the details",
                features_heading: "Why Choose Coach Anas Osman?",
                features_sub: "A clear, scientific methodology ensuring efficient results",
                f1_title: "100% Customized Plans",
                f1_desc: "No generic programs; every step is built around your weight, height, and personal goals.",
                f2_title: "Flexible Nutrition",
                f2_desc: "Enjoy foods you love with accurate calorie and macro tracking, without extreme restrictions.",
                f3_title: "Continuous Follow-up",
                f3_desc: "Regular schedule adjustments based on your body's response and weekly progress reports.",
                f4_title: "Save Time & Effort",
                f4_desc: "Smart, well-designed workouts giving you maximum results in minimal time.",
                packages_heading: "Packages & Services",
                packages_sub: "Choose the program that fits your ambition and start today",
                p1_badge: "Nutrition Only",
                p1_title: "Diet Plan Package",
                p1_desc: "Designed for those who have a workout routine and need proper nutrition & macro control.",
                p1_li1: "Precisely calculated meal plan",
                p1_li2: "Favorite food alternatives list",
                p1_li3: "Continuous weekly adjustments",
                p1_btn: "Choose Nutrition",
                p2_badge: "Workout Only",
                p2_title: "Workout Plan Package",
                p2_desc: "Built for those who follow their diet and need a professional training split.",
                p2_li1: "Custom workout split (Gym/Home)",
                p2_li2: "Precise weights and reps guidance",
                p2_li3: "Performance boost & plateau breaking",
                p2_btn: "Choose Workout",
                p3_badge: "Most Popular",
                p3_title: "Comprehensive (VIP)",
                p3_desc: "Complete coaching guaranteeing a true physical transformation.",
                p3_li1: "100% Custom Workout & Nutrition",
                p3_li2: "Weekly progress tracking & updates",
                p3_li3: "Direct & continuous WhatsApp support",
                p3_btn: "Book Comprehensive",
                p4_badge: "Transformation Challenge",
                p4_title: "3-Month Intensive",
                p4_desc: "For a profound physical transformation with long-term strategy and best value.",
                p4_li1: "All Comprehensive Package features",
                p4_li2: "Absolute priority in support & replies",
                p4_li3: "Special discount for long-term commitment",
                p4_btn: "Start Challenge",
                faq_heading: "Frequently Asked Questions",
                faq_sub: "Everything you need to know before starting",
                faq1_q: "Are the programs suitable for beginners?",
                faq1_a: "Yes, routines are built strictly around your current level, whether you're a complete beginner or an advanced lifter.",
                faq2_q: "How do we communicate and receive plans?",
                faq2_a: "Communication is handled directly via WhatsApp right after subscription, where you receive plans and report progress easily.",
                faq3_q: "Does the diet restrict regular foods?",
                faq3_a: "Never, we use a flexible diet approach matching your day to ensure long-term sustainability without harsh restrictions.",
                cta_title: "Don't wait for tomorrow, decide today!",
                cta_desc: "Contact us directly now and let's start your body transformation step by step.",
                cta_btn: "Contact Coach Anas Now",
                footer_text: "© 2026 Anas Osman. All rights reserved."
            },
            tr: {
                nav_start: "Şimdi Başla",
                hero_badge: "1'e 1 Çevrimiçi Kişisel Koçluk",
                hero_title: 'En İyi Versiyonunuzu Yaratın ve <span class="text-accent">Güçlü Kaslar İnşa Edin</span>',
                hero_desc: "Hedeflerinize, günlük rutininize ve yaşam tarzınıza tamamen uygun, kişiselleştirilmiş antrenman ve beslenme programları.",
                hero_cta: "WhatsApp Üzerinden Hemen Başvur",
                about_badge: "Deneyim ve Profesyonellik",
                about_title: "Koç Anas Osman",
                about_desc: "Mersin Grand Fitness Kulübü'nün yöneticisi olup, fitness koçluğu ve spor tesisi yönetiminde 20 yılı aşkın deneyime sahiptir. Kas gelişimi, sporcu beslenmesi ve fiziksel performans alanlarında uluslararası sertifikalara sahip sertifikalı bir antrenördür.",
                stat_1: "Uzun Yıllar Deneyim",
                stat_2: "Mersin Kulüp Yöneticisi",
                stat_3: "Uluslararası Sertifikalar",
                book_badge: "Koçun Kitabı",
                book_title: "نواميس الجسد",
                book_subtitle: "Kas gelişimi, doğru beslenme ve öz disiplin için kapsamlı rehber",
                book_author: "Koç: Anas Osman El-Cumaili",
                book_desc: "Yıllara dayanan koçluk deneyiminin özeti tek bir kitapta: kas yapımının temelleri, doğru beslenme kuralları ve hedefinize giderken kendinizi nasıl yöneteceğiniz.",
                book_btn: "Kitabı Şimdi Edin",
                calc_badge: "Ücretsiz Araç",
                calc_title: "Kalori Hesaplama (TDEE)",
                calc_sub: "Günlük kalori ihtiyacınızı hesaplayın ve kilo vermek veya kas yapmak için ne kadar gerektiğini öğrenin",
                calc_gender: "Cinsiyet",
                calc_male: "Erkek",
                calc_female: "Kadın",
                calc_age: "Yaş",
                calc_weight: "Kilo (kg)",
                calc_height: "Boy (cm)",
                calc_activity: "Aktivite Seviyesi",
                act_1: "Hareketsiz (Neredeyse hiç egzersiz yok)",
                act_2: "Hafif aktif (Hafif egzersiz haftada 1-3 gün)",
                act_3: "Orta aktif (Orta düzey egzersiz haftada 3-5 gün)",
                act_4: "Çok aktif (Yoğun egzersiz haftada 6-7 gün)",
                calc_btn: "Kalorilerimi Hesapla",
                res_title: "Tahmini Günlük Sonucunuz:",
                res_maintain: "Koruma Kalorisi",
                res_cut: "Yağ Yakımı (Definisyon)",
                res_bulk: "Kas Kütlesi (Bulking)",
                res_wa: "Sonucumu Koç Anas'a gönder ve plana başla 🟢",
                food_badge: "Ücretsiz Araç",
                food_title: "Besin Kalori Rehberi",
                food_sub: "Bir besin arayın ve 100g başına kalori, protein, karbonhidrat ve yağ değerlerini görün",
                food_search_ph: "Besin ara... (örn. tavuk, somon, süt)",
                food_empty: "Sonuç bulunamadı, başka bir kelime deneyin",
                food_per: "100g başına",
                food_protein: "Protein",
                food_carbs: "Karbonhidrat",
                food_fat: "Yağ",
                food_cat_all: "Tümü",
                food_cat_poultry: "Kümes Hayvanları",
                food_cat_redmeat: "Kırmızı Et",
                food_cat_fish: "Balık ve Deniz Ürünleri",
                food_cat_dairy: "Süt Ürünleri ve Yumurta",
                food_cat_grains: "Tahıllar ve Baklagiller",
                food_cat_veg: "Sebzeler",
                food_cat_fruit: "Meyveler",
                food_cat_nuts: "Kuruyemiş ve Yağlar",
                food_select_category: "Kategori Seç",
                food_select_item: "Besin Seç",
                food_choose_prompt: "Detayları görmek için yukarıdan kategori ve besin seçin",
                features_heading: "Neden Koç Anas Osman?",
                features_sub: "Hedefinize güvenle ulaşmanızı sağlayan net bilimsel metodoloji",
                f1_title: "%100 Kişiselleştirilmiş Planlar",
                f1_desc: "Hazır programlar yok; her adım kilonuza, boyunuza ve hedeflerinize göre tasarlanır.",
                f2_title: "Esnek Beslenme",
                f2_desc: "Aşırı kısıtlamalar olmadan, sevdiğiniz yiyeceklerin tadını çıkararak kalori ve makro takibi yapın.",
                f3_title: "Sürekli Takip",
                f3_desc: "Vücudunuzun tepkisine ve haftalık raporlarınıza göre düzenli program güncellemeleri.",
                f4_title: "Zaman ve Emek Tasarrufu",
                f4_desc: "En kısa sürede maksimum sonuç almanızı sağlayan akıllı ve etkili antrenmanlar.",
                packages_heading: "Paketler ve Hizmetler",
                packages_sub: "Hedefinize uygun programı seçin ve yolculuğa bugün başlayın",
                p1_badge: "Sadece Beslenme",
                p1_title: "Diyet Planı Paketi",
                p1_desc: "Antrenman rutini olan ve kalori/beslenme takibine ihtiyaç duyanlar için.",
                p1_li1: "Hassas hesaplanmış beslenme planı",
                p1_li2: "Favori besin alternatifleri listesi",
                p1_li3: "Sürekli haftalık güncellemeler",
                p1_btn: "Beslenmeyi Seç",
                p2_badge: "Sadece Antrenman",
                p2_title: "Antrenman Planı Paketi",
                p2_desc: "Diyetini kendi uygulayan ve profesyonel antrenman programı arayanlar için.",
                p2_li1: "Özel antrenman programı (Spor/Ev)",
                p2_li2: "Ağırlık ve tekrar yönlendirmesi",
                p2_li3: "Performans artışı ve gelişim",
                p2_btn: "Antrenmanı Seç",
                p3_badge: "En Çok Tercih Edilen",
                p3_title: "Kapsamlı Paket (VIP)",
                p3_desc: "Gerçek fiziksel dönüşümü garanti eden eksiksiz koçluk.",
                p3_li1: "%100 Özel Antrenman ve Beslenme",
                p3_li2: "Haftalık takip ve güncellemeler",
                p3_li3: "Doğrudan ve kesintisiz WhatsApp desteği",
                p3_btn: "Kapsamlı Paketi Seç",
                p4_badge: "Dönüşüm Meydan Okuması",
                p4_title: "3 Aylık Yoğun Paket",
                p4_desc: "Uzun vadeli strateji ve en iyi fiyatla köklü bir fiziksel değişim için.",
                p4_li1: "Kapsamlı Paketin tüm özellikleri",
                p4_li2: "Destek ve yanıtta mutlak öncelik",
                p4_li3: "Uzun vadeli taahhüt için özel indirim",
                p4_btn: "Meydan Okumaya Başla",
                faq_heading: "Sıkça Sorulan Sorular",
                faq_sub: "Başlamadan önce bilmeniz gereken her şey",
                faq1_q: "Programlar yeni başlayanlar için uygun mu?",
                faq1_a: "Evet, ister yeni başlayın ister ileri düzeyde olun, program seviyenize göre tamamen sıfırdan tasarlanır.",
                faq2_q: "İletişim ve program alımı nasıl gerçekleşiyor?",
                faq2_a: "Kayıt olur olmaz doğrudan WhatsApp üzerinden iletişim kurulur, programlarınızı alır ve raporlarınızı kolayca gönderirsiniz.",
                faq3_q: "Diyet normal yemeklerden mahrum bırakır mı?",
                faq3_a: "Asla, karmaşık kısıtlamalar olmadan sürdürülebilir esnek bir diyet yaklaşımı (Flexible Diet) uyguluyoruz.",
                cta_title: "Yarına ertelemeyin, kararınızı bugün verin!",
                cta_desc: "Şimdi bizimle iletişime geçin ve vücut gelişim planınıza adım adım başlayalım.",
                cta_btn: "Koç Anas ile İletişime Geç",
                footer_text: "© 2026 Anas Osman. Tüm hakları saklıdır."
            }
        };

        let currentLang = 'ar';

        function setLanguage(lang) {
            currentLang = lang;
            const root = document.getElementById('htmlRoot');
            root.setAttribute('lang', lang);
            root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });

            ['ar', 'en', 'tr'].forEach(l => {
                const btn = document.getElementById(`btn-${l}`);
                if (l === lang) {
                    btn.className = "px-2.5 sm:px-3 py-1.5 rounded-lg transition duration-300 bg-accent text-ink";
                } else {
                    btn.className = "px-2.5 sm:px-3 py-1.5 rounded-lg transition duration-300 text-zinc-400 hover:text-zinc-100";
                }
            });

            // تحديث دليل السعرات الغذائية (القوائم المنسدلة والنتيجة الظاهرة) عند تبديل اللغة
            if (typeof populateFoodCategorySelect === 'function') populateFoodCategorySelect();
            if (typeof populateFoodItemSelect === 'function') {
                const catSel = document.getElementById('foodCategorySelect');
                populateFoodItemSelect(catSel ? catSel.value : '', selectedFoodIndex);
            }
            if (selectedFoodIndex !== null && typeof renderFoodResultCard === 'function') {
                renderFoodResultCard(foodData[selectedFoodIndex]);
            }
        }

        const slider = document.getElementById('packagesSlider');
        const dots = document.querySelectorAll('#sliderDots .dot');

        if (slider) {
            slider.addEventListener('scroll', () => {
                const scrollLeft = slider.scrollLeft;
                const cardWidth = slider.querySelector('div').offsetWidth + 16;
                let activeIndex = Math.round(Math.abs(scrollLeft) / cardWidth);

                if (activeIndex >= dots.length) activeIndex = dots.length - 1;
                if (activeIndex < 0) activeIndex = 0;

                dots.forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.className = "w-5 h-2 rounded-full bg-accent transition-all duration-300 dot";
                    } else {
                        dot.className = "w-2 h-2 rounded-full bg-line transition-all duration-300 dot";
                    }
                });
            });
        }

        function calculateCalories(e) {
            e.preventDefault();
            const gender = document.getElementById('gender').value;
            const age = parseFloat(document.getElementById('age').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const activity = parseFloat(document.getElementById('activity').value);

            if (!age || !weight || !height) return;

            let bmr = (10 * weight) + (6.25 * height) - (5 * age);
            if (gender === 'male') {
                bmr += 5;
            } else {
                bmr -= 161;
            }

            const tdee = Math.round(bmr * activity);
            const cut = Math.round(tdee - 500);
            const bulk = Math.round(tdee + 300);

            document.getElementById('resMaintain').innerText = tdee + " kcal";
            document.getElementById('resCut').innerText = cut + " kcal";
            document.getElementById('resBulk').innerText = bulk + " kcal";

            let msg = "";
            if (currentLang === 'ar') {
                msg = `مرحباً كابتن أنس، حسبت سعراتي عبر موقعك وكانت النتيجة كالتالي: سعرات الثبات ${tdee}، التنشيف ${cut}، والضخامة ${bulk}. أرغب بالاشتراك معك للبدء!`;
            } else if (currentLang === 'en') {
                msg = `Hello Coach Anas, I calculated my calories on your website and my results are: Maintenance ${tdee}, Cut ${cut}, Bulk ${bulk}. I'd like to subscribe!`;
            } else {
                msg = `Merhaba Koç Anas, web sitenizde kalorilerimi hesapladım ve sonuçlarım: Koruma ${tdee}, Definisyon ${cut}, Bulking ${bulk}. Abone olmak istiyorum!`;
            }

            document.getElementById('waResultBtn').href = `https://wa.me/905392728837?text=${encodeURIComponent(msg)}`;
            document.getElementById('calcResult').classList.remove('hidden');
        }

        /* =========================================================
           دليل السعرات الغذائية — قاعدة بيانات + بحث وفلترة
           القيم لكل 100 غرام (مطهو ما لم يذكر غير ذلك)
           ========================================================= */
        const foodData = [
            // دواجن
            { cat: "poultry", ar: "صدر دجاج مشوي بدون جلد", en: "Grilled Chicken Breast (skinless)", tr: "Izgara Tavuk Göğsü (derisiz)", kcal: 165, p: 31, c: 0, f: 3.6 },
            { cat: "poultry", ar: "فخذ دجاج بالجلد مشوي", en: "Grilled Chicken Thigh (with skin)", tr: "Izgara Tavuk But (derili)", kcal: 250, p: 26, c: 0, f: 16 },
            { cat: "poultry", ar: "دجاج كامل مشوي", en: "Whole Roasted Chicken", tr: "Bütün Fırın Tavuk", kcal: 215, p: 27, c: 0, f: 11 },
            { cat: "poultry", ar: "كبدة دجاج مطهوة", en: "Cooked Chicken Liver", tr: "Pişmiş Tavuk Ciğeri", kcal: 167, p: 24.5, c: 0.9, f: 6.5 },
            { cat: "poultry", ar: "ديك رومي مشوي (صدر)", en: "Grilled Turkey Breast", tr: "Izgara Hindi Göğsü", kcal: 135, p: 30, c: 0, f: 1 },

            // لحوم حمراء
            { cat: "redmeat", ar: "لحم بقر مفروم مطهو (80%)", en: "Cooked Ground Beef (80% lean)", tr: "Pişmiş Kıyma (%80 yağsız)", kcal: 254, p: 26, c: 0, f: 17 },
            { cat: "redmeat", ar: "ستيك بقر لين مشوي", en: "Grilled Lean Beef Steak", tr: "Izgara Yağsız Biftek", kcal: 217, p: 26, c: 0, f: 12 },
            { cat: "redmeat", ar: "لحم غنم (خروف) مشوي", en: "Grilled Lamb", tr: "Izgara Kuzu Eti", kcal: 294, p: 25, c: 0, f: 21 },
            { cat: "redmeat", ar: "لحم عجل مشوي", en: "Grilled Veal", tr: "Izgara Dana Eti", kcal: 172, p: 27, c: 0, f: 6.8 },
            { cat: "redmeat", ar: "كبدة بقر مطهوة", en: "Cooked Beef Liver", tr: "Pişmiş Sığır Ciğeri", kcal: 175, p: 26, c: 3.9, f: 4.9 },
            { cat: "redmeat", ar: "كباب/لحم مشوي متبل", en: "Grilled Seasoned Kebab", tr: "Izgara Baharatlı Kebap", kcal: 250, p: 24, c: 1, f: 16 },

            // أسماك ومأكولات بحرية
            { cat: "fish", ar: "سلمون مشوي", en: "Grilled Salmon", tr: "Izgara Somon", kcal: 208, p: 20, c: 0, f: 13 },
            { cat: "fish", ar: "تونة طازجة مشوية", en: "Grilled Fresh Tuna", tr: "Izgara Taze Ton Balığı", kcal: 132, p: 28, c: 0, f: 1.3 },
            { cat: "fish", ar: "تونة معلبة بالماء", en: "Canned Tuna in Water", tr: "Suda Konserve Ton Balığı", kcal: 116, p: 26, c: 0, f: 1 },
            { cat: "fish", ar: "بلطي (تلابيا) مشوي", en: "Grilled Tilapia", tr: "Izgara Tilapya", kcal: 128, p: 26, c: 0, f: 2.7 },
            { cat: "fish", ar: "سردين معلب بالزيت", en: "Canned Sardines in Oil", tr: "Yağlı Konserve Sardalya", kcal: 208, p: 25, c: 0, f: 11 },
            { cat: "fish", ar: "جمبري (روبيان) مسلوق", en: "Boiled Shrimp", tr: "Haşlanmış Karides", kcal: 99, p: 24, c: 0.2, f: 0.3 },
            { cat: "fish", ar: "سمك القد (Cod) مشوي", en: "Grilled Cod", tr: "Izgara Morina Balığı", kcal: 105, p: 23, c: 0, f: 0.9 },
            { cat: "fish", ar: "حبار مطهو", en: "Cooked Squid", tr: "Pişmiş Kalamar", kcal: 92, p: 15.6, c: 3.1, f: 1.4 },

            // ألبان وبيض
            { cat: "dairy", ar: "حليب كامل الدسم", en: "Whole Milk", tr: "Tam Yağlı Süt", kcal: 61, p: 3.2, c: 4.8, f: 3.3 },
            { cat: "dairy", ar: "حليب قليل الدسم (2%)", en: "Low-Fat Milk (2%)", tr: "Yarım Yağlı Süt (%2)", kcal: 50, p: 3.3, c: 4.9, f: 2 },
            { cat: "dairy", ar: "حليب خالي الدسم", en: "Skim Milk", tr: "Yağsız Süt", kcal: 34, p: 3.4, c: 5, f: 0.2 },
            { cat: "dairy", ar: "لبن زبادي كامل الدسم", en: "Whole Milk Yogurt", tr: "Tam Yağlı Yoğurt", kcal: 61, p: 3.5, c: 4.7, f: 3.3 },
            { cat: "dairy", ar: "لبن يوناني قليل الدسم", en: "Low-Fat Greek Yogurt", tr: "Az Yağlı Yunan Yoğurdu", kcal: 59, p: 10, c: 3.6, f: 0.4 },
            { cat: "dairy", ar: "جبنة بيضاء (فيتا)", en: "Feta Cheese", tr: "Beyaz Peynir (Feta)", kcal: 264, p: 14, c: 4, f: 21 },
            { cat: "dairy", ar: "جبنة قريش", en: "Cottage Cheese", tr: "Lor Peyniri", kcal: 98, p: 11, c: 3.4, f: 4.3 },
            { cat: "dairy", ar: "جبنة شيدر", en: "Cheddar Cheese", tr: "Kaşar/Cheddar Peyniri", kcal: 402, p: 25, c: 1.3, f: 33 },
            { cat: "dairy", ar: "زبدة", en: "Butter", tr: "Tereyağı", kcal: 717, p: 0.9, c: 0.1, f: 81 },
            { cat: "dairy", ar: "بيضة كاملة مسلوقة", en: "Boiled Whole Egg", tr: "Haşlanmış Yumurta", kcal: 155, p: 13, c: 1.1, f: 11 },
            { cat: "dairy", ar: "بياض بيض فقط", en: "Egg White Only", tr: "Sadece Yumurta Akı", kcal: 52, p: 11, c: 0.7, f: 0.2 },

            // حبوب وبقوليات
            { cat: "grains", ar: "أرز أبيض مطبوخ", en: "Cooked White Rice", tr: "Pişmiş Beyaz Pirinç", kcal: 130, p: 2.7, c: 28, f: 0.3 },
            { cat: "grains", ar: "أرز بني مطبوخ", en: "Cooked Brown Rice", tr: "Pişmiş Esmer Pirinç", kcal: 111, p: 2.6, c: 23, f: 0.9 },
            { cat: "grains", ar: "خبز أبيض", en: "White Bread", tr: "Beyaz Ekmek", kcal: 265, p: 9, c: 49, f: 3.2 },
            { cat: "grains", ar: "خبز أسمر (قمح كامل)", en: "Whole Wheat Bread", tr: "Tam Buğday Ekmeği", kcal: 247, p: 13, c: 41, f: 3.4 },
            { cat: "grains", ar: "شوفان جاف", en: "Dry Oats", tr: "Kuru Yulaf", kcal: 389, p: 17, c: 66, f: 7 },
            { cat: "grains", ar: "مكرونة مطبوخة", en: "Cooked Pasta", tr: "Pişmiş Makarna", kcal: 131, p: 5, c: 25, f: 1.1 },
            { cat: "grains", ar: "عدس مطبوخ", en: "Cooked Lentils", tr: "Pişmiş Mercimek", kcal: 116, p: 9, c: 20, f: 0.4 },
            { cat: "grains", ar: "حمص مطبوخ", en: "Cooked Chickpeas", tr: "Pişmiş Nohut", kcal: 164, p: 9, c: 27, f: 2.6 },
            { cat: "grains", ar: "فول مطبوخ", en: "Cooked Fava Beans", tr: "Pişmiş Bakla", kcal: 110, p: 8, c: 20, f: 0.5 },
            { cat: "grains", ar: "كينوا مطبوخة", en: "Cooked Quinoa", tr: "Pişmiş Kinoa", kcal: 120, p: 4.4, c: 21, f: 1.9 },

            // خضار
            { cat: "veg", ar: "بطاطا مسلوقة", en: "Boiled Potato", tr: "Haşlanmış Patates", kcal: 87, p: 1.9, c: 20, f: 0.1 },
            { cat: "veg", ar: "بطاطا حلوة مشوية", en: "Baked Sweet Potato", tr: "Fırın Tatlı Patates", kcal: 90, p: 2, c: 21, f: 0.1 },
            { cat: "veg", ar: "بروكلي مسلوق", en: "Boiled Broccoli", tr: "Haşlanmış Brokoli", kcal: 35, p: 2.4, c: 7, f: 0.4 },
            { cat: "veg", ar: "سبانخ", en: "Spinach", tr: "Ispanak", kcal: 23, p: 2.9, c: 3.6, f: 0.4 },
            { cat: "veg", ar: "طماطم", en: "Tomato", tr: "Domates", kcal: 18, p: 0.9, c: 3.9, f: 0.2 },
            { cat: "veg", ar: "خيار", en: "Cucumber", tr: "Salatalık", kcal: 15, p: 0.7, c: 3.6, f: 0.1 },
            { cat: "veg", ar: "جزر", en: "Carrot", tr: "Havuç", kcal: 41, p: 0.9, c: 10, f: 0.2 },

            // فواكه
            { cat: "fruit", ar: "موز", en: "Banana", tr: "Muz", kcal: 89, p: 1.1, c: 23, f: 0.3 },
            { cat: "fruit", ar: "تفاح", en: "Apple", tr: "Elma", kcal: 52, p: 0.3, c: 14, f: 0.2 },
            { cat: "fruit", ar: "برتقال", en: "Orange", tr: "Portakal", kcal: 47, p: 0.9, c: 12, f: 0.1 },
            { cat: "fruit", ar: "بطيخ", en: "Watermelon", tr: "Karpuz", kcal: 30, p: 0.6, c: 8, f: 0.2 },
            { cat: "fruit", ar: "عنب", en: "Grapes", tr: "Üzüm", kcal: 69, p: 0.7, c: 18, f: 0.2 },
            { cat: "fruit", ar: "تمر مجفف", en: "Dried Dates", tr: "Kuru Hurma", kcal: 282, p: 2.5, c: 75, f: 0.4 },

            // مكسرات ودهون
            { cat: "nuts", ar: "لوز", en: "Almonds", tr: "Badem", kcal: 579, p: 21, c: 22, f: 50 },
            { cat: "nuts", ar: "جوز", en: "Walnuts", tr: "Ceviz", kcal: 654, p: 15, c: 14, f: 65 },
            { cat: "nuts", ar: "فول سوداني", en: "Peanuts", tr: "Yer Fıstığı", kcal: 567, p: 26, c: 16, f: 49 },
            { cat: "nuts", ar: "كاجو", en: "Cashews", tr: "Kaju Fıstığı", kcal: 553, p: 18, c: 30, f: 44 },
            { cat: "nuts", ar: "زيت زيتون", en: "Olive Oil", tr: "Zeytinyağı", kcal: 884, p: 0, c: 0, f: 100 },
        ];

        const foodCategories = ["poultry", "redmeat", "fish", "dairy", "grains", "veg", "fruit", "nuts"];

        // ألوان توزيع الماكروز بالدائرة البيانية: أحمر = بروتين، أصفر = كارب، أبيض = دهون
        const MACRO_COLORS = { protein: "#FF4429", carbs: "#FFC93C", fat: "#F4F4F5" };

        let selectedFoodIndex = null; // رقم الصنف المختار حالياً بالـ foodData، منشان نحافظ عليه لما تتبدل اللغة

        function populateFoodCategorySelect() {
            const sel = document.getElementById('foodCategorySelect');
            if (!sel) return;
            const t = translations[currentLang];
            const prevValue = sel.value;
            sel.innerHTML = `<option value="" disabled ${!prevValue ? 'selected' : ''}>${t.food_select_category}</option>` +
                foodCategories.map(cat => `<option value="${cat}" ${cat === prevValue ? 'selected' : ''}>${t[`food_cat_${cat}`]}</option>`).join('');
        }

        function populateFoodItemSelect(category, selectedIndex) {
            const sel = document.getElementById('foodItemSelect');
            if (!sel) return;
            const t = translations[currentLang];

            if (!category) {
                sel.innerHTML = `<option value="" disabled selected>${t.food_select_item}</option>`;
                sel.disabled = true;
                return;
            }

            sel.disabled = false;
            const items = [];
            foodData.forEach((food, idx) => { if (food.cat === category) items.push({ ...food, idx }); });

            const hasSelection = items.some(f => f.idx === selectedIndex);
            sel.innerHTML = `<option value="" disabled ${!hasSelection ? 'selected' : ''}>${t.food_select_item}</option>` +
                items.map(f => `<option value="${f.idx}" ${f.idx === selectedIndex ? 'selected' : ''}>${f[currentLang] || f.ar}</option>`).join('');
        }

        function buildMacroDonut(proteinPct, carbPct, fatPct) {
            const r = 40, circumference = 2 * Math.PI * r;
            const pLen = circumference * proteinPct / 100;
            const cLen = circumference * carbPct / 100;
            const fLen = circumference * fatPct / 100;
            const seg = (len, offset, color) =>
                `<circle cx="50" cy="50" r="${r}" fill="none" stroke="${color}" stroke-width="12"
                    stroke-dasharray="${len} ${circumference - len}" stroke-dashoffset="${offset}"></circle>`;
            return `
            <svg viewBox="0 0 100 100" class="-rotate-90 w-full h-full">
                <circle cx="50" cy="50" r="${r}" fill="none" stroke="#2A2D33" stroke-width="12"></circle>
                ${seg(pLen, 0, MACRO_COLORS.protein)}
                ${seg(cLen, -pLen, MACRO_COLORS.carbs)}
                ${seg(fLen, -(pLen + cLen), MACRO_COLORS.fat)}
            </svg>`;
        }

        function renderFoodResultCard(item) {
            const card = document.getElementById('foodResultCard');
            const prompt = document.getElementById('foodPromptState');
            if (!card) return;

            const t = translations[currentLang];
            const name = item[currentLang] || item.ar;
            const catLabel = t[`food_cat_${item.cat}`];

            const proteinKcal = item.p * 4, carbKcal = item.c * 4, fatKcal = item.f * 9;
            const macroTotal = Math.max(proteinKcal + carbKcal + fatKcal, 0.01);
            const proteinPct = Math.round(proteinKcal / macroTotal * 100);
            const carbPct = Math.round(carbKcal / macroTotal * 100);
            const fatPct = Math.max(0, 100 - proteinPct - carbPct);

            card.innerHTML = `
                <span class="text-xs text-zinc-500">${catLabel}</span>
                <h3 class="font-black text-lg sm:text-xl mb-1">${name}</h3>
                <div class="relative w-36 h-36 sm:w-40 sm:h-40 my-3">
                    ${buildMacroDonut(proteinPct, carbPct, fatPct)}
                    <div class="absolute inset-0 flex flex-col items-center justify-center">
                        <span class="font-display text-3xl sm:text-4xl text-accent leading-none">${item.kcal}</span>
                        <span class="text-[10px] text-zinc-500 mt-1">kcal · ${t.food_per}</span>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-2.5 mt-1 text-xs sm:text-sm">
                    <div class="flex items-center justify-between">
                        <span class="flex items-center gap-2 text-zinc-300"><span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${MACRO_COLORS.protein}"></span>${t.food_protein}</span>
                        <span class="text-zinc-400">${item.p}g · ${proteinPct}%</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="flex items-center gap-2 text-zinc-300"><span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${MACRO_COLORS.carbs}"></span>${t.food_carbs}</span>
                        <span class="text-zinc-400">${item.c}g · ${carbPct}%</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="flex items-center gap-2 text-zinc-300"><span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${MACRO_COLORS.fat}"></span>${t.food_fat}</span>
                        <span class="text-zinc-400">${item.f}g · ${fatPct}%</span>
                    </div>
                </div>`;

            card.classList.remove('hidden');
            if (prompt) prompt.classList.add('hidden');
        }

        function hideFoodResult() {
            selectedFoodIndex = null;
            const card = document.getElementById('foodResultCard');
            const prompt = document.getElementById('foodPromptState');
            if (card) card.classList.add('hidden');
            if (prompt) prompt.classList.remove('hidden');
        }

        function initFoodGuide() {
            populateFoodCategorySelect();
            populateFoodItemSelect('', null);

            const categorySelect = document.getElementById('foodCategorySelect');
            const itemSelect = document.getElementById('foodItemSelect');

            if (categorySelect) {
                categorySelect.addEventListener('change', () => {
                    populateFoodItemSelect(categorySelect.value, null);
                    hideFoodResult();
                });
            }

            if (itemSelect) {
                itemSelect.addEventListener('change', () => {
                    if (itemSelect.value === "") { hideFoodResult(); return; }
                    selectedFoodIndex = parseInt(itemSelect.value, 10);
                    renderFoodResultCard(foodData[selectedFoodIndex]);
                });
            }
        }
        initFoodGuide();


        // scroll reveal
        const revealEls = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window && revealEls.length) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            revealEls.forEach(el => io.observe(el));
        } else {
            revealEls.forEach(el => el.classList.add('in'));
        }
