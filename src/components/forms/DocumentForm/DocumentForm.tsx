import React from 'react';

import TextField from 'components/common/TextField';
import SelectField from 'components/common/SelectField';
import SubFormContainer from 'components/common/SubFormContainer';

import { documentTypeOptions } from 'constants/selectOptions';

const DocumentForm: React.FC = () => {
  return (
    <SubFormContainer title="Документ, що посвідчує особу">
      <SelectField
        name="documentType"
        label="Тип документу*"
        options={documentTypeOptions}
        gridSize={{ xs: 12, sm: 6 }}
      />
      <TextField
        name="passportNumber"
        label="Серія (за наявності), номер*"
        gridSize={{ xs: 12, sm: 6 }}
      />
      <TextField
        name="issueDate"
        label="Коли видано*"
        placeholder="31.12.1971"
        gridSize={{ xs: 12, sm: 6 }}
      />
      <TextField
        name="validUntil"
        label="Діє до"
        placeholder="31.12.2050"
        gridSize={{ xs: 12, sm: 6 }}
      />
      <TextField
        name="issuedBy"
        label="Ким видано*"
        gridSize={{ xs: 12, sm: 6 }}
        type="textarea"
        multiline
        minRows={1}
        maxRows={2}
      />
      <TextField
        name="recordNumber"
        label="Запис № (УНЗР)"
        placeholder="РРРРММДД-ХХХХХ"
        gridSize={{ xs: 12, sm: 6 }}
        additionalHelperText="Вкажіть унікальний номер запису в Демографічному реєстрі (Запис №)"
      />
    </SubFormContainer>
  );
};

export default DocumentForm;
