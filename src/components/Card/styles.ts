import { css } from 'emotion'
import { colors } from '../../assets/theme'

export const styles = {
  card: css`
    height: 500px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid ${colors.border};
    background: ${colors.white};
  `,
  title: css`
    font-size: 20px;
  `,
  cardContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
}
