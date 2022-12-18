import { render, screen } from '@testing-library/react';
import AppFormWithUseRef from './AppFormWithUseRef';

// Ojo el test falla porque es el que se crea por default al utilizar create-react-App, hay que cambiar esta parte para hacer test

// Para que funcionen los test hay que correrlos con npm test

// test('renders learn react link', () => {
//   render(<App />);
//    const linkElement2 = screen.getByText(/Home/i);
//   expect(linkElement2).toBeInTheDocument();
// });

test('renders Ejemplo text', () => {
  render(<AppFormWithUseRef />);
  const textElement = screen.getByText(/Ejemplo de useRef para formulario/i);
  expect(textElement).toBeInTheDocument();
});


// para mayor informacion ver : https://jestjs.io/es-ES/docs/using-matchers


