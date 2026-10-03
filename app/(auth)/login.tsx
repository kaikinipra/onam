import { router } from "expo-router";
import { BrandMark, Button, Card, Input, Screen, SectionTitle } from "@/src/components";
import { Text, View } from "react-native";
import { colors, spacing, typography } from "@/src/theme";

export default function Login() {
  return (
    <Screen contentContainerStyle={{ justifyContent: "center", paddingVertical: spacing.xl }}>
      <BrandMark />
      <SectionTitle title="Welcome to ONAM" subtitle="Sign in to manage your business offers and shop tools." />
      <Input label="Business phone number" placeholder="Enter phone number" keyboardType="phone-pad" />
      <Button label="Continue  →" onPress={() => router.push("/verification")} />
      <View style={{ flexDirection: "row", alignItems: "center", gap: spacing.sm, marginVertical: spacing.xs }}>
        <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
        <Text style={{ color: colors.muted, fontSize: typography.caption }}>or continue with</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
      </View>
      <Button label="G   Continue with Google" variant="secondary" onPress={() => router.push("/business-lookup")} />
      <Button label="Preview business setup" variant="secondary" onPress={() => router.push("/business-lookup")} />
      <Card style={{ backgroundColor: colors.accentSoft }}>
        <Text style={{ color: colors.accent, fontWeight: "700" }}>A shop-side app</Text>
        <Text style={{ color: colors.muted }}>These sign-in actions are previews. No account or Google connection is active.</Text>
      </Card>
    </Screen>
  );
}
