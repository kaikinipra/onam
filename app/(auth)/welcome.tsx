import { router } from "expo-router";
import { BrandMark, Button, Card, Screen, SectionTitle } from "@/src/components";
import { Text, View } from "react-native";
import { colors, spacing, typography } from "@/src/theme";

const benefits = ["Create offers", "Welcome regulars", "Track results"];

export default function Welcome() {
  return (
    <Screen contentContainerStyle={{ justifyContent: "center", paddingVertical: spacing.xl }}>
      <BrandMark />
      <Card style={{ backgroundColor: colors.accentSoft, padding: spacing.lg }}>
        <Text style={{ color: colors.accent, fontSize: typography.heading, fontWeight: "700", lineHeight: 32 }}>
          Grow your business with local customers
        </Text>
        <Text style={{ color: colors.muted, fontSize: typography.body, lineHeight: 24 }}>
          Create offers, bring people back, and see what works — all from one shop-side app.
        </Text>
      </Card>
      <SectionTitle title="Good food brings people together." subtitle="ONAM is made for the teams behind neighbourhood restaurants and shops." />
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: spacing.sm }}>
        {benefits.map((benefit) => (
          <View key={benefit} style={{ borderRadius: 24, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, paddingHorizontal: spacing.md, paddingVertical: spacing.sm }}>
            <Text style={{ color: colors.accent, fontWeight: "600" }}>{benefit}</Text>
          </View>
        ))}
      </View>
      <Button label="Continue with phone" onPress={() => router.push("/login")} />
      <Text style={{ color: colors.muted, textAlign: "center", fontSize: typography.caption }}>Restaurant staff only · customer flows happen at the counter</Text>
    </Screen>
  );
}
