import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    Pressable,
    FlatList
} from "react-native";
import { AppColors } from "../Constants/AppColors";
import DropShadow from "react-native-drop-shadow";
import FastImage from "react-native-fast-image";
import {Typographies} from "../../Source/Constants/Typographies"
import AppButton from "../Components/AppButton";
import ChapterItem from "./HomePages/Items/ChapterItem";
import CharacterItem from "./HomePages/Items/CharacterItem";
const { width } = Dimensions.get("window");
// const data =[
//     {
//         "_id":"1",
//         "title":"",
//         "thumbnail":"",
//         "date":""
//     },
//     {
//         "_id":"1",
//         "title":"",
//         "thumbnail":"",
//         "date":""
//     },
//     {
//         "_id":"1",
//         "title":"",
//         "thumbnail":"",
//         "date":""
//     },
//     {
//         "_id":"1",
//         "title":"",
//         "thumbnail":"",
//         "date":""
//     },
//     {
//         "_id":"1",
//         "title":"",
//         "thumbnail":"",
//         "date":""
//     },
//     {
//         "_id":"1",
//         "title":"",
//         "thumbnail":"",
//         "date":""
//     }
// ]
export default class Tab extends React.Component {
    
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        }
    };

    render() {
    
        //  const {data} = this.props.data;
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            
            <View style={{ flex: 1, }}>
                <View
                    style={{
                  
                    }}
                >


                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 28,
                            marginBottom: 20,
                            height: 36,
                            position: "relative",

                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#fff",
                                borderRadius: 20,
                                transform: [
                                    {
                                        translateX
                                    }
                                ],
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}
                        />
                  

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 20,
                                    borderRightWidth: 0,
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderColor: '#EBECF0',
                                    borderWidth:1
                                }}
                                onLayout={event =>
                                    this.setState({
                                        xTabOne: event.nativeEvent.layout.x
                                    })
                                }
                                onPress={() =>
                                    this.setState({ active: 0 }, () =>
                                        this.handleSlide(xTabOne)
                                    )
                                }
                            >
                                <Text
                                    style={{
                                        color: active === 0 ? AppColors.primary_black : AppColors.secondary_gray
                                    }}
                                >
                                    Manga
                                </Text>
                            </TouchableOpacity>
                            {/* 168.72727966308594 */}
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 20,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                borderColor: '#EBECF0',
                                borderWidth:1
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x,
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? AppColors.primary_black : AppColors.secondary_gray
                                }}
                            >
                                Characters
                            </Text>
                        </TouchableOpacity>
                        
                    </View>

                    <ScrollView nestedScrollEnabled={true}
                   
                    >
                        <Animated.View
                            style={{
                               
                           
                          
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            <View style={{borderWidth:1, 
                                borderColor: AppColors.secondary_gray, 
                                width:'100%',
                                alignItems:'center',
                                padding:10,
                                borderRadius:15
                                }}>

                          
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                    <FastImage source={require('../Images/ic_user.png')}
                                    
                                    style={{width:20, height:20}}
                                    resizeMode={FastImage.resizeMode.contain}
                                    tintColor={AppColors.secondary_gray}
                                    ></FastImage>
                                <Text style={[Typographies.h4,{marginStart:10, color:AppColors.secondary_gray}]}>Author:</Text>
                                </View>
                                <Text style={[Typographies.h4,{marginStart:10, color:AppColors.primary, fontWeight:'800'}]}>Tomohito Oda</Text>

                            </View>
                            <View style={{flexDirection:'row', marginTop:17}}>
                                <View style={{flexDirection:'row'}}>
                                    <FastImage source={require('../Images/ic_status.png')}
                                    
                                    style={{width:20, height:20}}
                                    resizeMode={FastImage.resizeMode.contain}
                                    tintColor={AppColors.secondary_gray}
                                    ></FastImage>
                                <Text style={[Typographies.h4,{marginStart:10, color:AppColors.secondary_gray}]}>Status:</Text>
                                </View>
                                <Text style={[Typographies.h4,{marginStart:10, color:AppColors.primary, fontWeight:'800'}]}>On Going</Text>

                            </View>
                            <View style={{flexDirection:'row', marginTop:17}}>
                                <View style={{flexDirection:'row'}}>
                                    <FastImage source={require('../Images/ic_category.png')}
                                    
                                    style={{width:20, height:20}}
                                    resizeMode={FastImage.resizeMode.contain}
                                    tintColor={AppColors.secondary_gray}
                                    ></FastImage>
                                <Text style={[Typographies.h4,{marginStart:10, color:AppColors.secondary_gray}]}>Genres:</Text>
                                </View>
                                <Text style={[Typographies.h4,{marginStart:10, color:AppColors.primary, fontWeight:'800'}]}>Tomohito Oda</Text>

                            </View>
                            <View style={{flexDirection:'row', marginTop:17}}>
                                <View style={{flexDirection:'row'}}>
                                    <FastImage source={require('../Images/ic_eye2.png')}
                                    
                                    style={{width:20, height:20}}
                                    resizeMode={FastImage.resizeMode.contain}
                                    tintColor={AppColors.secondary_gray}
                                    ></FastImage>
                                <Text style={[Typographies.h4,{marginStart:10, color:AppColors.secondary_gray}]}>Views:</Text>
                                </View>
                                <Text style={[Typographies.h4,{marginStart:10, color:AppColors.primary, fontWeight:'800'}]}>34.642.436</Text>

                            </View>
                          
                            </View>
                            <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-around', paddingHorizontal:20,flex:1}}>
                                <Pressable android_ripple={{color: AppColors.primary}} style={{flex:1, alignItems:'center', borderWidth:1, borderColor:AppColors.primary,padding:10, borderBottomStartRadius:10, borderTopStartRadius:10}}><Text style={[Typographies.h4,{color: AppColors.primary}]}>Read First</Text></Pressable>
                                <Pressable android_ripple={{color: AppColors.primary}} style={{flex:1,alignItems:'center', borderWidth:1, borderColor:AppColors.primary,padding:10,borderBottomEndRadius:10,borderTopEndRadius:10}}><Text style={[Typographies.h4,{color: AppColors.primary}]}>Read Last</Text></Pressable>
                            </View>
                            <View style={{marginTop:20}}>
                                <Text style={[Typographies.h3,{color: AppColors.primary_black, fontWeight:'700'}]}>Description</Text>
                                <Text style={{lineHeight:20}}>Nisekoi kể về chuyện tình tay ba xoay quanh Ichijō Raku, Kirisaki Chitoge và Onodera Kosaki. Raku là con trai của ông trùm băng đảng yakuza tên Shuei-gumi và cậu đang thầm thích bạn học cùng lớp Kosaki. Cho đến khi có một cuộc hẹn hò giả tạo với cô gái Chitoge điều gì sẽ xảy ra tiếp theo...?</Text>
                            </View>
                            <View style={{marginTop:20}}>
                                <Text style={[Typographies.h3, {color: AppColors.primary_black, fontWeight:'700'}]}>Chapters</Text>
                              <ScrollView style={{height:500, marginTop:10}}
                              nestedScrollEnabled={true}
                              showsVerticalScrollIndicator={false}
                              >
                               {
                                this.props.data.map(item=><ChapterItem key={item._id}></ChapterItem>)
                               }
                              </ScrollView>
                            </View>
                        </Animated.View>
                             
                        <Animated.View
                            style={{
                    
                             
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            <View>
                            {
                                this.props.characterData.map(item =><CharacterItem data={item} key={item._id}></CharacterItem>)
                            }
                            </View>
                           
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}