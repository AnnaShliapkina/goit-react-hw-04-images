import { Circles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Circles color="red" height={80} width={80} />
    </LoaderContainer>
  );
};
