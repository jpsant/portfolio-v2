import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
  error?: boolean;
  errorMessage?: string;
  inputRef: ReturnType<typeof useForm>['register'];
  id?: string;
};

const EmailInput = ({ label, name, error, errorMessage, id, inputRef }: Props) => {
  return (
    <TextField
      inputRef={inputRef({
        required: 'Este campo é obrigatório.',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Digite um e-mail válido'
        }
      })}
      error={error}
      helperText={error && errorMessage}
      label={label}
      name={name}
      id={id}
      fullWidth
      type="email"
      margin="normal"
      variant="standard"
    />
  );
};

export default EmailInput;
