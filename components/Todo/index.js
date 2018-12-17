import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Header, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListTasks from '../ListTasks';

const header_title = "ToDo List 2018";

class TodoList extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header
                    centerComponent={{ text: header_title, style: { color: '#FFFFFF', fontSize: 18 } }}
                />
                <Text style={styles.titleText} h1>Tareas TM <Icon style={styles.iconApp} name='list' size={40} color={theme.colors.secondary} /></Text>
                
                <ListTasks />                
            </ThemeProvider>
        );
    }
}


const theme = {
    colors: {
        primary: '#003A6C',
        secondary: '#FFB312'
    },
};

const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        color: theme.colors.secondary,
        textAlign: 'center',
    },
    iconApp: {
        textAlign: 'left'
    },
    addItemModal: {
        justifyContent: 'center',
        alignItems: 'center'
     }
  
})

export default TodoList