import { useEffect } from 'react';
import { useNavigate } from 'remix';

type NavigateProps = {
  to: string;
  replace?: boolean;
  state?: any;
};

export const Navigate = ({ to, replace, state }: NavigateProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace, state });
  });
  return null;
};
