import { useState } from 'react';
import { Card } from '../../types/Card';
import { useNavigate } from 'react-router-dom';
import { saveNewCard } from '../../api/cardsQueries';
import { FormContainer, LabelStyled } from './Forms.styled';
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

  const handleChangeTag = (value: string[]) => {
    setCard({ ...card, tags: [...value] });
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

          <Button htmlType="submit" type="primary">Add</Button>
        </FormContainer>
      </form>
    </div>
  );
};
