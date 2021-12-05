import { FC } from 'react';
import { Progress, Bar } from './ProgressBar.styled';

type Props = {
  current: number;
  all: number;
};

export const ProgressBar: FC<Props> = ({ current, all }) => {
  return (
    <Bar>
      <Progress progress={((current + 1) * 100) / all}> </Progress>
    </Bar>

  );
};
