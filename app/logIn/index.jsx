import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className=" flex-1 px-6 justify-between bg-background py-10 ">
      <View>
        <Text className="font-bold mb-8 text-center text-xl">Log in</Text>
        <View className="flex-row mb-8 gap-x-3">
          <TouchableOpacity className="bg-primary flex-1 rounded-xl p-2">
            <Text className="text-center text-white">Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-primary rounded-xl flex-1 p-2">
            <Text className="text-center text-white">Facebook</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-center mb-8 text-sm">or log in with email</Text>
        <View className="space-y-5 mb-4">
          <TextInput
            className="border rounded-xl p-2"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="none"
          />
          <TextInput
            className="p-2 border rounded-xl "
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#aaa"
            autoCapitalize="none"
            secureTextEntry
            textContentType="none"
          />
        </View>
        <TouchableOpacity className="mb-6">
          <Text className="text-gray-400 text-end">Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-primary p-2 w-full rounded-xl">
          <Text className="text-center text-white">Log in</Text>
        </TouchableOpacity>
      </View>
      <View className="gap-y-5">
        <TouchableOpacity>
          <Text className="text-center">Don't have an account?</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border rounded-xl p-2">
          <Text className="text-center">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
