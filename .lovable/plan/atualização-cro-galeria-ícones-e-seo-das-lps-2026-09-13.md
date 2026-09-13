# Atualização CRO, galeria, ícones e SEO das LPs

## Resultado esperado
- Manter o visitante nas páginas com uma galeria interna de seis cartazes por tema, ampliados em uma janela central e fecháveis por botão, clique externo ou tecla Esc.
- Preservar um vídeo principal e apenas dois acessos ao Instagram na seção: o link discreto do vídeo e o botão institucional geral.
- Reforçar a conversão com rastreamento dos cliques em WhatsApp, Instagram e abertura dos cartazes.
- Corrigir a proporção das logos do rodapé e substituir a foto de União Estável por uma imagem clara, acolhedora e sem texto.
- Exibir quatro ícones diferentes e coerentes nas soluções de cada uma das sete páginas.
- Confirmar sitemap, títulos, descrições e endereços canônicos das nove páginas públicas solicitadas.

## Implementação
1. **Galeria interna**
   - Gerar 42 fotografias/cartazes temporários sem texto, seis para cada tema, com os nomes exatos definidos em `public/`.
   - Trocar os seis links externos por botões de imagem com miniatura, dimensões estáveis, carregamento tardio e modal acessível.
   - Registrar `view_cartaz_modal` com página e posição do cartaz.

2. **Vídeo e Instagram**
   - Manter um reprodutor local por página.
   - Adicionar “Assistir vídeo completo no Instagram”, preservando no HTML o comentário de manutenção solicitado.
   - Manter o botão geral do Instagram e registrar `click_instagram` nos dois pontos.

3. **Soluções e identidade visual**
   - Permitir que cada solução receba seu próprio ícone Lucide.
   - Mapear quatro ícones sem repetição por página, conforme o significado de cada serviço.
   - Corrigir logos dos rodapés para altura fixa e largura automática.
   - Gerar e aplicar uma nova fotografia limpa para União Estável, mantendo a camada escura de leitura.

4. **SEO e medição**
   - Padronizar o sitemap com Home, sete LPs e `/links`.
   - Revisar título, descrição, Open Graph e canonical de cada LP.
   - Garantir `click_whatsapp` em todos os acessos ao WhatsApp das LPs.

5. **Validação**
   - Verificar abertura e fechamento do modal, navegação por teclado, vídeo, links e eventos no navegador.
   - Conferir as sete páginas em desktop e mobile, o sitemap e o resultado de compilação.

## Detalhes técnicos
- O modal será renderizado no componente compartilhado das LPs, com bloqueio de rolagem enquanto aberto, foco no botão de fechar e atributos de acessibilidade.
- Os ícones serão referências de componentes Lucide passadas pelos dados de cada rota.
- As imagens temporárias ficarão em `public/` para permitir substituição manual futura sem alterar o código.
