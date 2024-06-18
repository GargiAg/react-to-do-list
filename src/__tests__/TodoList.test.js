import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('adds a new task', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add a new task.../i);
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.submit(screen.getByRole('form'));
  const taskElement = screen.getByText('Test task');
  expect(taskElement).toBeInTheDocument();
});

test('sorts tasks by name', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Sort by Name'));
  const sortedTasks = screen.getAllByRole('listitem');
  const sortedTaskTexts = sortedTasks.map(task => task.textContent);
  expect(sortedTaskTexts).toEqual(['Test task']);
});

test('filters completed tasks', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add a new task.../i);
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.submit(screen.getByRole('form'));
  fireEvent.click(screen.getByRole('checkbox'));
  fireEvent.click(screen.getByText('Filter Completed'));
  const filteredTasks = screen.queryByText('Test task');
  expect(filteredTasks).toBeNull();
});

test('clears completed tasks', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add a new task.../i);
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.submit(screen.getByRole('form'));
  fireEvent.click(screen.getByRole('checkbox'));
  fireEvent.click(screen.getByText('Clear Completed'));
  const clearedTask = screen.queryByText('Test task');
  expect(clearedTask).toBeNull();
});
