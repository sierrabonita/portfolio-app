/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_NAME: string;
  readonly VITE_USER_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
