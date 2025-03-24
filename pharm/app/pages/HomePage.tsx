import { ScrollView, View } from "react-native"
import HomeBanner from "../components/Home/HomeBanner"
import HomeCategories from "../components/Home/HomeCategories"
import HomeProduct from "../components/Home/HomeProduct"

const HomePage = () => {
    return (
        <View>
            <ScrollView>
                <HomeBanner />
                <HomeCategories />
                <HomeProduct />
               

            </ScrollView>

        </View>
    )

}
export default HomePage