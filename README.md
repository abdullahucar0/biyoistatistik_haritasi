# Biyoistatistik Atlası

Lise öğrencileri için **sağlık örnekleriyle**, **interaktif grafiklerle** ve **biyoistatistik tarihiyle iç içe** temel istatistik eğitimi sunan, tamamen statik (yalnızca HTML/CSS/JS) bir web sitesi.

Her test için ayrı bir sayfa vardır. Her sayfada:
- testi bulan kişinin kısa hikâyesi ("Zaman Pulu"),
- testin tarihte neyi değiştirdiği,
- günlük dilde, sağlıktan basit bir örnekle anlatım,
- kaydırıcılarla oynanan **interaktif "Deney Masası"** (abartılı örneklerle testin nasıl çalıştığını gösterir).

## Sayfalar

| Dosya | Konu | Tarihsel durak |
|-------|------|----------------|
| `index.html` | Ana sayfa + zaman şeridi | — |
| `tanimlayici.html` | Tanımlayıcı istatistik (ortalama, medyan, SS) | 1835 · Quetelet |
| `korelasyon.html` | Korelasyon (r) | 1896 · Pearson |
| `regresyon.html` | Basit doğrusal regresyon | 1886 · Galton |
| `ki-kare.html` | Ki-kare testi | 1900 · Pearson |
| `t-testi.html` | t-testi | 1908 · Gosset ("Student") |
| `anova.html` | Varyans analizi (ANOVA) | 1925 · Fisher |

## Klasör yapısı

```
biyoistatistik-atlasi/
├── index.html
├── tanimlayici.html
├── korelasyon.html
├── regresyon.html
├── ki-kare.html
├── t-testi.html
├── anova.html
├── css/
│   └── stil.css        # ortak stil (renk paleti, mobil uyum)
└── js/
    └── ortak.js        # ortak istatistik fonksiyonları
```

Grafikler [Chart.js](https://www.chartjs.org/) ile çizilir (CDN üzerinden yüklenir; internet gerekir).

## GitHub Pages ile yayınlama

1. Bu klasörün içeriğini bir GitHub deposuna yükleyin (ör. depo adı `biyoistatistik-atlasi`).
2. Depoda **Settings → Pages** bölümüne gidin.
3. **Source** olarak `Deploy from a branch` seçin, `main` dalını ve `/ (root)` klasörünü seçin.
4. Birkaç dakika içinde site şu adreste yayınlanır:
   `https://KULLANICI-ADINIZ.github.io/biyoistatistik-atlasi/`

> Not: Tüm bağlantılar göreli (relative) olduğu için site hem alt klasörde hem kök alanda sorunsuz çalışır.

## İleri proje bağlantısı

Sitedeki "🚧 İleri Biyoistatistik Atlası — yakında" bağlantıları şu an yer tutucudur (`href="#"`).
Kardeş proje hazır olduğunda bu bağlantıları gerçek adresle değiştirmeniz yeterlidir.

## Not

Grafiklerdeki tüm veriler **öğretim için üretilmiş örnek verilerdir**; gerçek klinik veriler değildir.
p-değeri ve F hesapları öğretim amacıyla sadeleştirilmiş yaklaşımlar kullanır.
