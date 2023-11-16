import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import BtnAntDesign from '../components/BtnAntDesign';

function ListPostsScreen({ navigation }) {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    loadPosts(); 
  }, [page]);

  const loadPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`);
    const json = await response.json();
    setPosts(json);
  };
    
  async function update() {
    setIsLoading(true)
    await loadPosts()
    setIsLoading(false)
  }
    
  return (
    <View style={styles.container}>
      <FlatList style={styles.postList}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={update}/>}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.post}
            onPress={() => {
              navigation.navigate('Post', {post: item})
            }}
          >
            <Text>{item.id}. {item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.pagesNavigation}>
        <BtnAntDesign img={"caretleft"} onPress={() => page == 1 ? '' : setPage(page - 1)} />
        <BtnAntDesign img={"caretright"} onPress={() => page == 5 ? '' : setPage(page + 1)} />
      </View>
    </View>
  );
}

export default ListPostsScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: '10%'
  },
  postList: {
    height: 400,
    borderBlockColor: "black",
    borderWidth: 2,
    paddingHorizontal: 10,
    marginTop: 30
  },
  post: {
    marginVertical: 5
  },
  pagesNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5
  }
});