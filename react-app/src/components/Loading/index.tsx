import { LoadingContainer } from '../../styles/loading';

interface iLoadingProps {
  className?: string;
}

export function Loading({ className }: iLoadingProps) {
  return (
    <LoadingContainer className={className}>
      <div></div>
      <div></div>
      <div></div>
    </LoadingContainer>
  );
}
