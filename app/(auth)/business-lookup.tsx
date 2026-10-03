import { router } from "expo-router";
import { BrandMark, Button, Card, Input, Screen, SectionTitle } from "@/src/components";
import { colors, spacing } from "@/src/theme";
import { Text } from "react-native";

export default function BusinessLookup() {
  return (
    <Screen>
      <BrandMark compact />
      <SectionTitle title="Find your business" subtitle="Enter your business phone number to start setup." />
      <Input label="Business phone number" placeholder="+91  Phone number" keyboardType="phone-pad" />
      <Button label="⌕   Search on Google" onPress={() => router.push("/business-results")} />
      <Card style={{ backgroundColor: colors.accentSoft }}>
        <Text style={{ fontSize: 24 }}>📍</Text>
        <Text style={{ color: colors.accent, fontWeight: "700" }}>Your business details, in one place</Text>
        <Text style={{ color: colors.muted }}>Google business lookup is a visual preview and is not connected.</Text>
      </Card>
      <Text style={{ color: colors.muted, textAlign: "center" }}>No phone number is submitted or stored.</Text>
    </Screen>
  );
}
