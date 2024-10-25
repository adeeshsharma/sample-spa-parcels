export default class Renderer {
    constructor(id) {
      console.log('Renderer constructor called with id:', id);
      this.id = id.toString();
      this.element = document.createElement('div');
      this.updateData();
    }
  
    createElement() {
      console.log('Renderer createElement called');
      return this.element;
    }
  
    async updateData() {
      console.log('Renderer updateData called with id:', this.id);
      this.element.innerHTML = `<p>Loading data for ID #${this.id}...</p>`;
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.id}` // Mock API updated
        );
        const data = await response.json();
        console.log('Fetched data:', data);
        this.element.innerHTML = `
          <h3>Post #${data.id}</h3>
          <p>Title: ${data.title}</p>
          <p>Body: ${data.body}</p>
        `;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.element.innerHTML = `
          <p>Error loading data for ID #${this.id}.</p>
        `;
      }
    }
  
    setId(newId) {
      console.log('Renderer setId called with newId:', newId);
      this.id = newId;
      this.updateData();
    }
  }
  