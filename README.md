# 🎬 Movie & TV Explorer

TMDB (The Movie Database) API kullanılarak geliştirilmiş, film ve dizi keşfetme uygulaması. React 19 ve Vite ile oluşturulmuştur.

## Özellikler

- 🔍 **Arama** — Film ve dizi arasında anlık arama
- 🎥 **Film & Dizi Listeleri** — Haftalık trend olan film ve dizileri keşfetme
- 📄 **Detay Sayfaları** — Film/dizi detayları ve benzer içerik önerileri
- 🎭 **Aktör Detayları** — Oyuncu bilgileri ve filmografi
- ⭐ **İzleme Listesi (Watchlist)** — Beğenilen film/dizileri kaydetme (localStorage ile kalıcı)
- 🌗 **Tema Seçici** — Açık/koyu tema desteği (localStorage ile kalıcı)
- 🔐 **Giriş / Kayıt** — Form doğrulamalı login ve register sayfaları
- 📱 **Responsive Tasarım** — Bootstrap 5 ile mobil uyumlu arayüz

## Ekran Görüntüleri

<table>
  <tr>
    <td align="center"><b>Ana Sayfa</b></td>
    <td align="center"><b>Filmler</b></td>
  </tr>
  <tr>
     <td><img src="https://github.com/user-attachments/assets/c54897e2-4e5e-4d14-b327-db5e9ca40ed1" width="450"/></td>
    <td><img width="450" alt="Image" src="https://github.com/user-attachments/assets/2182078f-c4d2-44ee-adc7-d6b5381fe240" /></td>
    
  </tr>
  <tr>
    <td align="center"><b>Film Detayı</b></td>
    <td align="center"><b>Diziler</b></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/0300793e-1387-4448-81ed-5cfa7a92bba8" width="450"/></td>
    <td><img width="450" alt="Image" src="https://github.com/user-attachments/assets/b3daef5c-58f0-417a-bdee-7d2be535ffdc" /></td>

  </tr>
  <tr>
    <td align="center"><b>Aktör Detayı</b></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/796cabfb-41ba-4467-b911-08cffcb0c207" width="450"/></td>
    <td><img src="https://github.com/user-attachments/assets/1a502542-6e9a-4b4d-926b-69bcf40fa039" width="450"/></td>
  </tr>
  <tr>
    <td align="center"><b>İzleme Listesi</b></td>
    <td align="center"><b>Giriş</b></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/ab77a6eb-a540-4637-90c1-3ee250ba541f" width="450"/></td>
   <td><img src="https://github.com/user-attachments/assets/11265204-7fc7-43ae-8de7-f32dfef8c61f" width="450"/></td>
    
  </tr>
  <tr>
    <td align="center"><b>Kayıt Ol</b></td>
    <td align="center"><b>Tema Seçici</b></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/52265ea3-5c88-4bc3-919d-4e8dcd44a937" width="450"/></td>
    <td><img src="https://github.com/user-attachments/assets/96625417-aeb9-4acd-abb7-d18b7e318b5c" width="450"/></td>
  </tr>
</table>

> Not: Görsellerin sırası tahmini yerleştirildi — hangi görselin hangi sayfaya ait olduğunu bilmediğim için akışa göre sıraladım. Yanlış eşleşen varsa `<img src="...">` satırlarının yerlerini değiştirmen yeterli, yapı bozulmaz.

## Kullanılan Teknolojiler

- **React 19** — UI kütüphanesi
- **React Router 7** — Sayfa yönlendirme
- **Vite** — Build tool ve dev server
- **Bootstrap 5** & **Bootstrap Icons** — UI bileşenleri ve ikonlar
- **Animate.css** — Sayfa/bileşen animasyonları
- **TMDB API** — Film ve dizi verileri
- **Context API** — Tema ve kullanıcı (watchlist) durum yönetimi
- **ESLint** — Kod kalitesi kontrolü

## Kurulum

```bash
# Depoyu klonla
git clone https://github.com/ozanyazici9/react-app.git
cd react-app

# Bağımlılıkları yükle
npm install
```

### Ortam Değişkenleri

Projenin çalışması için TMDB API bilgilerini içeren bir `.env` dosyası oluşturman gerekiyor:

```env
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_API_KEY=your_tmdb_api_key
VITE_API_IMG_BASE_URL=https://image.tmdb.org/t/p/original
VITE_API_LANGUAGE_EN=en-US
VITE_API_LANGUAGE_TR=tr-TR
VITE_IMG_PLACEHOLDER=/placeholder.png
```

> TMDB API anahtarını [themoviedb.org](https://www.themoviedb.org/settings/api) üzerinden ücretsiz oluşturabilirsin.

### Çalıştırma

```bash
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde açılır.

### Build

```bash
npm run build
npm run preview
```

## Proje Yapısı

```
src/
├── components/     # Yeniden kullanılabilir UI bileşenleri (Navbar, Pagination, MovieTvList vb.)
├── contexts/       # Theme ve User (watchlist) context'leri
├── hooks/          # Özel React hook'ları
├── layouts/        # Sayfa düzenleri (MainLayout)
├── pages/          # Route sayfaları (Home, Movies, TvShows, MovieDetails vb.)
├── utils/          # Yardımcı fonksiyonlar (TMDB görsel URL'leri, form doğrulama)
├── config/         # Ortam değişkeni yapılandırması
└── data.js         # Statik veri
```

## Lisans

Bu proje kişisel öğrenme/portfolyo amacıyla geliştirilmiştir.
