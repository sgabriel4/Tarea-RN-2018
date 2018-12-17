import React from 'react';
import { StyleSheet, View, FlatList, Modal, Alert } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Task from './Task';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from './Todo/actions';

class ListTasks extends React.Component {
    state = {
        modalVisible: false,
        newItemTitle: '',
        newItemDescription: ''
    };

    render() {
        const {
            items,
        } = this.props;

        return (
            <View>
                <FlatList
                    data={items}
                    extraData={this.state}
                    renderItem={({ item }) => <Task title={item.title} description={item.description} state={item.state} />}
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    onRequestClose={() => {}}
                    visible={this.state.modalVisible}>
                    <View style={{ marginTop: 22 }}>
                        <View style={styles.addItemModal}>
                            <Text style={styles.titleText} h2>Agregar Tarea</Text>
                            <Text style={{ marginTop: 20 }}>Titulo</Text>
                            <Input
                                placeholder='Titulo'
                                onChangeText={(text) => this.state.newItemTitle = text}
                            />
                            <Text style={{ marginTop: 20 }}>Descripción</Text>
                            <Input
                                placeholder='Descripcion'
                                multiline={true}
                                numberOfLines={4}
                                onChangeText={(text) => this.state.newItemDescription = text}
                            />
                            <Button
                                title='Agregar'
                                buttonStyle={{
                                    marginTop: 20,
                                    backgroundColor: "#003A6C",
                                    width: 300,
                                    height: 45,
                                    borderWidth: 0,
                                    borderRadius: 0,
                                }}
                                onPress={() => this.addNewItem()}
                            />
                            <Button
                                title='Cancelar'
                                buttonStyle={{
                                    marginTop: 10,
                                    backgroundColor: "black",
                                    width: 300,
                                    height: 45,
                                    borderColor: "transparent",
                                    borderWidth: 0,
                                    borderRadius: 5,
                                }}
                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                            />
                        </View>
                    </View>
                </Modal>
                <Button
                    title='Agregar Tarea'
                    onPress={() => this.setModalVisible(true)}
                />
            </View >
        )
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    addNewItem() {
        if (this.state.newItemTitle.length < 1) {
            Alert.alert(
                'ERROR',
                'El campo título no puede estar vacío',
                [
                    { text: 'OK' },
                ]
            )
            return;
        }

        item = {
            title: this.state.newItemTitle,
            description: this.state.newItemDescription,
            state: false
        }
        this.props.addItem(item);
        this.setModalVisible(false);
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        color: '#FFB312',
        textAlign: 'center',
    },
    addItemModal: {
        justifyContent: 'center',
        alignItems: 'center'
    }

})

function mapStateToProps(state) {
    const { items } = state;
    return {
        items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: bindActionCreators(actions.addItem, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTasks);
