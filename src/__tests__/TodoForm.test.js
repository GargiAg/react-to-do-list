import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

test('submits form with valid input', () => {
  const mockAddTask = jest.fn();
  render(<TodoForm addTask={mockAddTask} />);
  const inputElement = screen.getByPlaceholderText(/Add a new task.../i);
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.submit(screen.getByRole('form'));
  expect(mockAddTask).toHaveBeenCalledWith('Test task');
});

test('does not submit form with empty input', () => {
  const mockAddTask = jest.fn();
  render(<TodoForm addTask={mockAddTask} />);
  fireEvent.submit(screen.getByRole('form'));
  expect(mockAddTask).not.toHaveBeenCalled();
});
