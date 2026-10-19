import { useState } from "react";
import {
  Theme,
  Card,
  Flex,
  Box,
  Text,
  Heading,
  Badge,
  Button,
  Switch,
  Slider,
  Progress,
  Avatar,
  Table,
  Callout,
} from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

type Output = "card" | "table" | "callout";

const NAMES: { id: Output; label: string }[] = [
  { id: "card", label: "卡片" },
  { id: "table", label: "表格" },
  { id: "callout", label: "通知" },
];

export default function ComponentStage() {
  const [sel, setSel] = useState<Output>("card");

  return (
    <>
      <div className="stage-names" role="group" aria-label="选择一个组件">
        {NAMES.map((n) => (
          <button
            key={n.id}
            type="button"
            aria-pressed={sel === n.id}
            onClick={() => setSel(n.id)}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="stage">
        <div className="sheet" data-ui>
          <Theme
            key={sel}
            accentColor="blue"
            grayColor="gray"
            radius="medium"
            hasBackground={false}
          >
            {sel === "card" && (
              <Card size="3">
                <Flex direction="column" gap="4">
                  <Flex gap="3" align="center">
                    <Avatar fallback="RT" radius="full" size="3" />
                    <Box grow="1">
                      <Heading as="h2" size="1">组件演示</Heading>
                      <Text as="div" size="1" color="gray">
                        真实组件 · 可交互
                      </Text>
                    </Box>
                    <Badge color="blue">稳定</Badge>
                  </Flex>

                  <Text size="1" color="gray">
                    这段界面由 @radix-ui/themes 渲染，样式开箱即用。
                  </Text>

                  <Flex gap="3" wrap="wrap">
                    <Button size="1" variant="soft">
                      主要操作
                    </Button>
                    <Button size="1" variant="soft" color="gray">
                      次要操作
                    </Button>
                  </Flex>

                  <Flex gap="3" align="center">
                    <Switch defaultChecked />
                    <Text size="1">启用实时预览</Text>
                  </Flex>

                  <Slider defaultValue={[60]} />

                  <Progress value={72} />
                </Flex>
              </Card>
            )}

            {sel === "table" && (
              <Table.Root size="1">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>组件</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>类别</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>一句话</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.RowCell>
                      <Text size="1" weight="medium">Button</Text>
                    </Table.RowCell>
                    <Table.RowCell>
                      <Badge color="blue">基础</Badge>
                    </Table.RowCell>
                    <Table.RowCell>
                      <Text size="1">触发操作的主要控件。</Text>
                    </Table.RowCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowCell>
                      <Text size="1" weight="medium">Flex</Text>
                    </Table.RowCell>
                    <Table.RowCell>
                      <Badge color="cyan">布局</Badge>
                    </Table.RowCell>
                    <Table.RowCell>
                      <Text size="1">一维弹性盒布局原语。</Text>
                    </Table.RowCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowCell>
                      <Text size="1" weight="medium">Dialog</Text>
                    </Table.RowCell>
                    <Table.RowCell>
                      <Badge color="purple">浮层</Badge>
                    </Table.RowCell>
                    <Table.RowCell>
                      <Text size="1">模态对话框，聚焦当前任务。</Text>
                    </Table.RowCell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            )}

            {sel === "callout" && (
              <Flex direction="column" gap="3">
                <Callout.Root color="blue">
                  <Callout.Icon>
                    <InfoCircledIcon />
                  </Callout.Icon>
                  <Callout.Text size="1">
                    已启用实时预览，样式随主题变化。
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root color="green">
                  <Callout.Icon>
                    <InfoCircledIcon />
                  </Callout.Icon>
                  <Callout.Text size="1">
                    构建成功，用时 2.4 秒。
                  </Callout.Text>
                </Callout.Root>
                <Callout.Root color="orange" variant="soft">
                  <Callout.Icon>
                    <InfoCircledIcon />
                  </Callout.Icon>
                  <Callout.Text size="1">
                    提示：appearance 属性切换暗色模式。
                  </Callout.Text>
                </Callout.Root>
              </Flex>
            )}
          </Theme>
        </div>
      </div>
    </>
  );
}
