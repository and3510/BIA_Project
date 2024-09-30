<h1 align="center">BIA - Bot Inteligente Acadêmico</h1>

<div align="center">

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![Static Badge](https://img.shields.io/badge/TYPEBOT-blue?style=for-the-badge&logo=probot&logoColor=white)
![Static Badge](https://img.shields.io/badge/NOCODB-purple?style=for-the-badge&logo=amazondynamodb&logoColor=white&logoSize=20px)
![Static Badge](https://img.shields.io/badge/EVOLUTION%20API-greenlight?style=for-the-badge&logo=whatsapp&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


</div>

## Sumário

* [Integrantes](#integrantes)
* [Descrição](#descrição)
* [Requisitos](#requisitos)
* [Tecnologias](#tecnologias)
* [Fluxo do Software](#fluxo-do-software)
* [Dificuldades](#dificuldades)
* [Resultados](#resultados)
* [Conclusão](#conclusao)

## Integrantes

- Anderson do Vale - [and3510](https://github.com/and3510) 
- Beatriz Barreto - [whosbea](https://github.com/whosbea)
- Cristovam Paulo - [cristovam10000](https://github.com/cristovam10000)
- Guilherme de Assis - [onizuka465](https://github.com/onizuka465)
- Gustavo do Vale - [gustavodovale](https://github.com/gustavodovale)
- Lucas Cesar - [lucascesar1107](https://github.com/lucascesar1107)

## Descrição

Chatbot universitário que ajuda os alunos a acessarem informações de forma rápida e precisa

## Requisitos
 
- Ser **aplicado no Whatsapp** - Não Funcional
- Ter uma função para **mandar Calendario Acadêmico** - Funcional
- Ter uma função para **mostrar horarios das provas** - Funcional
- Ter uma função para **mostrar as faltas do aluno** - Funcional
- Ter uma função para **o usuario reportar problemas da faculdade,chatbot ou curso** - Funcional
- Ter uma função para **pesquisar livros que estão na biblioteca** - Funcional
- Ter uma função para **mostrar as notas das provas e quizzes do aluno** - Funcional
- Ter uma função para **mostrar os números de telefone e emails da instituição** - Funcional
- Ter uma função para **começar um bate papo com uma IA, para tirar duvidas sobre as materias** - Funcional
- Usar Banco para **armazenar e buscar informações** - Não Funcional


## Tecnologias

- **Typebot**: Plataforma para criar chatbots interativos, sem programação complexa.
- **NocoDB**: Banco de dados visual que transforma dados em planilhas.
- **Evolution API**: Automação para envio de mensagens via WhatsApp.
- **WhatsApp**: Plataforma para troca de mensagens e comunicação instantânea.
- **ChatGPT**: IA para geração de conversas em linguagem natural.
- **Docker**: Virtualização de aplicações em contêineres para qualquer ambiente.
- **Postman**: Ferramenta para testar, monitorar e documentar APIs.


## Fluxo do Software

<div align="center">
  
<img src="./images/ilustration.png" alt="Descrição da Imagem" width="500">

</div>



## Dificuldades

Realizar pesquisas acadêmicas com os alunos é desafiador devido à baixa participação, causada por falta de tempo ou desinteresse no tema. A sobrecarga de atividades acadêmicas e extracurriculares dificulta o comprometimento dos estudantes, afetando a qualidade e quantidade das respostas.

Tivemos problemas durante a execução dos testes do protótipo devido ao grande número de solicitações, o que causou algumas sobrecargas e paralisações nos testes.

Além disso, gastamos um tempo tentando enviar uma requisição HTTP da plataforma **Typebot** para a **API Evolution**.Felizmente, conseguimos ter sucesso após expor o serviço local à internet usando o comando `ngrok` no Linux.



## Resultados

### Fluxo do Typebot

<div align="center">



![Descrição do GIF](./images/typebot.gif)

**Fluxo de criação do bot na plataforma Typebot**

</div>

### Plataforma de Gerenciamento

<div align="center">

<img src="./images/plataform.png" alt="Descrição da Imagem" width="650">

**Plataforma para gerenciar as funcionalidades do bot, executado em contêiner**

</div>

### Tabelas do Banco de Dados


<div align="center">
  
<img src="./images/dbnoco.png" alt="Descrição da Imagem" width="650">

</div>

<br>

- A criação de personagens e dados fictícios foi realizada para testes com o chatbot e o banco de dados.
- Sete salas foram criadas, cada uma abrigando um personagem específico.
- O cursos criados foram 3 (Engenharia Software, Direito, Administração) com periodos diferentes e turnos.

### Menu Principal de Botões

<div style="text-align: center; margin-top: 20px;">
    <table border="0" cellspacing="0" cellpadding="0" style="margin: auto;">
        <tr>
            <td style="border: 0; width: 800px; vertical-align: top; padding-top: 20px;">
                <img src="./images/menu_main.jpeg" alt="Descrição da Imagem" width="800">
            </td>
            <td style="vertical-align: top; padding-top: 20px;">
                A implementação de um menu interativo é essencial para melhorar a experiência do usuário em aplicativos e plataformas. Neste contexto, a API Evolution fornece uma maneira eficiente de criar menus dinâmicos e personalizáveis. Neste artigo, vamos explorar como desenvolver um menu com 8 botões utilizando a sendList da API Evolution.
            </td>
        </tr>
    </table>
</div>


### Feedback para o chatbot

<div align="center">

<img src="./images/feedback.png" alt="Descrição da Imagem" width="550" height="300">

**Aviso de feedback, após os usuarios encerrarem a conversa com o bot**

</div>



## Conclusão




