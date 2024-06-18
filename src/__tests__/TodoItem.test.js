// TodoItem.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';

const mockTask = { id: 1, text: 'Test task', completed: false };

test('renders TodoItem component', () => {
  render(<TodoItem task={mockTask} />);
  const taskElement = screen.getByText('Test task');
  expect(taskElement).toBeInTheDocument();
});

test('toggles task completion', () => {
  const mockToggleCompletion = jest.fn();
  render(<TodoItem task={mockTask} toggleCompletion={mockToggleCompletion} />);
  const checkboxElement = screen.getByRole('checkbox');
  fireEvent.click(checkboxElement);
  expect(mockToggleCompletion).toHaveBeenCalledWith(1);
});

test('deletes task', () => {
  const mockRemoveTask = jest.fn();
  render(<TodoItem task={mockTask} removeTask={mockRemoveTask} />);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  expect(mockRemoveTask).toHaveBeenCalledWith(1);
});
