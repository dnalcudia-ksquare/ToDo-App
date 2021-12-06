import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Verify the void list', () => {
  render(<App />);
  const voidList = screen.getByText('No tasks');
  expect(voidList).toBeInTheDocument();
});

test('Add a new todo', () => {
  render(<App />);
  const input = screen.getByLabelText('todo-input');
  fireEvent.change(input, { target: { value: 'uwu' } });
  fireEvent(
    screen.getByText('Add'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const todoItem = screen.getByText('uwu');
  expect(todoItem).toBeInTheDocument();
});

test('Delete a todo', () => {
  render(<App />);
  const input = screen.getByLabelText('todo-input');
  fireEvent.change(input, { target: { value: 'uwu' } });
  fireEvent(
    screen.getByText('Add'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  fireEvent(
    screen.getByText('Delete'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const voidList = screen.getByText('No tasks');
  expect(voidList).toBeInTheDocument();
});

test('Check a todo as completed', () => {
  render(<App />);
  const input = screen.getByLabelText('todo-input');
  fireEvent.change(input, { target: { value: 'uwu' } });
  fireEvent(
    screen.getByText('Add'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const checkbox = screen.getByLabelText('todo-checkbox');
  expect(checkbox.checked).toEqual(false);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});

test('Uncheck a todo no-completed', () => {
  render(<App />);
  const input = screen.getByLabelText('todo-input');
  fireEvent.change(input, { target: { value: 'uwu' } });
  fireEvent(
    screen.getByText('Add'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const checkbox = screen.getByLabelText('todo-checkbox');
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});

test('Check all the todos as completed', () => {
  render(<App />);
  const input = screen.getByLabelText('todo-input');
  fireEvent.change(input, { target: { value: 'uwu' } });
  fireEvent(
    screen.getByText('Add'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  fireEvent.change(input, { target: { value: 'owo' } });
  fireEvent(
    screen.getByText('Add'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  fireEvent(
    screen.getByText('Set all done'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const firstItem = screen.getByText('uwu');
  const secondItem = screen.getByText('owo');
  expect(firstItem).toHaveStyle(`color: green`);
  expect(secondItem).toHaveStyle(`color: green`);
});

test('Check all the todos as no-completed', () => {
  render(<App />);
  const input = screen.getByLabelText('todo-input');
  fireEvent.change(input, { target: { value: 'uwu' } });
  fireEvent(
    screen.getByText('Add'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  fireEvent.change(input, { target: { value: 'owo' } });
  fireEvent(
    screen.getByText('Add'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  fireEvent(
    screen.getByText('Set all done'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  const firstItem = screen.getByText('uwu');
  const secondItem = screen.getByText('owo');
  expect(firstItem).toHaveStyle(`color: green`);
  expect(secondItem).toHaveStyle(`color: green`);

  fireEvent(
    screen.getByText('Set all undone'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(firstItem).toHaveStyle(`color: black`);
  expect(secondItem).toHaveStyle(`color: black`);
});
