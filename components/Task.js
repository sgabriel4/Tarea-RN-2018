import React from 'react';
import { View, Alert, Text } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements'

class Task extends React.Component {
    states = {
        checked: false
    }

    constructor(props) {
        super(props);
        this.states.checked = this.props.state;
    }

    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        checkedColor='green'
                        checked={this.states.checked}
                        onPress={this.setChecked.bind(this)}
                    />
                    <Text style={{ marginTop: 15 }}>{this.props.title}</Text>
                    <Icon iconStyle={{ marginTop: 12, marginLeft: 20 }}
                        name='eye'
                        type='font-awesome'
                        color='green'
                        onPress={() => this.showTask()} />
                </View>
            </View>
        )
    }

    showTask() {
        Alert.alert(
            this.props.title,
            this.props.description,
            [
                { text: 'Borrar Tarea', onPress: () => console.log('Tarea borrada') },
                { text: 'Listo', onPress: () => console.log('Listo') },
            ],
            { cancelable: true }
        )
    }

    setChecked() {
        this.setState({
            checked: !this.states.checked
        })

        this.states.checked = !this.states.checked
    }
}

export default Task
