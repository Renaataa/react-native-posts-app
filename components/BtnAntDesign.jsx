import { Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const BtnAntDesign = (props) => {
    return (
        <Pressable onPress={() => props.onPress()} >
          <AntDesign name={props.img} size={24} color="black" />
        </Pressable>
    );
}

export default BtnAntDesign;

/*
<RedButton />
<LinkButton/>
<AppButton/> - generals
*/