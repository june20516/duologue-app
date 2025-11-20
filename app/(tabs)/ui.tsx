import { useState } from 'react';
import { Text, XStack, YStack } from 'tamagui';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Typography } from '@/components/Typography';
import { Button, Card, Input } from '@/components/ui';

const UITestScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#BFFF00', dark: '#1D3D47' }}
      headerImage={<Typography type="title">UI Components</Typography>}
    >
      <YStack p="$3" gap="$6" bg="$background">
        {/* Button Component Section */}
        <YStack gap="$4">
          <Text fontSize="$6" fontWeight="bold" color="$color">
            Button Component
          </Text>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Variants
            </Text>
            <XStack gap="$2" flexWrap="wrap">
              <Button variant="primary" onPress={() => alert('Primary')}>
                Primary
              </Button>
              <Button variant="secondary" onPress={() => alert('Secondary')}>
                Secondary
              </Button>
              <Button variant="outline" onPress={() => alert('Outline')}>
                Outline
              </Button>
              <Button variant="ghost" onPress={() => alert('Ghost')}>
                Ghost
              </Button>
            </XStack>
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Sizes
            </Text>
            <XStack gap="$2" items="center" flexWrap="wrap">
              <Button size="sm" variant="primary" onPress={() => alert('Small')}>
                Small
              </Button>
              <Button size="md" variant="primary" onPress={() => alert('Medium')}>
                Medium
              </Button>
              <Button size="lg" variant="primary" onPress={() => alert('Large')}>
                Large
              </Button>
            </XStack>
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              States
            </Text>
            <XStack gap="$2" flexWrap="wrap">
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="primary" loading={loading} onPress={handleLoadingTest}>
                {loading ? 'Loading...' : 'Click to Load'}
              </Button>
            </XStack>
          </YStack>
        </YStack>

        {/* Input Component Section */}
        <YStack gap="$4">
          <Text fontSize="$6" fontWeight="bold" color="$color">
            Input Component
          </Text>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Basic Input
            </Text>
            <Input placeholder="Enter your name" />
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              With Label and Helper Text
            </Text>
            <Input
              label="Email"
              placeholder="your@email.com"
              helperText="We'll never share your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Password Input
            </Text>
            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Error State
            </Text>
            <Input
              label="Email"
              placeholder="your@email.com"
              errorText="Please enter a valid email address"
              variant="error"
            />
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Disabled State
            </Text>
            <Input label="Username" placeholder="Username" disabled value="readonly_user" />
          </YStack>
        </YStack>

        {/* Card Component Section */}
        <YStack gap="$4">
          <Text fontSize="$6" fontWeight="bold" color="$color">
            Card Component
          </Text>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Default (with shadow)
            </Text>
            <Card>
              <Card.Header>
                <Text fontSize="$5" fontWeight="bold">
                  Card Title
                </Text>
              </Card.Header>
              <YStack px="$4">
                <Text fontSize="$3" color="$color">
                  This is a default card with subtle shadow effect.
                </Text>
              </YStack>
              <Card.Footer>
                <Button variant="primary">Action</Button>
              </Card.Footer>
            </Card>
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Outlined
            </Text>
            <Card variant="outlined">
              <Card.Header>
                <Text fontSize="$5" fontWeight="bold">
                  Outlined Card
                </Text>
              </Card.Header>
              <YStack px="$4">
                <Text fontSize="$3" color="$color">
                  This card has a border instead of shadow.
                </Text>
              </YStack>
              <Card.Footer>
                <Button variant="primary">Action</Button>
              </Card.Footer>
            </Card>
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Elevated
            </Text>
            <Card variant="elevated">
              <Card.Header>
                <Text fontSize="$5" fontWeight="bold">
                  Elevated Card
                </Text>
              </Card.Header>
              <YStack px="$4">
                <Text fontSize="$3" color="$color">
                  This card has a larger shadow for more elevation.
                </Text>
              </YStack>
              <Card.Footer />
            </Card>
          </YStack>

          <YStack gap="$3">
            <Text fontSize="$4" fontWeight="600">
              Pressable Card
            </Text>
            <Card onPress={() => alert('Card pressed!')}>
              <YStack gap="$2">
                <Card.Header>
                  <Text fontSize="$5" fontWeight="bold">
                    Tap Me!
                  </Text>
                </Card.Header>
                <YStack px="$4">
                  <Text fontSize="$3" color="$color">
                    This card is pressable and shows feedback.
                  </Text>
                </YStack>
                <Card.Footer />
              </YStack>
            </Card>
          </YStack>
        </YStack>
      </YStack>
    </ParallaxScrollView>
  );
};

export default UITestScreen;
