# React: Atualização Instantânea de Valores

Este projeto exemplifica a capacidade do React de capturar a entrada do usuário e atualizá-la dinamicamente em um local específico, utilizando o evento `onChange` em um campo de entrada. O evento `onChange` é acionado a cada alteração de valor no campo, e para facilitar essa dinâmica, empregamos a função `useState` do React para criar uma variável dinâmica (`nome`), permitindo atualizações instantâneas.

## Funcionamento

Dentro do evento `onChange`, uma arrow function é criada para receber o evento do input, que representa todas as alterações de valores. O `setNome` do `useState` é utilizado para capturar e atualizar essa alteração, atribuindo o valor desejado, obtido através de `e.target.value`.

```jsx
<input onChange={(e) => setNome(e.target.value)} type="text">
```

## Integração com HTML

A variável dinâmica `nome`, criada com `useState`, é integrada à estrutura HTML, proporcionando uma representação visual imediata de cada alteração de valor no input.

```jsx
{/* Sua estrutura HTML aqui */}
<div>{nome}</div>
```

## Como Usar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o aplicativo com `npm start`.
4. Abra o navegador e acesse o aplicativo.
