import { Button, Card, Input, Screen, SectionTitle } from "@/src/components";
import { colors, spacing } from "@/src/theme";
import { Text, View } from "react-native";

const suggestions = ["More ideas", "Boost orders", "Festival offers"];

export default function AIChat() {
  return (
    <Screen>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View>
          <Text style={{ color: colors.accent, fontSize: 20, fontWeight: "800" }}>ONAM</Text>
          <Text style={{ color: colors.muted, fontSize: 12 }}>Your AI partner · preview</Text>
        </View>
        <Text style={{ color: colors.success, fontSize: 13 }}>● Your business</Text>
      </View>
      <Card>
        <Text style={{ color: colors.text, lineHeight: 22 }}>Good morning! I can help your team plan local offers that suit your menu and customers.</Text>
        <Text style={{ color: colors.muted, fontSize: 12, textAlign: "right" }}>Example conversation</Text>
      </Card>
      <SectionTitle title="Offer ideas" subtitle="Static visual examples · recommendations are not generated." />
      <View style={{ gap: spacing.sm }}>
        {[
          { icon: "🍛", name: "Weekend special", offer: "₹50 OFF", note: "On orders above ₹300" },
          { icon: "🥞", name: "Dosa combo", offer: "20% OFF", note: "On combo orders" },
        ].map((item) => (
          <Card key={item.name}>
            <View style={{ flexDirection: "row", gap: spacing.md, alignItems: "center" }}>
              <View style={{ width: 64, height: 64, borderRadius: 16, backgroundColor: colors.accentSoft, alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 30 }}>{item.icon}</Text></View>
              <View style={{ flex: 1, gap: 3 }}>
                <Text style={{ color: colors.text, fontWeight: "700" }}>{item.name}</Text>
                <Text style={{ color: colors.primary, fontSize: 20, fontWeight: "800" }}>{item.offer}</Text>
                <Text style={{ color: colors.muted, fontSize: 13 }}>{item.note}</Text>
              </View>
            </View>
            <Button label="Preview offer" variant="secondary" disabled onPress={() => undefined} />
          </Card>
        ))}
      </View>
      <Card style={{ alignSelf: "flex-end", maxWidth: "90%", backgroundColor: colors.chatBubble }}>
        <Text style={{ color: colors.text }}>Create a weekend offer for our signature dish.</Text>
        <Text style={{ color: colors.success, fontSize: 12, textAlign: "right" }}>Example prompt</Text>
      </Card>
      <Card style={{ backgroundColor: colors.accentSoft }}>
        <Text style={{ color: colors.accent, fontWeight: "700" }}>A draft would appear here</Text>
        <Text style={{ color: colors.muted }}>AI generation and offer publishing are not connected in this foundation.</Text>
        <Button label="Publish offer" disabled onPress={() => undefined} />
      </Card>
      <Input label="Message the assistant" placeholder="Chat preview only" editable={false} />
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: spacing.xs }}>
        {suggestions.map((label) => (
          <View key={label} style={{ borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, borderRadius: 22, paddingHorizontal: spacing.md, paddingVertical: spacing.sm }}>
            <Text style={{ color: colors.accent, fontSize: 13 }}>{label}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}
