import { Text, TextProps as TamaguiTextProps } from 'tamagui';

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
    lineHeight: '$4',
    color: '$color',
  },
  semiBold: {
    fontSize: '$4',
    lineHeight: '$4',
    fontWeight: '600',
    color: '$color',
  },

  title: {
    fontSize: '$9',
    fontWeight: 'bold',
    lineHeight: '$9',
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
    lineHeight: '$5',
    color: '$color',
  },

  caption: {
    fontSize: '$3',
    lineHeight: '$3',
    color: '$colorSoft',
  },
  tag: {
    fontSize: '$2',
    lineHeight: '$2',
    color: '$color',
  },

  // Link
  link: {
    fontSize: '$4',
    lineHeight: '$6',
    color: '$secondary',
    textDecorationLine: 'underline',
  },
};

const Typography: React.FC<TypographyProps> = ({ type = 'regular', children, ...rest }) => {
  return (
    <Text {...rest} {...variantProps[type]}>
      {children}
    </Text>
  );
};

export default Typography;
