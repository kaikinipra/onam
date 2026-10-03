import { router } from "expo-router";
import { BrandMark, Button, Screen, SectionTitle } from "@/src/components";
import { Text, View } from "react-native";
import { colors, spacing, typography } from "@/src/theme";

export default function Verification() {
  return (
    <Screen contentContainerStyle={{ justifyContent: "center" }}>
      <BrandMark />
      <SectionTitle title="Verify your number" subtitle="The verification flow will be connected in a later phase." />
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: spacing.xs }}>
        {Array.from({ length: 6 }, (_, index) => (
          <View key={index} style={{ flex: 1, height: 54, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: colors.border, borderRadius: 12, backgroundColor: colors.surface }}>
            <Text style={{ color: colors.muted, fontSize: typography.heading }}>–</Text>
          </View>
        ))}
      </View>
      <Text style={{ color: colors.muted, textAlign: "center" }}>No code is sent or checked in this preview.</Text>
      <Button label="Continue to app preview" onPress={() => router.replace("/(tabs)")} />
    </Screen>
  );
}
