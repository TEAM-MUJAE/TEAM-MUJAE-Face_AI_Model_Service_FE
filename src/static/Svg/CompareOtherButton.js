import React from "react"
import { StyleSheet, TouchableOpacity, Text, View,Image } from 'react-native';

import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

// import BannerImage from '../../static/img/categoryBanner/other.png'; 
import BannerImage from '../../static/img/categoryBanner/other2.png'; 


const CompareOtherButton = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress } style={styles.button}>
        {/* <Svg width={246} height={47} viewBox="0 0 246 47" xmlns="http://www.w3.org/2000/svg" fill="none">
            <G clipPath="url(#a)">
                <Path
                    fill="#F4EB64"
                    d="M0 3a3 3 0 0 1 3-3h231v47H3a3 3 0 0 1-3-3V3ZM234 0h9a3 3 0 0 1 3 3v32h-12V0Z"
                />
                <Path fill="#F4EB64" d="m222 35 12.02-12.02L246.043 35 234.02 47.02z" />
                <Path
                    fill="#5352D4"
                    d="M43.535 18.793h1.463v10.219h-1.463V18.793Zm-2.739 3.146h3.157v1.177h-3.157v-1.177Zm-3.828-2.057h1.452v6.325h-1.452v-6.325Zm0 5.522h.858c1.452 0 2.959-.099 4.543-.418l.154 1.21c-1.639.33-3.201.418-4.697.418h-.858v-1.21Zm12.98-1.452h1.462v2.409h-1.463v-2.409Zm.714-4.565c1.573 0 2.772 1.045 2.772 2.508s-1.199 2.508-2.772 2.508c-1.584 0-2.772-1.045-2.772-2.508s1.188-2.508 2.772-2.508Zm0 1.243c-.77 0-1.342.462-1.342 1.265 0 .792.572 1.265 1.342 1.265.77 0 1.342-.473 1.342-1.265 0-.803-.572-1.265-1.342-1.265Zm3.575-1.837H55.7v10.186h-1.463V18.793Zm1.012 3.982h1.793v1.221H55.25v-1.221Zm-7.524 4.18-.176-1.177c1.76-.011 4.136 0 6.16-.275l.11 1.067c-2.112.396-4.378.396-6.094.385Zm23.4-4.312h1.792v1.199h-1.793v-1.199Zm-1.09-3.861h1.474v10.186h-1.474V18.782Zm-6.204.979h1.463v6.325h-1.463v-6.325Zm0 5.511h.88c1.452 0 3.025-.099 4.664-.429l.154 1.199c-1.683.352-3.322.44-4.818.44h-.88v-1.21Zm12.055-3.729h7.062v1.155h-7.062v-1.155Zm-1.144 2.211h9.23v1.166h-9.23v-1.166Zm1.144-4.598h1.452v2.959h-1.452v-2.959Zm-.099 8.437h7.216v1.166h-7.216v-1.166Zm0-1.859h1.463v2.167h-1.463v-2.167Zm21.881-6.941h1.463v5.082h-1.463v-5.082Zm-2.046 2.024h2.596v1.166h-2.596v-1.166Zm-2.2-1.749c1.54 0 2.684.968 2.684 2.343 0 1.364-1.144 2.343-2.684 2.343-1.54 0-2.695-.979-2.695-2.343 0-1.375 1.155-2.343 2.695-2.343Zm0 1.188c-.748 0-1.298.429-1.298 1.155 0 .737.55 1.166 1.298 1.166s1.287-.429 1.287-1.166c0-.726-.539-1.155-1.287-1.155ZM92.4 24.315h6.732v2.772h-5.269v1.243H92.41v-2.299h5.27v-.594H92.4v-1.122Zm.011 3.421h7.007v1.133H92.41v-1.133Zm9.724-7.986h4.873v6.754h-4.873V19.75Zm3.432 1.144h-1.991v4.455h1.991v-4.455Zm2.772-2.101h1.474v10.186h-1.474V18.793Zm1.144 3.839h1.804v1.21h-1.804v-1.21Zm11.164.011h1.793v1.199h-1.793v-1.199Zm-1.089-3.861h1.474v10.186h-1.474V18.782Zm-6.204.979h1.463v6.325h-1.463v-6.325Zm0 5.511h.88c1.452 0 3.025-.099 4.664-.429l.154 1.199c-1.683.352-3.322.44-4.818.44h-.88v-1.21Zm15.908-2.618h.847c2.123 0 3.278-.066 4.565-.341l.154 1.144c-1.309.286-2.541.341-4.719.341h-.847v-1.144Zm0-3.311h4.554v1.144h-3.102v2.662h-1.452v-3.806Zm6.204-.55h1.463v5.401h-1.463v-5.401Zm1.056 2.134h1.76v1.188h-1.76v-1.188Zm-6.831 3.685h3.344v2.574h-1.914v1.111h-1.419v-2.112h1.914v-.517h-1.925v-1.056Zm3.861 0h3.377v4.257h-3.377v-4.257Zm2.123 1.056h-.869v2.134h.869v-2.134Zm-5.973 2.112h.605c1.199 0 1.936 0 2.893-.154l.11 1.078c-.99.165-1.76.165-3.003.165h-.605V27.78Zm13.265-8.448c1.573 0 2.772 1.023 2.772 2.464s-1.199 2.475-2.772 2.475c-1.573 0-2.772-1.034-2.772-2.475s1.199-2.464 2.772-2.464Zm0 1.221c-.77 0-1.342.462-1.342 1.243 0 .792.572 1.243 1.342 1.243.77 0 1.342-.451 1.342-1.243 0-.781-.572-1.243-1.342-1.243Zm3.718-1.76h1.463v5.687h-1.463v-5.687Zm1.056 2.178h1.76v1.188h-1.76v-1.188Zm-5.456 3.938h1.089v.374c0 1.562-.66 2.992-2.244 3.575l-.726-1.067c1.331-.473 1.881-1.507 1.881-2.508v-.374Zm.363 0h1.056v.374c0 1.012.484 2.068 1.749 2.596l-.605 1.078c-1.617-.616-2.2-2.156-2.2-3.674v-.374Zm3.344 0h1.056v.374c0 1.419-.594 3.036-2.2 3.674l-.605-1.078c1.254-.572 1.749-1.683 1.749-2.596v-.374Zm.341 0h1.1v.374c0 1.078.539 2.068 1.87 2.508l-.715 1.067c-1.606-.572-2.255-1.947-2.255-3.575v-.374Zm9.624-5.973c2.321 0 3.685.616 3.685 1.738 0 1.122-1.364 1.738-3.685 1.738-2.332 0-3.685-.616-3.685-1.738 0-1.122 1.353-1.738 3.685-1.738Zm0 1.067c-1.474 0-2.167.22-2.167.671 0 .473.693.671 2.167.671 1.474 0 2.167-.198 2.167-.671 0-.451-.693-.671-2.167-.671Zm-4.609 2.882h9.207v1.155h-9.207v-1.155Zm1.056 1.727h7.04v2.618h-5.588v.902h-1.441v-1.914h5.588v-.517h-5.599v-1.089Zm.011 3.201h7.293v1.1h-7.293v-1.1Zm16.785-9.02h1.463v10.186h-1.463V18.793Zm1.012 3.982h1.771v1.21h-1.771v-1.21Zm-6.006-2.948h1.364c0 2.827-.264 4.994-2.068 7.018l-1.144-.825c1.573-1.738 1.848-3.432 1.848-6.017v-.176Zm-1.397 0h1.969v1.188h-1.969v-1.188Zm4.202 0h1.364c0 2.959-.242 5.456-2.013 7.667l-1.144-.814c1.54-1.947 1.793-3.905 1.793-6.688v-.165Zm-1.1 0h1.705v1.188h-1.705v-1.188Zm13.488 6.039v-.858c0-.293.07-.561.209-.803.147-.242.341-.433.583-.572.242-.147.51-.22.803-.22h2.497v-1.65h-5.159V20.08h5.236c.294 0 .561.073.803.22.242.14.437.33.583.572.147.242.22.51.22.803v1.826c0 .293-.073.561-.22.803a1.7 1.7 0 0 1-.583.583c-.242.147-.509.22-.803.22h-2.475v.759h-1.694Zm0 2.134v-1.683h1.694V28h-1.694Z"
                />
                <Path stroke="#5352D4" strokeWidth={1.5} d="m211 19.5-6 6m6-6h-5m5 0v5" />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M0 0h246v47H0z" />
                </ClipPath>
            </Defs>
        </Svg> */}
         <View style={styles.contentContainer}>
          <Text style={styles.title}>너와 나는 얼마나 닮았을까?</Text>
         <Image source={BannerImage} style={styles.image} resizeMode="cover" />
      </View>
    </TouchableOpacity>
)



const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E7A67E",
    borderRadius: 8,
    padding: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    margin: 10,
  },
  contentContainer: {
    height: 250,
    alignItems: 'center',
  },
  image: {
    width: 280, 
    height: 200, 
    marginBottom: 30,
  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff",
    marginBottom: 10,
  },
});
export default CompareOtherButton;