import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { colors, spacing } from "@/src/theme";

export function Card({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return <View style={[{ padding: spacing.md, gap: spacing.sm, borderRadius: 20, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, elevation: 1 }, style]}>{children}</View>;
}
