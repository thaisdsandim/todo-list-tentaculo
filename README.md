# Como rodar o projeto?
Para rodar o projeto localmente, você precisará seguir algumas etapas. Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em seu sistema. Se você ainda não os tiver instalado, pode fazer o download e instalá-los em [Node.js](https://nodejs.org/pt-br).

Aqui estão as etapas detalhadas para executar o projeto localmente:

## Passo 1: Clone o repositório

Abra o terminal ou prompt de comando e navegue até a pasta onde você deseja clonar o repositório do projeto. Em seguida, execute o seguinte comando para clonar o repositório do GitHub:

```bash
git clone https://github.com/thaisdsandim/todo-list-tentaculo.git
```

## Passo 2: Acesse o diretório do projeto

Navegue até o diretório do projeto usando o terminal:

```bash
cd todo-list-tentaculo
```

## Passo 3: Instale as dependências

No diretório do projeto, execute o comando a seguir para instalar as dependências do projeto listadas no arquivo package.json:

```bash
npm install
```

Isso instalará todas as bibliotecas e pacotes necessários para o projeto.

## Passo 4: Inicie o servidor de desenvolvimento

Após a conclusão da instalação das dependências, você pode iniciar o servidor de desenvolvimento. No terminal, execute o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no navegador padrão. Você pode acessar o aplicativo localmente em http://localhost:3000.

## Passo 5: Explore o aplicativo

Agora você deve ter o aplicativo rodando localmente. Você pode interagir com ele diretamente no navegador. O aplicativo deve funcionar como esperado, permitindo que você adicione, atualize, exclua e visualize tarefas.

Lembre-se de que, enquanto o servidor de desenvolvimento estiver em execução, ele oferecerá atualizações automáticas conforme você fizer alterações no código-fonte. Você pode parar o servidor de desenvolvimento pressionando Ctrl + C no terminal.

Isso conclui as etapas para rodar seu projeto localmente. Certifique-se de que as dependências foram instaladas com sucesso e o servidor de desenvolvimento está em execução para começar a usar o aplicativo.

# App
O componente `App` é a raiz do aplicativo React. Ele importa os seguintes componentes:
- `ToDoList`: Componente responsável por exibir a lista de tarefas em três categorias: "A Fazer", "Fazendo" e "Feitas".
- `ToDoForm`: Componente responsável por adicionar novas tarefas à lista.
- `ToDoCalendar`: Componente responsável por exibir um calendário de tarefas.
- `Button`: Componente de botão comum usado para alternar entre a visualização da lista e a visualização do calendário.

O estado é gerenciado no componente `App` com os seguintes estados:
- `toDos`: Uma matriz que armazena todas as tarefas.
- `view`: Uma string que controla qual visualização (lista ou calendário) deve ser exibida.

Usando o `useEffect`, o aplicativo verifica o armazenamento local (`localStorage`) para tarefas salvas quando é montado e carrega as tarefas salvas, se houver alguma.

Existem três funções principais no `App`:
- `addToDo`: Adiciona uma nova tarefa à lista de tarefas.
- `updateToDo`: Atualiza uma tarefa existente na lista de tarefas.
- `deleteToDo`: Exclui uma tarefa da lista de tarefas.

O conteúdo do aplicativo é renderizado com base na variável de estado `view`. Se `view` for "list", ele renderiza a `ToDoList`. Se view for "calendar", ele renderiza o `ToDoCalendar`.

Os botões "Visualizar Lista" e "Visualizar Calendário" permitem alternar entre as visualizações de lista e calendário.

No geral, este aplicativo React oferece uma maneira flexível de gerenciar tarefas, permitindo aos usuários escolherem entre a visualização de lista e a visualização de calendário. Ele também armazena as tarefas localmente para que os usuários possam continuar de onde pararam em sessões subsequentes.

# Componentes do ToDo
Nesta pasta, você encontrará uma coleção de componentes relacionados à funcionalidade de lista de tarefas ("ToDo") do aplicativo. Cada componente desempenha um papel específico na exibição, criação, edição e exclusão de tarefas. Abaixo, está descrito cada um desses componentes em detalhes.

## ConfirmationModal
O componente `ConfirmationModal` é usado para exibir um modal de confirmação com um título, mensagem e botões "Sim" e "Não". Ele é geralmente usado para confirmar ações críticas, como excluir um item. Este componente possui os seguintes atributos:

- `isOpen` (booleano): Controla a visibilidade do modal de confirmação.
- `title` (string): O título exibido no topo do modal.
- `message` (string): A mensagem de confirmação exibida aos usuários.
- `onConfirm` (função): Uma função que será chamada quando o usuário clicar no botão "Sim".
- `onCancel` (função): Uma função que será chamada quando o usuário clicar no botão "Não".

Exemplo de Uso:

```jsx
import ConfirmationModal from "./ConfirmationModal";

<ConfirmationModal
  isOpen={isModalOpen}
  title="Confirmação de Exclusão"
  message="Tem certeza que deseja excluir este item?"
  onConfirm={handleConfirmDelete}
  onCancel={handleCancelDelete}
/>
```

## ToDoCalendar
O componente `ToDoCalendar` é responsável por exibir um calendário de tarefas e permite aos usuários interagirem com as tarefas selecionadas. Ele usa o plugin FullCalendar para renderizar eventos de tarefas em um calendário. Este componente possui os seguintes atributos:

- `toDos` (array): Uma matriz de tarefas que serão exibidas no calendário.
- `onUpdate` (função): Uma função que será chamada quando o usuário atualizar uma tarefa.
- `onDelete` (função): Uma função que será chamada quando o usuário excluir uma tarefa.

Exemplo de Uso:

```jsx
import ToDoCalendar from "./ToDoCalendar";

<ToDoCalendar toDos={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
```

## ToDoForm
O componente `ToDoForm` é responsável por permitir que os usuários adicionem novas tarefas à lista. Ele possui os seguintes atributos:

- `onAdd` (função): Uma função que será chamada quando o usuário adicionar uma nova tarefa.

Exemplo de Uso:

```jsx
import ToDoForm from "./todo/ToDoForm";

<ToDoForm onAdd={handleAddToDo} />
```

## ToDoItem
O componente `ToDoItem` exibe uma tarefa na lista de tarefas e oferece a opção de edição, exclusão e atualização do status da tarefa. Ele possui os seguintes atributos:

- `toDo` (objeto): A tarefa a ser exibida e manipulada.
- `onDelete` (função): Uma função que será chamada quando o usuário excluir uma tarefa.
- `onUpdate` (função): Uma função que será chamada quando o usuário atualizar uma tarefa.

Exemplo de Uso:

```jsx
import ToDoItem from "./todo/ToDoItem";

<ToDoItem toDo={task} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
```

## ToDoList
O componente `ToDoList` exibe a lista de tarefas em três categorias: "A Fazer", "Fazendo" e "Feitas". Ele agrupa as tarefas de acordo com seu status e permite que os usuários interajam com elas.

- `toDos` (array): Uma matriz de tarefas a serem exibidas.
- `onDelete` (função): Uma função que será chamada quando o usuário excluir uma tarefa.
- `onUpdate` (função): Uma função que será chamada quando o usuário atualizar uma tarefa.

Exemplo de Uso:

```jsx
import ToDoList from "./todo/ToDoList";

<ToDoList toDos={tasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
```

## ToDoModal
O componente `ToDoModal` exibe detalhes de uma tarefa, permitindo aos usuários editá-la, excluí-la ou visualizá-la. Ele possui os seguintes atributos:

- `toDo` (objeto): A tarefa a ser exibida no modal.
- `onClose` (função): Uma função que será chamada quando o modal for fechado.
- `onUpdate` (função): Uma função que será chamada quando o usuário atualizar a tarefa.
- `onDelete` (função): Uma função que será chamada quando o usuário excluir a tarefa.

Exemplo de Uso:

```jsx
import ToDoModal from "./todo/ToDoModal";

<ToDoModal toDo={task} onClose={closeModal} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
```

# Componentes Comuns

Esta pasta contém uma coleção de componentes comuns que podem ser reutilizados em todo o projeto. Esses componentes foram projetados para facilitar o desenvolvimento e a manutenção de interfaces de usuário consistentes e reativas. Abaixo, está descrito cada um desses componentes em detalhes.

## Alert

O componente `Alert` é usado para exibir mensagens de alerta ou notificações para os usuários. Ele possui os seguintes atributos:

- `message` (string): A mensagem que deseja exibir no alerta.
- `onClose` (função): Uma função que será chamada quando o usuário clicar no botão de fechar (x) no canto superior direito do alerta.

Exemplo de uso:

```jsx
import Alert from "./common/Alert";

<Alert message="Esta é uma mensagem de alerta!" onClose={handleClose} />
```

## Button
O componente `Button` é uma representação simples de um botão que pode ser usado em várias partes do aplicativo. Ele possui os seguintes atributos:

- `onClick` (função): Uma função que será executada quando o botão for clicado.
- `label` (string): O rótulo ou texto a ser exibido no botão.

Exemplo de uso:

```jsx
import Button from "./common/Button";

<Button label="Clique-me" onClick={handleClick} />
```

## DateInput

O componente `DateInput` é um campo de entrada de data que permite aos usuários selecionar uma data em um formato específico. Ele possui os seguintes atributos:

- `name` (string): O nome do campo de entrada.
- `value` (string): O valor da data selecionada.
- `onChange` (função): Uma função que será chamada quando o valor da data for alterado.

Exemplo de uso:

```jsx
import DateInput from "./common/DateInput";

<DateInput name="data" value={data} onChange={handleDateChange} />
```

## Input

O componente `Input` é um campo de entrada de texto genérico que pode ser usado para coletar informações do usuário. Ele possui os seguintes atributos:

- `name` (string): O nome do campo de entrada.
- `placeholder` (string): O texto de placeholder exibido quando o campo está vazio.
- `value` (string): O valor atual do campo.
- `onChange` (função): Uma função que será chamada quando o valor do campo for alterado.

Exemplo de uso:

```jsx
import Input from "./common/Input";

<Input name="nome" placeholder="Digite seu nome" value={nome} onChange={handleNomeChange} />
```
