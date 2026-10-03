import { router } from "expo-router";
import { Button, Card, Screen, SectionTitle } from "@/src/components";
import { colors, spacing } from "@/src/theme";
import { Text, View } from "react-native";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function BusinessHours() {
  return (
    <Screen>
      <SectionTitle title="A few quick settings" subtitle="Set business hours so ONAM can help at the right time." />
      <Card>
        <Text style={{ color: colors.text, fontWeight: "700" }}>◷  Business hours</Text>
        {days.map((day) => (
          <View key={day} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: colors.border, paddingVertical: spacing.sm }}>
            <Text style={{ color: colors.primary, fontWeight: "700" }}>✓</Text>
            <Text style={{ flex: 1, color: colors.text, marginLeft: spacing.sm }}>{day}</Text>
            <Text style={{ color: colors.muted, fontSize: 13 }}>10:30 AM – 11:00 PM</Text>
          </View>
        ))}
      </Card>
      <Card style={{ backgroundColor: colors.accentSoft }}>
        <Text style={{ color: colors.accent, fontWeight: "700" }}>WhatsApp orders · optional</Text>
        <Text style={{ color: colors.muted }}>WhatsApp connection will be added later.</Text>
      </Card>
      <Button label="Finish setup preview" onPress={() => router.replace("/(tabs)")} />
    </Screen>
  );
}
