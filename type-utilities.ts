type Todo = {
  title: string,
  description: string, 
  completed: boolean,
}

const todo: Readonly<Todo> = {
  title: 'Watch Dark again',
  description: 'Remember details',
  completed: false,
}

console.log(todo)

function updateTodo(todo: Todo, fieldsToUpdade: Partial<Todo>) {
   return { ...todo, ...fieldsToUpdade };
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

//// Pick

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo3: TodoPreview = {
  title: 'Beat Ghost of Tsushima',
  completed: false,
}

//// Omit

type TodoPreview2 = Omit<Todo, 'description'>;

const todo4: TodoPreview2 = {
  title: 'Beat The Last of Us 2',
  completed: false, 
}