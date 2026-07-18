import { Card, Flex, Typography } from "antd";
import type { ReactNode } from "react";

const { Text, Title } = Typography;

interface CardStatisticProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  color?: string;
}

const CardStatistic = ({
  title,
  value,
  icon,
  color = "#1677ff",
}: CardStatisticProps) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: 16,
        height: "100%",
      }}
    >
      <Flex justify="space-between" align="center">
        <div>
          <Text type="secondary">{title}</Text>

          <Title
            level={2}
            style={{
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            {value}
          </Title>
        </div>

        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: `${color}15`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color,
            fontSize: 28,
          }}
        >
          {icon}
        </div>
      </Flex>
    </Card>
  );
};

export default CardStatistic;
