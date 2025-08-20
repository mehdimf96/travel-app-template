import Logo from "@/assets/images/Logo.png";
import backgroundImage from "@/assets/images/WellcomeImage.png";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "../global.css";

export default function WellcomeScreen() {
  const { width, height } = Dimensions.get("window");
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ height, width }}
      resizeMode="cover"
      className="flex-1"
    >
      <View className="px-4 py-10 flex-1 justify-between">
        <View className="items-center">
          <Image source={Logo} />
          <Text className="text-background mb-1 font-bold text-3xl mt-2">
            Travel Guide
          </Text>
          <Text className="text-background font-semibold">
            Find your best place for...
          </Text>
        </View>
        <View>
          <TouchableOpacity className="bg-primary rounded-xl mb-1 ">
            <Text className="text-center text-white py-3 text-sm">
              Get started
            </Text>
          </TouchableOpacity>
          <Text className="text-background text-center">
            Already have an account? <TouchableOpacity>Log in</TouchableOpacity>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
