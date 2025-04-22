import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // ou './' se preferir relativo ao repositório
  plugins: [react()],
  server: {
    port: 5173,          // Força rodar sempre na porta 5173 (opcional)
    open: true,          // Abre o navegador automaticamente quando inicia
    strictPort: true,    // Se a porta 5173 estiver ocupada, NÃO muda pra outra
    hmr: {
      overlay: true,     // Mostra os erros diretamente na tela (já vem por padrão)
    },
  },
  preview: {
    port: 4173,          // Preview no padrão da Vite
    open: true,          // Abre o navegador automaticamente no preview
  },
})
