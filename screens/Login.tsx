import React from "react";
import { Block, Text, Button, Input } from "../components";
import useTheme from "../hooks/useTheme";

const Login = () => {
  const { sizes, colors } = useTheme();
  return (
    <Block mt={50} ph={20}>
      <Text h3 align="center">
        Login
      </Text>
      <Text size={sizes.text * 0.8} weight="500">
        Email
      </Text>
      <Input
        keyboardType="email-address"
        placeholder="Input"
        placeholderTextColor="black"
        mb={sizes.md}
      />
      <Text size={sizes.text * 0.8} weight="500">
        Password
      </Text>
      <Input
        secureTextEntry
        placeholder="Input"
        placeholderTextColor="black"
        mb={sizes.md}
      />
      <Button
        center
        mt={24}
        color={colors.primary}
        radius={8}
        padding={8}
      >
        <Text color={colors.white} weight="800">
          Login
        </Text>
      </Button>
      <Text h1 align="center">
        Header h1
      </Text>
      <Text h2 align="center">
        Header h2
      </Text>
      <Text h3 align="center">
        Header h3
      </Text>
      <Text h4 align="center">
        Header h4
      </Text>
      <Text p align="center">
        Paragraph
      </Text>
      <Block row justify="space-evenly" mt={sizes.xxl}>
        <Block
          radius={sizes.xs}
          mt={sizes.s}
          color={colors.primary}
          style={{ height: "50%", width: 40 }}
        />
        <Block
          radius={sizes.xs}
          mt={sizes.s}
          color={colors.secondary}
          style={{ height: "50%", width: 40 }}
        />
        <Block
          radius={sizes.xs}
          mt={sizes.s}
          color={colors.tertiary}
          style={{ height: "50%", width: 40 }}
        />
        <Block
          radius={sizes.xs}
          mt={sizes.s}
          color={colors.success}
          style={{ height: "50%", width: 40 }}
        />
        <Block
          radius={sizes.xs}
          mt={sizes.s}
          color={colors.warning}
          style={{ height: "50%", width: 40 }}
        />
        <Block
          radius={sizes.xs}
          mt={sizes.s}
          color={colors.error}
          style={{ height: "50%", width: 40 }}
        />
      </Block>
    </Block>
  );
};

export default Login;
