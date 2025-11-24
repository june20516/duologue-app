import { useState } from 'react';
import { XStack, YStack } from 'tamagui';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Button, Card, Input, Modal, Spinner, Typography, useToast } from '@/components/ui';

const UITestScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adaptiveModalOpen, setAdaptiveModalOpen] = useState(false);
  const [dialogModalOpen, setDialogModalOpen] = useState(false);
  const [sheetModalOpen, setSheetModalOpen] = useState(false);
  const { showToast } = useToast();

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
          <Typography type="title">Button Component</Typography>
          <YStack gap="$3">
            <Typography type="subtitle">Variants</Typography>
            <YStack gap="$2">
              <Typography type="semiBold">Filled</Typography>
              <XStack gap="$2" flexWrap="wrap">
                <Button onPress={() => alert('Primary')}>Primary</Button>
                <Button priority="secondary" onPress={() => alert('Secondary')}>
                  Secondary
                </Button>
              </XStack>
            </YStack>
            <YStack gap="$2">
              <Typography type="semiBold">Outline</Typography>
              <XStack gap="$2" flexWrap="wrap">
                <Button variant="outline" onPress={() => alert('Outline')}>
                  Outline
                </Button>
                <Button variant="outline" priority="secondary" onPress={() => alert('Outline')}>
                  Outline
                </Button>
              </XStack>
            </YStack>
            <YStack gap="$2">
              <Typography type="semiBold">Ghost</Typography>
              <XStack gap="$2" flexWrap="wrap">
                <Button variant="ghost" onPress={() => alert('Ghost')}>
                  Ghost
                </Button>
                <Button variant="ghost" priority="secondary" onPress={() => alert('Ghost')}>
                  Ghost
                </Button>
              </XStack>
            </YStack>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Sizes</Typography>
            <XStack gap="$2" items="center" flexWrap="wrap">
              <Button size="sm" onPress={() => alert('Small')}>
                Small
              </Button>
              <Button size="md" onPress={() => alert('Medium')}>
                Medium
              </Button>
              <Button size="lg" onPress={() => alert('Large')}>
                Large
              </Button>
            </XStack>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">States</Typography>
            <XStack gap="$2" flexWrap="wrap">
              <Button disabled>Disabled</Button>
              <Button loading={loading} onPress={handleLoadingTest}>
                {loading ? 'Loading...' : 'Click to Load'}
              </Button>
            </XStack>
          </YStack>
        </YStack>

        {/* Typography Component Section */}
        <YStack gap="$4">
          <Typography type="title">Typography Component</Typography>

          <YStack gap="$3">
            <Typography type="subtitle">Headings</Typography>
            <YStack gap="$2" bg="$backgroundSoft">
              <Typography type="title">Title - Large page heading</Typography>
              <Typography type="subtitle">Subtitle - Section heading</Typography>
              <Typography type="heading">Heading - Card/Component heading</Typography>
            </YStack>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Body Text</Typography>
            <YStack gap="$2" bg="$backgroundSoft">
              <Typography>Regular - Regular body text for general content</Typography>
              <Typography type="semiBold">
                SemiBold - Emphasized text for important content
              </Typography>
            </YStack>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Small Text</Typography>
            <YStack gap="$2" bg="$backgroundSoft">
              <Typography type="caption">
                Caption - Smaller text for hints and descriptions
              </Typography>
              <Typography type="tag">Tag - Tiny text for labels and tags</Typography>
            </YStack>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Special</Typography>
            <Typography type="link">Link - Clickable link text with underline</Typography>
          </YStack>
        </YStack>

        {/* Input Component Section */}
        <YStack gap="$4">
          <Typography type="title">Input Component</Typography>

          <YStack gap="$3">
            <Typography type="subtitle">Basic Input</Typography>
            <Input placeholder="Enter your name" />
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">With Label and Helper Text</Typography>
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
            <Typography type="subtitle">Password Input</Typography>
            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Error State</Typography>
            <Input
              label="Email"
              placeholder="your@email.com"
              errorText="Please enter a valid email address"
              variant="error"
            />
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Disabled State</Typography>
            <Input label="Username" placeholder="Username" disabled value="readonly_user" />
          </YStack>
        </YStack>

        {/* Card Component Section */}
        <YStack gap="$4">
          <Typography type="title">Card Component</Typography>

          <YStack gap="$3">
            <Typography type="subtitle">Default (with shadow)</Typography>
            <Card>
              <Card.Header>
                <Typography type="heading">Card Title</Typography>
              </Card.Header>
              <YStack px="$4">
                <Typography>This is a default card with subtle shadow effect.</Typography>
              </YStack>
              <Card.Footer>
                <Button>Action</Button>
              </Card.Footer>
            </Card>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Outlined</Typography>
            <Card variant="outlined">
              <Card.Header>
                <Typography type="heading">Outlined Card</Typography>
              </Card.Header>
              <YStack px="$4">
                <Typography>This card has a border instead of shadow.</Typography>
              </YStack>
              <Card.Footer>
                <Button variant="outline">Action</Button>
              </Card.Footer>
            </Card>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Elevated</Typography>
            <Card variant="elevated">
              <Card.Header>
                <Typography type="heading">Elevated Card</Typography>
              </Card.Header>
              <YStack px="$4">
                <Typography>This card has a larger shadow for more elevation.</Typography>
              </YStack>
              <Card.Footer />
            </Card>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Pressable Card</Typography>
            <Card onPress={() => alert('Card pressed!')}>
              <YStack gap="$2">
                <Card.Header>
                  <Typography type="heading">Tap Me!</Typography>
                </Card.Header>
                <YStack px="$4">
                  <Typography>This card is pressable and shows feedback.</Typography>
                </YStack>
                <Card.Footer />
              </YStack>
            </Card>
          </YStack>
        </YStack>

        {/* Modal Component Section */}
        <YStack gap="$4">
          <Typography type="title">Modal Component</Typography>

          <YStack gap="$3">
            <Typography type="subtitle">Adaptive Modal</Typography>
            <Typography>
              Automatically switches between Dialog (desktop) and Sheet (mobile)
            </Typography>
            <Button onPress={() => setAdaptiveModalOpen(true)}>Open Adaptive Modal</Button>
            <Modal
              variant="adaptive"
              open={adaptiveModalOpen}
              onOpenChange={setAdaptiveModalOpen}
              title="Adaptive Modal"
              description="This modal adapts to screen size"
            >
              <YStack gap="$3">
                <Typography>
                  This is an adaptive modal. It will appear as a dialog on desktop and a sheet on
                  mobile.
                </Typography>
                <XStack gap="$2" justify="flex-end">
                  <Button variant="outline" onPress={() => setAdaptiveModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onPress={() => setAdaptiveModalOpen(false)}>Confirm</Button>
                </XStack>
              </YStack>
            </Modal>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Dialog Modal</Typography>
            <Typography>Always shows as a centered dialog</Typography>
            <Button onPress={() => setDialogModalOpen(true)}>Open Dialog Modal</Button>
            <Modal
              variant="dialog"
              open={dialogModalOpen}
              onOpenChange={setDialogModalOpen}
              title="Dialog Modal"
              description="Always appears as a centered dialog"
            >
              <YStack gap="$3">
                <Typography>
                  This modal always appears as a centered dialog, regardless of screen size.
                </Typography>
                <XStack gap="$2" justify="flex-end">
                  <Button variant="outline" onPress={() => setDialogModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onPress={() => setDialogModalOpen(false)}>Confirm</Button>
                </XStack>
              </YStack>
            </Modal>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Sheet Modal</Typography>
            <Typography>Always shows as a bottom sheet</Typography>
            <Button onPress={() => setSheetModalOpen(true)}>Open Sheet Modal</Button>
            <Modal
              variant="sheet"
              open={sheetModalOpen}
              onOpenChange={setSheetModalOpen}
              title="Sheet Modal"
              description="Always appears as a bottom sheet"
            >
              <YStack gap="$3">
                <Typography>
                  This modal always appears as a bottom sheet with a drag handle.
                </Typography>
                <Button onPress={() => setSheetModalOpen(false)}>Close</Button>
              </YStack>
            </Modal>
          </YStack>
        </YStack>

        {/* Spinner Component Section */}
        <YStack gap="$4">
          <Typography type="title">Spinner Component</Typography>

          <YStack gap="$3">
            <Typography type="subtitle">Sizes</Typography>
            <XStack gap="$4" items="center">
              <YStack items="center" gap="$2">
                <Spinner size="small" />
                <Typography type="caption">Small</Typography>
              </YStack>
              <YStack items="center" gap="$2">
                <Spinner size="medium" />
                <Typography type="caption">Medium</Typography>
              </YStack>
              <YStack items="center" gap="$2">
                <Spinner size="large" />
                <Typography type="caption">Large</Typography>
              </YStack>
            </XStack>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Custom Colors</Typography>
            <XStack gap="$4" items="center">
              <Spinner color="$primary" />
              <Spinner color="$secondary" />
              <Spinner color="$error" />
              <Spinner color="$success" />
            </XStack>
          </YStack>
        </YStack>

        {/* Toast Component Section */}
        <YStack gap="$4">
          <Typography type="title">Toast Component</Typography>

          <YStack gap="$3">
            <Typography type="subtitle">Toast Types</Typography>
            <XStack gap="$2" flexWrap="wrap">
              <Button
                onPress={() =>
                  showToast({
                    type: 'success',
                    title: 'Success',
                    message: 'Operation completed successfully!',
                  })
                }
              >
                Success Toast
              </Button>
              <Button
                priority="secondary"
                onPress={() =>
                  showToast({
                    type: 'error',
                    title: 'Error',
                    message: 'Something went wrong!',
                  })
                }
              >
                Error Toast
              </Button>
              <Button
                variant="outline"
                onPress={() =>
                  showToast({
                    type: 'warning',
                    title: 'Warning',
                    message: 'Please be careful!',
                  })
                }
              >
                Warning Toast
              </Button>
              <Button
                variant="ghost"
                onPress={() =>
                  showToast({
                    type: 'info',
                    title: 'Info',
                    message: 'Here is some information.',
                  })
                }
              >
                Info Toast
              </Button>
            </XStack>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Without Title</Typography>
            <Button
              onPress={() =>
                showToast({
                  type: 'success',
                  message: 'This is a toast without a title',
                })
              }
            >
              Show Simple Toast
            </Button>
          </YStack>

          <YStack gap="$3">
            <Typography type="subtitle">Custom Duration</Typography>
            <Button
              onPress={() =>
                showToast({
                  type: 'info',
                  message: 'This toast stays for 5 seconds',
                  duration: 5000,
                })
              }
            >
              Show 5s Toast
            </Button>
          </YStack>
        </YStack>
      </YStack>
    </ParallaxScrollView>
  );
};

export default UITestScreen;
