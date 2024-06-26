/* import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateForm from './CreateForm';

test('renders CreateForm component', () => {
  render(<CreateForm />);
  const element = screen.getByText(/some text/i); // Подставьте соответствующий текст
  expect(element).toBeInTheDocument();
});
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//import CreateForm from '../components/CreateForm.jsx';
import CreateForm from './CreateForm';

test('renders CreateForm and handles form submission', () => {
  render(<CreateForm />);

  const nameInput = screen.getByPlaceholderText('Name');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const createButton = screen.getByText('Create');

  fireEvent.change(nameInput, { target: { value: 'Test Task' } });
  fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
  fireEvent.click(createButton);

  expect(createButton).toHaveTextContent('Creating..');
});
