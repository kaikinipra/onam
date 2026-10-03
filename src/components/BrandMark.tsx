import { Text, View } from "react-native";
import { colors, spacing } from "@/src/theme";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: spacing.sm }}>
      <Text style={{ color: colors.primary, fontSize: compact ? 28 : 38 }}>✿</Text>
      <View>
        <Text style={{ color: colors.accent, fontSize: compact ? 21 : 27, fontWeight: "800", letterSpacing: 1 }}>ONAM</Text>
        <Text style={{ color: colors.muted, fontSize: compact ? 11 : 13 }}>For local businesses</Text>
      </View>
    </View>
  );
}
