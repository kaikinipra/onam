import { Text, TextInput, TextInputProps, View } from "react-native";
import { colors, spacing, typography } from "@/src/theme";

type Props = TextInputProps & { label: string };
export function Input({ label, style, ...props }: Props) {
  return <View style={{ gap: spacing.xs }}><Text style={{ color: colors.text, fontSize: typography.caption, fontWeight: "600" }}>{label}</Text><TextInput {...props} placeholderTextColor={colors.muted} style={[{ minHeight: 54, paddingHorizontal: spacing.md, borderRadius: 15, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, color: colors.text, fontSize: typography.body }, style]} /></View>;
}
