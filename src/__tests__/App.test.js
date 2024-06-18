// App.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '@src/App.js';

test('renders app title', () => {
    render(<App />);
    const headerElement = screen.getByText(/React Todo List/i);
    expect(headerElement).toBeInTheDocument();
});
  

test('adds and removes a task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task.../i);
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.submit(screen.getByRole('form'));
  const taskElement = screen.getByText('Test task');
  expect(taskElement).toBeInTheDocument();
  fireEvent.click(screen.getByText('Delete'));
  const deletedTask = screen.queryByText('Test task');
  expect(deletedTask).toBeNull();
});
