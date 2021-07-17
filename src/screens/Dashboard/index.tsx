import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';


import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton
} from './styles'

export interface DataListProps extends TransactionCardProps{
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/07/2020"
    },
    {
      id: '2',
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 58,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: "10/07/2020"
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel Apartamento",
      amount: "R$ 2.000,00",
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: "07/07/2020"
    }
  ]

  return(
    <Container>
      <Header>

        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://github.com/ferreirazdev.png'}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Flávio</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power"/>
          </LogoutButton>
        </UserWrapper>

      </Header>
      
      <HighlightCards>
        <HighlightCard
         type="up"
         title="Entradas" 
         amount="R$6.000,00" 
         lastTransaction="Última transação dia 13 de abril"
        />
        <HighlightCard
         type="down"
         title="Saídas" 
         amount="R$1.985,00" 
         lastTransaction="Última transação dia 13 de abril"
        />
        <HighlightCard
         type="total"
         title="Total" 
         amount="R$13.230,00" 
         lastTransaction="Última transação dia 13 de abril"
        />
      </HighlightCards>
      
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item}/>}
        />
      </Transactions>
    </Container>
  )
}

