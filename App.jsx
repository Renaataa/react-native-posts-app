/*
  Сделать мобильное приложение

  У которого будет сверху в панели при старте написано - posts
  cнизу будет идти список названий постов - отображаться должно по 20 постов (ПОСТЫ идут по сетевому запросу)
  Снизу должна быть 2 стрелочки. Одна влево, другая вправо

  При нажатии влево - показывает посты с предыдущей странички
  При нажатии вправо - показывает посты со следующей странички

  Есть возможность обновить посты - отправляется заново запрос
  При нажатии на пост - открывается страничка с его подробной информацией для этого поста

  А под постом будет список комментариев к нему. Возле каждого комментария должен быть крестик - при нажатии на него, комментарий удаляется
 
  Запросы
  https://jsonplaceholder.typicode.com/posts/3 - получение подробной информации об 1 элементе 
  https://jsonplaceholder.typicode.com/posts/3/comments - получение комментариев к посту

  https://jsonplaceholder.typicode.com/guide/

  Доработка
  - Двойной клик по комментарию, дает возможность изменять в нем текст (он становится как поле ввода и в нем есть текст комментария. 
    Его можно изменять). И появляются кнопка сохранить, и отменить. Изменения можно либо сохранить, либо отменить

  Для решения этой задачи
  Поле ввода - https://stackoverflow.com/questions/41678570/what-is-an-alternative-of-textarea-in-react-native (Или можешь погуглить сама)
  И - https://reactnative.dev/docs/textinput
  Так же важно для позиционирования
  https://stackoverflow.com/questions/29541971/absolute-and-flexbox-in-react-native
  или же https://learn.javascript.ru/position


*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPostsScreen from './screens/ListPostsScreen';
import PostScreen from './screens/PostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListPosts" component={ListPostsScreen} options={{ title: "Posts" }} />
        <Stack.Screen name="Post" component={PostScreen} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
