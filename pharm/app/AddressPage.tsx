import { Text, View,StyleSheet } from "react-native"

const AddressPage = () =>{
    return(
        <View style={style.container}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eius.</Text>
        </View>
    )

}
export default AddressPage


const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})