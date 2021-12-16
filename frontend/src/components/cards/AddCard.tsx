import { useState } from 'react';
import { Card } from '../../types/Card';
import { useNavigate } from 'react-router-dom';
import { saveNewCard } from '../../api/cardsQueries';
import { ButtonStyled, FormContainer, LabelStyled } from './Forms.styled';
import { getTags } from '../../api/cardsQueries';
import { useQuery } from 'react-query';
import { Button, Input, Select } from 'antd';

const { Option } = Select;

export const AddCard = () => {
  const navigate = useNavigate();

  const initialState = {
    sideA: '',
    sideB: '',
    tags: [],
  };
  const [card, setCard] = useState<Card>(initialState);
  const { data: tags } = useQuery<string[]>('tags', getTags);
  console.log('tags: ', tags);

  const handleChangeTag = (value: string[]) => {
    console.log('value: ', value);
    setCard({ ...card, tags: [...card.tags, ...value] });
    console.log('card: ', card);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNewCard(card);
          navigate('/');
        }}
      >
        <FormContainer>
          <LabelStyled>
            Side A:
            <Input
              placeholder="Side A"
              required
              onChange={(e) => setCard({ ...card, sideA: e.target.value })}
            />
          </LabelStyled>
          <LabelStyled>
            Side A:
            <Input
              placeholder="Side B"
              required
              onChange={(e) => setCard({ ...card, sideB: e.target.value })}
            />
          </LabelStyled>

          <LabelStyled>
            Tags:
            <Select
              mode="tags"
              placeholder="Tags"
              onChange={handleChangeTag}
            >
              {tags?.map((tag) => (
                <Option value={tag} key={tag}>
                  {tag}
                </Option>
              ))}
            </Select>
          </LabelStyled>

          <ButtonStyled type="submit">Add</ButtonStyled>


          <Button type="primary">Primary Button</Button>
        </FormContainer>
      </form>
    </div>
  );
};
