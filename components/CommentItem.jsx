import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import BtnAntDesign from '../components/BtnAntDesign';

const CommentItem = (props) => {
    let click = 0
    const [ifEdit, setIfEdit] = useState(false)
    const [copyComment, setCopyComment] = useState(props.comment)

    function clickCounter() {
        click += 1          
        setTimeout(()=>onPress(), 200)        
    }

    function onPress(){ 
        if(click == 0) return
        else if (click == 2) {    
            click = 0 
            setIfEdit(true)
        }
        else{ 
            click = 0
        }
    }

    return (
        <View style={styles.container}>
            {
                ifEdit ?
                    <View style={{width: '90%'}}>
                        <Text style={{ fontSize: 15 }}>
                            Title:{' '}
                            <TextInput
                                style={styles.titleTextInput}
                                value={copyComment.name}
                                onChangeText={(value) => setCopyComment({...copyComment, name: value})}
                            />
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                            By: {props.comment.email}
                        </Text>
                        <TextInput
                            style={styles.bodyTextInput}
                            multiline={true}
                            numberOfLines={5}
                            value={copyComment.body}
                            onChangeText={(value)=>setCopyComment({...copyComment, body: value})}
                        />
                        <View style={styles.btnSaveCancel}>
                            <BtnAntDesign
                                img={"checkcircleo"}
                                onPress={() => { 
                                    props.updateComment(props.comment.id, copyComment.name, copyComment.body)
                                    setIfEdit(false)
                                }}
                            />
                            <BtnAntDesign
                                img={"closecircleo"}
                                onPress={() => {
                                    setIfEdit(false)
                                    setCopyComment(props.comment)
                                }}
                            />
                        </View>
                    </View>
                :
                    <Pressable onPress={() => clickCounter()}
                        style={{width: '90%'}}
                    >
                        <Text key={props.comment.id} style={{ fontSize: 15 }}>
                            Title: {props.comment.name} {"\n"}
                            By: {props.comment.email} {"\n"}
                            {props.comment.body} {"\n\n"}
                        </Text>
                    </Pressable>
            }
            <BtnAntDesign img={"closecircleo"} onPress={() => props.delComment()} />
        </View>
    );
}

export default CommentItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-nearly"
    }, 
    titleTextInput: {
        fontSize: 15,
        width: '88%',
        position: 'absolute', 
        backgroundColor: 'lightgrey'
    },
    bodyTextInput: {
        fontSize: 15,
        backgroundColor: 'lightgrey'
    },
    btnSaveCancel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5
    }
})