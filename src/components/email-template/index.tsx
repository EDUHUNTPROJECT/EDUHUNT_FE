import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface SkyConfirmEmailProps {
  validationCode?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const SkyConfirmEmail = ({ validationCode }: SkyConfirmEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirm your email address</Preview>
    <Body>
      <Container>
        <Heading>Confirm your email address</Heading>
        <Text>
          Welcome to EduHunt. Your confirmation code is below - enter it in your
          open browser window, and we will help you get signed in.
        </Text>

        <Section>
          <Text>{validationCode}</Text>
        </Section>

        <Text>
          If you did not request this email, there is nothing to worry about;
          you can safely ignore it.
        </Text>

        <Section>
          <Row>
            <Column>
              <Img
                src={`https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg`}
                width="120"
                height="70"
                alt="Sky"
              />
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            href="https://skyhq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            href="https://sky.com/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            href="https://sky.com/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help center
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            href="https://sky.com/community"
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            EduHunt Community
          </Link>
          <Text>
            ©2024 Sky Technologies, LLC, a Salesforce company. <br />
            5990 Howard Street, San Francisco, CA 941076, USA <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

SkyConfirmEmail.PreviewProps = {
  validationCode: "DJZ-ABC",
} as SkyConfirmEmailProps;

export default SkyConfirmEmail;
