import { render, screen } from '@testing-library/react';
import App from './App';
import ReserveForm from './components/ReserveForm';
import { FormLabel } from '@mui/material';

describe("Testing reserve table Form", ()=> {
  test('renders Customers name FormLabel', () => {
    render(<ReserveForm />);
    const linkElement = screen.getByText(/Customer's Name/i);
    expect(linkElement).toBeInTheDocument();
  })


})

