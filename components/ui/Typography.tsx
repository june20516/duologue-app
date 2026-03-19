import { StyleSheet } from 'react-native';
import { Text, TextProps as TamaguiTextProps } from 'tamagui';

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
  },
});

type TypographyVariant =
  | 'regular'
  | 'title'
  | 'subtitle'
  | 'heading'
  | 'semiBold'
  | 'caption'
  | 'tag'
  | 'link';

interface CustomTypographyProps {
  type?: TypographyVariant;
  children: React.ReactNode;
}

export type TypographyProps = TamaguiTextProps & CustomTypographyProps;

const variantProps: Record<TypographyVariant, TamaguiTextProps> = {
  // Body text
  regular: {
    fontSize: '$4',
    color: '$color',
  },
  semiBold: {
    fontSize: '$4',
    fontWeight: '600',
    color: '$color',
  },

  title: {
    fontSize: '$9',
    fontWeight: 'bold',
    color: '$color',
  },
  subtitle: {
    fontSize: '$6',
    fontWeight: 'bold',
    color: '$color',
  },
  heading: {
    fontSize: '$5',
    fontWeight: '600',
    color: '$color',
  },

  caption: {
    fontSize: '$3',
    color: '$colorSoft',
  },
  tag: {
    fontSize: '$2',
    color: '$color',
  },

  // Link
  link: {
    fontSize: '$4',
    color: '$secondary',
    textDecorationLine: 'underline',
  },
};

const Typography: React.FC<TypographyProps> = ({ type = 'regular', children, ...rest }) => {
  return (
    <Text {...variantProps[type]} {...rest} style={[styles.text, rest.style]}>
      {children}
    </Text>
  );
};

export default Typography;
