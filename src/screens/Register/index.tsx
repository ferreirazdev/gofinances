import React, {useState} from 'react';
import { Modal } from 'react-native';

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

export function Register(){
  const [transactionType, settransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionsTypeSelect(type: 'up' | 'down'){
    settransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Title>Catastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder="Nome"
          />
          <Input 
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