import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';

import textBubble from '~assets/3D-assets/text-bubble.png';
import logo from '~assets/3D-assets/logo-2.png';

import TextInput from '~atoms/TextInput';
import EmailInput from '~atoms/EmailInput';
import NumberInput from '~atoms/NumberInput';
import TextareaInput from '~atoms/TextArea';

const ContactSection = () => {
  const { t } = useTranslation('ContactSection');
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  });
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <section className={styles.contactSection}>
      <Container maxWidth="lg">
        <div className={styles.contactSection__title}>
          <h1>{t('title')}</h1>
          <img src={textBubble} alt="title-img" />
        </div>
        <div className={styles.contactSection__formContainer}>
          <div className={styles.contactSection__formContainer__image}>
            <img src={logo} alt="portfolio-logo" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className={styles.contactSection__formContainer__form}
            autoComplete="off"
            noValidate
          >
            <Grid container direction="row" justify="flex-end" alignItems="center" spacing={4}>
              <Grid item xs={12} sm={12} lg={6}>
                <TextInput
                  inputRef={register}
                  id="firstName"
                  label="Nome"
                  name="firstName"
                  error={'firstName' in errors}
                  errorMessage={errors.firstName && errors.firstName.message}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <TextInput
                  inputRef={register}
                  id="lastName"
                  label="Sobrenome"
                  name="lastName"
                  error={'lastName' in errors}
                  errorMessage={errors.lastName && errors.lastName.message}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <EmailInput
                  inputRef={register}
                  id="email"
                  label="Endereço de Email"
                  name="email"
                  error={'email' in errors}
                  errorMessage={errors.email && errors.email.message}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <NumberInput
                  inputRef={register}
                  label="Telefone"
                  name="phone"
                  error={'phone' in errors}
                  errorMessage={errors.phone && errors.phone.message}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextareaInput inputRef={register} label="Mensagem" name="message" />
              </Grid>
              <Grid item container justify="flex-end" xs={12} sm={12} lg={12}>
                <button className={styles.contactSection__formContainer__form_submitButton} type="submit">
                  Enviar mensagem
                </button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
