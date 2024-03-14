import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';


import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';


import SecondInsertURL from './SecondInsertURL';
import ExploreButton from '../../static/Svg/ExploreButton';
import { setSelectedImage } from '../../features/secondCompareSlice';



function SecondInsertImage() {

    const uploadFormImage = useSelector(state => state.secondCompare.selectedImage)

    const dispatch = useDispatch();

    const renderImageSource = (imageSource) => {
        if (typeof imageSource === 'string') {
            console.log("동작순서 확인 3")
            console.log("어디로 오니 스트링", imageSource)
            return { uri: imageSource }
        }
        console.log("동작순서 확인 3")
        console.log("어디로 오니 숫자", imageSource)
        return imageSource
    };

    const imageUploadHandler = () => {
        console.log("동작순서 확인 1")
        launchImageLibrary({ mediaType: "photo" },(response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('이미지 선택을 취소했거나 이미지가 없습니다!');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log("이미지 선택 완료!", response.assets[0])

                console.log("상태 바꾸기 전?",uploadFormImage)
                // 디바이스 내 이미지 선택
                dispatch(setSelectedImage(response.assets[0]));

                console.log("상태 바꼈니?", uploadFormImage)
            }
        });
    };
    
    return (
        <ScrollView>
            <TouchableOpacity onPress={ imageUploadHandler }>
                <Image key={uploadFormImage} source={ renderImageSource(uploadFormImage) } style={styles.image} />
            </TouchableOpacity>
            <SecondInsertURL />
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    }
});

export default SecondInsertImage;