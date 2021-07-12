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

const TextArea = ({ label, name, error, errorMessage, id, inputRef }: Props) => {
  return (
    <TextField
      inputRef={inputRef({
        required: 'Este campo é obrigatório.'
      })}
      style={{ transition: 'all .3s' }}
      label={label}
      name={name}
      error={error}
      helperText={error && errorMessage}
      id={id}
      multiline
      fullWidth
      rows={12}
      rowsMax={Infinity}
      variant="outlined"
      margin="normal"
    />
  );
};

export default TextArea;
