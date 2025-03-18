import React from 'react';

import TextField from 'components/common/TextField';
import SelectField from 'components/common/SelectField';
import SubFormContainer from 'components/common/SubFormContainer';

import { contactTypeOptions, genderOptions } from 'constants/selectOptions';

const PatientInfoForm: React.FC = () => {
  return (
    <SubFormContainer title="Дані пацієнта">
      <TextField name="surname" label="Прізвище*" gridSize={{ xs: 12, sm: 6, md: 4 }} />
      <TextField name="name" label="Ім'я*" gridSize={{ xs: 12, sm: 6, md: 4 }} />
      <TextField
        name="patronymic"
        label="По батькові*"
        alternativeLabel="Немає по батькові"
        gridSize={{ xs: 12, sm: 6, md: 4 }}
        hasToogle
        additionalHelperText="Немає по батькові згідно документів"
      />
      <TextField
        name="tin"
        label="РНОКПП (ІПН)*"
        alternativeLabel="Немає РНОКПП (ІПН)"
        gridSize={{ xs: 12, sm: 6, md: 4 }}
        hasToogle
        additionalHelperText="Немає ІПН за віком чи має відмітку у паспорті"
      />
      <TextField
        type="text"
        placeholder="13.12.1971"
        name="birthDate"
        label="Дата народження*"
        gridSize={{ xs: 12, sm: 6, md: 4 }}
      />
      <SelectField
        name="gender"
        label="Стать*"
        options={genderOptions}
        gridSize={{ xs: 12, sm: 6, md: 4 }}
      />
      <TextField name="birthCountry" label="Країна народження*" gridSize={{ xs: 12, sm: 6 }} />
      <TextField name="birthPlace" label="Місце народження*" gridSize={{ xs: 12, sm: 6 }} />
      <SelectField
        name="contactType"
        label="Бажаний спосіб зв’язку із пацієнтом"
        options={contactTypeOptions}
        gridSize={{ xs: 12, sm: 6 }}
      />
      <TextField
        name="secretWord"
        label="Секретне слово (не менше 6 символів)*"
        gridSize={{ xs: 12, sm: 6 }}
      />
      <TextField
        name="phone"
        type="phone"
        label="Контактний номер телефону"
        placeholder="+38 (___) ___-__-__"
        gridSize={{ xs: 12, sm: 6 }}
      />
      <TextField
        name="email"
        label="Адреса електроної пошти"
        placeholder="example@example.com"
        gridSize={{ xs: 12, sm: 6 }}
      />
    </SubFormContainer>
  );
};

export default PatientInfoForm;
