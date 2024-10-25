import Renderer from './Renderer';

let renderer;

console.log('Parcel: script loaded');

const bootstrap = async () => {
  console.log('Parcel: bootstrap called');
  return Promise.resolve();
};

const mount = async ({ domElement, id }) => {
  console.log('Parcel: mount called', id);
  renderer = new Renderer(id);
  const element = renderer.createElement();
  domElement.appendChild(element);
  console.log('Parcel: mount completed');
};

const unmount = async () => {
  console.log('Parcel: unmount called');
  renderer.element.remove();
  renderer = null;
  console.log('Parcel: unmount completed');
};

const update = async ({ id }) => {
  console.log('Parcel: update called', id);
  if (renderer) {
    renderer.setId(id);
    console.log('Parcel: update completed');
  }
};

export { bootstrap, mount, unmount, update };
