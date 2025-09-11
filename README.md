# Landing Page - Dra. Letícia Coelho

Landing page focada em conversão para a Dra. Letícia Coelho, psiquiatra especializada em tratamento humanizado e integrativo.

## 📋 Características

- **Design minimalista** com cores roxas acolhedoras
- **Storytelling** focado na dor do paciente e solução
- **Múltiplos CTAs** estrategicamente posicionados
- **Responsivo** para todos os dispositivos
- **Otimizado para conversão** com foco em agendamento
- **Integração com Doctoralia**

## 🎯 Estrutura da Página

1. **Header** - Navegação fixa
2. **Hero** - Apresentação principal com CTA
3. **Pain Points** - Identificação das dores do paciente
4. **Sobre** - Apresentação da profissional
5. **Serviços** - Como a Dra. Letícia pode ajudar
6. **Especialidades** - Condições tratadas
7. **Depoimentos** - Social proof dos pacientes
8. **CTA Final** - Call-to-action principal
9. **Footer** - Informações de contato

## 🚀 Como Usar

### 1. Preparação das Imagens

Substitua as imagens placeholder pelas fotos reais:

- `dra-leticia.jpg` - Foto profissional da Dra. Letícia (400x400px, formato circular)
- `consultorio.jpg` - Foto do consultório ou ambiente de atendimento

### 2. Personalização do Link do Doctoralia

No arquivo `index.html`, substitua o link do Doctoralia:

```html
<!-- Linha 189 -->
<a href="https://www.doctoralia.com.br/leticia-coelho/psiquiatra/recife" class="btn btn-primary btn-large" target="_blank">
```

### 3. Adição do Código do Doctoralia

No arquivo `script.js`, adicione o código específico fornecido pelo Doctoralia na função `addDoctoraliaCode()`.

## 🌐 Hospedagem Gratuita

### Opção 1: GitHub Pages (Recomendado)

1. Crie uma conta no [GitHub](https://github.com)
2. Crie um novo repositório
3. Faça upload dos arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `dra-leticia.jpg`
   - `consultorio.jpg`
4. Vá em Settings > Pages
5. Selecione "Deploy from a branch"
6. Escolha a branch "main"
7. Seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repositorio`

### Opção 2: Netlify

1. Acesse [Netlify](https://netlify.com)
2. Faça login com GitHub
3. Clique em "New site from Git"
4. Selecione seu repositório
5. O site será publicado automaticamente

### Opção 3: Vercel

1. Acesse [Vercel](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Importe seu repositório
5. Deploy automático

## 📊 Analytics e Tracking

### Google Analytics (Conversões)
1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Substitua `GA_MEASUREMENT_ID` no `index.html` pelo seu ID do GA4
3. Configure eventos de conversão para os CTAs

### Hotjar (Mapas de Calor)
1. Crie uma conta no [Hotjar](https://hotjar.com)
2. Substitua `HOTJAR_ID` no `index.html` pelo seu ID do Hotjar
3. Acesse mapas de calor e gravações de sessão

### Eventos Rastreados:
- Cliques em CTAs (com texto e posição)
- Scroll depth
- Tempo na página
- Comportamento do usuário

## 🎨 Personalização

### Cores
As cores estão definidas no arquivo `styles.css` na seção `:root`:

```css
:root {
    --primary-color: #6b46c1;    /* Roxo principal */
    --primary-light: #8b5cf6;    /* Roxo claro */
    --primary-dark: #553c9a;     /* Roxo escuro */
    --accent-color: #a855f7;     /* Roxo acento */
    /* ... outras cores */
}
```

### Textos
Todos os textos podem ser editados diretamente no arquivo `index.html`.

## 📱 Responsividade

A página é totalmente responsiva e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔧 Funcionalidades JavaScript

- **Smooth scrolling** para navegação interna
- **Animações** de entrada para elementos
- **Header transparente** que fica sólido no scroll
- **Tracking** de cliques nos CTAs
- **Lazy loading** para imagens

## 📞 Suporte

Para dúvidas ou personalizações adicionais, entre em contato através do GitHub ou email.

## 📄 Licença

Este projeto é de uso livre para a Dra. Letícia Coelho.
