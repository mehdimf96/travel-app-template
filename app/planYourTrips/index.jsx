import signInImage from "@/assets/images/SignInImage.png";
import { router } from "expo-router";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
export default function PlanYourTrips() {
  const { width } = Dimensions.get("screen");
  return (
    <View className="bg-background flex-1">
      <View className="px-4 pt-10 pb-2 bg-background text-center">
        <Text className="font-bold text-xl mb-1 text-center">
          Plan your trips
        </Text>
        <Text className=" text-center">Connect with other travellers</Text>
      </View>

      <Image className="bg-background" style={{ width }} source={signInImage} />
      <View className=" absolute px-4 w-full bottom-8 space-y-6 ">
        <TouchableOpacity
          onPress={() => router.push("/logIn")}
          className="bg-primary p-2 rounded-xl"
        >
          <Text className="text-center text-white">Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/createAccount")}
          className="bg-background border p-2 rounded-xl"
        >
          <Text className="text-center text-black">Create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
