import {  ScrollView, View } from "react-native"
import ProductList from "../components/Search/SearchProduct"


const SearchPage = () => {
    return (
        <View>
            <ScrollView>
                <ProductList/>
            </ScrollView>
        </View>
    )

}
export default SearchPage