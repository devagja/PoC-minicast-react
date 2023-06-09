/// <reference types="vite/client"/>

interface ImportMetaEnv {
  readonly VITE_ITUNES_URL: string
  readonly VITE_ALLORIGINS_URL: string
  readonly VITE_FEEDS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
