# Direct APK Storage Directory

To serve the APK directly from this website:

1. Copy or upload your compiled Android APK into this directory:
   `public/downloads/lg-control-v1.4.2.apk`

2. In `src/config/appConfig.ts`, ensure `APK_DOWNLOAD_URL` points to:
   `APK_DOWNLOAD_URL: "/downloads/lg-control-v1.4.2.apk"`

3. Any file in the `/public` directory is served statically at the root by Vite and Vercel/production web servers. When users click "Download", their browser will download this file directly from your website!
