import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Link, router } from "expo-router";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { user, loading, isLogged } = useGlobalContext();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Link href={`/sign-in`} className="text-primary-1">
          Sign In
        </Link>
        <Link href={`/explore`}>Explore</Link>
        <Link href={`/profile`}>Profile</Link>
        <Link
          href={{
            pathname: "/properties/[id]",
            params: { id: "1" },
          }}
        >
          Property 1
        </Link>
      </View>
      <TouchableOpacity
        onPress={() => {
          logout();
          router.push("/sign-in");
        }}
        className="bg-red-500 p-2 rounded-md my-4 w-1/2 mx-auto"
      >
        <Text className="text-white text-center">Logout</Text>
      </TouchableOpacity>

      {loading && <Text>Loading...</Text>}
      {!loading && !isLogged && <Text>Not logged in</Text>}
      {!loading && isLogged && (
        <View>
          <Text>{JSON.stringify(user?.name)}</Text>
          <Text>{JSON.stringify(user?.email)}</Text>
          <Text>{JSON.stringify(user?.emailVerification)}</Text>
          <Text>{JSON.stringify(user?.phone)}</Text>
          <Text>{JSON.stringify(user?.phoneVerification)}</Text>
          <Text>{JSON.stringify(user?.$createdAt)}</Text>
          <Text>{JSON.stringify(user?.$updatedAt)}</Text>
          <Image
            source={{ uri: user?.avatar }}
            className="w-10 h-10 rounded-full"
          />
        </View>
      )}
    </View>
  );
}
