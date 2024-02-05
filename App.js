import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Linking, ImageBackground, TouchableOpacity, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state = {
        logInPageDisplay: 'none',
        signUpPageDisplay: 'none',
        homePageDisplay: 'block',
        mapPageDisplay: 'none',
        messagePageDisplay:'none',
        user: '',
        password: '',
        message: ''
    }
    handleLogInPagePress = () => this.setState(state => ({
        logInPageDisplay: 'block',
        signUpPageDisplay: 'none',
        homePageDisplay: 'none',
        mapPageDisplay: 'none',
        messagePageDisplay:'none',
    }));
    handleSignInPagePress = () => this.setState(state => ({
        logInPageDisplay: 'none',
        signUpPageDisplay: 'block',
        homePageDisplay: 'none', 
        mapPageDisplay: 'none',
        messagePageDisplay:'none',
        
    }));
    handleHomePagePress = () => this.setState(state => ({
        logInPageDisplay: 'none',
        signUpPageDisplay: 'none',
        homePageDisplay: 'block', 
        mapPageDisplay: 'none',
        messagePageDisplay:'none',
        
    }));
    handleMediaPagePressFromMessage  = () => {
        this.setState(state => ({
        mapPageDisplay: 'block',
        messagePageDisplay: 'none',
        logInPageDisplay: 'none',
        signUpPageDisplay: 'none',
        homePageDisplay: 'none',
        }));
        alert('Message Pinned');
    };
    handleMediaPagePress = () => this.setState(state => ({
        mapPageDisplay: 'block',
        messagePageDisplay: 'none',
        logInPageDisplay: 'none',
        signUpPageDisplay: 'none',
        homePageDisplay: 'none',
    }));
    handleMessagePagePress  = () => {this.setState(state => ({
        mapPageDisplay: 'none',
        messagePageDisplay: 'block',
        logInPageDisplay: 'none',
        signUpPageDisplay: 'none',
    }));
    };
        render() {
            return (
            <View style={styles.container}>
                <View style={{ display: this.state.logInPageDisplay }}>
                    <View style={styles.logInContainer}>
                        <View styles={styles.rowContainer}>
                            <TouchableOpacity
                                    onPress={this.handleHomePagePress}
                                >
                                <View style={styles.touchableButton1}>
                                    <Text style={styles.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View styles={styles.rowContainer}>
                            <TextInput style={styles.userInput}
                            placeholder="Username/Email"
                            placeholderTextColor="#292828"
                            onChangeText={(user) => this.setState({user})}
                            value={this.state.user}
                            /> 
                        </View>
                        <View styles={styles.rowContainer}>
                            <TextInput style={styles.userInput}
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor="#292828"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            /> 
                        </View>
                        <View styles={styles.rowContainer}>
                            <TouchableOpacity 
                                    onPress={this.handleMediaPagePress}
                                >
                                <View style={styles.touchableButton1}>
                                    <Text style={styles.buttonText}>
                                        Enter
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ display: this.state.signUpPageDisplay }}>
                    <View style={styles.signUpContainer}>
                        <View styles={styles.rowContainer}>
                            <TouchableOpacity
                                    onPress={this.handleHomePagePress}
                                >
                                <View style={styles.touchableButton1}>
                                    <Text style={styles.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View styles={styles.rowContainer}>
                            <TextInput style={styles.userInput}
                            placeholder="Username/Email"
                            placeholderTextColor="#292828"
                            onChangeText={(user) => this.setState({user})}
                            value={this.state.user}
                            /> 
                        </View>
                        <View styles={styles.rowContainer}>
                            <TextInput style={styles.userInput}
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor="#292828"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            /> 
                        </View>
                        <View styles={styles.rowContainer}>
                            <TextInput style={styles.userInput}
                            secureTextEntry={false}
                            placeholder="Confirm Password"
                            placeholderTextColor="#292828"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            /> 
                        </View>
                        <View styles={styles.rowContainer}>
                            <TouchableOpacity 
                                    onPress={this.handleMediaPagePress}
                                >
                                <View style={styles.touchableButton1}>
                                    <Text style={styles.buttonText}>
                                        Create Account
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ display: this.state.homePageDisplay }}>
                    <View style={styles.homeContainer}>
                        <View style={styles.topBlock}>
                            <Text style={styles.topBoxText}>
                             King Pin
                            </Text>
                        </View>
                        <ImageBackground
                                source={{uri:'https://codehs.com/uploads/b13bf154d44cf27c72903fff6aefddd1'}}
                                style={{alignItems: 'center', flex:1,}}>
                            <View style={styles.gap}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/0bd24f5f7a82e43742cf0fd3adb2776f' }}
                                style={{ height: deviceHeight/3, width: deviceWidth/3}}
                            ></Image>
                            </View>
                            <View style={styles.buttonBox}> 
                                 <TouchableOpacity 
                                        onPress={this.handleLogInPagePress}
                                    >
                                    <View style={styles.touchableButton1}>
                                        <Text style={styles.buttonText}>
                                            Log In
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.gap1}>
                                </View>
                                <TouchableOpacity 
                                        onPress={this.handleSignInPagePress}
                                    >
                                    <View style={styles.touchableButton1}>
                                        <Text style={styles.buttonText}>
                                            Sign up
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.gap2}> 
                            </View>
                            <TouchableHighlight  style={styles.smallLink}
                                onPress={() => Linking.openURL('https://www.vecteezy.com/video/1797568-fog-looping-on-a-black-background')}>
                                    <Text>
                                        Fog looping on a black background. Stock Videos by Vecteezy
                                    </Text>
                            </TouchableHighlight>
                        </ImageBackground>
                    </View>   
                 </View>
                <View style={{ display: this.state.messagePageDisplay }}>
                    <View style={styles.messagePageContainer}>
                        <ImageBackground
                            source={{uri: 'https://codehs.com/uploads/85a7b3b2f023eae7717b2cac12b47426'}}
                            style={{height:deviceHeight, width:deviceWidth, alignItems:'center'}}
                        >
                        <View style={styles.messagePageTopContainer}>
                            <Text style={styles.messagePageTitle}>Message Page</Text>
                        </View>
                        <View style={styles.messagePageTextInputCon}>
                            <TextInput style={styles.messagePageTextInput}
                                multiline='true'
                                placeholder='Click here to type your message!'
                            ></TextInput>
                        </View>
                        <TouchableOpacity
                            onPress={this.handleMediaPagePressFromMessage}
                        >
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/b88c1508b56dd02907824aebba5c7d16'}}
                                style={{height:65, width:65, marginTop:20,}}
                            ></Image>
                        </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{ display: this.state.mapPageDisplay}}>
                    <View style={styles.mapContainer}>
                        <View style={styles.imageContainer}>
                            <ImageBackground
                                source={{uri:'https://codehs.com/uploads/80edb521114dccbb305176eb24e8d039'}}
                                style={styles.imageContainer}>
                                <Image
                                 source={{uri:'https://codehs.com/uploads/cdca37a38fceec4dd77101c529dec235'}}
                                 style={{height:40, width:45, margin:10,}}
                                ></Image>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>   
                        <View style={styles.navbar}>
                            <TouchableOpacity
                                onPress={this.handleMessagePagePress}
                            >
                                <Image
                                 source={{uri:'https://codehs.com/uploads/419fef3885ed83b0593cf08a04f04b7e'}}
                                 style={{height:40, width:45, margin:20,}}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.handleMapPagePress}
                            >
                                <Image
                                 source={{uri:'https://codehs.com/uploads/3fb8dd7c3075a993dca0ed3d0936377b'}}
                                 style={{height:40, width:40, margin:20,}}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={this.handleHomePagePress}
                            >    
                                <Image
                                 source={{uri:'https://codehs.com/uploads/62474d82caaade97111d99fef1f8d45b'}}
                                 style={{height:40, width:40, margin:20, marginLeft:25,}}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageContainer: {
        height: 9*(deviceHeight/10),
        width:deviceWidth,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        height: 1*(deviceHeight/10),
        width:deviceWidth,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    smallLink: {
        fontSize: deviceHeight/60,
        textAlign: 'center',
        color: 'white',
    },
        
    navbar: {
        backgroundColor:'#06011A',
        borderTopWidth:2,
        borderTopRadius:5,
        borderColor:'white',
        height:1*(deviceHeight/10),
        width:deviceWidth,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    container: {
        backgroundColor: '#dedee3',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        height: deviceHeight,
        width: deviceWidth,
    },
    touchableButton1: {
        backgroundColor: '#9da1b5',
        height: deviceHeight/10,
        width: deviceWidth/3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: '#262525',
        borderWidth: 5,
    },
     buttonText: {
        fontFamily: 'Cochin',
        color: '#1e1e38',
        fontSize: 20,
        fontWeight: 'bold',
    },
    signUpContainer: {
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: 'space-evenly',
    },
    logInContainer: {
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: 'space-evenly',
        backgroundColor: '#d2d3d4',
        alignItems: 'center',
    },
    rowContainer: {
        alignItems: 'center',
        height: deviceHeight/10,
        width: deviceWidth,
        paddingHorizontal:deviceWidth/125,
    },
    textInput: {
        fontSize: deviceHeight/30,
        textAlign: 'center',
        color: '#2f3036',
    },
    userInput: {
        height: deviceHeight/12,
        width: deviceWidth/1.5,
        borderWidth: deviceWidth/100,
        borderColor:'white',
        borderRadius: 5,
        backgroundColor: '#d9e0ff',
        paddingVertical: deviceWidth/150,
        paddingHorizontal:deviceWidth/100, 
        fontSize: deviceHeight/30,
        textAlign: 'center'
    },
    homeContainer: {
        backgroundColor: 'black',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        height: deviceHeight,
        width: deviceWidth,
    },
    topBlock: {
        backgroundColor: 'dimGrey',
        height: 40,
        justifyContent: 'center',
        height: deviceHeight/10,
        width: deviceWidth,
    },
    topBoxText: {
        color:'white',
        fontSize: deviceHeight/17,
        fontFamily: 'Damascus',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'bottom',
        marginTop: 30,
        marginBottom: deviceHeight/30,
    },
    gap: {
        height: deviceHeight/2,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gap1: {
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gap2: {
        height: 20,
        justifyContent: 'bottom',
        alignItems: 'center',
    },
    buttonBox: {
        backgroundColor: 'dimGrey',
        height: deviceHeight/4,
        width: deviceWidth/1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 20,
    },
    messagePageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'grey',
    },
    messagePageTopContainer: { 
        flexDirection:'row',
        backgroundColor:'dimgrey',
        height: deviceHeight/10,
        width: deviceWidth,
        alignItems:'center',
        justifyContent:'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    messagePageTitle: {
        fontSize:30,
        fontWeight:'bolder',
        color:'white',
    },
    messagePageTextInput: {
      marginBottom:0,
      backgroundColor:'dimgrey',
      justifyContent:'center',
      fontSize:20,
      color:'cornsilk',
      height:deviceHeight/11,
      width:deviceWidth/1.25,
      textAlignVertical:'top',
    },
    messagePageTextInputCon: {
      marginBottom:0,
      borderRadius:20,
      backgroundColor:'dimgrey',
      marginTop:200,
      height:deviceHeight/10,
      width:deviceWidth/1.15,
      alignItems:'center',
      justifyContent:'center',
    },
});