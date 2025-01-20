import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Models } from "react-native-appwrite";

interface Props {
  item: Models.Document;
  onPress?: () => void;
}

export const FeaturedCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={{ uri: item.image }} className="w-full h-full rounded-2xl" />

      <Image
        source={images.cardGradient}
        className="w-full h-full rounded-2xl absolute bottom-0"
      />

      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="w-3.5 h-3.5" />
        <Text className="text-xs font-Rubik_Bold text-primary-1 ml-1">
          {item.rating}
        </Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-Rubik_Bold text-white"
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text className="text-sm mb-0.5 font-Rubik_Light text-white" numberOfLines={1}>
          {item.address}
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-Rubik_Bold text-primary-3">
            ₹{item.price}
          </Text>
          <Image source={icons.heart} className="w-5 h-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white border border-zinc-200 relative"
      onPress={onPress}
    >
      <View className="flex flex-row items-center absolute px-3 top-6 right-5 bg-white/80 blur-lg p-1 rounded-full z-50">
        <Image source={icons.star} className="w-2.5 h-2.5" />
        <Text className="text-xs font-Rubik_Bold text-primary-1 ml-0.5">
          {item.rating}
        </Text>
      </View>

      <Image source={{ uri: item.image }} className="w-full h-40 rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-Rubik_Bold text-black">
          {item.name}
        </Text>
        <Text className="text-xs font-Rubik_Regular text-zinc-700">
          {item.address}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-Rubik_Bold text-primary-1">
            ₹{item.price}
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};