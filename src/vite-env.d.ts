/// <reference types="vite/client"/>

interface ImportMetaEnv {
  readonly VITE_ITUNES_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
