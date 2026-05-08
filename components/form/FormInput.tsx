import { Controller, Control, FieldValues, Path } from 'react-hook-form';

import Input, { InputProps } from '@/components/ui/Input';

interface FormInputProps<T extends FieldValues> extends Omit<InputProps, 'errorText'> {
  control: Control<T>;
  name: Path<T>;
}

const FormInput = <T extends FieldValues>({
  control,
  name,
  ...inputProps
}: FormInputProps<T>): React.ReactElement => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <Input
          {...inputProps}
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          errorText={error?.message}
          variant={error ? 'error' : 'default'}
        />
      )}
    />
  );
};

export default FormInput;
