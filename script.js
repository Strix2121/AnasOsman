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
