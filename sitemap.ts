import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.sekolahglobalmajukhatulistiwa.sch.id',
      lastModified: new Date(),
    },
    {
      url: 'https://www.sekolahglobalmajukhatulistiwa.sch.id/tentang-kami',
      lastModified: new Date(),
    },
    // Tambahkan halaman lain di sini jika perlu
  ]
}