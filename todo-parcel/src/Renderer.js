export default class Renderer {
  constructor(id) {
    console.log('Renderer constructor called with id:', id);
    this.id = id.toString();
    this.element = document.createElement('div');
    this.updateTodo();
  }

  createElement() {
    console.log('Renderer createElement called');
    return this.element;
  }

  async updateTodo() {
    console.log('Renderer updateTodo called with id:', this.id);
    this.element.innerHTML = `<p>Loading todo #${this.id}...</p>`;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.id}`
      );
      const todo = await response.json();
      console.log('Fetched todo:', todo);
      this.element.innerHTML = `
        <h3>Todo #${todo.id}</h3>
        <p>Title: ${todo.title}</p>
        <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
      `;
    } catch (error) {
      console.error('Error fetching todo:', error);
      this.element.innerHTML = `
        <p>Error loading todo #${this.id}.</p>
      `;
    }
  }

  setTodoId(newId) {
    console.log('Renderer setTodoId called with newId:', newId);
    this.id = newId;
    this.updateTodo();
  }
}
