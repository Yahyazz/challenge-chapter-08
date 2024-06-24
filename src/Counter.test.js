import { fireEvent, render } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  it('counter displays correct initail count', () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    expect(getByTestId('count').textContent).toEqual('0');
  });
  it('counter should increment by 1 if the increment button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole('button', { name: 'Increment' });
    expect(getByTestId('count').textContent).toEqual('0');
    fireEvent.click(incrementBtn);
    expect(getByTestId('count').textContent).toEqual('1');
  });
  it('counter should decrement by 1 if the decrement button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBtn = getByRole('button', { name: 'Decrement' });
    expect(getByTestId('count').textContent).toEqual('0');
    fireEvent.click(decrementBtn);
    expect(getByTestId('count').textContent).toEqual('-1');
  });
  it('counter should restart to 0 if the restart button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={4} />);
    const restartBtn = getByRole('button', { name: 'Restart' });
    expect(getByTestId('count').textContent).toEqual('4');
    fireEvent.click(restartBtn);
    expect(getByTestId('count').textContent).toEqual('0');
  });
  it('counter should switch signs if the switch signs button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={4} />);
    const switchBtn = getByRole('button', { name: 'Switch Signs' });
    expect(getByTestId('count').textContent).toEqual('4');
    fireEvent.click(switchBtn);
    expect(getByTestId('count').textContent).toEqual('-4');
  });
});
