# Ícones

Os ícones devem ser importados diretamente de `lucide-react` e normalmente usar
**18px ou 20px**, definidos pela prop `size`.
Mantenha o mesmo tamanho entre ícones de um mesmo contexto.

```tsx
import { ArrowRight, MapPin } from 'lucide-react';

<ArrowRight size={18} />
<MapPin size={20} />
```

Outros tamanhos são permitidos quando o contexto exigir, como em ilustrações
decorativas. Trate esses casos como exceções ao padrão.

[Voltar ao índice do design system](README.md).
