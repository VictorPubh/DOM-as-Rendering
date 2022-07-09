# DOM as Rendering

A API do DOMR tem como objetivo oferecer renderização de imagens a partir de padrões DOM, oferecendo infinitas possibilidades de estilo.

## Recursos Disponíveis

#### Retorna um Elemento DOM como Imagem

```http
  GET /custom/${tag_html}.png
```

Exemplos:

- /custom/label.png
- /custom/button.png

Note: Nessas duas ocasiões, criamos um elemento <label> e outro <button> consecutivamente.

| Parâmetro   | Tipo                            | Descrição                                                              |
| :---------- | :------------------------------ | :--------------------------------------------------------------------- |
| `tag_html`  | `string`                        | **Obrigatório**. Toda e qualquer tag HTML.                             |
| `styles`    | `object`                        | Toda e qualquer propriedade CSS (em camelCase ou não).                 |
| `text`      | `string`                        | O texto conteúdo da sua Tag, podendo ser listas: Alpha;Brasil;Churasco |
| `trim`      | `boolean`                       | Recurso para recortar sobras de imagem (pixels transparentes).         |
| `enconding` | `"base64" (Padrão) ou "binary"` | Oferece diferentes formas de render.                                   |
| `icon`      | `object`                        | Utiliza imagens alocadas nas pastas como ícone.                        |

Um exemplo para o uso de Ícones:

| Chave            | Exemplo                  | Descrição                                                     |
| :--------------- | :----------------------- | :------------------------------------------------------------ |
| `icon['name']`   | `add-Icon`               | O nome de uma imagem existente em `/assets/{{size}}/`         |
| `icon['size']`   | `"HD" (Padrão) ou "FHD"` | Mais qualidades podem ser criadas, como pastas em `/assets/`. |
| `icon['styles']` | `{ "width": "20px" }`    | Toda e qualquer propriedade CSS (em camelCase ou não).        |

O que em resumo serial algo como:

```json
{
  "name": "add-Icon",
  "size": "HD",
  "styles": {
    "width": "20px"
  }
}
```

Ou mais especificamente: `&icon={"name":"add-Icon","size":"HD","styles":{"width":"20px"}}`

_Obs: Em caso do uso de `text`como lista, o Elemento é replicado várias vezes (com diferente conteúdo) enquanto o ícone não é invocado._

#### Retorna um Ícone

```http
  GET /icon/${image}.png
```

Exemplos:

- /icon/add-Icon.png
- /icon/add-Icon.png?size=FHD

| Parâmetro | Tipo                     | Descrição                                                              |
| :-------- | :----------------------- | :--------------------------------------------------------------------- |
| `image`   | `string`                 | **Obrigatório**. O nome de uma imagem existente em `/assets/{{size}}/` |
| `size`    | `"HD" (Padrão) ou "FHD"` | Mais qualidades podem ser criadas, como pastas em `/assets/`.          |
| `styles`  | `object`                 | Toda e qualquer propriedade CSS (em camelCase ou não).                 |

#### Retorna um Imagem customizada via CSS

```http
  GET /image/${cover}.png
```

Exemplos:

- /image/cover.png
- /image/qualquer-nome-que-eu-quiser.png

| Parâmetro | Tipo     | Descrição                                              |
| :-------- | :------- | :----------------------------------------------------- |
| `cover`   | `string` | **Obrigatório**. Apesar de, é indiferente.             |
| `url`     | `string` | URL da imagem a ser renderizada.                       |
| `styles`  | `object` | Toda e qualquer propriedade CSS (em camelCase ou não). |

### Observações

Em todos os endpoints os mesmos recursos estão disponíveis:

| Parâmetro   | Tipo                            | Descrição                                                      |
| :---------- | :------------------------------ | :------------------------------------------------------------- |
| `styles`    | `object`                        | Toda e qualquer propriedade CSS (em camelCase ou não).         |
| `trim`      | `boolean`                       | Recurso para recortar sobras de imagem (pixels transparentes). |
| `enconding` | `"base64" (Padrão) ou "binary"` | Oferece diferentes formas de render.                           |

#### Limitações

Os URLs são limitados para diferentes Serviços:
| Serviço | Limite Total |
| :------ | :------------------- |
| Chrome | 2.048 |
| Firefox | 65.536 |
| Opera | Ilimitado |
| Safari | 80.000 |
| Apache | 4.000 |

Recomendamos que você remova todos os espaços da URL; Com isso você irá evitar que eles se transformem em "%20", o que torna um caractere inútil (nessa ocasião) em 3 caracteres (mais inúteis ainda).

---

#### Próximos Passos

- [ ] Testes unitários (minimamente)
- [ ] Autenticação via API-key
- [ ] Política Inteligente de Cacheamento
- [ ] Estilos Pré-renderizados (Já embutidos na API)
- [ ] Ícones como SVG, para facil manipulação de Cor

Encontre exemplos de como usar a API (aqui)[https://github.com/VictorPubh/DOM-as-Rendering/blob/main/DOMR.postman_collection.json] via Postman.