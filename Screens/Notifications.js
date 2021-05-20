import * as React from 'react'
import { Component } from 'react'
import{View,Text} from 'react-native'
import MyHeader from '../Components/Header'
export default class NotificationsScreen extends Component{
    render(){
        return(
            <View>
                       <MyHeader navigation={this.props.navigation} title="Donate Screen"/>
            <Text>
                NotificationsScreen
            </Text>
            </View>
        )
    }
}