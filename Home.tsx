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
  fetchUsers: () => dispatch(Actions.users.fetchUsers.trigger()),
}))(Home);

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

const TopBar = styled.View`
  width: 100%;
  padding: 15px;
  background-color: #e2f0fe;
  justify-content: space-between;
  flex-direction: row;
`

const Column = styled.View`
`;

const Row = styled.View`
  flex-direction: row;
`

const ArrowIcon = styled(Ionicons)`
  margin: 0 10px;
`

const H1 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2f2d31;
`

const S1 = styled.Text`
  font-size: 12px;
  color: #8a898a;
`
