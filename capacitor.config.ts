import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Carsale',
  webDir: 'www',
  server: {
    androidScheme: 'http',
    allowNavigation: ['http://localhost:8080'],
  },
};

export default config;
