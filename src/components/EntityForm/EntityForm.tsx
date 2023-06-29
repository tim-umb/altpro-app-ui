/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import {
  Typography,
  TextField,
  FormControl,
  Select,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { EntityFormProps } from 'src/types';
import useEntityForm from 'src/components/EntityForm/useEntityForm';

const EntityForm1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['paper-elevation-4'],
  boxShadow: theme.customShadows['elevation']['4'].boxShadow,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `16px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Title: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Typography1: any = styled(Typography)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['h5'].fontStyle,
  fontFamily: theme.typography['Typography']['h5'].fontFamily,
  fontWeight: theme.typography['Typography']['h5'].fontWeight,
  fontSize: theme.typography['Typography']['h5'].fontSize,
  letterSpacing: theme.typography['Typography']['h5'].letterSpacing,
  lineHeight: theme.typography['Typography']['h5'].lineHeight,
  textDecoration: theme.typography['Typography']['h5'].textDecoration,
  textTransform: theme.typography['Typography']['h5'].textTransform,
}));

const TextField1: any = styled(TextField)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Components']['input-label'].fontStyle,
  fontFamily: theme.typography['Components']['input-label'].fontFamily,
  fontWeight: theme.typography['Components']['input-label'].fontWeight,
  fontSize: theme.typography['Components']['input-label'].fontSize,
  letterSpacing: theme.typography['Components']['input-label'].letterSpacing,
  lineHeight: theme.typography['Components']['input-label'].lineHeight,
  textDecoration: theme.typography['Components']['input-label'].textDecoration,
  textTransform: theme.typography['Components']['input-label'].textTransform,
}));

const Select1: any = styled(FormControl)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Components']['input-label'].fontStyle,
  fontFamily: theme.typography['Components']['input-label'].fontFamily,
  fontWeight: theme.typography['Components']['input-label'].fontWeight,
  fontSize: theme.typography['Components']['input-label'].fontSize,
  letterSpacing: theme.typography['Components']['input-label'].letterSpacing,
  lineHeight: theme.typography['Components']['input-label'].lineHeight,
  textDecoration: theme.typography['Components']['input-label'].textDecoration,
  textTransform: theme.typography['Components']['input-label'].textTransform,
}));

const Row: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Select2: any = styled(FormControl)(({ theme }: any) => ({
  flex: `1`,
  margin: `0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Components']['input-label'].fontStyle,
  fontFamily: theme.typography['Components']['input-label'].fontFamily,
  fontWeight: theme.typography['Components']['input-label'].fontWeight,
  fontSize: theme.typography['Components']['input-label'].fontSize,
  letterSpacing: theme.typography['Components']['input-label'].letterSpacing,
  lineHeight: theme.typography['Components']['input-label'].lineHeight,
  textDecoration: theme.typography['Components']['input-label'].textDecoration,
  textTransform: theme.typography['Components']['input-label'].textTransform,
}));

const TextField2: any = styled(TextField)(({ theme }: any) => ({
  flex: `1`,
  margin: `0px 0px 0px 16px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Components']['input-label'].fontStyle,
  fontFamily: theme.typography['Components']['input-label'].fontFamily,
  fontWeight: theme.typography['Components']['input-label'].fontWeight,
  fontSize: theme.typography['Components']['input-label'].fontSize,
  letterSpacing: theme.typography['Components']['input-label'].letterSpacing,
  lineHeight: theme.typography['Components']['input-label'].lineHeight,
  textDecoration: theme.typography['Components']['input-label'].textDecoration,
  textTransform: theme.typography['Components']['input-label'].textTransform,
}));

const Row1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const Select3: any = styled(FormControl)(({ theme }: any) => ({
  flex: `1`,
  margin: `0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Components']['input-label'].fontStyle,
  fontFamily: theme.typography['Components']['input-label'].fontFamily,
  fontWeight: theme.typography['Components']['input-label'].fontWeight,
  fontSize: theme.typography['Components']['input-label'].fontSize,
  letterSpacing: theme.typography['Components']['input-label'].letterSpacing,
  lineHeight: theme.typography['Components']['input-label'].lineHeight,
  textDecoration: theme.typography['Components']['input-label'].textDecoration,
  textTransform: theme.typography['Components']['input-label'].textTransform,
}));

const Select4: any = styled(FormControl)(({ theme }: any) => ({
  flex: `1`,
  margin: `0px 0px 0px 16px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Components']['input-label'].fontStyle,
  fontFamily: theme.typography['Components']['input-label'].fontFamily,
  fontWeight: theme.typography['Components']['input-label'].fontWeight,
  fontSize: theme.typography['Components']['input-label'].fontSize,
  letterSpacing: theme.typography['Components']['input-label'].letterSpacing,
  lineHeight: theme.typography['Components']['input-label'].lineHeight,
  textDecoration: theme.typography['Components']['input-label'].textDecoration,
  textTransform: theme.typography['Components']['input-label'].textTransform,
}));

const Row2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
});

const FormControlLabel1: any = styled(FormControlLabel)(({ theme }: any) => ({
  flex: `1`,
  margin: `0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body1'].fontStyle,
  fontFamily: theme.typography['Typography']['body1'].fontFamily,
  fontWeight: theme.typography['Typography']['body1'].fontWeight,
  fontSize: theme.typography['Typography']['body1'].fontSize,
  letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
  lineHeight: theme.typography['Typography']['body1'].lineHeight,
  textDecoration: theme.typography['Typography']['body1'].textDecoration,
  textTransform: theme.typography['Typography']['body1'].textTransform,
}));

const TextField3: any = styled(TextField)(({ theme }: any) => ({
  flex: `1`,
  margin: `0px 0px 0px 16px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Components']['input-label'].fontStyle,
  fontFamily: theme.typography['Components']['input-label'].fontFamily,
  fontWeight: theme.typography['Components']['input-label'].fontWeight,
  fontSize: theme.typography['Components']['input-label'].fontSize,
  letterSpacing: theme.typography['Components']['input-label'].letterSpacing,
  lineHeight: theme.typography['Components']['input-label'].lineHeight,
  textDecoration: theme.typography['Components']['input-label'].textDecoration,
  textTransform: theme.typography['Components']['input-label'].textTransform,
}));

function EntityForm(props: EntityFormProps): JSX.Element {
  const { data, fns } = useEntityForm();

  return (
    <EntityForm1 className={props.className}>
      <Title>
        <Typography1 variant={'body1'} gutterBottom={false}>
          {'Info'}
        </Typography1>
      </Title>
      <TextField1
        variant={'outlined'}
        disabled={false}
        size={'small'}
        label={'Account Name'}
        value={data.accountName}
        onChange={fns.setAccountName}
      />
      <Select1
        onChange={fns.setEntityType}
        variant={'outlined'}
        size={'small'}
        disabled={false}
      >
        <InputLabel>{'Entity Type'}</InputLabel>
        <Select label={'Entity Type'} value={data.entityType}>
          {data.entityTypeOptions.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </Select1>
      <Row>
        <Select2
          onChange={fns.setTaxIdType}
          variant={'outlined'}
          size={'small'}
          disabled={false}
        >
          <InputLabel>{'Tax ID Type'}</InputLabel>
          <Select label={'Tax ID Type'} value={data.taxIdType}>
            {data.taxIdTypeOptions.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Select2>
        <TextField2
          variant={'outlined'}
          disabled={false}
          size={'small'}
          label={'Number'}
          value={data.taxNumber}
          onChange={fns.setTaxNumber}
        />
      </Row>
      <Row1>
        <Select3
          onChange={fns.setForeignInvestor}
          variant={'outlined'}
          size={'small'}
          disabled={false}
        >
          <InputLabel>{'Foreign Investor'}</InputLabel>
          <Select label={'Foreign Investor'} value={data.foreignInvestor}>
            {data.foreignInvestorOptions.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Select3>
        <Select4
          onChange={fns.setAccreditation}
          variant={'outlined'}
          size={'small'}
          disabled={false}
        >
          <InputLabel>{'Accreditation'}</InputLabel>
          <Select label={'Accreditation'} value={data.accreditation}>
            {data.accreditationOptions.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Select4>
      </Row1>
      <Row2>
        <FormControlLabel1
          control={
            <Checkbox
              indeterminate={false}
              disabled={false}
              size={'small'}
              color={'primary'}
              defaultChecked={false}
              onChange={fns.setControlPersonExempt}
              value={data.controlPersonExempt}
            ></Checkbox>
          }
          label={'Control Person Exempt'}
        />
        <TextField3
          variant={'outlined'}
          disabled={false}
          size={'small'}
          label={'Exempt Reason'}
          value={data.exemptReason}
          onChange={fns.setExemptReason}
        />
      </Row2>
    </EntityForm1>
  );
}

export default EntityForm;
