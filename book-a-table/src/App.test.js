import { render, screen } from '@testing-library/react';
import App from './App';
import ReserveForm from './components/ReserveForm';

describe("Testing reserve table Form", ()=> {
  test('renders learn react link', () => {
    render(<ReserveForm />);
    const linkElement = screen.getByText(/Customer's Name/i);
    expect(linkElement).toBeInTheDocument();
  })


})

