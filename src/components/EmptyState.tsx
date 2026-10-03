import { Text } from "react-native";
import { Card } from "./Card";
import { colors, typography } from "@/src/theme";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <Card><Text style={{ color: colors.text, fontSize: typography.body, fontWeight: "700" }}>{title}</Text><Text style={{ color: colors.muted, fontSize: typography.caption, lineHeight: 20 }}>{description}</Text></Card>;
}
