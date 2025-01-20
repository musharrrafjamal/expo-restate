import React, { useState } from "react";
import { View, TouchableOpacity, Image, TextInput, Text } from "react-native";
import { useDebouncedCallback } from "use-debounce";

import icons from "@/constants/icons";
import { useLocalSearchParams, router, usePathname } from "expo-router";

import Cross from "@/assets/icons/cross.svg";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-3 rounded-xl border border-zinc-300 py-1">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="w-5 h-5" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          className="text-lg font-Rubik_Regular text-primary-1 ml-2 flex-1"
        />
      </View>

      {search && (
        <TouchableOpacity onPress={() => setSearch("")}>
          <Image source={icons.cross} className="w-8 h-8" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Search;
