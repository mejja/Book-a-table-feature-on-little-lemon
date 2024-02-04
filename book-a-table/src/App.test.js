import { render, screen } from '@testing-library/react';
import ReserveForm from './components/ReserveForm';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';


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
});


describe("Input field Testing", ()=> {
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
  test("email inputfield", ()=> {
    render(<ReserveForm/>);
    const nameElement = screen.getByLabelText(/name@domain.com/i);
    expect(nameElement).toBeInTheDocument();
  })
  test("notes inputfield", ()=> {
    render(<ReserveForm/>);
    const nameElement = screen.getByLabelText(/comments/i);
    expect(nameElement).toBeInTheDocument();
  })

});
describe("User Input events Testin0g", ()=> {
  test("Firstname text input",  async ()=> {
    const user = userEvent.setup()
    act(()=> {
      render(<ReserveForm placeholder="First"/>)
    })
    const input = screen.getByLabelText('First')
    await user.type(input, "Major")
    expect(input).toHaveValue("Major")
  })

  test("Lastname text input",  async ()=> {
    const user = userEvent.setup()
    act(()=> {
      render(<ReserveForm placeholder="Last"/>)
    })
    const input = screen.getByLabelText('Last')
    await user.type(input, "Mbandi")
    expect(input).toHaveValue("Mbandi")
  })
});