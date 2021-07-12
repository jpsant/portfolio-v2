import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

type Props = {
  inputRef: ReturnType<typeof useForm>['register'];
  label: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  defaultValue?: string;
  pattern?: string;
  name: string;
};

const NumberInput = ({ label, name, error, errorMessage, disabled, defaultValue, inputRef, pattern }: Props) => {
  return (
    <InputMask maskChar={null} defaultValue={defaultValue} disabled={disabled} mask={pattern || ''}>
      {() => (
        <TextField
          inputRef={inputRef({
            required: 'Este campo é obrigatório.'
          })}
          fullWidth
          disabled={disabled}
          name={name}
          label={label}
          error={error}
          helperText={error && errorMessage}
          defaultValue={defaultValue}
          margin="normal"
          variant="standard"
        />
      )}
    </InputMask>
  );
};

export default NumberInput;
