import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Actions from './actions';
import Selectors from './selectors';
import { State, User } from './types';
import theme from './theme';

interface HomeProps {
  users: User[];
  fetchUsers: () => void;
}

export const Home = React.memo(({ users, fetchUsers }: HomeProps): React.ReactElement => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const userToShow = 2;
  const user = users[userToShow];

  const next = () => { };
  const prev = () => { };

  if (!users.length) {
    return null;
  }

  return (
    <Container>
      <TopBar>
        <Column>
          <H1>{user.name}</H1>
          <S1>{user.website}</S1>
        </Column>
        <Column>
          <Row>
            <TouchableOpacity onPress={prev}>
              <ArrowIcon name="md-arrow-back" size={32} color={theme.colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity onPress={next}>
              <ArrowIcon name="md-arrow-forward" size={32} color={theme.colors.accent} />
            </TouchableOpacity>
          </Row>
        </Column>
      </TopBar>
    </Container>
  )
});

export default connect((state: State) => ({
  users: Selectors.userData(state),
}), dispatch => ({
  fetchUsers: () => {
    console.log('dispatching');
    dispatch(Actions.users.fetchUsers.trigger());
  }
}))(Home);

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
`;

const TopBar = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.space.lg}px;
  background-color: ${({ theme }) => theme.colors.contentBg};
  justify-content: space-between;
  flex-direction: row;
`

const Column = styled.View`
`;

const Row = styled.View`
  flex-direction: row;
`

const ArrowIcon = styled(Ionicons)`
  margin: 0 ${({ theme }) => theme.space.md}px;
`

const H1 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.basic};
`

const S1 = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.basic200};
`
