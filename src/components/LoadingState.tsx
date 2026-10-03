import { ActivityIndicator, Text, View } from "react-native";
import { colors, spacing } from "@/src/theme";

export function LoadingState({ label = "Loading" }: { label?: string }) {
  return <View accessibilityRole="progressbar" style={{ alignItems: "center", gap: spacing.sm, padding: spacing.lg }}><ActivityIndicator color={colors.primary} /><Text style={{ color: colors.muted }}>{label}</Text></View>;
}
