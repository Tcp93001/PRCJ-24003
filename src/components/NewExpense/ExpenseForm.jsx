import { useState } from 'react';
// import styles from './ExpenseForm.module.css'
import styled from 'styled-components'

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-aling: left;
`;

const FormActions = styled.div`
  text-align: right;
`;

const FormControl = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${({ invalid }) => (invalid ? '#ad0000' : '#ccc')};
    width: 20rem;
    max-width: 100%;
  }
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #464646;
  background-color: #464646;
  color: #e5e5e5;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  &:active {
    background-color: #afafaf;
    border-color: #afafaf;
    color: #000;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ExpenseForm = ({ onSaveExpense }) => {
  const [data, setData] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const titleChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      title: event.target.value
    }))
  }

  const amountChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      amount: event.target.value
    }))
  }

  const dateChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      date: event.target.value
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault();

    validateFields();
    if(!(isTitleValid && isAmountValid && isDateValid)) return;

    // Armar la info del formulario en un solo paquete para el componente padre
    const expense = {
      title: data.title,
      amount: data.amount,
      date: data.date
    }

    // Enviar la info al componente padre
    onSaveExpense(expense);

    // Limpieza y reestablecimiento de mi Form
    setData({
      title: '',
      amount: '',
      date: ''
    })

    setIsTitleValid(true);
    setIsAmountValid(true);
    setIsDateValid(true);
  }

  const validateFields = () => {
    // Validacion
    if (data.title.trim().length === 0) {
      setIsTitleValid(false);
    }
    if (data.amount.trim().length === 0) {
      setIsAmountValid(false);
    }
    if (data.date.trim().length === 0) {
      setIsDateValid(false);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <FormControl invalid={!isTitleValid}>
          <label>Descripción</label>
          <input type='text' value={data.title} onChange={titleChangeHandler} />
        </FormControl>
        <FormControl invalid={!isAmountValid}>
          <label>Monto</label>
          <input type='number' min='1' step='1' value={data.amount} onChange={amountChangeHandler} />
        </FormControl>
        <FormControl invalid={!isDateValid}>
          <label>Fecha</label>
          <input type='date' min='2021-01-01' max='2024-12-31' value={data.date} onChange={dateChangeHandler} />
        </FormControl>
      </FormControls>
      <FormActions>
        <Button type='submit'>Agregar</Button>
      </FormActions>
      <h1 className='bg-amber-300 text-3xl font-bold text-cyan-700'>yA TENEMOS TAILWIND</h1>
    </form>
  )
}

export default ExpenseForm;