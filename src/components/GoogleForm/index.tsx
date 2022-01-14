import { Container } from './GoogleFormStyles';

const GoogleForm = () => {
  return (
    <Container id='start'>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSdTaAo6Y8SqxNliRm6tGde6M0c34hiwSlMdlYDJ11oCeNuukw/viewform?embedded=true'
        width='100%'
        height='1500'
        frameBorder='0'
        marginHeight={0}
        marginWidth={0}
      >
        Chargement…
      </iframe>
    </Container>
  );
};

export default GoogleForm;
