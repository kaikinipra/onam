import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import { colors, spacing, typography } from "@/src/theme";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export function Button({ label, onPress, variant = "primary", style, disabled = false }: Props) {
  const primary = variant === "primary";
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          minHeight: 54,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: spacing.lg,
          borderRadius: 18,
          backgroundColor: primary ? colors.primary : colors.surface,
          borderWidth: primary ? 0 : 1,
          borderColor: colors.border,
          opacity: disabled ? 0.55 : 1,
        },
        style,
      ]}
    >
      <Text style={{ color: primary ? colors.onPrimary : colors.text, fontSize: typography.body, fontWeight: "700" }}>
        {label}
      </Text>
    </Pressable>
  );
}
