import { router } from "expo-router";
import { BrandMark, Button, Card, Input, Screen, SectionTitle } from "@/src/components";
import { colors, spacing } from "@/src/theme";
import { Text, View } from "react-native";

export default function BusinessProfile() {
  return (
    <Screen>
      <BrandMark compact />
      <SectionTitle title="Confirm your business details" subtitle="Review the shop profile before your team starts." />
      <Card style={{ flexDirection: "row", alignItems: "center", gap: spacing.md }}>
        <View style={{ width: 76, height: 76, alignItems: "center", justifyContent: "center", borderRadius: 16, backgroundColor: colors.accentSoft }}><Text style={{ fontSize: 34 }}>🍛</Text></View>
        <View style={{ flex: 1 }}><Text style={{ color: colors.text, fontWeight: "700" }}>Your restaurant</Text><Text style={{ color: colors.muted }}>Restaurant · South Indian</Text><Text style={{ color: colors.success, marginTop: spacing.xs }}>✓ Sample profile</Text></View>
      </Card>
      <Input label="Business name" placeholder="Your restaurant name" />
      <Input label="Phone number" placeholder="Business phone number" keyboardType="phone-pad" />
      <Input label="Address" placeholder="Street, city, postal code" />
      <Button label="Continue to business hours" onPress={() => router.push("/business-hours")} />
      <Text style={{ color: colors.muted, textAlign: "center" }}>Profile changes are not saved in this preview.</Text>
    </Screen>
  );
}
