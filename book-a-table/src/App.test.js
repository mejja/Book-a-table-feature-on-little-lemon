import { render, screen } from '@testing-library/react';
import App from './App';
import ReserveForm from './components/ReserveForm';


describe("Form Labels Testing", ()=> {
  test("Customers name Label Test", () => {
    render(<ReserveForm />);
    const labelElement = screen.getByText(/Customer's Name/i);
    expect(labelElement).toBeInTheDocument();
  })
  test("Email Label Test", () => {
    render(<ReserveForm />);
    const labelElement = screen.getByText(/E-mail/i);
    expect(labelElement).toBeInTheDocument();
  })
  test("Date & Time Label test", () => {
    render(<ReserveForm />);
    const labelElement = screen.getByText(/Date & Time/i);
    expect(labelElement).toBeInTheDocument();
  })
  test("No of people title Label test", () => {
    render(<ReserveForm />);
    const labelElement = screen.getByText(/Number of People/i);
    expect(labelElement).toBeInTheDocument();
  })
  test("comments Label Test", () => {
    render(<ReserveForm />);
    const labelElement = screen.getByText(/Notes/i);
    expect(labelElement).toBeInTheDocument();
  })
})







describe("Input filed Testing", ()=> {
  test("firstName inputfield", ()=> {
    render(<ReserveForm/>);
    const nameElement = screen.getByLabelText(/First/i);
    expect(nameElement).toBeInTheDocument();
  })

  test("lastName inputfield", ()=> {
    render(<ReserveForm/>);
    const nameElement = screen.getByLabelText(/Last/i);
    expect(nameElement).toBeInTheDocument();
  })


})

