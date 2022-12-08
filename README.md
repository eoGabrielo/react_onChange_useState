# Alteração de valor instantâneo com variável de estado.

Com react é possível pegar um input do usuário e atualizá-lo em algum lugar aplicando o evento onChange no input.<br>
O onChange é um evento que se atualiza a cada alteração de valores, no caso a cada alteração do input. Foi utilizado uma função do React (useState) para ter uma variável dinâmica(nome), que possa alterar de valor sempre que necessário.<br>
<br>
Dentro do e vento onChange criamos uma arrow function que recebe o evento do input que no caso é toda a alteração dos valores e chamamos o setNome do useState para receber essa alteração colocando dentro dos parentes que queremos pegar<br>
o evento . somente . valor -> setNome(e.target.value).

<strong> < input onChange={(e) => setNome(e.target.value)} type="text"></input > </strong>

E para finalizar foi adicionado na estrutura HTML a variável dinâmica (nome), que sera alterada a cada alteração de valor do input.
