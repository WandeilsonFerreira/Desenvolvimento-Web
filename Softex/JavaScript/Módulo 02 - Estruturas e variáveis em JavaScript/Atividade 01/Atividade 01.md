# JavaScipt: Módulo 02 - Atividade 01

### Pesquise sobre padrões de projeto e escolha um para apresentar e descrever o seu funcionamento. Além disso, explique quais as vantagens e desvantagens comparados a outros e mostre suas referências.

 Padrões de projetos

	Padrões de projeto (design patterns) são soluções típicas para problemas comuns em projetos de softwares, são tidos como um conjunto de ferramentas para soluções de problemas comuns em design de software. Cada padrão é como uma planta de construção que você pode customizar para resolver um problema de projeto. 
	Podemos classificá-los de acordo com sua complexidade, nível de detalhe e grau de aplicabilidade. Além disso, eles podem ser categorizados por seu propósito e divididos em três grupos: criacionais, estruturais e comportamentais. 
 
	Singleton Também conhecido como: Carta única é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

	O padrão Singleton resolve dois problemas de uma só vez, violando o princípio de responsabilidade única:
    1. Garantir que uma classe tenha apenas uma única instância. Por que alguém iria querer controlar quantas instâncias uma classe tem? A razão mais comum para isso é para controlar o acesso a algum recurso compartilhado—por exemplo, uma base de dados ou um arquivo.
    2. Fornece um ponto de acesso global para aquela instância. Se lembra daquelas variáveis globais que você (tá bom, eu) usou para guardar alguns objetos essenciais? Embora sejam muito úteis, elas também são muito inseguras uma vez que qualquer código pode potencialmente sobrescrever os conteúdos daquelas variáveis e quebrar a aplicação.
       Assim como uma variável global, o padrão Singleton permite que você acesse algum objeto de qualquer lugar no programa. Contudo, ele também protege aquela instância de ser sobrescrita por outro código.
       Há outro lado para esse problema: você não quer que o código que resolve o problema #1 fique espalhado por todo seu programa. É muito melhor tê-lo dentro de uma classe, especialmente se o resto do seu código já depende dela.
	Hoje em dia, o padrão Singleton se tornou tão popular que as pessoas podem chamar algo de singleton mesmo se ele resolve apenas um dos problemas listados.

Todas as implementações do Singleton tem esses dois passos em comum:
    • Fazer o construtor padrão privado, para prevenir que outros objetos usem o operador new com a classe singleton. 
    • Criar um método estático de criação que age como um construtor. Esse método chama o construtor privado por debaixo dos panos para criar um objeto e o salva em um campo estático. Todas as chamadas seguintes para esse método retornam o objeto em cache. 
Se o seu código tem acesso à classe singleton, então ele será capaz de chamar o método estático da singleton. Então sempre que aquele método é chamado, o mesmo objeto é retornado.



Referencias: 

CLASSIFICAÇÃO DOS PADRÕES. Refactoring.guru, 2022. Disponível em: <https://refactoring.guru/pt-br/design-patterns/classification>. Acesso em: 15, Agosto , 2022.

 
