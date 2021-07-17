import React, {useState} from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Forms/InputForm';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles';

interface FormData {
  name: string;
  amount: string;  
}

export function Register(){
  const [transactionType, settransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const {
    control,
    handleSubmit
  } = useForm();

  function handleTransactionsTypeSelect(type: 'up' | 'down'){
    settransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  }

  function handleRegister(form: FormData){
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Catastro</Title>
      </Header>

      <Form>
        <Fields>
        <InputForm
            name="name"
            control={control}
            placeholder="Nome"
          />
          <InputForm
            name="amount"
            control={control}
            placeholder="Preço"
          />
          <TransactionTypes>
            <TransactionTypeButton 
              title="Income"
              type="up"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              title="Outcome"
              type="down"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>
          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
          
        </Fields>
        <Button
          title="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>

    </Container>
  );
}