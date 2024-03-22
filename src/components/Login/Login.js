import React, { useEffect, useState } from 'react';
import {TouchableOpacity, Image, StyleSheet, TextInput, Text, View, Alert,Dimensions } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import ScreenTitle from '../Common/ScreenTitle';
import LoginWithTextButton from '../../static/Svg/LoginWithTextButton';
import SignUpWithTextButton from '../../static/Svg/SignUpWithTextButton';
import ForgotIdButton from '../../static/Svg/ForgotIdButton';
import ForgotPasswordButton from '../../static/Svg/ForgotPasswordButton';
import { setIdText, setIsLoading, setPasswordText } from '../../features/loginSlice';
import { setIsCheckedFullAgree, setIsCheckedPrivacyAgree, setIsCheckedTermsAgree, setSignEmailText, setSignIdText, setSignNameText, setSignPasswordCheckText, setSignPasswordText, setSignPhoneText } from '../../features/signUpSlice';
import { callPostLoginAPI } from '../../apis/MemberAPI';
import LogoImage from '../../static/img/logo/logo.png';


function Login() {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const idText = useSelector(state => state.login.idText);
    const passwordText = useSelector(state => state.login.passwordText);

    const isLoading = useSelector(state => state.login.isLoading);
    const navigationFrom = route.params?.navigateFrom ?? '';

    /* 회원가입 정상 처리 후 로그인 화면으로 돌아왔을 경우 입력 칸 전체 초기화 */
    useEffect(() => {
        console.log('navigationFrom : ', navigationFrom);
        if (navigationFrom === 'RegistrationResult') {
            console.log('회원가입 정상 처리 후 로그인 화면으로 돌아왔을 경우 입력 칸 전체 초기화');
            dispatch(setIdText(''));
            dispatch(setPasswordText(''));
            dispatch(setIsCheckedFullAgree(false));
            dispatch(setIsCheckedTermsAgree(false));
            dispatch(setIsCheckedPrivacyAgree(false));
            dispatch(setSignIdText(''));
            dispatch(setSignPasswordText(''));
            dispatch(setSignPasswordCheckText(''));
            dispatch(setSignNameText(''));
            dispatch(setSignEmailText(''));
            dispatch(setSignPhoneText(''));
            
        }
    }, [navigationFrom]);


    const loginPressHandler = async () => {

        // if (idText === '') {
        //     Alert.alert('알림', '아이디를 입력해주세요.');
        //     return;
        // }

        // if (passwordText === '') {
        //     Alert.alert('알림', '비밀번호를 입력해주세요.');
        //     return;
        // }
        
        // try {
        //     console.log('idText: ', idText);
        //     console.log('passwordText: ', passwordText);
        //     await dispatch(callPostLoginAPI());
        //     navigation.navigate('Home', {
        //         title: '메인 화면'
        //     });
        // } catch (error) {
        //     console.log('API 호출 에러 : ', error);
        // } finally {
        //     dispatch(setIsLoading(false));
        // }

        navigation.navigate('Home')

    };

    const SignUpPressHandler = () => {
        navigation.navigate('Agree', {
            title: '이용약관'
        });
    }

    const forgotIdPressHandler = () => {
        console.log('ForgotId Button clicked!');
    }   

    const forgotPassPressHandler = () => {
        console.log('ForgotPass Button clicked!');
    }

    
    return (
        <View style={styles.container}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={{fontSize: 30, marginBottom: 10, color: '#6F50F8', fontWeight: '900'}}>AlGo보니?</Text>
        <TextInput
            style={styles.input}
            onChangeText={ (text) => { dispatch(setIdText(text)) }}   
            value={idText}
            placeholder="아이디"
            placeholderTextColor={'#9a9a9a'}
        />
        <TextInput
            style={styles.input}
            onChangeText={ (text) => { dispatch(setPasswordText(text)) }}
            value={passwordText}
            placeholder="비밀번호"
            placeholderTextColor={'#9a9a9a'}
        />
        <TouchableOpacity onPress={loginPressHandler} style={styles.button}>
            <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SignUpPressHandler} style={styles.button}>
            <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={forgotIdPressHandler} style={styles.link}>
            <Text>아이디 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={forgotPassPressHandler} style={styles.link}>
            <Text>비밀번호 찾기</Text>
        </TouchableOpacity> */}
    </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      backgroundColor: '#f5f5f5',
    },
    input: {
      width: width * 0.8, // 화면 너비의 80%
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 15,
      borderRadius: 5,
    },
    button: {
      width: width * 0.8, // 화면 너비의 80%
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
      backgroundColor: '#6F50F8',
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
    },
    link: {
      marginTop: 15,
    },
  
    logo: {
      width: width * 0.3, // 화면 너비의 25%
      height: width * 0.3, // 같은 비율로 높이 설정
      marginBottom: 10,
      },
     
  
  });

export default Login;