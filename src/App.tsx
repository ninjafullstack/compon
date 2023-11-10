import { Avatar } from '@components/Avatar';
import { Badge, badgeVariantsEnum } from '@components/Badge';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { IconsEnum } from '@components/SvgIcon';
import { TagsVariantsEnum, Text, TextColorsEnum } from '@components/Text';
import React, { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="App">
        <Button text={'click me!'} />
        <Text
          text={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
          variant={TagsVariantsEnum.body_m}
          color={TextColorsEnum.red}
        />
        <Avatar
          firstname={'Kirichenko'}
          lastname={'Alexandr'}
          bgColor={'green'}
        />
        <Badge text={badgeVariantsEnum.deactivated} />
        <Input
          label={'Введите пароль'}
          placeholder={'Введите пароль'}
          type={'password'}
          icon={IconsEnum.eye}
          size={'l'}
          errorMessage={'Текст ошибки'}
        />
      </div>
    </div>
  );
}

export default App;
