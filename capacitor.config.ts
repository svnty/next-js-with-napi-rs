import type { CapacitorConfig } from '@capacitor/cli';

const isProduction = process.env.NODE_ENV === 'production';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'rust-napi-next-app',
  webDir: 'out',
  server: {
    url: 'http://localhost:3000',
    cleartext: !isProduction
  }
};

export default config;
