import { router } from "expo-router";
import { BrandMark, Button, Card, Screen, SectionTitle } from "@/src/components";
import { colors, spacing } from "@/src/theme";
import { Text, View } from "react-native";

export default function BusinessResults() {
  return (
    <Screen>
      <BrandMark compact />
      <SectionTitle title="Choose your business" subtitle="Sample results show how matching listings could appear." />
      {["Southside Kitchen", "Neighbourhood Cafe", "Spice Garden"].map((name, index) => (
        <Card key={name} style={{ borderColor: index === 0 ? colors.primary : colors.border }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: spacing.md }}>
            <View style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: colors.accentSoft, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 25 }}>🍽</Text>
            </View>
            <View style={{ flex: 1, gap: spacing.xs }}>
              <Text style={{ color: colors.text, fontWeight: "700" }}>{name}</Text>
              <Text style={{ color: colors.muted, fontSize: 13 }}>Restaurant · South Indian</Text>
              <Text style={{ color: colors.muted, fontSize: 12 }}>Sample listing · Bengaluru</Text>
            </View>
            <Text style={{ color: index === 0 ? colors.primary : colors.border, fontSize: 22 }}>{index === 0 ? "●" : "○"}</Text>
          </View>
        </Card>
      ))}
      <Button label="Continue with sample listing" onPress={() => router.push("/business-profile")} />
      <Text style={{ color: colors.muted, textAlign: "center" }}>These are fictional examples; no Google results are loaded.</Text>
    </Screen>
  );
}
