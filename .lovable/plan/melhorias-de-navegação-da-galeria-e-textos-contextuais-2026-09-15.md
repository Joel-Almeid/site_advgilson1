# Melhorias de navegação da galeria e textos contextuais

## Implementação
- Adicionar controles anterior/próximo ao modal, com navegação cíclica entre as seis imagens.
- Permitir navegação pelas teclas esquerda/direita, manter fechamento por Escape e adicionar gesto horizontal no celular.
- Preservar foco acessível, nomes claros nos controles e impedir que gestos curtos troquem imagens acidentalmente.
- Tornar o título de autoridade e o subtítulo do rodapé configuráveis no componente compartilhado.
- Aplicar os textos de Família, Patrimônio/Imóveis e Imobiliário/Fundiário nas sete páginas conforme solicitado.
- Atualizar o subtítulo do rodapé da página inicial para “Advocacia Estratégica e Especializada · Atendimento sigiloso.”

## Validação
- Conferir abertura, setas, ciclo da primeira para a última imagem, teclado, Escape e swipe em tela móvel.
- Verificar visualmente os textos nas páginas de Família, Inventário, Imobiliário/Fundiário e Home.
- Confirmar que o projeto continua compilando sem erros.

## Detalhes técnicos
- O modal continuará usando a galeria local existente e o mesmo evento de visualização; a troca de imagem não abrirá links externos.
- O swipe será reconhecido somente após um deslocamento horizontal mínimo, evitando conflitos com toques comuns.
