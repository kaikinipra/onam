import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { colors, spacing } from "@/src/theme";

type Props = {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export function Screen({ children, contentContainerStyle }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={[
          { flexGrow: 1, padding: spacing.lg, gap: spacing.md },
          contentContainerStyle,
        ]}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
