import { router } from "expo-router";
import { BrandMark, Button, Card, Screen, SectionTitle } from "@/src/components";
import { Text, View } from "react-native";
import { colors, spacing, typography } from "@/src/theme";

const features = [
  { icon: "🏷", title: "Create offers", detail: "Give regulars a reason to return." },
  { icon: "👥", title: "Meet customers", detail: "Build familiar relationships." },
  { icon: "📈", title: "Track results", detail: "See what brings people back." },
];

export default function Home() {
  return (
    <Screen>
      <BrandMark compact />
      <Card style={{ backgroundColor: colors.accentSoft, padding: spacing.lg }}>
        <Text style={{ color: colors.accent, fontSize: typography.heading, fontWeight: "700" }}>Grow your business with local customers</Text>
        <Text style={{ color: colors.muted, lineHeight: 23 }}>Create offers, bring people back, and see what works — all in one app.</Text>
      </Card>
      <View style={{ gap: spacing.sm }}>
        {features.map((feature) => (
          <Card key={feature.title} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 25, marginRight: spacing.sm }}>{feature.icon}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ color: colors.text, fontWeight: "700" }}>{feature.title}</Text>
              <Text style={{ color: colors.muted, fontSize: 13 }}>{feature.detail}</Text>
            </View>
          </Card>
        ))}
      </View>
      <SectionTitle title="Made for the shop floor" subtitle="Staff can pass this device to a customer for an in-store interaction. ONAM has no separate customer app." />
      <Button label="Preview customer capture" variant="secondary" onPress={() => router.push("/capture")} />
      <Button label="Meet the ONAM AI partner" onPress={() => router.push("/ai/chat")} />
    </Screen>
  );
}
