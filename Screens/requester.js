import * as React from 'react'
import { Component } from 'react'
import{View,Text, TouchableWithoutFeedbackBase} from 'react-native'
import MyHeader from '../Components/Header'
import firebase from 'firebase'
import db from '../Config'
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default class RequesterDetailsScreen extends Component{
    constructor(props){
        super(props)
        this.state={
userid:this.props.navigation.getParam("Details")["Userid"],
name:this.props.navigation.getParam("Details")["Name"],
Reason:this.props.navigation.getParam("Details")["Reason"],
Requestid:this.props.navigation.getParam("Details")["Requestid"],
firstname:'',
Contact:'',
Address:''
        }
    }
    addNotification=()=>{}
    addDonation=()=>{}
    getRequesterDetails=()=>{
        db.collection('users').where('Email','==',this.state.userid).get()
        .then((doc)=>{doc.forEach((document)=>{
            var Details=document.data()
            this.setState({
                firstname:Details.firstname,
                Contact:Details.Contact,
                Address:Details.Address
            })
        })})
    }
    componentDidMount(){
        this.getRequesterDetails()
    }
    render(){
        return(
            <View>
                       <MyHeader navigation={this.props.navigation} title="Requester Details"/>
                       <Card>
            <Text>
               Emailid:{this.state.userid}
            </Text>
            <Text>
                Contact:{this.state.Contact}
            </Text>
            <Text>
                Address:{this.state.Address}
            </Text>
            </Card>
            <TouchableOpacity onPress={()=>{this.addNotification;
            this.addDonation();
            this.props.navigation.navigate('Donate')}}>
                <Text>
                    I Want to Donate
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}