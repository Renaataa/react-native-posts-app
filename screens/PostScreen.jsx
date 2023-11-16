import { View, Text, StyleSheet } from "react-native";
import ListComments from "../components/ListComments";
    
const PostScreen = ({ route }) => {
    const { post } = route.params;
    const property = { key: 0, value: 1 }

    return (
        <View>
            <View style={styles.container}>
                {    
                    Object.entries(post).map((postProperty, idx)=>{
                        return (
                            <Text key={idx} style={{fontSize: 25}}>
                                {postProperty[property.key]}: {postProperty[property.value]} 
                            </Text>
                        )
                    })
                }
            </View>
            <ListComments postID={post.id} />
        </View>
    );
}

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
})