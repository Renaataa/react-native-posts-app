import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import CommentItem from "./CommentItem";

const ListComments = (props) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        loadPostComments();
    }, []);
    
    const loadPostComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.postID}/comments`);
        const json = await response.json();
        setComments(json);
    }

    function updateComment(id, name, body){
        const newArray = [...comments] 
        const idxComment = comments.findIndex(commentFilter => commentFilter.id == id)
        newArray[idxComment] = { ...comments[idxComment], name: name, body: body }
        setComments(newArray)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>Comments</Text>
            {    
                comments.map((comment) => {
                    return (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            delComment={() => setComments(comments.filter(commentFilter => commentFilter.id != comment.id))}
                            updateComment={updateComment}
                        />
                    )
                })
            }
        </View>
    );
}

export default ListComments;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 20
    },
    listTitle: {
        fontSize: 20,
        paddingBottom: 5
    }
})