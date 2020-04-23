import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.column}>
          <Text style={styles.h1}>{user.name}</Text>
          <Text style={styles.s1}>{user.website}</Text>
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <TouchableOpacity onPress={prev}>
              <Ionicons style={styles.arrowIcon} name="md-arrow-back" size={32} color={theme.colors.accent} />
            </TouchableOpacity>
            <TouchableOpacity onPress={next}>
              <Ionicons style={styles.arrowIcon} name="md-arrow-forward" size={32} color={theme.colors.accent} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
});

export default connect((state: State) => ({
  users: Selectors.userData(state),
}), dispatch => ({
  fetchUsers: () => dispatch(Actions.users.fetchUsers.trigger()),
}))(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center'
  },
  topBar: {
    width: '100%',
    padding: theme.space.lg,
    backgroundColor: theme.colors.contentBg,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  column: {},
  row: { flexDirection: 'row' },
  arrowIcon: {
    marginVertical: 0,
    marginHorizontal: theme.space.md
  },
  h1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.basic,
  },
  s1: {
    fontSize: 12,
    color: theme.colors.basic200
  }
})
