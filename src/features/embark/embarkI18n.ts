import {
  combineI18NResources,
  LOCAL_STORAGE_I18N_KEY,
  type ProviderConfig,
} from '@embarkai/ui-kit';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const embarkI18nResources = combineI18NResources();

export function initializeEmbarkI18n() {
  if (i18n.isInitialized) return;

  void i18n.use(initReactI18next).init({
    // EmbarkAI exposes a generic resource map compatible with i18next at runtime.
    // @ts-expect-error The SDK resource type is intentionally less specific than i18next's Resource.
    resources: embarkI18nResources,
    lng: localStorage.getItem(LOCAL_STORAGE_I18N_KEY) || 'en',
    fallbackLng: 'en',
    defaultNS: 'passport',
    ns: ['passport'],
    interpolation: { escapeValue: false },
  });
}

export const embarkBridgeConfig = {
  preferedColorMode: 'light',
  translations: embarkI18nResources,
  ui: {
    title: 'Hyperlane Bridge',
    subtitle: 'Sign in to bridge assets',
  },
  features: {
    showAssetBridge: true,
  },
} as Partial<ProviderConfig>;
