## KampusPost – React Native Projesi
## Kopyalamayınız
Görseller:
<img width="620" height="989" alt="Ekran görüntüsü 2025-12-03 150622" src="https://github.com/user-attachments/assets/660e0f7d-1460-4f9f-b3f0-ef184a95c794" />
<img width="618" height="974" alt="Ekran görüntüsü 2025-12-03 150654" src="https://github.com/user-attachments/assets/2b271cad-f253-443c-8777-8ea8ca2b656e" />
<img width="647" height="982" alt="Ekran görüntüsü 2025-12-03 150704" src="https://github.com/user-attachments/assets/d36b6e25-9f79-4e22-93fb-60c11b547dc3" />
<img width="608" height="982" alt="Ekran görüntüsü 2025-12-03 150715" src="https://github.com/user-attachments/assets/facb51e8-f3ff-4b1e-9751-bf6ad83ff3e1" />
<img width="597" height="983" alt="Ekran görüntüsü 2025-12-03 150741" src="https://github.com/user-attachments/assets/9b5237a7-d2ff-40be-8333-624cfbf7c42d" />
<img width="595" height="978" alt="Ekran görüntüsü 2025-12-03 150753" src="https://github.com/user-attachments/assets/180cca2f-4a43-446d-8de5-0fb852ba31dd" />
<img width="1427" height="1003" alt="Ekran görüntüsü 2025-12-03 150912" src="https://github.com/user-attachments/assets/866f1623-bc97-49d1-b976-04851631687f" />
<img width="1363" height="857" alt="Ekran görüntüsü 2025-12-03 151103" src="https://github.com/user-attachments/assets/a0a90d8e-6d5a-4968-80da-53f1c9a2aa17" />
<img width="1579" height="665" alt="Ekran görüntüsü 2025-12-03 151629" src="https://github.com/user-attachments/assets/4f732141-e41a-4cdd-b26d-4fce751e11f5" />
<img width="1719" height="760" alt="Ekran görüntüsü 2025-12-03 151741" src="https://github.com/user-attachments/assets/728d60a3-3f9b-4340-a08b-1bff278b6798" />
<img width="1283" height="971" alt="Ekran görüntüsü 2025-12-03 151453" src="https://github.com/user-attachments/assets/4ff0c665-dfc3-4265-9b87-e906c13b2526" />

Bu proje, React Native kullanılarak geliştirilmiş basit bir **KampusPost** uygulaması iskeletidir.  
Ödev kapsamında şu özellikler uygulanmıştır:

- **Giriş ekranı (`LoginScreen`)** – E‑posta, şifre alanları ve “Giriş Yap / Kayıt Ol” butonları
- **Kayıt ekranı (`RegisterScreen`)** – E‑posta, şifre, şifre tekrar alanları ve şifre doğrulama
- **Ana ekran (`HomeScreen`)** – Uzak API’den post verisi çekme ve listeleme
- **React Navigation** ile **Stack Navigator** yapısı
- **Yeniden kullanılabilir `CustomInput` bileşeni**

## Projeyi Çalıştırma

Terminalde proje klasörüne girin:

```sh
cd KampusPost
```

Metro (React Native dev server) başlatın:

```sh
npm start
```

Yeni bir terminal penceresinde Android emülatörü veya cihaz üzerinde uygulamayı çalıştırın:

```sh
npm run android
```

> iOS için ek kurulumlar (macOS, Xcode, CocoaPods) gerektiğinden bu projede ana odak Android tarafıdır.

## Ekranlar ve Navigasyon

- **NavigationContainer + Stack Navigator**  
  `App.tsx` içinde `NavigationContainer` ve `createNativeStackNavigator` ile şu ekranlar tanımlıdır:
  - `Login` → `LoginScreen`
  - `Register` → `RegisterScreen`
  - `Home` → `HomeScreen`  
  Açılış ekranı **LoginScreen**’dir (`initialRouteName="Login"`).

- **LoginScreen**  
  - Üst yazı: **“KampüsPost’a Hoş Geldiniz!”**  
  - Başlık: **“Giriş Yap”**  
  - Alanlar: E‑posta, Şifre (`CustomInput` bileşeni ile)  
  - Butonlar:
    - **“Giriş Yap”** → şimdilik doğrulama yapmadan **HomeScreen**’e yönlendirir.
    - **“Kayıt Ol”** → **RegisterScreen**’e yönlendirir.

- **RegisterScreen**  
  - Alanlar: E‑posta, Şifre, Şifre Tekrar (tamamı `CustomInput` kullanır).  
  - **“Kayıt Ol”** butonu:
    - Şifreler uyuşmazsa: `Alert.alert("Hata", "Şifreler uyuşmuyor!")`
    - Şifreler aynıysa:
      - `console.log("Kayıt başarılı", { email })`
      - `Alert.alert("Başarılı", "Kayıt başarılı! Giriş yapabilirsiniz.")`
      - Ardından **LoginScreen**’e geri yönlendirir.

- **HomeScreen**  
  - `useEffect` ile `https://jsonplaceholder.typicode.com/posts` adresinden veri çeker.  
  - Gelen veriyi `Post[]` tipinde state’e kaydeder ve konsola `Posts verisi:` olarak yazdırır.  
  - `FlatList` ile her post için:
    - Başlık (`title`) → kalın/büyük
    - İçerik (`body`) → altında normal metin şeklinde gösterilir.  
  - Veri yüklenirken:
    - Ortada spinner ve **“Yükleniyor…”** metni görünür.

## Proje Klasör Yapısı

```
KampusPost/
├── App.tsx                    # Ana uygulama dosyası (NavigationContainer + Stack Navigator)
├── index.js                   # React Native giriş noktası
├── app.json                   # Expo/React Native yapılandırma dosyası
├── package.json               # NPM bağımlılıkları ve scriptler
├── package-lock.json          # NPM kilit dosyası
├── tsconfig.json              # TypeScript yapılandırması
├── babel.config.js            # Babel yapılandırması
├── metro.config.js            # Metro bundler yapılandırması
├── jest.config.js             # Jest test yapılandırması
├── Gemfile                    # Ruby bağımlılıkları (iOS için)
├── .gitignore                 # Git ignore kuralları
├── README.md                  # Proje dokümantasyonu
│
├── components/                # React Native bileşenleri
│   ├── CustomInput.tsx        # Yeniden kullanılabilir input bileşeni
│   ├── LoginScreen.tsx        # Giriş ekranı (form + butonlar)
│   ├── RegisterScreen.tsx     # Kayıt ekranı (şifre kontrolü + yönlendirme)
│   └── HomeScreen.tsx         # Ana ekran (API'den post verisi çekme + FlatList)
│
├── __tests__/                 # Test dosyaları
│   └── App.test.tsx           # App bileşeni testleri
│
├── android/                   # Android platform dosyaları
│   ├── app/
│   │   ├── build.gradle       # Android uygulama build yapılandırması
│   │   ├── proguard-rules.pro # ProGuard kuralları
│   │   └── src/
│   │       └── main/
│   │           ├── AndroidManifest.xml  # Android manifest dosyası
│   │           ├── java/               # Kotlin/Java kaynak dosyaları
│   │           └── res/                # Android kaynakları (resimler, layoutlar)
│   ├── build.gradle           # Android proje build yapılandırması
│   ├── settings.gradle        # Gradle ayarları
│   ├── gradle.properties      # Gradle özellikleri
│   └── gradle/
│       └── wrapper/           # Gradle wrapper dosyaları
│           ├── gradle-wrapper.jar
│           └── gradle-wrapper.properties
│
└── ios/                       # iOS platform dosyaları
    ├── KampusPost/
    │   ├── AppDelegate.swift  # iOS uygulama delegate
    │   ├── Info.plist         # iOS bilgi dosyası
    │   ├── LaunchScreen.storyboard  # Başlangıç ekranı
    │   ├── PrivacyInfo.xcprivacy   # Gizlilik bilgileri
    │   └── Images.xcassets/   # iOS görselleri
    │       └── AppIcon.appiconset/
    ├── KampusPost.xcodeproj/  # Xcode proje dosyası
    │   ├── project.pbxproj
    │   └── xcshareddata/
    │       └── xcschemes/
    │           └── KampusPost.xcscheme
    └── Podfile                # CocoaPods bağımlılıkları
```

### Önemli Dosyalar

- **App.tsx** – `NavigationContainer` + `Stack.Navigator` yapılandırması
- **components/** – Tüm ekran ve bileşenler
  - `LoginScreen.tsx` – Giriş ekranı (form + butonlar)
  - `RegisterScreen.tsx` – Kayıt ekranı (şifre kontrolü + yönlendirme)
  - `HomeScreen.tsx` – Post listesini gösteren ekran (API + FlatList)
  - `CustomInput.tsx` – Ortak giriş bileşeni

## Teslim İçin Önerilen Ekran Görüntüleri

- **Proje klasör yapısı**  
  `KampusPost` klasörünün içini (özellikle `App.tsx` ve `components/` klasörünü) gösteren ekran görüntüsü.

- **Navigasyon yapısı**  
  `App.tsx` içindeki `NavigationContainer` + `Stack.Navigator` kodunun ekran görüntüsü.

- **Giriş ekranı**  
  `KampüsPost’a Hoş Geldiniz!` üst yazısı, `Giriş Yap` başlığı, e‑posta / şifre alanları ve  
  **“Giriş Yap” / “Kayıt Ol”** butonlarının göründüğü ekran.

- **Kayıt ekranı**  
  E‑posta, Şifre, Şifre Tekrar alanları ve **“Kayıt Ol”** butonunun göründüğü ekran.  
  Şifreler uyuşmadığında çıkan **Alert** penceresinin ekran görüntüsü.  
  Şifreler uyduğunda konsolda görünen **“Kayıt başarılı”** logunun ekran görüntüsü.

- **HomeScreen ve veri çekme**  
  - `Posts verisi:` log’unun göründüğü **DevTools Console** veya terminal ekranı.  
  - `FlatList` ile post’ların listelendiği HomeScreen ekran görüntüsü.  
  - Varsa **“Yükleniyor…”** metninin göründüğü anın ekran görüntüsü.


