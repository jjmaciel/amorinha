ESTRUTURA
1 - diretório frontend foi desenvolvido em React com as bibliotecas relacionadas nopackage.json
2- no public/index.html tem um link do bootstrep.css, botstrep.js e jquery.js que é utilizado para
esitlizara algumas partes do site

3 - diretório backend foi desenvolvido em Node e é um webservice com conectado a um banco de dados localhost mongodb
3 - para o projeto funcionar, você precisa ter instalado no seu computador o banco de dados mongodb. As tabelas
utilizadas na base de dados, não é necessário criar uma vez que o models de cada tabela verifica sua existência
e a cria


git graph
https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph

https://marketplace.visualstudio.com/items?itemName=humao.rest-client

https://learngitbranching.js.org/?locale=pt_BR


A escola Amorinha está precisando de um Sistema de Gestão de Alunos (SGA) para controlar o cadastro de 
alunos das turmas de Educação Infantil e ficamos felizes em tê-lo como a pessoa Engenheira de Software 
responsável por desenvolver o Frontend dessa aplicação!! 💰💵

Nós conversamos com o cliente e levantamos os seguintes requisitos para entregar um MVP da aplicação:

1. Um formulário para o cadastro dos Alunos contendo os seguintes campos:
    1. Nome
    2. Data de Nascimento
    3. Nome do Responsável pela criança
    4. Telefone de Contato do Responsável pela criança
    5. Em caso de emergência avisar: (Pais, Tios, Avós, Padrinhos)
    6. Telefone para Emergências
    7. Possui Restrição Alimentar
    8. Descrição das Restrições Alimentares
    9. Autorização de fotos e vídeos da criança para uso escolar
    10. Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia
    11. Turma
    12. Observações adicionais

2. Uma listagem de Alunos que permita editar e excluir alunos e apresente para o usuário os principais campos:
    1. Nome
    2. Data de Nascimento
    3. Turma
    4. Telefone para Emergências
    5. Em caso de emergência avisar

3. Um campo de texto acima da listagem que será utilizado para filtrar os alunos pelo nome.

• Na tela de cadastro o campo “Descrição das Restrições Alimentares”  somente ficará visível caso a criança possua restrições alimentares;
• No campo Turma será apresentado para escolha uma lista de turmas disponíveis, você não precisa criar uma tela de cadastro para elas, somente uma consulta das mesmas.
• Os campos “Possui Restrição Alimentar” e Autorização para uso de fotos e vídeos da criança para uso escolar serão do tipo Checkbox
• A função editar colocará os dados do aluno no formulário de cadastro


Agora é com você!
Realize anotações necessárias, planeje o desenvolvimento do FrontEnd e avance para os próximos passos.

Dica: Utilize o próprio Trello para planejar o desenvolvimento.
Chame o Tutor sempre que precisar.

Um ótimo desafio a você! 


./public = terá os arquivos que serão compartilhados entre todos os arquivos
./src = onde está o projeto
./src/components = será a pasta de destino dos componentes necessários para o App
./src/pages = local de armazenamento das páginas